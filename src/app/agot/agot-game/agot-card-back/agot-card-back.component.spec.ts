import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotCardBackComponent } from './agot-card-back.component';

describe('AgotCardBackComponent', () => {
  let component: AgotCardBackComponent;
  let fixture: ComponentFixture<AgotCardBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotCardBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
