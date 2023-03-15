import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: 'acerca', component: AcercaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    OfertasComponent,
    GaleriaComponent,
    AcercaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
