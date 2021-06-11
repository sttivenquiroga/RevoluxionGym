import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStatusPaymentComponent } from './get-all-status-payment.component';

describe('GetAllStatusPaymentComponent', () => {
  let component: GetAllStatusPaymentComponent;
  let fixture: ComponentFixture<GetAllStatusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllStatusPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
