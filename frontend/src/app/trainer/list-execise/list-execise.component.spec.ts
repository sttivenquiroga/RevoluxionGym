import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExeciseComponent } from './list-execise.component';

describe('ListExeciseComponent', () => {
  let component: ListExeciseComponent;
  let fixture: ComponentFixture<ListExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
