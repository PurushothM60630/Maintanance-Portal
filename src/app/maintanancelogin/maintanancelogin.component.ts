import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
@Component({
  selector: 'app-maintanancelogin',
  templateUrl: './maintanancelogin.component.html',
  styleUrls: ['./maintanancelogin.component.css']
})
export class MaintananceloginComponent implements OnInit {

  public loading ?:boolean;
  public username ='';
  public password ='';

  hide = true;
  constructor(private router: Router,private loginservice:MainserviceService) { }
  public logindetails = [];
  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm): void {
    this.loading = true;
    const loginPayload = {
      username: form.value["username"],
      password: form.value["password"]
    }
    this.loginservice.postlogindata(loginPayload)
      .subscribe(data => {
        console.log('success', data["Status"]);
        if (data["Status"] == 1) {
          this.router.navigate(['mnavbar']);
          localStorage.setItem('mainid', this.username);
          console.log(localStorage.getItem('mainid'));
        }
        else {
          alert("Invalid Username or Password");
          this.loading = false;
        }
      }
      ); 
    /*console.log(this.username);
    console.log(this.password);
    console.log(form.value["username"]);
    console.log(loginPayload);*/
  }
}
