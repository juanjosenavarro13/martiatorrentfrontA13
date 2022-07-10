import { Component, Input, OnInit } from '@angular/core';
import { articuloModel } from '../../Models/cardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() datosCard: articuloModel[];
  constructor() {
    this.datosCard = [];
  }

  ngOnInit(): void {}
}
