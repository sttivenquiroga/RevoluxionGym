import { TestBed } from '@angular/core/testing';

import { WeekRoutinesService } from './week-routines.service';

describe('WeekRoutinesService', () => {
  let service: WeekRoutinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekRoutinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
