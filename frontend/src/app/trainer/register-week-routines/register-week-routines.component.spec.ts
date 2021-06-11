import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWeekRoutinesComponent } from './register-week-routines.component';

describe('RegisterWeekRoutinesComponent', () => {
  let component: RegisterWeekRoutinesComponent;
  let fixture: ComponentFixture<RegisterWeekRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWeekRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWeekRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
