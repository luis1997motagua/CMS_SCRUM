import { Component, OnInit,Input } from '@angular/core';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import swat from 'sweetalert2';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  allComments;
  archivo;
  comentario;
  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.allComments =  this.dataservice.getAllComments();
  
  }
  
  addComment(){
    if(this.comentario == ''){
       swat.fire({
        icon: 'error',
        title: 'Oops...',
        text: '!No puede postear un comentario en blanco!'
      });
    }
    else
    {
      this.dataservice.postComment(this.comentario,this.archivo).subscribe();
      swat.fire({
        title: '!Comentario añadido con exito!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.comentario = '';
      this.allComments =  this.dataservice.getAllComments();
    }
 
    


   }

}
