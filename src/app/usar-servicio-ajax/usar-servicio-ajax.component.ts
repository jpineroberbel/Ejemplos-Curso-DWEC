import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service'

@Component({
  selector: 'app-usar-servicio-ajax',
  templateUrl: './usar-servicio-ajax.component.html',
  styleUrls: ['./usar-servicio-ajax.component.css'],
  providers: [ AJAXService ]
})
export class UsarServicioAJAXComponent implements OnInit {

  artistas: any;

  constructor(private servicio:AJAXService) {
  
   }

  ngOnInit() {
    this.servicio.search().subscribe(
      data => {this.artistas=data; console.log(this.artistas);},
    );
  }

}
