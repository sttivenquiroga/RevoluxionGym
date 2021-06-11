import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeMuscleComponent } from './list-type-muscle.component';

describe('ListTypeMuscleComponent', () => {
  let component: ListTypeMuscleComponent;
  let fixture: ComponentFixture<ListTypeMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
