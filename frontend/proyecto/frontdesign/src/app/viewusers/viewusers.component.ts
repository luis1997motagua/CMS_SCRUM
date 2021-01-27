import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
import {UserI} from '../models/user.interface';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import {Users} from '../models/user.class';
import { ActivatedRoute, Params } from '@angular/router';//directivas para extraer valores de la URI

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(public mantservice:MantenimientoService, private route: ActivatedRoute) { }

  emailsearch="";
  data=new Users();
  ngOnInit(): void {
  

  }
  
  searchUserByEmail(){
    if(this.emailsearch==''){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }
    else{
     this.mantservice.getOneUser(this.emailsearch).subscribe(des=>this.data=des);
     console.log(this.data);
    }
  }
  /* Obtener valores de la URL para el req.params
  const id = this.route.snapshot.paramMap.get('id');
  */


  
  

}
