import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home-page',
   
    children: [
      {
        path: '',
         component: HomePageComponent
      },
      {
        path: 'workflow',
        component: WorkflowComponent
      },
       {
        path: 'dashboard',
        component: DashboardComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
