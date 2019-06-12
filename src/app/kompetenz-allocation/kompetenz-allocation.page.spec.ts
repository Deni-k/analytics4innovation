import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzAllocationPage } from './kompetenz-allocation.page';

describe('KompetenzAllocationPage', () => {
  let component: KompetenzAllocationPage;
  let fixture: ComponentFixture<KompetenzAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzAllocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
