import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-AlumnosPorCurso',
  templateUrl: './AlumnosPorCurso.component.html',
  styleUrls: ['./AlumnosPorCurso.component.css']
})
export class AlumnosPorCursoComponent implements OnInit {
  alumnos:Alumno[]
  cursos:Curso[]
  curso:string
  usuario:string

  constructor(private service:FormacionService, private router: Router) {
    this.todosAlumnos()
    this.todosCursos()
  }

  todosAlumnos(){
    this.service.todosAlumnos().subscribe(data => this.alumnos=data)
  }

  alumnosPorCurso(){
    this.service.alumnosPorCurso(this.curso).subscribe(data => this.alumnos=data)
  }

  todosCursos(){
    this.service.todosCursos().subscribe(data => this.cursos=data)
  }

  ngOnInit() {
  }

}
