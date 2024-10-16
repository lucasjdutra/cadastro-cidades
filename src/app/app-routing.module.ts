import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CidadesComponent } from './components/cidades/cidades.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cidades', component: CidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
