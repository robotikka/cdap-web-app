import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLectureComponent } from './upload-lecture.component';

describe('UploadLectureComponent', () => {
  let component: UploadLectureComponent;
  let fixture: ComponentFixture<UploadLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
