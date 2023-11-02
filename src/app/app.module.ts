import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SideNavComponent } from './shared/layout/side-nav/side-nav.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CompanyComponent } from './pages/maintenance/company/company.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { FrameworkComponent } from './pages/maintenance/frameworkSetup/framework.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { TableComponent } from './components/MaintenanceFramework/maintenance-framework-table/table.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { UserComponent } from './pages/maintenance/user/user.component';
import { UserListComponent } from './components/MaintenanceUser/user-list/user-list.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AddUserFormComponent } from './components/MaintenanceUser/add-form/add-user-form.component';
import { UploadFrameworkComponent } from './components/MaintenanceFramework/upload-framework/upload-framework.component';
import { EditFrameworkComponent } from './components/MaintenanceFramework/edit-framework/edit-framework.component';
import { ResetPwdComponent } from './components/MaintenanceUser/reset-pwd/reset-pwd.component';
import { EditUserComponent } from './components/MaintenanceUser/edit-user/edit-user.component';
import { MaintenanceFrameworkFormComponent } from './components/MaintenanceFramework/maintenance-framework-form/maintenance-framework-form.component';
import { MaintenanceUserFormComponent } from './components/MaintenanceUser/maintenance-user-form/maintenance-user-form.component';
import { FrameworkPageComponent } from './pages/framework/framework-page/framework-page.component';
import { FrameworkTabsComponent } from './shared/framework/framework-tabs/framework-tabs.component';
import { FrameworkTitleComponent } from './shared/framework/framework-title/framework-title.component';
import { FrameworkDomainFormComponent } from './components/framework/domain/framework-domain-form/framework-domain-form.component';
import { FrameworkDomainEditComponent } from './components/framework/domain/framework-domain-edit/framework-domain-edit.component';
import { UploadFormComponent } from './shared/upload-form/upload-form.component';
import { FrameworkControlsAddComponent } from './components/framework/controls/framework-controls-add/framework-controls-add.component';
import { FrameworkControlsFormComponent } from './components/framework/domain/framework-controls-form/framework-controls-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ActiveRoutePipe } from './active-route.pipe';
import { DomainTableComponent } from './components/framework/domain/domain-table/domain-table.component';
import { DomainComponent } from './pages/framework/domain/domain.component';
import { FrameworkHeaderComponent } from './shared/framework/framework-header/framework-header.component';
import { ControlsTableComponent } from './components/framework/controls/controls-table/controls-table.component';
import { ControlsComponent } from './pages/framework/controls/controls.component';
import { AssessmentComponent } from './pages/framework/assessment/assessment.component';
import { AssesmentTableComponent } from './components/framework/assessments/assesment-table/assesment-table.component';
import { AssessmentFormComponent } from './components/framework/assessments/assessment-form/assessment-form.component';
import { ControlFormComponent } from './components/framework/controls/control-form/control-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AdminLayoutComponent,
    DashboardComponent,
    BreadcrumbComponent,
    CompanyComponent,
    PageTitleComponent,
    CompanyFormComponent,
    FrameworkComponent,
    PageHeaderComponent,
    TableComponent,
    PaginationComponent,
    UserComponent,
    UserListComponent,
    ModalComponent,
    AddUserFormComponent,
    UploadFrameworkComponent,
    EditFrameworkComponent,
    ResetPwdComponent,
    EditUserComponent,
    MaintenanceFrameworkFormComponent,
    MaintenanceUserFormComponent,
    FrameworkPageComponent,
    FrameworkTabsComponent,
    FrameworkTitleComponent,
    FrameworkDomainFormComponent,
    FrameworkDomainEditComponent,
    UploadFormComponent,
    FrameworkControlsAddComponent,
    FrameworkControlsFormComponent,
    ActiveRoutePipe,
    DomainTableComponent,
    DomainComponent,
    FrameworkHeaderComponent,
    ControlsTableComponent,
    ControlsComponent,
    AssessmentComponent,
    AssesmentTableComponent,
    AssessmentFormComponent,
    ControlFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
