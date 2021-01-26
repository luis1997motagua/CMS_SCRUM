import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  backendHost:string = 'http://localhost:4000/api/auth';
  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');
  token;
  constructor(private httpClient:HttpClient,public router:Router) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  /*addNewUser(datos:UserI):Observable<UserI>{
    return this.httpClient.post<UserI>(`${this.backendHost}/signup`,datos,{headers:this.cuerpo})
  }*/

  adduser(username:string,email: string, password: string) {
    this.httpClient.post(`${this.backendHost}/signup`, {username:username,email:email,password: password},{headers:this.cuerpo})
    .subscribe((resp: any) => {
    
      //this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('_id',resp.signed_user);
      })
    }

 /* login(datos:UserI):Observable<UserI>{
    return this.httpClient.post<UserI>(`${this.backendHost}/signin`,datos,{headers:this.cuerpo})

  }*/

  /*changePassword(datos):Observable<any>{
    console.log(datos)
       return this.httpClient.put<any>(`${this.backendHost}/change-password`,datos,{headers:this.cuerpo})
  }*/
}
