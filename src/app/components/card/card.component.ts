import { Component, Input, OnInit } from '@angular/core';
import { cardModel } from './cardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() datosCard: cardModel[];
  constructor() {
    this.datosCard = [];
  }

  ngOnInit(): void {
    console.log('datos', this.datosCard);
  }
}
