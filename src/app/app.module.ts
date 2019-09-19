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
  } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesModule } from './tables/tables.module';
import { ButtonViewComponent } from './shared/renderComponents/button-view.component';
import { ShowcaseDialogComponent } from './shared/renderComponents/showcase-dialog.component';
import { NbWindowComponent } from '@nebular/theme/components/window/window.component';
// import { DisplayUserModule } from './userDisplayUi/display-user.module';
// import { config } from 'rxjs';

@NgModule({
  declarations: [AppComponent, ButtonViewComponent, ShowcaseDialogComponent],
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
  entryComponents: [ ButtonViewComponent, NbWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
