/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsarServicioAJAXComponent } from './usar-servicio-ajax.component';

describe('UsarServicioAJAXComponent', () => {
  let component: UsarServicioAJAXComponent;
  let fixture: ComponentFixture<UsarServicioAJAXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsarServicioAJAXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsarServicioAJAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
