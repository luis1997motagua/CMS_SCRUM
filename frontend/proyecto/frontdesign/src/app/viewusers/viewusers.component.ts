import { Component, OnInit } from '@angular/core';
import {MantenimientoService} from '../services/mantenimiento.service';
import swat from 'sweetalert2';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Params } from '@angular/router';//directivas para extraer valores de la URI
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css'],
  providers:[MantenimientoService]
})
export class ViewusersComponent implements OnInit {

  constructor(public mantservice:MantenimientoService, private route: ActivatedRoute,
    public httpclient:HttpClient) { }

  emailsearch="";
  users:any = [];
  
  private urlApi:string = 'http://localhost:4000/api/auth';

  ngOnInit(): void {
  

  }
  
  searchUserByEmail(){
    if(this.emailsearch==''){
      swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede dejar vacios los campos!'
      });
    }
    else{
        return this.httpclient.get(`${this.urlApi}/get-one-user/:${this.emailsearch}`)
        .subscribe(res=>{
          this.users = res;
          console.log(this.users);
        })
      }
  }
  /* Obtener valores de la URL para el req.params
  const id = this.route.snapshot.paramMap.get('id');
  */


  
  

}
