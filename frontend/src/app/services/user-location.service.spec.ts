import { TestBed } from '@angular/core/testing';

import { UserLocationService } from './user-location.service';

describe('UserLocationService', () => {
  let service: UserLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
