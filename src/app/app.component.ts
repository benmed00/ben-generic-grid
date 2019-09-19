/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  TemplateRef
} from "@angular/core";
import { AppService } from "./app.service";
import { SmartTableService } from "./tables/smart-table.service";
import { NbWindowService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table/lib/lib/data-source/local/local.data-source";
declare var Liferay: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  settings: any;
  data: any[];
  dataFromLifRay: any[];
  userData: any;
  active: boolean;
  listActive = true;
  dossierActive = false;
  dataLigneEvent: any;

  selectedItem: any;
  searchLabels: any;
  selectedItem2: any;
  source: any;
  columns: any;
  preference: any;

  @ViewChild("contentTemplate") contentTemplate: TemplateRef<any>;
  // @Output() ligneData = new EventEmitter<any>();

  constructor(
    public service: AppService,
    public smartTableService: SmartTableService,
    private windowService: NbWindowService
  ) {}

  ngOnInit(): void {

    localStorage.setItem('user_id', "3");

    let settingsSansFonction = '';
    // this.settings = this.service.getLocalSettings();

    this.service.getSettings("rh", 3, 1).subscribe(settings => {
      // this.settings = settings;
      this.settings = Object.assign({}, settings, {
        rowClassFunction: (row) => {
          switch (row.data.statutDeLaFicheMobilite) {
          case 'Brouillon': return 'consulterModifier';
          case 'En cours': return 'consulterModifier';
          case 'Refusée DC': return 'consulterModifier';
          case 'Refusée DA': return 'consulterModifier';
          case 'Annulée': return 'creerConsulter';
          case 'Validée': return 'creerConsulter';
          case 'Diffusée': return 'creerConsulter';
          case 'Archivée': return 'creerConsulter';
          default: return 'creer';
          }
        }
      });

      this.columns = Object.assign({}, settings.columns);
      console.log(" SETTINGS : ", this.settings);
    });

    // console.log(" Active tabs value : ", this.activeTabs);

    // this.service.getData().subscribe(settings => {
    //   this.data = data;
    //   console.log(" DATA : ", this.data);
    // });

    // this.dataFromLifRay = this.service.getDataFromLifeRay();

    // this.data = this.service.getData();

    this.data = [
      {name: 'Jai', createdBy: 1, statutDeLaFicheMobilite: '', status: 5},
      {name: 'Jack', createdBy: 2, statutDeLaFicheMobilite: 'Brouillon', status: 4},
      {name: 'Jack', createdBy: 3, statutDeLaFicheMobilite: 'En cours', status: 1},
      {name: 'Jack', createdBy: 4, statutDeLaFicheMobilite: 'Refusée DC', status: 2},
      {name: 'Jack', createdBy: 5, statutDeLaFicheMobilite: 'Refusée DA', status: 3},
      {name: 'Jack', createdBy: 6, statutDeLaFicheMobilite: 'Annulée', status: 6},
      {name: 'Jack', createdBy: 7, statutDeLaFicheMobilite: 'Validée', status: 7},
      {name: 'Jack', createdBy: 8, statutDeLaFicheMobilite: 'Diffusée', status: 8},
      {name: 'Jack', createdBy: 9, statutDeLaFicheMobilite: 'Archivée', status: 9},
    ];

    console.log(" DATA : ", this.data);

    console.log(" USER ID : ", localStorage.getItem('user_id'));

  }


  getPreferenceEvent(eventpreference) {

    console.log(" Event Preference : ", eventpreference);
    this.preference = eventpreference;
    // console.log(' Filtre & Sort : ', this.source.getFilteredAndSorted());
    let userId = 1;
    let effectifRole = "rh";
    if (Liferay !== "undefined") {
      userId = Liferay.ThemeDisplay.getUserId();
      effectifRole = Liferay.effectifRole;
    }
    const preference: any = {
      idTable: 1,
      idUser: userId,
      roleUser: effectifRole,
      preferences: this.preference.preferences
    };

    console.log("PREFERENCES", preference);

    this.service.updatePreferencesObject(preference); // synchroniser les preferences

    // alert(` Vos préférences ont étés sauvegardées `);
  }

  savePreferences() {}

  onChangedTab(event) {
    console.log(" changeTab : ", event);
    if (event.tabTitle === "Dossier Collaborateur") {
      this.listActive = false;
      this.dossierActive = true;
    } else {
      this.listActive = true;
      this.dossierActive = false;
    }
  }

  getDataFromLigne(event: any) {
    console.log("EVENT in app", event);
    this.windowService.open(this.contentTemplate, {
      title: "Mini CV VCGP",
      context: {
        text: "some text to pass into template",
        nom: `${event.data.nom}`,
        prenom1: `${event.data.prenom1}`,
        photo: `${event.data.photo}`,
        dateDeNaissance: `${event.data.dateDeNaissance}`,
        paysDeNaissance: `${event.data.paysDeNaissance}`,
        genre: `${event.data.genre}`,
        fonctionOfficiel: `${event.data.fonctionOfficiel}`,
        numeroDeTelephoneParDefaut: `${event.data.numeroDeTelephoneParDefaut}`,
        typeDeContrat: `${event.data.typeDeContrat}`,
        adresseEmailParDefaut: `${event.data.adresseEmailParDefaut}`,
        societeDAppartenance: `${event.data.societeDAppartenance}`,
        handicap: `${event.data.handicap}`,
        nomPersonneEnCasDurgence: `${event.data.nomPersonneEnCasDurgence}`
      }
    });
  }

  getdataEvent(event) {
    console.log("EVENT : ", event);
    if (event.action === "view") {
      this.getDataFromLigne(event);
    } else if (event.action === "consulter") {
      this.listActive = false;
      this.dossierActive = true;
      this.userData = event;
      console.log(" ID Utilisateur : ", this.userData);
    }
  }
}
