import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditSettingPaymentComponent } from './new-or-edit-setting-payment.component';

describe('NewOrEditSettingPaymentComponent', () => {
  let component: NewOrEditSettingPaymentComponent;
  let fixture: ComponentFixture<NewOrEditSettingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrEditSettingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditSettingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
