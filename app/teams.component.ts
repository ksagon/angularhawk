import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataTableDirectives} from 'angular2-datatable/datatable';

import { PagedTeams } from './paged-teams';
import { TeamService } from './team.service';

@Component({
  selector: 'hawk-teams',
  templateUrl: 'app/teams.component.html'
})
export class TeamComponent implements OnInit {
  pagedTeams: PagedTeams;

  constructor(
    private router: Router,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().then(pagedTeams => this.pagedTeams = pagedTeams);
  }
}
