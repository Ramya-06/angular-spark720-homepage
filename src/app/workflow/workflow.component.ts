import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'workflow-app',
  templateUrl: './workflow.component.html',
  styleUrls: [ './workflow.component.scss' ]
})
export class WorkflowComponent  {
   constructor() {
    console.log("Workflow");
  }
  name = 'Angular ' + VERSION.major;
}
