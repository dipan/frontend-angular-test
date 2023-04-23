import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginV1Component } from './components/login-v1/login-v1.component';
import { PublicComponent } from './public.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';
import { SpinnerV1Component } from './components/spinner-v1/spinner-v1.component';
import { SpinnerV2Component } from './components/spinner-v2/spinner-v2.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'loginV1', component: LoginV1Component },
      { path: 'loginV2', component: LoginV2Component },
      { path: 'spinnerV1', component: SpinnerV1Component },
      { path: 'spinnerV2', component: SpinnerV2Component },
    ],
  },
];

@NgModule({
  declarations: [
    PublicComponent,
    LoginV1Component,
    LoginV2Component,
    SpinnerV1Component,
    SpinnerV2Component,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
