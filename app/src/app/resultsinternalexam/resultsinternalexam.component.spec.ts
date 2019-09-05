import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsinternalexamComponent } from './resultsinternalexam.component';

describe('ResultsinternalexamComponent', () => {
  let component: ResultsinternalexamComponent;
  let fixture: ComponentFixture<ResultsinternalexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsinternalexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsinternalexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
