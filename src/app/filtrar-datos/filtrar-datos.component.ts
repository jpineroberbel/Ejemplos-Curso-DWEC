import { Component, OnInit } from '@angular/core';
import { FiltroPipe } from '../filtro.pipe'
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-filtrar-datos',
  templateUrl: './filtrar-datos.component.html',
  styleUrls: ['./filtrar-datos.component.css'],
    animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FiltrarDatosComponent implements OnInit {

 sliderValue=0;
 people = [{
          name: 'Justin Bieber',
          age: 21
        }, {
          name: 'Miley Cyrus',
          age: 23
        }, {
          name: 'John Legend',
          age: 37
        }, {
        	name: 'Betty White',
          age: 94
        }, {
          name: 'Roger Waters',
          age: 72
        }, {
          name: 'Larry Page',
          age: 42
        }, {
        	name: 'You played around with the code, awesome!',
          age: 10
        }
        ]
  constructor() { }

  ngOnInit() {
  }

}
