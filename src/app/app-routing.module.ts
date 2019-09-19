import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

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
    path: "displayUser/2/1",
    redirectTo: "/displayUser"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
