import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-short-box',
  templateUrl: './short-box.component.html',
  styleUrls: ['./short-box.component.scss']
})
export class ShortBoxComponent implements OnInit {
  @Input()
  boxes = [
    {
      linkImage: '',
      title: '',
      text: '',
      textLink: '',
      secondLink: true,
      textLink2: ''
    },
    {
      linkImage: '',
      title: '',
      text: '',
      textLink: '',
      secondLink: true,
      textLink2: ''
    },
    {
      linkImage: '',
      title: '',
      text: '',
      textLink: '',
      secondLink: true,
      textLink2: ''
    },
    {
      linkImage: '',
      title: '',
      text: '',
      textLink: '',
      secondLink: true,
      textLink2: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
