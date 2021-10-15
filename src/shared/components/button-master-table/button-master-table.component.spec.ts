import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMasterTableComponent } from './button-master-table.component';

describe('ButtonMasterTableComponent', () => {
  let component: ButtonMasterTableComponent;
  let fixture: ComponentFixture<ButtonMasterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMasterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMasterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
