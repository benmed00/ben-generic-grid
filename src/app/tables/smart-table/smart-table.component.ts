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
  AfterViewInit
} from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { LocalDataSource, ServerDataSource } from "ng2-smart-table";
import { CustomRenderComponent } from "./custom-render.component";
import { SmartTableData, SmartTableService } from "../smart-table.service";
import { BehaviorSubject, Observable } from "rxjs";
import { log } from "util";
// import { settings } from "cluster";
// import { CONFIG_SETTINGS } from "assets/utils/settings";explorer
// import { CONFIG_SETTINGS } from "assets/utils/settings";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "generic-datagrid",
  styleUrls: ["./smart-table.component.scss"],
  templateUrl: "./smart-table.component.html"
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTableComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() config: Object = {};
  @Input() datafromServer: any;
  @ViewChild("ng2smart") ng2smart;

  data: any[];
  // source: LocalDataSource = new LocalDataSource();
  newSettings: any;
  setting: Observable<any>;
  settings: any;
  columnnToDisplay: any;
  settingsOrigine: any;
  selectedItem: any;
  columns: any;
  selectedItemNgModel: any;
  vinciSettings: any;
  titlesArray = [];
  columnsArrayOfObjects = [];

  panelOpenState = false;

  selectedSetting: any[];
  // source: ServerDataSource;
  source: LocalDataSource = new LocalDataSource();
  constructor(
    public service: SmartTableService,
    private componentFactoryResolver: ComponentFactoryResolver,
    http: HttpClient
  ) {
    this.settingsOrigine = Object.assign({}, this.service.getSettings());
    // console.log(" Original Setttings : ", this.settingsOrigine);
    // this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
    //   .filter(key => this.settingsOrigine.columns[key].display !== "false")
    //   .reduce((newColumns, column) => {
    //     newColumns[column] = this.settingsOrigine.columns[column];
    //     // console.log("after reduce : ", newColumns);
    //     return newColumns;
    //   }, {});

    // this.service.getSettingsFromNodeBckend().subscribe(settings => {
    //   console.log(" Response From backend : ", settings);
    //   this.settingsOrigine = settings;
    // });

    if (this.settingsOrigine) {
      this.columnnToDisplay = Object.keys(this.settingsOrigine.columns)
        .filter(key => this.settingsOrigine.columns[key].display !== "false")
        .reduce((newColumns, column) => {
          newColumns[column] = this.settingsOrigine.columns[column];
          return newColumns;
        }, {});

      this.settings = Object.assign({}, this.settingsOrigine, {
        columns: this.columnnToDisplay
      });
    }

    // this.settingsOrigine = Object.assign({}, res);

    // tester pour le parametre "display"

    // console.log("columnn To Display : ", this.columnnToDisplay);

    // this.source = new ServerDataSource(http, { endPoint: 'datafromServer' }); // datafromServer : URL where the Settings object will be provided

    // this.source = new LocalDataSource();
    // this.service.getdata().subscribe(data => {
    //   this.source.load(data);
    // });

    // this.source = new ServerDataSource(http, {
    //   endPoint: "http://localhost:3000/data"
    // });
    // this.sourceServer = this.datafromServer;

    this.source = new LocalDataSource();
    this.service.getdata().subscribe(data => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
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
    if (this.settingsOrigine) {

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


    }
  }

  ngAfterViewInit(): void {
    this.service.getdata().subscribe(data => {
      this.source.load(data);
    });
    // throw new Error("Method not implemented.");
  }

  selectColomns(columnsToShow) {
    // Tableau des identifiant des colonnes decocher
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

    // Envoyer les modification au backend
    this.service.updateSettings(this.settingsOrigine);
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
    console.log('APPEL FUNCTION hideColumnId() ' + changes);
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

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData.name += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.columnsArrayOfObjects,
      event.previousIndex,
      event.currentIndex
    );

    const newColumnsToShow = this.columnsArrayOfObjects.reduce(
      (newColumnsObject, arrayObject) => {
        newColumnsObject[arrayObject.key] = this.columns[arrayObject.key];
        return newColumnsObject;
      },
      {}
    );

    // cree un objet settings pour le reasiner au composant
    this.settings = Object.assign({}, this.settings, {
      columns: newColumnsToShow
    });

    // syncroniser les changement avec le backend
    this.service.updateSettings(this.settings);
  }

  ngOnDestroy(): void {
    console.log('settings : ' + JSON.stringify(this.settings));
  }
}
