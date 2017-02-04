import { Component, OnInit } from '@angular/core';
import { ServicioDatosEstaticosService } from '../servicio-datos-estaticos.service'
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-usar-servicio',
  templateUrl: './usar-servicio.component.html',
  styleUrls: ['./usar-servicio.component.css'],
  providers: [ ServicioDatosEstaticosService ],
     animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UsarServicioComponent implements OnInit {

  datosDelComponente: any;
  // Inyectamos al constructor el servicio a usar
  constructor(private servicioQueProporcionaDatos: ServicioDatosEstaticosService) { 
    // Descomentar para usar con la versión 1 getDatos (no asíncrona)
    // this.datosDelComponente = this.servicioQueProporcionaDatos.getDatos();

    // Versión asíncrona
    this.servicioQueProporcionaDatos.getDatosV2().then( datos => this.datosDelComponente=datos);
  }

  ngOnInit() {
  }

}
