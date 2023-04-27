import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clase/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  peliculas:Pelicula[]=[];
  vista="tabla";
  peliculaAMostrar?:any={};

  constructor(){
    this.peliculas = [
      {
        id:1,
        nombre:'Juan y la piedra filosofal',
        tipo:'suspenso',
        fechaEstreno:'2023/04/26',
        cantidadPublico:100,
        fotoPelicula:'../../../assets/coding.jpeg'},
      {
        id:2,
        nombre:'Jorge el curioso',
        tipo:'comedia',
        fechaEstreno:'2023/05/24',
        cantidadPublico:200,
        fotoPelicula:'../../../assets/coding.jpeg'},
      {
        id:3,
        nombre:'El doctor amor',
        tipo:'amor',
        fechaEstreno:'2023/06/08',
        cantidadPublico:300
        ,fotoPelicula:'../../../assets/coding.jpeg'}
    ];
  }

  cambiarVista()
  {
    //this.vista= this.vista=='tabla'?'listado':'tabla';
    if(this.vista == 'tabla')
    {
      this.vista = 'listado';
    }
    else
    {
      this.vista = 'tabla';
    }
  }

  mostrarInfoPelicula($event:any)
  {
    console.info($event);
    this.peliculaAMostrar = $event;
  }
}
