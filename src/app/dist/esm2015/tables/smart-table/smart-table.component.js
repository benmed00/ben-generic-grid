import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
let SmartTableComponent = class SmartTableComponent {
    constructor(service) {
        this.service = service;
        this.source = new LocalDataSource();
        //  this.settings = this.service.getSettings();
        // console.log("setting : " + this.setting);
        const data = this.service.getData();
        this.source.load(data);
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.settings = this.service.getSettings();
        // this.settings = this.service.etSetting();
        // console.log("settings : " + JSON.stringify(this.settings));
        this.service.getSetting().subscribe(res => {
            this.settings = res;
            console.log("setting : " + JSON.stringify(res));
        });
    }
    onDeleteConfirm(event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("settings : " + JSON.stringify(this.settings));
    }
};
SmartTableComponent = tslib_1.__decorate([
    Component({
        selector: "app-smart-table",
        template: "<nb-card>\r\n    <nb-card-header>\r\n        Smart Table\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table>\r\n    </nb-card-body>\r\n\r\n</nb-card>",
        styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `]
    }),
    tslib_1.__metadata("design:paramtypes", [SmartTableService])
], SmartTableComponent);
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmluY2ktZGF0YWdyaWQvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUvc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBYzNFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTTlCLFlBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBTDlDLFdBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQU05QywrQ0FBK0M7UUFDL0MsNENBQTRDO1FBQzVDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixpR0FBaUc7UUFDakcsdUNBQXVDO1FBR3ZDLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsOERBQThEO1FBRTlELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsRUFBRTtZQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxnREFBZ0Q7UUFDaEQsMENBQTBDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFNUQsQ0FBQztDQUNGLENBQUE7QUE1Q1ksbUJBQW1CO0lBWC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsbVRBQTJDO2lCQUV6Qzs7OztLQUlDO0tBRUosQ0FBQzs2Q0FPNkIsaUJBQWlCO0dBTm5DLG1CQUFtQixDQTRDL0I7U0E1Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gXCJuZzItc21hcnQtdGFibGVcIjtcclxuXHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zbWFydC10YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtc21hcnQtdGFibGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG5iLWNhcmQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbWFydFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG5cclxuICBzZXR0aW5nOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc2V0dGluZ3M6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBTbWFydFRhYmxlU2VydmljZSkge1xyXG4gICAgLy8gIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0dGluZyA6IFwiICsgdGhpcy5zZXR0aW5nKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXHJcblxyXG5cclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNlcnZpY2UuZXRTZXR0aW5nKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldHRpbmdzIDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmdldFNldHRpbmcoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IHJlcztcclxuICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XCIpKSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy9DYWxsZWQgb25jZSwgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXHJcbiAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkRlc3Ryb3knIHRvIHRoZSBjbGFzcy5cclxuICAgY29uc29sZS5sb2coXCJzZXR0aW5ncyA6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xyXG5cclxuICB9XHJcbn1cclxuIl19