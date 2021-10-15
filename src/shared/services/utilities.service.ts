import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomStorageService } from '@shared/custom-storage';
import { TranslateService } from '@ngx-translate/core';
import { CompressImageService } from './compress-image.service';
import { take } from 'rxjs/internal/operators';
import { Constants } from '../models/constants';
import * as moment from 'moment';

@Injectable()
export class Utilities {
  constructor(
    private translate: TranslateService,
    private compressImage: CompressImageService,
    private customStorageService: CustomStorageService
  ) {
  }

  protected base = 'claim';
  public maskDate = [/[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
  lpad(padString, length, value) {
    let str = value.toString();
    while (str.length < length) { str = padString + str; }
    return str;
  }

  /*
  * getURL API
  * @return: {String}
  */
  getUrlServerHost() {
    return `${environment.endpoint}`;
  }

  /*
  * regex number
  * @param: {any} input
  * @return: {boolean}
  */
  isNumber(input: any): boolean {
    const numberExtension = new RegExp('[^0-9]');
    let check = true;
    if (input) {
      check = !numberExtension.test(input);
    }
    return check;
  }

  /*
  * check number
  * @param: {any} value
  * @return: {boolean}
  */
  isNumberValue(value: any): boolean {
    return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
  }

  /*
  * regex Email
  * @param: {String} email address
  * @return: {boolean}
  */
  isEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /*
  * format Price
  * @param: {number}
  * @return: {number}
  */
  formatPrice(input) {
    if (input) {
      input += '';
      const output = input.replace(/\./g, '');
      return output.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return 0;
  }

  /*
  * get current User from cookie
  * @return: {AuthorizationModel}
  */
  currentUser() {
    return this.customStorageService.getCurrentUser();
  }

  /*
  * Check role
  * @param: {String} Role
  * @return: {boolean}true/false
  */
  checkRole(textRole: string): boolean {
    return textRole === this.currentUser().role;
  }

  /*
  * Check role admin
  * @return: {boolean}true/false
  */
  isAdmin(): boolean {
    return this.checkRole('Admin');
  }

  /**
   * get user logged role
   * @return: string
   */
  getRole(): string | string[] {
    return this.currentUser().role;
  }

  /*
  * Copy object
  * @param: {Object}
  * @return: {Object}
  */
  copyObject(input: any) {
    return Object.assign({}, input);
  }

  /*
  * Copy Array
  * @param: {Array}
  * @return: {Array}
  */
  copyArray(arrInput: any) {
    return [...arrInput];
  }

  /*
  * get Text from i18n
  * @param: {String} Key
  * @return: {Promise<string>}
  */
  async trans(key: string): Promise<string> {
    return await this.translate.get(key).toPromise();
  }

  uploadImageWithCompress(event) {
    const image: File = event.target.files[0];
    this.compressImage.compress(image)
      .pipe(take(1))
      .subscribe(compressedImage => {
        // TODO: Now you can do upload the compressed image
      });
  }

  formatDateToString(date: Date): string {
    if (moment(date).isValid()) {
      return moment(date).format(Constants.FORMAT_DATE);
    }

    return null;
  }

  isDate(m: any): boolean {
    return moment.isDate(m);
  }

  convertToString(value: any): string {
    if (typeof value === 'string') {
      return value.trim();
    }

    if (typeof value === 'number') {
      return String(value);
    }

    return null;
  }

  convertToNumber(value: any): number {
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string' && !!value && !isNaN(Number(value))) {
      return Number(value);
    }

    return null;
  }

  convertToDate(value: any): Date {
    if (!!value && moment(value, [
      moment.ISO_8601,
      moment.RFC_2822,
      'YYYY-MM-DD',
      'YYYY-MM-D',
      'YYYY-M-DD',
      'YYYY-M-D',
      'YYYY/MM/DD',
      'YYYY/MM/D',
      'YYYY/M/DD',
      'YYYY/M/D'
    ], true).isValid()) {
      return new Date(value);
    }

    return null;
  }

  getStartTimeOfDay(value: any): Date {
    if (this.convertToDate(value)) {
      return moment(value).startOf('day').toDate();
    }

    return null;
  }
}
