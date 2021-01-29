import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  allComments;
  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.allComments =  this.dataservice.getAllComments();
  }

}
