import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {RegistroService} from './services/registro.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:RegistroService,private router:Router){
    
  }
  canActivate():boolean{
      if(this.authService.loggedIn()){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
    
  }
  

}
