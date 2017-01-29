import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnlaceADatosComponent } from './enlace-adatos/enlace-adatos.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ComponenteConEntradaSalidaComponent } from './componente-con-entrada-salida/componente-con-entrada-salida.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { ServicioDatosEstaticosService } from './servicio-datos-estaticos.service'
import { UsarServicioComponent } from './usar-servicio/usar-servicio.component';
import { UsarServicioAJAXComponent } from './usar-servicio-ajax/usar-servicio-ajax.component';
import { PeticionAJAXSinServicioComponent } from './peticion-ajaxsin-servicio/peticion-ajaxsin-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    EnlaceADatosComponent,
    DirectivasEstructuralesComponent,
    ComponenteConEntradaSalidaComponent,
    LoginFacebookComponent,
    UsarServicioComponent,
    UsarServicioAJAXComponent,
    PeticionAJAXSinServicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ServicioDatosEstaticosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
