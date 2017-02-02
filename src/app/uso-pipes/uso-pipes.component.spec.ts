/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsoPipesComponent } from './uso-pipes.component';

describe('UsoPipesComponent', () => {
  let component: UsoPipesComponent;
  let fixture: ComponentFixture<UsoPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
