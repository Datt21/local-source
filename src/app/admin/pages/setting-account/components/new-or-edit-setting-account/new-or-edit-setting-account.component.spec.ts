import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditSettingAccountComponent } from './new-or-edit-setting-account.component';

describe('NewOrEditSettingAccountComponent', () => {
  let component: NewOrEditSettingAccountComponent;
  let fixture: ComponentFixture<NewOrEditSettingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrEditSettingAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditSettingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
