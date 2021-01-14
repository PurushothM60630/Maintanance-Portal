import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-diaworkorder',
  templateUrl: './diaworkorder.component.html',
  styleUrls: ['./diaworkorder.component.css']
})
export class DiaworkorderComponent implements OnInit {
  wo = sessionStorage.getItem("mwo");
  json = JSON.parse(this.wo);
  editform:FormGroup;
  public userdetails=[];
  constructor(private mainservice:MainserviceService) {
    this.editform = new FormGroup({
      "orderno" : new FormControl(),
      "priority" : new FormControl(),
      "equipmentnumber" : new FormControl(),
      "notificationno" : new FormControl(),
      "workcenter" :new FormControl(),
      "responsibleperson" :new FormControl(),
      "maintananceplan":new FormControl(),
      "maintananceitem":new FormControl(),
      "salesdocumenttype":new FormControl(),
      "ordercategory" :new FormControl(),
      "createddate" :new FormControl(),
      "functionallocation" :new FormControl(),
    /*  "reportingperson":new FormControl(), */
      "maintananceplant":new FormControl(),
      "startdate":new FormControl(),
      "finishdate":new FormControl(),
      "keyfortasklistgroup":new FormControl(),
      "groupcenter":new FormControl(),
      "generalname":new FormControl(),
    })
   }

  ngOnInit(): void {
    console.log(this.json[0].AUFNR);
    this.editform.controls['orderno'].setValue(this.json[0].AUFNR),
    this.editform.controls['priority'].setValue(this.json[0].PRIOK),
    this.editform.controls['equipmentnumber'].setValue(this.json[0].EQUNR),
    this.editform.controls['notificationno'].setValue(this.json[0].QMNUM),
    this.editform.controls['workcenter'].setValue(this.json[0].GEWRK),
    this.editform.controls['responsibleperson'].setValue(this.json[0].ANING),
    this.editform.controls['maintananceplan'].setValue(this.json[0].WARPL),
    this.editform.controls['maintananceitem'].setValue(this.json[0].WAPOS),
    this.editform.controls['salesdocumenttype'].setValue(this.json[0].AUART),
    this.editform.controls['ordercategory'].setValue(this.json[0].AUTYP),
    this.editform.controls['createddate'].setValue(this.json[0].ERDAT),
    this.editform.controls['functionallocation'].setValue(this.json[0].TPLNR),
    this.editform.controls['maintananceplant'].setValue(this.json[0].SWERK),
    this.editform.controls['startdate'].setValue(this.json[0].GLTRP),
    this.editform.controls['finishdate'].setValue(this.json[0].GSTRP),
    this.editform.controls['keyfortasklistgroup'].setValue(this.json[0].PLNNR),
    this.editform.controls['groupcenter'].setValue(this.json[0].PLNAL),
    this.editform.controls['generalname'].setValue(this.json[0].KTEXT)
  }
  save(){
    this.editform.disable();
    const updateworkorder = {
      orderno:this.editform.controls['orderno'].value,
      notificationno: this.editform.controls['notificationno'].value,
      priority:this.editform.controls['priority'].value,
      equipmentnumber:this.editform.controls['equipmentnumber'].value,
      workcenter:this.editform.controls['workcenter'].value,
      responsibleperson:this.editform.controls['responsibleperson'].value,
      maintananceplan:this.editform.controls['maintananceplan'].value,
      maintananceitem:this.editform.controls['maintananceitem'].value,
      salesdocumenttype:this.editform.controls['salesdocumenttype'].value,
      ordercategory:this.editform.controls['ordercategory'].value,
      createddate:this.editform.controls['createddate'].value,
      functionallocation:this.editform.controls['functionallocation'].value,
      maintananceplant:this.editform.controls['maintananceplant'].value,
      startdate:this.editform.controls['startdate'].value,
      finishdate:this.editform.controls['finishdate'].value,
      keyfortasklistgroup:this.editform.controls['keyfortasklistgroup'].value,
      groupcenter:this.editform.controls['groupcenter'].value,
      generalname:this.editform.controls['generalname'].value

   }
   this.mainservice.updateworkorder(updateworkorder)
    .subscribe( data => {
       this.userdetails = data;
       console.log(data);
    } 
      );
  }
}
