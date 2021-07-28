import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimesheetComponent } from './daily-timesheet.component';

describe('DailyTimesheetComponent', () => {
  let component: DailyTimesheetComponent;
  let fixture: ComponentFixture<DailyTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
