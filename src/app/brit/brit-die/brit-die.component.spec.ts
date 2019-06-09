import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritDieComponent } from './brit-die.component';

describe('BritDieComponent', () => {
  let component: BritDieComponent;
  let fixture: ComponentFixture<BritDieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritDieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
