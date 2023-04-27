import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clase/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  @Input() peliculaRecibida?:Pelicula[];
  @Output() mostrarInfoPelicula: EventEmitter<any> = new EventEmitter<any>();

  obtenerDatosPelicula(pelicula:any)
  {
    this.mostrarInfoPelicula.emit(pelicula);
    console.info(pelicula);
  }
}
