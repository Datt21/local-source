import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSettingAccountComponent } from './components/list-setting-account/list-setting-account.component';


const routes: Routes = [
  {
    path: '',
    component: ListSettingAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingAccountRoutingModule { }
