import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path:":yearFilter",
    component: DashboardComponent
  },
  {
    path:":yearFilter/:successLaunch",
    component: DashboardComponent
  },
  {
    path:":yearFilter/:successLaunch/:successLand",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
