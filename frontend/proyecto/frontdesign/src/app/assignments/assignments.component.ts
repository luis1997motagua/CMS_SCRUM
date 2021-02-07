import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  tareas;
  users;
  username;
  titulo;
  fechainicio;
  fechafinal;
  constructor(public mantenimiento:MantenimientoService, public dataservice:DataService) { }

  ngOnInit(): void {
    //this.tareas = this.mantenimiento.getAllTasks();
    console.log(this.tareas);
   // this.users = this.mantenimiento.getAllUsers();
    console.log(this.users)
  }
  
  addUserTask():void{
    if(this.titulo=='' || this.tareas=='' || this.fechafinal == null || this.fechainicio == null){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }else{
      this.dataservice.asignedTask(this.titulo,this.username,this.fechainicio,this.fechafinal).subscribe();
      swat.fire('Asignacion de Tareas','!Tarea asignada con exito!','success');
      this.username = '';
      this.titulo = '';
      this.fechainicio = null;
      this.fechafinal = null;
      
    }
  }
  
  /* Obtener valores de la URL para el req.params
  const id = this.route.snapshot.paramMap.get('id');
  */


  


}
