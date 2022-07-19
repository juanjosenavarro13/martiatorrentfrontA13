import { PerfilpageComponent } from './pages/perfilpage/perfilpage.component';
import { SubcategoriapageComponent } from './pages/subcategoriapage/subcategoriapage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulopageComponent } from './pages/articulopage/articulopage.component';
import { CategoriapageComponent } from './pages/categoriapage/categoriapage.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistropageComponent } from './pages/registropage/registropage.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'articulo/:id', component: ArticulopageComponent },
  { path: 'categoria/:id', component: CategoriapageComponent },
  { path: 'subcategoria/:id', component: SubcategoriapageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'registro', component: RegistropageComponent },
  { path: 'perfil', component: PerfilpageComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
