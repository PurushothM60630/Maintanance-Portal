import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DianotificationComponent } from './dianotification.component';

describe('DianotificationComponent', () => {
  let component: DianotificationComponent;
  let fixture: ComponentFixture<DianotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DianotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DianotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
