import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-anfitrion',
  templateUrl: './ruta-anfitrion.component.html',
  styleUrls: ['./ruta-anfitrion.component.scss']
})
export class RutaAnfitrionComponent implements OnInit {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  crearSala() {
    const salaId = Math.floor(Math.random() * (2999 - 2001 + 1)) + 2001;
    const ruta = ['/start', salaId]
    this.router.navigate(ruta)
  }
}
