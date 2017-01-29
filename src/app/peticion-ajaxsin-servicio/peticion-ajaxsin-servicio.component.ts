import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-peticion-ajaxsin-servicio',
  templateUrl: './peticion-ajaxsin-servicio.component.html',
  styleUrls: ['./peticion-ajaxsin-servicio.component.css']
})
export class PeticionAJAXSinServicioComponent implements OnInit {
  listaNoticias: any;

  constructor(private ajax:Http) { 
   
  }

  ngOnInit() {
   // Descomentar si quieres hacer la petición al cargar el componente
   // this.pideNoticias();
  }

   pideNoticias(){
     // Se hace una petición AJAX. El método subscribe indica 3 callbacks:
     // 1º -> Se llama al recibir la respuesta
     // 2º -> Se llama en caso de error
     // 3º -> Se llama al finalizar el ciclo de la petición
    this.ajax.get("http://www.rtve.es/api/noticias.json").subscribe(
      data => {console.log(data.json());this.listaNoticias=data.json().page.items},
      err =>console.log(err),
      () => console.log('Ha acabado la peticion')
    );
    }

}
