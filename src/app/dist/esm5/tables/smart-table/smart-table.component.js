import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../smart-table.service';
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from '@angular/common/http';
import { NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service, componentFactoryResolver, http, windowService, router) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.windowService = windowService;
        this.router = router;
        this.titlesArray = [];
        this.columnsArrayOfObjects = [];
        this.disable = false;
        this.searchLabels = [];
        this.selectedItem2 = [];
        /* ********************************/
        this.panelOpenState = false;
        // source: ServerDataSource;
        this.idCollaborateur = new EventEmitter();
        // @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;
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
        this.source = new LocalDataSource(); // instancier l'objet source
        this.data = this.datafromServer; // recevoir les données depuis l'exterieure
        this.source.load(this.data); // fomater les donner pour etre inegrer à l'objet des données consomable par le dataGrid
        /* *****************************************************/
        this.settingsOrigine = this.config; // recuperer comme input
        // console.log(" Settings Origine : ",  this.settingsOrigine);
        if (this.settingsOrigine) {
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
            // console.log(" l'Objet Colonnes : ", this.columns);
        }
        if (this.settingsOrigine) {
            this.appliquerLesFiltres();
        }
        /* Gerer la preferene sauvegarder les filtres ****************************************/
        // TO-Do : get the treatement out of the subscribe
        // TO-Do : unsubscibe all the subscriptions
        this.source.onChanged().subscribe(function (filterValue) {
            for (var index = 0; index < filterValue.filter.filters.length; index++) {
                // console.log(" Filters Value : ", filterValue.filter.filters[index]);
                _this.searchLabels[index] = filterValue.filter.filters[index].field + ':' + filterValue.filter.filters[index].search;
            }
            // console.log(' searchLabels : ', this.searchLabels);
            var preference = {
                idTable: 1,
                idUser: 1,
                preferneceType: 'PREF_FILTER',
                roleUser: 'rh',
                value: _this.searchLabels
            };
            // this.service.updatePreferences(preference); // synchroniser les preferences
            var arrayValue = Array.from(Object.keys(filterValue.filter.filters), function (k) { return [
                filterValue.filter.filters[k].search,
                filterValue.filter.filters[k].field
            ]; });
            // console.log('arrayValue : ', arrayValue );
        });
        /* ******************************************************************************************/
    };
    SmartTableComponent.prototype.ngAfterViewInit = function () {
        // throw new Error("Method not implemented.");
    };
    SmartTableComponent.prototype.selectColomns = function (columnsToShow) {
        // if( this.selectedItem.length > 3 ) return;
        // Tableau des identifiant des colonnes decocher
        var _this = this;
        // this.selectedItem.includes
        // console.log("Colonnes à afficher :", columnsToShow);
        // console.log(" Selected Items : ", this.selectedItem);
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
        // this.service.updatePreferences(preference); // synchroniser les preferences
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
        // console.log(" --- appliquerLesFiltres() ---- ");
        var _this = this;
        var filtersArray = this.columnsArrayOfObjects.map(function (col) {
            var columnId = col.key;
            var filtreValue;
            if (_this.settingsOrigine.columns[col.key].filterData) {
                filtreValue = _this.settingsOrigine.columns[col.key].filterData;
            }
            else {
                filtreValue = '';
            }
            // console.log(" columnId : " + columnId + " ==== filtreValue : " + filtreValue);
            return { field: columnId, search: filtreValue };
        });
        // console.log(" filtersArray : ", filtersArray);
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
    SmartTableComponent.prototype.sourieSurLigne = function (event) {
        // console.log('EVENT ', event);
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
    SmartTableComponent.prototype.savePreferences = function () {
        console.log(" Filtre & Sort : ", this.source.getFilteredAndSorted());
        var preference = {
            idTable: 1,
            idUser: 1,
            roleUser: 'rh',
            preferences: [
                {
                    preferenceType: 'PREF_VISIBILITY',
                    values: this.selectedItem
                },
                {
                    preferenceType: 'PREF_ORDER',
                    values: this.selectedItem2
                },
                {
                    preferenceType: 'PREF_FILTER',
                    values: this.searchLabels
                },
                {
                    preferenceType: 'PREF_SORT',
                    values: this.searchLabels
                }
            ]
        };
        this.service.updatePreferencesObject(preference); // synchroniser les preferences
        alert(" Vos prefereces En \u00E9t\u00E9 sauvegarder ");
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
        // cree un objet settings pour le reasiner au composant
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        this.selectedItem2 = Object.keys(newColumnsToShow);
        var preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_ORDER',
            roleUser: 'rh',
            value: this.selectedItem2
        };
        // this.service.updatePreferences(preference); // synchroniser les preferences
        // syncroniser les changement avec le backend
        // this.service.updateSettings(this.settings);
    };
    SmartTableComponent.prototype.onCustomAction = function (event) {
        console.log("EVENT : ", event);
        if (event.action === "view") {
            this.windowService.open(this.contentTemplate, {
                title: 'Mini CV VCGP',
                context: {
                    text: 'some text to pass into template',
                    dateDeNaissance: "" + event.data.dateDeNaissance,
                    paysDeNaissance: "" + event.data.paysDeNaissance,
                    genre: "" + event.data.genre,
                    fonctionOfficiel: "" + event.data.fonctionOfficiel,
                    numeroDeTelephoneParDefaut: "" + event.data.numeroDeTelephoneParDefaut,
                    typeDeContrat: "" + event.data.typeDeContrat,
                    adresseEmailParDefaut: "" + event.data.adresseEmailParDefaut,
                    societeDAppartenance: "" + event.data.societeDAppartenance,
                    handicap: "" + event.data.handicap,
                    nomPersonneEnCasDurgence: "" + event.data.nomPersonneEnCasDurgence,
                }
            });
        }
        else {
            // alert(`Custom event '${event.action}' fired on row №: ${event.data.idVinci}`);
            // const activateOtherTab = true;
            // this.service.updateActiveTab(activateOtherTab);
            this.idCollaborateur.emit(event.data.idVinci);
        }
        // this.dialogService.open( ShowcaseDialogComponent, {
        //   context: {
        //     title: 'This is a title passed to the dialog component',
        //   },
        // });
        // this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
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
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SmartTableComponent.prototype, "idCollaborateur", void 0);
    tslib_1.__decorate([
        ViewChild('contentTemplate'),
        tslib_1.__metadata("design:type", TemplateRef)
    ], SmartTableComponent.prototype, "contentTemplate", void 0);
    SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: 'generic-datagrid',
            template: "<nb-card>\r\n\r\n  <nb-card-header>\r\n\r\n    <!-- <nb-card>\r\n      <h1> Generic Data-Grid <br></h1>\r\n    </nb-card>\r\n\r\n   {{ settingsOrigine | json }}\r\n\r\n    <nb-card>\r\n      <div class=\"search-input\">\r\n\r\n        <button nbButton status=\"success\">EXCEL</button>\r\n        <button nbButton status=\"danger\">PDF</button>\r\n\r\n      </div>\r\n    </nb-card> -->\r\n\r\n    <button nbButton shape=\"semi-round\" status=\"info\" (click)=\"savePreferences()\">Sauvegarder Preferences</button>\r\n\r\n    <div class=\"vc-accordion\">\r\n\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Preferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Selection Colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select\r\n                  cdkDropList\r\n                  multiple\r\n                  placeholder=\"Multiple Select\"\r\n                  class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\"\r\n                  [(selected)]=\"selectedItem \"\r\n                  shape=\"round\"\r\n                  size=\"small\"\r\n                  >\r\n                  <nb-select-label>\r\n                    Selectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{col.key}}\" [disabled]=\"selectedItem.length > 8 && !selectedItem.includes(col.key)\">\r\n                    {{col.value.title}}\r\n                  </nb-option>\r\n                  <!-- <nb-option *ngFor=\"let col of columnsArrayOfObje cts\" value=\"{{col.key}}\">\r\n                    {{col.title}}\r\n                  </nb-option> -->\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n            <nb-card>\r\n              <nb-card-header>Trie des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n\r\n        <!-- <nb-accordion-item>\r\n              <nb-accordion-item-header>\r\n                Trie des colonnes\r\n              </nb-accordion-item-header>\r\n              <nb-accordion-item-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>{{item.title}}</div>\r\n                </div>\r\n              </nb-accordion-item-body>\r\n            </nb-accordion-item> -->\r\n\r\n      </nb-accordion>\r\n\r\n    </div>\r\n\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"hideColomnId()\">iddd</button> -->\r\n    <!-- <button nbButton outline status=\"primary\" (click)=\"appliquerLesFiltres()\">appliquer Les Filtres</button> -->\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <nb-card>\r\n      <!-- <input type=\"text\" nbInput fieldSize=\"large\" #search class=\"search\" placeholder=\"Search...\"\r\n        (keydown.enter)=\"onSearch(search.value)\"> -->\r\n    </nb-card>\r\n    <!-- <mat-slide-toggle>Slide me!</mat-slide-toggle> -->\r\n    <!-- <ngx-switcher></ngx-switcher> -->\r\n    <!-- <ngx-switcher\r\n      [firstValue]=\"RTL\"\r\n      [secondValue]=\"LTR\"\r\n      [firstValueLabel]=\"'RTL'\"\r\n      [secondValueLabel]=\"'LTR'\"\r\n      [vertical]=\"false\"\r\n    >\r\n    </ngx-switcher> -->\r\n    <ng-template #contentTemplate let-data>\r\n\r\n      <h3> {{ columns.dateDeNaissance.title }} :  {{ data.dateDeNaissance || '--' }}</h3>\r\n\r\n       <p> N\u00E9e le {{ data.dateDeNaissance }} \u00E0 {{ data.paysDeNaissance  }}</p>\r\n\r\n      <label> {{ columns.genre.title }} :                                       </label><strong> {{ data.genre || \"--\" }} </strong>\r\n      <br><br>\r\n      <label> fonction officielle  {{ columns.fonctionOfficiel.title }}  :       </label><strong> {{ data.fonctionOfficiel }} </strong>\r\n      <br><br>\r\n      <label> Type de contrat {{ columns.typeDeContrat.title }}  :               </label><strong> {{ data.typeDeContrat }} </strong>\r\n      <br><br>\r\n      <label> T\u00E9l par d\u00E9fault {{ columns.numeroDeTelephoneParDefaut.title }}  :   </label><strong> {{ data.numeroDeTelephoneParDefaut }} </strong>\r\n      <br><br>\r\n      <label> Email par d\u00E9fault {{ columns.adresseEmailParDefaut.title }}  :      </label><strong> {{ data.adresseEmailParDefaut }} </strong>\r\n      <br><br>\r\n      <label> Soci\u00E9t\u00E9 de  d'appartenace {{ columns.societeDAppartenance.title }}  :</label><strong> {{ data.societeDAppartenance }} </strong>\r\n      <br><br>\r\n      <label> Handicap {{ columns.handicap.title }}   :                           </label><strong> {{ data.handicap }}</strong>\r\n      <br><br>\r\n      <!-- <label> Contactd'urgence {{ columns.nomPersonneEnCasDurgence.title }}      </label><strong> {{ data.nomPersonneEnCasDurgence }} </strong> -->\r\n      <label> Contactd'urgence  :  </label><strong> {{ data.nomPersonneEnCasDurgence }} </strong>\r\n      <br><br>\r\n\r\n    </ng-template>\r\n\r\n\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n      (rowHover)=\"sourieSurLigne($event)\" (custom)=\"onCustomAction($event)\" (userRowSelect)=\"onCustomAction($event)\">\r\n    </ng2-smart-table>\r\n\r\n  </nb-card-body>\r\n\r\n</nb-card>\r\n"
            // changeDetection: ChangeDetectionStrategy.OnPush,
            ,
            styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
        }),
        tslib_1.__metadata("design:paramtypes", [SmartTableService,
            ComponentFactoryResolver,
            HttpClient,
            NbWindowService,
            Router])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1QsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QztJQXdDRSw2QkFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0IsRUFDUixhQUE4QixFQUM5QixNQUFjO1FBSmYsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFHNUIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFD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Q0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBamFRO1FBQVIsS0FBSyxFQUFFOzt1REFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFOzsrREFBdUI7SUFDUjtRQUF0QixTQUFTLENBQUMsVUFBVSxDQUFDOzt5REFBVTtJQThCdEI7UUFBVCxNQUFNLEVBQUU7O2dFQUE4QztJQUV6QjtRQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7MENBQWtCLFdBQVc7Z0VBQU07SUFwQ3JELG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBRTVCLDg5TEFBMkM7WUFDM0MsbURBQW1EOzs7U0FDcEQsQ0FBQztpREEwQ2tCLGlCQUFpQjtZQUNDLHdCQUF3QjtZQUNwRCxVQUFVO1lBQ08sZUFBZTtZQUN0QixNQUFNO09BN0NiLG1CQUFtQixDQW9hL0I7SUFBRCwwQkFBQztDQUFBLEFBcGFELElBb2FDO1NBcGFZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlLCBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcclxuaW1wb3J0IHsgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlbmRlckNvbXBvbmVudHMvY3VzdG9tLXJlbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbWFydFRhYmxlRGF0YSwgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zbWFydC10YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGxvZywgZGVidWcgfSBmcm9tICd1dGlsJztcclxuLy8gaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tIFwiY2x1c3RlclwiO1xyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7ZXhwbG9yZXJcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL2FwcC9zaGFyZWQvZW51bS9wcmVmZXJlbmNlc19tb2RlbCc7XHJcbmltcG9ydCB7ICQkIH0gZnJvbSAncHJvdHJhY3Rvcic7XHJcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dlbmVyaWMtZGF0YWdyaWQnLFxyXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcbiAgQElucHV0KCkgZGF0YWZyb21TZXJ2ZXI6IGFueVtdO1xyXG4gIEBWaWV3Q2hpbGQoJ25nMnNtYXJ0Jykgbmcyc21hcnQ7XHJcblxyXG4gIGRhdGE6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIG5ld1NldHRpbmdzOiBhbnk7XHJcbiAgc2V0dGluZzogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHNldHRpbmdzOiBhbnk7XHJcbiAgY29sdW1ublRvRGlzcGxheTogYW55O1xyXG4gIHNldHRpbmdzT3JpZ2luZTogYW55O1xyXG4gIHNlbGVjdGVkSXRlbTogc3RyaW5nW107XHJcbiAgY29sdW1uczogYW55O1xyXG4gIHNlbGVjdGVkSXRlbU5nTW9kZWw6IGFueTtcclxuICB2aW5jaVNldHRpbmdzOiBhbnk7XHJcbiAgdGl0bGVzQXJyYXkgPSBbXTtcclxuICBjb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBbXTtcclxuXHJcbiAgZGlzYWJsZSA6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuLyogVmFyaWFibGVzIG1lYW50cyBmb3IgKioqKioqKioqKioqL1xyXG4gIGZpbHRlclZhbHVlczogc3RyaW5nW107XHJcbiAgc2VhcmNoTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIFZhbHVlRmlsdGVyczogW3N0cmluZ107XHJcbiAgQXJyYXlGaWx0ZXJzOiBBcnJheTxzdHJpbmc+O1xyXG4gIHNlbGVjdGVkSXRlbTI6IHN0cmluZ1tdID0gW107XHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBzZWxlY3RlZFNldHRpbmc6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgaWRDb2xsYWJvcmF0ZXVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBTbWFydFRhYmxlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBOYldpbmRvd1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIE9yaWdpbmFsIFNldHR0aW5ncyA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICAvLyB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgLy8gICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gXCJmYWxzZVwiKVxyXG4gICAgLy8gICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgIC8vICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciByZWR1Y2UgOiBcIiwgbmV3Q29sdW1ucyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAvLyAgIH0sIHt9KTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcclxuICAgIC8vIHRlc3RlciBwb3VyIGxlIHBhcmFtZXRyZSBcImRpc3BsYXlcIlxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5uIFRvIERpc3BsYXkgOiBcIiwgdGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwgeyBlbmRQb2ludDogJ2RhdGFmcm9tU2VydmVyJyB9KTsgLy8gZGF0YWZyb21TZXJ2ZXIgOiBVUkwgd2hlcmUgdGhlIFNldHRpbmdzIG9iamVjdCB3aWxsIGJlIHByb3ZpZGVkXHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHtcclxuICAgIC8vICAgZW5kUG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGFcIlxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZVNlcnZlciA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvKiBHRVRUSU5HIERBVEEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTsgLy8gaW5zdGFuY2llciBsJ29iamV0IHNvdXJjZVxyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhZnJvbVNlcnZlcjsgLy8gcmVjZXZvaXIgbGVzIGRvbm7DqWVzIGRlcHVpcyBsJ2V4dGVyaWV1cmVcclxuICAgIHRoaXMuc291cmNlLmxvYWQodGhpcy5kYXRhKTsgLy8gZm9tYXRlciBsZXMgZG9ubmVyIHBvdXIgZXRyZSBpbmVncmVyIMOgIGwnb2JqZXQgZGVzIGRvbm7DqWVzIGNvbnNvbWFibGUgcGFyIGxlIGRhdGFHcmlkXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IHRoaXMuY29uZmlnOyAvLyByZWN1cGVyZXIgY29tbWUgaW5wdXRcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBTZXR0aW5ncyBPcmlnaW5lIDogXCIsICB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuXHJcbiAgICAgIHRoaXMuc291cmNlLnNldFNvcnQoW3sgZmllbGQ6ICdpZCcsIGRpcmVjdGlvbjogJ2FzYycgfV0pO1xyXG4gICAgICB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNba2V5XS5kaXNwbGF5ICE9PSAnZmFsc2UnKVxyXG4gICAgICAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2x1bW5dO1xyXG4gICAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5nc09yaWdpbmUsIHtcclxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG5cclxuICAgICAgdGhpcy50aXRsZXNBcnJheSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZXR0aW5ncy5jb2x1bW5zKSxcclxuICAgICAgICBrID0+IHRoaXMuc2V0dGluZ3MuY29sdW1uc1trXS50aXRsZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAga2V5OiBlbGVtZW50LFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbWVudF0udGl0bGVcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGwnT2JqZXQgQ29sb25uZXMgOiBcIiwgdGhpcy5jb2x1bW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuICAgICAgdGhpcy5hcHBsaXF1ZXJMZXNGaWx0cmVzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKiBHZXJlciBsYSBwcmVmZXJlbmUgc2F1dmVnYXJkZXIgbGVzIGZpbHRyZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvLyBUTy1EbyA6IGdldCB0aGUgdHJlYXRlbWVudCBvdXQgb2YgdGhlIHN1YnNjcmliZVxyXG4gICAgLy8gVE8tRG8gOiB1bnN1YnNjaWJlIGFsbCB0aGUgc3Vic2NyaXB0aW9uc1xyXG5cclxuICAgIHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZShmaWx0ZXJWYWx1ZSA9PiB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgRmlsdGVycyBWYWx1ZSA6IFwiLCBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTGFiZWxzW2luZGV4XSA9IGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5maWVsZCArICc6JyArIGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5zZWFyY2g7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcgc2VhcmNoTGFiZWxzIDogJywgdGhpcy5zZWFyY2hMYWJlbHMpO1xyXG5cclxuICAgICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgICBjb25zdCBhcnJheVZhbHVlID0gQXJyYXkuZnJvbShcclxuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVycyksXHJcbiAgICAgICAgayA9PiBbXHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1trXS5zZWFyY2gsXHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1trXS5maWVsZFxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2FycmF5VmFsdWUgOiAnLCBhcnJheVZhbHVlICk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9tbnMoY29sdW1uc1RvU2hvdykge1xyXG4gICAgLy8gaWYoIHRoaXMuc2VsZWN0ZWRJdGVtLmxlbmd0aCA+IDMgKSByZXR1cm47XHJcbiAgICAvLyBUYWJsZWF1IGRlcyBpZGVudGlmaWFudCBkZXMgY29sb25uZXMgZGVjb2NoZXJcclxuXHJcbiAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbS5pbmNsdWRlc1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29sb25uZXMgw6AgYWZmaWNoZXIgOlwiLCBjb2x1bW5zVG9TaG93KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIFNlbGVjdGVkIEl0ZW1zIDogXCIsIHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuXHJcbiAgICBjb25zdCB1bnNlbGVjdGVkID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5maWx0ZXIoXHJcbiAgICAgIHggPT4gIShjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3Rpb25uZXIgbGVzIGNvbGxvbmVzIMOgIEFmZmljaGVyXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKVxyXG4gICAgICAuZmlsdGVyKHggPT4gKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpKVxyXG4gICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLmNvbHVtbnNbY29sdW1uXTsgLy8gcmVtcGxpcmUgdW4gb2JqZXQgYXZlYyBzZXVsZW1lbnQgbGVzIGNvbG9ubmVzIHF1aSBvbiB1biBpbmRleCBwb3VyIGV0cmUgYWZmaWNoZXJcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgfSwge30pO1xyXG5cclxuICAgIC8vIGxlcyBvcHRpb24gYSBldHJlIGNvY2hlclxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjb2x1bW5zVG9TaG93O1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbnNBcnJheU9mT2JqZWN0czEgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGluZGV4IDogXCIgKyBpbmRleCArIFwiIGVsZW1lbnQgOiBcIiArIGVsZW1lbnQpO1xyXG4gICAgICBjb2x1bW5zQXJyYXlPZk9iamVjdHMxLnNwbGljZShpbmRleCwgMCwge1xyXG4gICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICB0aXRsZTogdGhpcy5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3luY3JvbmlzYXRpb24gZW50cmUgbGUgdGFibGF1IERSQUdVQUJMRSBldCBsZSBjb21wb3NhbnQgU0VMRUNUXHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IGNvbHVtbnNBcnJheU9mT2JqZWN0czE7XHJcblxyXG4gICAgLy8gcmFmcmljaGlyIGxlIHRhYmxlYXUgYXZlYyBsZSBub3V2ZWxsZSBvYmpldCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcbiAgICAvLyBjcmVlIHVuIG9iamVjdCBjb2xvbW5zL3NldHRpbmdzIHF1aSBjbnRpZW50IHRvdXMgbGVzIGNvbHVtbnMgbWVtZSBjZXV4IHN1cHByaW1lclxyXG4gICAgLy8gcG91ciBwb3V2b2lyIGxlcyByZWFmaWNoZXIgYXByZXMgc2kgbGVzIGNsaWVudFxyXG5cclxuICAgIC8vIENyZWUgdW4gb2JqZXQgc2V0dGluZ3MgZW4gY2hhbmdlbnQgbGVzIHBhcmFtZXRyZSA6IGRpc3BsYXk9XCJmYWxzZVwiXHJcblxyXG4gICAgLyogQ2hhbmdlciBsYSB2YWxldXIgZGUgbGEgcHJvcHJpdGUgZGlzcGxheSBhcHJlcyBjaGFxdWUgYWN0aW9uICovXHJcbiAgICAvLyBjYWNoZXIgbGVzIGNvbG9ubmVzIGRpc2VsZWN0aW9ubmVyXHJcbiAgICB1bnNlbGVjdGVkLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbV0uZGlzcGxheSA9ICdmYWxzZSc7XHJcbiAgICB9KTtcclxuICAgIC8vIEZhaXJlIGFwcGFyYWl0cmUgbGVzIGNvbG9ubmVzIHNlbGVjdGlvbm5lclxyXG4gICAgY29sdW1uc1RvU2hvdy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSAndHJ1ZSc7XHJcbiAgICB9KTtcclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcHJlZmVybmVjZVR5cGU6ICdQUkVGX1ZJU0lCSUxJVFknLFxyXG4gICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICB9O1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgLy8gRW52b3llciBsZXMgbW9kaWZpY2F0aW9uIGF1IGJhY2tlbmRcclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVTZXR0aW5ncyh0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlQ29sb21uSWQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLm5ld1NldHRpbmdzID0ge307XHJcbiAgICB0aGlzLnNldHRpbmdzLmNvbHVtbnMuaWQudGl0bGUgPSAnaWRkZGRkJztcclxuICAgIHRoaXMubmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2V0dGluZ3MgXCIgKyB0aGlzLnNldHRpbmdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdBUFBFTCBGVU5DVElPTiBoaWRlQ29sdW1uSWQoKSAnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQVBQRUwgZGUgbCdldmVuZW1lbnQgbmdPbkNoYW5nZXMoKSBcIiwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBhcHBsaXF1ZXJMZXNGaWx0cmVzKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIgLS0tIGFwcGxpcXVlckxlc0ZpbHRyZXMoKSAtLS0tIFwiKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJzQXJyYXkgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5tYXAoY29sID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IGNvbHVtbklkID0gY29sLmtleTtcclxuICAgICAgbGV0IGZpbHRyZVZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2wua2V5XS5maWx0ZXJEYXRhKSB7XHJcbiAgICAgICAgZmlsdHJlVmFsdWUgPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbC5rZXldLmZpbHRlckRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdHJlVmFsdWUgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgY29sdW1uSWQgOiBcIiArIGNvbHVtbklkICsgXCIgPT09PSBmaWx0cmVWYWx1ZSA6IFwiICsgZmlsdHJlVmFsdWUpO1xyXG4gICAgICByZXR1cm4geyBmaWVsZDogY29sdW1uSWQsIHNlYXJjaDogZmlsdHJlVmFsdWUgfTtcclxuXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIGZpbHRlcnNBcnJheSA6IFwiLCBmaWx0ZXJzQXJyYXkpO1xyXG5cclxuICAgIHRoaXMuc291cmNlLnNldEZpbHRlcihmaWx0ZXJzQXJyYXksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHF1ZXJ5OiBzdHJpbmcgPSAnJykge1xyXG4gICAgY29uc29sZS5sb2coJy0tIE9uU2VyY2ggZnVuY3Rpb24gLS0nKTtcclxuXHJcbiAgICAvLyBjcsOpZSB1biB0YWJsZWF1eCBkeW5hbWlxdWUgYmFzZXIgc3VyIGxlcyBjb2x1bW5zIGRlIGwnb2JqZWN0IFNldHRpbmdkLFxyXG4gICAgLy8gcG91ciBsZSBkb25uZXIgY29tbWUgYXR0cmlidWUgcG91ciBsYSBmb25jdGlvbiBcIi5zZXRGaWx0ZXIoKVwiXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQXJyYXkgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5tYXAoY29sID0+IHtcclxuICAgICAgcmV0dXJuIHsgZmllbGQ6IGNvbC5rZXksIHNlYXJjaDogcXVlcnkgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoQXJyYXkpO1xyXG5cclxuICAgIHRoaXMuc291cmNlLnNldEZpbHRlcihzZWFyY2hBcnJheSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgc3BlY2lmeWluZyB3aGV0aGVyIHRvIHBlcmZvcm0gJ0FORCcgb3IgJ09SJyBzZWFyY2hcclxuICAgIC8vIChtZWFuaW5nIGFsbCBjb2x1bW5zIHNob3VsZCBjb250YWluIHNlYXJjaCBxdWVyeSBvciBhdCBsZWFzdCBvbmUpXHJcbiAgICAvLyAnQU5EJyBieSBkZWZhdWx0LCBzbyBjaGFuZ2luZyB0byAnT1InIGJ5IHNldHRpbmcgZmFsc2UgaGVyZVxyXG4gIH1cclxuXHJcbiAgb25EZWxldGVDb25maXJtKGV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JykpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TYXZlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2F2ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc291cmllU3VyTGlnbmUoZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdFVkVOVCAnLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVByZWZlcmVuY2VzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCIgRmlsdHJlICYgU29ydCA6IFwiLCB0aGlzLnNvdXJjZS5nZXRGaWx0ZXJlZEFuZFNvcnRlZCgpKTtcclxuXHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgIHByZWZlcmVuY2VzIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgICAgIHZhbHVlczogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX0ZJTFRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VhcmNoTGFiZWxzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfU09SVCcsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VhcmNoTGFiZWxzXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlc09iamVjdChwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIGFsZXJ0KGAgVm9zIHByZWZlcmVjZXMgRW4gw6l0w6kgc2F1dmVnYXJkZXIgYCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheShcclxuICAgICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMsXHJcbiAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRJbmRleFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFycmF5T2ZJdGVtQXJyYW5nZWQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucmVkdWNlKFxyXG4gICAgICAobmV3Q29sdW1uc09iamVjdCwgYXJyYXlPYmplY3QpID0+IHtcclxuICAgICAgICBhcnJheU9mSXRlbUFycmFuZ2VkLnVuc2hpZnQoYXJyYXlPYmplY3Qua2V5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFycmF5IE9mIEl0ZW0gQXJyYW5nZWQgOiBcIiwgYXJyYXlPZkl0ZW1BcnJhbmdlZCk7XHJcbiAgICAgICAgbmV3Q29sdW1uc09iamVjdFthcnJheU9iamVjdC5rZXldID0gdGhpcy5jb2x1bW5zW2FycmF5T2JqZWN0LmtleV07XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnNPYmplY3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gICAgLy8gY3JlZSB1biBvYmpldCBzZXR0aW5ncyBwb3VyIGxlIHJlYXNpbmVyIGF1IGNvbXBvc2FudFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbTIgPSBPYmplY3Qua2V5cyhuZXdDb2x1bW5zVG9TaG93KTtcclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtMlxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG4gICAgLy8gc3luY3JvbmlzZXIgbGVzIGNoYW5nZW1lbnQgYXZlYyBsZSBiYWNrZW5kXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBvbkN1c3RvbUFjdGlvbihldmVudCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiRVZFTlQgOiBcIiwgZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5hY3Rpb24gPT09IFwidmlld1wiKSB7XHJcbiAgICAgIHRoaXMud2luZG93U2VydmljZS5vcGVuKFxyXG4gICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWluaSBDViBWQ0dQJyxcclxuICAgICAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnc29tZSB0ZXh0IHRvIHBhc3MgaW50byB0ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVOYWlzc2FuY2U6IGAke2V2ZW50LmRhdGEuZGF0ZURlTmFpc3NhbmNlfWAsXHJcbiAgICAgICAgICAgICAgICBwYXlzRGVOYWlzc2FuY2U6IGAke2V2ZW50LmRhdGEucGF5c0RlTmFpc3NhbmNlfWAsXHJcbiAgICAgICAgICAgICAgICBnZW5yZTogYCR7ZXZlbnQuZGF0YS5nZW5yZX1gLFxyXG4gICAgICAgICAgICAgICAgZm9uY3Rpb25PZmZpY2llbDogYCR7ZXZlbnQuZGF0YS5mb25jdGlvbk9mZmljaWVsfWAsXHJcbiAgICAgICAgICAgICAgICBudW1lcm9EZVRlbGVwaG9uZVBhckRlZmF1dDogYCR7ZXZlbnQuZGF0YS5udW1lcm9EZVRlbGVwaG9uZVBhckRlZmF1dH1gLFxyXG4gICAgICAgICAgICAgICAgdHlwZURlQ29udHJhdDogYCR7ZXZlbnQuZGF0YS50eXBlRGVDb250cmF0fWAsXHJcbiAgICAgICAgICAgICAgICBhZHJlc3NlRW1haWxQYXJEZWZhdXQ6IGAke2V2ZW50LmRhdGEuYWRyZXNzZUVtYWlsUGFyRGVmYXV0fWAsXHJcbiAgICAgICAgICAgICAgICBzb2NpZXRlREFwcGFydGVuYW5jZTogYCR7ZXZlbnQuZGF0YS5zb2NpZXRlREFwcGFydGVuYW5jZX1gLFxyXG4gICAgICAgICAgICAgICAgaGFuZGljYXA6IGAke2V2ZW50LmRhdGEuaGFuZGljYXB9YCxcclxuICAgICAgICAgICAgICAgIG5vbVBlcnNvbm5lRW5DYXNEdXJnZW5jZTogYCR7ZXZlbnQuZGF0YS5ub21QZXJzb25uZUVuQ2FzRHVyZ2VuY2V9YCxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYWxlcnQoYEN1c3RvbSBldmVudCAnJHtldmVudC5hY3Rpb259JyBmaXJlZCBvbiByb3cg4oSWOiAke2V2ZW50LmRhdGEuaWRWaW5jaX1gKTtcclxuICAgICAgLy8gY29uc3QgYWN0aXZhdGVPdGhlclRhYiA9IHRydWU7XHJcbiAgICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVBY3RpdmVUYWIoYWN0aXZhdGVPdGhlclRhYik7XHJcbiAgICAgIHRoaXMuaWRDb2xsYWJvcmF0ZXVyLmVtaXQoZXZlbnQuZGF0YS5pZFZpbmNpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oIFNob3djYXNlRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIC8vICAgY29udGV4dDoge1xyXG4gICAgICAvLyAgICAgdGl0bGU6ICdUaGlzIGlzIGEgdGl0bGUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29tcG9uZW50JyxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAvLyB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihkaWFsb2csIHsgY29udGV4dDogJ3RoaXMgaXMgc29tZSBhZGRpdGlvbmFsIGRhdGEgcGFzc2VkIHRvIGRpYWxvZycgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyA6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==