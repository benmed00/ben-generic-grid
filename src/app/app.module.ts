import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbCardModule,
  NbLayoutModule,
  NbButtonModule
} from "@nebular/theme";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TablesModule } from './tables/tables.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    TablesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbCardModule,
    NbButtonModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
