import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {RegistroService} from '../services/registro.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:RegistroService) { }

  intercept(req,next){
    const tokenizeReq= req.clone({
      setHeaders:{
          Authorization: `Bearer ${this.authService.getoken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
