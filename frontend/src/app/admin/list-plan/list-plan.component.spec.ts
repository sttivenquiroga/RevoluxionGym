import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanComponent } from './list-plan.component';

describe('ListPlanComponent', () => {
  let component: ListPlanComponent;
  let fixture: ComponentFixture<ListPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
