import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EnlaceADatosComponent } from './enlace-adatos/enlace-adatos.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ComponenteConEntradaSalidaComponent } from './componente-con-entrada-salida/componente-con-entrada-salida.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { ServicioDatosEstaticosService } from './servicio-datos-estaticos.service'
import { UsarServicioComponent } from './usar-servicio/usar-servicio.component';
import { UsarServicioAJAXComponent } from './usar-servicio-ajax/usar-servicio-ajax.component';
import { PeticionAJAXSinServicioComponent } from './peticion-ajaxsin-servicio/peticion-ajaxsin-servicio.component';
import { MaestroComponent } from './maestro/maestro.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RutasHijasYParametrosComponent } from './rutas-hijas-yparametros/rutas-hijas-yparametros.component';
import { FiltroPipe } from './filtro.pipe';
import { UsoPipesComponent } from './uso-pipes/uso-pipes.component';

// Se definen las rutas de la app. Cada una se corresponde con un componente
const routes: Routes = [
    // La ruta '' indica la ruta por defecto (antiguo index.html)
    { path: '', component: EnlaceADatosComponent },
    { path: 'Enlace_Datos', component: EnlaceADatosComponent },
    { path: 'Directivas', component: DirectivasEstructuralesComponent },
    { path: 'EntradaSalida', component: ComponenteConEntradaSalidaComponent },
    { path: 'LoginFacebook', component: LoginFacebookComponent },
    { path: 'AJAXSinServicio', component: PeticionAJAXSinServicioComponent },
      { path: 'AJAXConServicio', component: UsarServicioAJAXComponent },
     { path: 'servicio', component: UsarServicioComponent },
     { path: 'usoPipes', component: UsoPipesComponent },
    { path: 'rutasHijas', component: RutasHijasYParametrosComponent,
        children:[
          {path: "parametros", component: UsarServicioComponent}

        ] }, 
    { path: 'detalle/:param1', component: DetalleComponent },
    // Cualquier otra ruta no considerada en las entradas anteriores -> ERROR
    { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    EnlaceADatosComponent,
    DirectivasEstructuralesComponent,
    ComponenteConEntradaSalidaComponent,
    LoginFacebookComponent,
    UsarServicioComponent,
    UsarServicioAJAXComponent,
    PeticionAJAXSinServicioComponent,
    MaestroComponent,
    DetalleComponent,
    PageNotFoundComponent,
    RutasHijasYParametrosComponent,
    FiltroPipe,
    UsoPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ ServicioDatosEstaticosService],
  bootstrap: [AppComponent]
})


export class AppModule { 


}
