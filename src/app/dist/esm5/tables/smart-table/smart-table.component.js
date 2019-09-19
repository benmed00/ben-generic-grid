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
        this.dataEvent = new EventEmitter();
        this.ligneData = new EventEmitter();
        this.eventPreference = new EventEmitter();
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
        // let preference: any = {
        //   preferences : [
        //     {
        //       preferenceType: 'PREF_VISIBILITY',
        //       values: this.selectedItem
        //     },
        //     {
        //       preferenceType: 'PREF_ORDER',
        //       values: this.selectedItem2
        //     },
        //     {
        //       preferenceType: 'PREF_FILTER',
        //       values: this.searchLabels
        //     },
        //     {
        //       preferenceType: 'PREF_SORT',
        //       values: ['']
        //     }
        //   ]
        // };
        // this.eventPreference.emit(preference);
        /* Gerer la preferene sauvegarder les filtres ****************************************/
        // TO-Do : get the treatement out of the subscribe
        // TO-Do : unsubscibe all the subscriptions
        this.source.onChanged().subscribe(function (filterValue) {
            // console.log(" Evenement On Changed => Filter");
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
                title: newColumnsToShow[element].title
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
        // this.service.updateSettings(this.settingsOrigine);
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
        // console.log( " NG ON CHANGE " );
        // console.log("APPEL de l'evenement ngOnChanges() ", changes);
    };
    SmartTableComponent.prototype.appliquerLesFiltres = function () {
        var _this = this;
        var filtersArray = [];
        this.columnsArrayOfObjects.forEach(function (element) {
            var filterData = _this.settingsOrigine.columns[element.key].filterData;
            if (filterData !== undefined && filterData.length > 0) {
                filtersArray.push({ field: element.key, search: filterData });
            }
        });
        if (filtersArray.length > 0) {
            this.source.setFilter(filtersArray, false);
        }
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
        // console.log(" Filtre & Sort : ", this.source.getFilteredAndSorted());
        var userId = 1;
        var effectifRole = "rh";
        if (typeof Liferay !== 'undefined') {
            userId = Liferay.ThemeDisplay.getUserId();
            effectifRole = Liferay['effectifRole'];
        }
        var preference = {
            idTable: 1,
            idUser: userId,
            roleUser: effectifRole,
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
                    values: ['']
                }
            ]
        };
        var preferences = {
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
                    values: ['']
                }
            ]
        };
        this.eventPreference.emit(preferences);
        // this.service.updatePreferencesObject(preference); // synchroniser les preferences
        // alert(` Vos préférences ont étés sauvegardées `);
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
        // cree un objet settings pour le reasigner au composant
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
        this.dataEvent.emit(event);
        // console.log('EVENT : ', event);
        // if (event.action === 'view') {
        //   this.dataEvent.emit(event);
        // this.windowService.open(
        //     this.contentTemplate,
        //     {
        //       title: ' Mini CV ',
        //         context: {
        //           text: 'some text to pass into template',
        //           nom: `${event.data.nom}`,
        //           prenom1: `${event.data.prenom1}`,
        //           photo: `${event.data.photo}`,
        //           dateDeNaissance: `${event.data.dateDeNaissance}`,
        //           paysDeNaissance: `${event.data.paysDeNaissance}`,
        //           genre: `${event.data.genre}`,
        //           fonctionOfficielle: `${event.data.fonctionOfficielle}`,
        //           numeroDeTelephoneParDefaut: `${event.data.numeroDeTelephoneParDefaut}`,
        //           typeDeContrat: `${event.data.typeDeContrat}`,
        //           adresseEmailParDefaut: `${event.data.adresseEmailParDefaut}`,
        //           societeDAppartenance: `${event.data.societeDAppartenance}`,
        //           handicap: `${event.data.handicap}`,
        //           nomPersonneEnCasDurgence: `${event.data.nomPersonneEnCasDurgence}`,
        //         }
        //     },
        // );
        // } else if (event.action === 'consulter') {
        // alert(`Custom event '${event.action}' fired on row №: ${event.data.userId}`);
        // const activateOtherTab = true;
        // this.service.updateActiveTab(activateOtherTab);
        // this.dataEvent.emit(event);
        // }
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
    ], SmartTableComponent.prototype, "dataEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SmartTableComponent.prototype, "ligneData", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SmartTableComponent.prototype, "eventPreference", void 0);
    tslib_1.__decorate([
        ViewChild('contentTemplate'),
        tslib_1.__metadata("design:type", TemplateRef)
    ], SmartTableComponent.prototype, "contentTemplate", void 0);
    SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: 'generic-datagrid',
            template: "<nb-card>\r\n  <nb-card-header>\r\n    <button nbButton shape=\"semi-round\" status=\"info\" (click)=\"savePreferences()\">\r\n      Sauvegarder mes pr\u00E9f\u00E9rences\r\n    </button>\r\n    <ng-content></ng-content>\r\n    <br />\r\n    <br />\r\n    <div class=\"vc-accordion\">\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Pr\u00E9ferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n            <nb-card>\r\n              <nb-card-header>S\u00E9lection des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select cdkDropList multiple placeholder=\"S\u00E9lection Multiple \" class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\" [(selected)]=\"selectedItem\" shape=\"round\" size=\"small\">\r\n                  <nb-select-label>\r\n                    S\u00E9lectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{ col.key }}\" [disabled]=\"\r\n                      selectedItem.length > 10 && !selectedItem.includes(col.key)\">\r\n                    {{ col.value.title }}\r\n                  </nb-option>\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n            <nb-card>\r\n              <nb-card-header>Tri des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>\r\n                    {{ item.title }}\r\n                  </div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n      </nb-accordion>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n      (rowHover)=\"sourieSurLigne($event)\" (custom)=\"onCustomAction($event)\" (userRowSelect)=\"onCustomAction($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"
            // changeDetection: ChangeDetectionStrategy.OnPush,
            ,
            styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.action-column{position:absolute;top:.2em;right:.2em}::ng-deep tr td.ng2-smart-actions{height:100%}::ng-deep tr td.ng2-smart-actions a.ng2-smart-action-custom-custom{width:50%!important;float:left}::ng-deep tr.consulterModifier i.nb-plus{display:none}::ng-deep tr.creerConsulter i.nb-edit{display:none}::ng-deep tr.creer i.nb-edit{display:none}::ng-deep tr.creer i.nb-search{display:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1QsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVV6QztJQTBDRSw2QkFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0IsRUFDUixhQUE4QixFQUM5QixNQUFjO1FBSmYsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTlCeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFHNUIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFD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QWdEO1FBQ2hELGdGQUFnRjtRQUNoRixZQUFZO1FBQ1osU0FBUztRQUNULEtBQUs7UUFDUCw2Q0FBNkM7UUFDM0MsZ0ZBQWdGO1FBQ2hGLGlDQUFpQztRQUNqQyxrREFBa0Q7UUFDbEQsOEJBQThCO1FBQ2hDLElBQUk7UUFFSixzREFBc0Q7UUFDcEQsZUFBZTtRQUNmLCtEQUErRDtRQUMvRCxPQUFPO1FBQ1AsTUFBTTtRQUVSLGlHQUFpRztJQUNuRyxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXBkUTtRQUFSLEtBQUssRUFBRTs7dURBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTs7K0RBQXVCO0lBQ1I7UUFBdEIsU0FBUyxDQUFDLFVBQVUsQ0FBQzs7eURBQVU7SUE4QnRCO1FBQVQsTUFBTSxFQUFFOzswREFBcUM7SUFDcEM7UUFBVCxNQUFNLEVBQUU7OzBEQUFxQztJQUNwQztRQUFULE1BQU0sRUFBRTs7Z0VBQTJDO0lBRXRCO1FBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQzswQ0FBa0IsV0FBVztnRUFBTTtJQXRDckQsbUJBQW1CO1FBTi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFFNUIsazhFQUEyQztZQUMzQyxtREFBbUQ7OztTQUNwRCxDQUFDO2lEQTRDa0IsaUJBQWlCO1lBQ0Msd0JBQXdCO1lBQ3BELFVBQVU7WUFDTyxlQUFlO1lBQ3RCLE1BQU07T0EvQ2IsbUJBQW1CLENBdWQvQjtJQUFELDBCQUFDO0NBQUEsQUF2ZEQsSUF1ZEM7U0F2ZFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UsIFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xyXG5pbXBvcnQgeyBDdXN0b21SZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVuZGVyQ29tcG9uZW50cy9jdXN0b20tcmVuZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhLCBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gJy4uL3NtYXJ0LXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbG9nLCBkZWJ1ZywgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcclxuLy8gaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tIFwiY2x1c3RlclwiO1xyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7ZXhwbG9yZXJcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL2FwcC9zaGFyZWQvZW51bS9wcmVmZXJlbmNlc19tb2RlbCc7XHJcbmltcG9ydCB7ICQkIH0gZnJvbSAncHJvdHJhY3Rvcic7XHJcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSB2YXIgTGlmZXJheSA6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZW5lcmljLWRhdGFncmlkJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCdcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIEBJbnB1dCgpIGRhdGFmcm9tU2VydmVyOiBhbnlbXTtcclxuICBAVmlld0NoaWxkKCduZzJzbWFydCcpIG5nMnNtYXJ0O1xyXG5cclxuICBkYXRhOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBuZXdTZXR0aW5nczogYW55O1xyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG4gIGNvbHVtbm5Ub0Rpc3BsYXk6IGFueTtcclxuICBzZXR0aW5nc09yaWdpbmU6IGFueTtcclxuICBzZWxlY3RlZEl0ZW06IHN0cmluZ1tdO1xyXG4gIGNvbHVtbnM6IGFueTtcclxuICBzZWxlY3RlZEl0ZW1OZ01vZGVsOiBhbnk7XHJcbiAgdmluY2lTZXR0aW5nczogYW55O1xyXG4gIHRpdGxlc0FycmF5ID0gW107XHJcbiAgY29sdW1uc0FycmF5T2ZPYmplY3RzID0gW107XHJcblxyXG4gIGRpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8qIFZhcmlhYmxlcyBtZWFudHMgZm9yICoqKioqKioqKioqKi9cclxuICBmaWx0ZXJWYWx1ZXM6IHN0cmluZ1tdO1xyXG4gIHNlYXJjaExhYmVsczogc3RyaW5nW10gPSBbXTtcclxuICBWYWx1ZUZpbHRlcnM6IFtzdHJpbmddO1xyXG4gIEFycmF5RmlsdGVyczogQXJyYXk8c3RyaW5nPjtcclxuICBzZWxlY3RlZEl0ZW0yOiBzdHJpbmdbXSA9IFtdO1xyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgc2VsZWN0ZWRTZXR0aW5nOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIGRhdGFFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBsaWduZURhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZXZlbnRQcmVmZXJlbmNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvLyBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBTbWFydFRhYmxlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSB3aW5kb3dTZXJ2aWNlOiBOYldpbmRvd1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmljZS5nZXRTZXR0aW5ncygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIE9yaWdpbmFsIFNldHR0aW5ncyA6IFwiLCB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgICAvLyB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgLy8gICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gXCJmYWxzZVwiKVxyXG4gICAgLy8gICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgIC8vICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciByZWR1Y2UgOiBcIiwgbmV3Q29sdW1ucyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAvLyAgIH0sIHt9KTtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcclxuICAgIC8vIHRlc3RlciBwb3VyIGxlIHBhcmFtZXRyZSBcImRpc3BsYXlcIlxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5uIFRvIERpc3BsYXkgOiBcIiwgdGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwgeyBlbmRQb2ludDogJ2RhdGFmcm9tU2VydmVyJyB9KTsgLy8gZGF0YWZyb21TZXJ2ZXIgOiBVUkwgd2hlcmUgdGhlIFNldHRpbmdzIG9iamVjdCB3aWxsIGJlIHByb3ZpZGVkXHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHtcclxuICAgIC8vICAgZW5kUG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2RhdGFcIlxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZVNlcnZlciA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvKiBHRVRUSU5HIERBVEEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTsgLy8gaW5zdGFuY2llciBsJ29iamV0IHNvdXJjZVxyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhZnJvbVNlcnZlcjsgLy8gcmVjZXZvaXIgbGVzIGRvbm7DqWVzIGRlcHVpcyBsJ2V4dGVyaWV1cmVcclxuICAgIHRoaXMuc291cmNlLmxvYWQodGhpcy5kYXRhKTsgLy8gZm9tYXRlciBsZXMgZG9ubmVyIHBvdXIgZXRyZSBpbmVncmVyIMOgIGwnb2JqZXQgZGVzIGRvbm7DqWVzIGNvbnNvbWFibGUgcGFyIGxlIGRhdGFHcmlkXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IHRoaXMuY29uZmlnOyAvLyByZWN1cGVyZXIgY29tbWUgaW5wdXRcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBTZXR0aW5ncyBPcmlnaW5lIDogXCIsICB0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuXHJcbiAgICAgIHRoaXMuc291cmNlLnNldFNvcnQoW3sgZmllbGQ6ICdpZCcsIGRpcmVjdGlvbjogJ2FzYycgfV0pO1xyXG4gICAgICB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkgPSBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKVxyXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNba2V5XS5kaXNwbGF5ICE9PSAnZmFsc2UnKVxyXG4gICAgICAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2x1bW5dO1xyXG4gICAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5nc09yaWdpbmUsIHtcclxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG5cclxuICAgICAgdGhpcy50aXRsZXNBcnJheSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZXR0aW5ncy5jb2x1bW5zKSxcclxuICAgICAgICBrID0+IHRoaXMuc2V0dGluZ3MuY29sdW1uc1trXS50aXRsZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAga2V5OiBlbGVtZW50LFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbWVudF0udGl0bGVcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGwnT2JqZXQgQ29sb25uZXMgOiBcIiwgdGhpcy5jb2x1bW5zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc09yaWdpbmUpIHtcclxuICAgICAgdGhpcy5hcHBsaXF1ZXJMZXNGaWx0cmVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgIC8vICAgcHJlZmVyZW5jZXMgOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1ZJU0lCSUxJVFknLFxyXG4gICAgLy8gICAgICAgdmFsdWVzOiB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX09SREVSJyxcclxuICAgIC8vICAgICAgIHZhbHVlczogdGhpcy5zZWxlY3RlZEl0ZW0yXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfRklMVEVSJyxcclxuICAgIC8vICAgICAgIHZhbHVlczogdGhpcy5zZWFyY2hMYWJlbHNcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9TT1JUJyxcclxuICAgIC8vICAgICAgIHZhbHVlczogWycnXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgXVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyB0aGlzLmV2ZW50UHJlZmVyZW5jZS5lbWl0KHByZWZlcmVuY2UpO1xyXG5cclxuICAgIC8qIEdlcmVyIGxhIHByZWZlcmVuZSBzYXV2ZWdhcmRlciBsZXMgZmlsdHJlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8vIFRPLURvIDogZ2V0IHRoZSB0cmVhdGVtZW50IG91dCBvZiB0aGUgc3Vic2NyaWJlXHJcbiAgICAvLyBUTy1EbyA6IHVuc3Vic2NpYmUgYWxsIHRoZSBzdWJzY3JpcHRpb25zXHJcblxyXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKGZpbHRlclZhbHVlID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgRXZlbmVtZW50IE9uIENoYW5nZWQgPT4gRmlsdGVyXCIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIEZpbHRlcnMgVmFsdWUgOiBcIiwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdKTtcclxuICAgICAgICB0aGlzLnNlYXJjaExhYmVsc1tpbmRleF0gPSBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uZmllbGQgKyAnOicgKyBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uc2VhcmNoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnIHNlYXJjaExhYmVscyA6ICcsIHRoaXMuc2VhcmNoTGFiZWxzKTtcclxuXHJcbiAgICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICAgIGlkVXNlcjogMSxcclxuICAgICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfRklMVEVSJyxcclxuICAgICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zZWFyY2hMYWJlbHNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMpLFxyXG4gICAgICAgIGsgPT4gW1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uc2VhcmNoLFxyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uZmllbGRcclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheVZhbHVlIDogJywgYXJyYXlWYWx1ZSApO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvbW5zKGNvbHVtbnNUb1Nob3cpIHtcclxuICAgIC8vIGlmKCB0aGlzLnNlbGVjdGVkSXRlbS5sZW5ndGggPiAzICkgcmV0dXJuO1xyXG4gICAgLy8gVGFibGVhdSBkZXMgaWRlbnRpZmlhbnQgZGVzIGNvbG9ubmVzIGRlY29jaGVyXHJcblxyXG4gICAgLy8gdGhpcy5zZWxlY3RlZEl0ZW0uaW5jbHVkZXNcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbG9ubmVzIMOgIGFmZmljaGVyIDpcIiwgY29sdW1uc1RvU2hvdyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBTZWxlY3RlZCBJdGVtcyA6IFwiLCB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcblxyXG4gICAgY29uc3QgdW5zZWxlY3RlZCA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykuZmlsdGVyKFxyXG4gICAgICB4ID0+ICEoY29sdW1uc1RvU2hvdyB8fCBbXSkuaW5jbHVkZXMoeClcclxuICAgICk7XHJcblxyXG4gICAgLy8gU2VsZWN0aW9ubmVyIGxlcyBjb2xsb25lcyDDoCBBZmZpY2hlclxyXG4gICAgY29uc3QgbmV3Q29sdW1uc1RvU2hvdyA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucylcclxuICAgICAgLmZpbHRlcih4ID0+IChjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KSlcclxuICAgICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5jb2x1bW5zW2NvbHVtbl07IC8vIHJlbXBsaXJlIHVuIG9iamV0IGF2ZWMgc2V1bGVtZW50IGxlcyBjb2xvbm5lcyBxdWkgb24gdW4gaW5kZXggcG91ciBldHJlIGFmZmljaGVyXHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAvLyBsZXMgb3B0aW9uIGEgZXRyZSBjb2NoZXJcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY29sdW1uc1RvU2hvdztcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zQXJyYXlPZk9iamVjdHMxID0gW107XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgaW5kZXggOiBcIiArIGluZGV4ICsgXCIgZWxlbWVudCA6IFwiICsgZWxlbWVudCk7XHJcbiAgICAgIGNvbHVtbnNBcnJheU9mT2JqZWN0czEuc3BsaWNlKGluZGV4LCAwLCB7XHJcbiAgICAgICAga2V5OiBlbGVtZW50LFxyXG4gICAgICAgIHRpdGxlOiBuZXdDb2x1bW5zVG9TaG93W2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3luY3JvbmlzYXRpb24gZW50cmUgbGUgdGFibGF1IERSQUdVQUJMRSBldCBsZSBjb21wb3NhbnQgU0VMRUNUXHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyA9IGNvbHVtbnNBcnJheU9mT2JqZWN0czE7XHJcblxyXG4gICAgLy8gcmFmcmljaGlyIGxlIHRhYmxlYXUgYXZlYyBsZSBub3V2ZWxsZSBvYmpldCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcbiAgICAvLyBjcmVlIHVuIG9iamVjdCBjb2xvbW5zL3NldHRpbmdzIHF1aSBjbnRpZW50IHRvdXMgbGVzIGNvbHVtbnMgbWVtZSBjZXV4IHN1cHByaW1lclxyXG4gICAgLy8gcG91ciBwb3V2b2lyIGxlcyByZWFmaWNoZXIgYXByZXMgc2kgbGVzIGNsaWVudFxyXG5cclxuICAgIC8vIENyZWUgdW4gb2JqZXQgc2V0dGluZ3MgZW4gY2hhbmdlbnQgbGVzIHBhcmFtZXRyZSA6IGRpc3BsYXk9XCJmYWxzZVwiXHJcblxyXG4gICAgLyogQ2hhbmdlciBsYSB2YWxldXIgZGUgbGEgcHJvcHJpdGUgZGlzcGxheSBhcHJlcyBjaGFxdWUgYWN0aW9uICovXHJcbiAgICAvLyBjYWNoZXIgbGVzIGNvbG9ubmVzIGRpc2VsZWN0aW9ubmVyXHJcbiAgICB1bnNlbGVjdGVkLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbV0uZGlzcGxheSA9ICdmYWxzZSc7XHJcbiAgICB9KTtcclxuICAgIC8vIEZhaXJlIGFwcGFyYWl0cmUgbGVzIGNvbG9ubmVzIHNlbGVjdGlvbm5lclxyXG4gICAgY29sdW1uc1RvU2hvdy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSAndHJ1ZSc7XHJcbiAgICB9KTtcclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcHJlZmVybmVjZVR5cGU6ICdQUkVGX1ZJU0lCSUxJVFknLFxyXG4gICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICB9O1xyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgLy8gRW52b3llciBsZXMgbW9kaWZpY2F0aW9uIGF1IGJhY2tlbmRcclxuICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVTZXR0aW5ncyh0aGlzLnNldHRpbmdzT3JpZ2luZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlQ29sb21uSWQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLm5ld1NldHRpbmdzID0ge307XHJcbiAgICB0aGlzLnNldHRpbmdzLmNvbHVtbnMuaWQudGl0bGUgPSAnaWRkZGRkJztcclxuICAgIHRoaXMubmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5uZXdTZXR0aW5ncyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2V0dGluZ3MgXCIgKyB0aGlzLnNldHRpbmdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdBUFBFTCBGVU5DVElPTiBoaWRlQ29sdW1uSWQoKSAnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCBcIiBORyBPTiBDSEFOR0UgXCIgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQVBQRUwgZGUgbCdldmVuZW1lbnQgbmdPbkNoYW5nZXMoKSBcIiwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBhcHBsaXF1ZXJMZXNGaWx0cmVzKCkge1xyXG4gICAgY29uc3QgZmlsdGVyc0FycmF5ID0gW107XHJcbiAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgY29uc3QgZmlsdGVyRGF0YTogc3RyaW5nID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtZW50LmtleV0uZmlsdGVyRGF0YTtcclxuICAgICAgaWYgKGZpbHRlckRhdGEgIT09IHVuZGVmaW5lZCAmJiAgZmlsdGVyRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyc0FycmF5LnB1c2goeyBmaWVsZDogZWxlbWVudC5rZXksIHNlYXJjaDogZmlsdGVyRGF0YSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZpbHRlcnNBcnJheS5sZW5ndGggPiAwKXtcclxuICAgICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKGZpbHRlcnNBcnJheSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHF1ZXJ5OiBzdHJpbmcgPSAnJykge1xyXG4gICAgY29uc29sZS5sb2coJy0tIE9uU2VyY2ggZnVuY3Rpb24gLS0nKTtcclxuXHJcbiAgICAvLyBjcsOpZSB1biB0YWJsZWF1eCBkeW5hbWlxdWUgYmFzZXIgc3VyIGxlcyBjb2x1bW5zIGRlIGwnb2JqZWN0IFNldHRpbmdkLFxyXG4gICAgLy8gcG91ciBsZSBkb25uZXIgY29tbWUgYXR0cmlidWUgcG91ciBsYSBmb25jdGlvbiBcIi5zZXRGaWx0ZXIoKVwiXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoQXJyYXkgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5tYXAoY29sID0+IHtcclxuICAgICAgcmV0dXJuIHsgZmllbGQ6IGNvbC5rZXksIHNlYXJjaDogcXVlcnkgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoQXJyYXkpO1xyXG5cclxuICAgIHRoaXMuc291cmNlLnNldEZpbHRlcihzZWFyY2hBcnJheSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgc3BlY2lmeWluZyB3aGV0aGVyIHRvIHBlcmZvcm0gJ0FORCcgb3IgJ09SJyBzZWFyY2hcclxuICAgIC8vIChtZWFuaW5nIGFsbCBjb2x1bW5zIHNob3VsZCBjb250YWluIHNlYXJjaCBxdWVyeSBvciBhdCBsZWFzdCBvbmUpXHJcbiAgICAvLyAnQU5EJyBieSBkZWZhdWx0LCBzbyBjaGFuZ2luZyB0byAnT1InIGJ5IHNldHRpbmcgZmFsc2UgaGVyZVxyXG4gIH1cclxuXHJcbiAgb25EZWxldGVDb25maXJtKGV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JykpIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TYXZlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2F2ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc291cmllU3VyTGlnbmUoZXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdFVkVOVCAnLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNyZWF0ZT8nKSkge1xyXG4gICAgICBldmVudC5uZXdEYXRhLm5hbWUgKz0gJyArIGFkZGVkIGluIGNvZGUnO1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoZXZlbnQubmV3RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlamVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVByZWZlcmVuY2VzKCkge1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIEZpbHRyZSAmIFNvcnQgOiBcIiwgdGhpcy5zb3VyY2UuZ2V0RmlsdGVyZWRBbmRTb3J0ZWQoKSk7XHJcblxyXG4gICAgbGV0IHVzZXJJZCA9IDE7XHJcbiAgICBsZXQgZWZmZWN0aWZSb2xlID0gXCJyaFwiO1xyXG4gICAgaWYgKHR5cGVvZiBMaWZlcmF5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB1c2VySWQgPSBMaWZlcmF5LlRoZW1lRGlzcGxheS5nZXRVc2VySWQoKTtcclxuICAgICAgZWZmZWN0aWZSb2xlID0gTGlmZXJheVsnZWZmZWN0aWZSb2xlJ107XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogdXNlcklkLFxyXG4gICAgICByb2xlVXNlcjogZWZmZWN0aWZSb2xlLFxyXG4gICAgICBwcmVmZXJlbmNlcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1NPUlQnLFxyXG4gICAgICAgICAgdmFsdWVzOiBbJyddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwcmVmZXJlbmNlczogYW55ID0ge1xyXG4gICAgICBwcmVmZXJlbmNlcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1NPUlQnLFxyXG4gICAgICAgICAgdmFsdWVzOiBbJyddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5ldmVudFByZWZlcmVuY2UuZW1pdChwcmVmZXJlbmNlcyk7XHJcblxyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzT2JqZWN0KHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgLy8gYWxlcnQoYCBWb3MgcHLDqWbDqXJlbmNlcyBvbnQgw6l0w6lzIHNhdXZlZ2FyZMOpZXMgYCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheShcclxuICAgICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMsXHJcbiAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRJbmRleFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFycmF5T2ZJdGVtQXJyYW5nZWQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucmVkdWNlKFxyXG4gICAgICAobmV3Q29sdW1uc09iamVjdCwgYXJyYXlPYmplY3QpID0+IHtcclxuICAgICAgICBhcnJheU9mSXRlbUFycmFuZ2VkLnVuc2hpZnQoYXJyYXlPYmplY3Qua2V5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFycmF5IE9mIEl0ZW0gQXJyYW5nZWQgOiBcIiwgYXJyYXlPZkl0ZW1BcnJhbmdlZCk7XHJcbiAgICAgICAgbmV3Q29sdW1uc09iamVjdFthcnJheU9iamVjdC5rZXldID0gdGhpcy5jb2x1bW5zW2FycmF5T2JqZWN0LmtleV07XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnNPYmplY3Q7XHJcbiAgICAgIH0sXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gICAgLy8gY3JlZSB1biBvYmpldCBzZXR0aW5ncyBwb3VyIGxlIHJlYXNpZ25lciBhdSBjb21wb3NhbnRcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0yID0gT2JqZWN0LmtleXMobmV3Q29sdW1uc1RvU2hvdyk7XHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcHJlZmVybmVjZVR5cGU6ICdQUkVGX09SREVSJyxcclxuICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgIH07XHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuICAgIC8vIHN5bmNyb25pc2VyIGxlcyBjaGFuZ2VtZW50IGF2ZWMgbGUgYmFja2VuZFxyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25DdXN0b21BY3Rpb24oIGV2ZW50KSB7XHJcblxyXG4gICAgdGhpcy5kYXRhRXZlbnQuZW1pdChldmVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnRVZFTlQgOiAnLCBldmVudCk7XHJcbiAgICAvLyBpZiAoZXZlbnQuYWN0aW9uID09PSAndmlldycpIHtcclxuICAgIC8vICAgdGhpcy5kYXRhRXZlbnQuZW1pdChldmVudCk7XHJcbiAgICAgIC8vIHRoaXMud2luZG93U2VydmljZS5vcGVuKFxyXG4gICAgICAvLyAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUsXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIHRpdGxlOiAnIE1pbmkgQ1YgJyxcclxuICAgICAgLy8gICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgIC8vICAgICAgICAgICB0ZXh0OiAnc29tZSB0ZXh0IHRvIHBhc3MgaW50byB0ZW1wbGF0ZScsXHJcbiAgICAgIC8vICAgICAgICAgICBub206IGAke2V2ZW50LmRhdGEubm9tfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBwcmVub20xOiBgJHtldmVudC5kYXRhLnByZW5vbTF9YCxcclxuICAgICAgLy8gICAgICAgICAgIHBob3RvOiBgJHtldmVudC5kYXRhLnBob3RvfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBkYXRlRGVOYWlzc2FuY2U6IGAke2V2ZW50LmRhdGEuZGF0ZURlTmFpc3NhbmNlfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBwYXlzRGVOYWlzc2FuY2U6IGAke2V2ZW50LmRhdGEucGF5c0RlTmFpc3NhbmNlfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBnZW5yZTogYCR7ZXZlbnQuZGF0YS5nZW5yZX1gLFxyXG4gICAgICAvLyAgICAgICAgICAgZm9uY3Rpb25PZmZpY2llbGxlOiBgJHtldmVudC5kYXRhLmZvbmN0aW9uT2ZmaWNpZWxsZX1gLFxyXG4gICAgICAvLyAgICAgICAgICAgbnVtZXJvRGVUZWxlcGhvbmVQYXJEZWZhdXQ6IGAke2V2ZW50LmRhdGEubnVtZXJvRGVUZWxlcGhvbmVQYXJEZWZhdXR9YCxcclxuICAgICAgLy8gICAgICAgICAgIHR5cGVEZUNvbnRyYXQ6IGAke2V2ZW50LmRhdGEudHlwZURlQ29udHJhdH1gLFxyXG4gICAgICAvLyAgICAgICAgICAgYWRyZXNzZUVtYWlsUGFyRGVmYXV0OiBgJHtldmVudC5kYXRhLmFkcmVzc2VFbWFpbFBhckRlZmF1dH1gLFxyXG4gICAgICAvLyAgICAgICAgICAgc29jaWV0ZURBcHBhcnRlbmFuY2U6IGAke2V2ZW50LmRhdGEuc29jaWV0ZURBcHBhcnRlbmFuY2V9YCxcclxuICAgICAgLy8gICAgICAgICAgIGhhbmRpY2FwOiBgJHtldmVudC5kYXRhLmhhbmRpY2FwfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBub21QZXJzb25uZUVuQ2FzRHVyZ2VuY2U6IGAke2V2ZW50LmRhdGEubm9tUGVyc29ubmVFbkNhc0R1cmdlbmNlfWAsXHJcbiAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gKTtcclxuICAgIC8vIH0gZWxzZSBpZiAoZXZlbnQuYWN0aW9uID09PSAnY29uc3VsdGVyJykge1xyXG4gICAgICAvLyBhbGVydChgQ3VzdG9tIGV2ZW50ICcke2V2ZW50LmFjdGlvbn0nIGZpcmVkIG9uIHJvdyDihJY6ICR7ZXZlbnQuZGF0YS51c2VySWR9YCk7XHJcbiAgICAgIC8vIGNvbnN0IGFjdGl2YXRlT3RoZXJUYWIgPSB0cnVlO1xyXG4gICAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlQWN0aXZlVGFiKGFjdGl2YXRlT3RoZXJUYWIpO1xyXG4gICAgICAvLyB0aGlzLmRhdGFFdmVudC5lbWl0KGV2ZW50KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbiggU2hvd2Nhc2VEaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgLy8gICBjb250ZXh0OiB7XHJcbiAgICAgIC8vICAgICB0aXRsZTogJ1RoaXMgaXMgYSB0aXRsZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb21wb25lbnQnLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKGRpYWxvZywgeyBjb250ZXh0OiAndGhpcyBpcyBzb21lIGFkZGl0aW9uYWwgZGF0YSBwYXNzZWQgdG8gZGlhbG9nJyB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmdzIDogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcbn1cclxuIl19