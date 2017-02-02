import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, edadMinima?: any): any {
    console.log(value)
    return value.filter(person => {
      return person.age >= edadMinima;
    });
    
  }

}
