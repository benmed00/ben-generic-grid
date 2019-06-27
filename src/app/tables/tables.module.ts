import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from "ng2-smart-table";



import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule, NbSelectModule, NbCheckboxModule, NbAccordionModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomRenderComponent } from '../shared/renderComponents/custom-render.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2CompleterModule } from "ng2-completer";
import {MatExpansionModule, MatInputModule, MatSelectModule, MatFormFieldModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
// import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TablesRoutingModule,
    DragDropModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NbCardModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NgbModule,
    NbLayoutModule,
    NbSelectModule,
    NbCheckboxModule,
    NbAccordionModule
  ],
  providers: [SmartTableService],
  declarations: [...routedComponents, CustomRenderComponent],
  entryComponents: [
    CustomRenderComponent
  ],

  exports: [SmartTableComponent]
})
export class TablesModule {}
