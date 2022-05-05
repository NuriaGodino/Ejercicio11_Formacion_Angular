import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosPorCursoComponent } from './AlumnosPorCurso/AlumnosPorCurso.component';
import { CursosPorAlumnoComponent } from './CursosPorAlumno/CursosPorAlumno.component';
import { AltaAlumnoComponent } from './AltaAlumno/AltaAlumno.component';
import { ConsultaCursosComponent } from './ConsultaCursos/ConsultaCursos.component';
import { AltaCursoComponent } from './AltaCurso/AltaCurso.component';
import { MatricularComponent } from './Matricular/Matricular.component';

@NgModule({
  declarations: [							
    AppComponent,
      AlumnosPorCursoComponent,
      CursosPorAlumnoComponent,
      AltaAlumnoComponent,
      ConsultaCursosComponent,
      AltaCursoComponent,
      MatricularComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
