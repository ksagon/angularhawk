import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ResourceService } from './resource.service';
import { ResourceComponent } from './resources.component';
import { ResourceStoryComponent } from './resource-stories.component';
import { TeamService } from './team.service';
import { TeamComponent } from './teams.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ResourceComponent,
    ResourceStoryComponent,
    TeamComponent
  ],
  providers: [
    ResourceService,
    TeamService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
