import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

/*import { DatePicker } from 'ng2-datepicker/ng2-datepicker';*/

import { AppComponent }  from './app.component';
import { ResourceService } from './resource.service';
import { ResourceDetailComponent } from './resource-detail.component';
import { ResourceComponent } from './resources.component';
import { ResourceStoryComponent } from './resource-stories.component';
import { TeamService } from './team.service';
import { TeamComponent } from './teams.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    /*DatePicker,*/
    ResourceComponent,
    ResourceDetailComponent,
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
