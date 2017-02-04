import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-rutas-hijas-yparametros',
  templateUrl: './rutas-hijas-yparametros.component.html',
  styleUrls: ['./rutas-hijas-yparametros.component.css'],
    animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class RutasHijasYParametrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
