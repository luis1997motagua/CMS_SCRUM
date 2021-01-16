import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

}
