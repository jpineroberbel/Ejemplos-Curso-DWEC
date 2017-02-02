import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  parametro1:any;
  parametro2:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Recogemos los parametros de la URL
         this.route.params.subscribe(params => {
                this.parametro1 = params['param1']; 
         });
  }

}
