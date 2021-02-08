import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskstateComponent } from './taskstate.component';

describe('TaskstateComponent', () => {
  let component: TaskstateComponent;
  let fixture: ComponentFixture<TaskstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
