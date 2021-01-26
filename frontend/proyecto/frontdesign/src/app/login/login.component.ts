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

 

  userlog='';
  passlog='';


  constructor(public registro:RegistroService,public router:Router) { }

  ngOnInit(): void {
  }
  
  Entrar():void{
    if(this.userlog == '' && this.passlog == ''){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }else{
      this.registro.login(this.userlog,this.passlog);
      this.userlog='';
      this.passlog='';
    }
    /*this.registro.login(form).subscribe(res=>{
      this.router.navigateByUrl('/board');
    })*/
  }
 
 
}
