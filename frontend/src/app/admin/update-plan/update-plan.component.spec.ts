import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlanComponent } from './update-plan.component';

describe('UpdatePlanComponent', () => {
  let component: UpdatePlanComponent;
  let fixture: ComponentFixture<UpdatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
