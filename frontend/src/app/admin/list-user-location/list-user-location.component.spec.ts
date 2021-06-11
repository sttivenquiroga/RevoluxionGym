import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserLocationComponent } from './list-user-location.component';

describe('ListUserLocationComponent', () => {
  let component: ListUserLocationComponent;
  let fixture: ComponentFixture<ListUserLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
