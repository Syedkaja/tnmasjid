import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyattendanceComponent } from './facultyattendance.component';

describe('FacultyattendanceComponent', () => {
  let component: FacultyattendanceComponent;
  let fixture: ComponentFixture<FacultyattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
