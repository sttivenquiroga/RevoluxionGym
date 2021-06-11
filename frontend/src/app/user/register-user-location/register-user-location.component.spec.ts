import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserLocationComponent } from './register-user-location.component';

describe('RegisterUserLocationComponent', () => {
  let component: RegisterUserLocationComponent;
  let fixture: ComponentFixture<RegisterUserLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
