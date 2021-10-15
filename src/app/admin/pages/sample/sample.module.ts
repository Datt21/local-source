import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { AutocompleteModule } from '@shared/components/autocomplete/autocomplete.module';
import { SharedModule } from '@shared/shared.module';
import { AppTranslationModule } from '@app/app.translation.module';
import { SampleAutocompleteComponent } from './components/sample-autocomplete/sample-autocomplete.component';


@NgModule({
  declarations: [SampleAutocompleteComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    AutocompleteModule,
    SharedModule,
    AppTranslationModule,
  ]
})
export class SampleModule { }
