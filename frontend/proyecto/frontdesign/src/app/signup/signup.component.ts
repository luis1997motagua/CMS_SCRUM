import { Component, Input, OnInit } from '@angular/core';
import {RegistroService} from '../services/registro.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {UserI} from '../models/user.interface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
 
  constructor(public registroservice:RegistroService){}

  ngOnInit(): void {
  }
  RegisterUser(form:UserI):void{
    this.registroservice.addNewUser(form);
    console.log(form)
  }
  
}
