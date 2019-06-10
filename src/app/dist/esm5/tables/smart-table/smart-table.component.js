import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from "@angular/common/http";
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service, componentFactoryResolver, http) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.titlesArray = [];
        this.columnsArrayOfObjects = [];
        this.panelOpenState = false;
        // source: ServerDataSource;
        this.source = new LocalDataSource();
        // this.settingsOrigine = Object.assign({}, this.service.getSettings());
        // console.log(" Original Setttings : ", this.settingsOrigine);
        // this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
        //   .filter(key => this.settingsOrigine.columns[key].display !== "false")
        //   .reduce((newColumns, column) => {
        //     newColumns[column] = this.settingsOrigine.columns[column];
        //     // console.log("after reduce : ", newColumns);
        //     return newColumns;
        //   }, {});
        // this.settingsOrigine = Object.assign({}, res);
        // tester pour le parametre "display"
        // console.log("columnn To Display : ", this.columnnToDisplay);
        // this.source = new ServerDataSource(http, { endPoint: 'datafromServer' }); // datafromServer : URL where the Settings object will be provided
        // this.source = new ServerDataSource(http, {
        //   endPoint: "http://localhost:3000/data"
        // });
        // this.sourceServer = this.datafromServer;
    }
    SmartTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* GETTING DATA *****************************************/
        this.source = new LocalDataSource();
        this.data = this.datafromServer;
        // this.data = this.service.getData();
        // this.service.getdata().subscribe(data => {
        //   this.source.load(data);
        // });
        // console.log(" Data From Local : ", this.data);
        this.source.load(this.data);
        /* *****************************************************/
        // this.service.getSettingsFromNodeBckend().subscribe(settings => {
        // this.settingsOrigine = Object.assign({}, settings);
        this.settingsOrigine = this.config; // recuperer comme input
        // this.settingsOrigine = settings;
        // this.settings = settings; // for direct asignement
        if (this.settingsOrigine) {
            // For resolvingg undefind probleme
            console.log(" Settings From backend : ", this.settingsOrigine);
            this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
                .filter(function (key) { return _this.settingsOrigine.columns[key].display !== "false"; })
                .reduce(function (newColumns, column) {
                newColumns[column] = _this.settingsOrigine.columns[column];
                return newColumns;
            }, {});
            this.settings = Object.assign({}, this.settingsOrigine, {
                columns: this.columnnToDisplay
            });
            this.columns = Object.assign({}, this.settingsOrigine.columns);
            this.selectedItem = Object.keys(this.columnnToDisplay);
            this.titlesArray = Array.from(Object.keys(this.settings.columns), function (k) { return _this.settings.columns[k].title; });
            this.selectedItem.forEach(function (element) {
                _this.columnsArrayOfObjects.push({
                    key: element,
                    title: _this.settingsOrigine.columns[element].title
                });
            });
        }
        // }); // fin of subscribe
        if (this.settingsOrigine) {
            // For resolvingg undefind probleme
            console.log(" Settings From backend : ", this.settingsOrigine);
        }
        // this.settings = this.service.getSettings(); // recevoir une instance direct de l'objet settings
        // this.service.getVinciSetting().subscribe(settings => {
        //   console.log("SETTINGS : ", settings);
        // this.vinciSettings = JSON.parse(JSON.stringify(settings));
        // this.settings = settings;
        // });
        // this.data = this.service.getData();
        // console.log(" DATA : ", this.data);
        // this.source.load(this.data);
        /* Avoir les données depuis le service */
        // this.service.getDataFromBackend().subscribe(data => {
        //   // this.data = [data];
        //   this.source.load(data);
        //   console.log("data retourned from the backend : ", data);
        // });
        // for (const key in this.settings.columns) {
        //   // console.log(" this.settings.columns." + key + ".display = ", this.settings.columns[key].display);
        //   if (this.settings.columns[key].display === "false") {
        //     console.log(" Column Key with display false : ", key);
        //     // newColumns[key] = this.columns[key];
        //     // this.settings = Object.assign({}, settingsOrigine.columns.[key]);
        //   }
        // }
        console.log(" Settings From backend : ", this.settingsOrigine); // Undefined
    };
    SmartTableComponent.prototype.ngAfterViewInit = function () {
        // throw new Error("Method not implemented.");
    };
    SmartTableComponent.prototype.selectColomns = function (columnsToShow) {
        var _this = this;
        // Tableau des identifiant des colonnes decocher
        var unselected = Object.keys(this.columns).filter(function (x) { return !(columnsToShow || []).includes(x); });
        // Selectionner les collones à Afficher
        var newColumnsToShow = Object.keys(this.columns)
            .filter(function (x) { return (columnsToShow || []).includes(x); })
            .reduce(function (newColumns, column) {
            newColumns[column] = _this.columns[column]; // remplire un objet avec seulement les colonnes qui on un index pour etre afficher
            return newColumns;
        }, {});
        // les option a etre cocher
        this.selectedItem = columnsToShow;
        //
        var columnsArrayOfObjects1 = [];
        this.selectedItem.forEach(function (element, index) {
            // console.log(" index : " + index + " element : " + element);
            columnsArrayOfObjects1.splice(index, 0, {
                key: element,
                title: _this.columns[element].title
            });
        });
        // syncronisation entre le tablau DRAGUABLE et le composant SELECT
        this.columnsArrayOfObjects = columnsArrayOfObjects1;
        // rafrichir le tableau avec le nouvelle objet settings
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        // cree un object colomns/settings qui cntient tous les columns meme ceux supprimer
        // pour pouvoir les reaficher apres si les client
        // Cree un objet settings en changent les parametre : display="false"
        /* Changer la valeur de la proprite display apres chaque action */
        // cacher les colonnes diselectionner
        unselected.forEach(function (elem) {
            _this.settingsOrigine.columns[elem].display = "false";
        });
        // Faire apparaitre les colonnes selectionner
        columnsToShow.forEach(function (elem) {
            _this.settingsOrigine.columns[elem].display = "true";
        });
        /*************************************************************** */
        var preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: "PREF_VISIBILITY",
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // Envoyer les modification au backend
        this.service.updateSettings(this.settingsOrigine);
    };
    SmartTableComponent.prototype.hideColomnId = function () {
        // this.newSettings = {};
        this.settings.columns.id.title = "iddddd";
        this.newSettings = this.settings;
        // console.log("this.settings " + this.newSettings);
        this.settings = Object.assign({}, this.newSettings);
        // console.log("this.settings " + this.settings);
        console.log("APPEL FUNCTION hideColumnId() ");
    };
    SmartTableComponent.prototype.ngOnChanges = function (changes) {
        console.log("APPEL de l'evenement ngOnChanges() ", changes);
    };
    SmartTableComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ""; }
        console.log("-- OnSerch function --");
        // crée un tableaux dynamique baser sur les columns de l'object Settingd,
        // pour le donner comme attribue pour la fonction ".setFilter()"
        var searchArray = this.columnsArrayOfObjects.map(function (col) {
            return { field: col.key, search: query };
        });
        // console.log(this.columnsArrayOfObjects);
        // console.log(searchArray);
        this.source.setFilter(searchArray, false);
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
            event.newData.name += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm("Are you sure you want to create?")) {
            event.newData.name += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.drop = function (event) {
        var _this = this;
        moveItemInArray(this.columnsArrayOfObjects, event.previousIndex, event.currentIndex);
        var arrayOfItemArranged = [];
        var newColumnsToShow = this.columnsArrayOfObjects.reduce(function (newColumnsObject, arrayObject) {
            arrayOfItemArranged.unshift(arrayObject.key);
            // console.log("Array Of Item Arranged : ", arrayOfItemArranged);
            newColumnsObject[arrayObject.key] = _this.columns[arrayObject.key];
            return newColumnsObject;
        }, {});
        // console.log("TableauOrdeonner : ", arrayOfItemArranged);
        // cree un objet settings pour le reasiner au composant
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        var preference = {
            idTable: 0,
            idUser: 0,
            preferneceType: "PREF_ORDER",
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // syncroniser les changement avec le backend
        this.service.updateSettings(this.settings);
    };
    SmartTableComponent.prototype.ngOnDestroy = function () {
        console.log("settings : " + JSON.stringify(this.settings));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SmartTableComponent.prototype, "config", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SmartTableComponent.prototype, "datafromServer", void 0);
    tslib_1.__decorate([
        ViewChild("ng2smart"),
        tslib_1.__metadata("design:type", Object)
    ], SmartTableComponent.prototype, "ng2smart", void 0);
    SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: "generic-datagrid",
            template: "<nb-card>\r\n\r\n  <nb-card-header>\r\n\r\n    <!-- <nb-card>\r\n      <h1> Generic Data-Grid <br></h1>\r\n    </nb-card>\r\n\r\n   {{ settingsOrigine | json }}\r\n\r\n    <nb-card>\r\n      <div class=\"search-input\">\r\n\r\n        <button nbButton status=\"success\">EXCEL</button>\r\n        <button nbButton status=\"danger\">PDF</button>\r\n\r\n      </div>\r\n    </nb-card> -->\r\n\r\n    <div class=\"vc-accordion\">\r\n\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Preferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Selection Colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select cdkDropList multiple placeholder=\"Multiple Select\" class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\" [(selected)]=\"selectedItem\" shape=\"round\" size=\"small\">\r\n                  <nb-select-label>\r\n                    Selectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{col.key}}\">\r\n                    {{col.value.title}}\r\n                  </nb-option>\r\n                  <!-- <nb-option *ngFor=\"let col of columnsArrayOfObjects\" value=\"{{col.key}}\">\r\n                    {{col.title}}\r\n                  </nb-option> -->\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Trie des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n\r\n        <!-- <nb-accordion-item>\r\n              <nb-accordion-item-header>\r\n                Trie des colonnes\r\n              </nb-accordion-item-header>\r\n              <nb-accordion-item-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-accordion-item-body>\r\n            </nb-accordion-item> -->\r\n\r\n      </nb-accordion>\r\n\r\n    </div>\r\n\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"hideColomnId()\">iddd</button> -->\r\n\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <nb-card>\r\n      <!-- <input type=\"text\" nbInput fieldSize=\"large\" #search class=\"search\" placeholder=\"Search...\"\r\n        (keydown.enter)=\"onSearch(search.value)\"> -->\r\n    </nb-card>\r\n\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n    </ng2-smart-table>\r\n\r\n  </nb-card-body>\r\n\r\n</nb-card>\r\n\r\n\r\n"
            // changeDetection: ChangeDetectionStrategy.OnPush,
            ,
            styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
        }),
        tslib_1.__metadata("design:paramtypes", [SmartTableService,
            ComponentFactoryResolver,
            HttpClient])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNsRDtJQXlCRSw2QkFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0I7UUFGVCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBVjVELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUUzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2Qiw0QkFBNEI7UUFDNUIsV0FBTSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTTlDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsb0VBQW9FO1FBQ3BFLDBFQUEwRTtRQUMxRSxzQ0FBc0M7UUFDdEMsaUVBQWlFO1FBQ2pFLHFEQUFxRDtRQUNyRCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFDckMsK0RBQStEO1FBQy9ELCtJQUErSTtRQUMvSSw2Q0FBNkM7UUFDN0MsMkNBQTJDO1FBQzNDLE1B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QUF1QjtJQUNSO1FBQXRCLFNBQVMsQ0FBQyxVQUFVLENBQUM7O3lEQUFVO0lBSnJCLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBRTVCLHM1R0FBMkM7WUFDM0MsbURBQW1EOzs7U0FDcEQsQ0FBQztpREEyQmtCLGlCQUFpQjtZQUNDLHdCQUF3QjtZQUNwRCxVQUFVO09BNUJQLG1CQUFtQixDQTRTL0I7SUFBRCwwQkFBQztDQUFBLEFBNVNELElBNFNDO1NBNVNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UsIFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gXCIuLi9zbWFydC10YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJ1dGlsXCI7XHJcbi8vIGltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSBcImNsdXN0ZXJcIjtcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO2V4cGxvcmVyXHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBQcmVmZXJlbmNlcyB9IGZyb20gXCIuLi8uLi8uLi9hcHAvc2hhcmVkL2VudW0vcHJlZmVyZW5jZXNfbW9kZWxcIjtcclxuaW1wb3J0IHsgJCQgfSBmcm9tIFwicHJvdHJhY3RvclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnZW5lcmljLWRhdGFncmlkXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWxcIlxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcbiAgQElucHV0KCkgZGF0YWZyb21TZXJ2ZXI6IGFueVtdO1xyXG4gIEBWaWV3Q2hpbGQoXCJuZzJzbWFydFwiKSBuZzJzbWFydDtcclxuXHJcbiAgZGF0YTogYW55W107XHJcbiAgLy8gc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgbmV3U2V0dGluZ3M6IGFueTtcclxuICBzZXR0aW5nOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc2V0dGluZ3M6IGFueTtcclxuICBjb2x1bW5uVG9EaXNwbGF5OiBhbnk7XHJcbiAgc2V0dGluZ3NPcmlnaW5lOiBhbnk7XHJcbiAgc2VsZWN0ZWRJdGVtOiBzdHJpbmdbXTtcclxuICBjb2x1bW5zOiBhbnk7XHJcbiAgc2VsZWN0ZWRJdGVtTmdNb2RlbDogYW55O1xyXG4gIHZpbmNpU2V0dGluZ3M6IGFueTtcclxuICB0aXRsZXNBcnJheSA9IFtdO1xyXG4gIGNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IFtdO1xyXG5cclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBzZWxlY3RlZFNldHRpbmc6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcclxuICBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBTbWFydFRhYmxlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIE9yaWdpbmFsIFNldHR0aW5ncyA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICAvLyB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgLy8gICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gXCJmYWxzZVwiKVxyXG4gICAgLy8gICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgIC8vICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciByZWR1Y2UgOiBcIiwgbmV3Q29sdW1ucyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAvLyAgIH0sIHt9KTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcclxuICAgIC8vIHRlc3RlciBwb3VyIGxlIHBhcmFtZXRyZSBcImRpc3BsYXlcIlxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5uIFRvIERpc3BsYXkgOiBcIiwgdGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwgeyBlbmRQb2ludDogJ2RhdGFmcm9tU2VydmVyJyB9KTsgLy8gZGF0YWZyb21TZXJ2ZXIgOiBVUkwgd2hlcmUgdGhlIFNldHRpbmdzIG9iamVjdCB3aWxsIGJlIHByb3ZpZGVkXHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHtcclxuICAgIC8vICAgZW5kUG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGFcIlxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZVNlcnZlciA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qIEdFVFRJTkcgREFUQSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHRoaXMuc291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhZnJvbVNlcnZlcjtcclxuICAgIC8vIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXREYXRhKCk7XHJcbiAgICAvLyB0aGlzLnNlcnZpY2UuZ2V0ZGF0YSgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgIC8vICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIgRGF0YSBGcm9tIExvY2FsIDogXCIsIHRoaXMuZGF0YSk7XHJcbiAgICB0aGlzLnNvdXJjZS5sb2FkKHRoaXMuZGF0YSk7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3NGcm9tTm9kZUJja2VuZCgpLnN1YnNjcmliZShzZXR0aW5ncyA9PiB7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gdGhpcy5jb25maWc7IC8vIHJlY3VwZXJlciBjb21tZSBpbnB1dFxyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBzZXR0aW5ncztcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nczsgLy8gZm9yIGRpcmVjdCBhc2lnbmVtZW50XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lKSB7XHJcbiAgICAgIC8vIEZvciByZXNvbHZpbmdnIHVuZGVmaW5kIHByb2JsZW1lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIFNldHRpbmdzIEZyb20gYmFja2VuZCA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICAgIHRoaXMuY29sdW1ublRvRGlzcGxheSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpXHJcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1trZXldLmRpc3BsYXkgIT09IFwiZmFsc2VcIilcclxuICAgICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sdW1uXTtcclxuICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZSwge1xyXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1ublRvRGlzcGxheVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG5cclxuICAgICAgdGhpcy50aXRsZXNBcnJheSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZXR0aW5ncy5jb2x1bW5zKSxcclxuICAgICAgICBrID0+IHRoaXMuc2V0dGluZ3MuY29sdW1uc1trXS50aXRsZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gfSk7IC8vIGZpbiBvZiBzdWJzY3JpYmVcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuICAgICAgLy8gRm9yIHJlc29sdmluZ2cgdW5kZWZpbmQgcHJvYmxlbWVcclxuICAgICAgY29uc29sZS5sb2coXCIgU2V0dGluZ3MgRnJvbSBiYWNrZW5kIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzKCk7IC8vIHJlY2V2b2lyIHVuZSBpbnN0YW5jZSBkaXJlY3QgZGUgbCdvYmpldCBzZXR0aW5nc1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldFZpbmNpU2V0dGluZygpLnN1YnNjcmliZShzZXR0aW5ncyA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiU0VUVElOR1MgOiBcIiwgc2V0dGluZ3MpO1xyXG4gICAgLy8gdGhpcy52aW5jaVNldHRpbmdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIERBVEEgOiBcIiwgdGhpcy5kYXRhKTtcclxuICAgIC8vIHRoaXMuc291cmNlLmxvYWQodGhpcy5kYXRhKTtcclxuXHJcbiAgICAvKiBBdm9pciBsZXMgZG9ubsOpZXMgZGVwdWlzIGxlIHNlcnZpY2UgKi9cclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXREYXRhRnJvbUJhY2tlbmQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAvLyAgIC8vIHRoaXMuZGF0YSA9IFtkYXRhXTtcclxuICAgIC8vICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJkYXRhIHJldG91cm5lZCBmcm9tIHRoZSBiYWNrZW5kIDogXCIsIGRhdGEpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zZXR0aW5ncy5jb2x1bW5zKSB7XHJcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5cIiArIGtleSArIFwiLmRpc3BsYXkgPSBcIiwgdGhpcy5zZXR0aW5ncy5jb2x1bW5zW2tleV0uZGlzcGxheSk7XHJcbiAgICAvLyAgIGlmICh0aGlzLnNldHRpbmdzLmNvbHVtbnNba2V5XS5kaXNwbGF5ID09PSBcImZhbHNlXCIpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiBDb2x1bW4gS2V5IHdpdGggZGlzcGxheSBmYWxzZSA6IFwiLCBrZXkpO1xyXG4gICAgLy8gICAgIC8vIG5ld0NvbHVtbnNba2V5XSA9IHRoaXMuY29sdW1uc1trZXldO1xyXG4gICAgLy8gICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nc09yaWdpbmUuY29sdW1ucy5ba2V5XSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiBTZXR0aW5ncyBGcm9tIGJhY2tlbmQgOiBcIiwgdGhpcy5zZXR0aW5nc09yaWdpbmUpOyAvLyBVbmRlZmluZWRcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb21ucyhjb2x1bW5zVG9TaG93KSB7XHJcbiAgICAvLyBUYWJsZWF1IGRlcyBpZGVudGlmaWFudCBkZXMgY29sb25uZXMgZGVjb2NoZXJcclxuICAgIGNvbnN0IHVuc2VsZWN0ZWQgPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpLmZpbHRlcihcclxuICAgICAgeCA9PiAhKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNlbGVjdGlvbm5lciBsZXMgY29sbG9uZXMgw6AgQWZmaWNoZXJcclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpXHJcbiAgICAgIC5maWx0ZXIoeCA9PiAoY29sdW1uc1RvU2hvdyB8fCBbXSkuaW5jbHVkZXMoeCkpXHJcbiAgICAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuY29sdW1uc1tjb2x1bW5dOyAvLyByZW1wbGlyZSB1biBvYmpldCBhdmVjIHNldWxlbWVudCBsZXMgY29sb25uZXMgcXVpIG9uIHVuIGluZGV4IHBvdXIgZXRyZSBhZmZpY2hlclxyXG4gICAgICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgLy8gbGVzIG9wdGlvbiBhIGV0cmUgY29jaGVyXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNvbHVtbnNUb1Nob3c7XHJcblxyXG4gICAgLy9cclxuICAgIGNvbnN0IGNvbHVtbnNBcnJheU9mT2JqZWN0czEgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGluZGV4IDogXCIgKyBpbmRleCArIFwiIGVsZW1lbnQgOiBcIiArIGVsZW1lbnQpO1xyXG4gICAgICBjb2x1bW5zQXJyYXlPZk9iamVjdHMxLnNwbGljZShpbmRleCwgMCwge1xyXG4gICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICB0aXRsZTogdGhpcy5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3luY3JvbmlzYXRpb24gZW50cmUgbGUgdGFibGF1IERSQUdVQUJMRSBldCBsZSBjb21wb3NhbnQgU0VMRUNUXHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IGNvbHVtbnNBcnJheU9mT2JqZWN0czE7XHJcblxyXG4gICAgLy8gcmFmcmljaGlyIGxlIHRhYmxlYXUgYXZlYyBsZSBub3V2ZWxsZSBvYmpldCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlZSB1biBvYmplY3QgY29sb21ucy9zZXR0aW5ncyBxdWkgY250aWVudCB0b3VzIGxlcyBjb2x1bW5zIG1lbWUgY2V1eCBzdXBwcmltZXJcclxuICAgIC8vIHBvdXIgcG91dm9pciBsZXMgcmVhZmljaGVyIGFwcmVzIHNpIGxlcyBjbGllbnRcclxuXHJcbiAgICAvLyBDcmVlIHVuIG9iamV0IHNldHRpbmdzIGVuIGNoYW5nZW50IGxlcyBwYXJhbWV0cmUgOiBkaXNwbGF5PVwiZmFsc2VcIlxyXG5cclxuICAgIC8qIENoYW5nZXIgbGEgdmFsZXVyIGRlIGxhIHByb3ByaXRlIGRpc3BsYXkgYXByZXMgY2hhcXVlIGFjdGlvbiAqL1xyXG4gICAgLy8gY2FjaGVyIGxlcyBjb2xvbm5lcyBkaXNlbGVjdGlvbm5lclxyXG4gICAgdW5zZWxlY3RlZC5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSBcImZhbHNlXCI7XHJcbiAgICB9KTtcclxuICAgIC8vIEZhaXJlIGFwcGFyYWl0cmUgbGVzIGNvbG9ubmVzIHNlbGVjdGlvbm5lclxyXG4gICAgY29sdW1uc1RvU2hvdy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSBcInRydWVcIjtcclxuICAgIH0pO1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIGxldCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcHJlZmVybmVjZVR5cGU6IFwiUFJFRl9WSVNJQklMSVRZXCIsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIC8vIEVudm95ZXIgbGVzIG1vZGlmaWNhdGlvbiBhdSBiYWNrZW5kXHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvbG9tbklkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5uZXdTZXR0aW5ncyA9IHt9O1xyXG4gICAgdGhpcy5zZXR0aW5ncy5jb2x1bW5zLmlkLnRpdGxlID0gXCJpZGRkZGRcIjtcclxuICAgIHRoaXMubmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2V0dGluZ3MgXCIgKyB0aGlzLnNldHRpbmdzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQVBQRUwgRlVOQ1RJT04gaGlkZUNvbHVtbklkKCkgXCIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJBUFBFTCBkZSBsJ2V2ZW5lbWVudCBuZ09uQ2hhbmdlcygpIFwiLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHF1ZXJ5OiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tIE9uU2VyY2ggZnVuY3Rpb24gLS1cIik7XHJcblxyXG4gICAgLy8gY3LDqWUgdW4gdGFibGVhdXggZHluYW1pcXVlIGJhc2VyIHN1ciBsZXMgY29sdW1ucyBkZSBsJ29iamVjdCBTZXR0aW5nZCxcclxuICAgIC8vIHBvdXIgbGUgZG9ubmVyIGNvbW1lIGF0dHJpYnVlIHBvdXIgbGEgZm9uY3Rpb24gXCIuc2V0RmlsdGVyKClcIlxyXG5cclxuICAgIGNvbnN0IHNlYXJjaEFycmF5ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMubWFwKGNvbCA9PiB7XHJcbiAgICAgIHJldHVybiB7IGZpZWxkOiBjb2wua2V5LCBzZWFyY2g6IHF1ZXJ5IH07XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEFycmF5KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoc2VhcmNoQXJyYXksIGZhbHNlKTtcclxuXHJcbiAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIHNwZWNpZnlpbmcgd2hldGhlciB0byBwZXJmb3JtICdBTkQnIG9yICdPUicgc2VhcmNoXHJcbiAgICAvLyAobWVhbmluZyBhbGwgY29sdW1ucyBzaG91bGQgY29udGFpbiBzZWFyY2ggcXVlcnkgb3IgYXQgbGVhc3Qgb25lKVxyXG4gICAgLy8gJ0FORCcgYnkgZGVmYXVsdCwgc28gY2hhbmdpbmcgdG8gJ09SJyBieSBzZXR0aW5nIGZhbHNlIGhlcmVcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlQ29uZmlybShldmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIikpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TYXZlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNhdmU/XCIpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGEubmFtZSArPSBcIiArIGFkZGVkIGluIGNvZGVcIjtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT9cIikpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YS5uYW1lICs9IFwiICsgYWRkZWQgaW4gY29kZVwiO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkoXHJcbiAgICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLFxyXG4gICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICBldmVudC5jdXJyZW50SW5kZXhcclxuICAgICk7XHJcbiAgICBsZXQgYXJyYXlPZkl0ZW1BcnJhbmdlZDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucmVkdWNlKFxyXG4gICAgICAobmV3Q29sdW1uc09iamVjdCwgYXJyYXlPYmplY3QpID0+IHtcclxuICAgICAgICBhcnJheU9mSXRlbUFycmFuZ2VkLnVuc2hpZnQoYXJyYXlPYmplY3Qua2V5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFycmF5IE9mIEl0ZW0gQXJyYW5nZWQgOiBcIiwgYXJyYXlPZkl0ZW1BcnJhbmdlZCk7XHJcbiAgICAgICAgbmV3Q29sdW1uc09iamVjdFthcnJheU9iamVjdC5rZXldID0gdGhpcy5jb2x1bW5zW2FycmF5T2JqZWN0LmtleV07XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnNPYmplY3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVGFibGVhdU9yZGVvbm5lciA6IFwiLCBhcnJheU9mSXRlbUFycmFuZ2VkKTtcclxuXHJcbiAgICAvLyBjcmVlIHVuIG9iamV0IHNldHRpbmdzIHBvdXIgbGUgcmVhc2luZXIgYXUgY29tcG9zYW50XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywge1xyXG4gICAgICBjb2x1bW5zOiBuZXdDb2x1bW5zVG9TaG93XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAwLFxyXG4gICAgICBpZFVzZXI6IDAsXHJcbiAgICAgIHByZWZlcm5lY2VUeXBlOiBcIlBSRUZfT1JERVJcIixcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgLy8gc3luY3JvbmlzZXIgbGVzIGNoYW5nZW1lbnQgYXZlYyBsZSBiYWNrZW5kXHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZ3MgOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcbn1cclxuIl19