import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzFramingPage } from './kompetenz-framing.page';

describe('KompetenzFramingPage', () => {
  let component: KompetenzFramingPage;
  let fixture: ComponentFixture<KompetenzFramingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzFramingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzFramingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
