import { Component, OnInit } from '@angular/core';
import { CalendarView} from 'angular-calendar';
import {CalendarEvent} from 'angular-calendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { startOfDay } from 'date-fns';
//import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]

 /* let data=fromdb();
  for(let x of data)
  {
  this.events = [
            ...this.events,
            {
    start:x["appointment_date"],
    title:x["patient_name"]+x["medical_problem"]
      }
    ]
  }*/


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //this.openAppointmentList(date)
  }

}
