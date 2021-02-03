import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {MantenimientoService} from '../services/mantenimiento.service';
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  username="";
  email="";
  password="";
  rol="";
  mensaje:string;
  usuario:string;
  constructor(public mantservice:MantenimientoService) { }

  ngOnInit(): void {
     this.usuario = localStorage.getItem('username');
  }

 
  registarUser():void{
     if(this.username =='' ||  this.email == '' ||  this.password == ''){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
     }else{
        this.mantservice.newUser(this.username,this.email,this.password,this.rol);
        swal.fire('Nuevo Usuario','!El usuario ' + `${this.username} ` + 'ha sido registrado','success');
        this.username='';
        this.email='';
        this.password = '';
     }
  }
}
