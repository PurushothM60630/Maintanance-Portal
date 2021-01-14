import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
export interface logindata {

  username: string,
  password: string
}
export interface createnotification {
  AUSBS: string,
  AUSVN: string,
  EQUNR: string,
  MSAUS: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMART: string,
  QMDAB: string,
  QMDAT: string,
  QMNAM: string,
  QMNUM: string,
  QMTXT: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
export interface createworkorder {
  ANING: string,
  AUART: string,
  AUFNR: string,
  AUTYP: string,
  EQUNR: string,
  ERDAT: string,
  GEWRK: string,
  GLTRP: string,
  GSTRP: string,
  KTEXT: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMNUM: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
export interface displaynotification {
  AUSBS: string,
  AUSVN: string,
  EQUNR: string,
  MSAUS: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMART: string,
  QMDAB: string,
  QMDAT: string,
  QMNAM: string,
  QMNUM: string,
  QMTXT: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
export interface displayworkorder{
  ANING: string,
  AUART: string,
  AUFNR: string,
  AUTYP: string,
  EQUNR: string,
  ERDAT: string,
  GEWRK: string,
  GLTRP: string,
  GSTRP: string,
  KTEXT: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMNUM: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
export interface updateworkorder{
  ANING: string,
  AUART: string,
  AUFNR: string,
  AUTYP: string,
  EQUNR: string,
  ERDAT: string,
  GEWRK: string,
  GLTRP: string,
  GSTRP: string,
  KTEXT: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMNUM: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
export interface updatenotification{
  AUSBS: string,
  AUSVN: string,
  EQUNR: string,
  MSAUS: string,
  OBJNR: string,
  PLNAL: string,
  PLNNR: string,
  PRIOK: string,
  QMART: string,
  QMDAB: string,
  QMDAT: string,
  QMNAM: string,
  QMNUM: string,
  QMTXT: string,
  SWERK: string,
  TPLNR: string,
  WAPOS: string,
  WARPL: string
}
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);
  
  constructor(private http: HttpClient) { }
  postlogindata(loginPayload): Observable<logindata[]> {
    return this.http.post<logindata[]>( 'http://localhost:8080/' + 'maintanancelogin' , loginPayload );
  }
  createnotificationdata(notificationdata): Observable<createnotification[]>{
    return this.http.post<createnotification[]>( 'http://localhost:8080/' + 'maicnot' , notificationdata);
  }
  createworkorderdata(workorderdata): Observable<createworkorder[]>{
    return this.http.post<createworkorder[]>( 'http://localhost:8080/' + 'maicreateworkorder' , workorderdata);
  }
  getnotificationdata(mainid): Observable<displaynotification[]> {
    return this.http.post<displaynotification[]>('http://localhost:8080/' + 'maidisplaynotification',mainid );
  }
  getworkorderdata(mainid): Observable<displayworkorder[]> {
    return this.http.post<displayworkorder[]>('http://localhost:8080/' + 'maidisplayworkorder',mainid );
  }
  updatenotification(updatenotification): Observable<updatenotification[]>{
    return this.http.post<updatenotification[]>('http://localhost:8080/' + 'maiunot',updatenotification ); 
  }
  updateworkorder(updateworkorder): Observable<updateworkorder[]> {
    return this.http.post<updateworkorder[]>('http://localhost:8080/' + 'maiupdateworkorder',updateworkorder);
  }
}
