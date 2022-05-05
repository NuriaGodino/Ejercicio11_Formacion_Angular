import { Component, OnInit } from '@angular/core';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-Matricular',
  templateUrl: './Matricular.component.html',
  styleUrls: ['./Matricular.component.css']
})
export class MatricularComponent implements OnInit {
  idCurso:number
  usuario:string

  constructor(private service:FormacionService) { }

  matricular(){
    this.service.matricular(this.idCurso, this.usuario).subscribe()
  }

  ngOnInit() {
  }

}
