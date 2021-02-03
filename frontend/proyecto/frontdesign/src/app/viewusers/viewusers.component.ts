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


  users;
 

  

  ngOnInit(): void {
  
    this.users = this.mantservice.getAllUsers();
    
  }

  RemoveUserfromSystem(id):void{
    swat.fire({
      title: 'Eliminar usuario',
      text: "¿Desea eliminar este usuario del sistema?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.mantservice.deleteUser(id).subscribe();
        alert('!usuario eliminado con exito!');
        window.location.reload();    
      }
    });
  }
  

  
  

}
