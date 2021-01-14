import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintananceloginComponent } from './maintanancelogin/maintanancelogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatenotificationComponent } from './createnotification/createnotification.component';
import { CreateworkorderComponent } from './createworkorder/createworkorder.component';
import { DisplaynotificationComponent } from './displaynotification/displaynotification.component';
import { DisplayworkorderComponent } from './displayworkorder/displayworkorder.component';

const routes: Routes = [
  {path:'mainlogin', component:MaintananceloginComponent},
  {path:'mnavbar', component:NavbarComponent,
  children:[
    { path:'createnotification', 
      component:CreatenotificationComponent
    },
    { path:'createworkorder', 
      component:CreateworkorderComponent
    },
    { path:'displaynotification', 
      component:DisplaynotificationComponent
    },
    { path:'displayworkorder', 
      component:DisplayworkorderComponent
    },
  ]



}
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
