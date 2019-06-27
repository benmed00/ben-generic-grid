import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
var routes = [
    {
        path: "",
        component: SmartTableComponent,
        children: [
            {
                path: "smart-table",
                component: SmartTableComponent
            }
        ]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
export { TablesRoutingModule };
export var routedComponents = [
    TablesComponent,
    SmartTableComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy90YWJsZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUcxRSxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLG1CQUFtQjthQUMvQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUovQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO1NBQXZCLG1CQUFtQjtBQUVoQyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYWJsZXNDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvcmVuZGVyQ29tcG9uZW50cy9jdXN0b20tcmVuZGVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcIlwiLFxyXG4gICAgY29tcG9uZW50OiBTbWFydFRhYmxlQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwic21hcnQtdGFibGVcIixcclxuICAgICAgICBjb21wb25lbnQ6IFNtYXJ0VGFibGVDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc1JvdXRpbmdNb2R1bGUgeyB9XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVkQ29tcG9uZW50cyA9IFtcclxuICAgICAgICAgVGFibGVzQ29tcG9uZW50LFxyXG4gICAgICAgICBTbWFydFRhYmxlQ29tcG9uZW50XHJcbiAgICAgICBdO1xyXG4iXX0=