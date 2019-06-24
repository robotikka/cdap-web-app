import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMatchComponent } from './slide-match.component';

describe('SlideMatchComponent', () => {
  let component: SlideMatchComponent;
  let fixture: ComponentFixture<SlideMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
