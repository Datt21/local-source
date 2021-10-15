import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResetPass } from '../../models/reset-password';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<ResetPass> = new EventEmitter();
  @Input() message = '';
  isSubmit: boolean;
  resetPass: ResetPass;

  form = this.formBuilder.group({
    username: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.message = '';
    this.resetPass = new ResetPass();
    this.resetForm();
  }

  get username() {
    return this.form.get('username');
  }

  btnCancelClick() {
    this.form.reset();
    this.onCancel.emit();
  }

  btnSaveClick() {
    this.isSubmit = true;
    if (this.form.valid) {
      this.resetPass.username = this.form.get('username').value.toString();
      this.onSave.emit(this.resetPass);
    }
  }

  resetForm() {
    this.isSubmit = false;
    this.form.reset();
  }
}
