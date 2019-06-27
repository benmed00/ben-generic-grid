import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbCardModule,
  NbLayoutModule,
  NbButtonModule,
  NbWindowModule,
  NbTabsetModule,
  } from "@nebular/theme";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TablesModule } from './tables/tables.module';
import { ButtonViewComponent } from './shared/renderComponents/button-view.component';
import { config } from 'process';
import { DossierCollaborateurComponent } from './dossier-collaborateur/dossier-collaborateur.component';
import { ConsulterCollaborateurComponent } from './consulter-collaborateur/consulter-collaborateur.component';
import { ShowcaseDialogComponent } from './shared/renderComponents/showcase-dialog.component';
import { CustomRenderComponent } from './shared/renderComponents/custom-render.component';
// import { config } from 'rxjs';

@NgModule({
  declarations: [AppComponent, ButtonViewComponent, DossierCollaborateurComponent, ConsulterCollaborateurComponent, ShowcaseDialogComponent],
  imports: [
    TablesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbCardModule,
    NbButtonModule,
    NgbModule,
    NbTabsetModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbWindowModule.forRoot(),
  ],
  providers: [],
  entryComponents: [ ButtonViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
