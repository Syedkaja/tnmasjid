import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsboardexamComponent } from './resultsboardexam.component';

describe('ResultsboardexamComponent', () => {
  let component: ResultsboardexamComponent;
  let fixture: ComponentFixture<ResultsboardexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsboardexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsboardexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
