import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPtiComponent } from './hello-pti.component';

describe('HelloPtiComponent', () => {
  let component: HelloPtiComponent;
  let fixture: ComponentFixture<HelloPtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloPtiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
