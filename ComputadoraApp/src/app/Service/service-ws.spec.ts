import { TestBed } from '@angular/core/testing';

import { ServiceWS } from './service-ws';

describe('ServiceWS', () => {
  let service: ServiceWS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
