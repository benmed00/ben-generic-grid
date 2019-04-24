import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
const routes = [
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
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TablesRoutingModule);
export { TablesRoutingModule };
export const routedComponents = [
    TablesComponent,
    SmartTableComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHMUUsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSxtQkFBbUI7YUFDL0I7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBQUksQ0FBQTtBQUF2QixtQkFBbUI7SUFKL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLG1CQUFtQixDQUFJO1NBQXZCLG1CQUFtQjtBQUVoQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0NBRXBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUYWJsZXNDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXRhYmxlL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiXCIsXHJcbiAgICBjb21wb25lbnQ6IFNtYXJ0VGFibGVDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJzbWFydC10YWJsZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVzUm91dGluZ01vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICBUYWJsZXNDb21wb25lbnQsXHJcbiAgICAgICAgIFNtYXJ0VGFibGVDb21wb25lbnRcclxuXHJcbiAgICAgICBdO1xyXG4iXX0=