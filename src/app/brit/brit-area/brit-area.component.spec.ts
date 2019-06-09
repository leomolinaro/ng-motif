import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritAreaComponent } from './brit-area.component';

describe('BritAreaComponent', () => {
  let component: BritAreaComponent;
  let fixture: ComponentFixture<BritAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
