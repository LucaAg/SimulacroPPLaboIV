import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimulacroPrimerParcial';

constructor(private api: ApiService){}

  ngOnInit(): void {
    //this.api.obtenerTodosLosPaises().subscribe(res => console.log(res));
  }
}
