import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotButtonListComponent } from './agot-button-list.component';

describe('AgotButtonListComponent', () => {
  let component: AgotButtonListComponent;
  let fixture: ComponentFixture<AgotButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
