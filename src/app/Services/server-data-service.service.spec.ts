import { TestBed } from '@angular/core/testing';

import { ServerDataServiceService } from './server-data-service.service';

describe('ServerDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerDataServiceService = TestBed.get(ServerDataServiceService);
    expect(service).toBeTruthy();
  });
});
