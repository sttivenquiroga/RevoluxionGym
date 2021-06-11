import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentTypeComponent } from './list-document-type.component';

describe('ListDocumentTypeComponent', () => {
  let component: ListDocumentTypeComponent;
  let fixture: ComponentFixture<ListDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocumentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
