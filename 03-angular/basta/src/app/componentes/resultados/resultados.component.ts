import {Component, Input, OnInit} from '@angular/core';
import {ResultadosInterface} from "../../servicios/interfaces/resultados-interface";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  @Input()
  resultados: ResultadosInterface[] = []

  constructor() {
    this.ordenarResultados()
  }

  ngOnInit(): void {
  }

  private ordenarResultados() {

  }
}
