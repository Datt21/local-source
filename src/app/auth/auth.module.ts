import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AppTranslationModule } from '../app.translation.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './services/account-mns.service';
import { AccountExternalService } from './services/account-external.service';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { AuthLoginV3Component } from './pages/login-common-authen/login.component';

@NgModule({
  declarations: [
    AuthLoginV3Component,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AppTranslationModule,
    SharedModule
  ],
  providers: [
    TranslateService,
    AuthService,
    AccountService,
    AccountExternalService
  ]
})
export class AuthModule { }
