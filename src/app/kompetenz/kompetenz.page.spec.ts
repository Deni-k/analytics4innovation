import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzPage } from './kompetenz.page';

describe('KompetenzPage', () => {
  let component: KompetenzPage;
  let fixture: ComponentFixture<KompetenzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
