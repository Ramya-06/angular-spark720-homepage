import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './workflow.component';


const routes: Routes = [
  {
    path: 'workflow',
     component: WorkflowComponent
  //  children: [
  //     {
  //       path: '',
  //       component: WorkflowComponent
  //     }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule {}
