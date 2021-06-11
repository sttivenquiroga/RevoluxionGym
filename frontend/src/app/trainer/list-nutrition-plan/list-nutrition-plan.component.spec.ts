import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutritionPlanComponent } from './list-nutrition-plan.component';

describe('ListNutritionPlanComponent', () => {
  let component: ListNutritionPlanComponent;
  let fixture: ComponentFixture<ListNutritionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNutritionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNutritionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
