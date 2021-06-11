import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWeekRoutinesComponent } from './list-week-routines.component';

describe('ListWeekRoutinesComponent', () => {
  let component: ListWeekRoutinesComponent;
  let fixture: ComponentFixture<ListWeekRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWeekRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWeekRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
