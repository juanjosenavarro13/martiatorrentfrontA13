import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
