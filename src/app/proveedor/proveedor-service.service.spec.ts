import { TestBed, inject } from '@angular/core/testing';

import {  ProveedorServiceService } from './proveedor-service.service';

describe('ProveedorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveedorServiceService]
    });
  });

  it('should be created', inject([ProveedorServiceService], (service: ProveedorServiceService) => {
    expect(service).toBeTruthy();
  }));
});