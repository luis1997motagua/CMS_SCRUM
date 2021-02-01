import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactComponent } from './listact.component';

describe('ListactComponent', () => {
  let component: ListactComponent;
  let fixture: ComponentFixture<ListactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
