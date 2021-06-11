import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTypeMuscleComponent } from './get-all-type-muscle.component';

describe('GetAllTypeMuscleComponent', () => {
  let component: GetAllTypeMuscleComponent;
  let fixture: ComponentFixture<GetAllTypeMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTypeMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTypeMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
