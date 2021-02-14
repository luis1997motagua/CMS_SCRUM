import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { isToday } from 'date-fns';
import { th } from 'date-fns/locale';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:string;
  fecha:Date;
  constructor(public httpclient:HttpClient) { }

  backendHost:string = 'http://localhost:4000/api/users';
  backendTask:string = 'http://localhost:4000/api/tasks';

  cuerpo:any = new HttpHeaders().set('Content-Type','application/json');
   
  getAllComments():Observable<any>{
     return this.httpclient.get(`${this.backendHost}/getchat`);
   }

   postComment(comentario:string,archivo:any){
     this.user = localStorage.getItem('username');
     const f = new Date();
     this.fecha = f;
     return this.httpclient.post(`${this.backendHost}/addcomment`,{"username":this.user,"comentario":comentario,"archivo":archivo,"fechahora":this.fecha},{headers:this.cuerpo});
   }


   asignedTask(titulo:string,username:string,fechainicio:string,fechafinal:string){
     return this.httpclient.post(`${this.backendTask}/asign-task`,{"tarea":[titulo],"encargado":username,"fechainicio":fechainicio,"fechafinal":fechafinal},{headers:this.cuerpo});
   }

   GetUserTasks():Observable<any>{
    return this.httpclient.get(`${this.backendTask}/tareas`);
   }

   GetAsignedTasksBoard():Observable<any>{
     return this.httpclient.get(`${this.backendTask}/asigns`);
   }

   AsignedStateTask(titulo:string,estado:string,fechacumplimiento:string,color:any){
     return this.httpclient.post(`${this.backendTask}/new-state-task`,{"titulo":titulo,"estado":estado,"fechacumplimiento":fechacumplimiento,"color":color},{headers:this.cuerpo});
   }

   UpdateStateTask(titulo:string,estado:string,fechacumplimiento:string,color:any){
      return this.httpclient.put(`${this.backendTask}/cambiar-estado`,{"titulo":titulo,"estado":estado,"fechacumplimiento":fechacumplimiento,"color":color},{headers:this.cuerpo});
   }

   GetStateTask():Observable<any>{
      return this.httpclient.get(`${this.backendTask}/view-states-tasks`);
   }
}
