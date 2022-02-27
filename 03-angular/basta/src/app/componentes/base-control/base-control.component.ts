import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {campoInterface} from "../../servicios/interfaces/campo-interface";

@Component({
  selector: 'app-base-control',
  templateUrl: './base-control.component.html',
  styleUrls: ['./base-control.component.scss']
})
export class BaseControlComponent implements OnInit {
  @Input()
  formGroup = new FormGroup({})

  @Input()
  campos: campoInterface[] = [] as campoInterface[]

  constructor() { }

  ngOnInit(): void {
  }

}
