import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BritPopMarkerComponent } from './brit-pop-marker.component';

describe('BritPopMarkerComponent', () => {
  let component: BritPopMarkerComponent;
  let fixture: ComponentFixture<BritPopMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BritPopMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BritPopMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
