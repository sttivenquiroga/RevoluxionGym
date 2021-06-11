import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusPaymentComponent } from './update-status-payment.component';

describe('UpdateStatusPaymentComponent', () => {
  let component: UpdateStatusPaymentComponent;
  let fixture: ComponentFixture<UpdateStatusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStatusPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
