import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExeciseComponent } from './register-execise.component';

describe('RegisterExeciseComponent', () => {
  let component: RegisterExeciseComponent;
  let fixture: ComponentFixture<RegisterExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
