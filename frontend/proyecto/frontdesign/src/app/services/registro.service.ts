import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
   private urlAPI = 'http://localhost:4000/api/auth/signup';
  constructor(private httpClient:HttpClient) { }

}
