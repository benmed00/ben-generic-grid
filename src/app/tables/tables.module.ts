import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { NbThemeModule, NbCardModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';

@NgModule({
  imports: [
    NbCardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbThemeModule
  ],
  providers: [SmartTableService],
  declarations: [...routedComponents],

  exports: [SmartTableComponent]
})
export class TablesModule {}
