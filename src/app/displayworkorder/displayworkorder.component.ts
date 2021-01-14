import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MainserviceService,displayworkorder } from '../mainservice.service';
import { DiaworkorderComponent } from '../diaworkorder/diaworkorder.component';

@Component({
  selector: 'app-displayworkorder',
  templateUrl: './displayworkorder.component.html',
  styleUrls: ['./displayworkorder.component.css']
})
export class DisplayworkorderComponent implements OnInit {
  displayworkorder: displayworkorder[] = [];
  constructor(private Mainservice:MainserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('mainid');
  res;
  wovalue;
  mwo;
  ngOnInit(): void {
    const maintananceid = {
      username: this.logininfo
    }
    this.Mainservice.getworkorderdata(maintananceid)
      .subscribe(data => {
        console.log('success', data);
        this.displayworkorder = data;
        console.log(data[0].QMNUM);
        console.log(localStorage.getItem('mainid'));
      }
      );
  }
  edit(AUFNR){
    this.wovalue = AUFNR;
    //console.log(this.wovalue);
    //alert(this.wovalue);
    this.res = this.displayworkorder.filter(it => new RegExp(AUFNR).test(it.AUFNR));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("mwo",JSON.stringify(this.res));
    this.dialog.open(DiaworkorderComponent);
  }
}
