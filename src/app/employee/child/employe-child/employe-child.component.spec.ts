import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeChildComponent } from './employe-child.component';

describe('EmployeChildComponent', () => {
  let component: EmployeChildComponent;
  let fixture: ComponentFixture<EmployeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
