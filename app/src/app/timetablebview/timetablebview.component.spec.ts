import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablebviewComponent } from './timetablebview.component';

describe('TimetablebviewComponent', () => {
  let component: TimetablebviewComponent;
  let fixture: ComponentFixture<TimetablebviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetablebviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablebviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
