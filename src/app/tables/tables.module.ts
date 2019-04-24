import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from "ng2-smart-table";



import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomRenderComponent } from './smart-table/custom-render.component';

@NgModule({
  imports: [
    NbCardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NgbModule,
    NbLayoutModule
  ],
  providers: [SmartTableService],
  declarations: [...routedComponents, CustomRenderComponent],
  entryComponents: [
    CustomRenderComponent
  ],

  exports: [SmartTableComponent]
})
export class TablesModule {}
