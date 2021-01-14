import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaintananceloginComponent } from './maintanancelogin/maintanancelogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatenotificationComponent } from './createnotification/createnotification.component';
import { CreateworkorderComponent } from './createworkorder/createworkorder.component';
import { DisplaynotificationComponent } from './displaynotification/displaynotification.component';
import { DisplayworkorderComponent } from './displayworkorder/displayworkorder.component';
import { DianotificationComponent } from './dianotification/dianotification.component';
import { DiaworkorderComponent } from './diaworkorder/diaworkorder.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MaintananceloginComponent,
    NavbarComponent,
    CreatenotificationComponent,
    CreateworkorderComponent,
    DisplaynotificationComponent,
    DisplayworkorderComponent,
    DianotificationComponent,
    DiaworkorderComponent
  ],
  entryComponents :[
    DianotificationComponent,
    DiaworkorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,NoopAnimationsModule,
    FlexLayoutModule,MatFormFieldModule,
    MatInputModule,MatButtonModule,
    MatCardModule,MatMenuModule,
    MatToolbarModule,MatIconModule,
    MatSidenavModule,MatListModule,
    MatTabsModule,MatDialogModule,
    MatDatepickerModule,MatNativeDateModule,
    HttpClientModule,RouterModule
  ],
  providers: [MatDatepickerModule,MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
