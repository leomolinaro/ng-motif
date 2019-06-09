import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritMapComponent } from './brit-map.component';

describe('BritMapComponent', () => {
  let component: BritMapComponent;
  let fixture: ComponentFixture<BritMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
