import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {RouterModule,Routes} from '@angular/router';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);
const routes: Routes = [
  {
    path:'',
    redirectTo:'board',
    pathMatch:'full'
  },
  {
    path:'board',
    component:BoardComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
