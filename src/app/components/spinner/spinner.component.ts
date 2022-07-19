import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  siglasApp: string;

  constructor() {
    this.siglasApp = environment.siglasApp;
  }

  ngOnInit(): void {}
}
