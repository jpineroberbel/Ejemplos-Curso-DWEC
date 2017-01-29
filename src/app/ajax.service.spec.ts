/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AJAXService } from './ajax.service';

describe('AJAXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AJAXService]
    });
  });

  it('should ...', inject([AJAXService], (service: AJAXService) => {
    expect(service).toBeTruthy();
  }));
});
