import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  username="";
  email="";
  password="";
  rol="";
  constructor() { }

  ngOnInit(): void {
  }

}
