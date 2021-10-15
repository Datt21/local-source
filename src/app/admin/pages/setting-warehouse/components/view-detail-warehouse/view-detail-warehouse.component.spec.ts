import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailWarehouseComponent } from './view-detail-warehouse.component';

describe('ViewDetailWarehouseComponent', () => {
  let component: ViewDetailWarehouseComponent;
  let fixture: ComponentFixture<ViewDetailWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
