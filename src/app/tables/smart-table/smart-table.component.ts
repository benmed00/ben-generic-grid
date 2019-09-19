import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  AfterViewInit,
  TemplateRef,
  EventEmitter,
  Output
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { CustomRenderComponent } from '../../shared/renderComponents/custom-render.component';
import { SmartTableData, SmartTableService } from '../smart-table.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { log, debug, isNullOrUndefined } from 'util';
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from '@angular/common/http';
import { Preferences } from '../../../app/shared/enum/preferences_model';
import { $$ } from 'protractor';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

declare var Liferay : any;
@Component({
  selector: 'generic-datagrid',
  styleUrls: ['./smart-table.component.scss'],
  templateUrl: './smart-table.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTableComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() config: any;
  @Input() datafromServer: any[];
  @ViewChild('ng2smart') ng2smart;

  data: any[];
  // source: LocalDataSource = new LocalDataSource();
  newSettings: any;
  setting: Observable<any>;
  settings: any;
  columnnToDisplay: any;
  settingsOrigine: any;
  selectedItem: string[];
  columns: any;
  selectedItemNgModel: any;
  vinciSettings: any;
  titlesArray = [];
  columnsArrayOfObjects = [];

  disable: boolean = false;

/* Variables meants for ************/
  filterValues: string[];
  searchLabels: string[] = [];
  ValueFilters: [string];
  ArrayFilters: Array<string>;
  selectedItem2: string[] = [];
/* ********************************/

  panelOpenState = false;

  selectedSetting: any[];
  // source: ServerDataSource;
  @Output() dataEvent = new EventEmitter<any>();
  @Output() ligneData = new EventEmitter<any>();
  @Output() eventPreference = new EventEmitter<any>();

  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  // @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;

  source: LocalDataSource = new LocalDataSource();
  constructor(
    public service: SmartTableService,
    private componentFactoryResolver: ComponentFactoryResolver,
    http: HttpClient,
    private windowService: NbWindowService,
    private router: Router
  ) {
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

  ngOnInit(): void {

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

      this.titlesArray = Array.from(
        Object.keys(this.settings.columns),
        k => this.settings.columns[k].title
      );
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

      const preference: any = {
        idTable: 1,
        idUser: 1,
        preferneceType: 'PREF_FILTER',
        roleUser: 'rh',
        value: this.searchLabels
      };

      // this.service.updatePreferences(preference); // synchroniser les preferences

      const arrayValue = Array.from(
        Object.keys(filterValue.filter.filters),
        k => [
          filterValue.filter.filters[k].search,
          filterValue.filter.filters[k].field
        ]
      );
      // console.log('arrayValue : ', arrayValue );

    });
    /* ******************************************************************************************/
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }

  selectColomns(columnsToShow) {
    // if( this.selectedItem.length > 3 ) return;
    // Tableau des identifiant des colonnes decocher

    // this.selectedItem.includes

    // console.log("Colonnes à afficher :", columnsToShow);
    // console.log(" Selected Items : ", this.selectedItem);

    const unselected = Object.keys(this.columns).filter(
      x => !(columnsToShow || []).includes(x)
    );

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

    const preference: any = {
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

  hideColomnId(): void {
    // this.newSettings = {};
    this.settings.columns.id.title = 'iddddd';
    this.newSettings = this.settings;
    // console.log("this.settings " + this.newSettings);
    this.settings = Object.assign({}, this.newSettings);
    // console.log("this.settings " + this.settings);
    console.log('APPEL FUNCTION hideColumnId() ');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log( " NG ON CHANGE " );
    // console.log("APPEL de l'evenement ngOnChanges() ", changes);
  }

  appliquerLesFiltres() {
    const filtersArray = [];
    this.columnsArrayOfObjects.forEach(element => {

      const filterData: string = this.settingsOrigine.columns[element.key].filterData;
      if (filterData !== undefined &&  filterData.length > 0) {
        filtersArray.push({ field: element.key, search: filterData });
      }
    });

    if (filtersArray.length > 0){
      this.source.setFilter(filtersArray, false);
    }

  }

  onSearch(query: string = '') {
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData.name += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
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
    } else {
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
    const preference: any = {
      idTable: 1,
      idUser: userId,
      roleUser: effectifRole,
      preferences : [
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

    let preferences: any = {
      preferences : [
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.columnsArrayOfObjects,
      event.previousIndex,
      event.currentIndex
    );
    const arrayOfItemArranged: string[] = [];
    const newColumnsToShow = this.columnsArrayOfObjects.reduce(
      (newColumnsObject, arrayObject) => {
        arrayOfItemArranged.unshift(arrayObject.key);
        // console.log("Array Of Item Arranged : ", arrayOfItemArranged);
        newColumnsObject[arrayObject.key] = this.columns[arrayObject.key];
        return newColumnsObject;
      },
      {}
    );
    // cree un objet settings pour le reasigner au composant
    this.settings = Object.assign({}, this.settings, {
      columns: newColumnsToShow
    });
    this.selectedItem2 = Object.keys(newColumnsToShow);
    const preference: any = {
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

  onCustomAction( event) {

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

  ngOnDestroy(): void {
    console.log('settings : ' + JSON.stringify(this.settings));
  }
}
