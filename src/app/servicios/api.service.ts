import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) { }

  obtenerTodosLosPaises()
  {
    return this.http.get<any>(this.api);
    
  }

  obtenerPaisPorNombre(name:string )
  {
    return this.http.get<any>(this.api).pipe(
      map(paises => paises.find((pais: { name: { common: string; }; }) => pais.name.common === name))
    );
   
  }
}
