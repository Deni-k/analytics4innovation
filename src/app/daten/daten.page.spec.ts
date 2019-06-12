import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenPage } from './daten.page';

describe('DatenPage', () => {
  let component: DatenPage;
  let fixture: ComponentFixture<DatenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
