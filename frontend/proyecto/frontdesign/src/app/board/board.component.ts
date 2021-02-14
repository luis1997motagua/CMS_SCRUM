import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { arrow, start } from '@popperjs/core';
import { CalendarView} from 'angular-calendar';
import {CalendarEvent} from 'angular-calendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { startOfDay } from 'date-fns';
import { isSameDay, isSameMonth } from 'date-fns';
import { title } from 'process';
import {DataService} from '../services/data.service';
import { colors } from '../models/colors';
//import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-board',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  tasks;

  constructor(public data:DataService) { }

  ngOnInit(): void {
    
    
  }

  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  setView(view: CalendarView) {
    this.view = view;
  }

  /*events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'wl'
    },
    {
      start: startOfDay(new Date()),
      title: 'all',
    }
  ]
*/
 /*let data=fromdb();
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

  events: CalendarEvent[] = [
    {
      title: 'Mantenimiento MongoDb',
      color: colors.yellow,
      start: new Date(),
    },
    {
      title: 'Revisar Updates',
      color: colors.blue,
      start: new Date(),
    },
    {
      title: 'Cambio de Logo',
      color: colors.red,
      start: new Date("2/15/2021"),
    },
    {
      title: 'Mostrar Lista Usuarios',
      color: colors.blue,
      start: new Date("2/22/2021"),
    },
    {
      title: 'Pruebas Unitarias',
      color: colors.red,
      start: new Date("2/22/2021"),
    },
    {
      title: 'Insertar Margenes',
      color: colors.blue,
      start: new Date(),
    }
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

}
