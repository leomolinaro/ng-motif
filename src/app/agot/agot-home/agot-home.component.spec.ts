import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotHomeComponent } from './agot-home.component';

describe('AgotHomeComponent', () => {
  let component: AgotHomeComponent;
  let fixture: ComponentFixture<AgotHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
