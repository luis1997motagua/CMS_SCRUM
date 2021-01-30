import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { isToday } from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:string;
  fecha:Date;
  constructor(public httpclient:HttpClient) { }

  backendHost:string = 'http://localhost:4000/api/users';
  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');

   getAllComments():Observable<any>{
     return this.httpclient.get(`${this.backendHost}/getchat`);
   }

   postComment(comentario:string,archivo:any){
     this.user = localStorage.getItem('username');
     const f = new Date();
     this.fecha = f;
     return this.httpclient.post(`${this.backendHost}/addcomment`,{"username":this.user,"comentario":comentario,"archivo":archivo,"fechahora":this.fecha},{headers:this.cuerpo});
   }
}
