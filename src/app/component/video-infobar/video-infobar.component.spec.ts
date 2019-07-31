import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInfobarComponent } from './video-infobar.component';

describe('VideoInfobarComponent', () => {
  let component: VideoInfobarComponent;
  let fixture: ComponentFixture<VideoInfobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoInfobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInfobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
