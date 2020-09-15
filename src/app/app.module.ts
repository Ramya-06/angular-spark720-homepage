import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WorkflowModule } from './workflow/workflow.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomePageComponent } from './home-page.component';
import { WorkflowCardComponent } from './workflow-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, WorkflowModule, DashboardModule, AppRoutingModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, HomePageComponent, WorkflowCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
