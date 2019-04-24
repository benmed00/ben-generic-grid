import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
            declarations: tslib_1.__spread(routedComponents),
            exports: [SmartTableComponent]
        })
    ], TablesModule);
    return TablesModule;
}());
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3RhYmxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXFCdkQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQW5CeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixjQUFjO2dCQUNkLFNBQVM7Z0JBQ1QsY0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsWUFBWSxtQkFBTSxnQkFBZ0IsQ0FBQztZQUVuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcclxuXHJcblxyXG5pbXBvcnQgeyBOYlRoZW1lTW9kdWxlLCBOYkNhcmRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlLCBOYkxheW91dE1vZHVsZSB9IGZyb20gXCJAbmVidWxhci90aGVtZVwiO1xyXG5pbXBvcnQgeyBUYWJsZXNSb3V0aW5nTW9kdWxlLCByb3V0ZWRDb21wb25lbnRzIH0gZnJvbSAnLi90YWJsZXMtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gJy4vc21hcnQtdGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXRhYmxlL3NtYXJ0LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgVGFibGVzUm91dGluZ01vZHVsZSxcclxuICAgIE5nMlNtYXJ0VGFibGVNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5iVGhlbWVNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmdiTW9kdWxlLFxyXG4gICAgTmJMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1NtYXJ0VGFibGVTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5yb3V0ZWRDb21wb25lbnRzXSxcclxuXHJcbiAgZXhwb3J0czogW1NtYXJ0VGFibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZXNNb2R1bGUge31cclxuIl19