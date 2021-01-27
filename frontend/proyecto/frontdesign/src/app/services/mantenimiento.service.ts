import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(public httpclient:HttpClient) { }

  private urlApi:string = 'http://localhost:4000/api/auth';
  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');

 public newUser(username:string,email:string,password:string,rol:any){
    return this.httpclient.post(`${this.urlApi}/signup-superadmin`,{"username":username,"email":email,"password":password,"roles":rol},{headers:this.cuerpo})
    .subscribe();
  }

}
