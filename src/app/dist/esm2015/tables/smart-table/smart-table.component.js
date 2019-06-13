import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../smart-table.service';
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from '@angular/common/http';
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
        // this.service.getSettingsBackend('rh', 1, 1);
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
        this.settingsOrigine = this.config; // recuperer comme input
        // this.settingsOrigine = settings;
        // this.settings = settings; // for direct asignement
        if (this.settingsOrigine) {
            // For resolvingg undefind probleme
            // console.log(" Settings From backend : ", this.settingsOrigine);
            this.source.setSort([{ field: 'id', direction: 'asc' }]);
            this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
                .filter(key => this.settingsOrigine.columns[key].display !== 'false')
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
            // let ArrayIdFilterColumns;
            // this.selectedItem.forEach(element => {
            //   ArrayIdFilterColumns.push({
            //     key: element,
            //     title: this.settingsOrigine.columns[element].title
            //   });
            // });
        }
        // }); // fin of subscribe
        if (this.settingsOrigine) {
            this.appliquerLesFiltres();
            // For resolvingg undefind probleme
            // console.log(" Settings From backend : ", this.settingsOrigine);
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
        let ValueFilters;
        let ArrayFilters;
        const searchLabels = [];
        this.source.onChanged().subscribe(filterValue => {
            for (let index = 0; index < filterValue.filter.filters.length; index++) {
                // console.log(" Filters Value : ", filterValue.filter.filters[index]);
                // this.filterValues.push
                searchLabels[JSON.stringify(filterValue.filter.filters[index].field)] =
                    filterValue.filter.filters[index].search;
                // ArrayFilters.push(filterValue.filter.filters[index].field);
                // ArrayFilters.push(filterValue.filter.filters[index].search);
                console.log('searchLabels : ', searchLabels);
                const preference = {
                    idTable: 1,
                    idUser: 1,
                    preferneceType: 'PREF_FILTER',
                    roleUser: 'rh',
                    value: searchLabels
                };
                // this.service.updatePreferences(preference); // synchroniser les preferences
            }
            // debugger;
            console.log('ArrayFilters : ', ArrayFilters);
            const arrayValue = Array.from(Object.keys(filterValue.filter.filters), k => [
                filterValue.filter.filters[k].search,
                filterValue.filter.filters[k].field
            ]);
            // ValueFilters = searchLabels ;
            console.log('ValueFilters : ', ValueFilters);
        });
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
            this.settingsOrigine.columns[elem].display = 'false';
        });
        // Faire apparaitre les colonnes selectionner
        columnsToShow.forEach(elem => {
            this.settingsOrigine.columns[elem].display = 'true';
        });
        /*************************************************************** */
        const preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_VISIBILITY',
            roleUser: 'rh',
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // Envoyer les modification au backend
        this.service.updateSettings(this.settingsOrigine);
    }
    hideColomnId() {
        // this.newSettings = {};
        this.settings.columns.id.title = 'iddddd';
        this.newSettings = this.settings;
        // console.log("this.settings " + this.newSettings);
        this.settings = Object.assign({}, this.newSettings);
        // console.log("this.settings " + this.settings);
        console.log('APPEL FUNCTION hideColumnId() ');
    }
    ngOnChanges(changes) {
        // console.log("APPEL de l'evenement ngOnChanges() ", changes);
    }
    appliquerLesFiltres() {
        console.log(" --- appliquerLesFiltres() ---- ");
        const filtersArray = this.columnsArrayOfObjects.map(col => {
            let columnId = col.key;
            let filtreValue;
            if (this.settingsOrigine.columns[col.key].filterData) {
                filtreValue = this.settingsOrigine.columns[col.key].filterData;
            }
            else {
                filtreValue = "";
            }
            console.log(" columnId : " + columnId + " ==== filtreValue : " + filtreValue);
            return { field: columnId, search: filtreValue };
        });
        console.log(" filtersArray : ", filtersArray);
        this.source.setFilter(filtersArray, false);
    }
    onSearch(query = '') {
        console.log('-- OnSerch function --');
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
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData.name += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData.name += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    drop(event) {
        moveItemInArray(this.columnsArrayOfObjects, event.previousIndex, event.currentIndex);
        const arrayOfItemArranged = [];
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
        let selectedItem2 = Object.keys(newColumnsToShow);
        const preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_ORDER',
            roleUser: 'rh',
            value: selectedItem2
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // syncroniser les changement avec le backend
        this.service.updateSettings(this.settings);
    }
    ngOnDestroy() {
        console.log('settings : ' + JSON.stringify(this.settings));
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
    ViewChild('ng2smart'),
    tslib_1.__metadata("design:type", Object)
], SmartTableComponent.prototype, "ng2smart", void 0);
SmartTableComponent = tslib_1.__decorate([
    Component({
        selector: 'generic-datagrid',
        template: "<nb-card>\r\n\r\n  <nb-card-header>\r\n\r\n    <!-- <nb-card>\r\n      <h1> Generic Data-Grid <br></h1>\r\n    </nb-card>\r\n\r\n   {{ settingsOrigine | json }}\r\n\r\n    <nb-card>\r\n      <div class=\"search-input\">\r\n\r\n        <button nbButton status=\"success\">EXCEL</button>\r\n        <button nbButton status=\"danger\">PDF</button>\r\n\r\n      </div>\r\n    </nb-card> -->\r\n\r\n    <div class=\"vc-accordion\">\r\n\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Preferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Selection Colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select cdkDropList multiple placeholder=\"Multiple Select\" class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\" [(selected)]=\"selectedItem\" shape=\"round\" size=\"small\">\r\n                  <nb-select-label>\r\n                    Selectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{col.key}}\">\r\n                    {{col.value.title}}\r\n                  </nb-option>\r\n                  <!-- <nb-option *ngFor=\"let col of columnsArrayOfObjects\" value=\"{{col.key}}\">\r\n                    {{col.title}}\r\n                  </nb-option> -->\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Trie des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n\r\n        <!-- <nb-accordion-item>\r\n              <nb-accordion-item-header>\r\n                Trie des colonnes\r\n              </nb-accordion-item-header>\r\n              <nb-accordion-item-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-accordion-item-body>\r\n            </nb-accordion-item> -->\r\n\r\n      </nb-accordion>\r\n\r\n    </div>\r\n\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"hideColomnId()\">iddd</button> -->\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"appliquerLesFiltres()\">appliquer Les Filtres</button> -->\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <nb-card>\r\n      <!-- <input type=\"text\" nbInput fieldSize=\"large\" #search class=\"search\" placeholder=\"Search...\"\r\n        (keydown.enter)=\"onSearch(search.value)\"> -->\r\n    </nb-card>\r\n\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n    </ng2-smart-table>\r\n\r\n  </nb-card-body>\r\n\r\n</nb-card>\r\n\r\n\r\n"
        // changeDetection: ChangeDetectionStrategy.OnPush,
        ,
        styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
    }),
    tslib_1.__metadata("design:paramtypes", [SmartTableService,
        ComponentFactoryResolver,
        HttpClient])
], SmartTableComponent);
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNsRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTBCOUIsWUFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0I7UUFGVCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBWDVELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUczQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2Qiw0QkFBNEI7UUFDNUIsV0FBTSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTTlDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsb0VBQW9FO1FBQ3BFLDBFQUEwRTtRQUMxRSxzQ0FBc0M7UUFDdEMsaUVBQWlFO1FBQ2pFLHFEQUFxRDtRQUNyRCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFDckMsK0RBQStEO1FBQy9ELCtJQUErSTtRQUMv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LFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFFNUIsK2dIQUEyQztRQUMzQyxtREFBbUQ7OztLQUNwRCxDQUFDOzZDQTRCa0IsaUJBQWlCO1FBQ0Msd0JBQXdCO1FBQ3BELFVBQVU7R0E3QlAsbUJBQW1CLENBNlgvQjtTQTdYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UsIFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEsIFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtdGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBsb2csIGRlYnVnIH0gZnJvbSAndXRpbCc7XHJcbi8vIGltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSBcImNsdXN0ZXJcIjtcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO2V4cGxvcmVyXHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi9hcHAvc2hhcmVkL2VudW0vcHJlZmVyZW5jZXNfbW9kZWwnO1xyXG5pbXBvcnQgeyAkJCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dlbmVyaWMtZGF0YWdyaWQnLFxyXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcbiAgQElucHV0KCkgZGF0YWZyb21TZXJ2ZXI6IGFueVtdO1xyXG4gIEBWaWV3Q2hpbGQoJ25nMnNtYXJ0Jykgbmcyc21hcnQ7XHJcblxyXG4gIGRhdGE6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIG5ld1NldHRpbmdzOiBhbnk7XHJcbiAgc2V0dGluZzogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHNldHRpbmdzOiBhbnk7XHJcbiAgY29sdW1ublRvRGlzcGxheTogYW55O1xyXG4gIHNldHRpbmdzT3JpZ2luZTogYW55O1xyXG4gIHNlbGVjdGVkSXRlbTogc3RyaW5nW107XHJcbiAgY29sdW1uczogYW55O1xyXG4gIHNlbGVjdGVkSXRlbU5nTW9kZWw6IGFueTtcclxuICB2aW5jaVNldHRpbmdzOiBhbnk7XHJcbiAgdGl0bGVzQXJyYXkgPSBbXTtcclxuICBjb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBbXTtcclxuICBmaWx0ZXJWYWx1ZXM6IHN0cmluZ1tdO1xyXG5cclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBzZWxlY3RlZFNldHRpbmc6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcclxuICBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBTbWFydFRhYmxlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50XHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIE9yaWdpbmFsIFNldHR0aW5ncyA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICAvLyB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgLy8gICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gXCJmYWxzZVwiKVxyXG4gICAgLy8gICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgIC8vICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciByZWR1Y2UgOiBcIiwgbmV3Q29sdW1ucyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAvLyAgIH0sIHt9KTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcclxuICAgIC8vIHRlc3RlciBwb3VyIGxlIHBhcmFtZXRyZSBcImRpc3BsYXlcIlxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5uIFRvIERpc3BsYXkgOiBcIiwgdGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwgeyBlbmRQb2ludDogJ2RhdGFmcm9tU2VydmVyJyB9KTsgLy8gZGF0YWZyb21TZXJ2ZXIgOiBVUkwgd2hlcmUgdGhlIFNldHRpbmdzIG9iamVjdCB3aWxsIGJlIHByb3ZpZGVkXHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHtcclxuICAgIC8vICAgZW5kUG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGFcIlxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZVNlcnZlciA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXRTZXR0aW5nc0JhY2tlbmQoJ3JoJywgMSwgMSk7XHJcblxyXG4gICAgLyogR0VUVElORyBEQVRBICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFmcm9tU2VydmVyO1xyXG4gICAgLy8gdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXRkYXRhKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgLy8gICB0aGlzLnNvdXJjZS5sb2FkKGRhdGEpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBEYXRhIEZyb20gTG9jYWwgOiBcIiwgdGhpcy5kYXRhKTtcclxuICAgIHRoaXMuc291cmNlLmxvYWQodGhpcy5kYXRhKTtcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gdGhpcy5jb25maWc7IC8vIHJlY3VwZXJlciBjb21tZSBpbnB1dFxyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBzZXR0aW5ncztcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nczsgLy8gZm9yIGRpcmVjdCBhc2lnbmVtZW50XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lKSB7XHJcbiAgICAgIC8vIEZvciByZXNvbHZpbmdnIHVuZGVmaW5kIHByb2JsZW1lXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIFNldHRpbmdzIEZyb20gYmFja2VuZCA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZS5zZXRTb3J0KFt7IGZpZWxkOiAnaWQnLCBkaXJlY3Rpb246ICdhc2MnIH1dKTtcclxuXHJcbiAgICAgIHRoaXMuY29sdW1ublRvRGlzcGxheSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpXHJcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1trZXldLmRpc3BsYXkgIT09ICdmYWxzZScpXHJcbiAgICAgICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5nc09yaWdpbmUsIHtcclxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgIHRoaXMudGl0bGVzQXJyYXkgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3MuY29sdW1ucyksXHJcbiAgICAgICAgayA9PiB0aGlzLnNldHRpbmdzLmNvbHVtbnNba10udGl0bGVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucHVzaCh7XHJcbiAgICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGxldCBBcnJheUlkRmlsdGVyQ29sdW1ucztcclxuICAgICAgLy8gdGhpcy5zZWxlY3RlZEl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgLy8gICBBcnJheUlkRmlsdGVyQ29sdW1ucy5wdXNoKHtcclxuICAgICAgLy8gICAgIGtleTogZWxlbWVudCxcclxuICAgICAgLy8gICAgIHRpdGxlOiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gfSk7IC8vIGZpbiBvZiBzdWJzY3JpYmVcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuICAgICAgdGhpcy5hcHBsaXF1ZXJMZXNGaWx0cmVzKCk7XHJcbiAgICAgIC8vIEZvciByZXNvbHZpbmdnIHVuZGVmaW5kIHByb2JsZW1lXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIFNldHRpbmdzIEZyb20gYmFja2VuZCA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpOyAvLyByZWNldm9pciB1bmUgaW5zdGFuY2UgZGlyZWN0IGRlIGwnb2JqZXQgc2V0dGluZ3NcclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXRWaW5jaVNldHRpbmcoKS5zdWJzY3JpYmUoc2V0dGluZ3MgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcIlNFVFRJTkdTIDogXCIsIHNldHRpbmdzKTtcclxuICAgIC8vIHRoaXMudmluY2lTZXR0aW5ncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXREYXRhKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBEQVRBIDogXCIsIHRoaXMuZGF0YSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZS5sb2FkKHRoaXMuZGF0YSk7XHJcblxyXG4gICAgLyogQXZvaXIgbGVzIGRvbm7DqWVzIGRlcHVpcyBsZSBzZXJ2aWNlICovXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZyb21CYWNrZW5kKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgLy8gICAvLyB0aGlzLmRhdGEgPSBbZGF0YV07XHJcbiAgICAvLyAgIHRoaXMuc291cmNlLmxvYWQoZGF0YSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6IFwiLCBkYXRhKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2V0dGluZ3MuY29sdW1ucykge1xyXG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLnNldHRpbmdzLmNvbHVtbnMuXCIgKyBrZXkgKyBcIi5kaXNwbGF5ID0gXCIsIHRoaXMuc2V0dGluZ3MuY29sdW1uc1trZXldLmRpc3BsYXkpO1xyXG4gICAgLy8gICBpZiAodGhpcy5zZXR0aW5ncy5jb2x1bW5zW2tleV0uZGlzcGxheSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCIgQ29sdW1uIEtleSB3aXRoIGRpc3BsYXkgZmFsc2UgOiBcIiwga2V5KTtcclxuICAgIC8vICAgICAvLyBuZXdDb2x1bW5zW2tleV0gPSB0aGlzLmNvbHVtbnNba2V5XTtcclxuICAgIC8vICAgICAvLyB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMuW2tleV0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGV0IFZhbHVlRmlsdGVyczogW3N0cmluZ107XHJcbiAgICBsZXQgQXJyYXlGaWx0ZXJzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgY29uc3Qgc2VhcmNoTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKGZpbHRlclZhbHVlID0+IHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIEZpbHRlcnMgVmFsdWUgOiBcIiwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdKTtcclxuICAgICAgICAvLyB0aGlzLmZpbHRlclZhbHVlcy5wdXNoXHJcbiAgICAgICAgc2VhcmNoTGFiZWxzW0pTT04uc3RyaW5naWZ5KGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5maWVsZCldID1cclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5zZWFyY2g7XHJcbiAgICAgICAgICAvLyBBcnJheUZpbHRlcnMucHVzaChmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uZmllbGQpO1xyXG4gICAgICAgICAgLy8gQXJyYXlGaWx0ZXJzLnB1c2goZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdLnNlYXJjaCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaExhYmVscyA6ICcsIHNlYXJjaExhYmVscyk7XHJcbiAgICAgICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgICAgIGlkVXNlcjogMSxcclxuICAgICAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgICAgICB2YWx1ZTogc2VhcmNoTGFiZWxzXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcblxyXG4gICAgICB9XHJcbiAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICBjb25zb2xlLmxvZygnQXJyYXlGaWx0ZXJzIDogJywgQXJyYXlGaWx0ZXJzICk7XHJcbiAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzKSxcclxuICAgICAgICBrID0+IFtcclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2tdLnNlYXJjaCxcclxuICAgICAgICAgIGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2tdLmZpZWxkXHJcbiAgICAgICAgXVxyXG4gICAgICApO1xyXG4gICAgICAvLyBWYWx1ZUZpbHRlcnMgPSBzZWFyY2hMYWJlbHMgO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZhbHVlRmlsdGVycyA6ICcsIFZhbHVlRmlsdGVycyApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9tbnMoY29sdW1uc1RvU2hvdykge1xyXG4gICAgLy8gVGFibGVhdSBkZXMgaWRlbnRpZmlhbnQgZGVzIGNvbG9ubmVzIGRlY29jaGVyXHJcbiAgICBjb25zdCB1bnNlbGVjdGVkID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5maWx0ZXIoXHJcbiAgICAgIHggPT4gIShjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3Rpb25uZXIgbGVzIGNvbGxvbmVzIMOgIEFmZmljaGVyXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKVxyXG4gICAgICAuZmlsdGVyKHggPT4gKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpKVxyXG4gICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLmNvbHVtbnNbY29sdW1uXTsgLy8gcmVtcGxpcmUgdW4gb2JqZXQgYXZlYyBzZXVsZW1lbnQgbGVzIGNvbG9ubmVzIHF1aSBvbiB1biBpbmRleCBwb3VyIGV0cmUgYWZmaWNoZXJcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgfSwge30pO1xyXG5cclxuICAgIC8vIGxlcyBvcHRpb24gYSBldHJlIGNvY2hlclxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjb2x1bW5zVG9TaG93O1xyXG5cclxuICAgIC8vXHJcbiAgICBjb25zdCBjb2x1bW5zQXJyYXlPZk9iamVjdHMxID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBpbmRleCA6IFwiICsgaW5kZXggKyBcIiBlbGVtZW50IDogXCIgKyBlbGVtZW50KTtcclxuICAgICAgY29sdW1uc0FycmF5T2ZPYmplY3RzMS5zcGxpY2UoaW5kZXgsIDAsIHtcclxuICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN5bmNyb25pc2F0aW9uIGVudHJlIGxlIHRhYmxhdSBEUkFHVUFCTEUgZXQgbGUgY29tcG9zYW50IFNFTEVDVFxyXG4gICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBjb2x1bW5zQXJyYXlPZk9iamVjdHMxO1xyXG5cclxuICAgIC8vIHJhZnJpY2hpciBsZSB0YWJsZWF1IGF2ZWMgbGUgbm91dmVsbGUgb2JqZXQgc2V0dGluZ3NcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWUgdW4gb2JqZWN0IGNvbG9tbnMvc2V0dGluZ3MgcXVpIGNudGllbnQgdG91cyBsZXMgY29sdW1ucyBtZW1lIGNldXggc3VwcHJpbWVyXHJcbiAgICAvLyBwb3VyIHBvdXZvaXIgbGVzIHJlYWZpY2hlciBhcHJlcyBzaSBsZXMgY2xpZW50XHJcblxyXG4gICAgLy8gQ3JlZSB1biBvYmpldCBzZXR0aW5ncyBlbiBjaGFuZ2VudCBsZXMgcGFyYW1ldHJlIDogZGlzcGxheT1cImZhbHNlXCJcclxuXHJcbiAgICAvKiBDaGFuZ2VyIGxhIHZhbGV1ciBkZSBsYSBwcm9wcml0ZSBkaXNwbGF5IGFwcmVzIGNoYXF1ZSBhY3Rpb24gKi9cclxuICAgIC8vIGNhY2hlciBsZXMgY29sb25uZXMgZGlzZWxlY3Rpb25uZXJcclxuICAgIHVuc2VsZWN0ZWQuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gJ2ZhbHNlJztcclxuICAgIH0pO1xyXG4gICAgLy8gRmFpcmUgYXBwYXJhaXRyZSBsZXMgY29sb25uZXMgc2VsZWN0aW9ubmVyXHJcbiAgICBjb2x1bW5zVG9TaG93LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbV0uZGlzcGxheSA9ICd0cnVlJztcclxuICAgIH0pO1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgIH07XHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICAvLyBFbnZveWVyIGxlcyBtb2RpZmljYXRpb24gYXUgYmFja2VuZFxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICB9XHJcblxyXG4gIGhpZGVDb2xvbW5JZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMubmV3U2V0dGluZ3MgPSB7fTtcclxuICAgIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5pZC50aXRsZSA9ICdpZGRkZGQnO1xyXG4gICAgdGhpcy5uZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2V0dGluZ3MgXCIgKyB0aGlzLm5ld1NldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm5ld1NldHRpbmdzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgY29uc29sZS5sb2coJ0FQUEVMIEZVTkNUSU9OIGhpZGVDb2x1bW5JZCgpICcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBUFBFTCBkZSBsJ2V2ZW5lbWVudCBuZ09uQ2hhbmdlcygpIFwiLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG5cclxuICBhcHBsaXF1ZXJMZXNGaWx0cmVzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCIgLS0tIGFwcGxpcXVlckxlc0ZpbHRyZXMoKSAtLS0tIFwiKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJzQXJyYXkgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5tYXAoY29sID0+IHtcclxuXHJcbiAgICAgIGxldCBjb2x1bW5JZCA9IGNvbC5rZXk7XHJcbiAgICAgIGxldCBmaWx0cmVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sLmtleV0uZmlsdGVyRGF0YSkge1xyXG4gICAgICAgIGZpbHRyZVZhbHVlID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2wua2V5XS5maWx0ZXJEYXRhO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBmaWx0cmVWYWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIGNvbHVtbklkIDogXCIgKyBjb2x1bW5JZCArIFwiID09PT0gZmlsdHJlVmFsdWUgOiBcIiArIGZpbHRyZVZhbHVlKTtcclxuICAgICAgcmV0dXJuIHsgZmllbGQ6IGNvbHVtbklkLCBzZWFyY2g6IGZpbHRyZVZhbHVlIH07XHJcblxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIiBmaWx0ZXJzQXJyYXkgOiBcIiwgZmlsdGVyc0FycmF5KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoZmlsdGVyc0FycmF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uU2VhcmNoKHF1ZXJ5OiBzdHJpbmcgPSAnJykge1xyXG4gICAgY29uc29sZS5sb2coJy0tIE9uU2VyY2ggZnVuY3Rpb24gLS0nKTtcclxuXHJcbiAgICAvLyBjcsOpZSB1biB0YWJsZWF1eCBkeW5hbWlxdWUgYmFzZXIgc3VyIGxlcyBjb2x1bW5zIGRlIGwnb2JqZWN0IFNldHRpbmdkLFxyXG4gICAgLy8gcG91ciBsZSBkb25uZXIgY29tbWUgYXR0cmlidWUgcG91ciBsYSBmb25jdGlvbiBcIi5zZXRGaWx0ZXIoKVwiXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQXJyYXkgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5tYXAoY29sID0+IHtcclxuICAgICAgcmV0dXJuIHsgZmllbGQ6IGNvbC5rZXksIHNlYXJjaDogcXVlcnkgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoQXJyYXkpO1xyXG5cclxuICAgIHRoaXMuc291cmNlLnNldEZpbHRlcihzZWFyY2hBcnJheSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgc3BlY2lmeWluZyB3aGV0aGVyIHRvIHBlcmZvcm0gJ0FORCcgb3IgJ09SJyBzZWFyY2hcclxuICAgIC8vIChtZWFuaW5nIGFsbCBjb2x1bW5zIHNob3VsZCBjb250YWluIHNlYXJjaCBxdWVyeSBvciBhdCBsZWFzdCBvbmUpXHJcbiAgICAvLyAnQU5EJyBieSBkZWZhdWx0LCBzbyBjaGFuZ2luZyB0byAnT1InIGJ5IHNldHRpbmcgZmFsc2UgaGVyZVxyXG4gIH1cclxuXHJcbiAgb25EZWxldGVDb25maXJtKGV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JykpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TYXZlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2F2ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjcmVhdGU/JykpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YS5uYW1lICs9ICcgKyBhZGRlZCBpbiBjb2RlJztcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgbW92ZUl0ZW1JbkFycmF5KFxyXG4gICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyxcclxuICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgZXZlbnQuY3VycmVudEluZGV4XHJcbiAgICApO1xyXG4gICAgY29uc3QgYXJyYXlPZkl0ZW1BcnJhbmdlZDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucmVkdWNlKFxyXG4gICAgICAobmV3Q29sdW1uc09iamVjdCwgYXJyYXlPYmplY3QpID0+IHtcclxuICAgICAgICBhcnJheU9mSXRlbUFycmFuZ2VkLnVuc2hpZnQoYXJyYXlPYmplY3Qua2V5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFycmF5IE9mIEl0ZW0gQXJyYW5nZWQgOiBcIiwgYXJyYXlPZkl0ZW1BcnJhbmdlZCk7XHJcbiAgICAgICAgbmV3Q29sdW1uc09iamVjdFthcnJheU9iamVjdC5rZXldID0gdGhpcy5jb2x1bW5zW2FycmF5T2JqZWN0LmtleV07XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnNPYmplY3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVGFibGVhdU9yZGVvbm5lciA6IFwiLCBhcnJheU9mSXRlbUFycmFuZ2VkKTtcclxuXHJcbiAgICAvLyBjcmVlIHVuIG9iamV0IHNldHRpbmdzIHBvdXIgbGUgcmVhc2luZXIgYXUgY29tcG9zYW50XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywge1xyXG4gICAgICBjb2x1bW5zOiBuZXdDb2x1bW5zVG9TaG93XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWRJdGVtMiA9IE9iamVjdC5rZXlzKG5ld0NvbHVtbnNUb1Nob3cpO1xyXG5cclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgdmFsdWU6IHNlbGVjdGVkSXRlbTJcclxuICAgIH07XHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICAvLyBzeW5jcm9uaXNlciBsZXMgY2hhbmdlbWVudCBhdmVjIGxlIGJhY2tlbmRcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmdzIDogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcbn1cclxuIl19