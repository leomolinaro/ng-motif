import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotCardsDialogComponent } from './agot-cards-dialog.component';

describe('AgotCardsDialogComponent', () => {
  let component: AgotCardsDialogComponent;
  let fixture: ComponentFixture<AgotCardsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotCardsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotCardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
