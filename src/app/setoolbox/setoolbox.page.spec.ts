import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEToolboxPage } from './setoolbox.page';

describe('SEToolboxPage', () => {
  let component: SEToolboxPage;
  let fixture: ComponentFixture<SEToolboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEToolboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEToolboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
