import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service, componentFactoryResolver) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.source = new LocalDataSource();
        //  this.settings = this.service.getSettings();
        // console.log("setting : " + this.setting);
        var data = this.service.getData();
        this.source.load(data);
    }
    SmartTableComponent.prototype.ngOnInit = function () {
        // this.settings = this.service.getSettings();
        // this.settings = this.service.etSetting();
        // console.log("settings : " + JSON.stringify(this.settings));
        var _this = this;
        this.service.getSetting().subscribe(function (res) {
            // res.columns.lastName.renderComponent = this.componentFactoryResolver.resolveComponentFactory(
            //   res.columns.lastName.renderComponent
            // );
            _this.settings = res;
            console.log("setting : " + JSON.stringify(res));
            console.log("Type of setting : " + typeof res);
        });
    };
    SmartTableComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ""; }
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
    };
    SmartTableComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm("Are you sure you want to save?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm("Are you sure you want to create?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.ngOnDestroy = function () {
        console.log("settings : " + JSON.stringify(this.settings));
    };
    SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: "app-smart-table",
            template: "<nb-card>\r\n    <nb-card-header>\r\n\r\n        VINCI DATA-GRID\r\n\r\n        <div class=\"search-input\">\r\n            <button nbButton outline status=\"info\">WORD</button>\r\n            <button nbButton status=\"success\">EXCEL</button>\r\n            <button nbButton status=\"danger\">PDF</button>\r\n        </div>\r\n\r\n\r\n\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n        </ng2-smart-table>\r\n        <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table> -->\r\n    </nb-card-body>\r\n\r\n</nb-card>",
            styles: ["\n      nb-card {\n        transform: translate3d(0, 0, 0);\n      }\n      .search-input {\n        margin-bottom: 1rem;\n        margin-right: 1rem;\n        float: right;\n      }\n\n      button {\n        margin: 1rem;\n        margin-right: 1rem;\n      }\n    "]
        }),
        tslib_1.__metadata("design:paramtypes", [SmartTableService,
            ComponentFactoryResolver])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0Qix3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJbEQsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBMEIzRTtJQU1FLDZCQUNVLE9BQTBCLEVBQzFCLHdCQUFrRDtRQURsRCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBUDVELFdBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQVM5QywrQ0FBK0M7UUFDL0MsNENBQTRDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSw4Q0FBOEM7UUFDOUMsNENBQTRDO1FBQzVDLDhEQUE4RDtRQUhoRSxpQkFlQztRQVZDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUUzQyxnR0FBZ0c7WUFDaEcseUNBQXlDO1lBQ3pDLEtBQUs7WUFFTCxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUFrQjtRQUFsQixzQkFBQSxFQUFBLFVBQWtCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNuQjtZQUNFLHlDQUF5QztZQUN6QztnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRixFQUNELEtBQUssQ0FDTixDQUFDO1FBQ0Ysc0VBQXNFO1FBQ3RFLG9FQUFvRTtRQUNwRSw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELDZDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFBRTtZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO1lBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUM7WUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELDZDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFBRTtZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1lBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBakdVLG1CQUFtQjtRQXJCL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiwyN0JBQTJDO3FCQUV6Qyw2UUFjQztTQUVKLENBQUM7aURBUW1CLGlCQUFpQjtZQUNBLHdCQUF3QjtPQVJqRCxtQkFBbUIsQ0FrRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxHRCxJQWtHQztTQWxHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLXJlbmRlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zbWFydC10YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1zbWFydC10YWJsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbmItY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcblxyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogU21hcnRUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgKSB7XHJcbiAgICAvLyAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyB0aGlzLnNldHRpbmcpO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5ldFNldHRpbmcoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZygpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuXHJcbiAgICAgIC8vIHJlcy5jb2x1bW5zLmxhc3ROYW1lLnJlbmRlckNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAvLyAgIHJlcy5jb2x1bW5zLmxhc3ROYW1lLnJlbmRlckNvbXBvbmVudFxyXG4gICAgICAvLyApO1xyXG5cclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJUeXBlIG9mIHNldHRpbmcgOiBcIiArIHR5cGVvZiByZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaChxdWVyeTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKFxyXG4gICAgICBbXHJcbiAgICAgICAgLy8gZmllbGRzIHdlIHdhbnQgdG8gaW5jbHVlIGluIHRoZSBzZWFyY2hcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJpZFwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBxdWVyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6IFwiZmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJsYXN0TmFtZVwiLFxyXG4gICAgICAgICAgc2VhcmNoOiBxdWVyeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgICAgIHNlYXJjaDogcXVlcnlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogXCJhZ2VcIixcclxuICAgICAgICAgIHNlYXJjaDogcXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSAnQU5EJyBvciAnT1InIHNlYXJjaFxyXG4gICAgLy8gKG1lYW5pbmcgYWxsIGNvbHVtbnMgc2hvdWxkIGNvbnRhaW4gc2VhcmNoIHF1ZXJ5IG9yIGF0IGxlYXN0IG9uZSlcclxuICAgIC8vICdBTkQnIGJ5IGRlZmF1bHQsIHNvIGNoYW5naW5nIHRvICdPUicgYnkgc2V0dGluZyBmYWxzZSBoZXJlXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XCIpKSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2F2ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzYXZlP1wiKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhW1wibmFtZVwiXSArPSBcIiArIGFkZGVkIGluIGNvZGVcIjtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT9cIikpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YVtcIm5hbWVcIl0gKz0gXCIgKyBhZGRlZCBpbiBjb2RlXCI7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcbn1cclxuIl19