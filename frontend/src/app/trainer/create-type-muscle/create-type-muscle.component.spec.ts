import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeMuscleComponent } from './create-type-muscle.component';

describe('CreateTypeMuscleComponent', () => {
  let component: CreateTypeMuscleComponent;
  let fixture: ComponentFixture<CreateTypeMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
