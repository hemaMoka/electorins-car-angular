import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('user') != null) {
      this.islogin.next(true)
    } else {
      this.islogin.next(false)
    }
  }
  islogin = new BehaviorSubject(false);

  signUp(data: any): Observable<any>{
    return this._HttpClient.post('https://elctronic-car.onrender.com/signin', data);
  }

  getUser(): Observable<any>{
    return this._HttpClient.get("https://elctronic-car.onrender.com/signin");
  }

  getCars(): Observable<any>{
    return this._HttpClient.get("https://elctronic-car.onrender.com/cars")
  }

  getAgancy(): Observable<any>{
    return this._HttpClient.get("https://elctronic-car.onrender.com/agancy")
  }

  getStations(): Observable<any>{
    return this._HttpClient.get("https://elctronic-car.onrender.com/stations")
  }
}
