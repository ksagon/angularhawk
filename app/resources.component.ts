import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataTableDirectives} from 'angular2-datatable/datatable';

import { PagedResources } from './paged-resources';
import { ResourceService } from './resource.service';
import {Resource} from "./resource";

@Component({
  selector: 'hawk-resources',
  templateUrl: 'app/resources.component.html'
})
export class ResourceComponent implements OnInit {
  pagedResources: PagedResources;

  constructor(
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources().then(pagedResources => this.pagedResources = pagedResources);
  }

  gotoResource(resourceId: string): void {
    let link = ['/resources', resourceId];
    this.router.navigate(link);
  }

  gotoResourceStories(resourceId: string): void {
    let link = ['/resources', resourceId, 'stories'];
    this.router.navigate(link);
  }
}
