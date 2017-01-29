/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeticionAJAXSinServicioComponent } from './peticion-ajaxsin-servicio.component';

describe('PeticionAJAXSinServicioComponent', () => {
  let component: PeticionAJAXSinServicioComponent;
  let fixture: ComponentFixture<PeticionAJAXSinServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionAJAXSinServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionAJAXSinServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
