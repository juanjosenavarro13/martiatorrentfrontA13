import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulopageComponent } from './pages/articulopage/articulopage.component';
import { CategoriapageComponent } from './pages/categoriapage/categoriapage.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'articulo/:id', component: ArticulopageComponent },
  { path: 'categoria/:id', component: CategoriapageComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
