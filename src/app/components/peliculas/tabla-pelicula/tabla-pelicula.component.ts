import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clase/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input() peliculaRecibida?:Pelicula[];
  @Output() mostrarInfoPelicula: EventEmitter<any> = new EventEmitter<any>();

  obtenerDatosPelicula(pelicula:any)
  {
    this.mostrarInfoPelicula.emit(pelicula);
    console.info(pelicula);
  }
}
