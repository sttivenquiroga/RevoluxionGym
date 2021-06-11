import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolComponent } from './list-rol.component';

describe('ListRolComponent', () => {
  let component: ListRolComponent;
  let fixture: ComponentFixture<ListRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
