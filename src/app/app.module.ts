import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CostPipe,
    StepsComponent,
    HorarioComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PdfViewerModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
