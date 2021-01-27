import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {UserI} from '../models/user.interface';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Users} from '../models/user.class';
@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(public httpclient:HttpClient) { }

  private urlApi:string = 'http://localhost:4000/api/auth';
  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');
  data: Array<Object>;

 public newUser(username:string,email:string,password:string,rol:any){
    return this.httpclient.post(`${this.urlApi}/signup-superadmin`,{"username":username,"email":email,"password":password,"roles":rol},{headers:this.cuerpo}).subscribe();
  }

  public getOneUser(email:string):Observable<Users>{
    return this.httpclient.get<Users>(`${this.urlApi}/get-one-user/:${email}`)
}

}
