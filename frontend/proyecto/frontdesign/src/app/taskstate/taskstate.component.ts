import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import swat from 'sweetalert2';
@Component({
  selector: 'app-taskstate',
  templateUrl: './taskstate.component.html',
  styleUrls: ['./taskstate.component.css']
})
export class TaskstateComponent implements OnInit {


  titulo;
  estado;
  fechacumplimiento;
  color;

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
  }

  StateTask():void{
    if(this.titulo==''){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }
    else{
      this.dataservice.AsignedStateTask(this.titulo,this.estado,this.fechacumplimiento,this.color).subscribe();
      swat.fire('Estado','!El estado de la tarea se agrego con exito!','success');
      this.titulo = '';
      this.estado = '';
      this.fechacumplimiento = null;
      this.color = null;
    }
  }

  UpdateTask():void{
    if(this.titulo==''){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }else{
      this.dataservice.UpdateStateTask(this.titulo,this.estado,this.fechacumplimiento).subscribe();
      swat.fire('Estado','!El estado de la tarea se actualizo con exito!','success');
      this.titulo = '';
      this.estado = '';
      this.fechacumplimiento = null;
      this.color = null;
    }
  }

    

}
