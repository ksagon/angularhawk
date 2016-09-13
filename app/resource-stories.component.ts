import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ResourceService } from './resource.service';
import {Story} from "./story";

@Component({
  selector: 'hawk-resource-stories',
  templateUrl: 'app/resource-stories.component.html'
})
export class ResourceStoryComponent implements OnInit {
  stories: Story[];

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let resourceId = +params['resourceId'];
      this.resourceService.getResourceStories(resourceId.toString())
        .then(stories => this.stories = stories);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
