import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditSettingProductComponent } from './new-or-edit-setting-product.component';

describe('NewOrEditSettingProductComponent', () => {
  let component: NewOrEditSettingProductComponent;
  let fixture: ComponentFixture<NewOrEditSettingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrEditSettingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditSettingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
