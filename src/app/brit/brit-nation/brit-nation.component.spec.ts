import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritNationComponent } from './brit-nation.component';

describe('BritNationComponent', () => {
  let component: BritNationComponent;
  let fixture: ComponentFixture<BritNationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritNationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
