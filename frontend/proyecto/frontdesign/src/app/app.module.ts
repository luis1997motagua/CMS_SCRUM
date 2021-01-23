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
import { SignupComponent } from './signup/signup.component';
import { ChangepassComponent } from './changepass/changepass.component';
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
    path:'board',
    component:BoardComponent
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
    path:'changepass',
    component:ChangepassComponent
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
    ChangepassComponent
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
