import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingOnCoursesComponent } from './going-on-courses.component';

describe('GoingOnCoursesComponent', () => {
  let component: GoingOnCoursesComponent;
  let fixture: ComponentFixture<GoingOnCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingOnCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingOnCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
