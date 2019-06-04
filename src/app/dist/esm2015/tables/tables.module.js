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
let TablesModule = class TablesModule {
};
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
        declarations: [...routedComponents, CustomRenderComponent],
        entryComponents: [
            CustomRenderComponent
        ],
        exports: [SmartTableComponent]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRyxxRUFBcUU7QUFrQ3JFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBRyxDQUFBO0FBQWYsWUFBWTtJQWpDeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLGNBQWM7WUFDZCxTQUFTO1lBQ1QsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsaUJBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDOUIsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQztRQUMxRCxlQUFlLEVBQUU7WUFDZixxQkFBcUI7U0FDdEI7UUFFRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUMvQixDQUFDO0dBQ1csWUFBWSxDQUFHO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5iVGhlbWVNb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iTGF5b3V0TW9kdWxlLCBOYlNlbGVjdE1vZHVsZSwgTmJDaGVja2JveE1vZHVsZSwgTmJBY2NvcmRpb25Nb2R1bGUgfSBmcm9tIFwiQG5lYnVsYXIvdGhlbWVcIjtcclxuaW1wb3J0IHsgVGFibGVzUm91dGluZ01vZHVsZSwgcm91dGVkQ29tcG9uZW50cyB9IGZyb20gJy4vdGFibGVzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NtYXJ0LXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvY3VzdG9tLXJlbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tIFwibmcyLWNvbXBsZXRlclwiO1xyXG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbi8vIGltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgVGFibGVzUm91dGluZ01vZHVsZSxcclxuICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gICAgTmcyQ29tcGxldGVyTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOYlRoZW1lTW9kdWxlLFxyXG4gICAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJTZWxlY3RNb2R1bGUsXHJcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxyXG4gICAgTmJBY2NvcmRpb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1NtYXJ0VGFibGVTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5yb3V0ZWRDb21wb25lbnRzLCBDdXN0b21SZW5kZXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgQ3VzdG9tUmVuZGVyQ29tcG9uZW50XHJcbiAgXSxcclxuXHJcbiAgZXhwb3J0czogW1NtYXJ0VGFibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZXNNb2R1bGUge31cclxuIl19