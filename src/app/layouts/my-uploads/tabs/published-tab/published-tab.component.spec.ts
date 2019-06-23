import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedTabComponent } from './published-tab.component';

describe('PublishedTabComponent', () => {
  let component: PublishedTabComponent;
  let fixture: ComponentFixture<PublishedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
