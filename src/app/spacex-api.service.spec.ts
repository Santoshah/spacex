import { TestBed } from '@angular/core/testing';

import { SpacexAPIService } from './spacex-api.service';

describe('SpacexAPIService', () => {
  let service: SpacexAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
