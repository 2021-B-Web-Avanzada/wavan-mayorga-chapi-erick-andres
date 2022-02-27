import {Component, Input, OnInit} from '@angular/core';
import {campoInterface} from "../../servicios/interfaces/campo-interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-game',
  templateUrl: './user-game.component.html',
  styleUrls: ['./user-game.component.scss']
})
export class UserGameComponent implements OnInit {

  @Input()
  campos:campoInterface[] = [] as campoInterface[]

  @Input()
  formGroup: FormGroup = new FormGroup({})

  @Input()
  selectLetra = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
