import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { TableComponent } from './component/table/table.component';
import { SelectOptionComponent } from './component/select-option/select-option.component';
import { BannerComponent } from './component/banner/banner.component';
import { ScrollSpyDirective } from './config/scroll-spy.directive';
import { CustomSidenavComponent } from './component/custom-sidenav/custom-sidenav.component';
import { BannerEmptyComponent } from './component/banner-empty/banner-empty.component';
import { TableGenericComponent } from './component/table-generic/table-generic.component';
import { BannarTitleComponent } from './component/bannar-title/bannar-title.component';
import { BadgeComponent } from './component/badge/badge.component';
import { ViewTitleComponent } from './component/custom-sidenav/view-title/view-title.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { MaterialModule } from './material.module';
import { NareshSidenavComponent } from './component/naresh-sidenav/naresh-sidenav.component';
import { InformationCardComponent } from './component/information-card/information-card.component';
import { KeyValueListPipe } from './pipes/key-value-list.pipe';
import { FilterTypeComponent } from './component/filter-type/filter-type.component';
import { CardRowComponent } from './component/card-row/card-row.component';
import { SearchInputComponent } from './component/search-input/search-input.component';
import { BannerV1Component } from './component/banner-v1/banner-v1.component';
import { SearchBarWithOptionComponent } from './component/search-bar-with-option/search-bar-with-option.component';
import { PublicModule } from './modules/public/public.module';
import { NavbarV1Component } from './component/navbar-v1/navbar-v1.component';

const routes: Routes = [{ path: 'banner', component: BannerComponent }];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CustomSidenavComponent,
    SearchBarComponent,
    SelectOptionComponent,
    ScrollSpyDirective,
    TableComponent,
    BannerEmptyComponent,
    TableGenericComponent,
    BannarTitleComponent,
    BadgeComponent,
    ViewTitleComponent,
    UserFormComponent,
    NareshSidenavComponent,
    InformationCardComponent,
    KeyValueListPipe,
    FilterTypeComponent,
    CardRowComponent,
    SearchInputComponent,
    BannerV1Component,
    SearchBarWithOptionComponent,
    NavbarV1Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    PublicModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor');
  }
}
