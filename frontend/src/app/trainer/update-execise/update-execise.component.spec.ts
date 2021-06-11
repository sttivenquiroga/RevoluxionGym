import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExeciseComponent } from './update-execise.component';

describe('UpdateExeciseComponent', () => {
  let component: UpdateExeciseComponent;
  let fixture: ComponentFixture<UpdateExeciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExeciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExeciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
