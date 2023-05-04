import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clase/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { SweetAlertService } from 'src/app/servicios/sweet-alert.service';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  nuevoActor: Actor = new Actor("","",0,0,"","");
  paisSeleccionado:string = "";

  constructor(private dataBaseFire:FirestoreService, private alertSweet:SweetAlertService)
  {
  }

  guardar()
  {
    this.dataBaseFire.guardarActor(this.nuevoActor).then((res)=>
    {
      if(res)
      {
        this.alertSweet.showSuccessAlert("Se ha cargado al actor/actriz exitosamente!","OK", "success" );
        this.limpiarForm();
      }
      else
      {
        this.alertSweet.showSuccessAlert("Error al cargar al actor/actriz!","Error", "error" );
      }
    });
  }

  limpiarForm()
  {
    this.nuevoActor.nombre = "";
    this.nuevoActor.apellido = "";
    this.nuevoActor.edad = 0;
    this.nuevoActor.pais = "";
    this.nuevoActor.foto = "";
  }
  
  obtenerPaisesAltaActor($event:any)
  {
    this.paisSeleccionado = $event;
    this.nuevoActor.pais = this.paisSeleccionado;
  }
}
