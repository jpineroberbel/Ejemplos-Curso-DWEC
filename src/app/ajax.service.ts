import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class AJAXService {

  private listaNoticias: Subject<any> = new Subject<any>();
  constructor(private ajax:Http) {

// Timer sólo para activar en caso de usar searchV2
setTimeout(() => {  
  this.peticionAjax();
}, 2000);

// Simular cambio en datos (o cómo hacer la comunicación entre eventos que usan un mismo servicio (Hijo->Padre))
setTimeout(() => {  
  this.avisa();
}, 6000);

   }

 // Método para hacer una peticion.
  searchV1(): Observable<any> {  
    return this.ajax
      .get('http://www.rtve.es/api/noticias.json')
      .map(response => response.json());
  }

  searchV2(): Observable<any> {  
    return this.listaNoticias.asObservable();
  }

  peticionAjax(){
       this.ajax.get('http://www.rtve.es/api/noticias.json')
      .map(response => response.json())
      .subscribe( data => this.listaNoticias.next(data))

  }  
avisa(): void {
    let jose = {page:{items:[{title:"Hemos avisado de un cambio!!!"}]}};
    this.listaNoticias.next(jose);
  }



}
