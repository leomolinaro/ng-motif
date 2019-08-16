import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotRequestsSnackBarComponent } from './agot-requests-snack-bar.component';

describe('AgotRequestsSnackBarComponent', () => {
  let component: AgotRequestsSnackBarComponent;
  let fixture: ComponentFixture<AgotRequestsSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotRequestsSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotRequestsSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
