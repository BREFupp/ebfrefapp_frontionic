import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSingleComponent } from './patients-single.component';

describe('PatientsSingleComponent', () => {
  let component: PatientsSingleComponent;
  let fixture: ComponentFixture<PatientsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
