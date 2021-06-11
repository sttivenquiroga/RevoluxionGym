import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDocumentTypeComponent } from './register-document-type.component';

describe('RegisterDocumentTypeComponent', () => {
  let component: RegisterDocumentTypeComponent;
  let fixture: ComponentFixture<RegisterDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDocumentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
