import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyviewComponent } from './facultyview.component';

describe('FacultyviewComponent', () => {
  let component: FacultyviewComponent;
  let fixture: ComponentFixture<FacultyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
