import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceloginComponent } from './maintanancelogin.component';

describe('MaintananceloginComponent', () => {
  let component: MaintananceloginComponent;
  let fixture: ComponentFixture<MaintananceloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintananceloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
