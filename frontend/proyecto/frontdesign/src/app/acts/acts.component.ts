import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent implements OnInit {

 cont:number;
 tareas;

  constructor(public mantenimiento:MantenimientoService) { }

  ngOnInit(): void {
  
      this.tareas = this.mantenimiento.getAllTasks();
  }



}
