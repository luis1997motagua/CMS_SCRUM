import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../services/registro.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UserI} from '../models/user.interface';
import swal from 'sweetalert2';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(public registro:RegistroService,public router:Router) { }

  ngOnInit(): void {
  }
  
  Entrar(form:UserI):void{
    /*this.registro.login(form).subscribe(res=>{
      this.router.navigateByUrl('/board');
    })*/
  }
 
 
}
