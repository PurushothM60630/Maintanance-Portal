import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynotificationComponent } from './displaynotification.component';

describe('DisplaynotificationComponent', () => {
  let component: DisplaynotificationComponent;
  let fixture: ComponentFixture<DisplaynotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaynotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
