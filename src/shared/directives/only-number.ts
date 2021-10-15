import { Directive, OnInit, Optional } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber],[onlyNumber]',
})
export class OnlyNumberValidatorDirective implements OnInit {
  constructor(
    @Optional() private formControl: FormControlName,
    @Optional() private ngModel: NgModel
  ) {}
  ngOnInit(): void {
    if (this.formControl) {
      this.formControl.valueChanges.subscribe((value: string) => {
        value = value ? value : '';

        if (value && !/^\d+$/.test(value)) {
          value = value.replace(/[^0-9]*/g, '');
          this.formControl.control.setValue(value);
        }
      });
    }

    if (this.ngModel) {
      this.ngModel.valueChanges.subscribe((value: string) => {
        value = value ? value : '';
        if (value && !/^\d+$/.test(value)) {
          value = value.replace(/[^0-9]*/g, '');
          this.ngModel.control.setValue(value);
        }
      });
    }
  }
}
