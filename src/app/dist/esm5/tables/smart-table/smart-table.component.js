import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service) {
        this.service = service;
        this.source = new LocalDataSource();
        //  this.settings = this.service.getSettings();
        // console.log("setting : " + this.setting);
        var data = this.service.getData();
        this.source.load(data);
    }
    SmartTableComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        // this.settings = this.service.getSettings();
        // this.settings = this.service.etSetting();
        // console.log("settings : " + JSON.stringify(this.settings));
        this.service.getSetting().subscribe(function (res) {
            _this.settings = res;
            console.log("setting : " + JSON.stringify(res));
        });
    };
    SmartTableComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("settings : " + JSON.stringify(this.settings));
    };
    SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: "app-smart-table",
            template: "<nb-card>\r\n    <nb-card-header>\r\n        Smart Table\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table>\r\n    </nb-card-body>\r\n\r\n</nb-card>",
            styles: ["\n      nb-card {\n        transform: translate3d(0, 0, 0);\n      }\n    "]
        }),
        tslib_1.__metadata("design:paramtypes", [SmartTableService])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBYzNFO0lBTUUsNkJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBTDlDLFdBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQU05QywrQ0FBK0M7UUFDL0MsNENBQTRDO1FBQzVDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxpR0FBaUc7UUFDakcsdUNBQXVDO1FBRnpDLGlCQWVDO1FBVkMsOENBQThDO1FBQzlDLDRDQUE0QztRQUM1Qyw4REFBOEQ7UUFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCw2Q0FBZSxHQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQUU7WUFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsZ0RBQWdEO1FBQ2hELDBDQUEwQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUEzQ1UsbUJBQW1CO1FBWC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsbVRBQTJDO3FCQUV6Qyw0RUFJQztTQUVKLENBQUM7aURBTzZCLGlCQUFpQjtPQU5uQyxtQkFBbUIsQ0E0Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEsIFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NtYXJ0LXRhYmxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1zbWFydC10YWJsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbmItY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcblxyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNtYXJ0VGFibGVTZXJ2aWNlKSB7XHJcbiAgICAvLyAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyB0aGlzLnNldHRpbmcpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc2VydmljZS5nZXREYXRhKCk7XHJcbiAgICB0aGlzLnNvdXJjZS5sb2FkKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXHJcbiAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cclxuXHJcblxyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5ldFNldHRpbmcoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZygpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzID0gcmVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG9uRGVsZXRlQ29uZmlybShldmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIikpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvL0NhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cclxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uRGVzdHJveScgdG8gdGhlIGNsYXNzLlxyXG4gICBjb25zb2xlLmxvZyhcInNldHRpbmdzIDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=