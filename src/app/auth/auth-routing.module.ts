import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginV3Component } from './pages/login-common-authen/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginV3Component
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
