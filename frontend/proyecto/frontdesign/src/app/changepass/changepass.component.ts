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


  ChangePassForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor(public registroservice:RegistroService) { }

  ngOnInit(): void {
  }
  
  changePass(form):void{
     if(this.ChangePassForm.valid){
        this.registroservice.changePassword(form).subscribe(form=>{swal.fire('Actualizado','!se cambio su contraseña!','success')})
       this.ChangePassForm.reset('');
       console.log(form);
     }
  }

}
