import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  paises$: any[]=[];
  @Output() mostrarPaises: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private api:ApiService)
  {

  }

  ngOnInit(): void {
    this.api.obtenerTodosLosPaises().subscribe((data=>{
      this.paises$=data;
    }))
  }

  mostrarPais(unPais:any)
  {
    this.mostrarPaises.emit(unPais);
  }
}
