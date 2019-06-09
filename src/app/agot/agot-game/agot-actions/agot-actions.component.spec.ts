import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotActionsComponent } from './agot-actions.component';

describe('AgotActionsComponent', () => {
  let component: AgotActionsComponent;
  let fixture: ComponentFixture<AgotActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
