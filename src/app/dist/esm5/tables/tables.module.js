import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule, NbSelectModule, NbCheckboxModule, NbAccordionModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomRenderComponent } from './smart-table/custom-render.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2CompleterModule } from "ng2-completer";
import { MatExpansionModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
// import { MatFormFieldModule } from '@angular/material/form-field';
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                NbCardModule,
                TablesRoutingModule,
                DragDropModule,
                Ng2CompleterModule,
                MatExpansionModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRyxxRUFBcUU7QUFrQ3JFO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFqQ3hCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxlQUFlO2dCQUNmLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixpQkFBaUI7YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixZQUFZLG1CQUFNLGdCQUFnQixHQUFFLHFCQUFxQixFQUFDO1lBQzFELGVBQWUsRUFBRTtnQkFDZixxQkFBcUI7YUFDdEI7WUFFRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOYlRoZW1lTW9kdWxlLCBOYkNhcmRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlLCBOYkxheW91dE1vZHVsZSwgTmJTZWxlY3RNb2R1bGUsIE5iQ2hlY2tib3hNb2R1bGUsIE5iQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRhYmxlc1JvdXRpbmdNb2R1bGUsIHJvdXRlZENvbXBvbmVudHMgfSBmcm9tICcuL3RhYmxlcy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXRhYmxlL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSBcIm5nMi1jb21wbGV0ZXJcIjtcclxuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG4vLyBpbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIFRhYmxlc1JvdXRpbmdNb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmJUaGVtZU1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZSxcclxuICAgIE5iU2VsZWN0TW9kdWxlLFxyXG4gICAgTmJDaGVja2JveE1vZHVsZSxcclxuICAgIE5iQWNjb3JkaW9uTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtTbWFydFRhYmxlU2VydmljZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4ucm91dGVkQ29tcG9uZW50cywgQ3VzdG9tUmVuZGVyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEN1c3RvbVJlbmRlckNvbXBvbmVudFxyXG4gIF0sXHJcblxyXG4gIGV4cG9ydHM6IFtTbWFydFRhYmxlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVzTW9kdWxlIHt9XHJcbiJdfQ==