import { Component, OnInit } from '@angular/core';
import { Matricula } from '../model/Matricula';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-ConsultaCursos',
  templateUrl: './ConsultaCursos.component.html',
  styleUrls: ['./ConsultaCursos.component.css']
})
export class ConsultaCursosComponent implements OnInit {
  f1:string
  f2:string
  matriculas:Matricula[]

  constructor(private service:FormacionService) { }

  consultaCursosFecha(){
    this.service.consultaCursosFecha(this.f1, this.f2).subscribe(data => this.matriculas=data)
  }

  ngOnInit() {
  }

}
