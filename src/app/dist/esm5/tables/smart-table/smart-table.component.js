import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../smart-table.service';
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from '@angular/common/http';
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
        // this.service.getSettingsBackend('rh', 1, 1);
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
        this.settingsOrigine = this.config; // recuperer comme input
        // this.settingsOrigine = settings;
        // this.settings = settings; // for direct asignement
        if (this.settingsOrigine) {
            // For resolvingg undefind probleme
            // console.log(" Settings From backend : ", this.settingsOrigine);
            this.source.setSort([{ field: 'id', direction: 'asc' }]);
            this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
                .filter(function (key) { return _this.settingsOrigine.columns[key].display !== 'false'; })
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
        var ValueFilters;
        var ArrayFilters;
        var searchLabels = [];
        this.source.onChanged().subscribe(function (filterValue) {
            for (var index = 0; index < filterValue.filter.filters.length; index++) {
                // console.log(" Filters Value : ", filterValue.filter.filters[index]);
                // this.filterValues.push
                searchLabels[JSON.stringify(filterValue.filter.filters[index].field)] =
                    filterValue.filter.filters[index].search;
                // ArrayFilters.push(filterValue.filter.filters[index].field);
                // ArrayFilters.push(filterValue.filter.filters[index].search);
                console.log('searchLabels : ', searchLabels);
                var preference = {
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
            var arrayValue = Array.from(Object.keys(filterValue.filter.filters), function (k) { return [
                filterValue.filter.filters[k].search,
                filterValue.filter.filters[k].field
            ]; });
            // ValueFilters = searchLabels ;
            console.log('ValueFilters : ', ValueFilters);
        });
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
            _this.settingsOrigine.columns[elem].display = 'false';
        });
        // Faire apparaitre les colonnes selectionner
        columnsToShow.forEach(function (elem) {
            _this.settingsOrigine.columns[elem].display = 'true';
        });
        /*************************************************************** */
        var preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_VISIBILITY',
            roleUser: 'rh',
            value: this.selectedItem
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // Envoyer les modification au backend
        this.service.updateSettings(this.settingsOrigine);
    };
    SmartTableComponent.prototype.hideColomnId = function () {
        // this.newSettings = {};
        this.settings.columns.id.title = 'iddddd';
        this.newSettings = this.settings;
        // console.log("this.settings " + this.newSettings);
        this.settings = Object.assign({}, this.newSettings);
        // console.log("this.settings " + this.settings);
        console.log('APPEL FUNCTION hideColumnId() ');
    };
    SmartTableComponent.prototype.ngOnChanges = function (changes) {
        // console.log("APPEL de l'evenement ngOnChanges() ", changes);
    };
    SmartTableComponent.prototype.appliquerLesFiltres = function () {
        var _this = this;
        console.log(" --- appliquerLesFiltres() ---- ");
        var filtersArray = this.columnsArrayOfObjects.map(function (col) {
            var columnId = col.key;
            var filtreValue;
            if (_this.settingsOrigine.columns[col.key].filterData) {
                filtreValue = _this.settingsOrigine.columns[col.key].filterData;
            }
            else {
                filtreValue = "";
            }
            console.log(" columnId : " + columnId + " ==== filtreValue : " + filtreValue);
            return { field: columnId, search: filtreValue };
        });
        console.log(" filtersArray : ", filtersArray);
        this.source.setFilter(filtersArray, false);
    };
    SmartTableComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        console.log('-- OnSerch function --');
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
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData.name += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData.name += ' + added in code';
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
        var selectedItem2 = Object.keys(newColumnsToShow);
        var preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_ORDER',
            roleUser: 'rh',
            value: selectedItem2
        };
        this.service.updatePreferences(preference); // synchroniser les preferences
        // syncroniser les changement avec le backend
        this.service.updateSettings(this.settings);
    };
    SmartTableComponent.prototype.ngOnDestroy = function () {
        console.log('settings : ' + JSON.stringify(this.settings));
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
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNsRDtJQTBCRSw2QkFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0I7UUFGVCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBWDVELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUczQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2Qiw0QkFBNEI7UUFDNUIsV0FBTSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBTTlDLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsb0VBQW9FO1FBQ3BFLDBFQUEwRTtRQUMxRSxzQ0FBc0M7UUFDdEMsaUVBQWlFO1FBQ2pFLHFEQUFxRDtRQUNyRCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGlEQUFpRDtRQUNqRCxxQ0FBcUM7UUFDckMsK0RBQStEO1FBQy9ELCtJQUErSTtRQUMvSSw2Q0FBNkM7UUFDN0MsMkNBQTJDO1FBQzNDLE1B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O3VEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7OytEQUF1QjtJQUNSO1FBQXRCLFNBQVMsQ0FBQyxVQUFVLENBQUM7O3lEQUFVO0lBSnJCLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBRTVCLCtnSEFBMkM7WUFDM0MsbURBQW1EOzs7U0FDcEQsQ0FBQztpREE0QmtCLGlCQUFpQjtZQUNDLHdCQUF3QjtZQUNwRCxVQUFVO09BN0JQLG1CQUFtQixDQTZYL0I7SUFBRCwwQkFBQztDQUFBLEFBN1hELElBNlhDO1NBN1hZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSwgU2VydmVyRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLXJlbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlRGF0YSwgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGxvZywgZGVidWcgfSBmcm9tICd1dGlsJztcclxuLy8gaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tIFwiY2x1c3RlclwiO1xyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7ZXhwbG9yZXJcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL2FwcC9zaGFyZWQvZW51bS9wcmVmZXJlbmNlc19tb2RlbCc7XHJcbmltcG9ydCB7ICQkIH0gZnJvbSAncHJvdHJhY3Rvcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2VuZXJpYy1kYXRhZ3JpZCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc21hcnQtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwnXHJcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbWFydFRhYmxlQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBjb25maWc6IGFueTtcclxuICBASW5wdXQoKSBkYXRhZnJvbVNlcnZlcjogYW55W107XHJcbiAgQFZpZXdDaGlsZCgnbmcyc21hcnQnKSBuZzJzbWFydDtcclxuXHJcbiAgZGF0YTogYW55W107XHJcbiAgLy8gc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgbmV3U2V0dGluZ3M6IGFueTtcclxuICBzZXR0aW5nOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgc2V0dGluZ3M6IGFueTtcclxuICBjb2x1bW5uVG9EaXNwbGF5OiBhbnk7XHJcbiAgc2V0dGluZ3NPcmlnaW5lOiBhbnk7XHJcbiAgc2VsZWN0ZWRJdGVtOiBzdHJpbmdbXTtcclxuICBjb2x1bW5zOiBhbnk7XHJcbiAgc2VsZWN0ZWRJdGVtTmdNb2RlbDogYW55O1xyXG4gIHZpbmNpU2V0dGluZ3M6IGFueTtcclxuICB0aXRsZXNBcnJheSA9IFtdO1xyXG4gIGNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IFtdO1xyXG4gIGZpbHRlclZhbHVlczogc3RyaW5nW107XHJcblxyXG4gIHBhbmVsT3BlblN0YXRlID0gZmFsc2U7XHJcblxyXG4gIHNlbGVjdGVkU2V0dGluZzogYW55W107XHJcbiAgLy8gc291cmNlOiBTZXJ2ZXJEYXRhU291cmNlO1xyXG4gIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNlcnZpY2U6IFNtYXJ0VGFibGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIGh0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIgT3JpZ2luYWwgU2V0dHRpbmdzIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICAgIC8vIHRoaXMuY29sdW1ublRvRGlzcGxheSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpXHJcbiAgICAvLyAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNba2V5XS5kaXNwbGF5ICE9PSBcImZhbHNlXCIpXHJcbiAgICAvLyAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgLy8gICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sdW1uXTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImFmdGVyIHJlZHVjZSA6IFwiLCBuZXdDb2x1bW5zKTtcclxuICAgIC8vICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgIC8vICAgfSwge30pO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xyXG4gICAgLy8gdGVzdGVyIHBvdXIgbGUgcGFyYW1ldHJlIFwiZGlzcGxheVwiXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNvbHVtbm4gVG8gRGlzcGxheSA6IFwiLCB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG4gICAgLy8gdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZShodHRwLCB7IGVuZFBvaW50OiAnZGF0YWZyb21TZXJ2ZXInIH0pOyAvLyBkYXRhZnJvbVNlcnZlciA6IFVSTCB3aGVyZSB0aGUgU2V0dGluZ3Mgb2JqZWN0IHdpbGwgYmUgcHJvdmlkZWRcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwge1xyXG4gICAgLy8gICBlbmRQb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YVwiXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHRoaXMuc291cmNlU2VydmVyID0gdGhpcy5kYXRhZnJvbVNlcnZlcjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzQmFja2VuZCgncmgnLCAxLCAxKTtcclxuXHJcbiAgICAvKiBHRVRUSU5HIERBVEEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgICAvLyB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YSgpO1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldGRhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuc291cmNlLmxvYWQoZGF0YSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIERhdGEgRnJvbSBMb2NhbCA6IFwiLCB0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5zb3VyY2UubG9hZCh0aGlzLmRhdGEpO1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgdGhpcy5zZXR0aW5nc09yaWdpbmUgPSB0aGlzLmNvbmZpZzsgLy8gcmVjdXBlcmVyIGNvbW1lIGlucHV0XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IHNldHRpbmdzO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzOyAvLyBmb3IgZGlyZWN0IGFzaWduZW1lbnRcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuICAgICAgLy8gRm9yIHJlc29sdmluZ2cgdW5kZWZpbmQgcHJvYmxlbWVcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgU2V0dGluZ3MgRnJvbSBiYWNrZW5kIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuXHJcbiAgICAgIHRoaXMuc291cmNlLnNldFNvcnQoW3sgZmllbGQ6ICdpZCcsIGRpcmVjdGlvbjogJ2FzYycgfV0pO1xyXG5cclxuICAgICAgdGhpcy5jb2x1bW5uVG9EaXNwbGF5ID0gT2JqZWN0LmtleXModGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1ucylcclxuICAgICAgICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gJ2ZhbHNlJylcclxuICAgICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sdW1uXTtcclxuICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZSwge1xyXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1ublRvRGlzcGxheVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG5cclxuICAgICAgdGhpcy50aXRsZXNBcnJheSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZXR0aW5ncy5jb2x1bW5zKSxcclxuICAgICAgICBrID0+IHRoaXMuc2V0dGluZ3MuY29sdW1uc1trXS50aXRsZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gbGV0IEFycmF5SWRGaWx0ZXJDb2x1bW5zO1xyXG4gICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAvLyAgIEFycmF5SWRGaWx0ZXJDb2x1bW5zLnB1c2goe1xyXG4gICAgICAvLyAgICAga2V5OiBlbGVtZW50LFxyXG4gICAgICAvLyAgICAgdGl0bGU6IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbWVudF0udGl0bGVcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgICAvLyB9KTsgLy8gZmluIG9mIHN1YnNjcmliZVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzT3JpZ2luZSkge1xyXG4gICAgICB0aGlzLmFwcGxpcXVlckxlc0ZpbHRyZXMoKTtcclxuICAgICAgLy8gRm9yIHJlc29sdmluZ2cgdW5kZWZpbmQgcHJvYmxlbWVcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgU2V0dGluZ3MgRnJvbSBiYWNrZW5kIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzKCk7IC8vIHJlY2V2b2lyIHVuZSBpbnN0YW5jZSBkaXJlY3QgZGUgbCdvYmpldCBzZXR0aW5nc1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLmdldFZpbmNpU2V0dGluZygpLnN1YnNjcmliZShzZXR0aW5ncyA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiU0VUVElOR1MgOiBcIiwgc2V0dGluZ3MpO1xyXG4gICAgLy8gdGhpcy52aW5jaVNldHRpbmdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIERBVEEgOiBcIiwgdGhpcy5kYXRhKTtcclxuICAgIC8vIHRoaXMuc291cmNlLmxvYWQodGhpcy5kYXRhKTtcclxuXHJcbiAgICAvKiBBdm9pciBsZXMgZG9ubsOpZXMgZGVwdWlzIGxlIHNlcnZpY2UgKi9cclxuICAgIC8vIHRoaXMuc2VydmljZS5nZXREYXRhRnJvbUJhY2tlbmQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAvLyAgIC8vIHRoaXMuZGF0YSA9IFtkYXRhXTtcclxuICAgIC8vICAgdGhpcy5zb3VyY2UubG9hZChkYXRhKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJkYXRhIHJldG91cm5lZCBmcm9tIHRoZSBiYWNrZW5kIDogXCIsIGRhdGEpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zZXR0aW5ncy5jb2x1bW5zKSB7XHJcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5cIiArIGtleSArIFwiLmRpc3BsYXkgPSBcIiwgdGhpcy5zZXR0aW5ncy5jb2x1bW5zW2tleV0uZGlzcGxheSk7XHJcbiAgICAvLyAgIGlmICh0aGlzLnNldHRpbmdzLmNvbHVtbnNba2V5XS5kaXNwbGF5ID09PSBcImZhbHNlXCIpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiBDb2x1bW4gS2V5IHdpdGggZGlzcGxheSBmYWxzZSA6IFwiLCBrZXkpO1xyXG4gICAgLy8gICAgIC8vIG5ld0NvbHVtbnNba2V5XSA9IHRoaXMuY29sdW1uc1trZXldO1xyXG4gICAgLy8gICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nc09yaWdpbmUuY29sdW1ucy5ba2V5XSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBsZXQgVmFsdWVGaWx0ZXJzOiBbc3RyaW5nXTtcclxuICAgIGxldCBBcnJheUZpbHRlcnM6IEFycmF5PHN0cmluZz47XHJcbiAgICBjb25zdCBzZWFyY2hMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoZmlsdGVyVmFsdWUgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgRmlsdGVycyBWYWx1ZSA6IFwiLCBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0pO1xyXG4gICAgICAgIC8vIHRoaXMuZmlsdGVyVmFsdWVzLnB1c2hcclxuICAgICAgICBzZWFyY2hMYWJlbHNbSlNPTi5zdHJpbmdpZnkoZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdLmZpZWxkKV0gPVxyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdLnNlYXJjaDtcclxuICAgICAgICAgIC8vIEFycmF5RmlsdGVycy5wdXNoKGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5maWVsZCk7XHJcbiAgICAgICAgICAvLyBBcnJheUZpbHRlcnMucHVzaChmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uc2VhcmNoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoTGFiZWxzIDogJywgc2VhcmNoTGFiZWxzKTtcclxuICAgICAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICAgICAgcHJlZmVybmVjZVR5cGU6ICdQUkVGX0ZJTFRFUicsXHJcbiAgICAgICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgICAgIHZhbHVlOiBzZWFyY2hMYWJlbHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnJheUZpbHRlcnMgOiAnLCBBcnJheUZpbHRlcnMgKTtcclxuICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMpLFxyXG4gICAgICAgIGsgPT4gW1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uc2VhcmNoLFxyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uZmllbGRcclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIFZhbHVlRmlsdGVycyA9IHNlYXJjaExhYmVscyA7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnVmFsdWVGaWx0ZXJzIDogJywgVmFsdWVGaWx0ZXJzICk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb21ucyhjb2x1bW5zVG9TaG93KSB7XHJcbiAgICAvLyBUYWJsZWF1IGRlcyBpZGVudGlmaWFudCBkZXMgY29sb25uZXMgZGVjb2NoZXJcclxuICAgIGNvbnN0IHVuc2VsZWN0ZWQgPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpLmZpbHRlcihcclxuICAgICAgeCA9PiAhKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNlbGVjdGlvbm5lciBsZXMgY29sbG9uZXMgw6AgQWZmaWNoZXJcclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbnMpXHJcbiAgICAgIC5maWx0ZXIoeCA9PiAoY29sdW1uc1RvU2hvdyB8fCBbXSkuaW5jbHVkZXMoeCkpXHJcbiAgICAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuY29sdW1uc1tjb2x1bW5dOyAvLyByZW1wbGlyZSB1biBvYmpldCBhdmVjIHNldWxlbWVudCBsZXMgY29sb25uZXMgcXVpIG9uIHVuIGluZGV4IHBvdXIgZXRyZSBhZmZpY2hlclxyXG4gICAgICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgLy8gbGVzIG9wdGlvbiBhIGV0cmUgY29jaGVyXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNvbHVtbnNUb1Nob3c7XHJcblxyXG4gICAgLy9cclxuICAgIGNvbnN0IGNvbHVtbnNBcnJheU9mT2JqZWN0czEgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGluZGV4IDogXCIgKyBpbmRleCArIFwiIGVsZW1lbnQgOiBcIiArIGVsZW1lbnQpO1xyXG4gICAgICBjb2x1bW5zQXJyYXlPZk9iamVjdHMxLnNwbGljZShpbmRleCwgMCwge1xyXG4gICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICB0aXRsZTogdGhpcy5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3luY3JvbmlzYXRpb24gZW50cmUgbGUgdGFibGF1IERSQUdVQUJMRSBldCBsZSBjb21wb3NhbnQgU0VMRUNUXHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IGNvbHVtbnNBcnJheU9mT2JqZWN0czE7XHJcblxyXG4gICAgLy8gcmFmcmljaGlyIGxlIHRhYmxlYXUgYXZlYyBsZSBub3V2ZWxsZSBvYmpldCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlZSB1biBvYmplY3QgY29sb21ucy9zZXR0aW5ncyBxdWkgY250aWVudCB0b3VzIGxlcyBjb2x1bW5zIG1lbWUgY2V1eCBzdXBwcmltZXJcclxuICAgIC8vIHBvdXIgcG91dm9pciBsZXMgcmVhZmljaGVyIGFwcmVzIHNpIGxlcyBjbGllbnRcclxuXHJcbiAgICAvLyBDcmVlIHVuIG9iamV0IHNldHRpbmdzIGVuIGNoYW5nZW50IGxlcyBwYXJhbWV0cmUgOiBkaXNwbGF5PVwiZmFsc2VcIlxyXG5cclxuICAgIC8qIENoYW5nZXIgbGEgdmFsZXVyIGRlIGxhIHByb3ByaXRlIGRpc3BsYXkgYXByZXMgY2hhcXVlIGFjdGlvbiAqL1xyXG4gICAgLy8gY2FjaGVyIGxlcyBjb2xvbm5lcyBkaXNlbGVjdGlvbm5lclxyXG4gICAgdW5zZWxlY3RlZC5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSAnZmFsc2UnO1xyXG4gICAgfSk7XHJcbiAgICAvLyBGYWlyZSBhcHBhcmFpdHJlIGxlcyBjb2xvbm5lcyBzZWxlY3Rpb25uZXJcclxuICAgIGNvbHVtbnNUb1Nob3cuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gJ3RydWUnO1xyXG4gICAgfSk7XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICBpZFVzZXI6IDEsXHJcbiAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIC8vIEVudm95ZXIgbGVzIG1vZGlmaWNhdGlvbiBhdSBiYWNrZW5kXHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvbG9tbklkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5uZXdTZXR0aW5ncyA9IHt9O1xyXG4gICAgdGhpcy5zZXR0aW5ncy5jb2x1bW5zLmlkLnRpdGxlID0gJ2lkZGRkZCc7XHJcbiAgICB0aGlzLm5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5zZXR0aW5ncyk7XHJcbiAgICBjb25zb2xlLmxvZygnQVBQRUwgRlVOQ1RJT04gaGlkZUNvbHVtbklkKCkgJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFQUEVMIGRlIGwnZXZlbmVtZW50IG5nT25DaGFuZ2VzKCkgXCIsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFwcGxpcXVlckxlc0ZpbHRyZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIiAtLS0gYXBwbGlxdWVyTGVzRmlsdHJlcygpIC0tLS0gXCIpO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcnNBcnJheSA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLm1hcChjb2wgPT4ge1xyXG5cclxuICAgICAgbGV0IGNvbHVtbklkID0gY29sLmtleTtcclxuICAgICAgbGV0IGZpbHRyZVZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2wua2V5XS5maWx0ZXJEYXRhKSB7XHJcbiAgICAgICAgZmlsdHJlVmFsdWUgPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbC5rZXldLmZpbHRlckRhdGE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZpbHRyZVZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCIgY29sdW1uSWQgOiBcIiArIGNvbHVtbklkICsgXCIgPT09PSBmaWx0cmVWYWx1ZSA6IFwiICsgZmlsdHJlVmFsdWUpO1xyXG4gICAgICByZXR1cm4geyBmaWVsZDogY29sdW1uSWQsIHNlYXJjaDogZmlsdHJlVmFsdWUgfTtcclxuXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiIGZpbHRlcnNBcnJheSA6IFwiLCBmaWx0ZXJzQXJyYXkpO1xyXG5cclxuICAgIHRoaXMuc291cmNlLnNldEZpbHRlcihmaWx0ZXJzQXJyYXksIGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgb25TZWFyY2gocXVlcnk6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0gT25TZXJjaCBmdW5jdGlvbiAtLScpO1xyXG5cclxuICAgIC8vIGNyw6llIHVuIHRhYmxlYXV4IGR5bmFtaXF1ZSBiYXNlciBzdXIgbGVzIGNvbHVtbnMgZGUgbCdvYmplY3QgU2V0dGluZ2QsXHJcbiAgICAvLyBwb3VyIGxlIGRvbm5lciBjb21tZSBhdHRyaWJ1ZSBwb3VyIGxhIGZvbmN0aW9uIFwiLnNldEZpbHRlcigpXCJcclxuXHJcbiAgICBjb25zdCBzZWFyY2hBcnJheSA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLm1hcChjb2wgPT4ge1xyXG4gICAgICByZXR1cm4geyBmaWVsZDogY29sLmtleSwgc2VhcmNoOiBxdWVyeSB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hBcnJheSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKHNlYXJjaEFycmF5LCBmYWxzZSk7XHJcblxyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSAnQU5EJyBvciAnT1InIHNlYXJjaFxyXG4gICAgLy8gKG1lYW5pbmcgYWxsIGNvbHVtbnMgc2hvdWxkIGNvbnRhaW4gc2VhcmNoIHF1ZXJ5IG9yIGF0IGxlYXN0IG9uZSlcclxuICAgIC8vICdBTkQnIGJ5IGRlZmF1bHQsIHNvIGNoYW5naW5nIHRvICdPUicgYnkgc2V0dGluZyBmYWxzZSBoZXJlXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKSkge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNhdmVDb25maXJtKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzYXZlPycpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGEubmFtZSArPSAnICsgYWRkZWQgaW4gY29kZSc7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkoXHJcbiAgICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLFxyXG4gICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICBldmVudC5jdXJyZW50SW5kZXhcclxuICAgICk7XHJcbiAgICBjb25zdCBhcnJheU9mSXRlbUFycmFuZ2VkOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5yZWR1Y2UoXHJcbiAgICAgIChuZXdDb2x1bW5zT2JqZWN0LCBhcnJheU9iamVjdCkgPT4ge1xyXG4gICAgICAgIGFycmF5T2ZJdGVtQXJyYW5nZWQudW5zaGlmdChhcnJheU9iamVjdC5rZXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQXJyYXkgT2YgSXRlbSBBcnJhbmdlZCA6IFwiLCBhcnJheU9mSXRlbUFycmFuZ2VkKTtcclxuICAgICAgICBuZXdDb2x1bW5zT2JqZWN0W2FycmF5T2JqZWN0LmtleV0gPSB0aGlzLmNvbHVtbnNbYXJyYXlPYmplY3Qua2V5XTtcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1uc09iamVjdDtcclxuICAgICAgfSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJUYWJsZWF1T3JkZW9ubmVyIDogXCIsIGFycmF5T2ZJdGVtQXJyYW5nZWQpO1xyXG5cclxuICAgIC8vIGNyZWUgdW4gb2JqZXQgc2V0dGluZ3MgcG91ciBsZSByZWFzaW5lciBhdSBjb21wb3NhbnRcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZEl0ZW0yID0gT2JqZWN0LmtleXMobmV3Q29sdW1uc1RvU2hvdyk7XHJcblxyXG4gICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICBpZFVzZXI6IDEsXHJcbiAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICB2YWx1ZTogc2VsZWN0ZWRJdGVtMlxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIC8vIHN5bmNyb25pc2VyIGxlcyBjaGFuZ2VtZW50IGF2ZWMgbGUgYmFja2VuZFxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZ3MgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xyXG4gIH1cclxufVxyXG4iXX0=