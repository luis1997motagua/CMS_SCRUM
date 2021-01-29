import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(public httpclient:HttpClient) { }

  private urlApi:string = 'http://localhost:4000/api/auth';
  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');
  user:Users[];

 public newUser(username:string,email:string,password:string,rol:any){
    return this.httpclient.post(`${this.urlApi}/signup-superadmin`,{"username":username,"email":email,"password":password,"roles":rol},{headers:this.cuerpo}).subscribe();
  }

 public getOneUser(email):Observable<any>{
    return this.httpclient.get(`${this.urlApi}/get-one-user/${email}`);
 }

 public deleteUser(id):Observable<any>{
   return this.httpclient.delete(`${this.urlApi}/remove-user/${id}`);
 }

}
