import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RespuestasInterface} from "../../servicios/interfaces/respuestas-interface";
import {CampoEvaluacionInterface} from "../../servicios/interfaces/campo-evaluacion-interface";

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {
  @Input()
  formGroup: FormGroup = new FormGroup({})

  @Input()
  camposEvaluacion: CampoEvaluacionInterface[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
