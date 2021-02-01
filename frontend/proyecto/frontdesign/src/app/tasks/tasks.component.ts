import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public mantenimiento:MantenimientoService) { }
  estado;
  actividades;
  encargado;
  titulo;

  ngOnInit(): void {
  }

  NewTask():void{
    if(this.titulo == '' && this.actividades == '' && this.estado == '' && this.encargado==''){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }else{
      this.mantenimiento.addTask(this.titulo,this.actividades,this.estado,this.encargado).subscribe();
      swat.fire('Nueva Tarea','!Actividad registrada con exito!','success');
      this.titulo='';
      this.actividades='';
      this.estado='';
      this.encargado='';
    }
  }

}
