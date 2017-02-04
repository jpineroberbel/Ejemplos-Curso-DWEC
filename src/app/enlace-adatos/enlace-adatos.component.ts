import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-enlace-adatos',
  templateUrl: './enlace-adatos.component.html',
  styleUrls: ['./enlace-adatos.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}

})
export class EnlaceADatosComponent implements OnInit {

  contenidoDelInput: string;
  listaOpciones = {opcion: 'Opcion 1', seleccionada: false};
  constructor() {
    this.contenidoDelInput="";
   }

   capturaEventoForm(objetoEvent)
   {
      console.log("Se ha capturado el evento onSubmit del Form")
     
   }

   pulsadaTecla(objetoEvent)
   {
     console.log("Se ha capturado el evento al pulsar la tecla ENTER")
     event.preventDefault(); // Parar comportamiento por defecto, o sea, que no intente mandar nada al servidor (PUSH)
   }

   botonPulsado()
   {
     console.log("Se ha pulsado el botón")
   }

  ngOnInit() {
  }

}
