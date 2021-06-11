import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRolComponent } from './get-all-rol.component';

describe('GetAllRolComponent', () => {
  let component: GetAllRolComponent;
  let fixture: ComponentFixture<GetAllRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
