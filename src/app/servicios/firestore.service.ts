import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Actor } from '../clase/actor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private dataBaseFire:Firestore) { }

  guardarActor(unActor:Actor)
  {
      const coleccion = collection(this.dataBaseFire, 'actores');
      return addDoc(coleccion,{apellido:unActor.apellido,
        edad:unActor.edad,
        foto:unActor.foto,
        genero:unActor.genero,
        nombre:unActor.nombre,
        pais:unActor.pais});
  }
}
