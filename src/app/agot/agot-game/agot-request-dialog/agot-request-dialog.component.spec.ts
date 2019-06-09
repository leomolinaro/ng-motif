import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotRequestDialogComponent } from './agot-request-dialog.component';

describe('AgotRequestDialogComponent', () => {
  let component: AgotRequestDialogComponent;
  let fixture: ComponentFixture<AgotRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
