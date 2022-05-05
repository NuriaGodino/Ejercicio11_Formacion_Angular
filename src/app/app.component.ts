import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormacionEntregable';

  constructor(private router: Router) { 

  }

  routeAlumnosPorCurso(){
    this.router.navigate(['/alumnosPorCurso'])
  }

  routeCursosPorAlumno(){
    this.router.navigate(['/cursosPorAlumno'])
  }

  routeAltaAlumno(){
    this.router.navigate(['/altaAlumno'])
  }

  routerBuscarMatriculas(){
    this.router.navigate(['/buscarMatriculas'])
  }

  routerAltaCurso(){
    this.router.navigate(['/altaCurso'])
  }

  routerMatricular(){
    this.router.navigate(['/matricular'])
  }

  ngOnInit() {
  }
}
