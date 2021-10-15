
export class PaymentModel {
  id: number;
  customerCode: string;
  customerName: string;
  warehouseCode: string;
  warehouseName: string;
  isRepresentative: number;
  constructor() {
    this.isRepresentative = 0;
  }
}
