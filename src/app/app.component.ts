import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  capturaEvento(evento){
    console.log("He recibido un evento lanzado por un componente con el texto: "+evento)
  }
}
