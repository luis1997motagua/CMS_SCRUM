import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {UserI} from '../models/user.interface';
import swal from 'sweetalert2';
import {RegistroService} from '../services/registro.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {


  emailchange = '';
  passwordchange = '';

  ChangePassForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor(public registroservice:RegistroService) { }

  ngOnInit(): void {
  }
  
  changePass():void{
    if(this.emailchange == '' && this.passwordchange == ''){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }else{
      this.registroservice.changePassword(this.emailchange,this.passwordchange); 
      swal.fire('Cambio Contraseña','!su contraseña ha sido actualizada!','success');
      this.emailchange = '';
      this.passwordchange = '';
    }
        
  }

}
