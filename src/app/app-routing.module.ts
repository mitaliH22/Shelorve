import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompanyComponent } from './pages/maintenance/company/company.component';
import { FrameworkComponent } from './pages/maintenance/frameworkSetup/framework.component';
import { UserComponent } from './pages/maintenance/user/user.component';
import { FrameworkPageComponent } from './pages/framework/framework-page/framework-page.component';
import { DomainComponent } from './pages/framework/domain/domain.component';
import { ControlsComponent } from './pages/framework/controls/controls.component';
import { AssessmentComponent } from './pages/framework/assessment/assessment.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'company',
    component: CompanyComponent,
    data: { breadcrumb: 'Company Setup' },
  },
  {
    path: 'framework',
    component: FrameworkComponent,
    data: { breadcrumb: 'Framework Setup' },
  },
  { path: 'users', component: UserComponent, data: { breadcrumb: 'User' } },
  {
    path: 'frameworks/:id/:slug',
    children: [
      {
        path: '',
        component: DomainComponent,
      },
      {
        path: 'controls',
        component: ControlsComponent,
      },
      {
        path: 'domain',
        component: DomainComponent,
      },
      {
        path: 'assessments',
        component: AssessmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }