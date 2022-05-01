import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosPorCursoComponent } from './AlumnosPorCurso/AlumnosPorCurso.component';
import { CursosPorAlumnoComponent } from './CursosPorAlumno/CursosPorAlumno.component';

@NgModule({
  declarations: [			
    AppComponent,
      AlumnosPorCursoComponent,
      CursosPorAlumnoComponent
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
