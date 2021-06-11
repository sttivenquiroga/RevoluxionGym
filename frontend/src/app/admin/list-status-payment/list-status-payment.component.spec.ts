import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusPaymentComponent } from './list-status-payment.component';

describe('ListStatusPaymentComponent', () => {
  let component: ListStatusPaymentComponent;
  let fixture: ComponentFixture<ListStatusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
