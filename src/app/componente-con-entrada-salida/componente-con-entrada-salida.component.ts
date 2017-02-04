import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-componente-con-entrada-salida',
  templateUrl: './componente-con-entrada-salida.component.html',
  styleUrls: ['./componente-con-entrada-salida.component.css'],
     animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ComponenteConEntradaSalidaComponent implements OnInit {
  @Input() atributoEntrada: string;
  @Input() numeroEntrada: number;
  @Output() lanzaEvento = new EventEmitter <string>();
  
  constructor() {
    // Lanzará el evento cuando pasen 10 segundos
    setTimeout(() => {
          console.log("salta timeout")
          this.lanzaEvento.emit("Estoy lanzando un evento"); 
          // Además va a operar con el parámetro de entrada para que se compruebe
          // que éste es un miembro más de la clase
          this.numeroEntrada*=2;
        }, 10000);   

   }

  ngOnInit() {
  }

}
