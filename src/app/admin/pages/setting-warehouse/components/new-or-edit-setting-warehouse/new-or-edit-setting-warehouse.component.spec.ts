import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditSettingWarehouseComponent } from './new-or-edit-setting-warehouse.component';

describe('NewOrEditSettingWarehouseComponent', () => {
  let component: NewOrEditSettingWarehouseComponent;
  let fixture: ComponentFixture<NewOrEditSettingWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrEditSettingWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditSettingWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
