import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartmentsComponent } from './list-departments.component';

describe('ListDepartmentsComponent', () => {
  let component: ListDepartmentsComponent;
  let fixture: ComponentFixture<ListDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
