import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSettingProductComponent } from './components/list-setting-product/list-setting-product.component';


const routes: Routes = [
  {
    path: '',
    component: ListSettingProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingProductRoutingModule { }
