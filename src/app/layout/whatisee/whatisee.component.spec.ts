import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatiseeComponent } from './whatisee.component';

describe('WhatiseeComponent', () => {
  let component: WhatiseeComponent;
  let fixture: ComponentFixture<WhatiseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatiseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
