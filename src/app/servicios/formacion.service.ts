import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';

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
  /*urlAltaAlumno:string = "http://localhost:8080/11_Formacion/AltaAlumno"
  urlConsultaCursosFecha:string = "http://localhost:8080/11_Formacion/CursosFechaBetween"
  urlAltaCurso:string = "http://localhost:8080/11_Formacion/AltaCurso"
  urlMatricular:string = "http://localhost:8080/11_Formacion/Matricular"*/
  urlAltaAlumno:string = "AltaAlumno"
  urlConsultaCursosFecha:string = "CursosFechaBetween"
  urlAltaCurso:string = "AltaCurso"
  urlMatricular:string = "Matricular"

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

  altaAlumno(usuario:string, password:string, nombre:string, email:string, edad:number){
    return this.http.post(`${this.urlAltaAlumno}?usuario=${usuario}&password=${password}&nombre=${nombre}&email=${email}&edad=${edad}`, null)
  }

  altaCurso(nombre:string, duracion:number, fechaInicio:string, precio:number){
    return this.http.post(`${this.urlAltaCurso}?nombre=${nombre}&duracion=${duracion}&fecha=${fechaInicio}&precio=${precio}`, null)
  }

  matricular(idCurso:number, usuario:string){
    return this.http.post(`${this.urlMatricular}?idCurso=${idCurso}&usuario=${usuario}`, null)
  }

  consultaCursosFecha(f1:string, f2:string){
    return this.http.get<Matricula[]>(this.urlConsultaCursosFecha, {params:{f1:f1, f2:f2}})
  }
}
