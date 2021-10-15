import { IPager } from 'src/shared/models/IPager';

export class SearchSettingAccount implements IPager {
  page: number;
  limit: number;
  code: string;
  name: string;
  department: string;
  constructor() {
    this.code = '';
    this.name = '';
    this.department = '';
  }
}
