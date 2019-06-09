import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotComponent } from './agot.component';

describe('AgotComponent', () => {
  let component: AgotComponent;
  let fixture: ComponentFixture<AgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
