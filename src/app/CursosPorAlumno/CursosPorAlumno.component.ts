import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-CursosPorAlumno',
  templateUrl: './CursosPorAlumno.component.html',
  styleUrls: ['./CursosPorAlumno.component.css']
})
export class CursosPorAlumnoComponent implements OnInit {
  alumnos:Alumno[]
  cursos:Curso[]
  curso:string
  usuario:string
  
  constructor(private service:FormacionService, private router: Router) { 
   this.todosCursos()
   this.todosAlumnos()
  }

  cursosPorAlumno(){
    this.service.cursosPorAlumno(this.usuario).subscribe(data => this.cursos=data)
  }

  todosCursos(){
    this.service.todosCursos().subscribe(data => this.cursos=data)
  }

  todosAlumnos(){
    this.service.todosAlumnos().subscribe(data => this.alumnos=data)
  }

  ngOnInit() {
  }

}
