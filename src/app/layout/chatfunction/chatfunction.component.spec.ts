import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatfunctionComponent } from './chatfunction.component';

describe('ChatfunctionComponent', () => {
  let component: ChatfunctionComponent;
  let fixture: ComponentFixture<ChatfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
