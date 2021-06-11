import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutritionPlanUserComponent } from './list-nutrition-plan-user.component';

describe('ListNutritionPlanUserComponent', () => {
  let component: ListNutritionPlanUserComponent;
  let fixture: ComponentFixture<ListNutritionPlanUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNutritionPlanUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNutritionPlanUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
