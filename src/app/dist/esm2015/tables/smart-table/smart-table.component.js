import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { ServerDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from "@angular/common/http";
let SmartTableComponent = class SmartTableComponent {
    constructor(service, componentFactoryResolver, http) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = {};
        this.titlesArray = [];
        this.columnsArrayOfObjects = [];
        this.panelOpenState = false;
        this.settings = Object.assign({}, this.service.getSettings());
        this.source = new ServerDataSource(http, { endPoint: 'datafromServer' });
        // this.source = new ServerDataSource(http, { endPoint: 'http://localhost:3000/data' });
        // this.sourceServer = this.datafromServer;
    }
    ngOnInit() {
        // this.settings = this.service.getSettings(); // recevoir une instance direct de l'objet settings
        // this.service.getVinciSetting().subscribe(settings => {
        //   console.log("SETTINGS : ", settings);
        // this.vinciSettings = JSON.parse(JSON.stringify(settings));
        // this.settings = settings;
        // });
        // this.data = this.service.getData();
        /* Avoir les données depuis le service */
        // this.service.getDataFromBackend().subscribe(data => {
        //   // this.data = [data];
        //   this.source.load(data);
        //   console.log("data retourned from the backend : ", data);
        // });
        // console.log(" DATA : ", this.data);
        // this.source.load(this.data);
        this.columns = Object.assign({}, this.settings.columns);
        this.selectedItem = Object.keys(this.columns);
        this.titlesArray = Array.from(Object.keys(this.columns), k => this.columns[k].title);
        this.selectedItem.forEach(element => {
            this.columnsArrayOfObjects.push({
                key: element,
                title: this.columns[element].title
            });
        });
        // console.log("columnsArrayOfObjects", this.columnsArrayOfObjects);
    }
    selectColomns(columnsToShow) {
        // console.log("columnsToShow : ", columnsToShow);
        // Selectionner le collones à cacher
        const newColumnsToShow = Object.keys(this.columns)
            .filter(x => (columnsToShow || []).includes(x))
            .reduce((newColumns, column) => {
            newColumns[column] = this.columns[column];
            return newColumns;
        }, {});
        this.selectedItem = columnsToShow;
        let columnsArrayOfObjects1 = [];
        this.selectedItem.forEach(element => {
            columnsArrayOfObjects1.push({
                key: element,
                title: this.columns[element].title
            });
        });
        // syncronisation entre le tablau draagable et les options du tag select
        this.columnsArrayOfObjects = columnsArrayOfObjects1;
        // rafrichir le tableau avec le nouvelle objet settings
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        // cree un object colomns/settings qui cntient tous les columns meme ceux supprimer
        // pour pouvoir les reaficher apres si les client
        // Envoyer les modification au backend
        this.service.updateSettings(this.settings);
    }
    hideColomnId() {
        // this.newSettings = {};
        this.settings.columns.id.title = "iddddd";
        this.newSettings = this.settings;
        // console.log("this.settings " + this.newSettings);
        this.settings = Object.assign({}, this.newSettings);
        // console.log("this.settings " + this.settings);
        console.log("APPEL FUNCTION hideColumnId() ");
    }
    ngOnChanges(changes) {
        console.log("APPEL FUNCTION hideColumnId() " + changes);
    }
    onSearch(query = "") {
        console.log("-- OnSerch function --");
        // crée un tableaux dynamique baser sur les columns de l'object Settingd,
        // pour le donner comme attribue pour la fonction ".setFilter()"
        let searchArray = this.columnsArrayOfObjects.map(col => {
            return { field: col.key, search: query };
        });
        this.source.setFilter(searchArray, false);
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
    drop(event) {
        moveItemInArray(this.columnsArrayOfObjects, event.previousIndex, event.currentIndex);
        const newColumnsToShow = this.columnsArrayOfObjects.reduce((newColumnsObject, arrayObject) => {
            newColumnsObject[arrayObject.key] = this.columns[arrayObject.key];
            return newColumnsObject;
        }, {});
        // cree un objet settings pour le reasiner au composant
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        // syncroniser les changement avec le backend
        this.service.updateSettings(this.settings);
    }
    ngOnDestroy() {
        console.log("settings : " + JSON.stringify(this.settings));
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SmartTableComponent.prototype, "config", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SmartTableComponent.prototype, "datafromServer", void 0);
tslib_1.__decorate([
    ViewChild("ng2smart"),
    tslib_1.__metadata("design:type", Object)
], SmartTableComponent.prototype, "ng2smart", void 0);
SmartTableComponent = tslib_1.__decorate([
    Component({
        selector: "generic-datagrid",
        template: "<nb-card>\r\n\r\n  <nb-card-header>\r\n\r\n    <nb-card>\r\n      <h1> Generic Data-Grid <br></h1>\r\n    </nb-card>\r\n\r\n    <!-- {{ data | json }} -->\r\n\r\n    <nb-card>\r\n      <div class=\"search-input\">\r\n\r\n        <button nbButton status=\"success\">EXCEL</button>\r\n        <button nbButton status=\"danger\">PDF</button>\r\n\r\n      </div>\r\n    </nb-card>\r\n\r\n    <div class=\"vc-accordion\">\r\n\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Preferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Selection Colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select cdkDropList multiple placeholder=\"Multiple Select\" class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\" [(selected)]=\"selectedItem\" shape=\"round\" size=\"small\">\r\n                  <nb-select-label>\r\n                    Selectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{col.key}}\">\r\n                    {{col.value.title}}\r\n                  </nb-option>\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Trie des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n\r\n        <!-- <nb-accordion-item>\r\n              <nb-accordion-item-header>\r\n                Trie des colonnes\r\n              </nb-accordion-item-header>\r\n              <nb-accordion-item-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-accordion-item-body>\r\n            </nb-accordion-item> -->\r\n\r\n      </nb-accordion>\r\n\r\n    </div>\r\n\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"hideColomnId()\">iddd</button> -->\r\n\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <nb-card>\r\n      <input type=\"text\" nbInput fieldSize=\"large\" #search class=\"search\" placeholder=\"Search...\"\r\n        (keydown.enter)=\"onSearch(search.value)\">\r\n    </nb-card>\r\n\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n    </ng2-smart-table>\r\n\r\n  </nb-card-body>\r\n\r\n</nb-card>\r\n"
        // changeDetection: ChangeDetectionStrategy.OnPush,
        ,
        styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
    }),
    tslib_1.__metadata("design:paramtypes", [SmartTableService,
        ComponentFactoryResolver,
        HttpClient])
], SmartTableComponent);
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRSxPQUFPLEVBQWtCLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHM0Usc0NBQXNDO0FBQ3RDLG1FQUFtRTtBQUNuRSwyREFBMkQ7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT2xELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBcUI5QixZQUNTLE9BQTBCLEVBQ3pCLHdCQUFrRCxFQUMxRCxJQUFnQjtRQUZULFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF0Qm5ELFdBQU0sR0FBVyxFQUFFLENBQUM7UUFjN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBU3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pF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LENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBO0FBdE1VO0lBQVIsS0FBSyxFQUFFO3NDQUFTLE1BQU07bURBQU07QUFDcEI7SUFBUixLQUFLLEVBQUU7OzJEQUFzQjtBQUNQO0lBQXRCLFNBQVMsQ0FBQyxVQUFVLENBQUM7O3FEQUFVO0FBSHJCLG1CQUFtQjtJQU4vQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBRTVCLHdzR0FBMkM7UUFDM0MsbURBQW1EOzs7S0FDcEQsQ0FBQzs2Q0F1QmtCLGlCQUFpQjtRQUNDLHdCQUF3QjtRQUNwRCxVQUFVO0dBeEJQLG1CQUFtQixDQXVNL0I7U0F2TVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UsIFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zbWFydC10YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJ1dGlsXCI7XHJcbi8vIGltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSBcImNsdXN0ZXJcIjtcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO2V4cGxvcmVyXHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnZW5lcmljLWRhdGFncmlkXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWxcIlxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogT2JqZWN0ID0ge307XHJcbiAgQElucHV0KCkgZGF0YWZyb21TZXJ2ZXIgOiBhbnk7XHJcbiAgQFZpZXdDaGlsZChcIm5nMnNtYXJ0XCIpIG5nMnNtYXJ0O1xyXG5cclxuICBkYXRhOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBuZXdTZXR0aW5nczogYW55O1xyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG5cclxuICBzZWxlY3RlZEl0ZW06IGFueTtcclxuICBjb2x1bW5zOiBhbnk7XHJcbiAgc2VsZWN0ZWRJdGVtTmdNb2RlbDogYW55O1xyXG4gIHZpbmNpU2V0dGluZ3M6IGFueTtcclxuICB0aXRsZXNBcnJheSA9IFtdO1xyXG4gIGNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IFtdO1xyXG5cclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2VydmljZTogU21hcnRUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKSk7XHJcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHsgZW5kUG9pbnQ6ICdkYXRhZnJvbVNlcnZlcicgfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHsgZW5kUG9pbnQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YScgfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZVNlcnZlciA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKTsgLy8gcmVjZXZvaXIgdW5lIGluc3RhbmNlIGRpcmVjdCBkZSBsJ29iamV0IHNldHRpbmdzXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UuZ2V0VmluY2lTZXR0aW5nKCkuc3Vic2NyaWJlKHNldHRpbmdzID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJTRVRUSU5HUyA6IFwiLCBzZXR0aW5ncyk7XHJcbiAgICAvLyB0aGlzLnZpbmNpU2V0dGluZ3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG5cclxuICAgIC8qIEF2b2lyIGxlcyBkb25uw6llcyBkZXB1aXMgbGUgc2VydmljZSAqL1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldERhdGFGcm9tQmFja2VuZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgIC8vICAgLy8gdGhpcy5kYXRhID0gW2RhdGFdO1xyXG4gICAgLy8gICB0aGlzLnNvdXJjZS5sb2FkKGRhdGEpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcImRhdGEgcmV0b3VybmVkIGZyb20gdGhlIGJhY2tlbmQgOiBcIiwgZGF0YSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBEQVRBIDogXCIsIHRoaXMuZGF0YSk7XHJcblxyXG4gICAgLy8gdGhpcy5zb3VyY2UubG9hZCh0aGlzLmRhdGEpO1xyXG5cclxuICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MuY29sdW1ucyk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpO1xyXG5cclxuICAgIHRoaXMudGl0bGVzQXJyYXkgPSBBcnJheS5mcm9tKFxyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpLFxyXG4gICAgICBrID0+IHRoaXMuY29sdW1uc1trXS50aXRsZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5wdXNoKHtcclxuICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sdW1uc0FycmF5T2ZPYmplY3RzXCIsIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9tbnMoY29sdW1uc1RvU2hvdykge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5zVG9TaG93IDogXCIsIGNvbHVtbnNUb1Nob3cpO1xyXG5cclxuICAgIC8vIFNlbGVjdGlvbm5lciBsZSBjb2xsb25lcyDDoCBjYWNoZXJcclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpXHJcbiAgICAgIC5maWx0ZXIoeCA9PiAoY29sdW1uc1RvU2hvdyB8fCBbXSkuaW5jbHVkZXMoeCkpXHJcbiAgICAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuY29sdW1uc1tjb2x1bW5dO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgfSwge30pO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY29sdW1uc1RvU2hvdztcclxuICAgIGxldCBjb2x1bW5zQXJyYXlPZk9iamVjdHMxID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb2x1bW5zQXJyYXlPZk9iamVjdHMxLnB1c2goe1xyXG4gICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICB0aXRsZTogdGhpcy5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3luY3JvbmlzYXRpb24gZW50cmUgbGUgdGFibGF1IGRyYWFnYWJsZSBldCBsZXMgb3B0aW9ucyBkdSB0YWcgc2VsZWN0XHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IGNvbHVtbnNBcnJheU9mT2JqZWN0czE7XHJcblxyXG4gICAgLy8gcmFmcmljaGlyIGxlIHRhYmxlYXUgYXZlYyBsZSBub3V2ZWxsZSBvYmpldCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlZSB1biBvYmplY3QgY29sb21ucy9zZXR0aW5ncyBxdWkgY250aWVudCB0b3VzIGxlcyBjb2x1bW5zIG1lbWUgY2V1eCBzdXBwcmltZXJcclxuICAgIC8vIHBvdXIgcG91dm9pciBsZXMgcmVhZmljaGVyIGFwcmVzIHNpIGxlcyBjbGllbnRcclxuXHJcbiAgICAvLyBFbnZveWVyIGxlcyBtb2RpZmljYXRpb24gYXUgYmFja2VuZFxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvbG9tbklkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5uZXdTZXR0aW5ncyA9IHt9O1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5pZC50aXRsZSA9IFwiaWRkZGRkXCI7XHJcblxyXG4gICAgdGhpcy5uZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5uZXdTZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubmV3U2V0dGluZ3MpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMuc2V0dGluZ3MpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQVBQRUwgRlVOQ1RJT04gaGlkZUNvbHVtbklkKCkgXCIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJBUFBFTCBGVU5DVElPTiBoaWRlQ29sdW1uSWQoKSBcIiArIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2gocXVlcnk6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0gT25TZXJjaCBmdW5jdGlvbiAtLVwiKTtcclxuXHJcbiAgICAvLyBjcsOpZSB1biB0YWJsZWF1eCBkeW5hbWlxdWUgYmFzZXIgc3VyIGxlcyBjb2x1bW5zIGRlIGwnb2JqZWN0IFNldHRpbmdkLFxyXG4gICAgLy8gcG91ciBsZSBkb25uZXIgY29tbWUgYXR0cmlidWUgcG91ciBsYSBmb25jdGlvbiBcIi5zZXRGaWx0ZXIoKVwiXHJcblxyXG4gICAgbGV0IHNlYXJjaEFycmF5ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMubWFwKGNvbCA9PiB7XHJcbiAgICAgIHJldHVybiB7IGZpZWxkOiBjb2wua2V5LCBzZWFyY2g6IHF1ZXJ5IH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoc2VhcmNoQXJyYXksIGZhbHNlKTtcclxuXHJcbiAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIHNwZWNpZnlpbmcgd2hldGhlciB0byBwZXJmb3JtICdBTkQnIG9yICdPUicgc2VhcmNoXHJcbiAgICAvLyAobWVhbmluZyBhbGwgY29sdW1ucyBzaG91bGQgY29udGFpbiBzZWFyY2ggcXVlcnkgb3IgYXQgbGVhc3Qgb25lKVxyXG4gICAgLy8gJ0FORCcgYnkgZGVmYXVsdCwgc28gY2hhbmdpbmcgdG8gJ09SJyBieSBzZXR0aW5nIGZhbHNlIGhlcmVcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlQ29uZmlybShldmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIikpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TYXZlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNhdmU/XCIpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGFbXCJuYW1lXCJdICs9IFwiICsgYWRkZWQgaW4gY29kZVwiO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY3JlYXRlP1wiKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhW1wibmFtZVwiXSArPSBcIiArIGFkZGVkIGluIGNvZGVcIjtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgbW92ZUl0ZW1JbkFycmF5KFxyXG4gICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyxcclxuICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgZXZlbnQuY3VycmVudEluZGV4XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5yZWR1Y2UoXHJcbiAgICAgIChuZXdDb2x1bW5zT2JqZWN0LCBhcnJheU9iamVjdCkgPT4ge1xyXG4gICAgICAgIG5ld0NvbHVtbnNPYmplY3RbYXJyYXlPYmplY3Qua2V5XSA9IHRoaXMuY29sdW1uc1thcnJheU9iamVjdC5rZXldO1xyXG4gICAgICAgIHJldHVybiBuZXdDb2x1bW5zT2JqZWN0O1xyXG4gICAgICB9LFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjcmVlIHVuIG9iamV0IHNldHRpbmdzIHBvdXIgbGUgcmVhc2luZXIgYXUgY29tcG9zYW50XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywge1xyXG4gICAgICBjb2x1bW5zOiBuZXdDb2x1bW5zVG9TaG93XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzeW5jcm9uaXNlciBsZXMgY2hhbmdlbWVudCBhdmVjIGxlIGJhY2tlbmRcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5ncyA6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xyXG4gIH1cclxufVxyXG4iXX0=