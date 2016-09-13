import { Injectable } from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PagedTeams } from './paged-teams';
import { Team } from './team';
import { Link } from './link';
import { Page } from './page';

@Injectable()
export class TeamService {
  private teamsUrl = 'http://localhost:8080/agile/api/teams?size=50';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTeams(): Promise<PagedTeams> {
    return this.http.get(this.teamsUrl)
      .toPromise()
      .then(response => this.toTeams(response))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private toTeams(response: any): PagedTeams {
    var pagedTeams = new PagedTeams();
    pagedTeams.content = response.json().content as Team[];
    pagedTeams.links = response.json().links as Link[];
    pagedTeams.page = response.json().page as Page;

    return pagedTeams;
  }
}
