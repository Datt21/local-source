import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/shared/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from 'src/shared/models/base-response';
import { ISearchService } from 'src/shared/services/search.service';
import { SearchSettingPayment } from '../models/search-setting-payment.model';
import { PaymentModel } from '../models/setting-payment.model';
import { CUSTOMER_CLASSIFICATION } from '@shared/enums/response-customer-setting-payment.enum';
@Injectable()
export class SettingPaymentService extends BaseHttpService implements ISearchService<SearchSettingPayment>{
  constructor(protected http: HttpClient) {
      super(http);
    }

    async search(model: SearchSettingPayment): Promise<BaseResponse<PaymentModel>> {
      return await super.getAsync('setting-delivery-link', model);
    }

    async create(model: PaymentModel): Promise<BaseResponse<any>> {
      return await super.postAsync(`setting-delivery-link`, model);
    }

    async update(model: PaymentModel): Promise<BaseResponse<any>> { 
      return await super.putAsync(`setting-delivery-link/${model.id}`, model);
    }

    async delete(model: PaymentModel): Promise<BaseResponse<any>> {
      return await super.deleteAsync(`setting-delivery-link/${model.id}`);
    }

    async getWarehouses(): Promise<BaseResponse<any>> {
      return await super.getAsync('warehouses');
    }

    async getCustomer(): Promise<BaseResponse<any>> {
      return await super.getAsync(`customers?customerClassification=${CUSTOMER_CLASSIFICATION.CUSTOMER}`);
    }

    async detail(model: PaymentModel): Promise<BaseResponse<PaymentModel>> {
      return await super.getAsync(`setting-delivery-link/${model.id}`);
    }
  }
