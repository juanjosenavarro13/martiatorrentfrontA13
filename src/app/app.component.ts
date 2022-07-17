import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleApp: string;
  mantenimiento: boolean;
  constructor() {
    this.mantenimiento = environment.mantenimiento;
    this.titleApp = environment.titleApp;
  }
}
