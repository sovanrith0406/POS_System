import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
      path: '',
      component: DashboardComponent,
  },
];

@NgModule({
    declarations: [
      DashboardComponent,
    ],
    imports: [
      RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardModule {}
