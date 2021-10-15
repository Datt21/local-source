import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleAutocompleteComponent } from './components/sample-autocomplete/sample-autocomplete.component';


const routes: Routes = [
  {
    path: 'auto-complete',
    component: SampleAutocompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
