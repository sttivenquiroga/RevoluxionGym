import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDepartmentComponent } from './register-department.component';

describe('RegisterDepartmentComponent', () => {
  let component: RegisterDepartmentComponent;
  let fixture: ComponentFixture<RegisterDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
