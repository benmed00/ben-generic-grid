import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DossierCollaborateurComponent } from './dossier-collaborateur/dossier-collaborateur.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "tables",
        loadChildren: "./tables/tables.module#TablesModule"
      }
    ]
  },
  {
    path: 'displayUser',
    component: DossierCollaborateurComponent,
  },
  {
    path: 'displayUser/2/1',
    redirectTo: '/displayUser'  },
  {
    path: '**',
    component: DossierCollaborateurComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
