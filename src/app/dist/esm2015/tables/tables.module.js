import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbThemeModule, NbCardModule, NbButtonModule, NbLayoutModule } from "@nebular/theme";
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from './smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let TablesModule = class TablesModule {
};
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
        declarations: [...routedComponents],
        exports: [SmartTableComponent]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3RhYmxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXFCdkQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFHLENBQUE7QUFBZixZQUFZO0lBbkJ4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLGNBQWM7WUFDZCxTQUFTO1lBQ1QsY0FBYztTQUNmO1FBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDOUIsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztRQUVuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUMvQixDQUFDO0dBQ1csWUFBWSxDQUFHO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xyXG5cclxuXHJcbmltcG9ydCB7IE5iVGhlbWVNb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iTGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRhYmxlc1JvdXRpbmdNb2R1bGUsIHJvdXRlZENvbXBvbmVudHMgfSBmcm9tICcuL3RhYmxlcy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBUYWJsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmJUaGVtZU1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbU21hcnRUYWJsZVNlcnZpY2VdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLnJvdXRlZENvbXBvbmVudHNdLFxyXG5cclxuICBleHBvcnRzOiBbU21hcnRUYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc01vZHVsZSB7fVxyXG4iXX0=