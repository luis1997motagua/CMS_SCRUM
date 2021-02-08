import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskstateviewComponent } from './taskstateview.component';

describe('TaskstateviewComponent', () => {
  let component: TaskstateviewComponent;
  let fixture: ComponentFixture<TaskstateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskstateviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskstateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
