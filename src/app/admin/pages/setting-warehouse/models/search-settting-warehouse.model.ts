import { IPager } from 'src/shared/models/IPager';

export class SearchSettingWarehouse implements IPager {
  page: number;
  limit: number;
  code: string;
  name: string;
  warehouseAbbreviation: string;
  constructor() {
    this.code = '';
    this.name = '';
  }
}
