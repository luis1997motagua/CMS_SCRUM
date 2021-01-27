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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {RegistroService} from './services/registro.service'
import {ReactiveFormsModule} from '@angular/forms'
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { MenuComponent } from './components/menu/menu.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

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
    ViewusersComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
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
