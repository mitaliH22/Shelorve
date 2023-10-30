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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
