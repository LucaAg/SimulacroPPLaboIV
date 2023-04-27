import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  {path: "", component: BusquedaComponent},
  {path: "bienvenido", component: BienvenidoComponent},
  {path: "busqueda", component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
