import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from "@angular/common/http";
let SmartTableComponent = class SmartTableComponent {
    constructor(service, componentFactoryResolver, http) {
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
    ngOnInit() {
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
                .filter(key => this.settingsOrigine.columns[key].display !== "false")
                .reduce((newColumns, column) => {
                newColumns[column] = this.settingsOrigine.columns[column];
                return newColumns;
            }, {});
            this.settings = Object.assign({}, this.settingsOrigine, {
                columns: this.columnnToDisplay
            });
            this.columns = Object.assign({}, this.settingsOrigine.columns);
            this.selectedItem = Object.keys(this.columnnToDisplay);
            this.titlesArray = Array.from(Object.keys(this.settings.columns), k => this.settings.columns[k].title);
            this.selectedItem.forEach(element => {
                this.columnsArrayOfObjects.push({
                    key: element,
                    title: this.settingsOrigine.columns[element].title
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
    }
    ngAfterViewInit() {
        // throw new Error("Method not implemented.");
    }
    selectColomns(columnsToShow) {
        // Tableau des identifiant des colonnes decocher
        const unselected = Object.keys(this.columns).filter(x => !(columnsToShow || []).includes(x));
        // Selectionner les collones à Afficher
        const newColumnsToShow = Object.keys(this.columns)
            .filter(x => (columnsToShow || []).includes(x))
            .reduce((newColumns, column) => {
            newColumns[column] = this.columns[column]; // remplire un objet avec seulement les colonnes qui on un index pour etre afficher
            return newColumns;
        }, {});
        // les option a etre cocher
        this.selectedItem = columnsToShow;
        //
        const columnsArrayOfObjects1 = [];
        this.selectedItem.forEach((element, index) => {
            // console.log(" index : " + index + " element : " + element);
            columnsArrayOfObjects1.splice(index, 0, {
                key: element,
                title: this.columns[element].title
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
        unselected.forEach(elem => {
            this.settingsOrigine.columns[elem].display = "false";
        });
        // Faire apparaitre les colonnes selectionner
        columnsToShow.forEach(elem => {
            this.settingsOrigine.columns[elem].display = "true";
        });
        /*************************************************************** */
        let preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: "PREF_VISIBILITY",
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // Envoyer les modification au backend
        this.service.updateSettings(this.settingsOrigine);
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
        console.log("APPEL de l'evenement ngOnChanges() ", changes);
    }
    onSearch(query = "") {
        console.log("-- OnSerch function --");
        // crée un tableaux dynamique baser sur les columns de l'object Settingd,
        // pour le donner comme attribue pour la fonction ".setFilter()"
        const searchArray = this.columnsArrayOfObjects.map(col => {
            return { field: col.key, search: query };
        });
        // console.log(this.columnsArrayOfObjects);
        // console.log(searchArray);
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
            event.newData.name += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm("Are you sure you want to create?")) {
            event.newData.name += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    drop(event) {
        moveItemInArray(this.columnsArrayOfObjects, event.previousIndex, event.currentIndex);
        let arrayOfItemArranged = [];
        const newColumnsToShow = this.columnsArrayOfObjects.reduce((newColumnsObject, arrayObject) => {
            arrayOfItemArranged.unshift(arrayObject.key);
            // console.log("Array Of Item Arranged : ", arrayOfItemArranged);
            newColumnsObject[arrayObject.key] = this.columns[arrayObject.key];
            return newColumnsObject;
        }, {});
        // console.log("TableauOrdeonner : ", arrayOfItemArranged);
        // cree un objet settings pour le reasiner au composant
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        let preference = {
            idTable: 0,
            idUser: 0,
            preferneceType: "PREF_ORDER",
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
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
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNsRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQXlCOUIsWUFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0I7UUFGVCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBVjVELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUUzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2Qiw0QkFBNEI7UUFDNUIsV0FBTSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTTlDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsb0VBQW9FO1FBQ3BFLDBFQUEwRTtRQUMxRSxzQ0FBc0M7UUFDdEMsaUVBQWlFO1FBQ2pFLHFEQUFxRDtRQUNyRCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFDckMsK0RBQStEO1FBQy9ELCtJQUErSTtRQUMv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QUNULFFBQVEsRUFBRSxrQkFBa0I7UUFFNUIsczVHQUEyQztRQUMzQyxtREFBbUQ7OztLQUNwRCxDQUFDOzZDQTJCa0IsaUJBQWlCO1FBQ0Msd0JBQXdCO1FBQ3BELFVBQVU7R0E1QlAsbUJBQW1CLENBNFMvQjtTQTVTWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlLCBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tcmVuZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlRGF0YSwgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi4vc21hcnQtdGFibGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xyXG4vLyBpbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCJjbHVzdGVyXCI7XHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtleHBsb3JlclxyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgUHJlZmVyZW5jZXMgfSBmcm9tIFwiLi4vLi4vLi4vYXBwL3NoYXJlZC9lbnVtL3ByZWZlcmVuY2VzX21vZGVsXCI7XHJcbmltcG9ydCB7ICQkIH0gZnJvbSBcInByb3RyYWN0b3JcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ2VuZXJpYy1kYXRhZ3JpZFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zbWFydC10YWJsZS5jb21wb25lbnQuc2Nzc1wiXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sXCJcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIEBJbnB1dCgpIGRhdGFmcm9tU2VydmVyOiBhbnlbXTtcclxuICBAVmlld0NoaWxkKFwibmcyc21hcnRcIikgbmcyc21hcnQ7XHJcblxyXG4gIGRhdGE6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIG5ld1NldHRpbmdzOiBhbnk7XHJcbiAgc2V0dGluZzogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHNldHRpbmdzOiBhbnk7XHJcbiAgY29sdW1ublRvRGlzcGxheTogYW55O1xyXG4gIHNldHRpbmdzT3JpZ2luZTogYW55O1xyXG4gIHNlbGVjdGVkSXRlbTogc3RyaW5nW107XHJcbiAgY29sdW1uczogYW55O1xyXG4gIHNlbGVjdGVkSXRlbU5nTW9kZWw6IGFueTtcclxuICB2aW5jaVNldHRpbmdzOiBhbnk7XHJcbiAgdGl0bGVzQXJyYXkgPSBbXTtcclxuICBjb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBbXTtcclxuXHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgc2VsZWN0ZWRTZXR0aW5nOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XHJcbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2VydmljZTogU21hcnRUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge1xyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBPcmlnaW5hbCBTZXR0dGluZ3MgOiBcIiwgdGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gICAgLy8gdGhpcy5jb2x1bW5uVG9EaXNwbGF5ID0gT2JqZWN0LmtleXModGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1ucylcclxuICAgIC8vICAgLmZpbHRlcihrZXkgPT4gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1trZXldLmRpc3BsYXkgIT09IFwiZmFsc2VcIilcclxuICAgIC8vICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAvLyAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2x1bW5dO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVkdWNlIDogXCIsIG5ld0NvbHVtbnMpO1xyXG4gICAgLy8gICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgLy8gICB9LCB7fSk7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XHJcbiAgICAvLyB0ZXN0ZXIgcG91ciBsZSBwYXJhbWV0cmUgXCJkaXNwbGF5XCJcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sdW1ubiBUbyBEaXNwbGF5IDogXCIsIHRoaXMuY29sdW1ublRvRGlzcGxheSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHsgZW5kUG9pbnQ6ICdkYXRhZnJvbVNlcnZlcicgfSk7IC8vIGRhdGFmcm9tU2VydmVyIDogVVJMIHdoZXJlIHRoZSBTZXR0aW5ncyBvYmplY3Qgd2lsbCBiZSBwcm92aWRlZFxyXG4gICAgLy8gdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZShodHRwLCB7XHJcbiAgICAvLyAgIGVuZFBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhXCJcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gdGhpcy5zb3VyY2VTZXJ2ZXIgPSB0aGlzLmRhdGFmcm9tU2VydmVyO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvKiBHRVRUSU5HIERBVEEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgICAvLyB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldGRhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuc291cmNlLmxvYWQoZGF0YSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIERhdGEgRnJvbSBMb2NhbCA6IFwiLCB0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5zb3VyY2UubG9hZCh0aGlzLmRhdGEpO1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzRnJvbU5vZGVCY2tlbmQoKS5zdWJzY3JpYmUoc2V0dGluZ3MgPT4ge1xyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncyk7XHJcbiAgICB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IHRoaXMuY29uZmlnOyAvLyByZWN1cGVyZXIgY29tbWUgaW5wdXRcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gc2V0dGluZ3M7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7IC8vIGZvciBkaXJlY3QgYXNpZ25lbWVudFxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzT3JpZ2luZSkge1xyXG4gICAgICAvLyBGb3IgcmVzb2x2aW5nZyB1bmRlZmluZCBwcm9ibGVtZVxyXG4gICAgICBjb25zb2xlLmxvZyhcIiBTZXR0aW5ncyBGcm9tIGJhY2tlbmQgOiBcIiwgdGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gICAgICB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNba2V5XS5kaXNwbGF5ICE9PSBcImZhbHNlXCIpXHJcbiAgICAgICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5nc09yaWdpbmUsIHtcclxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgIHRoaXMudGl0bGVzQXJyYXkgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3MuY29sdW1ucyksXHJcbiAgICAgICAgayA9PiB0aGlzLnNldHRpbmdzLmNvbHVtbnNba10udGl0bGVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucHVzaCh7XHJcbiAgICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIH0pOyAvLyBmaW4gb2Ygc3Vic2NyaWJlXHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lKSB7XHJcbiAgICAgIC8vIEZvciByZXNvbHZpbmdnIHVuZGVmaW5kIHByb2JsZW1lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIFNldHRpbmdzIEZyb20gYmFja2VuZCA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpOyAvLyByZWNldm9pciB1bmUgaW5zdGFuY2UgZGlyZWN0IGRlIGwnb2JqZXQgc2V0dGluZ3NcclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXRWaW5jaVNldHRpbmcoKS5zdWJzY3JpYmUoc2V0dGluZ3MgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcIlNFVFRJTkdTIDogXCIsIHNldHRpbmdzKTtcclxuICAgIC8vIHRoaXMudmluY2lTZXR0aW5ncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXREYXRhKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBEQVRBIDogXCIsIHRoaXMuZGF0YSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZS5sb2FkKHRoaXMuZGF0YSk7XHJcblxyXG4gICAgLyogQXZvaXIgbGVzIGRvbm7DqWVzIGRlcHVpcyBsZSBzZXJ2aWNlICovXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZyb21CYWNrZW5kKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgLy8gICAvLyB0aGlzLmRhdGEgPSBbZGF0YV07XHJcbiAgICAvLyAgIHRoaXMuc291cmNlLmxvYWQoZGF0YSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6IFwiLCBkYXRhKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2V0dGluZ3MuY29sdW1ucykge1xyXG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLnNldHRpbmdzLmNvbHVtbnMuXCIgKyBrZXkgKyBcIi5kaXNwbGF5ID0gXCIsIHRoaXMuc2V0dGluZ3MuY29sdW1uc1trZXldLmRpc3BsYXkpO1xyXG4gICAgLy8gICBpZiAodGhpcy5zZXR0aW5ncy5jb2x1bW5zW2tleV0uZGlzcGxheSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCIgQ29sdW1uIEtleSB3aXRoIGRpc3BsYXkgZmFsc2UgOiBcIiwga2V5KTtcclxuICAgIC8vICAgICAvLyBuZXdDb2x1bW5zW2tleV0gPSB0aGlzLmNvbHVtbnNba2V5XTtcclxuICAgIC8vICAgICAvLyB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMuW2tleV0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIgU2V0dGluZ3MgRnJvbSBiYWNrZW5kIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTsgLy8gVW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9tbnMoY29sdW1uc1RvU2hvdykge1xyXG4gICAgLy8gVGFibGVhdSBkZXMgaWRlbnRpZmlhbnQgZGVzIGNvbG9ubmVzIGRlY29jaGVyXHJcbiAgICBjb25zdCB1bnNlbGVjdGVkID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5maWx0ZXIoXHJcbiAgICAgIHggPT4gIShjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3Rpb25uZXIgbGVzIGNvbGxvbmVzIMOgIEFmZmljaGVyXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKVxyXG4gICAgICAuZmlsdGVyKHggPT4gKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpKVxyXG4gICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLmNvbHVtbnNbY29sdW1uXTsgLy8gcmVtcGxpcmUgdW4gb2JqZXQgYXZlYyBzZXVsZW1lbnQgbGVzIGNvbG9ubmVzIHF1aSBvbiB1biBpbmRleCBwb3VyIGV0cmUgYWZmaWNoZXJcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgfSwge30pO1xyXG5cclxuICAgIC8vIGxlcyBvcHRpb24gYSBldHJlIGNvY2hlclxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjb2x1bW5zVG9TaG93O1xyXG5cclxuICAgIC8vXHJcbiAgICBjb25zdCBjb2x1bW5zQXJyYXlPZk9iamVjdHMxID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBpbmRleCA6IFwiICsgaW5kZXggKyBcIiBlbGVtZW50IDogXCIgKyBlbGVtZW50KTtcclxuICAgICAgY29sdW1uc0FycmF5T2ZPYmplY3RzMS5zcGxpY2UoaW5kZXgsIDAsIHtcclxuICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN5bmNyb25pc2F0aW9uIGVudHJlIGxlIHRhYmxhdSBEUkFHVUFCTEUgZXQgbGUgY29tcG9zYW50IFNFTEVDVFxyXG4gICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBjb2x1bW5zQXJyYXlPZk9iamVjdHMxO1xyXG5cclxuICAgIC8vIHJhZnJpY2hpciBsZSB0YWJsZWF1IGF2ZWMgbGUgbm91dmVsbGUgb2JqZXQgc2V0dGluZ3NcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWUgdW4gb2JqZWN0IGNvbG9tbnMvc2V0dGluZ3MgcXVpIGNudGllbnQgdG91cyBsZXMgY29sdW1ucyBtZW1lIGNldXggc3VwcHJpbWVyXHJcbiAgICAvLyBwb3VyIHBvdXZvaXIgbGVzIHJlYWZpY2hlciBhcHJlcyBzaSBsZXMgY2xpZW50XHJcblxyXG4gICAgLy8gQ3JlZSB1biBvYmpldCBzZXR0aW5ncyBlbiBjaGFuZ2VudCBsZXMgcGFyYW1ldHJlIDogZGlzcGxheT1cImZhbHNlXCJcclxuXHJcbiAgICAvKiBDaGFuZ2VyIGxhIHZhbGV1ciBkZSBsYSBwcm9wcml0ZSBkaXNwbGF5IGFwcmVzIGNoYXF1ZSBhY3Rpb24gKi9cclxuICAgIC8vIGNhY2hlciBsZXMgY29sb25uZXMgZGlzZWxlY3Rpb25uZXJcclxuICAgIHVuc2VsZWN0ZWQuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gXCJmYWxzZVwiO1xyXG4gICAgfSk7XHJcbiAgICAvLyBGYWlyZSBhcHBhcmFpdHJlIGxlcyBjb2xvbm5lcyBzZWxlY3Rpb25uZXJcclxuICAgIGNvbHVtbnNUb1Nob3cuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gXCJ0cnVlXCI7XHJcbiAgICB9KTtcclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICBsZXQgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICBpZFVzZXI6IDEsXHJcbiAgICAgIHByZWZlcm5lY2VUeXBlOiBcIlBSRUZfVklTSUJJTElUWVwiLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgIH07XHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICAvLyBFbnZveWVyIGxlcyBtb2RpZmljYXRpb24gYXUgYmFja2VuZFxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICB9XHJcblxyXG4gIGhpZGVDb2xvbW5JZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMubmV3U2V0dGluZ3MgPSB7fTtcclxuICAgIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5pZC50aXRsZSA9IFwiaWRkZGRkXCI7XHJcbiAgICB0aGlzLm5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5zZXR0aW5ncyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFQUEVMIEZVTkNUSU9OIGhpZGVDb2x1bW5JZCgpIFwiKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQVBQRUwgZGUgbCdldmVuZW1lbnQgbmdPbkNoYW5nZXMoKSBcIiwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaChxdWVyeTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgY29uc29sZS5sb2coXCItLSBPblNlcmNoIGZ1bmN0aW9uIC0tXCIpO1xyXG5cclxuICAgIC8vIGNyw6llIHVuIHRhYmxlYXV4IGR5bmFtaXF1ZSBiYXNlciBzdXIgbGVzIGNvbHVtbnMgZGUgbCdvYmplY3QgU2V0dGluZ2QsXHJcbiAgICAvLyBwb3VyIGxlIGRvbm5lciBjb21tZSBhdHRyaWJ1ZSBwb3VyIGxhIGZvbmN0aW9uIFwiLnNldEZpbHRlcigpXCJcclxuXHJcbiAgICBjb25zdCBzZWFyY2hBcnJheSA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLm1hcChjb2wgPT4ge1xyXG4gICAgICByZXR1cm4geyBmaWVsZDogY29sLmtleSwgc2VhcmNoOiBxdWVyeSB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hBcnJheSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKHNlYXJjaEFycmF5LCBmYWxzZSk7XHJcblxyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSAnQU5EJyBvciAnT1InIHNlYXJjaFxyXG4gICAgLy8gKG1lYW5pbmcgYWxsIGNvbHVtbnMgc2hvdWxkIGNvbnRhaW4gc2VhcmNoIHF1ZXJ5IG9yIGF0IGxlYXN0IG9uZSlcclxuICAgIC8vICdBTkQnIGJ5IGRlZmF1bHQsIHNvIGNoYW5naW5nIHRvICdPUicgYnkgc2V0dGluZyBmYWxzZSBoZXJlXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XCIpKSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2F2ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzYXZlP1wiKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gXCIgKyBhZGRlZCBpbiBjb2RlXCI7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjcmVhdGU/XCIpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGEubmFtZSArPSBcIiArIGFkZGVkIGluIGNvZGVcIjtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgbW92ZUl0ZW1JbkFycmF5KFxyXG4gICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyxcclxuICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgZXZlbnQuY3VycmVudEluZGV4XHJcbiAgICApO1xyXG4gICAgbGV0IGFycmF5T2ZJdGVtQXJyYW5nZWQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3QgbmV3Q29sdW1uc1RvU2hvdyA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLnJlZHVjZShcclxuICAgICAgKG5ld0NvbHVtbnNPYmplY3QsIGFycmF5T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgYXJyYXlPZkl0ZW1BcnJhbmdlZC51bnNoaWZ0KGFycmF5T2JqZWN0LmtleSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJBcnJheSBPZiBJdGVtIEFycmFuZ2VkIDogXCIsIGFycmF5T2ZJdGVtQXJyYW5nZWQpO1xyXG4gICAgICAgIG5ld0NvbHVtbnNPYmplY3RbYXJyYXlPYmplY3Qua2V5XSA9IHRoaXMuY29sdW1uc1thcnJheU9iamVjdC5rZXldO1xyXG4gICAgICAgIHJldHVybiBuZXdDb2x1bW5zT2JqZWN0O1xyXG4gICAgICB9LFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlRhYmxlYXVPcmRlb25uZXIgOiBcIiwgYXJyYXlPZkl0ZW1BcnJhbmdlZCk7XHJcblxyXG4gICAgLy8gY3JlZSB1biBvYmpldCBzZXR0aW5ncyBwb3VyIGxlIHJlYXNpbmVyIGF1IGNvbXBvc2FudFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMCxcclxuICAgICAgaWRVc2VyOiAwLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogXCJQUkVGX09SREVSXCIsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIC8vIHN5bmNyb25pc2VyIGxlcyBjaGFuZ2VtZW50IGF2ZWMgbGUgYmFja2VuZFxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==