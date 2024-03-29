import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { catchError, finalize, map } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";
// import {environment} from 'src\environments';
// import { SmartTableData } from './smart-table';
// import { CONFIG_SETTINGS } from "assets/utils/settings"; // javascript oobject
export abstract class SmartTableData {
  abstract getData(): any[];
  abstract getSettings(): any;
  abstract getSetting(): any;
}

@Injectable({
  providedIn: "root"
})
export class SmartTableService extends SmartTableData {
  // export class SmartTableService {
    public activeTabs: boolean = false;

  private _url: string = "assets/utils/config_table.json";
  private _url0: string = "assets/utils/vinci_data.json";
  private _url1: string = "assets/utils/settings.ts";
  private _url2: string =
    "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
  private _url3: string = "http://localhost:3000";
  private _url4: string = "http://192.168.8.35:9097/api/ui";
  private _url5: string = 'http://192.168.8.38:9097/api/ui';
  private _url6: string =
    'http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider';
  // apiUrl = environment.apiUrl;
  apiUrl =
    'https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils';

  constructor(private _http: HttpClient) {
    super();
  }

  updateActiveTab(activeTab: boolean) {
    this.activeTabs = true;
  }

  getActivetab(){
    return this.activeTabs;
  }

  getData() {
    // return DATA_Table;
    return DATA_Grid;
  }

  getdata() {
    return this._http.get<any[]>(this._url3 + '/data');
  }
  getSettingsFromNodeBckend() {
    return this._http.get<any>('http://localhost:3000/settings');
    // .pipe(catchError(this.handleError));
  }

  getDataFromBackend() {
    console.log(' Get Data Service ');

    // return this._http.get("http://localhost:3000" + '/data').pipe(
    //   catchError(this.handleError)
    // );

    return this._http.get<any[]>(this._url0);
    // .subscribe({
    //   next: data => {
    //     console.log("data retourned from the backend : ", data);
    //   },
    //   error: this.handleError
    // });
  }

  editDataFromBackend(settings) {
    return this._http.post<any[]>(this._url0, settings);
  }

  deleteDataFromBackend() {}

  addDataFromBackend() {}

  getSettings() {
    // return CONFIG_SETTINGS;
    return CONFIG_OBJECT_VINCI;
    // return this._http.get(this._url3 + "/settings");
  }

  updateColumns(columns: any) {
    console.log(' ==> UPDATE COLUMNS ==> ');
    CONFIG_OBJECT_VINCI.columns = columns;
  }

  savePreferences() {}

  // getLifeCycleTable(): Observable<[MobileItem]> {
  // return of(DataMobileListItem).pipe(delay(4000));
  // }

  // updateLifeCycleTableItem(mobileListEditFormComponent: MobileListEditFormComponent): Observable<any> {
  //   console.log('Adding... ', mobileListEditFormComponent);
  //   return of(null).pipe(delay(2000));
  // }

  getSetting() {}

  getVinciSetting() {
    console.log(' getVinciSetting() : ');
    return this._http
      .get(this._url3 + '/settings')
      .pipe(catchError(this.handleError));
    // return JSON.stringify(this._url);
    // return this._http.get<any[]>(this._url);
    // return this._http.get(this._url).pipe(map((res: any) => res));
    // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
  }

  editVinciSetting(settings: {}) {
    // return this.http.put("https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json", settings);
    // CONFIG_OBJECT_VINCI.unshift() = settings;
  }

  updatePreferences(preference: any) {
    console.log(' Update preference service: ');

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

  getActiveTab(active: boolean): boolean {
    return active;
  }

  getSettingsBackend(roleUser: string, idTable: number, idUser: number) {
    console.log(' Get Settings from Backend: ');

    const headers1 = new HttpHeaders();
    headers1.append('accept', '*/*');
    return (
      this._http
        // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
        .get(
          this._url5 + '/getSetting/' + roleUser + '/' + idTable + '/' + idUser,
          { headers: headers1 }
        )
        .subscribe({
          next: data => {
            console.log('after getting Settings: ', data);
          },
          error: err => {
            if (err.error instanceof Error) {
              console.log('Client-side error occured.');
            } else {
              console.log('Server-side error occured.');
            }
          }
        })
    );
    // .pipe(catchError(this.handleError));
  }

  getSettingsFromGitHub() {
    return this._http
      .get(this.apiUrl + '/settings.ts')
      .pipe(catchError(this.handleError));
  }

  updateData() {
    return DATA_Table;
  }

  updateSettings(settings) {
    // console.log(' Update Settings Service ');
    // console.log('SERVICE send Settings : ', settings.columns);
    return this._http.post('http://localhost:3000', settings).subscribe({
      next: data => {
        console.log('data retourned from the backend : ', data);
      },
      error: this.handleError
    });
  }

  etSetting() {
    let setting;
    this._http.get(this._url2).subscribe(res => {
      setting = res;
    });
    return setting;
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

export enum PreferencesType {
  PREF_ORDER, // string
  PREF_SORT, // string
  PREF_FILTER, // string
  PREF_VISIBILITY // string
}
export interface Preference {
  idPreference: number;
  idTable: number;
  idUser: number;
  preferneceType: string;
  roleUser: string;
  value: [string]; // string[]
}

export interface Settings {
  roleUser: string;
  idTable: number;
  idUser: number;
}

export interface TableVinciInterface {
  id: number;
  nom: string;
  prenom: string;
  societe: string;
  fonctionOfficielle: string;
  affectation: string | number;
  periodeAffectation?: string;
  fonctionOperationnelle: string;
  statut: string;
}

export const PREFERENCE_OBJECT = {
  idPreference: 0,
  idTable: 0,
  idUser: 0,
  roleUser: 'rh',
  value: [
    {
      preferenceType: 'PREF_SORT',
      value: ['nom-clonne', 'ASC|DSC']
    },
    {
      preferenceType: 'PREF_FILTER',
      value: ['nom-clonne-1:filter-value-1', 'nom-clonne-2:filter-value-2']
    },
    {
      preferenceType: 'PREF_ORDER',
      value: ['nom', 'prenom'] // ordre existant des colonnes
    },
    {
      preferenceType: 'PREF_VISIBILITY',
      value: ['nom']
    }
  ]
};

const preferencesObject = {
    idPreference: 0,
    idTable: 0,
    idUser: 0,

    roleUser: 'rh',
    value: [
      {
        preferenceType: 'PREF_SORT',
        value: [
          'nom', 'prenom'
       ]
      },
          {
        preferenceType: 'PREF_FILTER',
        value: [
          'nom:fez', 'prenom:test'
        ]
      },
       {
        preferenceType: 'PREF_ORDER',
        value: [
          'nom', 'prenom'
        ]
      },
       {
        preferenceType: 'PREF_VISIBILITY',
        value: [
          'nom'
        ]
      }
    ]
};

export const DATA_Grid: TableVinciInterface[] = [
  {
    id: 123456,
    nom: 'LIMOURI',
    prenom: 'Anouar',
    societe: 'VGCP',
    fonctionOfficielle: 'Architecte IT',
    affectation: 'Métro d air',
    periodeAffectation: '26/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Architecte appliquer',
    statut: 'Actif'
  },
  {
    id: 234567,
    nom: 'DUPONT',
    prenom: 'François',
    societe: 'VGCP',
    fonctionOfficielle: 'Chef de projet',
    affectation: 'T3C',
    periodeAffectation: '27/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef de projet',
    statut: 'Inactif'
  },
  {
    id: 829077,
    nom: 'GARNIEF',
    prenom: 'Laurent',
    societe: 'DCB',
    fonctionOfficielle: 'Maçon',
    affectation: 'Affectation',
    periodeAffectation: '28/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef de chantier',
    statut: 'A compléter'
  },
  {
    id: 766789,
    nom: 'GAR',
    prenom: 'Laure',
    societe: 'Eeiffage',
    fonctionOfficielle: 'Peintre',
    affectation: 'Métro du Caire',
    periodeAffectation: '29/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'Chef d\'équipe',
    statut: 'Disponible'
  },
  {
    id: 345678,
    nom: 'CHAOUC',
    prenom: 'Mohammed',
    societe: 'DXC',
    fonctionOfficielle: 'jconsultant SIRH',
    affectation: 'Métro de Copenhague ligne 4',
    periodeAffectation: '30/04/2019 - 31/12/2019',
    fonctionOperationnelle: 'PPO',
    statut: 'Indisponible'
  },
  {
    id: 456789,
    nom: 'DUBO',
    prenom: 'Meidy',
    societe: 'VINCI',
    fonctionOfficielle: 'Maçon',
    affectation: 'Métro de Copenhague ligne 4',
    periodeAffectation: '01/04/2019 - 31/09/2019',
    fonctionOperationnelle: 'Fonction opérationnel',
    statut: 'Sorti'
  },
  {
    id: 567890,
    nom: 'BENYAKOUB',
    prenom: 'Med',
    societe: 'DXC Technologie',
    fonctionOfficielle: 'Peintre',
    affectation: 'Aeroport international Arturo Merino Benitez',
    periodeAffectation: '26/04/2019 - 31/09/2019',
    fonctionOperationnelle: 'Couvreur',
    statut: 'Sorti'
  },
  {
    id: 111111,
    nom: 'LEBHAR',
    prenom: 'Naoufal',
    societe: 'DCB',
    fonctionOfficielle: 'Architecte',
    affectation: 'Pont de L\'Atlantique',
    periodeAffectation: '26/04/2019 - 01/12/2019',
    fonctionOperationnelle: 'Electicien',
    statut: 'Archivé'
  },
  {
    id: 666666,
    nom: 'TALAL',
    prenom: 'Mohssine',
    societe: 'DXC',
    fonctionOfficielle: 'Directeur de projet',
    affectation: 'Station d\'épuration de Bruxelles sud',
    periodeAffectation: '26/06/2019 - 31/12/2019',
    fonctionOperationnelle: 'Conducteur de trvail',
    statut: 'Actif'
  },
  {
    id: 101112,
    nom: 'ABARGHAZ',
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
  // hideHeader: false,
  // add: {
  //   addButtonContent: "<i class='nb-plus'></i>",
  //   createButtonContent: "<i class='nb-checkmark'></i>",
  //   cancelButtonContent: "<i class='nb-close'></i>",
  //   confirmCreate: "true"
  // },
  // edit: {
  //   editButtonContent: "<i class='nb-edit'></i>",
  //   saveButtonContent: "<i class='nb-checkmark'></i>",
  //   cancelButtonContent: "<i class='nb-close'></i>",
  //   confirmSave: "true"
  // },
  // delete: {
  //   deleteButtonContent: "<i class='nb-trash'></i>",
  //   confirmDelete: "true"
  // },
  // selectMode: "multi",
  columns: {
    id: {
      title: 'ID VINCI',
      editable: 'false',
      addable: 'false',
      type: 'number',
      display: 'false',
      hideHeader: 'true',
      order: 0,
      filter: true
    },
    nom: {
      title: 'Nom',
      type: 'string',
      filter: true,
      notShownField: 'false',
      order: 1,
      display: 'true'
    },
    prenom: {
      title: 'Prénom',
      type: 'html',
      order: 2,
      filter: true,
      display: 'false'
    },
    societe: {
      title: 'Société',
      type: 'string',
      order: 3,
      filter: true,
      display: 'true'
    },
    fonctionOfficielle: {
      title: 'Fonction officiel',
      type: 'html',
      filter: true,
      editor: {
        type: 'text',
        value: '<input  type=\'email\'>'
      },
      order: 4,
      display: 'true'
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
      display: 'true'
    },
    periodeAffectation: {
      title: 'Période d\'affectation',
      filter: false,
      order: 6,
      display: 'true'
    },
    fonctionOperationnelle: {
      title: 'Fonction opérationnel',
      editable: 'false',
      order: 7,
      filter: false
    },
    statut: {
      title: 'Statut',
      editable: 'true',
      filter: false,
      order: 8,
      display: 'true'
    }
  }
};
export interface TableDateInterface {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  age: string | number;
  passed?: string;
}

export const DATA_Table: TableDateInterface[] = [
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'OTTOO',
    username: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
    email: 'mdo@gmail.com',
    age: '28',
    passed: 'Yes'
  },
  {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username:
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/DXC_Tech.png/280px-DXC_Tech.png" alt="Smiley face" height="42" idth="42">',
    email: 'fat@yandex.ru',
    age: '45',
    passed: 'Yes'
  },
  {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
    passed: 'Yes'
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
    passed: 'Yes'
  },
  {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
    passed: 'No'
  },
  {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
    passed: 'No'
  },
  {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
    passed: 'No'
  },
  {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
    passed: 'No'
  },
  {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
    passed: 'No'
  },
  {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
    passed: 'No'
  },
  {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: '38'
  },
  {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
    passed: 'No'
  },
  {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: '48'
  },
  {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: '40'
  },
  {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32'
  },
  {
    id: 16,
    firstName: 'Francisca',
    lastName: 'Brady',
    username: '@Gibson',
    email: 'franciscagibson@comtours.com',
    age: 11
  },
  {
    id: 17,
    firstName: 'Tillman',
    lastName: 'Figueroa',
    username: '@Snow',
    email: 'tillmansnow@comtours.com',
    age: 34
  },
  {
    id: 18,
    firstName: 'Jimenez',
    lastName: 'Morris',
    username: '@Bryant',
    email: 'jimenezbryant@comtours.com',
    age: 45
  },
  {
    id: 19,
    firstName: 'Sandoval',
    lastName: 'Jacobson',
    username: '@Mcbride',
    email: 'sandovalmcbride@comtours.com',
    age: 32
  },
  {
    id: 20,
    firstName: 'Griffin',
    lastName: 'Torres',
    username: '@Charles',
    email: 'griffincharles@comtours.com',
    age: 19
  },
  {
    id: 21,
    firstName: 'Cora',
    lastName: 'Parker',
    username: '@Caldwell',
    email: 'coracaldwell@comtours.com',
    age: 27
  },
  {
    id: 22,
    firstName: 'Cindy',
    lastName: 'Bond',
    username: '@Velez',
    email: 'cindyvelez@comtours.com',
    age: 24
  },
  {
    id: 23,
    firstName: 'Frieda',
    lastName: 'Tyson',
    username: '@Craig',
    email: 'friedacraig@comtours.com',
    age: 45
  },
  {
    id: 24,
    firstName: 'Cote',
    lastName: 'Holcomb',
    username: '@Rowe',
    email: 'coterowe@comtours.com',
    age: 20
  },
  {
    id: 25,
    firstName: 'Trujillo',
    lastName: 'Mejia',
    username: '@Valenzuela',
    email: 'trujillovalenzuela@comtours.com',
    age: 16
  },
  {
    id: 26,
    firstName: 'Pruitt',
    lastName: 'Shepard',
    username: '@Sloan',
    email: 'pruittsloan@comtours.com',
    age: 44
  },
  {
    id: 27,
    firstName: 'Sutton',
    lastName: 'Ortega',
    username: '@Black',
    email: 'suttonblack@comtours.com',
    age: 42
  },
  {
    id: 28,
    firstName: 'Marion',
    lastName: 'Heath',
    username: '@Espinoza',
    email: 'marionespinoza@comtours.com',
    age: 47
  },
  {
    id: 29,
    firstName: 'Newman',
    lastName: 'Hicks',
    username: '@Keith',
    email: 'newmankeith@comtours.com',
    age: 15
  },
  {
    id: 30,
    firstName: 'Boyle',
    lastName: 'Larson',
    username: '@Summers',
    email: 'boylesummers@comtours.com',
    age: 32
  },
  {
    id: 31,
    firstName: 'Haynes',
    lastName: 'Vinson',
    username: '@Mckenzie',
    email: 'haynesmckenzie@comtours.com',
    age: 15
  },
  {
    id: 32,
    firstName: 'Miller',
    lastName: 'Acosta',
    username: '@Young',
    email: 'milleryoung@comtours.com',
    age: 55
  },
  {
    id: 33,
    firstName: 'Johnston',
    lastName: 'Brown',
    username: '@Knight',
    email: 'johnstonknight@comtours.com',
    age: 29
  },
  {
    id: 34,
    firstName: 'Lena',
    lastName: 'Pitts',
    username: '@Forbes',
    email: 'lenaforbes@comtours.com',
    age: 25
  },
  {
    id: 35,
    firstName: 'Terrie',
    lastName: 'Kennedy',
    username: '@Branch',
    email: 'terriebranch@comtours.com',
    age: 37
  },
  {
    id: 36,
    firstName: 'Louise',
    lastName: 'Aguirre',
    username: '@Kirby',
    email: 'louisekirby@comtours.com',
    age: 44
  },
  {
    id: 37,
    firstName: 'David',
    lastName: 'Patton',
    username: '@Sanders',
    email: 'davidsanders@comtours.com',
    age: 26
  },
  {
    id: 38,
    firstName: 'Holden',
    lastName: 'Barlow',
    username: '@Mckinney',
    email: 'holdenmckinney@comtours.com',
    age: 11
  },
  {
    id: 39,
    firstName: 'Baker',
    lastName: 'Rivera',
    username: '@Montoya',
    email: 'bakermontoya@comtours.com',
    age: 47
  },
  {
    id: 40,
    firstName: 'Belinda',
    lastName: 'Lloyd',
    username: '@Calderon',
    email: 'belindacalderon@comtours.com',
    age: 21
  },
  {
    id: 41,
    firstName: 'Pearson',
    lastName: 'Patrick',
    username: '@Clements',
    email: 'pearsonclements@comtours.com',
    age: 42
  },
  {
    id: 42,
    firstName: 'Alyce',
    lastName: 'Mckee',
    username: '@Daugherty',
    email: 'alycedaugherty@comtours.com',
    age: 55
  },
  {
    id: 43,
    firstName: 'Valencia',
    lastName: 'Spence',
    username: '@Olsen',
    email: 'valenciaolsen@comtours.com',
    age: 20
  },
  {
    id: 44,
    firstName: 'Leach',
    lastName: 'Holcomb',
    username: '@Humphrey',
    email: 'leachhumphrey@comtours.com',
    age: 28
  },
  {
    id: 45,
    firstName: 'Moss',
    lastName: 'Baxter',
    username: '@Fitzpatrick',
    email: 'mossfitzpatrick@comtours.com',
    age: 51
  },
  {
    id: 46,
    firstName: 'Jeanne',
    lastName: 'Cooke',
    username: '@Ward',
    email: 'jeanneward@comtours.com',
    age: 59
  },
  {
    id: 47,
    firstName: 'Wilma',
    lastName: 'Briggs',
    username: '@Kidd',
    email: 'wilmakidd@comtours.com',
    age: 53
  },
  {
    id: 48,
    firstName: 'Beatrice',
    lastName: 'Perry',
    username: '@Gilbert',
    email: 'beatricegilbert@comtours.com',
    age: 39
  },
  {
    id: 49,
    firstName: 'Whitaker',
    lastName: 'Hyde',
    username: '@Mcdonald',
    email: 'whitakermcdonald@comtours.com',
    age: 35
  },
  {
    id: 50,
    firstName: 'Rebekah',
    lastName: 'Duran',
    username: '@Gross',
    email: 'rebekahgross@comtours.com',
    age: 40
  },
  {
    id: 51,
    firstName: 'Earline',
    lastName: 'Mayer',
    username: '@Woodward',
    email: 'earlinewoodward@comtours.com',
    age: 52
  },
  {
    id: 52,
    firstName: 'Moran',
    lastName: 'Baxter',
    username: '@Johns',
    email: 'moranjohns@comtours.com',
    age: 20
  },
  {
    id: 53,
    firstName: 'Nanette',
    lastName: 'Hubbard',
    username: '@Cooke',
    email: 'nanettecooke@comtours.com',
    age: 55
  },
  {
    id: 54,
    firstName: 'Dalton',
    lastName: 'Walker',
    username: '@Hendricks',
    email: 'daltonhendricks@comtours.com',
    age: 25
  },
  {
    id: 55,
    firstName: 'Bennett',
    lastName: 'Blake',
    username: '@Pena',
    email: 'bennettpena@comtours.com',
    age: 13
  },
  {
    id: 56,
    firstName: 'Kellie',
    lastName: 'Horton',
    username: '@Weiss',
    email: 'kellieweiss@comtours.com',
    age: 48
  },
  {
    id: 57,
    firstName: 'Hobbs',
    lastName: 'Talley',
    username: '@Sanford',
    email: 'hobbssanford@comtours.com',
    age: 28
  },
  {
    id: 58,
    firstName: 'Mcguire',
    lastName: 'Donaldson',
    username: '@Roman',
    email: 'mcguireroman@comtours.com',
    age: 38
  },
  {
    id: 59,
    firstName: 'Rodriquez',
    lastName: 'Saunders',
    username: '@Harper',
    email: 'rodriquezharper@comtours.com',
    age: 20
  },
  {
    id: 60,
    firstName: 'Lou',
    lastName: 'Conner',
    username: '@Sanchez',
    email: 'lousanchez@comtours.com',
    age: 16
  }
];

export const CONFIG_SETTINGS = {
  add: {
    addButtonContent: '<i class=\'nb-plus\'></i>',
    createButtonContent: '<i class=\'nb-checkmark\'></i>',
    cancelButtonContent: '<i class=\'nb-close\'></i>',
    confirmCreate: 'true'
  },
  edit: {
    editButtonContent: '<i class=\'nb-edit\'></i>',
    saveButtonContent: '<i class=\'nb-checkmark\'></i>',
    cancelButtonContent: '<i class=\'nb-close\'></i>',
    confirmSave: 'true'
  },
  delete: {
    deleteButtonContent: '<i class=\'nb-trash\'></i>',
    confirmDelete: 'true'
  },
  selectMode: 'multi',
  columns: {
    id: {
      title: 'ID',
      editable: 'false',
      addable: 'false',
      type: 'number',
      notShownField: 'true',
      hideHeader: 'true',
      order: 0
    },
    firstName: {
      title: 'First Name',
      type: 'string',
      filter: {
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
              value: 'Med',
              title: 'Med'
            }
          ]
        }
      },
      notShownField: 'false',
      order: 1
    },
    username: {
      title: 'Username',
      type: 'html',
      order: 2
    },
    lastName: {
      title: 'Last Name',
      type: 'string',
      order: 3
    },
    email: {
      title: 'E-mail',
      type: 'html',
      filter: {
        type: 'completer',
        config: {
          completer: {
            data: 'this.source',
            searchFields: 'completer',
            titleField: 'email'
          }
        }
      },
      editor: {
        type: 'text',
        value: '<input  type=\'email\'>'
      },
      order: 4
    },
    age: {
      title: 'Date',
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
      order: 5
    },
    passed: {
      title: 'Passed',
      filter: {
        type: 'checkbox',
        config: {
          true: 'Yes',
          false: 'No',
          resetText: 'clear'
        }
      },
      order: 6
    }
  }
};
