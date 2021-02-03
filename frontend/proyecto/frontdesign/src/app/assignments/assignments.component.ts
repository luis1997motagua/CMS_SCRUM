import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {


  tareas;
  constructor(public mantenimiento:MantenimientoService) { }

  ngOnInit(): void {
    this.tareas = this.mantenimiento.getAllTasks();
    console.log(this.tareas);
  }

}
