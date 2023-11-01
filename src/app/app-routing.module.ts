import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CompanyComponent } from './pages/company/company.component';
import { FrameworkComponent } from './pages/frameworkSetup/framework.component';
import { UserComponent } from './pages/user/user.component';
import { FrameworkPageComponent } from './pages/framework-page/framework-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'company', component: CompanyComponent, data: { breadcrumb: 'Company Setup' } },
  { path: 'framework', component: FrameworkComponent, data: { breadcrumb: 'Framework Setup' } },
  { path: 'users', component: UserComponent, data: { breadcrumb: 'User' } },
  {
    path: 'frameworks',
    children: [
      { path: ':frameworkName', component: FrameworkPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }