import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingTabComponent } from './processing-tab.component';

describe('ProcessingTabComponent', () => {
  let component: ProcessingTabComponent;
  let fixture: ComponentFixture<ProcessingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
