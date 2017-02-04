import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-uso-pipes',
  templateUrl: './uso-pipes.component.html',
  styleUrls: ['./uso-pipes.component.css'],
     animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UsoPipesComponent implements OnInit {
  fechaActual: Date = new Date();
  valor: number=1.45;
  cadena:string="jose";
  
  constructor() { 

  }

  ngOnInit() {
    
  }

}
