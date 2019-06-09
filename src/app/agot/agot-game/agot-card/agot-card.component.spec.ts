import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotCardComponent } from './agot-card.component';

describe('AgotCardComponent', () => {
  let component: AgotCardComponent;
  let fixture: ComponentFixture<AgotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
