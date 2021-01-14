import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotificationComponent } from './createnotification.component';

describe('CreatenotificationComponent', () => {
  let component: CreatenotificationComponent;
  let fixture: ComponentFixture<CreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
