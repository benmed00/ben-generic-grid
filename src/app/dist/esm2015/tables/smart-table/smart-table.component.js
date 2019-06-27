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
let SmartTableComponent = class SmartTableComponent {
    constructor(service, componentFactoryResolver, http, windowService, router) {
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
    ngOnInit() {
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
            // console.log(" l'Objet Colonnes : ", this.columns);
        }
        if (this.settingsOrigine) {
            this.appliquerLesFiltres();
        }
        /* Gerer la preferene sauvegarder les filtres ****************************************/
        // TO-Do : get the treatement out of the subscribe
        // TO-Do : unsubscibe all the subscriptions
        this.source.onChanged().subscribe(filterValue => {
            for (let index = 0; index < filterValue.filter.filters.length; index++) {
                // console.log(" Filters Value : ", filterValue.filter.filters[index]);
                this.searchLabels[index] = filterValue.filter.filters[index].field + ':' + filterValue.filter.filters[index].search;
            }
            // console.log(' searchLabels : ', this.searchLabels);
            const preference = {
                idTable: 1,
                idUser: 1,
                preferneceType: 'PREF_FILTER',
                roleUser: 'rh',
                value: this.searchLabels
            };
            // this.service.updatePreferences(preference); // synchroniser les preferences
            const arrayValue = Array.from(Object.keys(filterValue.filter.filters), k => [
                filterValue.filter.filters[k].search,
                filterValue.filter.filters[k].field
            ]);
            // console.log('arrayValue : ', arrayValue );
        });
        /* ******************************************************************************************/
    }
    ngAfterViewInit() {
        // throw new Error("Method not implemented.");
    }
    selectColomns(columnsToShow) {
        // if( this.selectedItem.length > 3 ) return;
        // Tableau des identifiant des colonnes decocher
        // this.selectedItem.includes
        // console.log("Colonnes à afficher :", columnsToShow);
        // console.log(" Selected Items : ", this.selectedItem);
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
        // this.service.updatePreferences(preference); // synchroniser les preferences
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
        // console.log(" --- appliquerLesFiltres() ---- ");
        const filtersArray = this.columnsArrayOfObjects.map(col => {
            const columnId = col.key;
            let filtreValue;
            if (this.settingsOrigine.columns[col.key].filterData) {
                filtreValue = this.settingsOrigine.columns[col.key].filterData;
            }
            else {
                filtreValue = '';
            }
            // console.log(" columnId : " + columnId + " ==== filtreValue : " + filtreValue);
            return { field: columnId, search: filtreValue };
        });
        // console.log(" filtersArray : ", filtersArray);
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
    sourieSurLigne(event) {
        // console.log('EVENT ', event);
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
    savePreferences() {
        console.log(" Filtre & Sort : ", this.source.getFilteredAndSorted());
        const preference = {
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
        alert(` Vos prefereces En été sauvegarder `);
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
        // cree un objet settings pour le reasiner au composant
        this.settings = Object.assign({}, this.settings, {
            columns: newColumnsToShow
        });
        this.selectedItem2 = Object.keys(newColumnsToShow);
        const preference = {
            idTable: 1,
            idUser: 1,
            preferneceType: 'PREF_ORDER',
            roleUser: 'rh',
            value: this.selectedItem2
        };
        // this.service.updatePreferences(preference); // synchroniser les preferences
        // syncroniser les changement avec le backend
        // this.service.updateSettings(this.settings);
    }
    onCustomAction(event) {
        console.log("EVENT : ", event);
        if (event.action === "view") {
            this.windowService.open(this.contentTemplate, {
                title: 'Mini CV VCGP',
                context: {
                    text: 'some text to pass into template',
                    dateDeNaissance: `${event.data.dateDeNaissance}`,
                    paysDeNaissance: `${event.data.paysDeNaissance}`,
                    genre: `${event.data.genre}`,
                    fonctionOfficiel: `${event.data.fonctionOfficiel}`,
                    numeroDeTelephoneParDefaut: `${event.data.numeroDeTelephoneParDefaut}`,
                    typeDeContrat: `${event.data.typeDeContrat}`,
                    adresseEmailParDefaut: `${event.data.adresseEmailParDefaut}`,
                    societeDAppartenance: `${event.data.societeDAppartenance}`,
                    handicap: `${event.data.handicap}`,
                    nomPersonneEnCasDurgence: `${event.data.nomPersonneEnCasDurgence}`,
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
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1QsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQXdDOUIsWUFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0IsRUFDUixhQUE4QixFQUM5QixNQUFjO1FBSmYsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsaUJBQVksR0FBYSxFQUFFLENBQUM7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Q0FBQztDQUNGLENBQUE7QUFsYVU7SUFBUixLQUFLLEVBQUU7O21EQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7OzJEQUF1QjtBQUNSO0lBQXRCLFNBQVMsQ0FBQyxVQUFVLENBQUM7O3FEQUFVO0FBOEJ0QjtJQUFULE1BQU0sRUFBRTs7NERBQThDO0FBRXpCO0lBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztzQ0FBa0IsV0FBVzs0REFBTTtBQXBDckQsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFFNUIsODlMQUEyQztRQUMzQyxtREFBbUQ7OztLQUNwRCxDQUFDOzZDQTBDa0IsaUJBQWlCO1FBQ0Msd0JBQXdCO1FBQ3BELFVBQVU7UUFDTyxlQUFlO1FBQ3RCLE1BQU07R0E3Q2IsbUJBQW1CLENBb2EvQjtTQXBhWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSwgU2VydmVyRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZW5kZXJDb21wb25lbnRzL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEsIFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtdGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBsb2csIGRlYnVnIH0gZnJvbSAndXRpbCc7XHJcbi8vIGltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSBcImNsdXN0ZXJcIjtcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiO2V4cGxvcmVyXHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi9hcHAvc2hhcmVkL2VudW0vcHJlZmVyZW5jZXNfbW9kZWwnO1xyXG5pbXBvcnQgeyAkJCB9IGZyb20gJ3Byb3RyYWN0b3InO1xyXG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UsIE5iV2luZG93U2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZW5lcmljLWRhdGFncmlkJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCdcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG4gIEBJbnB1dCgpIGRhdGFmcm9tU2VydmVyOiBhbnlbXTtcclxuICBAVmlld0NoaWxkKCduZzJzbWFydCcpIG5nMnNtYXJ0O1xyXG5cclxuICBkYXRhOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcclxuICBuZXdTZXR0aW5nczogYW55O1xyXG4gIHNldHRpbmc6IE9ic2VydmFibGU8YW55PjtcclxuICBzZXR0aW5nczogYW55O1xyXG4gIGNvbHVtbm5Ub0Rpc3BsYXk6IGFueTtcclxuICBzZXR0aW5nc09yaWdpbmU6IGFueTtcclxuICBzZWxlY3RlZEl0ZW06IHN0cmluZ1tdO1xyXG4gIGNvbHVtbnM6IGFueTtcclxuICBzZWxlY3RlZEl0ZW1OZ01vZGVsOiBhbnk7XHJcbiAgdmluY2lTZXR0aW5nczogYW55O1xyXG4gIHRpdGxlc0FycmF5ID0gW107XHJcbiAgY29sdW1uc0FycmF5T2ZPYmplY3RzID0gW107XHJcblxyXG4gIGRpc2FibGUgOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8qIFZhcmlhYmxlcyBtZWFudHMgZm9yICoqKioqKioqKioqKi9cclxuICBmaWx0ZXJWYWx1ZXM6IHN0cmluZ1tdO1xyXG4gIHNlYXJjaExhYmVsczogc3RyaW5nW10gPSBbXTtcclxuICBWYWx1ZUZpbHRlcnM6IFtzdHJpbmddO1xyXG4gIEFycmF5RmlsdGVyczogQXJyYXk8c3RyaW5nPjtcclxuICBzZWxlY3RlZEl0ZW0yOiBzdHJpbmdbXSA9IFtdO1xyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgc2VsZWN0ZWRTZXR0aW5nOiBhbnlbXTtcclxuICAvLyBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIGlkQ29sbGFib3JhdGV1ciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLy8gQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc2VydmljZTogU21hcnRUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgd2luZG93U2VydmljZTogTmJXaW5kb3dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNlcnZpY2UuZ2V0U2V0dGluZ3MoKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBPcmlnaW5hbCBTZXR0dGluZ3MgOiBcIiwgdGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gICAgLy8gdGhpcy5jb2x1bW5uVG9EaXNwbGF5ID0gT2JqZWN0LmtleXModGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1ucylcclxuICAgIC8vICAgLmZpbHRlcihrZXkgPT4gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1trZXldLmRpc3BsYXkgIT09IFwiZmFsc2VcIilcclxuICAgIC8vICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAvLyAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2x1bW5dO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVkdWNlIDogXCIsIG5ld0NvbHVtbnMpO1xyXG4gICAgLy8gICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgLy8gICB9LCB7fSk7XHJcbiAgICAvLyB0aGlzLnNldHRpbmdzT3JpZ2luZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XHJcbiAgICAvLyB0ZXN0ZXIgcG91ciBsZSBwYXJhbWV0cmUgXCJkaXNwbGF5XCJcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sdW1ubiBUbyBEaXNwbGF5IDogXCIsIHRoaXMuY29sdW1ublRvRGlzcGxheSk7XHJcbiAgICAvLyB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKGh0dHAsIHsgZW5kUG9pbnQ6ICdkYXRhZnJvbVNlcnZlcicgfSk7IC8vIGRhdGFmcm9tU2VydmVyIDogVVJMIHdoZXJlIHRoZSBTZXR0aW5ncyBvYmplY3Qgd2lsbCBiZSBwcm92aWRlZFxyXG4gICAgLy8gdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZShodHRwLCB7XHJcbiAgICAvLyAgIGVuZFBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXRhXCJcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gdGhpcy5zb3VyY2VTZXJ2ZXIgPSB0aGlzLmRhdGFmcm9tU2VydmVyO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgLyogR0VUVElORyBEQVRBICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgTG9jYWxEYXRhU291cmNlKCk7IC8vIGluc3RhbmNpZXIgbCdvYmpldCBzb3VyY2VcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YWZyb21TZXJ2ZXI7IC8vIHJlY2V2b2lyIGxlcyBkb25uw6llcyBkZXB1aXMgbCdleHRlcmlldXJlXHJcbiAgICB0aGlzLnNvdXJjZS5sb2FkKHRoaXMuZGF0YSk7IC8vIGZvbWF0ZXIgbGVzIGRvbm5lciBwb3VyIGV0cmUgaW5lZ3JlciDDoCBsJ29iamV0IGRlcyBkb25uw6llcyBjb25zb21hYmxlIHBhciBsZSBkYXRhR3JpZFxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgdGhpcy5zZXR0aW5nc09yaWdpbmUgPSB0aGlzLmNvbmZpZzsgLy8gcmVjdXBlcmVyIGNvbW1lIGlucHV0XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIgU2V0dGluZ3MgT3JpZ2luZSA6IFwiLCAgdGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lKSB7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZS5zZXRTb3J0KFt7IGZpZWxkOiAnaWQnLCBkaXJlY3Rpb246ICdhc2MnIH1dKTtcclxuICAgICAgdGhpcy5jb2x1bW5uVG9EaXNwbGF5ID0gT2JqZWN0LmtleXModGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1ucylcclxuICAgICAgICAuZmlsdGVyKGtleSA9PiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2tleV0uZGlzcGxheSAhPT0gJ2ZhbHNlJylcclxuICAgICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sdW1uXTtcclxuICAgICAgICAgIHJldHVybiBuZXdDb2x1bW5zO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3NPcmlnaW5lLCB7XHJcbiAgICAgICAgY29sdW1uczogdGhpcy5jb2x1bW5uVG9EaXNwbGF5XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zKTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5uVG9EaXNwbGF5KTtcclxuXHJcbiAgICAgIHRoaXMudGl0bGVzQXJyYXkgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3MuY29sdW1ucyksXHJcbiAgICAgICAgayA9PiB0aGlzLnNldHRpbmdzLmNvbHVtbnNba10udGl0bGVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIGtleTogZWxlbWVudCxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1lbnRdLnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBsJ09iamV0IENvbG9ubmVzIDogXCIsIHRoaXMuY29sdW1ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lKSB7XHJcbiAgICAgIHRoaXMuYXBwbGlxdWVyTGVzRmlsdHJlcygpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogR2VyZXIgbGEgcHJlZmVyZW5lIHNhdXZlZ2FyZGVyIGxlcyBmaWx0cmVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLy8gVE8tRG8gOiBnZXQgdGhlIHRyZWF0ZW1lbnQgb3V0IG9mIHRoZSBzdWJzY3JpYmVcclxuICAgIC8vIFRPLURvIDogdW5zdWJzY2liZSBhbGwgdGhlIHN1YnNjcmlwdGlvbnNcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoZmlsdGVyVmFsdWUgPT4ge1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIEZpbHRlcnMgVmFsdWUgOiBcIiwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNbaW5kZXhdKTtcclxuICAgICAgICB0aGlzLnNlYXJjaExhYmVsc1tpbmRleF0gPSBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uZmllbGQgKyAnOicgKyBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0uc2VhcmNoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnIHNlYXJjaExhYmVscyA6ICcsIHRoaXMuc2VhcmNoTGFiZWxzKTtcclxuXHJcbiAgICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICAgIGlkVXNlcjogMSxcclxuICAgICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfRklMVEVSJyxcclxuICAgICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zZWFyY2hMYWJlbHNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgICAgY29uc3QgYXJyYXlWYWx1ZSA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMpLFxyXG4gICAgICAgIGsgPT4gW1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uc2VhcmNoLFxyXG4gICAgICAgICAgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnNba10uZmllbGRcclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheVZhbHVlIDogJywgYXJyYXlWYWx1ZSApO1xyXG5cclxuICAgIH0pO1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvbW5zKGNvbHVtbnNUb1Nob3cpIHtcclxuICAgIC8vIGlmKCB0aGlzLnNlbGVjdGVkSXRlbS5sZW5ndGggPiAzICkgcmV0dXJuO1xyXG4gICAgLy8gVGFibGVhdSBkZXMgaWRlbnRpZmlhbnQgZGVzIGNvbG9ubmVzIGRlY29jaGVyXHJcblxyXG4gICAgLy8gdGhpcy5zZWxlY3RlZEl0ZW0uaW5jbHVkZXNcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbG9ubmVzIMOgIGFmZmljaGVyIDpcIiwgY29sdW1uc1RvU2hvdyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBTZWxlY3RlZCBJdGVtcyA6IFwiLCB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcblxyXG4gICAgY29uc3QgdW5zZWxlY3RlZCA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucykuZmlsdGVyKFxyXG4gICAgICB4ID0+ICEoY29sdW1uc1RvU2hvdyB8fCBbXSkuaW5jbHVkZXMoeClcclxuICAgICk7XHJcblxyXG4gICAgLy8gU2VsZWN0aW9ubmVyIGxlcyBjb2xsb25lcyDDoCBBZmZpY2hlclxyXG4gICAgY29uc3QgbmV3Q29sdW1uc1RvU2hvdyA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ucylcclxuICAgICAgLmZpbHRlcih4ID0+IChjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KSlcclxuICAgICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbmV3Q29sdW1uc1tjb2x1bW5dID0gdGhpcy5jb2x1bW5zW2NvbHVtbl07IC8vIHJlbXBsaXJlIHVuIG9iamV0IGF2ZWMgc2V1bGVtZW50IGxlcyBjb2xvbm5lcyBxdWkgb24gdW4gaW5kZXggcG91ciBldHJlIGFmZmljaGVyXHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbHVtbnM7XHJcbiAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAvLyBsZXMgb3B0aW9uIGEgZXRyZSBjb2NoZXJcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gY29sdW1uc1RvU2hvdztcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zQXJyYXlPZk9iamVjdHMxID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBpbmRleCA6IFwiICsgaW5kZXggKyBcIiBlbGVtZW50IDogXCIgKyBlbGVtZW50KTtcclxuICAgICAgY29sdW1uc0FycmF5T2ZPYmplY3RzMS5zcGxpY2UoaW5kZXgsIDAsIHtcclxuICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN5bmNyb25pc2F0aW9uIGVudHJlIGxlIHRhYmxhdSBEUkFHVUFCTEUgZXQgbGUgY29tcG9zYW50IFNFTEVDVFxyXG4gICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBjb2x1bW5zQXJyYXlPZk9iamVjdHMxO1xyXG5cclxuICAgIC8vIHJhZnJpY2hpciBsZSB0YWJsZWF1IGF2ZWMgbGUgbm91dmVsbGUgb2JqZXQgc2V0dGluZ3NcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG4gICAgLy8gY3JlZSB1biBvYmplY3QgY29sb21ucy9zZXR0aW5ncyBxdWkgY250aWVudCB0b3VzIGxlcyBjb2x1bW5zIG1lbWUgY2V1eCBzdXBwcmltZXJcclxuICAgIC8vIHBvdXIgcG91dm9pciBsZXMgcmVhZmljaGVyIGFwcmVzIHNpIGxlcyBjbGllbnRcclxuXHJcbiAgICAvLyBDcmVlIHVuIG9iamV0IHNldHRpbmdzIGVuIGNoYW5nZW50IGxlcyBwYXJhbWV0cmUgOiBkaXNwbGF5PVwiZmFsc2VcIlxyXG5cclxuICAgIC8qIENoYW5nZXIgbGEgdmFsZXVyIGRlIGxhIHByb3ByaXRlIGRpc3BsYXkgYXByZXMgY2hhcXVlIGFjdGlvbiAqL1xyXG4gICAgLy8gY2FjaGVyIGxlcyBjb2xvbm5lcyBkaXNlbGVjdGlvbm5lclxyXG4gICAgdW5zZWxlY3RlZC5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1dLmRpc3BsYXkgPSAnZmFsc2UnO1xyXG4gICAgfSk7XHJcbiAgICAvLyBGYWlyZSBhcHBhcmFpdHJlIGxlcyBjb2xvbm5lcyBzZWxlY3Rpb25uZXJcclxuICAgIGNvbHVtbnNUb1Nob3cuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gJ3RydWUnO1xyXG4gICAgfSk7XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICBpZFVzZXI6IDEsXHJcbiAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbVxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG5cclxuICAgIC8vIEVudm95ZXIgbGVzIG1vZGlmaWNhdGlvbiBhdSBiYWNrZW5kXHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5nc09yaWdpbmUpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvbG9tbklkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5uZXdTZXR0aW5ncyA9IHt9O1xyXG4gICAgdGhpcy5zZXR0aW5ncy5jb2x1bW5zLmlkLnRpdGxlID0gJ2lkZGRkZCc7XHJcbiAgICB0aGlzLm5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubmV3U2V0dGluZ3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNldHRpbmdzIFwiICsgdGhpcy5zZXR0aW5ncyk7XHJcbiAgICBjb25zb2xlLmxvZygnQVBQRUwgRlVOQ1RJT04gaGlkZUNvbHVtbklkKCkgJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFQUEVMIGRlIGwnZXZlbmVtZW50IG5nT25DaGFuZ2VzKCkgXCIsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgYXBwbGlxdWVyTGVzRmlsdHJlcygpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLSBhcHBsaXF1ZXJMZXNGaWx0cmVzKCkgLS0tLSBcIik7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyc0FycmF5ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMubWFwKGNvbCA9PiB7XHJcblxyXG4gICAgICBjb25zdCBjb2x1bW5JZCA9IGNvbC5rZXk7XHJcbiAgICAgIGxldCBmaWx0cmVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sLmtleV0uZmlsdGVyRGF0YSkge1xyXG4gICAgICAgIGZpbHRyZVZhbHVlID0gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tjb2wua2V5XS5maWx0ZXJEYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRyZVZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiIGNvbHVtbklkIDogXCIgKyBjb2x1bW5JZCArIFwiID09PT0gZmlsdHJlVmFsdWUgOiBcIiArIGZpbHRyZVZhbHVlKTtcclxuICAgICAgcmV0dXJuIHsgZmllbGQ6IGNvbHVtbklkLCBzZWFyY2g6IGZpbHRyZVZhbHVlIH07XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBmaWx0ZXJzQXJyYXkgOiBcIiwgZmlsdGVyc0FycmF5KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoZmlsdGVyc0FycmF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaChxdWVyeTogc3RyaW5nID0gJycpIHtcclxuICAgIGNvbnNvbGUubG9nKCctLSBPblNlcmNoIGZ1bmN0aW9uIC0tJyk7XHJcblxyXG4gICAgLy8gY3LDqWUgdW4gdGFibGVhdXggZHluYW1pcXVlIGJhc2VyIHN1ciBsZXMgY29sdW1ucyBkZSBsJ29iamVjdCBTZXR0aW5nZCxcclxuICAgIC8vIHBvdXIgbGUgZG9ubmVyIGNvbW1lIGF0dHJpYnVlIHBvdXIgbGEgZm9uY3Rpb24gXCIuc2V0RmlsdGVyKClcIlxyXG5cclxuICAgIGNvbnN0IHNlYXJjaEFycmF5ID0gdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMubWFwKGNvbCA9PiB7XHJcbiAgICAgIHJldHVybiB7IGZpZWxkOiBjb2wua2V5LCBzZWFyY2g6IHF1ZXJ5IH07XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEFycmF5KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoc2VhcmNoQXJyYXksIGZhbHNlKTtcclxuXHJcbiAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIHNwZWNpZnlpbmcgd2hldGhlciB0byBwZXJmb3JtICdBTkQnIG9yICdPUicgc2VhcmNoXHJcbiAgICAvLyAobWVhbmluZyBhbGwgY29sdW1ucyBzaG91bGQgY29udGFpbiBzZWFyY2ggcXVlcnkgb3IgYXQgbGVhc3Qgb25lKVxyXG4gICAgLy8gJ0FORCcgYnkgZGVmYXVsdCwgc28gY2hhbmdpbmcgdG8gJ09SJyBieSBzZXR0aW5nIGZhbHNlIGhlcmVcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlQ29uZmlybShldmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycpKSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2F2ZUNvbmZpcm0oZXZlbnQpIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNhdmU/JykpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YS5uYW1lICs9ICcgKyBhZGRlZCBpbiBjb2RlJztcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvdXJpZVN1ckxpZ25lKGV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnRVZFTlQgJywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjcmVhdGU/JykpIHtcclxuICAgICAgZXZlbnQubmV3RGF0YS5uYW1lICs9ICcgKyBhZGRlZCBpbiBjb2RlJztcclxuICAgICAgZXZlbnQuY29uZmlybS5yZXNvbHZlKGV2ZW50Lm5ld0RhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQuY29uZmlybS5yZWplY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcmVmZXJlbmNlcygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiIEZpbHRyZSAmIFNvcnQgOiBcIiwgdGhpcy5zb3VyY2UuZ2V0RmlsdGVyZWRBbmRTb3J0ZWQoKSk7XHJcblxyXG4gICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICBpZFRhYmxlOiAxLFxyXG4gICAgICBpZFVzZXI6IDEsXHJcbiAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICBwcmVmZXJlbmNlcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1NPUlQnLFxyXG4gICAgICAgICAgdmFsdWVzOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXNPYmplY3QocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICBhbGVydChgIFZvcyBwcmVmZXJlY2VzIEVuIMOpdMOpIHNhdXZlZ2FyZGVyIGApO1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkoXHJcbiAgICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLFxyXG4gICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICBldmVudC5jdXJyZW50SW5kZXhcclxuICAgICk7XHJcbiAgICBjb25zdCBhcnJheU9mSXRlbUFycmFuZ2VkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3QgbmV3Q29sdW1uc1RvU2hvdyA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLnJlZHVjZShcclxuICAgICAgKG5ld0NvbHVtbnNPYmplY3QsIGFycmF5T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgYXJyYXlPZkl0ZW1BcnJhbmdlZC51bnNoaWZ0KGFycmF5T2JqZWN0LmtleSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJBcnJheSBPZiBJdGVtIEFycmFuZ2VkIDogXCIsIGFycmF5T2ZJdGVtQXJyYW5nZWQpO1xyXG4gICAgICAgIG5ld0NvbHVtbnNPYmplY3RbYXJyYXlPYmplY3Qua2V5XSA9IHRoaXMuY29sdW1uc1thcnJheU9iamVjdC5rZXldO1xyXG4gICAgICAgIHJldHVybiBuZXdDb2x1bW5zT2JqZWN0O1xyXG4gICAgICB9LFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICAgIC8vIGNyZWUgdW4gb2JqZXQgc2V0dGluZ3MgcG91ciBsZSByZWFzaW5lciBhdSBjb21wb3NhbnRcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7XHJcbiAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNUb1Nob3dcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0yID0gT2JqZWN0LmtleXMobmV3Q29sdW1uc1RvU2hvdyk7XHJcbiAgICBjb25zdCBwcmVmZXJlbmNlOiBhbnkgPSB7XHJcbiAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgIGlkVXNlcjogMSxcclxuICAgICAgcHJlZmVybmVjZVR5cGU6ICdQUkVGX09SREVSJyxcclxuICAgICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgIH07XHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuICAgIC8vIHN5bmNyb25pc2VyIGxlcyBjaGFuZ2VtZW50IGF2ZWMgbGUgYmFja2VuZFxyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgb25DdXN0b21BY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkVWRU5UIDogXCIsIGV2ZW50KTtcclxuXHJcbiAgICBpZiAoZXZlbnQuYWN0aW9uID09PSBcInZpZXdcIikge1xyXG4gICAgICB0aGlzLndpbmRvd1NlcnZpY2Uub3BlbihcclxuICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pbmkgQ1YgVkNHUCcsXHJcbiAgICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ3NvbWUgdGV4dCB0byBwYXNzIGludG8gdGVtcGxhdGUnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlTmFpc3NhbmNlOiBgJHtldmVudC5kYXRhLmRhdGVEZU5haXNzYW5jZX1gLFxyXG4gICAgICAgICAgICAgICAgcGF5c0RlTmFpc3NhbmNlOiBgJHtldmVudC5kYXRhLnBheXNEZU5haXNzYW5jZX1gLFxyXG4gICAgICAgICAgICAgICAgZ2VucmU6IGAke2V2ZW50LmRhdGEuZ2VucmV9YCxcclxuICAgICAgICAgICAgICAgIGZvbmN0aW9uT2ZmaWNpZWw6IGAke2V2ZW50LmRhdGEuZm9uY3Rpb25PZmZpY2llbH1gLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvRGVUZWxlcGhvbmVQYXJEZWZhdXQ6IGAke2V2ZW50LmRhdGEubnVtZXJvRGVUZWxlcGhvbmVQYXJEZWZhdXR9YCxcclxuICAgICAgICAgICAgICAgIHR5cGVEZUNvbnRyYXQ6IGAke2V2ZW50LmRhdGEudHlwZURlQ29udHJhdH1gLFxyXG4gICAgICAgICAgICAgICAgYWRyZXNzZUVtYWlsUGFyRGVmYXV0OiBgJHtldmVudC5kYXRhLmFkcmVzc2VFbWFpbFBhckRlZmF1dH1gLFxyXG4gICAgICAgICAgICAgICAgc29jaWV0ZURBcHBhcnRlbmFuY2U6IGAke2V2ZW50LmRhdGEuc29jaWV0ZURBcHBhcnRlbmFuY2V9YCxcclxuICAgICAgICAgICAgICAgIGhhbmRpY2FwOiBgJHtldmVudC5kYXRhLmhhbmRpY2FwfWAsXHJcbiAgICAgICAgICAgICAgICBub21QZXJzb25uZUVuQ2FzRHVyZ2VuY2U6IGAke2V2ZW50LmRhdGEubm9tUGVyc29ubmVFbkNhc0R1cmdlbmNlfWAsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFsZXJ0KGBDdXN0b20gZXZlbnQgJyR7ZXZlbnQuYWN0aW9ufScgZmlyZWQgb24gcm93IOKEljogJHtldmVudC5kYXRhLmlkVmluY2l9YCk7XHJcbiAgICAgIC8vIGNvbnN0IGFjdGl2YXRlT3RoZXJUYWIgPSB0cnVlO1xyXG4gICAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlQWN0aXZlVGFiKGFjdGl2YXRlT3RoZXJUYWIpO1xyXG4gICAgICB0aGlzLmlkQ29sbGFib3JhdGV1ci5lbWl0KGV2ZW50LmRhdGEuaWRWaW5jaSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKCBTaG93Y2FzZURpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAvLyAgIGNvbnRleHQ6IHtcclxuICAgICAgLy8gICAgIHRpdGxlOiAnVGhpcyBpcyBhIHRpdGxlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbXBvbmVudCcsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oZGlhbG9nLCB7IGNvbnRleHQ6ICd0aGlzIGlzIHNvbWUgYWRkaXRpb25hbCBkYXRhIHBhc3NlZCB0byBkaWFsb2cnIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZ3MgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xyXG4gIH1cclxufVxyXG4iXX0=