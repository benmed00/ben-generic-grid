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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy90YWJsZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUcxRSxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLG1CQUFtQjthQUMvQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBSSxDQUFBO0FBQXZCLG1CQUFtQjtJQUovQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csbUJBQW1CLENBQUk7U0FBdkIsbUJBQW1CO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7Q0FFcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRhYmxlc0NvbXBvbmVudCB9IGZyb20gJy4vdGFibGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXRhYmxlL3NtYXJ0LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtdGFibGUvY3VzdG9tLXJlbmRlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCJcIixcclxuICAgIGNvbXBvbmVudDogU21hcnRUYWJsZUNvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcInNtYXJ0LXRhYmxlXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBTbWFydFRhYmxlQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZXNSb3V0aW5nTW9kdWxlIHsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlZENvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgIFRhYmxlc0NvbXBvbmVudCxcclxuICAgICAgICAgU21hcnRUYWJsZUNvbXBvbmVudFxyXG5cclxuICAgICAgIF07XHJcbiJdfQ==