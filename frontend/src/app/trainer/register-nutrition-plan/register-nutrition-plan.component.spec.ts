import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNutritionPlanComponent } from './register-nutrition-plan.component';

describe('RegisterNutritionPlanComponent', () => {
  let component: RegisterNutritionPlanComponent;
  let fixture: ComponentFixture<RegisterNutritionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNutritionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNutritionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
