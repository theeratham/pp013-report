import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotificationSub2Component } from './report-business-notification-sub2.component';

describe('ReportBusinessNotificationSub2Component', () => {
  let component: ReportBusinessNotificationSub2Component;
  let fixture: ComponentFixture<ReportBusinessNotificationSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotificationSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotificationSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
