import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Angular Material

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './components/home/home.component';
import { CostPipe } from './pipes/cost.pipe';
import { StepsComponent } from './components/steps/steps.component';
import { HorarioComponent } from './components/horario/horario.component';
import { DocumentsComponent } from './components/others/documents/documents.component';
import { AutoridadesComponent } from './components/pages/autoridades/autoridades.component';
import { DocumentosComponent } from './components/pages/documentos/documentos.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { DirectorioComponent } from './components/pages/directorio/directorio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CostPipe,
    StepsComponent,
    HorarioComponent,
    DocumentsComponent,
    AutoridadesComponent,
    DocumentosComponent,
    NoticiasComponent,
    DirectorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Angular Material
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    // Angular Material
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PdfViewerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
