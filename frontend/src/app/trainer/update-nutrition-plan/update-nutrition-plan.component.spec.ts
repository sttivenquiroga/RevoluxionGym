import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNutritionPlanComponent } from './update-nutrition-plan.component';

describe('UpdateNutritionPlanComponent', () => {
  let component: UpdateNutritionPlanComponent;
  let fixture: ComponentFixture<UpdateNutritionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNutritionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNutritionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
