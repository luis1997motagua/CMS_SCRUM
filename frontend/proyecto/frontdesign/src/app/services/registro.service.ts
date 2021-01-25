import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  backendHost:string = 'http://localhost:4000/api/auth';
   cuerpo:any = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient:HttpClient) { }

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

  addNewUser(datos:UserI):Observable<UserI>{
    return this.httpClient.post<UserI>(`${this.backendHost}/signup`,datos,{headers:this.cuerpo})
    }

  changePassword(){
    
  }
}
