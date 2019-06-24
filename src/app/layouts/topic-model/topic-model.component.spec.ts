import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicModelComponent } from './topic-model.component';

describe('TopicModelComponent', () => {
  let component: TopicModelComponent;
  let fixture: ComponentFixture<TopicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
