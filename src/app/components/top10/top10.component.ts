import { Component, Input, OnInit } from '@angular/core';
import { enlaceModel } from 'src/app/Models/enlaceModel';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss'],
})
export class Top10Component implements OnInit {
  @Input() enlaces: enlaceModel[];
  constructor() {
    this.enlaces = [];
  }

  ngOnInit(): void {}
}
