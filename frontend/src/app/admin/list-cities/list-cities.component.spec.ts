import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitiesComponent } from './list-cities.component';

describe('ListCitiesComponent', () => {
  let component: ListCitiesComponent;
  let fixture: ComponentFixture<ListCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
