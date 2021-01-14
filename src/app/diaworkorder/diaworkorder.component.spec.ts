import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaworkorderComponent } from './diaworkorder.component';

describe('DiaworkorderComponent', () => {
  let component: DiaworkorderComponent;
  let fixture: ComponentFixture<DiaworkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaworkorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaworkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
