import { NgModule } from '@angular/core';
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

const routes: Routes = [
  { path: '', component: SearchBarComponent },
  { path: 'banner', component: BannerComponent },
];

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor');
  }
}
