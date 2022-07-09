import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nameApp: string;
  constructor(private _global: GlobalService) {
    this.nameApp = this._global.nameApp;
  }

  ngOnInit(): void {}
}
