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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvdGFibGVzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHMUUsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSxtQkFBbUI7YUFDL0I7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDeEIsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixtQkFBbUI7QUFFaEMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtDQUVwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVGFibGVzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC10YWJsZS9jdXN0b20tcmVuZGVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcIlwiLFxyXG4gICAgY29tcG9uZW50OiBTbWFydFRhYmxlQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwic21hcnQtdGFibGVcIixcclxuICAgICAgICBjb21wb25lbnQ6IFNtYXJ0VGFibGVDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlc1JvdXRpbmdNb2R1bGUgeyB9XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVkQ29tcG9uZW50cyA9IFtcclxuICAgICAgICAgVGFibGVzQ29tcG9uZW50LFxyXG4gICAgICAgICBTbWFydFRhYmxlQ29tcG9uZW50XHJcblxyXG4gICAgICAgXTtcclxuIl19