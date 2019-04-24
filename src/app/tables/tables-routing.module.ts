import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { CustomRenderComponent } from './smart-table/custom-render.component';

const routes: Routes = [
  {
    path: "",
    component: SmartTableComponent,
    children: [
      {
        path: "smart-table",
        component: SmartTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
         TablesComponent,
         SmartTableComponent

       ];
