import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSettingPaymentComponent } from './list-setting-payment.component';

describe('ListSettingPaymentComponent', () => {
  let component: ListSettingPaymentComponent;
  let fixture: ComponentFixture<ListSettingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSettingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSettingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
