import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { WorkflowComponent } from './workflow.component';
import { WorkflowRoutingModule } from './workflow-routing.module';

@NgModule({
  imports:      [ WorkflowRoutingModule, BrowserModule, FormsModule, MatCardModule ],
  declarations: [ WorkflowComponent ]
})
export class WorkflowModule{}