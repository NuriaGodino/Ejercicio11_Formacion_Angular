import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './AltaAlumno/AltaAlumno.component';
import { AltaCursoComponent } from './AltaCurso/AltaCurso.component';
import { AlumnosPorCursoComponent } from './AlumnosPorCurso/AlumnosPorCurso.component';
import { ConsultaCursosComponent } from './ConsultaCursos/ConsultaCursos.component';
import { CursosPorAlumnoComponent } from './CursosPorAlumno/CursosPorAlumno.component';
import { MatricularComponent } from './Matricular/Matricular.component';


const routes: Routes = [
  {
    path: 'alumnosPorCurso',
    component: AlumnosPorCursoComponent
  },
  {
    path: 'cursosPorAlumno',
    component: CursosPorAlumnoComponent
  },
  {
    path: 'altaAlumno',
    component: AltaAlumnoComponent
  },
  {
    path: 'buscarMatriculas',
    component: ConsultaCursosComponent
  },
  {
    path:'altaCurso',
    component:AltaCursoComponent
  },
  {
    path:'matricular',
    component:MatricularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
