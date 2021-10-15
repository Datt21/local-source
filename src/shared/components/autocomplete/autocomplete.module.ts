import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  imports: [
    CommonModule,
    AutocompleteLibModule
  ],
  declarations: [AutocompleteComponent],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }
