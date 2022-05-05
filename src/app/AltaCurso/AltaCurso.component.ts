import { Component, OnInit } from '@angular/core';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-AltaCurso',
  templateUrl: './AltaCurso.component.html',
  styleUrls: ['./AltaCurso.component.css']
})
export class AltaCursoComponent implements OnInit {

  nombre:string
  duracion:number
  precio:number
  fecha:string

  constructor(private service:FormacionService) { }

  altaCurso(){
    this.service.altaCurso(this.nombre, this.duracion, this.fecha, this.precio).subscribe()
  }

  ngOnInit() {
  }

}
