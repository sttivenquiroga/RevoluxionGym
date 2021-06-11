import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeMuscleComponent } from './update-type-muscle.component';

describe('UpdateTypeMuscleComponent', () => {
  let component: UpdateTypeMuscleComponent;
  let fixture: ComponentFixture<UpdateTypeMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeMuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
