import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailAccountComponent } from './view-detail-account.component';

describe('ViewDetailAccountComponent', () => {
  let component: ViewDetailAccountComponent;
  let fixture: ComponentFixture<ViewDetailAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDetailAccountComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
