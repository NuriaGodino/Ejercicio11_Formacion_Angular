import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  //urlTodosAlumnos:string = "http://localhost:8080/11_Formacion/Alumnos"
  urlTodosAlumnos:string = "Alumnos"
  //urlTodosCursos: string = "http://localhost:8080/11_Formacion/Cursos"
  urlTodosCursos: string = "Cursos"
  //urlCursosAlumnos:string = "http://localhost:8080/11_Formacion/CursosAlumno"
  urlCursosAlumnos:string = "CursosAlumno"
  //urlAlumnosCursos:string = "http://localhost:8080/11_Formacion/AlumnosCurso"
  urlAlumnosCursos:string = "AlumnosCurso"
  

  constructor(private http:HttpClient) { }

  todosAlumnos(){
    return this.http.get<Alumno[]>(this.urlTodosAlumnos)
  }

  todosCursos(){
    return this.http.get<Curso[]>(this.urlTodosCursos)
  }

  alumnosPorCurso(curso:string){
    return this.http.get<Alumno[]>(this.urlAlumnosCursos, {params:{curso:curso}})
  }

  cursosPorAlumno(usuario:string){
    return this.http.get<Curso[]>(this.urlCursosAlumnos, {params:{usuario:usuario}})
  }
}
