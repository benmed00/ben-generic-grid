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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy90YWJsZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUcxRSxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLG1CQUFtQjthQUMvQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBSSxDQUFBO0FBQXZCLG1CQUFtQjtJQUovQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csbUJBQW1CLENBQUk7U0FBdkIsbUJBQW1CO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7Q0FDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRhYmxlc0NvbXBvbmVudCB9IGZyb20gJy4vdGFibGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXRhYmxlL3NtYXJ0LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9yZW5kZXJDb21wb25lbnRzL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiXCIsXHJcbiAgICBjb21wb25lbnQ6IFNtYXJ0VGFibGVDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJzbWFydC10YWJsZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVzUm91dGluZ01vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICBUYWJsZXNDb21wb25lbnQsXHJcbiAgICAgICAgIFNtYXJ0VGFibGVDb21wb25lbnRcclxuICAgICAgIF07XHJcbiJdfQ==