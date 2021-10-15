import { OnInit, QueryList, ViewChild, ViewChildren, Directive } from '@angular/core';
import { UiModalComponent } from '../modal/ui-modal/ui-modal.component';
import { LoaderService } from 'src/shared/services/loader.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { PagerComponent } from '../../modules/pager/pager/pager.component';
import { IPager } from '../../models/IPager';
import { NotificationService } from '../../services/notification.service';
import { BaseNeworeditComponent } from './base-new-or-edit.component';
import { ISearchService } from '../../services/search.service';
import { ConfirmationService } from 'src/shared/services/confirmation.service';
import { Constants } from 'src/shared/models/constants';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { BaseDetailComponent } from './base-detail.component';

@Directive()
export abstract class BaseSearchComponent<T extends IPager, M> implements OnInit {
  @ViewChild('newOrEditComponent') newOrEditComponent: BaseNeworeditComponent<T>;
  @ViewChild('newOrEditModal') newOrEditModal: UiModalComponent;
  @ViewChild('viewDetailComponent') viewDetailComponent: BaseDetailComponent<T>;
  @ViewChild('viewDetailModal') viewDetailModal: UiModalComponent;
  @ViewChildren(PagerComponent) pagers: QueryList<PagerComponent>;

  search: T = this.getNew();
  searchCache: T = this.getNew();
  $items: M[] = [];
  total = 0;
  isEdit: boolean;
  isSearched = false;
  PAGE_DEFAULT = 1;

  protected constructor(
    protected loader: LoaderService,
    protected common: Utilities,
    protected notification: NotificationService,
    protected confirmService: ConfirmationService,
    protected service: ISearchService<T>,
    protected type: new () => T
  ) { }

  getNew(): T {
    return new this.type();
  }

  ngOnInit() {
    this.btnSearchClick();
  }

  btnSearchClick() {
    // refresh search cache
    this.searchCache = this.common.copyObject(this.search);
    this.pagerChanges({
      page: this.searchCache && this.searchCache.page ? this.searchCache.page : 1,
      limit: this.searchCache && this.searchCache.limit ? this.searchCache.limit : Constants.PAGESIZE_DEFAULT,
    });
  }

  abstract btnClearClick();

  searchKeyDown(event: KeyboardEvent): void {
    // Search when enter key pressed
    if (event.keyCode === 13) {
      this.btnSearchClick();
    }
  }

  async searchAsync(): Promise<void> {
    this.loader.show();
    this.isSearched = false;
    // Scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const result = await this.service.search(this.searchCache);
    if (result.type === ResponseTypeEnum.SUCCESS) {
      this.$items = result.data;

      this.total = result.meta.total ? result.meta.total : 0;
      this.isSearched = true;
      if (this.searchCache.page > this.PAGE_DEFAULT && this.$items.length === 0) {
        this.search.page = this.PAGE_DEFAULT;
        this.btnSearchClick();
      }
    } else {
      this.$items = [];
      this.total = 0;
      const msg = await this.common.trans('message.try_later');
      this.isSearched = true;
      this.notification.showError(msg);
    }
    this.loader.hide();

    const $this = this;
    setTimeout(() => {
      $this.pagers.forEach((pager) => {
        pager.refresh();
      });
    });
  }

  btnAddClick(): void {
    // show the dialog
    this.isEdit = false;
    if (this.newOrEditComponent) {
      this.newOrEditComponent.isEdit = false;
      this.newOrEditComponent.isCopy = false;
      this.newOrEditComponent.initBeforeShow(this.getNew());
    }
    if (this.newOrEditModal) {
      this.newOrEditModal.show();
    }
  }

  async btnEditClick(model: any): Promise<void> {
    // show the dialog
    this.isEdit = true;
    // Call API show detail
    this.loader.show();
    // Get detail info
    const result = await this.service.detail(model);
    if (result.type === ResponseTypeEnum.SUCCESS) {
      // Show dialog
      if (this.newOrEditComponent) {
        this.newOrEditComponent.isEdit = true;
        this.newOrEditComponent.initBeforeShow(result.data);
      }

      if (this.newOrEditModal) {
        this.newOrEditModal.show();
      }

    } else {
      this.notification.showError(result.message);
    }
    this.loader.hide();
  }

  btnCopyClick(model: any): void {
    // show the dialog
    this.isEdit = false;
    if (this.newOrEditComponent) {
      this.newOrEditComponent.isEdit = false;
      this.newOrEditComponent.isCopy = true;
      this.newOrEditComponent.initBeforeShow(model);
    }
    if (this.newOrEditModal) {
      this.newOrEditModal.show();
    }
  }

  async btnViewDetailClick(item: any): Promise<void> {
    this.loader.show();
    // Get detail info
    const result = await this.service.detail(item);
    if (result.type === ResponseTypeEnum.SUCCESS) {
      // show the dialog
      if (this.viewDetailComponent) {
        this.viewDetailComponent.initBeforeShow(result.data);
      }
      if (this.viewDetailModal) {
        this.viewDetailModal.show();
      }
    } else {
      this.notification.showError(result.message);
    }
    this.loader.hide();
  }


  async btnDeleteClick(model: any): Promise<void> {
    const msg = await this.common.trans('message.confirm_delete');
    const resultConfirm = await this.confirmService.show(msg);
    if (resultConfirm) {
      const msgProcessing = await this.common.trans('other.processing');
      this.loader.show(msgProcessing);
      const result = await this.service.delete(model);
      if (result.type === ResponseTypeEnum.SUCCESS) {
        await this.searchAsync();
        this.notification.showSuccess(await this.common.trans('message.delete_success'));
      } else {
        this.notification.showError(await this.common.trans('message.delete_error'));
      }
      this.loader.hide();
    }
  }

  onModalShown(): void {
    // trigger event onShow on dialog
    if (this.newOrEditComponent) {
      this.newOrEditComponent.onShow(this);
    }
  }

  onModalHide(): void {
    // trigger event onShow on dialog
    if (this.newOrEditComponent) {
      this.newOrEditComponent.onHide(this);
    }
  }

  /*
   * event when pager changed
   */
  pagerChanges(pageInfo: IPager): void {
    this.searchCache.page = pageInfo.page;
    this.searchCache.limit = pageInfo.limit;

    // sync other pager value
    if (this.pagers) {
      this.pagers.forEach((pager) => {
        pager.pageSize = pageInfo.limit;
        pager.pager.currentPage = pageInfo.page;
      });
    }
    // call search function
    this.searchAsync();
  }

  async save(model: any): Promise<void> {
    const msgProcessing = await this.common.trans('other.processing');
    this.loader.show(msgProcessing);
    // Case Add new
    if (!this.isEdit) {
      const result = await this.service.create(model);
      if (result.type === ResponseTypeEnum.SUCCESS) {
        await this.searchAsync();
        this.notification.showSuccess(await this.common.trans('message.add_new_success'));
        if (this.newOrEditModal) {
          this.newOrEditModal.hide();
        }
      } else {
        this.notification.showError(result.message);
      }
    } else {
      // Case Edit
      const result = await this.service.update(model);
      if (result.type === ResponseTypeEnum.SUCCESS) {
        await this.searchAsync();
        this.notification.showSuccess(await this.common.trans('message.update_success'));
        if (this.newOrEditModal) {
          this.newOrEditModal.hide();
        }
      } else {
        this.notification.showError(result.message);
      }
    }
    this.loader.hide();
  }

  abstract trackByFn(index, item);
}
