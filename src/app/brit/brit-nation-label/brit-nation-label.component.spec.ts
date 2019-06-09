import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritNationLabelComponent } from './brit-nation-label.component';

describe('BritNationLabelComponent', () => {
  let component: BritNationLabelComponent;
  let fixture: ComponentFixture<BritNationLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritNationLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritNationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
