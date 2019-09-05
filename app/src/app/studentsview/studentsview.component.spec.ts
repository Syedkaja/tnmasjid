import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsviewComponent } from './studentsview.component';

describe('StudentsviewComponent', () => {
  let component: StudentsviewComponent;
  let fixture: ComponentFixture<StudentsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
