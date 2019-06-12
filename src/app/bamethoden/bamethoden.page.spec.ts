import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BAMethodenPage } from './bamethoden.page';

describe('BAMethodenPage', () => {
  let component: BAMethodenPage;
  let fixture: ComponentFixture<BAMethodenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BAMethodenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BAMethodenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
