import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeFromComponent } from './knowledge-from.component';

describe('KnowledgeFromComponent', () => {
  let component: KnowledgeFromComponent;
  let fixture: ComponentFixture<KnowledgeFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
