import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    OfertasComponent,
    GaleriaComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
