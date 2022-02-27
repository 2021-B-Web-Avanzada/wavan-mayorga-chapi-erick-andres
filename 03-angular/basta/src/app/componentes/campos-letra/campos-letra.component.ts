import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-campos-letra',
  templateUrl: './campos-letra.component.html',
  styleUrls: ['./campos-letra.component.scss']
})
export class CamposLetraComponent implements OnInit {

  @Input()
  campos = []
  @Input()
  letra = ''

  //formGroup: FormGroup
  constructor(private readonly formBuilder: FormBuilder) {
    //this.formGroup =this.formBuilder.group(this.campos)
  }

  ngOnInit(): void {
  }

}
