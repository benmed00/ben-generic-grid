import * as tslib_1 from "tslib";
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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2CompleterModule } from "ng2-completer";
import { MatExpansionModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxxRUFBcUU7QUFtQ3JFO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFsQ3hCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixZQUFZO2dCQUNaLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFlBQVksbUJBQU0sZ0JBQWdCLEdBQUUscUJBQXFCLEVBQUM7WUFDMUQsZUFBZSxFQUFFO2dCQUNmLHFCQUFxQjthQUN0QjtZQUVELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5iVGhlbWVNb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iTGF5b3V0TW9kdWxlLCBOYlNlbGVjdE1vZHVsZSwgTmJDaGVja2JveE1vZHVsZSwgTmJBY2NvcmRpb25Nb2R1bGUgfSBmcm9tIFwiQG5lYnVsYXIvdGhlbWVcIjtcclxuaW1wb3J0IHsgVGFibGVzUm91dGluZ01vZHVsZSwgcm91dGVkQ29tcG9uZW50cyB9IGZyb20gJy4vdGFibGVzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NtYXJ0LXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9yZW5kZXJDb21wb25lbnRzL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSBcIm5nMi1jb21wbGV0ZXJcIjtcclxuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBpbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFRhYmxlc1JvdXRpbmdNb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcclxuICAgIE5nMlNtYXJ0VGFibGVNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5iVGhlbWVNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmdiTW9kdWxlLFxyXG4gICAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgICBOYlNlbGVjdE1vZHVsZSxcclxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBOYkFjY29yZGlvbk1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbU21hcnRUYWJsZVNlcnZpY2VdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLnJvdXRlZENvbXBvbmVudHMsIEN1c3RvbVJlbmRlckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBDdXN0b21SZW5kZXJDb21wb25lbnRcclxuICBdLFxyXG5cclxuICBleHBvcnRzOiBbU21hcnRUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc01vZHVsZSB7fVxyXG4iXX0=