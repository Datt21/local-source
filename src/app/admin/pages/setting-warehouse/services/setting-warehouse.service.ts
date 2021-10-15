import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/models/base-response';
import { BaseHttpService } from '@shared/services/base-http.service';
import { ISearchService } from '@shared/services/search.service';
import { SearchSettingWarehouse } from '../models/search-settting-warehouse.model';
import { Warehouse } from '../models/setting-warehouse.model';

@Injectable()
export class SettingWarehouseService
  extends BaseHttpService
  implements ISearchService<SearchSettingWarehouse>
{
  constructor(protected http: HttpClient) {
    super(http);
  }

  async search(
    model: SearchSettingWarehouse
  ): Promise<BaseResponse<Warehouse>> {
    return await super.getAsync('warehouses', model);
  }

  async create(model: Warehouse): Promise<BaseResponse<any>> {
    return await super.postAsync(`warehouses`, model);
  }

  async update(model?: Warehouse): Promise<BaseResponse<any>> {
    return await super.putAsync(`warehouses/${model.code}`, model);
  }

  async delete(code: string): Promise<BaseResponse<any>> {
    return await super.deleteAsync(`warehouses/${code}`);
  }
  
  async get(code: string, model?: any): Promise<BaseResponse<any>> {
    return await super.getAsync(`warehouses/${code}`, model);
  }

  async detail(model: Warehouse): Promise<BaseResponse<Warehouse>> {
    return await super.getAsync(`warehouses/${model.code}`);
  }

  async getListDepartment(): Promise<BaseResponse<any>> {
    return await super.getAsync('department-masters');
  }
}
