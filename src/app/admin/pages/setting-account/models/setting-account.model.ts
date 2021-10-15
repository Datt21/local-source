export class SettingAccount {
  code: string;
  name: string;
  email: string;
  role: string;
  departmentCode: string;
  departmentName: string;
  warehouseCode: string;
  warehouseName: string;
  costDisplayClassification: string;
  isActive: number;
  constructor() {
    this.isActive = 1;
  }
}