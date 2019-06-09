import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgotGameComponent } from './agot-game.component';

describe('AgotGameComponent', () => {
  let component: AgotGameComponent;
  let fixture: ComponentFixture<AgotGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgotGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
