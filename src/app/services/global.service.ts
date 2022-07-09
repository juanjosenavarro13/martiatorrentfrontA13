import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  nameApp: string;
  constructor() {
    this.nameApp = 'Martia Torrent';
  }
}
