import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbrefComponent } from './ebref.component';

describe('EbrefComponent', () => {
  let component: EbrefComponent;
  let fixture: ComponentFixture<EbrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
