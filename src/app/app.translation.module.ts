import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

export function createTranslateLoader(http: HttpClient) {
  const time = moment();
  const suffix = `.json?v=${time.format('YYYYMMDDhhmm')}`; // Fix caching issue
  return new TranslateHttpLoader(http, './assets/i18n/ja/', suffix);
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]},
};
@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService],
})
export class AppTranslationModule {
  constructor(translate: TranslateService) {
    const lang = 'ja';
    translate.addLangs([lang]);
    translate.setDefaultLang(lang);
    translate.use(lang);
  }
}
