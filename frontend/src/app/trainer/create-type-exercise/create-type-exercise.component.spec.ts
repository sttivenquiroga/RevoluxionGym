import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeExerciseComponent } from './create-type-exercise.component';

describe('CreateTypeExerciseComponent', () => {
  let component: CreateTypeExerciseComponent;
  let fixture: ComponentFixture<CreateTypeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
