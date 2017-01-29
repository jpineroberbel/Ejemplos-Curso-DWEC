import { Injectable } from '@angular/core';

@Injectable()
export class ServicioDatosEstaticosService {

  listaDatos: Array<string>;
  constructor() { 
      // Se crean los datos
      this.listaDatos=["Dato #1","Dato #2","Dato #3","Dato #4","Dato #5"]
      console.log("crea servicio")
  }

  // Primera versión - Problemas para obtener datos asíncronos.
  getDatos()
  {
    console.log("devuelve datos " + this.listaDatos)
    return this.listaDatos;
  }

  // Version mejorada asincrona con el uso de promesas
  getDatosV2()
  {
      return Promise.resolve(this.listaDatos);
  }
}
