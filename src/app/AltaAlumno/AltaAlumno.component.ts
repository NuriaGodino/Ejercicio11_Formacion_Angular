import { Component, OnInit } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-AltaAlumno',
  templateUrl: './AltaAlumno.component.html',
  styleUrls: ['./AltaAlumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {
  usuario:string
  password:string
  nombre:string
  email:string
  edad:number
  alumno:Alumno

  constructor(private service:FormacionService) {
  }

  altaAlumno(){
    this.service.altaAlumno(this.usuario, this.password, this.nombre, this.email, this.edad).subscribe()
  }

  ngOnInit() {
  }

}
