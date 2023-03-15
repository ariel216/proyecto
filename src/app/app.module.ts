import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './pages/views/servicios.component';
import { OfertasComponent } from './pages/views/ofertas.component';
import { GaleriaComponent } from './pages/views/galeria.component';
import { AcercaComponent } from './pages/views/acerca.component';

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
