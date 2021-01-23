import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
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
  },
  {
    path:'login',
    component:LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
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
