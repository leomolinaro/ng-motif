import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritComponent } from './brit.component';

describe('BritComponent', () => {
  let component: BritComponent;
  let fixture: ComponentFixture<BritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
