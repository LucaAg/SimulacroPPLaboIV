import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { DetallesPaisComponent } from './components/paises/detalles-pais/detalles-pais.component';

const routes: Routes = [
  {path: "", component: BusquedaComponent},
  {path: "bienvenido", component: BienvenidoComponent},
  {path: "busqueda", component: BusquedaComponent},
  {path: "actor-alta", component: ActorAltaComponent},
  {path: 'detalle-pais', component: DetallesPaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
