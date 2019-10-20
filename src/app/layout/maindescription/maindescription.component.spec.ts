import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindescriptionComponent } from './maindescription.component';

describe('MaindescriptionComponent', () => {
  let component: MaindescriptionComponent;
  let fixture: ComponentFixture<MaindescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
