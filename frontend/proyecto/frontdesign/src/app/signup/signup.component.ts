import { Component, Input, OnInit } from '@angular/core';
import {RegistroService} from '../services/registro.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UserI} from '../models/user.interface';
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
    password: new FormControl('',Validators.required)
  })
 
  constructor(public registroservice:RegistroService){}

  ngOnInit(): void {
  }
  RegisterUser(form:UserI):void{
    
    if(this.loginForm.valid){
      this.registroservice.addNewUser(form).subscribe(form=>{swal.fire('Nuevo Usuario','!Se registro en el sistema!','success')})
      this.loginForm.reset('')
    }
    else{
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'no puede dejar vacio los campos o el email no es valido'
     }) 
    }
  }
 
}
