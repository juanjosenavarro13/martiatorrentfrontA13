import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() class: string;
  constructor() {
    this.text = 'Button';
    this.class = 'btn-primary';
  }

  ngOnInit(): void {}
}
