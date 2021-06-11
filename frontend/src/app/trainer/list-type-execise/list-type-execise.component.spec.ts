import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeExeciseComponent } from './list-type-execise.component';

describe('ListTypeExeciseComponent', () => {
  let component: ListTypeExeciseComponent;
  let fixture: ComponentFixture<ListTypeExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
