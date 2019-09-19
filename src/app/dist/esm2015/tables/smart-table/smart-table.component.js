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
        this.source.onChanged().subscribe(filterValue => {
            // console.log(" Evenement On Changed => Filter");
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
        // this.service.updateSettings(this.settingsOrigine);
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
        // console.log( " NG ON CHANGE " );
        // console.log("APPEL de l'evenement ngOnChanges() ", changes);
    }
    appliquerLesFiltres() {
        const filtersArray = [];
        this.columnsArrayOfObjects.forEach(element => {
            const filterData = this.settingsOrigine.columns[element.key].filterData;
            if (filterData !== undefined && filterData.length > 0) {
                filtersArray.push({ field: element.key, search: filterData });
            }
        });
        if (filtersArray.length > 0) {
            this.source.setFilter(filtersArray, false);
        }
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
        // console.log(" Filtre & Sort : ", this.source.getFilteredAndSorted());
        let userId = 1;
        let effectifRole = "rh";
        if (typeof Liferay !== 'undefined') {
            userId = Liferay.ThemeDisplay.getUserId();
            effectifRole = Liferay['effectifRole'];
        }
        const preference = {
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
        let preferences = {
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
        // cree un objet settings pour le reasigner au composant
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
export { SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VuZXJpYy1jb21wb25lbnRzLWR4Yy8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9zbWFydC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBS1QsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNFLHNDQUFzQztBQUN0QyxtRUFBbUU7QUFDbkUsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVV6QyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTBDOUIsWUFDUyxPQUEwQixFQUN6Qix3QkFBa0QsRUFDMUQsSUFBZ0IsRUFDUixhQUE4QixFQUM5QixNQUFjO1FBSmYsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDekIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTlCeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsaUJBQVksR0FBYSxFQUFFLENBQUM7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UUFDaEMsSUFBSTtRQUVKLHNEQUFzRDtRQUNwRCxlQUFlO1FBQ2YsK0RBQStEO1FBQy9ELE9BQU87UUFDUCxNQUFNO1FBRVIsaUdBQWlHO0lBQ25HLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0YsQ0FBQTtBQXJkVTtJQUFSLEtBQUssRUFBRTs7bURBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7MkRBQXVCO0FBQ1I7SUFBdEIsU0FBUyxDQUFDLFVBQVUsQ0FBQzs7cURBQVU7QUE4QnRCO0lBQVQsTUFBTSxFQUFFOztzREFBcUM7QUFDcEM7SUFBVCxNQUFNLEVBQUU7O3NEQUFxQztBQUNwQztJQUFULE1BQU0sRUFBRTs7NERBQTJDO0FBRXRCO0lBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztzQ0FBa0IsV0FBVzs0REFBTTtBQXRDckQsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFFNUIsazhFQUEyQztRQUMzQyxtREFBbUQ7OztLQUNwRCxDQUFDOzZDQTRDa0IsaUJBQWlCO1FBQ0Msd0JBQXdCO1FBQ3BELFVBQVU7UUFDTyxlQUFlO1FBQ3RCLE1BQU07R0EvQ2IsbUJBQW1CLENBdWQvQjtTQXZkWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSwgU2VydmVyRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XHJcbmltcG9ydCB7IEN1c3RvbVJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZW5kZXJDb21wb25lbnRzL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEsIFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtdGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBsb2csIGRlYnVnLCBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xyXG4vLyBpbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCJjbHVzdGVyXCI7XHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjtleHBsb3JlclxyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vYXBwL3NoYXJlZC9lbnVtL3ByZWZlcmVuY2VzX21vZGVsJztcclxuaW1wb3J0IHsgJCQgfSBmcm9tICdwcm90cmFjdG9yJztcclxuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYldpbmRvd1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBMaWZlcmF5IDogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dlbmVyaWMtZGF0YWdyaWQnLFxyXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcbiAgQElucHV0KCkgZGF0YWZyb21TZXJ2ZXI6IGFueVtdO1xyXG4gIEBWaWV3Q2hpbGQoJ25nMnNtYXJ0Jykgbmcyc21hcnQ7XHJcblxyXG4gIGRhdGE6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIG5ld1NldHRpbmdzOiBhbnk7XHJcbiAgc2V0dGluZzogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHNldHRpbmdzOiBhbnk7XHJcbiAgY29sdW1ublRvRGlzcGxheTogYW55O1xyXG4gIHNldHRpbmdzT3JpZ2luZTogYW55O1xyXG4gIHNlbGVjdGVkSXRlbTogc3RyaW5nW107XHJcbiAgY29sdW1uczogYW55O1xyXG4gIHNlbGVjdGVkSXRlbU5nTW9kZWw6IGFueTtcclxuICB2aW5jaVNldHRpbmdzOiBhbnk7XHJcbiAgdGl0bGVzQXJyYXkgPSBbXTtcclxuICBjb2x1bW5zQXJyYXlPZk9iamVjdHMgPSBbXTtcclxuXHJcbiAgZGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuLyogVmFyaWFibGVzIG1lYW50cyBmb3IgKioqKioqKioqKioqL1xyXG4gIGZpbHRlclZhbHVlczogc3RyaW5nW107XHJcbiAgc2VhcmNoTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIFZhbHVlRmlsdGVyczogW3N0cmluZ107XHJcbiAgQXJyYXlGaWx0ZXJzOiBBcnJheTxzdHJpbmc+O1xyXG4gIHNlbGVjdGVkSXRlbTI6IHN0cmluZ1tdID0gW107XHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBzZWxlY3RlZFNldHRpbmc6IGFueVtdO1xyXG4gIC8vIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgZGF0YUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGxpZ25lRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBldmVudFByZWZlcmVuY2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJykgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHNvdXJjZTogTG9jYWxEYXRhU291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNlcnZpY2U6IFNtYXJ0VGFibGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHdpbmRvd1NlcnZpY2U6IE5iV2luZG93U2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIC8vIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXJ2aWNlLmdldFNldHRpbmdzKCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIgT3JpZ2luYWwgU2V0dHRpbmdzIDogXCIsIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICAgIC8vIHRoaXMuY29sdW1ublRvRGlzcGxheSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpXHJcbiAgICAvLyAgIC5maWx0ZXIoa2V5ID0+IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNba2V5XS5kaXNwbGF5ICE9PSBcImZhbHNlXCIpXHJcbiAgICAvLyAgIC5yZWR1Y2UoKG5ld0NvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgLy8gICAgIG5ld0NvbHVtbnNbY29sdW1uXSA9IHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbY29sdW1uXTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImFmdGVyIHJlZHVjZSA6IFwiLCBuZXdDb2x1bW5zKTtcclxuICAgIC8vICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgIC8vICAgfSwge30pO1xyXG4gICAgLy8gdGhpcy5zZXR0aW5nc09yaWdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xyXG4gICAgLy8gdGVzdGVyIHBvdXIgbGUgcGFyYW1ldHJlIFwiZGlzcGxheVwiXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNvbHVtbm4gVG8gRGlzcGxheSA6IFwiLCB0aGlzLmNvbHVtbm5Ub0Rpc3BsYXkpO1xyXG4gICAgLy8gdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZShodHRwLCB7IGVuZFBvaW50OiAnZGF0YWZyb21TZXJ2ZXInIH0pOyAvLyBkYXRhZnJvbVNlcnZlciA6IFVSTCB3aGVyZSB0aGUgU2V0dGluZ3Mgb2JqZWN0IHdpbGwgYmUgcHJvdmlkZWRcclxuICAgIC8vIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UoaHR0cCwge1xyXG4gICAgLy8gICBlbmRQb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF0YVwiXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHRoaXMuc291cmNlU2VydmVyID0gdGhpcy5kYXRhZnJvbVNlcnZlcjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8qIEdFVFRJTkcgREFUQSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHRoaXMuc291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZSgpOyAvLyBpbnN0YW5jaWVyIGwnb2JqZXQgc291cmNlXHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFmcm9tU2VydmVyOyAvLyByZWNldm9pciBsZXMgZG9ubsOpZXMgZGVwdWlzIGwnZXh0ZXJpZXVyZVxyXG4gICAgdGhpcy5zb3VyY2UubG9hZCh0aGlzLmRhdGEpOyAvLyBmb21hdGVyIGxlcyBkb25uZXIgcG91ciBldHJlIGluZWdyZXIgw6AgbCdvYmpldCBkZXMgZG9ubsOpZXMgY29uc29tYWJsZSBwYXIgbGUgZGF0YUdyaWRcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lID0gdGhpcy5jb25maWc7IC8vIHJlY3VwZXJlciBjb21tZSBpbnB1dFxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIFNldHRpbmdzIE9yaWdpbmUgOiBcIiwgIHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuXHJcblxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzT3JpZ2luZSkge1xyXG5cclxuICAgICAgdGhpcy5zb3VyY2Uuc2V0U29ydChbeyBmaWVsZDogJ2lkJywgZGlyZWN0aW9uOiAnYXNjJyB9XSk7XHJcbiAgICAgIHRoaXMuY29sdW1ublRvRGlzcGxheSA9IE9iamVjdC5rZXlzKHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnMpXHJcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1trZXldLmRpc3BsYXkgIT09ICdmYWxzZScpXHJcbiAgICAgICAgLnJlZHVjZSgobmV3Q29sdW1ucywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2NvbHVtbl07XHJcbiAgICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzT3JpZ2luZSwge1xyXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1ublRvRGlzcGxheVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1ucyk7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IE9iamVjdC5rZXlzKHRoaXMuY29sdW1ublRvRGlzcGxheSk7XHJcblxyXG4gICAgICB0aGlzLnRpdGxlc0FycmF5ID0gQXJyYXkuZnJvbShcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNldHRpbmdzLmNvbHVtbnMpLFxyXG4gICAgICAgIGsgPT4gdGhpcy5zZXR0aW5ncy5jb2x1bW5zW2tdLnRpdGxlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zQXJyYXlPZk9iamVjdHMucHVzaCh7XHJcbiAgICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtZW50XS50aXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCIgbCdPYmpldCBDb2xvbm5lcyA6IFwiLCB0aGlzLmNvbHVtbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzT3JpZ2luZSkge1xyXG4gICAgICB0aGlzLmFwcGxpcXVlckxlc0ZpbHRyZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXQgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgLy8gICBwcmVmZXJlbmNlcyA6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAvLyAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgLy8gICAgICAgdmFsdWVzOiB0aGlzLnNlbGVjdGVkSXRlbTJcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgLy8gICAgICAgdmFsdWVzOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1NPUlQnLFxyXG4gICAgLy8gICAgICAgdmFsdWVzOiBbJyddXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICBdXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHRoaXMuZXZlbnRQcmVmZXJlbmNlLmVtaXQocHJlZmVyZW5jZSk7XHJcblxyXG4gICAgLyogR2VyZXIgbGEgcHJlZmVyZW5lIHNhdXZlZ2FyZGVyIGxlcyBmaWx0cmVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLy8gVE8tRG8gOiBnZXQgdGhlIHRyZWF0ZW1lbnQgb3V0IG9mIHRoZSBzdWJzY3JpYmVcclxuICAgIC8vIFRPLURvIDogdW5zdWJzY2liZSBhbGwgdGhlIHN1YnNjcmlwdGlvbnNcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoZmlsdGVyVmFsdWUgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBFdmVuZW1lbnQgT24gQ2hhbmdlZCA9PiBGaWx0ZXJcIik7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsdGVyVmFsdWUuZmlsdGVyLmZpbHRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgRmlsdGVycyBWYWx1ZSA6IFwiLCBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1tpbmRleF0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTGFiZWxzW2luZGV4XSA9IGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5maWVsZCArICc6JyArIGZpbHRlclZhbHVlLmZpbHRlci5maWx0ZXJzW2luZGV4XS5zZWFyY2g7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcgc2VhcmNoTGFiZWxzIDogJywgdGhpcy5zZWFyY2hMYWJlbHMpO1xyXG5cclxuICAgICAgY29uc3QgcHJlZmVyZW5jZTogYW55ID0ge1xyXG4gICAgICAgIGlkVGFibGU6IDEsXHJcbiAgICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICAgIHByZWZlcm5lY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaExhYmVsc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2UpOyAvLyBzeW5jaHJvbmlzZXIgbGVzIHByZWZlcmVuY2VzXHJcblxyXG4gICAgICBjb25zdCBhcnJheVZhbHVlID0gQXJyYXkuZnJvbShcclxuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVycyksXHJcbiAgICAgICAgayA9PiBbXHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1trXS5zZWFyY2gsXHJcbiAgICAgICAgICBmaWx0ZXJWYWx1ZS5maWx0ZXIuZmlsdGVyc1trXS5maWVsZFxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2FycmF5VmFsdWUgOiAnLCBhcnJheVZhbHVlICk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9tbnMoY29sdW1uc1RvU2hvdykge1xyXG4gICAgLy8gaWYoIHRoaXMuc2VsZWN0ZWRJdGVtLmxlbmd0aCA+IDMgKSByZXR1cm47XHJcbiAgICAvLyBUYWJsZWF1IGRlcyBpZGVudGlmaWFudCBkZXMgY29sb25uZXMgZGVjb2NoZXJcclxuXHJcbiAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbS5pbmNsdWRlc1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29sb25uZXMgw6AgYWZmaWNoZXIgOlwiLCBjb2x1bW5zVG9TaG93KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIFNlbGVjdGVkIEl0ZW1zIDogXCIsIHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuXHJcbiAgICBjb25zdCB1bnNlbGVjdGVkID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKS5maWx0ZXIoXHJcbiAgICAgIHggPT4gIShjb2x1bW5zVG9TaG93IHx8IFtdKS5pbmNsdWRlcyh4KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3Rpb25uZXIgbGVzIGNvbGxvbmVzIMOgIEFmZmljaGVyXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zVG9TaG93ID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zKVxyXG4gICAgICAuZmlsdGVyKHggPT4gKGNvbHVtbnNUb1Nob3cgfHwgW10pLmluY2x1ZGVzKHgpKVxyXG4gICAgICAucmVkdWNlKChuZXdDb2x1bW5zLCBjb2x1bW4pID0+IHtcclxuICAgICAgICBuZXdDb2x1bW5zW2NvbHVtbl0gPSB0aGlzLmNvbHVtbnNbY29sdW1uXTsgLy8gcmVtcGxpcmUgdW4gb2JqZXQgYXZlYyBzZXVsZW1lbnQgbGVzIGNvbG9ubmVzIHF1aSBvbiB1biBpbmRleCBwb3VyIGV0cmUgYWZmaWNoZXJcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1ucztcclxuICAgICAgfSwge30pO1xyXG5cclxuICAgIC8vIGxlcyBvcHRpb24gYSBldHJlIGNvY2hlclxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjb2x1bW5zVG9TaG93O1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbnNBcnJheU9mT2JqZWN0czEgPSBbXTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBpbmRleCA6IFwiICsgaW5kZXggKyBcIiBlbGVtZW50IDogXCIgKyBlbGVtZW50KTtcclxuICAgICAgY29sdW1uc0FycmF5T2ZPYmplY3RzMS5zcGxpY2UoaW5kZXgsIDAsIHtcclxuICAgICAgICBrZXk6IGVsZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IG5ld0NvbHVtbnNUb1Nob3dbZWxlbWVudF0udGl0bGVcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzeW5jcm9uaXNhdGlvbiBlbnRyZSBsZSB0YWJsYXUgRFJBR1VBQkxFIGV0IGxlIGNvbXBvc2FudCBTRUxFQ1RcclxuICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzID0gY29sdW1uc0FycmF5T2ZPYmplY3RzMTtcclxuXHJcbiAgICAvLyByYWZyaWNoaXIgbGUgdGFibGVhdSBhdmVjIGxlIG5vdXZlbGxlIG9iamV0IHNldHRpbmdzXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywge1xyXG4gICAgICBjb2x1bW5zOiBuZXdDb2x1bW5zVG9TaG93XHJcbiAgICB9KTtcclxuICAgIC8vIGNyZWUgdW4gb2JqZWN0IGNvbG9tbnMvc2V0dGluZ3MgcXVpIGNudGllbnQgdG91cyBsZXMgY29sdW1ucyBtZW1lIGNldXggc3VwcHJpbWVyXHJcbiAgICAvLyBwb3VyIHBvdXZvaXIgbGVzIHJlYWZpY2hlciBhcHJlcyBzaSBsZXMgY2xpZW50XHJcblxyXG4gICAgLy8gQ3JlZSB1biBvYmpldCBzZXR0aW5ncyBlbiBjaGFuZ2VudCBsZXMgcGFyYW1ldHJlIDogZGlzcGxheT1cImZhbHNlXCJcclxuXHJcbiAgICAvKiBDaGFuZ2VyIGxhIHZhbGV1ciBkZSBsYSBwcm9wcml0ZSBkaXNwbGF5IGFwcmVzIGNoYXF1ZSBhY3Rpb24gKi9cclxuICAgIC8vIGNhY2hlciBsZXMgY29sb25uZXMgZGlzZWxlY3Rpb25uZXJcclxuICAgIHVuc2VsZWN0ZWQuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgdGhpcy5zZXR0aW5nc09yaWdpbmUuY29sdW1uc1tlbGVtXS5kaXNwbGF5ID0gJ2ZhbHNlJztcclxuICAgIH0pO1xyXG4gICAgLy8gRmFpcmUgYXBwYXJhaXRyZSBsZXMgY29sb25uZXMgc2VsZWN0aW9ubmVyXHJcbiAgICBjb2x1bW5zVG9TaG93LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NPcmlnaW5lLmNvbHVtbnNbZWxlbV0uZGlzcGxheSA9ICd0cnVlJztcclxuICAgIH0pO1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgIH07XHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICAvLyBFbnZveWVyIGxlcyBtb2RpZmljYXRpb24gYXUgYmFja2VuZFxyXG4gICAgLy8gdGhpcy5zZXJ2aWNlLnVwZGF0ZVNldHRpbmdzKHRoaXMuc2V0dGluZ3NPcmlnaW5lKTtcclxuICB9XHJcblxyXG4gIGhpZGVDb2xvbW5JZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMubmV3U2V0dGluZ3MgPSB7fTtcclxuICAgIHRoaXMuc2V0dGluZ3MuY29sdW1ucy5pZC50aXRsZSA9ICdpZGRkZGQnO1xyXG4gICAgdGhpcy5uZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2V0dGluZ3MgXCIgKyB0aGlzLm5ld1NldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm5ld1NldHRpbmdzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZXR0aW5ncyBcIiArIHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgY29uc29sZS5sb2coJ0FQUEVMIEZVTkNUSU9OIGhpZGVDb2x1bW5JZCgpICcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgLy8gY29uc29sZS5sb2coIFwiIE5HIE9OIENIQU5HRSBcIiApO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBUFBFTCBkZSBsJ2V2ZW5lbWVudCBuZ09uQ2hhbmdlcygpIFwiLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGFwcGxpcXVlckxlc0ZpbHRyZXMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJzQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICBjb25zdCBmaWx0ZXJEYXRhOiBzdHJpbmcgPSB0aGlzLnNldHRpbmdzT3JpZ2luZS5jb2x1bW5zW2VsZW1lbnQua2V5XS5maWx0ZXJEYXRhO1xyXG4gICAgICBpZiAoZmlsdGVyRGF0YSAhPT0gdW5kZWZpbmVkICYmICBmaWx0ZXJEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXJzQXJyYXkucHVzaCh7IGZpZWxkOiBlbGVtZW50LmtleSwgc2VhcmNoOiBmaWx0ZXJEYXRhIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZmlsdGVyc0FycmF5Lmxlbmd0aCA+IDApe1xyXG4gICAgICB0aGlzLnNvdXJjZS5zZXRGaWx0ZXIoZmlsdGVyc0FycmF5LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWFyY2gocXVlcnk6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnLS0gT25TZXJjaCBmdW5jdGlvbiAtLScpO1xyXG5cclxuICAgIC8vIGNyw6llIHVuIHRhYmxlYXV4IGR5bmFtaXF1ZSBiYXNlciBzdXIgbGVzIGNvbHVtbnMgZGUgbCdvYmplY3QgU2V0dGluZ2QsXHJcbiAgICAvLyBwb3VyIGxlIGRvbm5lciBjb21tZSBhdHRyaWJ1ZSBwb3VyIGxhIGZvbmN0aW9uIFwiLnNldEZpbHRlcigpXCJcclxuXHJcbiAgICBjb25zdCBzZWFyY2hBcnJheSA9IHRoaXMuY29sdW1uc0FycmF5T2ZPYmplY3RzLm1hcChjb2wgPT4ge1xyXG4gICAgICByZXR1cm4geyBmaWVsZDogY29sLmtleSwgc2VhcmNoOiBxdWVyeSB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hBcnJheSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2Uuc2V0RmlsdGVyKHNlYXJjaEFycmF5LCBmYWxzZSk7XHJcblxyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBzcGVjaWZ5aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSAnQU5EJyBvciAnT1InIHNlYXJjaFxyXG4gICAgLy8gKG1lYW5pbmcgYWxsIGNvbHVtbnMgc2hvdWxkIGNvbnRhaW4gc2VhcmNoIHF1ZXJ5IG9yIGF0IGxlYXN0IG9uZSlcclxuICAgIC8vICdBTkQnIGJ5IGRlZmF1bHQsIHNvIGNoYW5naW5nIHRvICdPUicgYnkgc2V0dGluZyBmYWxzZSBoZXJlXHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKSkge1xyXG4gICAgICBldmVudC5jb25maXJtLnJlc29sdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNhdmVDb25maXJtKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzYXZlPycpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGEubmFtZSArPSAnICsgYWRkZWQgaW4gY29kZSc7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3VyaWVTdXJMaWduZShldmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0VWRU5UICcsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY3JlYXRlPycpKSB7XHJcbiAgICAgIGV2ZW50Lm5ld0RhdGEubmFtZSArPSAnICsgYWRkZWQgaW4gY29kZSc7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVzb2x2ZShldmVudC5uZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LmNvbmZpcm0ucmVqZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlUHJlZmVyZW5jZXMoKSB7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCIgRmlsdHJlICYgU29ydCA6IFwiLCB0aGlzLnNvdXJjZS5nZXRGaWx0ZXJlZEFuZFNvcnRlZCgpKTtcclxuXHJcbiAgICBsZXQgdXNlcklkID0gMTtcclxuICAgIGxldCBlZmZlY3RpZlJvbGUgPSBcInJoXCI7XHJcbiAgICBpZiAodHlwZW9mIExpZmVyYXkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHVzZXJJZCA9IExpZmVyYXkuVGhlbWVEaXNwbGF5LmdldFVzZXJJZCgpO1xyXG4gICAgICBlZmZlY3RpZlJvbGUgPSBMaWZlcmF5WydlZmZlY3RpZlJvbGUnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiB1c2VySWQsXHJcbiAgICAgIHJvbGVVc2VyOiBlZmZlY3RpZlJvbGUsXHJcbiAgICAgIHByZWZlcmVuY2VzIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgICAgIHZhbHVlczogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX0ZJTFRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VhcmNoTGFiZWxzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfU09SVCcsXHJcbiAgICAgICAgICB2YWx1ZXM6IFsnJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IHByZWZlcmVuY2VzOiBhbnkgPSB7XHJcbiAgICAgIHByZWZlcmVuY2VzIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgICAgIHZhbHVlczogdGhpcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VsZWN0ZWRJdGVtMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX0ZJTFRFUicsXHJcbiAgICAgICAgICB2YWx1ZXM6IHRoaXMuc2VhcmNoTGFiZWxzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfU09SVCcsXHJcbiAgICAgICAgICB2YWx1ZXM6IFsnJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgICB0aGlzLmV2ZW50UHJlZmVyZW5jZS5lbWl0KHByZWZlcmVuY2VzKTtcclxuXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXNPYmplY3QocHJlZmVyZW5jZSk7IC8vIHN5bmNocm9uaXNlciBsZXMgcHJlZmVyZW5jZXNcclxuXHJcbiAgICAvLyBhbGVydChgIFZvcyBwcsOpZsOpcmVuY2VzIG9udCDDqXTDqXMgc2F1dmVnYXJkw6llcyBgKTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgbW92ZUl0ZW1JbkFycmF5KFxyXG4gICAgICB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cyxcclxuICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgZXZlbnQuY3VycmVudEluZGV4XHJcbiAgICApO1xyXG4gICAgY29uc3QgYXJyYXlPZkl0ZW1BcnJhbmdlZDogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IG5ld0NvbHVtbnNUb1Nob3cgPSB0aGlzLmNvbHVtbnNBcnJheU9mT2JqZWN0cy5yZWR1Y2UoXHJcbiAgICAgIChuZXdDb2x1bW5zT2JqZWN0LCBhcnJheU9iamVjdCkgPT4ge1xyXG4gICAgICAgIGFycmF5T2ZJdGVtQXJyYW5nZWQudW5zaGlmdChhcnJheU9iamVjdC5rZXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQXJyYXkgT2YgSXRlbSBBcnJhbmdlZCA6IFwiLCBhcnJheU9mSXRlbUFycmFuZ2VkKTtcclxuICAgICAgICBuZXdDb2x1bW5zT2JqZWN0W2FycmF5T2JqZWN0LmtleV0gPSB0aGlzLmNvbHVtbnNbYXJyYXlPYmplY3Qua2V5XTtcclxuICAgICAgICByZXR1cm4gbmV3Q29sdW1uc09iamVjdDtcclxuICAgICAgfSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgICAvLyBjcmVlIHVuIG9iamV0IHNldHRpbmdzIHBvdXIgbGUgcmVhc2lnbmVyIGF1IGNvbXBvc2FudFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHtcclxuICAgICAgY29sdW1uczogbmV3Q29sdW1uc1RvU2hvd1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbTIgPSBPYmplY3Qua2V5cyhuZXdDb2x1bW5zVG9TaG93KTtcclxuICAgIGNvbnN0IHByZWZlcmVuY2U6IGFueSA9IHtcclxuICAgICAgaWRUYWJsZTogMSxcclxuICAgICAgaWRVc2VyOiAxLFxyXG4gICAgICBwcmVmZXJuZWNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICByb2xlVXNlcjogJ3JoJyxcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWRJdGVtMlxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlKTsgLy8gc3luY2hyb25pc2VyIGxlcyBwcmVmZXJlbmNlc1xyXG4gICAgLy8gc3luY3JvbmlzZXIgbGVzIGNoYW5nZW1lbnQgYXZlYyBsZSBiYWNrZW5kXHJcbiAgICAvLyB0aGlzLnNlcnZpY2UudXBkYXRlU2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBvbkN1c3RvbUFjdGlvbiggZXZlbnQpIHtcclxuXHJcbiAgICB0aGlzLmRhdGFFdmVudC5lbWl0KGV2ZW50KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdFVkVOVCA6ICcsIGV2ZW50KTtcclxuICAgIC8vIGlmIChldmVudC5hY3Rpb24gPT09ICd2aWV3Jykge1xyXG4gICAgLy8gICB0aGlzLmRhdGFFdmVudC5lbWl0KGV2ZW50KTtcclxuICAgICAgLy8gdGhpcy53aW5kb3dTZXJ2aWNlLm9wZW4oXHJcbiAgICAgIC8vICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSxcclxuICAgICAgLy8gICAgIHtcclxuICAgICAgLy8gICAgICAgdGl0bGU6ICcgTWluaSBDViAnLFxyXG4gICAgICAvLyAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgLy8gICAgICAgICAgIHRleHQ6ICdzb21lIHRleHQgdG8gcGFzcyBpbnRvIHRlbXBsYXRlJyxcclxuICAgICAgLy8gICAgICAgICAgIG5vbTogYCR7ZXZlbnQuZGF0YS5ub219YCxcclxuICAgICAgLy8gICAgICAgICAgIHByZW5vbTE6IGAke2V2ZW50LmRhdGEucHJlbm9tMX1gLFxyXG4gICAgICAvLyAgICAgICAgICAgcGhvdG86IGAke2V2ZW50LmRhdGEucGhvdG99YCxcclxuICAgICAgLy8gICAgICAgICAgIGRhdGVEZU5haXNzYW5jZTogYCR7ZXZlbnQuZGF0YS5kYXRlRGVOYWlzc2FuY2V9YCxcclxuICAgICAgLy8gICAgICAgICAgIHBheXNEZU5haXNzYW5jZTogYCR7ZXZlbnQuZGF0YS5wYXlzRGVOYWlzc2FuY2V9YCxcclxuICAgICAgLy8gICAgICAgICAgIGdlbnJlOiBgJHtldmVudC5kYXRhLmdlbnJlfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBmb25jdGlvbk9mZmljaWVsbGU6IGAke2V2ZW50LmRhdGEuZm9uY3Rpb25PZmZpY2llbGxlfWAsXHJcbiAgICAgIC8vICAgICAgICAgICBudW1lcm9EZVRlbGVwaG9uZVBhckRlZmF1dDogYCR7ZXZlbnQuZGF0YS5udW1lcm9EZVRlbGVwaG9uZVBhckRlZmF1dH1gLFxyXG4gICAgICAvLyAgICAgICAgICAgdHlwZURlQ29udHJhdDogYCR7ZXZlbnQuZGF0YS50eXBlRGVDb250cmF0fWAsXHJcbiAgICAgIC8vICAgICAgICAgICBhZHJlc3NlRW1haWxQYXJEZWZhdXQ6IGAke2V2ZW50LmRhdGEuYWRyZXNzZUVtYWlsUGFyRGVmYXV0fWAsXHJcbiAgICAgIC8vICAgICAgICAgICBzb2NpZXRlREFwcGFydGVuYW5jZTogYCR7ZXZlbnQuZGF0YS5zb2NpZXRlREFwcGFydGVuYW5jZX1gLFxyXG4gICAgICAvLyAgICAgICAgICAgaGFuZGljYXA6IGAke2V2ZW50LmRhdGEuaGFuZGljYXB9YCxcclxuICAgICAgLy8gICAgICAgICAgIG5vbVBlcnNvbm5lRW5DYXNEdXJnZW5jZTogYCR7ZXZlbnQuZGF0YS5ub21QZXJzb25uZUVuQ2FzRHVyZ2VuY2V9YCxcclxuICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyApO1xyXG4gICAgLy8gfSBlbHNlIGlmIChldmVudC5hY3Rpb24gPT09ICdjb25zdWx0ZXInKSB7XHJcbiAgICAgIC8vIGFsZXJ0KGBDdXN0b20gZXZlbnQgJyR7ZXZlbnQuYWN0aW9ufScgZmlyZWQgb24gcm93IOKEljogJHtldmVudC5kYXRhLnVzZXJJZH1gKTtcclxuICAgICAgLy8gY29uc3QgYWN0aXZhdGVPdGhlclRhYiA9IHRydWU7XHJcbiAgICAgIC8vIHRoaXMuc2VydmljZS51cGRhdGVBY3RpdmVUYWIoYWN0aXZhdGVPdGhlclRhYik7XHJcbiAgICAgIC8vIHRoaXMuZGF0YUV2ZW50LmVtaXQoZXZlbnQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKCBTaG93Y2FzZURpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAvLyAgIGNvbnRleHQ6IHtcclxuICAgICAgLy8gICAgIHRpdGxlOiAnVGhpcyBpcyBhIHRpdGxlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbXBvbmVudCcsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oZGlhbG9nLCB7IGNvbnRleHQ6ICd0aGlzIGlzIHNvbWUgYWRkaXRpb25hbCBkYXRhIHBhc3NlZCB0byBkaWFsb2cnIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZ3MgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xyXG4gIH1cclxufVxyXG4iXX0=