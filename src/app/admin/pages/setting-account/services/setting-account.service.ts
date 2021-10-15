import { BaseHttpService } from 'src/shared/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { SettingAccount } from '../models/setting-account.model';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/shared/models/base-response';
import { ISearchService } from 'src/shared/services/search.service';
import { SearchSettingAccount } from '../models/search-setting-account.model';

@Injectable()
export class SettingAccountService extends BaseHttpService implements ISearchService<SearchSettingAccount>{

  constructor(protected http: HttpClient) {
    super(http);
  }
  async search(model: SearchSettingAccount): Promise<BaseResponse<SettingAccount>> {
    return await super.getAsync('setting-account', model);
  }

  async create(model: SettingAccount): Promise<BaseResponse<any>> {
    return await super.postAsync(`setting-account`, model);
  }

  async update(model: SettingAccount): Promise<BaseResponse<any>> {
    return await super.putAsync(`setting-account/${model.code}`, model);
  }

  async delete(model: SettingAccount): Promise<BaseResponse<any>> {
    return await super.deleteAsync(`setting-account/${model.code}`);
  }

  async updateStatus(model: SettingAccount): Promise<BaseResponse<any>> {
    return await super.putAsync(`setting-account/status/${model.code}`, model);
  }

  async detail(model: SettingAccount): Promise<BaseResponse<SettingAccount>> {
    return await super.getAsync(`setting-account/${model.code}`);
  }

  async getListUserMaster(): Promise<BaseResponse<any>> {
    return await super.getAsync('user-masters');
  }

  async getListWarehouse(): Promise<BaseResponse<any>> {
    return await super.getAsync('warehouses');
  }

  async getListDepartment(): Promise<BaseResponse<any>> {
    return await super.getAsync('department-masters');
  }
}
