import { IPager } from 'src/shared/models/IPager';

export class SearchSettingPayment implements IPager {
  page: number;
  limit: number;
  customerCode?: string;
  customerName?: string;
  warehouseCode?: string;
  warehouseName?: string;
  constructor() {
    this.customerCode = '';
    this.customerName = '';
    this.warehouseCode = '';
    this.warehouseName = '';
  }
}
