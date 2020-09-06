import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ResourceService } from './resource.service';
import { Resource } from "./resource";
import { Story } from "./story";

@Component({
  selector: 'hawk-resource-detail',
  templateUrl: 'app/resource-detail.component.html'
})
export class ResourceDetailComponent implements OnInit {
  resource: Resource;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let resourceId = params['resourceId'];
      this.getResource(resourceId);
    });
  }

  getResource(resourceId: string): void {
    this.resourceService.getResource(resourceId).then(resource => this.populateResource(resource));
  }

  populateResource(resource: Resource): void {
    this.resource = resource;
    this.resourceService.getResourceStories(resource.modelId).then(stories => this.populateStoryAverages(stories));
  }

  populateStoryAverages(stories: Story[]): void {
    let averageDevDays = 0;
    let averageQADays = 0;

    for (let story of stories ) {
      averageDevDays += story.devDays / stories.length;
      averageQADays += story.qaDays / stories.length;
    }

    this.resource.averageDevDays = averageDevDays;
    this.resource.averageQADays = averageQADays;
  }

  gotoResourceStories(resourceId: string): void {
    let link = ['/resources', resourceId, 'stories'];
    this.router.navigate(link);
  }
}
