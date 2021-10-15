import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailSettingPaymentComponent } from './view-detail-setting-payment.component';

describe('ViewDetailSettingPaymentComponent', () => {
  let component: ViewDetailSettingPaymentComponent;
  let fixture: ComponentFixture<ViewDetailSettingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailSettingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailSettingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
