import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
@Component({
  selector: 'app-listact',
  templateUrl: './listact.component.html',
  styleUrls: ['./listact.component.css']
})
export class ListactComponent implements OnInit {

  allTasks;
  id;
  constructor(public mantenimiento:MantenimientoService) { }

  ngOnInit(): void {
    this.allTasks = this.mantenimiento.getAllTasks();

  }

  RemoveTask(id):void{
  
    swat.fire({
      title: 'Eliminar tarea',
      text: "¿Desea eliminar tarea?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.mantenimiento.deleteTask(id).subscribe();
        alert('!tarea eliminada con exito!');
        window.location.reload();
    
        
      }
    });
  }

}
