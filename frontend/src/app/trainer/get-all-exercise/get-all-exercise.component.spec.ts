import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllExerciseComponent } from './get-all-exercise.component';

describe('GetAllExerciseComponent', () => {
  let component: GetAllExerciseComponent;
  let fixture: ComponentFixture<GetAllExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
