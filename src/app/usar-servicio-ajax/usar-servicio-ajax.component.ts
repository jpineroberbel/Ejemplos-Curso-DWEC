import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service'
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-usar-servicio-ajax',
  templateUrl: './usar-servicio-ajax.component.html',
  styleUrls: ['./usar-servicio-ajax.component.css'],
  providers: [ AJAXService ],
     animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UsarServicioAJAXComponent implements OnInit {

  listaNoticias: any;

  constructor(private servicio:AJAXService) {
  
   }

  ngOnInit() {
    this.servicio.searchV2().subscribe(
      data => {this.listaNoticias=data.page.items; console.log(this.listaNoticias);},
    );

  
  }

}
     