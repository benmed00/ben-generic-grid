import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule, NbSelectModule, NbCheckboxModule, NbAccordionModule, NbWindowModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomRenderComponent } from '../shared/renderComponents/custom-render.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2CompleterModule } from "ng2-completer";
import { MatExpansionModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NbWindowComponent } from '@nebular/theme/components/window/window.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib_1.__decorate([
        NgModule({
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
                NbAccordionModule,
                NbWindowModule,
            ],
            providers: [SmartTableService],
            declarations: tslib_1.__spread(routedComponents, [CustomRenderComponent]),
            entryComponents: [
                CustomRenderComponent, NbWindowComponent
            ],
            exports: [SmartTableComponent]
        })
    ], TablesModule);
    return TablesModule;
}());
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsSyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEYscUVBQXFFO0FBcUNyRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBcEN4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGNBQWM7YUFFZjtZQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFlBQVksbUJBQU0sZ0JBQWdCLEdBQUUscUJBQXFCLEVBQUM7WUFDMUQsZUFBZSxFQUFFO2dCQUNmLHFCQUFxQixFQUFFLGlCQUFpQjthQUN6QztZQUVELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5iVGhlbWVNb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iTGF5b3V0TW9kdWxlLCBOYlNlbGVjdE1vZHVsZSwgTmJDaGVja2JveE1vZHVsZSwgTmJBY2NvcmRpb25Nb2R1bGUsIE5iV2luZG93TW9kdWxlIH0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRhYmxlc1JvdXRpbmdNb2R1bGUsIHJvdXRlZENvbXBvbmVudHMgfSBmcm9tICcuL3RhYmxlcy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvcmVuZGVyQ29tcG9uZW50cy9jdXN0b20tcmVuZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IE5nMkNvbXBsZXRlck1vZHVsZSB9IGZyb20gXCJuZzItY29tcGxldGVyXCI7XHJcbmltcG9ydCB7TWF0RXhwYW5zaW9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmJXaW5kb3dDb21wb25lbnQgfSBmcm9tICdAbmVidWxhci90aGVtZS9jb21wb25lbnRzL3dpbmRvdy93aW5kb3cuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBUYWJsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXHJcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOYlRoZW1lTW9kdWxlLFxyXG4gICAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJTZWxlY3RNb2R1bGUsXHJcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxyXG4gICAgTmJBY2NvcmRpb25Nb2R1bGUsXHJcbiAgICBOYldpbmRvd01vZHVsZSxcclxuXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtTbWFydFRhYmxlU2VydmljZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4ucm91dGVkQ29tcG9uZW50cywgQ3VzdG9tUmVuZGVyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEN1c3RvbVJlbmRlckNvbXBvbmVudCwgTmJXaW5kb3dDb21wb25lbnRcclxuICBdLFxyXG5cclxuICBleHBvcnRzOiBbU21hcnRUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc01vZHVsZSB7fVxyXG4iXX0=