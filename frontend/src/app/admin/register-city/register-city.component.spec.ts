import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCityComponent } from './register-city.component';

describe('RegisterCityComponent', () => {
  let component: RegisterCityComponent;
  let fixture: ComponentFixture<RegisterCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
