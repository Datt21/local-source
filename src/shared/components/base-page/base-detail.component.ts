import { EventEmitter, OnInit, Output, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilities } from '../../services/utilities.service';
import { TranslateService } from '@ngx-translate/core';

@Directive()
export abstract class BaseDetailComponent<T> implements OnInit {

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  abstract get form(): FormGroup;


  get controls(): any { return this.form.controls; }

  protected constructor(
    protected common: Utilities,
    private translate: TranslateService,
    private type: new () => T) {
  }

  private getNew(): T {
    return new this.type();
  }

  ngOnInit() { }

  abstract initBeforeShow(model: any): void;

  onHide(_sender: any): void {
    this.form.patchValue(this.getNew());
  }

  trans(value: string): string {
    return this.translate.instant(value);
  }

  btnCloseClick() {
    this.onClose.emit();
  }
}
