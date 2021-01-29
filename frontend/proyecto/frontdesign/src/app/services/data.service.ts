import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpclient:HttpClient) { }

  backendHost:string = 'http://localhost:4000/api/users';

   getAllComments():Observable<any>{
     return this.httpclient.get(`${this.backendHost}/getchat`);
   }

}
