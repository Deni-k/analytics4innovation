import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzPreparationPage } from './kompetenz-preparation.page';

describe('KompetenzPreparationPage', () => {
  let component: KompetenzPreparationPage;
  let fixture: ComponentFixture<KompetenzPreparationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzPreparationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzPreparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
