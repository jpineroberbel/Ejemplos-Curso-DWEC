import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css'],
    animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DirectivasEstructuralesComponent implements OnInit {
  
  contenidoDelInput: string;
  listaOpciones = [{opcion: 'Opcion 1', seleccionada: false}, {opcion: 'Opcion 2', seleccionada: true}, {opcion: 'Opcion 3', seleccionada: false}];

  constructor() {
    this.contenidoDelInput="";
   }

   eventoUsandoIndice(indice)
   {
     console.log("Se ha seleccionado el elemento en la posicion "+indice)
   }
  ngOnInit() {
  }

}
