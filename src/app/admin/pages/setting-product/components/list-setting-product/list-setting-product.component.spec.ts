import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSettingProductComponent } from './list-setting-product.component';

describe('ListSettingProductComponent', () => {
  let component: ListSettingProductComponent;
  let fixture: ComponentFixture<ListSettingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSettingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSettingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
