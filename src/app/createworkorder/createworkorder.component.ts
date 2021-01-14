import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { FormControl,FormGroup} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-createworkorder',
  templateUrl: './createworkorder.component.html',
  styleUrls: ['./createworkorder.component.css']
})
export class CreateworkorderComponent implements OnInit {
  userform:FormGroup;
  public createworkorder=[];
  
  constructor(private loginservice:MainserviceService) { 
    this.userform = new FormGroup({
      "orderno" : new FormControl(),
      "priority" : new FormControl(),
      "equipmentnumber" : new FormControl(),
      "notificationno" : new FormControl(),
      "workcenter" :new FormControl(),
      "responsibleperson" :new FormControl(),
      "maintananceplan":new FormControl(),
      "maintananceitem":new FormControl(),
      "salesdocumenttype":new FormControl(),
    /*  "ordercategory" :new FormControl(), */
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
  public logininfo = localStorage.getItem('mainid');
  ngOnInit(): void {
  }
  createnewnotification(){
    const workorderdata ={
      orderno : this.userform.controls['orderno'].value,
    /*  ordercategory :this.userform.controls['ordercategory'].value, */
      priority :this.userform.controls['priority'].value,
      equipmentnumber :this.userform.controls['equipmentnumber'].value,
      notificationno :this.userform.controls['notificationno'].value,
      workcenter :this.userform.controls['workcenter'].value,
      /*reportingperson :this.userform.controls['reportingperson'].value, */
      responsibleperson :this.userform.controls['responsibleperson'].value,
      maintananceplan :this.userform.controls['maintananceplan'].value,
      maintananceitem :this.userform.controls['maintananceitem'].value,
      salesdocumenttype :this.userform.controls['salesdocumenttype'].value,
      createddate :this.userform.controls['createddate'].value,
      functionallocation :this.userform.controls['functionallocation'].value,
      maintananceplant :this.userform.controls['maintananceplant'].value,
      startdate :this.userform.controls['startdate'].value,
      finishdate :this.userform.controls['finishdate'].value,
      keyfortasklistgroup :this.userform.controls['keyfortasklistgroup'].value,
      groupcenter :this.userform.controls['groupcenter'].value,
      generalname :this.userform.controls['generalname'].value,
    }
    this.loginservice.createworkorderdata(workorderdata)
    .subscribe( data => {
       this.createworkorder = data;
       console.log(data);
       
   });
   Swal.fire('Work Order has been created!');
 }
}
