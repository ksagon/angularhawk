import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceComponent }      from './resources.component';
import { ResourceDetailComponent }      from './resource-detail.component';
import { TeamComponent }      from './teams.component';
import {ResourceStoryComponent} from "./resource-stories.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/resources',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    component: ResourceComponent
  },
  {
    path: 'teams',
    component: TeamComponent
  },
  {
    path: 'resources/:resourceId/stories',
    component: ResourceStoryComponent,
  },
  {
    path: 'resources/:resourceId',
    component: ResourceDetailComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
