import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTypeExerciseComponent } from './get-all-type-exercise.component';

describe('GetAllTypeExerciseComponent', () => {
  let component: GetAllTypeExerciseComponent;
  let fixture: ComponentFixture<GetAllTypeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTypeExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTypeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
