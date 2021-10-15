import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSettingWarehouseComponent } from './components/list-setting-warehouse/list-setting-warehouse.component';


const routes: Routes = [
  {
    path: '',
    component: ListSettingWarehouseComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingWarehouseRoutingModule { }
