import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { MainserviceService } from '../mainservice.service';
@Component({
  selector: 'app-dianotification',
  templateUrl: './dianotification.component.html',
  styleUrls: ['./dianotification.component.css']
})
export class DianotificationComponent implements OnInit {
  notif = sessionStorage.getItem("mnoti");
  json = JSON.parse(this.notif);
  editform:FormGroup;
  public userdetails=[];
  constructor(private mainservice:MainserviceService) { 
    this.editform = new FormGroup({
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
    })
  }

  ngOnInit(): void {
    console.log(this.json[0].QMNUM);
    this.editform.controls['notificationid'].setValue(this.json[0].QMNUM),
    this.editform.controls['shorttext'].setValue(this.json[0].QMTXT),
    this.editform.controls['notificationtype'].setValue(this.json[0].QMART),
    this.editform.controls['dateofnotification'].setValue(this.json[0].QMDAT),
    this.editform.controls['dateofnotificationcomplete'].setValue(this.json[0].QMDAB),
    this.editform.controls['priority'].setValue(this.json[0].PRIOK),
    this.editform.controls['maintananceplant'].setValue(this.json[0].SWERK),
    this.editform.controls['equipmentnumber'].setValue(this.json[0].EQUNR),
    this.editform.controls['functionallocation'].setValue(this.json[0].TPLNR),
    this.editform.controls['reportingperson'].setValue(this.json[0].QMNAM),
    this.editform.controls['malfunctionstart'].setValue(this.json[0].AUSVN),
    this.editform.controls['malfunctionend'].setValue(this.json[0].AUSBS),
    this.editform.controls['maintananceplan'].setValue(this.json[0].WARPL),
    this.editform.controls['maintananceitem'].setValue(this.json[0].WAPOS),
    this.editform.controls['keyfortasklistgroup'].setValue(this.json[0].PLNNR),
    this.editform.controls['groupcenter'].setValue(this.json[0].PLNAL)
  }
 save(){
  this.editform.disable();
  const updatenotification = {
    notificationid: this.editform.controls['notificationid'].value,
    shorttext : this.editform.controls['shorttext'].value,
    notificationtype: this.editform.controls['notificationtype'].value,
    dateofnotification : this.editform.controls['dateofnotification'].value,
    dateofnotificationcomplete: this.editform.controls['dateofnotificationcomplete'].value,
    priority: this.editform.controls['priority'].value,
    maintananceplant : this.editform.controls['maintananceplant'].value,
    equipmentnumber: this.editform.controls['equipmentnumber'].value,
    functionallocation: this.editform.controls['functionallocation'].value,
    reportingperson: this.editform.controls['reportingperson'].value,
    malfunctionstart: this.editform.controls['malfunctionstart'].value,
    malfunctionend: this.editform.controls['malfunctionend'].value,
    maintananceplan: this.editform.controls['maintananceplan'].value,
    maintananceitem: this.editform.controls['maintananceitem'].value,
    keyfortasklistgroup: this.editform.controls['keyfortasklistgroup'].value,
    groupcenter: this.editform.controls['groupcenter'].value,
 }
 this.mainservice.updatenotification(updatenotification)
    .subscribe( data => {
       this.userdetails = data;
       console.log(data);
    } 
      );
 }
}
