import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayworkorderComponent } from './displayworkorder.component';

describe('DisplayworkorderComponent', () => {
  let component: DisplayworkorderComponent;
  let fixture: ComponentFixture<DisplayworkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayworkorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayworkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
