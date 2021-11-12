import { OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgmodelComponent } from './test-ngmodel.component';

describe('TestNgmodelComponent', () => {
  let component: TestNgmodelComponent;
  let fixture: ComponentFixture<TestNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
