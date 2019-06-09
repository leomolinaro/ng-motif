import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotActionComponent } from './agot-action.component';

describe('AgotActionComponent', () => {
  let component: AgotActionComponent;
  let fixture: ComponentFixture<AgotActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
