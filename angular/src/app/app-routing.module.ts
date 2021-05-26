import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/others/documents/documents.component';
import { AutoridadesComponent } from './components/pages/autoridades/autoridades.component';
import { DirectorioComponent } from './components/pages/directorio/directorio.component';
import { DocumentosComponent } from './components/pages/documentos/documentos.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { StepsComponent } from './components/steps/steps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "documentos/bachiller",
    component: StepsComponent,
  },
  {
    path: "documentos",
    component: DocumentosComponent,
  },
  {
    path: "autoridades",
    component: AutoridadesComponent,
  },
  {
    path: "noticias",
    component: NoticiasComponent,
  },
  {
    path: "directorio",
    component: DirectorioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
