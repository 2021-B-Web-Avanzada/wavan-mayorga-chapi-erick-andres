import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-large-box',
  templateUrl: './large-box.component.html',
  styleUrls: ['./large-box.component.scss']
})
export class LargeBoxComponent implements OnInit {
  @Input()
  banner = {
    title: '',
    text: '',
    colorText: '',
    linkImagen: '',
    textButton: '',
    primerBoton: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
