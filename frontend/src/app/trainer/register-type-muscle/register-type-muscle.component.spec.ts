import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTypeMuscleComponent } from './register-type-muscle.component';

describe('RegisterTypeMuscleComponent', () => {
  let component: RegisterTypeMuscleComponent;
  let fixture: ComponentFixture<RegisterTypeMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTypeMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTypeMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
