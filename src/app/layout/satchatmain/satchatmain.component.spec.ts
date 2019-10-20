import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatchatmainComponent } from './satchatmain.component';

describe('SatchatmainComponent', () => {
  let component: SatchatmainComponent;
  let fixture: ComponentFixture<SatchatmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatchatmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatchatmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
