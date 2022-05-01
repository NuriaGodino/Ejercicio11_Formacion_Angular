import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosPorCursoComponent } from './AlumnosPorCurso/AlumnosPorCurso.component';
import { CursosPorAlumnoComponent } from './CursosPorAlumno/CursosPorAlumno.component';


const routes: Routes = [
  {
    path: 'alumnosPorCurso',
    component: AlumnosPorCursoComponent
  },
  {
    path: 'cursosPorAlumno',
    component: CursosPorAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
