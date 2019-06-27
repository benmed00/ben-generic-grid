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
let TablesModule = class TablesModule {
};
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
        declarations: [...routedComponents, CustomRenderComponent],
        entryComponents: [
            CustomRenderComponent
        ],
        exports: [SmartTableComponent]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxxRUFBcUU7QUFtQ3JFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBRyxDQUFBO0FBQWYsWUFBWTtJQWxDeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGNBQWM7WUFDZCxhQUFhO1lBQ2IsY0FBYztZQUNkLFlBQVk7WUFDWixjQUFjO1lBQ2QsU0FBUztZQUNULGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtTQUNsQjtRQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLFlBQVksRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7UUFDMUQsZUFBZSxFQUFFO1lBQ2YscUJBQXFCO1NBQ3RCO1FBRUQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDL0IsQ0FBQztHQUNXLFlBQVksQ0FBRztTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBOYlRoZW1lTW9kdWxlLCBOYkNhcmRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlLCBOYkxheW91dE1vZHVsZSwgTmJTZWxlY3RNb2R1bGUsIE5iQ2hlY2tib3hNb2R1bGUsIE5iQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRhYmxlc1JvdXRpbmdNb2R1bGUsIHJvdXRlZENvbXBvbmVudHMgfSBmcm9tICcuL3RhYmxlcy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvcmVuZGVyQ29tcG9uZW50cy9jdXN0b20tcmVuZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IE5nMkNvbXBsZXRlck1vZHVsZSB9IGZyb20gXCJuZzItY29tcGxldGVyXCI7XHJcbmltcG9ydCB7TWF0RXhwYW5zaW9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuLy8gaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBUYWJsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXHJcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOYlRoZW1lTW9kdWxlLFxyXG4gICAgTmJMYXlvdXRNb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJTZWxlY3RNb2R1bGUsXHJcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxyXG4gICAgTmJBY2NvcmRpb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1NtYXJ0VGFibGVTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5yb3V0ZWRDb21wb25lbnRzLCBDdXN0b21SZW5kZXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgQ3VzdG9tUmVuZGVyQ29tcG9uZW50XHJcbiAgXSxcclxuXHJcbiAgZXhwb3J0czogW1NtYXJ0VGFibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZXNNb2R1bGUge31cclxuIl19