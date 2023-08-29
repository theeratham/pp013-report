import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinssNotificationAreaComponent } from './report-businss-notification-area.component';

describe('ReportBusinssNotificationAreaComponent', () => {
  let component: ReportBusinssNotificationAreaComponent;
  let fixture: ComponentFixture<ReportBusinssNotificationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinssNotificationAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinssNotificationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
