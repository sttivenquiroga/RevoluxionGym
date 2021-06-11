import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeExeciseComponent } from './update-type-execise.component';

describe('UpdateTypeExeciseComponent', () => {
  let component: UpdateTypeExeciseComponent;
  let fixture: ComponentFixture<UpdateTypeExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
