import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotTableComponent } from './agot-table.component';

describe('AgotTableComponent', () => {
  let component: AgotTableComponent;
  let fixture: ComponentFixture<AgotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
