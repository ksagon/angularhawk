import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams}    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PagedResources } from './paged-resources';
import { Resource } from './resource';
import { Link } from './link';
import { Page } from './page';
import {Story} from "./story";

@Injectable()
export class ResourceService {
  private defaultPageSize = 50;
  private resourcesUrl = 'http://localhost:8080/agile/api/resources';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getResources(): Promise<PagedResources> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('size', this.defaultPageSize.toString());

    const url = `${this.resourcesUrl}`;
    return this.http.get(url, { search: params })
      .toPromise()
      .then(response => this.toResources(response))
      .catch(this.handleError);
  }

  getResource(resourceId: string): Promise<Resource> {
    const url = `${this.resourcesUrl}/${resourceId}`;
    return this.http.get(url)
        .toPromise()
        .then(response => this.toResource(response))
        .catch(this.handleError);
  }

  getResourceStories(resourceId: string): Promise<Story[]> {
    const url = `${this.resourcesUrl}/${resourceId}/stories`;
    return this.http.get(url)
      .toPromise()
      .then(response => this.toResourceStories(response))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private toResources(response: any): PagedResources {
    var pagedResources = new PagedResources();
    pagedResources.content = response.json().content as Resource[];
    pagedResources.links = response.json().links as Link[];
    pagedResources.page = response.json().page as Page;

    return pagedResources;
  }

  private toResource(response: any): Resource {
    var resource = response.json() as Resource;

    return resource;
  }

  private toResourceStories(response: any): Story[] {
    var stories = response.json() as Story[];

    return stories;
  }
}
