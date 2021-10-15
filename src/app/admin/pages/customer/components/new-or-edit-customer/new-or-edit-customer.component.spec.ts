import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditCustomerComponent } from './new-or-edit-customer.component';

describe('NewOrEditCustomerComponent', () => {
  let component: NewOrEditCustomerComponent;
  let fixture: ComponentFixture<NewOrEditCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrEditCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
