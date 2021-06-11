import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStatusPaymentComponent } from './register-status-payment.component';

describe('RegisterStatusPaymentComponent', () => {
  let component: RegisterStatusPaymentComponent;
  let fixture: ComponentFixture<RegisterStatusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStatusPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
