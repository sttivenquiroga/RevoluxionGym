import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPlanComponent } from './get-all-plan.component';

describe('GetAllPlanComponent', () => {
  let component: GetAllPlanComponent;
  let fixture: ComponentFixture<GetAllPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
