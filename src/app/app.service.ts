import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { ButtonViewComponent } from './shared/renderComponents/button-view.component';
import { SmartTableService } from './tables/smart-table.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  private _url3: string = 'http://localhost:3000';
  private _url5: string = 'http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider';
  private _url4: string = 'http://192.168.8.35:9097';
    // 192.168.8.35:9097/getSetting/rh/1/1
  private _urldata: string = 'http://vcgp-integration.francecentral.cloudapp.azure.com/o/cusers/list/3';
  private _url6: string = 'http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider';


  constructor(
    private _http: HttpClient,
    private serviceDataGrid: SmartTableService) {}

  getData() {
    return DATA_Grid; // from Local
    // return this._http.get<any[]>(this._urldata); // From remote with HTTP
  }

  getDataFromLifeRay(){
    return this._http.get<any[]>(this._urldata);
  }

  getLocalSettings() {
    return Object.assign({}, SETTINGS_SANS_FONCTION, {
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
    // return SETTINGS_CUSTOM_DISPLAY;
    // return SETTINGS_SANS_FONCTION;
    // return CONFIG_OBJECT_VINCI; // from Local
  }

  // getSettings() {
  getSettings(roleUser: string, idTable: number, idUser: number) {
    /* **************************************/
    // return CONFIG_OBJECT_VINCI; // from Local
    // return this._http.get<any>(this._url3 + "/settings"); // From remote with HTTP
    // .pipe(catchError(this.handleError));
    /* **************************************/
    // console.log(" Get Settings from Backend: ");
    let headers1 = new HttpHeaders();
    headers1.append('accept', '*/*');
    return this._http.get<any>(
      this._url5 + '/getSetting/' + roleUser + '/' + idTable + '/' + idUser,
      { headers: headers1 }
    );
  }

  updatePreferencesObject(preference: any) {

    console.log(' Service => Update preferences Object : ');

    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json').append('accept', '*/*');
    // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
    // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
    return (
      this._http
        // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
        .put(this._url6 + '/api/ui/preference/savePreference', preference, {
          headers: headers1
        })
        .subscribe({
          next: data => {
            console.log('after preference update: ', data);
          },
          error: err => {
            if (err.error instanceof Error) {
              console.log('Client-side error occured : ', err);
            } else {
              console.log('Server-side error occured : ', err);
            }
          }
        })
    );
    // .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

export interface TableVinciInterface {
  idVinci: number;
  name: string;
  button?: string;
  prenom: string;
  societe: string;
  fonctionOfficielle: string;
  affectation: string | number;
  periodeAffectation?: string;
  fonctionOperationnelle: string;
  statut: string;

  dateDeNaissance?:string;
  paysDeNaissance?:string;
  genre?:string;
  fonctionOfficiel?:string;
  numeroDeTelephoneParDefaut?:string;
  typeDeContrat?:string;
  adresseEmailParDefaut?:string;
  societeDAppartenance?:string;
  handicap?:string;
  nomPersonneEnCasDurgence?:string;
  photo?:string;
  prenom1?:string;
  nom?: string;

  filterValue?: string;
  userId?: number;

}

export const DATA_Grid: TableVinciInterface[] = [
  {
    userId: 123456,
    nom:'BENYAKOUB',
    prenom1: 'Moammed',
    photo:'https://media.licdn.com/dms/image/C5603AQFeYiRXPD3C4w/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=JTUs_pVgZeeYcRCkP2xdP8BMxpK8_7EMhCxrDuowajM',
    idVinci: 123456,
    name: 'LIMOURI',
    button: 'Button #1',
    prenom: 'Anouar',
    societe: 'VGCP',
    fonctionOfficielle: 'Architecte IT',
    affectation: 'Métro d air',
    periodeAffectation: '11/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Architecte appliquer',
    statut: 'Actif',
    dateDeNaissance:'28/01/1994',
    paysDeNaissance:'Lyon, France',
    genre:'Homme',
    fonctionOfficiel:'Chef de chantier',
    numeroDeTelephoneParDefaut:'+3378767648',
    typeDeContrat:'CDI',
    adresseEmailParDefaut:'anna@vinci.com',
    societeDAppartenance:'Vinci Constructions Grands Projets',
    handicap:'Non',
    nomPersonneEnCasDurgence:' Hugo Rousseau +33651889867 ',
  },
  {
    idVinci: 234567,
    name: 'DUPONT',
    prenom: 'François',
    societe: 'VGCP',
    fonctionOfficielle: 'Chef de projet',
    affectation: 'T3C',
    periodeAffectation: '27/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef de projet',
    statut: 'Inactif'
  },
  {
    idVinci: 829077,
    name: 'GARNIEF',
    prenom: 'Laurent',
    societe: 'DCB',
    fonctionOfficielle: 'Maçon',
    affectation: 'Affectation',
    periodeAffectation: '28/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef de chantier',
    statut: 'A compléter'
  },
  {
    idVinci: 766789,
    name: 'GAR',
    prenom: 'Laure',
    societe: 'Eeiffage',
    fonctionOfficielle: 'Peintre',
    affectation: 'Métro du Caire',
    periodeAffectation: '29/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef d\'équipe',
    statut: 'Disponible'
  },
  {
    idVinci: 345678,
    name: 'CHAOUC',
    prenom: 'Mohammed',
    societe: 'DXC',
    fonctionOfficielle: 'jconsultant SIRH',
    affectation: 'Métro de Copenhague ligne 4',
    periodeAffectation: '30/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'PPO',
    statut: 'Indisponible'
  },
  {
    idVinci: 456789,
    name: 'DUBO',
    prenom: 'MeidVinciy',
    societe: 'VINCI',
    fonctionOfficielle: 'Maçon',
    affectation: 'Métro de Copenhague ligne 4',
    periodeAffectation: '01/04/2019 - 31/09/2019',
    fonctionOperationnelle: 'Fonction opérationnel',
    statut: 'Sorti'
  },
  {
    idVinci: 567890,
    name: 'BENYAKOUB',
    prenom: 'Med',
    societe: 'DXC Technologie',
    fonctionOfficielle: 'Peintre',
    affectation: 'Aeroport international Arturo Merino Benitez',
    periodeAffectation: '26/04/2019 - 31/09/2019',
    fonctionOperationnelle: 'Couvreur',
    statut: 'Sorti'
  },
  {
    idVinci: 111111,
    name: 'LEBHAR',
    prenom: 'Naoufal',
    societe: 'DCB',
    fonctionOfficielle: 'Architecte',
    affectation: 'Pont de L\'Atlantique',
    periodeAffectation: '26/04/2019 - 01/12/2019',
    fonctionOperationnelle: 'Electicien',
    statut: 'Archivé'
  },
  {
    idVinci: 666666,
    name: 'TALAL',
    prenom: 'Mohssine',
    societe: 'DXC',
    fonctionOfficielle: 'Directeur de projet',
    affectation: 'Station d\'épuration de Bruxelles sud',
    periodeAffectation: '26/06/2019 - 31/12/2019',
    fonctionOperationnelle: 'Conducteur de trvail',
    statut: 'Actif'
  },
  {
    idVinci: 101112,
    name: 'ABARGHAZ',
    prenom: 'Eiffage',
    societe: '@karen',
    fonctionOfficielle: 'Consultante',
    affectation: 'Métro de Doha ligne rouge sud',
    periodeAffectation: '26/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Maçon',
    statut: 'Disponible'
  }
];

export const CONFIG_OBJECT_VINCI = {

  actions: {
    add: false,
    edit: false,
    delete: false,
    columnTitle:'',
    class:'action-column',
    custom: [
      {
        name: 'view',
        title: '<i class="nb-search"></i>',
      },
      {
        name: 'consulter',
        title: '<i class="nb-compose"></i>',
      },
      {
        name: 'ajouter',
        title: '<i class="nb-plus"></i>',
      }
    ],
  },
  columns: {
    button: {
      title: 'Button',
      type: 'custom',
      filter: false,
      display: 'false',
      renderComponent: ButtonViewComponent,
      onComponentInitFunction(instance) {
        instance.save.subscribe(row => {
          alert(`${row.name} saved!`)
        });
      }
    },
    idVinci: {
      title: 'ID VINCI',
      editable: 'false',
      addable: 'false',
      type: 'number',
      display: 'true',
      hideHeader: 'true',
      order: 0,
      filter: true,
      filterData: '1'
    },
    name: {
      title: 'Nom',
      type: 'string',
      filter: true,
      notShownField: 'false',
      order: 1,
      display: 'true',
    },
    prenom: {
      title: 'Prénom',
      type: 'html',
      order: 2,
      filter: true,
      display: 'true'
    },
    societe: {
      title: 'Société',
      type: 'string',
      order: 3,
      filter: true,
      display: 'false',
    },
    fonctionOfficielle: {
      title: 'Fonction officielle',
      type: 'html',
      filter: true,
      editor: {
        type: 'text',
        value: '<input  type=\'email\'>'
      },
      order: 4,
      display: 'false',
    },
    affectation: {
      title: 'Affectation',
      type: 'html',
      editor: {
        type: 'list',
        config: {
          selectText: 'Select...',
          list: [
            {
              value: 'jacob',
              title: 'jacob'
            },
            {
              value: 'hcglwjlwcgwwcgwcwj',
              title: 'hcglwjlwcgwwcgwcwj'
            },
            {
              value: 'Yassin',
              title: 'Yassin'
            },
            {
              value: 'Yass',
              title: 'Yass'
            },
            {
              value: 'Ann',
              title: 'Ann'
            },
            {
              value: 'TOTO',
              title: 'TOTO'
            },
            {
              value: 'Med',
              title: 'Med'
            },
            {
              value: 'BEn',
              title: 'BEn'
            },
            {
              value: 'mohammed benyakoub',
              title: 'mohammed benyakoub'
            },
            {
              value: 'SELLAMI',
              title: 'SELLAMI'
            },
            {
              value: 'talaL',
              title: 'talaL'
            },
            {
              value: '<b>Samantha</b>',
              title: 'Samantha'
            }
          ]
        }
      },
      order: 5,
      filter: true,
      display: 'false',
    },
    periodeAffectation: {
      title: 'Période d\'affectation',
      filter: true,
      order: 6,
      display: 'false',
    },
    fonctionOperationnelle: {
      title: 'Fonction opérationnelle',
      editable: 'false',
      order: 7,
      filter: true,
      display: 'false',
    },
    statut: {
      title: 'Statut',
      editable: 'true',
      filter: true,
      order: 8,
      display: 'false',
    }
  }
};

export const SETTINGS_CUSTOM_DISPLAY = {

    columns: {
        name: {
            title: 'Name',
            filter: true
        },
        status:{
          title: 'Status',
          filter: true
        }
    },
    mode: 'external',
    actions: {
      add: false,
      delete: false,
      edit: false,
      columntitle: '',
      custom: [
        {
          name: 'modifier',
          title: '<i class=\'nb-edit\'></i>'
          },
          {
          name: 'cree',
          title: '<i class=\'nb-plus\'></i>'
          },
          {
          name: 'consulter',
          title: '<i class=\'nb-search\'></i>'
          }
      ],
    },
    rowClassFunction: (row) => {
      if (row.data.status === 0) {
        return 'editer';
      }
      if (row.data.status < 4) {
        return 'ajouter';
      }
      if (row.data.status === 4) {
        return 'supprimer';
      }
    }
};

export const SETTINGS_SANS_FONCTION = {

    columns: {
        name: {
            title: 'Name',
            filter: true
        },
        statutDeLaFicheMobilite: {
          filterData: '',
          display: 'true',
          title: 'Statut de la fiche mobilité ',
          type: 'text',
          order: 8
        },
        status: {
          title: 'Status',
          filter: true
        }
    },
      mode: 'external',
      actions: {
        add: false,
        delete: false,
        edit: false,
        columntitle: '',
        custom: [
          {
            name: 'editer',
            title: '<i class=\'nb-edit\'></i>'
            },
            {
            name: 'ajouter',
            title: '<i class=\'nb-plus\'></i>'
            },
            {
            name: 'supprimer',
            title: '<i class=\'nb-search\'></i>'
            }
        ],
      }
};
