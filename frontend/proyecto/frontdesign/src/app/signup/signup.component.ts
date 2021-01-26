import { Component, Input, OnInit } from '@angular/core';
import {RegistroService} from '../services/registro.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UserI} from '../models/user.interface';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
 
  username='';
  email = '';
  password = '';

  constructor(public registroservice:RegistroService){}

  ngOnInit(): void {
  }

  /*RegisterUser(form:UserI):void{
    if(this.loginForm.valid){
      this.registroservice.addNewUser(form).subscribe(form=>{swal.fire('Nuevo Usuario','!Se registro en el sistema!','success')})
      this.loginForm.reset('')
    }
  }*/
  RegistroUsuario():void {
  
    this.registroservice.adduser(this.username,this.email, this.password);
    swal.fire('Nuevo Usuario','!Se registro en el sistema!','success');
    this.username = '';
    this.password = '';
    this.email = '';
    }
 
}
