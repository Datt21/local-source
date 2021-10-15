import { ElementRef, EventEmitter, OnInit, Output, ViewChild, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilities } from '../../services/utilities.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from '@shared/services/confirmation.service';

@Directive()
export abstract class BaseNeworeditComponent<T> implements OnInit {

  @ViewChild('focus') focusField: ElementRef;

  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @Output() onSave: EventEmitter<T> = new EventEmitter();

  abstract get form(): FormGroup;


  get controls(): any { return this.form.controls; }
  isValidate: boolean;
  isEdit: boolean;
  isCopy: boolean;
  isDetail: boolean;

  protected constructor(
    protected common: Utilities,
    private translate: TranslateService,
    private confirmService: ConfirmationService,
    private type: new () => T) {
  }

  private getNew(): T {
    return new this.type();
  }

  ngOnInit() { }

  async btnSaveClick(): Promise<void> {
    const msg = await this.common.trans(this.isEdit ? 'message.confirm_edit' : 'message.confirm_add');
    const resultConfirm = await this.confirmService.show(msg);
    if (resultConfirm) {
      this.isValidate = true;
      if (this.form.valid) {
        this.onSave.emit(this.form.getRawValue());
      }
    }
  }

  btnCancelClick(): void {
    this.onCancel.emit();
  }

  abstract initBeforeShow(model: any): void;

  onShow(_sender: any): void {
    if (this.focusField) { this.focusField.nativeElement.focus(); }
  }

  onHide(_sender: any): void {
    this.form.patchValue(this.getNew());
    this.isValidate = false;
  }

  trans(value: string): string {
    return this.translate.instant(value);
  }
}
