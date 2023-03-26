import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginV1Component } from './components/login-v1/login-v1.component';
import { PublicComponent } from './public.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'loginV1', component: LoginV1Component },
      { path: 'loginV2', component: LoginV2Component },
    ],
  },
];

@NgModule({
  declarations: [PublicComponent, LoginV1Component, LoginV2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
