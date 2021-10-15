import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAutocompleteComponent } from './sample-autocomplete.component';

describe('SampleAutocompleteComponent', () => {
  let component: SampleAutocompleteComponent;
  let fixture: ComponentFixture<SampleAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
