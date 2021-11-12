import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhsComponent } from './mhs.component';

describe('MhsComponent', () => {
  let component: MhsComponent;
  let fixture: ComponentFixture<MhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
