import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/others/documents/documents.component';
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
    path: "bachiller",
    component: StepsComponent,
  },
  {
    path: "documents",
    component: DocumentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
