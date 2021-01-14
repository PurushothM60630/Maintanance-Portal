import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MainserviceService, displaynotification } from '../mainservice.service';
import { DianotificationComponent } from '../dianotification/dianotification.component';
@Component({
  selector: 'app-displaynotification',
  templateUrl: './displaynotification.component.html',
  styleUrls: ['./displaynotification.component.css']
})
export class DisplaynotificationComponent implements OnInit {
  displaynotification: displaynotification[] = [];
  res;
  notivalue;
  mnoti;
  constructor(private Mainservice:MainserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('mainid');
  ngOnInit(): void {
    const maintananceid = {
      username: this.logininfo
    }
    this.Mainservice.getnotificationdata(maintananceid)
      .subscribe(data => {
        console.log('success', data);
        this.displaynotification = data;
        console.log(+data[0].QMNUM);
        console.log(localStorage.getItem('mainid'));
      }
      );
  }
edit(QMNUM){
  this.notivalue = QMNUM;
  //console.log(this.notivalue);
  //alert(this.notivalue);
  this.res = this.displaynotification.filter(it => new RegExp(QMNUM).test(it.QMNUM));
  //alert(JSON.stringify(this.res));
  sessionStorage.setItem("mnoti",JSON.stringify(this.res));
  this.dialog.open(DianotificationComponent);
}
}
