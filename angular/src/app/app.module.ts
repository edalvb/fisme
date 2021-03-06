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

import { OrgChartModule } from 'ng2-org-chart';
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
import { DetailsAutoridadesComponent } from './components/details-autoridades/details-autoridades.component';
import { TituloComponent } from './components/others/titulo/titulo.component';

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
    DirectorioComponent,
    DetailsAutoridadesComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrgChartModule,
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
