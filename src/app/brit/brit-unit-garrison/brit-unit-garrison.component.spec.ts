import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritUnitGarrisonComponent } from './brit-unit-garrison.component';

describe('BritUnitGarrisonComponent', () => {
  let component: BritUnitGarrisonComponent;
  let fixture: ComponentFixture<BritUnitGarrisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritUnitGarrisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritUnitGarrisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
