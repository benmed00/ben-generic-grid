import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomRenderComponent } from './smart-table/custom-render.component';
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib_1.__decorate([
        NgModule({
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
            declarations: tslib_1.__spread(routedComponents, [CustomRenderComponent]),
            entryComponents: [
                CustomRenderComponent
            ],
            exports: [SmartTableComponent]
        })
    ], TablesModule);
    return TablesModule;
}());
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3RhYmxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXdCOUU7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQXRCeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLFNBQVM7Z0JBQ1QsY0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsWUFBWSxtQkFBTSxnQkFBZ0IsR0FBRSxxQkFBcUIsRUFBQztZQUMxRCxlQUFlLEVBQUU7Z0JBQ2YscUJBQXFCO2FBQ3RCO1lBRUQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0IsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZU1vZHVsZSB9IGZyb20gXCJuZzItc21hcnQtdGFibGVcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmJUaGVtZU1vZHVsZSwgTmJDYXJkTW9kdWxlLCBOYkJ1dHRvbk1vZHVsZSwgTmJMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQG5lYnVsYXIvdGhlbWVcIjtcclxuaW1wb3J0IHsgVGFibGVzUm91dGluZ01vZHVsZSwgcm91dGVkQ29tcG9uZW50cyB9IGZyb20gJy4vdGFibGVzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NtYXJ0LXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvY3VzdG9tLXJlbmRlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBUYWJsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmJUaGVtZU1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbU21hcnRUYWJsZVNlcnZpY2VdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLnJvdXRlZENvbXBvbmVudHMsIEN1c3RvbVJlbmRlckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBDdXN0b21SZW5kZXJDb21wb25lbnRcclxuICBdLFxyXG5cclxuICBleHBvcnRzOiBbU21hcnRUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc01vZHVsZSB7fVxyXG4iXX0=