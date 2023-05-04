import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas/peliculas-alta/peliculas-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { TablaPeliculaComponent } from './components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallesPaisComponent } from './components/paises/detalles-pais/detalles-pais.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TablaPaisesComponent } from './components/paises/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    DetallesPaisComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
