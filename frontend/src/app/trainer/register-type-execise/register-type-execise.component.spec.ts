import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTypeExeciseComponent } from './register-type-execise.component';

describe('RegisterTypeExeciseComponent', () => {
  let component: RegisterTypeExeciseComponent;
  let fixture: ComponentFixture<RegisterTypeExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTypeExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTypeExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
