import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSettingWarehouseComponent } from './list-setting-warehouse.component';

describe('ListSettingWarehouseComponent', () => {
  let component: ListSettingWarehouseComponent;
  let fixture: ComponentFixture<ListSettingWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSettingWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSettingWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
