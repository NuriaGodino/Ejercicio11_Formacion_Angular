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

  ngOnInit() {
  }
}
