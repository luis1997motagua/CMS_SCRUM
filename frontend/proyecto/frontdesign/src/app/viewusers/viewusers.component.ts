import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Params } from '@angular/router';//directivas para extraer valores de la URI
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css'],
  providers:[MantenimientoService]
})
export class ViewusersComponent implements OnInit {

  constructor(public mantservice:MantenimientoService, private route: ActivatedRoute) { }

  emailsearch="";
  users=null;
  
  

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
           this.mantservice.getOneUser(this.emailsearch).subscribe(
             data => {
               this.users = Array.of(data);
               console.log(data);
             },
             error=>{
              swat.fire({
                icon: 'error',
                title: 'Oops...',
                text: '!No existe ese usuario!'
              });
             });
      }
  }
  /* Obtener valores de la URL para el req.params
  const id = this.route.snapshot.paramMap.get('id');
  */


  
  

}
