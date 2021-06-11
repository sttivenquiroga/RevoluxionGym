import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusPaymentComponent } from './create-status-payment.component';

describe('CreateStatusPaymentComponent', () => {
  let component: CreateStatusPaymentComponent;
  let fixture: ComponentFixture<CreateStatusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStatusPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
