import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSettingAccountComponent } from './list-setting-account.component';

describe('ListSettingAccountComponent', () => {
  let component: ListSettingAccountComponent;
  let fixture: ComponentFixture<ListSettingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSettingAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSettingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
