import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-taskstateview',
  templateUrl: './taskstateview.component.html',
  styleUrls: ['./taskstateview.component.css']
})
export class TaskstateviewComponent implements OnInit {


  stateTasks;
  estado;

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.stateTasks = this.dataservice.GetStateTask();
  }

   GetAllTasksState():void{
     this.stateTasks = this.dataservice.GetStateTask();
     console.log(this.stateTasks);
   }

}
