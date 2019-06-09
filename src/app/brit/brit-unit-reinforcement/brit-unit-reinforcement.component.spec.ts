import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritUnitReinforcementComponent } from './brit-unit-reinforcement.component';

describe('BritUnitReinforcementComponent', () => {
  let component: BritUnitReinforcementComponent;
  let fixture: ComponentFixture<BritUnitReinforcementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritUnitReinforcementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritUnitReinforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
