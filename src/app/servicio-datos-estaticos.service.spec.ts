/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioDatosEstaticosService } from './servicio-datos-estaticos.service';

describe('ServicioDatosEstaticosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDatosEstaticosService]
    });
  });

  it('should ...', inject([ServicioDatosEstaticosService], (service: ServicioDatosEstaticosService) => {
    expect(service).toBeTruthy();
  }));
});
