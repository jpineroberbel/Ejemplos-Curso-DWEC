import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnlaceADatosComponent } from './enlace-adatos/enlace-adatos.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ComponenteConEntradaSalidaComponent } from './componente-con-entrada-salida/componente-con-entrada-salida.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    EnlaceADatosComponent,
    DirectivasEstructuralesComponent,
    ComponenteConEntradaSalidaComponent,
    LoginFacebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
