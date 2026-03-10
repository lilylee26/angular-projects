import { TestBed } from '@angular/core/testing';

import { ServiceWs } from './service-ws';

describe('ServiceWs', () => {
  let service: ServiceWs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
