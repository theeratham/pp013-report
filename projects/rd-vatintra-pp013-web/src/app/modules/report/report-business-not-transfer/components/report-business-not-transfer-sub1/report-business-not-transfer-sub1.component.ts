import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-not-transfer-sub1',
  templateUrl: './report-business-not-transfer-sub1.component.html',
  styleUrls: ['./report-business-not-transfer-sub1.component.scss']
})
export class ReportBusinessNotTransferSub1Component implements OnInit {

  constructor(private router: Router, private readonly location : Location) { }
  ngOnInit(): void {
  }
  setPage(input:number) {
    if (input === 1) {
      this.router.navigate(['/main/report/report-business-not-transfer/page-two']);
    }
    else {
      this.location.back();
    }
  }

}
