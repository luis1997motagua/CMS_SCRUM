import { Component, Input, OnInit } from '@angular/core';
import {RegistroService} from '../services/registro.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
 
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
    
   if(this.username == '' && this.password == '' && this.email == ''){
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '!No puede dejar vacios los campos!'
        });
   }else{
        this.registroservice.adduser(this.username,this.email, this.password);
        swal.fire('Nuevo Usuario','!Se registro en el sistema!','success');
        this.username = '';
        this.password = '';
        this.email = '';
   }  

  }
 
}
