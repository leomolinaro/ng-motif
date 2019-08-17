import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifToolbarComponent } from './motif-toolbar.component';

describe('MotifToolbarComponent', () => {
  let component: MotifToolbarComponent;
  let fixture: ComponentFixture<MotifToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
