import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
let SmartTableComponent = class SmartTableComponent {
    constructor(service, componentFactoryResolver) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.source = new LocalDataSource();
        //  this.settings = this.service.getSettings();
        // console.log("setting : " + this.setting);
        let data = this.service.getData();
        this.source.load(data);
    }
    ngOnInit() {
        // this.settings = this.service.getSettings();
        // this.settings = this.service.etSetting();
        // console.log("settings : " + JSON.stringify(this.settings));
        this.service.getSetting().subscribe((res) => {
            // res.columns.lastName.renderComponent = this.componentFactoryResolver.resolveComponentFactory(
            //   res.columns.lastName.renderComponent
            // );
            this.settings = res;
            console.log("setting : " + JSON.stringify(res));
            console.log("Type of setting : " + typeof res);
        });
    }
    onSearch(query = "") {
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: "id",
                search: query
            },
            {
                field: "firstName",
                search: query
            },
            {
                field: "lastName",
                search: query
            },
            {
                field: "username",
                search: query
            },
            {
                field: "email",
                search: query
            },
            {
                field: "age",
                search: query
            }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }
    onDeleteConfirm(event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm("Are you sure you want to save?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm("Are you sure you want to create?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    ngOnDestroy() {
        console.log("settings : " + JSON.stringify(this.settings));
    }
};
SmartTableComponent = tslib_1.__decorate([
    Component({
        selector: "app-smart-table",
        template: "<nb-card>\r\n    <nb-card-header>\r\n\r\n        VINCI DATA-GRID\r\n\r\n        <div class=\"search-input\">\r\n            <button nbButton outline status=\"info\">WORD</button>\r\n            <button nbButton status=\"success\">EXCEL</button>\r\n            <button nbButton status=\"danger\">PDF</button>\r\n        </div>\r\n\r\n\r\n\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n        </ng2-smart-table>\r\n        <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table> -->\r\n    </nb-card-body>\r\n\r\n</nb-card>",
        styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
      .search-input {
        margin-bottom: 1rem;
        margin-right: 1rem;
        float: right;
      }

      button {
        margin: 1rem;
        margin-right: 1rem;
      }
    `]
    }),
    tslib_1.__metadata("design:paramtypes", [SmartTableService,
        ComponentFactoryResolver])
], SmartTableComponent);
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0Qix3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJbEQsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBMEIzRSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQU05QixZQUNVLE9BQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUDVELFdBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQVM5QywrQ0FBK0M7UUFDL0MsNENBQTRDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTiw4Q0FBOEM7UUFDOUMsNENBQTRDO1FBQzVDLDhEQUE4RDtRQUU5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBRS9DLGdHQUFnRztZQUNoRyx5Q0FBeUM7WUFDekMsS0FBSztZQUVMLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWdCLEVBQUU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ25CO1lBQ0UseUNBQXlDO1lBQ3pDO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGLEVBQ0QsS0FBSyxDQUNOLENBQUM7UUFDRixzRUFBc0U7UUFDdEUsb0VBQW9FO1FBQ3BFLDhEQUE4RDtJQUNoRSxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQUU7WUFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsRUFBRTtZQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1lBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFBRTtZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1lBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0YsQ0FBQTtBQWxHWSxtQkFBbUI7SUFyQi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsMjdCQUEyQztpQkFFekM7Ozs7Ozs7Ozs7Ozs7O0tBY0M7S0FFSixDQUFDOzZDQVFtQixpQkFBaUI7UUFDQSx3QkFBd0I7R0FSakQsbUJBQW1CLENBa0cvQjtTQWxHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLXJlbmRlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zbWFydC10YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1zbWFydC10YWJsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbmItY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcblxyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogU21hcnRUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgKSB7XHJcbiAgICAvLyAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyB0aGlzLnNldHRpbmcpO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5ldFNldHRpbmcoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZygpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuXHJcbiAgICAgIC8vIHJlcy5jb2x1bW5zLmxhc3ROYW1lLnJlbmRlckNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAvLyAgIHJlcy5jb2x1bW5zLmxhc3ROYW1lLnJlbmRlckNvbXBvbmVudFxyXG4gICAgICAvLyApO1xyXG5cclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJUeXBlIG9mIHNldHRpbmcgOiBcIiArIHR5cGVvZiByZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaChxdWVyeTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKFxyXG4gICAgICBbXHJcbiAgICAgICAgLy8gZmllbGRzIHdlIHdhbnQgdG8gaW5jbHVlIGluIHRoZSBzZWFyY2hcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJpZFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBxdWVyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6IFwiZmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJsYXN0TmFtZVwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBxdWVyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgICAgIHNlYXJjaDogcXVlcnlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJhZ2VcIixcclxuICAgICAgICAgIHNlYXJjaDogcXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSAnQU5EJyBvciAnT1InIHNlYXJjaFxyXG4gICAgLy8gKG1lYW5pbmcgYWxsIGNvbHVtbnMgc2hvdWxkIGNvbnRhaW4gc2VhcmNoIHF1ZXJ5IG9yIGF0IGxlYXN0IG9uZSlcclxuICAgIC8vICdBTkQnIGJ5IGRlZmF1bHQsIHNvIGNoYW5naW5nIHRvICdPUicgYnkgc2V0dGluZyBmYWxzZSBoZXJlXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XCIpKSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2F2ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzYXZlP1wiKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhW1wibmFtZVwiXSArPSBcIiArIGFkZGVkIGluIGNvZGVcIjtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT9cIikpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YVtcIm5hbWVcIl0gKz0gXCIgKyBhZGRlZCBpbiBjb2RlXCI7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcbn1cclxuIl19