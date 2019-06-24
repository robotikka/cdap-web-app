import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewVideoComponent } from './review-video.component';

describe('ReviewVideoComponent', () => {
  let component: ReviewVideoComponent;
  let fixture: ComponentFixture<ReviewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
