import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {RouterModule,Routes} from '@angular/router';
import { CalendarComponent  } from 'angular-customizable-calendar/calendar';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepassComponent } from './changepass/changepass.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {RegistroService} from './services/registro.service'
import {ReactiveFormsModule} from '@angular/forms'
import {AuthGuard} from './auth.guard';

import {TokenInterceptorService} from './services/token-interceptor.service';
import { MenuComponent } from './components/menu/menu.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChatComponent } from './chat/chat.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { ListactComponent } from './listact/listact.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';
import { ActsComponent } from './acts/acts.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'board',
    component:BoardComponent,
    //canActivate:[AuthGuard]
  },
  {
    path:'changepass',
    component:ChangepassComponent
  },
  {
    path:'mantenimiento',
    component:MantenimientoComponent 
  },
  {
    path:'viewusers',
    component:ViewusersComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'listact',
    component:ListactComponent
  },
  {
   path:'assignments',
   component:AssignmentsComponent 
  },
  {
    path:'viewtasks',
    component:ViewtasksComponent
  },
  {
    path:'acts',
    component:ActsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ChangepassComponent,
    MenuComponent,
    MantenimientoComponent,
    ViewusersComponent,
    ChatComponent,
    TasksComponent,
    ListactComponent,
    AssignmentsComponent,
    ViewtasksComponent,
    ActsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    ScrollingModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [
    RegistroService,
    /*AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }*/
],
  bootstrap: [AppComponent]
})
export class AppModule { }
