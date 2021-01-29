import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario:string;
  constructor(public route:Router) { }
  
  ngOnInit(): void {
    this.usuario = localStorage.getItem('username');
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('_id');
    this.route.navigate(['/login']);
  }

}
