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
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CompanyComponent } from './pages/company/company.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { NgxIntlTelInputModule } from '@khazii/ngx-intl-tel-input';
import { FrameworkComponent } from './pages/framework/framework.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { UploadFrameworkComponent } from './components/upload-framework/upload-framework.component';
import { EditFrameworkComponent } from './components/edit-framework/edit-framework.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AdminLayoutComponent,
    DashboardComponent,
    BreadcrumbComponent,
    MaintenanceComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([]),
    NgxIntlTelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
