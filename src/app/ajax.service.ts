import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AJAXService {

  listaNoticias;
  constructor(private ajax:Http) { }

   get noticias(){
    return this.ajax.get("http://www.rtve.es/api/noticias.json").map(response=>response.json());
    }
}
