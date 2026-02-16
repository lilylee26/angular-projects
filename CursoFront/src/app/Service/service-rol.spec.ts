import { TestBed } from '@angular/core/testing';

import { ServiceRol } from './service-rol';

describe('ServiceRol', () => {
  let service: ServiceRol;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRol);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
