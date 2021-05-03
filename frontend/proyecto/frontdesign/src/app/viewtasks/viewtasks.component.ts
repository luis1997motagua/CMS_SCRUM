import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { da } from 'date-fns/locale';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
 
  
  tasks;
  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.tasks = this.data.GetUserTasks();
  }



}
