import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { FormControl,FormGroup} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-createnotification',
  templateUrl: './createnotification.component.html',
  styleUrls: ['./createnotification.component.css']
})
export class CreatenotificationComponent implements OnInit {
  userform:FormGroup;
  public createnotification=[];
  inserted:string = "inserted";
  ngOnInit(): void {
  }

  constructor(private loginservice:MainserviceService) {
    this.userform = new FormGroup({
      "notificationid" : new FormControl(),
      "shorttext" :new FormControl(),
      "notificationtype" :new FormControl(),
      "dateofnotification" :new FormControl(),
      "dateofnotificationcomplete" :new FormControl(),
      "priority" :new FormControl(),
      "maintananceplant" :new FormControl(),
      "equipmentnumber" :new FormControl(),
      "functionallocation" :new FormControl(),
      "reportingperson":new FormControl(),
      "malfunctionstart":new FormControl(),
      "malfunctionend":new FormControl(),
      "breakdownindicator":new FormControl(),
      "maintananceplan":new FormControl(),
      "maintananceitem":new FormControl(),
      "keyfortasklistgroup":new FormControl(),
      "groupcenter":new FormControl(),
    /*  "objectnumber":new FormControl() */
    })
   }
  public logininfo = localStorage.getItem('mainid');
  createnewnotification(){
   const notificationdata ={
     notificationid : this.userform.controls['notificationid'].value,
     shorttext :this.userform.controls['shorttext'].value,
     notificationtype :this.userform.controls['notificationtype'].value,
     dateofnotification :this.userform.controls['dateofnotification'].value,
     dateofnotificationcomplete :this.userform.controls['dateofnotificationcomplete'].value,
     priority :this.userform.controls['priority'].value,
     maintananceplant :this.userform.controls['maintananceplant'].value,
     equipmentnumber :this.userform.controls['equipmentnumber'].value,
     functionallocation :this.userform.controls['functionallocation'].value,
     reportingperson :this.userform.controls['reportingperson'].value,
     malfunctionstart :this.userform.controls['malfunctionstart'].value,
     malfunctionend :this.userform.controls['malfunctionend'].value,
     breakdownindicator :this.userform.controls['breakdownindicator'].value,
     maintananceplan: this.userform.controls['maintananceplan'].value,
     maintananceitem :this.userform.controls['maintananceitem'].value,
     keyfortasklistgroup :this.userform.controls['keyfortasklistgroup'].value,
     groupcenter :this.userform.controls['groupcenter'].value,
    /* objectnumber :this.userform.controls['objectnumber'].value */
   }
   this.loginservice.createnotificationdata(notificationdata)
   .subscribe( data => {
      this.createnotification = data;
      console.log(data);
      
  });
  Swal.fire('Notification has been created!');
}
  
}
