import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import {environment} from 'src\environments';
// import { SmartTableData } from './smart-table';
// import { CONFIG_SETTINGS } from "assets/utils/settings"; // javascript oobject
export class SmartTableData {
}
let SmartTableService = class SmartTableService extends SmartTableData {
    constructor(_http) {
        super();
        this._http = _http;
        // export class SmartTableService {
        this.activeTabs = false;
        this._url = "assets/utils/config_table.json";
        this._url0 = "assets/utils/vinci_data.json";
        this._url1 = "assets/utils/settings.ts";
        this._url2 = "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
        this._url3 = "http://localhost:3000";
        this._url4 = "http://192.168.8.35:9097/api/ui";
        this._url5 = 'http://192.168.8.38:9097/api/ui';
        this._url6 = 'http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider';
        // apiUrl = environment.apiUrl;
        this.apiUrl = 'https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils';
    }
    updateActiveTab(activeTab) {
        this.activeTabs = true;
    }
    getActivetab() {
        return this.activeTabs;
    }
    getData() {
        // return DATA_Table;
        return DATA_Grid;
    }
    getdata() {
        return this._http.get(this._url3 + '/data');
    }
    getSettingsFromNodeBckend() {
        return this._http.get('http://localhost:3000/settings');
        // .pipe(catchError(this.handleError));
    }
    getDataFromBackend() {
        console.log(' Get Data Service ');
        // return this._http.get("http://localhost:3000" + '/data').pipe(
        //   catchError(this.handleError)
        // );
        return this._http.get(this._url0);
        // .subscribe({
        //   next: data => {
        //     console.log("data retourned from the backend : ", data);
        //   },
        //   error: this.handleError
        // });
    }
    editDataFromBackend(settings) {
        return this._http.post(this._url0, settings);
    }
    deleteDataFromBackend() { }
    addDataFromBackend() { }
    getSettings() {
        // return CONFIG_SETTINGS;
        return CONFIG_OBJECT_VINCI;
        // return this._http.get(this._url3 + "/settings");
    }
    updateColumns(columns) {
        console.log(' ==> UPDATE COLUMNS ==> ');
        CONFIG_OBJECT_VINCI.columns = columns;
    }
    savePreferences() { }
    // getLifeCycleTable(): Observable<[MobileItem]> {
    // return of(DataMobileListItem).pipe(delay(4000));
    // }
    // updateLifeCycleTableItem(mobileListEditFormComponent: MobileListEditFormComponent): Observable<any> {
    //   console.log('Adding... ', mobileListEditFormComponent);
    //   return of(null).pipe(delay(2000));
    // }
    getSetting() { }
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
    editVinciSetting(settings) {
        // return this.http.put("https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json", settings);
        // CONFIG_OBJECT_VINCI.unshift() = settings;
    }
    updatePreferences(preference) {
        console.log(' Update preference service: ');
        const headers1 = new HttpHeaders();
        headers1.append('Content-Type', 'application/json').append('accept', '*/*');
        // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
        // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
        return (this._http
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
                }
                else {
                    console.log('Server-side error occured : ', err);
                }
            }
        }));
        // .pipe(catchError(this.handleError));
    }
    updatePreferencesObject(preference) {
        console.log(' Service => Update preferences Object : ');
        const headers1 = new HttpHeaders();
        headers1.append('Content-Type', 'application/json').append('accept', '*/*');
        // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
        // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
        return (this._http
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
                }
                else {
                    console.log('Server-side error occured : ', err);
                }
            }
        }));
        // .pipe(catchError(this.handleError));
    }
    getActiveTab(active) {
        return active;
    }
    getSettingsBackend(roleUser, idTable, idUser) {
        console.log(' Get Settings from Backend: ');
        const headers1 = new HttpHeaders();
        headers1.append('accept', '*/*');
        return (this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .get(this._url5 + '/getSetting/' + roleUser + '/' + idTable + '/' + idUser, { headers: headers1 })
            .subscribe({
            next: data => {
                console.log('after getting Settings: ', data);
            },
            error: err => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                }
                else {
                    console.log('Server-side error occured.');
                }
            }
        }));
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
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
};
SmartTableService.ngInjectableDef = i0.defineInjectable({ factory: function SmartTableService_Factory() { return new SmartTableService(i0.inject(i1.HttpClient)); }, token: SmartTableService, providedIn: "root" });
SmartTableService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SmartTableService);
export { SmartTableService };
export var PreferencesType;
(function (PreferencesType) {
    PreferencesType[PreferencesType["PREF_ORDER"] = 0] = "PREF_ORDER";
    PreferencesType[PreferencesType["PREF_SORT"] = 1] = "PREF_SORT";
    PreferencesType[PreferencesType["PREF_FILTER"] = 2] = "PREF_FILTER";
    PreferencesType[PreferencesType["PREF_VISIBILITY"] = 3] = "PREF_VISIBILITY"; // string
})(PreferencesType || (PreferencesType = {}));
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
export const DATA_Grid = [
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
export const DATA_Table = [
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
        username: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/DXC_Tech.png/280px-DXC_Tech.png" alt="Smiley face" height="42" idth="42">',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFdBQVcsRUFDWixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFrQixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELGlGQUFpRjtBQUNqRixNQUFNLE9BQWdCLGNBQWM7Q0FJbkM7QUFLRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGNBQWM7SUFrQm5ELFlBQW9CLEtBQWlCO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRFUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQWpCckMsbUNBQW1DO1FBQzFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFN0IsU0FBSSxHQUFXLGdDQUFnQyxDQUFDO1FBQ2hELFVBQUssR0FBVyw4QkFBOEIsQ0FBQztRQUMvQyxVQUFLLEdBQVcsMEJBQTBCLENBQUM7UUFDM0MsVUFBSyxHQUNYLHNGQUFzRixDQUFDO1FBQ2pGLFVBQUssR0FBVyx1QkFBdUIsQ0FBQztRQUN4QyxVQUFLLEdBQVcsaUNBQWlDLENBQUM7UUFDbEQsVUFBSyxHQUFXLGlDQUFpQyxDQUFDO1FBQ2xELFVBQUssR0FDWCxnRUFBZ0UsQ0FBQztRQUNuRSwrQkFBK0I7UUFDL0IsV0FBTSxHQUNKLG1GQUFtRixDQUFDO0lBSXRGLENBQUM7SUFFRCxlQUFlLENBQUMsU0FBa0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTCxxQkFBcUI7UUFDckIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFNLGdDQUFnQyxDQUFDLENBQUM7UUFDN0QsdUNBQXVDO0lBQ3pDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWxDLGlFQUFpRTtRQUNqRSxpQ0FBaUM7UUFDakMsS0FBSztRQUVMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsK0RBQStEO1FBQy9ELE9BQU87UUFDUCw0QkFBNEI7UUFDNUIsTUFBTTtJQUNSLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxRQUFRO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQscUJBQXFCLEtBQUksQ0FBQztJQUUxQixrQkFBa0IsS0FBSSxDQUFDO0lBRXZCLFdBQVc7UUFDVCwwQkFBMEI7UUFDMUIsT0FBTyxtQkFBbUIsQ0FBQztRQUMzQixtREFBbUQ7SUFDckQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFZO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlLEtBQUksQ0FBQztJQUVwQixrREFBa0Q7SUFDbEQsbURBQW1EO0lBQ25ELElBQUk7SUFFSix3R0FBd0c7SUFDeEcsNERBQTREO0lBQzVELHVDQUF1QztJQUN2QyxJQUFJO0lBRUosVUFBVSxLQUFJLENBQUM7SUFFZixlQUFlO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN0QyxvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLGlFQUFpRTtRQUNqRSx3RUFBd0U7SUFDMUUsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQVk7UUFDM0IsMEhBQTBIO1FBQzFILDRDQUE0QztJQUM5QyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsVUFBZTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFFNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUsaUhBQWlIO1FBQ2pILDJGQUEyRjtRQUMzRixPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUs7WUFDUix1SkFBdUo7YUFDdEosR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsbUNBQW1DLEVBQUUsVUFBVSxFQUFFO1lBQ2pFLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7YUFDRCxTQUFTLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLElBQUksR0FBRyxDQUFDLEtBQUssWUFBWSxLQUFLLEVBQUU7b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2xEO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FDTCxDQUFDO1FBQ0YsdUNBQXVDO0lBQ3pDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxVQUFlO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUV4RCxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RSxpSEFBaUg7UUFDakgsMkZBQTJGO1FBQzNGLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSztZQUNSLHVKQUF1SjthQUN0SixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQ0FBbUMsRUFBRSxVQUFVLEVBQUU7WUFDakUsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQzthQUNELFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsS0FBSyxZQUFZLEtBQUssRUFBRTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUNMLENBQUM7UUFDRix1Q0FBdUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFlO1FBQzFCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUFnQixFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUU1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSztZQUNSLHVKQUF1SjthQUN0SixHQUFHLENBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFDckUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDWCxJQUFJLEdBQUcsQ0FBQyxLQUFLLFlBQVksS0FBSyxFQUFFO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztpQkFDM0M7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUNMLENBQUM7UUFDRix1Q0FBdUM7SUFDekMsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQVE7UUFDckIsNENBQTRDO1FBQzVDLDZEQUE2RDtRQUM3RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQXdCO1FBQzFDLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7WUFDckMsa0VBQWtFO1lBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsc0RBQXNEO1lBQ3RELDZEQUE2RDtZQUM3RCxPQUFPLENBQUMsS0FBSyxDQUNYLHlCQUF5QixLQUFLLENBQUMsTUFBTSxlQUFlLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FDbEUsQ0FBQztTQUNIO1FBQ0Qsd0RBQXdEO1FBQ3hELE9BQU8sVUFBVSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUNGLENBQUE7O0FBaFBZLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQW1CMkIsVUFBVTtHQWxCMUIsaUJBQWlCLENBZ1A3QjtTQWhQWSxpQkFBaUI7QUFrUDlCLE1BQU0sQ0FBTixJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDekIsaUVBQVUsQ0FBQTtJQUNWLCtEQUFTLENBQUE7SUFDVCxtRUFBVyxDQUFBO0lBQ1gsMkVBQWUsQ0FBQSxDQUFDLFNBQVM7QUFDM0IsQ0FBQyxFQUxXLGVBQWUsS0FBZixlQUFlLFFBSzFCO0FBNEJELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLFlBQVksRUFBRSxDQUFDO0lBQ2YsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQztJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFO1FBQ0w7WUFDRSxjQUFjLEVBQUUsV0FBVztZQUMzQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO1NBQ2pDO1FBQ0Q7WUFDRSxjQUFjLEVBQUUsYUFBYTtZQUM3QixLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSw2QkFBNkIsQ0FBQztTQUN0RTtRQUNEO1lBQ0UsY0FBYyxFQUFFLFlBQVk7WUFDNUIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLDhCQUE4QjtTQUN4RDtRQUNEO1lBQ0UsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDZjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0saUJBQWlCLEdBQUc7SUFDdEIsWUFBWSxFQUFFLENBQUM7SUFDZixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0lBRVQsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUU7UUFDTDtZQUNFLGNBQWMsRUFBRSxXQUFXO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsUUFBUTthQUNqQjtTQUNEO1FBQ0c7WUFDRixjQUFjLEVBQUUsYUFBYTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLGFBQWE7YUFDekI7U0FDRjtRQUNBO1lBQ0MsY0FBYyxFQUFFLFlBQVk7WUFDNUIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7UUFDQTtZQUNDLGNBQWMsRUFBRSxpQkFBaUI7WUFDakMsS0FBSyxFQUFFO2dCQUNMLEtBQUs7YUFDTjtTQUNGO0tBQ0Y7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUEwQjtJQUM5QztRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUUsTUFBTTtRQUNmLGtCQUFrQixFQUFFLGVBQWU7UUFDbkMsV0FBVyxFQUFFLGFBQWE7UUFDMUIsa0JBQWtCLEVBQUUseUJBQXlCO1FBQzdDLHNCQUFzQixFQUFFLHNCQUFzQjtRQUM5QyxNQUFNLEVBQUUsT0FBTztLQUNoQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2Ysa0JBQWtCLEVBQUUsZ0JBQWdCO1FBQ3BDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxzQkFBc0IsRUFBRSxnQkFBZ0I7UUFDeEMsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsS0FBSztRQUNkLGtCQUFrQixFQUFFLE9BQU87UUFDM0IsV0FBVyxFQUFFLGFBQWE7UUFDMUIsa0JBQWtCLEVBQUUseUJBQXlCO1FBQzdDLHNCQUFzQixFQUFFLGtCQUFrQjtRQUMxQyxNQUFNLEVBQUUsYUFBYTtLQUN0QjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFLFVBQVU7UUFDbkIsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxzQkFBc0IsRUFBRSxnQkFBZ0I7UUFDeEMsTUFBTSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsVUFBVTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLGtCQUFrQixFQUFFLGtCQUFrQjtRQUN0QyxXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLE1BQU0sRUFBRSxjQUFjO0tBQ3ZCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixrQkFBa0IsRUFBRSxPQUFPO1FBQzNCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsa0JBQWtCLEVBQUUseUJBQXlCO1FBQzdDLHNCQUFzQixFQUFFLHVCQUF1QjtRQUMvQyxNQUFNLEVBQUUsT0FBTztLQUNoQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsV0FBVztRQUNoQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixXQUFXLEVBQUUsOENBQThDO1FBQzNELGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxzQkFBc0IsRUFBRSxVQUFVO1FBQ2xDLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLEtBQUs7UUFDZCxrQkFBa0IsRUFBRSxZQUFZO1FBQ2hDLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsa0JBQWtCLEVBQUUseUJBQXlCO1FBQzdDLHNCQUFzQixFQUFFLFlBQVk7UUFDcEMsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLE9BQU87UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLGtCQUFrQixFQUFFLHFCQUFxQjtRQUN6QyxXQUFXLEVBQUUsdUNBQXVDO1FBQ3BELGtCQUFrQixFQUFFLHlCQUF5QjtRQUM3QyxzQkFBc0IsRUFBRSxzQkFBc0I7UUFDOUMsTUFBTSxFQUFFLE9BQU87S0FDaEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFVBQVU7UUFDZixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixrQkFBa0IsRUFBRSxhQUFhO1FBQ2pDLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsa0JBQWtCLEVBQUUseUJBQXlCO1FBQzdDLHNCQUFzQixFQUFFLE9BQU87UUFDL0IsTUFBTSxFQUFFLFlBQVk7S0FDckI7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUc7SUFDakMscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQseURBQXlEO0lBQ3pELHFEQUFxRDtJQUNyRCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLFVBQVU7SUFDVixrREFBa0Q7SUFDbEQsdURBQXVEO0lBQ3ZELHFEQUFxRDtJQUNyRCx3QkFBd0I7SUFDeEIsS0FBSztJQUNMLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCx1QkFBdUI7SUFDdkIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFO1lBQ0YsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsT0FBTztZQUNoQixVQUFVLEVBQUUsTUFBTTtZQUNsQixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixhQUFhLEVBQUUsT0FBTztZQUN0QixLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsT0FBTztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSx5QkFBeUI7YUFDakM7WUFDRCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFO29CQUNOLFVBQVUsRUFBRSxXQUFXO29CQUN2QixJQUFJLEVBQUU7d0JBQ0o7NEJBQ0UsS0FBSyxFQUFFLE9BQU87NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLG9CQUFvQjs0QkFDM0IsS0FBSyxFQUFFLG9CQUFvQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsS0FBSyxFQUFFLFFBQVE7eUJBQ2hCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxNQUFNO3lCQUNkO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxNQUFNO3lCQUNkO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxvQkFBb0I7NEJBQzNCLEtBQUssRUFBRSxvQkFBb0I7eUJBQzVCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxTQUFTOzRCQUNoQixLQUFLLEVBQUUsU0FBUzt5QkFDakI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLE9BQU87NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLGlCQUFpQjs0QkFDeEIsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixLQUFLLEVBQUUsd0JBQXdCO1lBQy9CLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELHNCQUFzQixFQUFFO1lBQ3RCLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFFBQVE7WUFDZixRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLE1BQU07U0FDaEI7S0FDRjtDQUNGLENBQUM7QUFXRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQXlCO0lBQzlDO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsNERBQTREO1FBQ3RFLEtBQUssRUFBRSxlQUFlO1FBQ3RCLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQ04sK0lBQStJO1FBQ2pKLEtBQUssRUFBRSxlQUFlO1FBQ3RCLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUscUJBQXFCO1FBQzVCLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsS0FBSztRQUNoQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTTtRQUNoQixLQUFLLEVBQUUsZUFBZTtRQUN0QixHQUFHLEVBQUUsSUFBSTtRQUNULE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixHQUFHLEVBQUUsSUFBSTtRQUNULE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixHQUFHLEVBQUUsSUFBSTtRQUNULE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixHQUFHLEVBQUUsSUFBSTtRQUNULE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixHQUFHLEVBQUUsSUFBSTtRQUNULE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE9BQU87UUFDakIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixHQUFHLEVBQUUsSUFBSTtLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsR0FBRyxFQUFFLElBQUk7UUFDVCxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsR0FBRyxFQUFFLElBQUk7S0FDVjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLEdBQUcsRUFBRSxJQUFJO0tBQ1Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixHQUFHLEVBQUUsSUFBSTtLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFdBQVc7UUFDckIsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLEtBQUssRUFBRSxpQ0FBaUM7UUFDeEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEtBQUssRUFBRSw2QkFBNkI7UUFDcEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEtBQUssRUFBRSw2QkFBNkI7UUFDcEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFVBQVU7UUFDckIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLDZCQUE2QjtRQUNwQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSwyQkFBMkI7UUFDbEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsOEJBQThCO1FBQ3JDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsS0FBSyxFQUFFLDZCQUE2QjtRQUNwQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsNEJBQTRCO1FBQ25DLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsS0FBSyxFQUFFLDhCQUE4QjtRQUNyQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFVBQVU7UUFDckIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLDhCQUE4QjtRQUNyQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLEtBQUssRUFBRSwrQkFBK0I7UUFDdEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsS0FBSyxFQUFFLDhCQUE4QjtRQUNyQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsS0FBSyxFQUFFLDhCQUE4QjtRQUNyQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEtBQUssRUFBRSwwQkFBMEI7UUFDakMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSwyQkFBMkI7UUFDbEMsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsOEJBQThCO1FBQ3JDLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLHlCQUF5QjtRQUNoQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixHQUFHLEVBQUU7UUFDSCxnQkFBZ0IsRUFBRSwyQkFBMkI7UUFDN0MsbUJBQW1CLEVBQUUsZ0NBQWdDO1FBQ3JELG1CQUFtQixFQUFFLDRCQUE0QjtRQUNqRCxhQUFhLEVBQUUsTUFBTTtLQUN0QjtJQUNELElBQUksRUFBRTtRQUNKLGlCQUFpQixFQUFFLDJCQUEyQjtRQUM5QyxpQkFBaUIsRUFBRSxnQ0FBZ0M7UUFDbkQsbUJBQW1CLEVBQUUsNEJBQTRCO1FBQ2pELFdBQVcsRUFBRSxNQUFNO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sbUJBQW1CLEVBQUUsNEJBQTRCO1FBQ2pELGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFLE9BQU87SUFDbkIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFO1lBQ0YsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsT0FBTztZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLElBQUksRUFBRTt3QkFDSjs0QkFDRSxLQUFLLEVBQUUsT0FBTzs0QkFDZCxLQUFLLEVBQUUsT0FBTzt5QkFDZjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsb0JBQW9COzRCQUMzQixLQUFLLEVBQUUsb0JBQW9CO3lCQUM1Qjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsS0FBSzs0QkFDWixLQUFLLEVBQUUsS0FBSzt5QkFDYjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsYUFBYSxFQUFFLE9BQU87WUFDdEIsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxXQUFXO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxRQUFRO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixTQUFTLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLFlBQVksRUFBRSxXQUFXO3dCQUN6QixVQUFVLEVBQUUsT0FBTztxQkFDcEI7aUJBQ0Y7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELEdBQUcsRUFBRTtZQUNILEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFO29CQUNOLFVBQVUsRUFBRSxXQUFXO29CQUN2QixJQUFJLEVBQUU7d0JBQ0o7NEJBQ0UsS0FBSyxFQUFFLE9BQU87NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLG9CQUFvQjs0QkFDM0IsS0FBSyxFQUFFLG9CQUFvQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsS0FBSyxFQUFFLFFBQVE7eUJBQ2hCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxNQUFNO3lCQUNkO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxNQUFNO3lCQUNkO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxLQUFLOzRCQUNaLEtBQUssRUFBRSxLQUFLO3lCQUNiO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxvQkFBb0I7NEJBQzNCLEtBQUssRUFBRSxvQkFBb0I7eUJBQzVCO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxTQUFTOzRCQUNoQixLQUFLLEVBQUUsU0FBUzt5QkFDakI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLE9BQU87NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLGlCQUFpQjs0QkFDeEIsS0FBSyxFQUFFLFVBQVU7eUJBQ2xCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsS0FBSztvQkFDWCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxTQUFTLEVBQUUsT0FBTztpQkFDbkI7YUFDRjtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBIZWFkZXJzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG4vLyBpbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICdzcmNcXGVudmlyb25tZW50cyc7XHJcbi8vIGltcG9ydCB7IFNtYXJ0VGFibGVEYXRhIH0gZnJvbSAnLi9zbWFydC10YWJsZSc7XHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjsgLy8gamF2YXNjcmlwdCBvb2JqZWN0XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnlbXTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5ncygpOiBhbnk7XHJcbiAgYWJzdHJhY3QgZ2V0U2V0dGluZygpOiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgLy8gZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBhY3RpdmVUYWJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gXCJhc3NldHMvdXRpbHMvY29uZmlnX3RhYmxlLmpzb25cIjtcclxuICBwcml2YXRlIF91cmwwOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy92aW5jaV9kYXRhLmpzb25cIjtcclxuICBwcml2YXRlIF91cmwxOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy9zZXR0aW5ncy50c1wiO1xyXG4gIHByaXZhdGUgX3VybDI6IHN0cmluZyA9XHJcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iZW5tZWQwMC92aW5jaS1zZXR0aW5ncy9tYXN0ZXIvdmluY2lfc2V0dGluZ3MuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDM6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbiAgcHJpdmF0ZSBfdXJsNDogc3RyaW5nID0gXCJodHRwOi8vMTkyLjE2OC44LjM1OjkwOTcvYXBpL3VpXCI7XHJcbiAgcHJpdmF0ZSBfdXJsNTogc3RyaW5nID0gJ2h0dHA6Ly8xOTIuMTY4LjguMzg6OTA5Ny9hcGkvdWknO1xyXG4gIHByaXZhdGUgX3VybDY6IHN0cmluZyA9XHJcbiAgICAnaHR0cDovL3ZjZ3AtaXJzLmZyYW5jZWNlbnRyYWwuY2xvdWRhcHAuYXp1cmUuY29tL3Jlc3QtcHJvdmlkZXInO1xyXG4gIC8vIGFwaVVybCA9IGVudmlyb25tZW50LmFwaVVybDtcclxuICBhcGlVcmwgPVxyXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmR4Yy5jb20vbWJlbnlha291Yi9HZW5lcmlxdWUtRGF0YUdyaWQvYmxvYi9tYXN0ZXIvc3JjL2Fzc2V0cy91dGlscyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmVUYWIoYWN0aXZlVGFiOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVRhYnMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZldGFiKCl7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUYWJzO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIC8vIHJldHVybiBEQVRBX1RhYmxlO1xyXG4gICAgcmV0dXJuIERBVEFfR3JpZDtcclxuICB9XHJcblxyXG4gIGdldGRhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybDMgKyAnL2RhdGEnKTtcclxuICB9XHJcbiAgZ2V0U2V0dGluZ3NGcm9tTm9kZUJja2VuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc2V0dGluZ3MnKTtcclxuICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZyb21CYWNrZW5kKCkge1xyXG4gICAgY29uc29sZS5sb2coJyBHZXQgRGF0YSBTZXJ2aWNlICcpO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiICsgJy9kYXRhJykucGlwZShcclxuICAgIC8vICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8gKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybDApO1xyXG4gICAgLy8gLnN1YnNjcmliZSh7XHJcbiAgICAvLyAgIG5leHQ6IGRhdGEgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6IFwiLCBkYXRhKTtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZXJyb3I6IHRoaXMuaGFuZGxlRXJyb3JcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdERhdGFGcm9tQmFja2VuZChzZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxhbnlbXT4odGhpcy5fdXJsMCwgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YUZyb21CYWNrZW5kKCkge31cclxuXHJcbiAgYWRkRGF0YUZyb21CYWNrZW5kKCkge31cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyByZXR1cm4gQ09ORklHX1NFVFRJTkdTO1xyXG4gICAgcmV0dXJuIENPTkZJR19PQkpFQ1RfVklOQ0k7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMyArIFwiL3NldHRpbmdzXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sdW1ucyhjb2x1bW5zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgPT0+IFVQREFURSBDT0xVTU5TID09PiAnKTtcclxuICAgIENPTkZJR19PQkpFQ1RfVklOQ0kuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBzYXZlUHJlZmVyZW5jZXMoKSB7fVxyXG5cclxuICAvLyBnZXRMaWZlQ3ljbGVUYWJsZSgpOiBPYnNlcnZhYmxlPFtNb2JpbGVJdGVtXT4ge1xyXG4gIC8vIHJldHVybiBvZihEYXRhTW9iaWxlTGlzdEl0ZW0pLnBpcGUoZGVsYXkoNDAwMCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXBkYXRlTGlmZUN5Y2xlVGFibGVJdGVtKG1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudDogTW9iaWxlTGlzdEVkaXRGb3JtQ29tcG9uZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdBZGRpbmcuLi4gJywgbW9iaWxlTGlzdEVkaXRGb3JtQ29tcG9uZW50KTtcclxuICAvLyAgIHJldHVybiBvZihudWxsKS5waXBlKGRlbGF5KDIwMDApKTtcclxuICAvLyB9XHJcblxyXG4gIGdldFNldHRpbmcoKSB7fVxyXG5cclxuICBnZXRWaW5jaVNldHRpbmcoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnIGdldFZpbmNpU2V0dGluZygpIDogJyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuX3VybDMgKyAnL3NldHRpbmdzJylcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XHJcbiAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpLnBpcGUobWFwKChyZXM6IGFueSkgPT4gcmVzKSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICB9XHJcblxyXG4gIGVkaXRWaW5jaVNldHRpbmcoc2V0dGluZ3M6IHt9KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLnB1dChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iZW5tZWQwMC92aW5jaS1zZXR0aW5ncy9tYXN0ZXIvdmluY2lfc2V0dGluZ3MuanNvblwiLCBzZXR0aW5ncyk7XHJcbiAgICAvLyBDT05GSUdfT0JKRUNUX1ZJTkNJLnVuc2hpZnQoKSA9IHNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnIFVwZGF0ZSBwcmVmZXJlbmNlIHNlcnZpY2U6ICcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcnMxID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJykuYXBwZW5kKCdhY2NlcHQnLCAnKi8qJyk7XHJcbiAgICAvLyBoZWFkZXJzMSA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpLnNldCgnYWNjZXB0JywgJyovKjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgLy8gY29uc3QgaGVhZGVyczIgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLCdhY2NlcHQnOiAnKi8qJ30pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgIC8vIC5wdXQodGhpcy5fdXJsNCwgcHJlZmVyZW5jZSwgeyBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2V0KGFjY2VwdCwgJyovKjsgY2hhcnNldD11dGYtOCcpfSlcclxuICAgICAgICAucHV0KHRoaXMuX3VybDYgKyAnL2FwaS91aS9wcmVmZXJlbmNlL3NhdmVQcmVmZXJlbmNlJywgcHJlZmVyZW5jZSwge1xyXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyczFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwcmVmZXJlbmNlIHVwZGF0ZTogJywgZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkIDogJywgZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyLXNpZGUgZXJyb3Igb2NjdXJlZCA6ICcsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJlZmVyZW5jZXNPYmplY3QocHJlZmVyZW5jZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnIFNlcnZpY2UgPT4gVXBkYXRlIHByZWZlcmVuY2VzIE9iamVjdCA6ICcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcnMxID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJykuYXBwZW5kKCdhY2NlcHQnLCAnKi8qJyk7XHJcbiAgICAvLyBoZWFkZXJzMSA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpLnNldCgnYWNjZXB0JywgJyovKjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgLy8gY29uc3QgaGVhZGVyczIgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLCdhY2NlcHQnOiAnKi8qJ30pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgIC8vIC5wdXQodGhpcy5fdXJsNCwgcHJlZmVyZW5jZSwgeyBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2V0KGFjY2VwdCwgJyovKjsgY2hhcnNldD11dGYtOCcpfSlcclxuICAgICAgICAucHV0KHRoaXMuX3VybDYgKyAnL2FwaS91aS9wcmVmZXJlbmNlL3NhdmVQcmVmZXJlbmNlJywgcHJlZmVyZW5jZSwge1xyXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyczFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwcmVmZXJlbmNlIHVwZGF0ZTogJywgZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkIDogJywgZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyLXNpZGUgZXJyb3Igb2NjdXJlZCA6ICcsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlVGFiKGFjdGl2ZTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzQmFja2VuZChyb2xlVXNlcjogc3RyaW5nLCBpZFRhYmxlOiBudW1iZXIsIGlkVXNlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnIEdldCBTZXR0aW5ncyBmcm9tIEJhY2tlbmQ6ICcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcnMxID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ2FjY2VwdCcsICcqLyonKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuX2h0dHBcclxuICAgICAgICAvLyAucHV0KHRoaXMuX3VybDQsIHByZWZlcmVuY2UsIHsgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpLnNldChhY2NlcHQsICcqLyo7IGNoYXJzZXQ9dXRmLTgnKX0pXHJcbiAgICAgICAgLmdldChcclxuICAgICAgICAgIHRoaXMuX3VybDUgKyAnL2dldFNldHRpbmcvJyArIHJvbGVVc2VyICsgJy8nICsgaWRUYWJsZSArICcvJyArIGlkVXNlcixcclxuICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVyczEgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZ2V0dGluZyBTZXR0aW5nczogJywgZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkLicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXItc2lkZSBlcnJvciBvY2N1cmVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICAvLyAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzRnJvbUdpdEh1YigpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwgKyAnL3NldHRpbmdzLnRzJylcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIERBVEFfVGFibGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgLy8gY29uc29sZS5sb2coJyBVcGRhdGUgU2V0dGluZ3MgU2VydmljZSAnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWSUNFIHNlbmQgU2V0dGluZ3MgOiAnLCBzZXR0aW5ncy5jb2x1bW5zKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIHNldHRpbmdzKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6ICcsIGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogdGhpcy5oYW5kbGVFcnJvclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBldFNldHRpbmcoKSB7XHJcbiAgICBsZXQgc2V0dGluZztcclxuICAgIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybDIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBzZXR0aW5nID0gcmVzO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxyXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcignU29tZXRoaW5nIGJhZCBoYXBwZW5lZDsgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByZWZlcmVuY2VzVHlwZSB7XHJcbiAgUFJFRl9PUkRFUiwgLy8gc3RyaW5nXHJcbiAgUFJFRl9TT1JULCAvLyBzdHJpbmdcclxuICBQUkVGX0ZJTFRFUiwgLy8gc3RyaW5nXHJcbiAgUFJFRl9WSVNJQklMSVRZIC8vIHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJlZmVyZW5jZSB7XHJcbiAgaWRQcmVmZXJlbmNlOiBudW1iZXI7XHJcbiAgaWRUYWJsZTogbnVtYmVyO1xyXG4gIGlkVXNlcjogbnVtYmVyO1xyXG4gIHByZWZlcm5lY2VUeXBlOiBzdHJpbmc7XHJcbiAgcm9sZVVzZXI6IHN0cmluZztcclxuICB2YWx1ZTogW3N0cmluZ107IC8vIHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG4gIHJvbGVVc2VyOiBzdHJpbmc7XHJcbiAgaWRUYWJsZTogbnVtYmVyO1xyXG4gIGlkVXNlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlVmluY2lJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbm9tOiBzdHJpbmc7XHJcbiAgcHJlbm9tOiBzdHJpbmc7XHJcbiAgc29jaWV0ZTogc3RyaW5nO1xyXG4gIGZvbmN0aW9uT2ZmaWNpZWxsZTogc3RyaW5nO1xyXG4gIGFmZmVjdGF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcGVyaW9kZUFmZmVjdGF0aW9uPzogc3RyaW5nO1xyXG4gIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IHN0cmluZztcclxuICBzdGF0dXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBSRUZFUkVOQ0VfT0JKRUNUID0ge1xyXG4gIGlkUHJlZmVyZW5jZTogMCxcclxuICBpZFRhYmxlOiAwLFxyXG4gIGlkVXNlcjogMCxcclxuICByb2xlVXNlcjogJ3JoJyxcclxuICB2YWx1ZTogW1xyXG4gICAge1xyXG4gICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfU09SVCcsXHJcbiAgICAgIHZhbHVlOiBbJ25vbS1jbG9ubmUnLCAnQVNDfERTQyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfRklMVEVSJyxcclxuICAgICAgdmFsdWU6IFsnbm9tLWNsb25uZS0xOmZpbHRlci12YWx1ZS0xJywgJ25vbS1jbG9ubmUtMjpmaWx0ZXItdmFsdWUtMiddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICB2YWx1ZTogWydub20nLCAncHJlbm9tJ10gLy8gb3JkcmUgZXhpc3RhbnQgZGVzIGNvbG9ubmVzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgIHZhbHVlOiBbJ25vbSddXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgcHJlZmVyZW5jZXNPYmplY3QgPSB7XHJcbiAgICBpZFByZWZlcmVuY2U6IDAsXHJcbiAgICBpZFRhYmxlOiAwLFxyXG4gICAgaWRVc2VyOiAwLFxyXG5cclxuICAgIHJvbGVVc2VyOiAncmgnLFxyXG4gICAgdmFsdWU6IFtcclxuICAgICAge1xyXG4gICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9TT1JUJyxcclxuICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgJ25vbScsICdwcmVub20nXHJcbiAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX0ZJTFRFUicsXHJcbiAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICdub206ZmV6JywgJ3ByZW5vbTp0ZXN0J1xyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfT1JERVInLFxyXG4gICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAnbm9tJywgJ3ByZW5vbSdcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1ZJU0lCSUxJVFknLFxyXG4gICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAnbm9tJ1xyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfR3JpZDogVGFibGVWaW5jaUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxMjM0NTYsXHJcbiAgICBub206ICdMSU1PVVJJJyxcclxuICAgIHByZW5vbTogJ0Fub3VhcicsXHJcbiAgICBzb2NpZXRlOiAnVkdDUCcsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdBcmNoaXRlY3RlIElUJyxcclxuICAgIGFmZmVjdGF0aW9uOiAnTcOpdHJvIGQgYWlyJyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzI2LzA0LzIwMTkgLSAzMS8xMi8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdBcmNoaXRlY3RlIGFwcGxpcXVlcicsXHJcbiAgICBzdGF0dXQ6ICdBY3RpZidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMzQ1NjcsXHJcbiAgICBub206ICdEVVBPTlQnLFxyXG4gICAgcHJlbm9tOiAnRnJhbsOnb2lzJyxcclxuICAgIHNvY2lldGU6ICdWR0NQJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ0NoZWYgZGUgcHJvamV0JyxcclxuICAgIGFmZmVjdGF0aW9uOiAnVDNDJyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzI3LzA0LzIwMTkgLSAzMS8xMi8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdDaGVmIGRlIHByb2pldCcsXHJcbiAgICBzdGF0dXQ6ICdJbmFjdGlmJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDgyOTA3NyxcclxuICAgIG5vbTogJ0dBUk5JRUYnLFxyXG4gICAgcHJlbm9tOiAnTGF1cmVudCcsXHJcbiAgICBzb2NpZXRlOiAnRENCJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ01hw6dvbicsXHJcbiAgICBhZmZlY3RhdGlvbjogJ0FmZmVjdGF0aW9uJyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzI4LzA0LzIwMTkgLSAzMS8xMi8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdDaGVmIGRlIGNoYW50aWVyJyxcclxuICAgIHN0YXR1dDogJ0EgY29tcGzDqXRlcidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3NjY3ODksXHJcbiAgICBub206ICdHQVInLFxyXG4gICAgcHJlbm9tOiAnTGF1cmUnLFxyXG4gICAgc29jaWV0ZTogJ0VlaWZmYWdlJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ1BlaW50cmUnLFxyXG4gICAgYWZmZWN0YXRpb246ICdNw6l0cm8gZHUgQ2FpcmUnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjkvMDQvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0NoZWYgZFxcJ8OpcXVpcGUnLFxyXG4gICAgc3RhdHV0OiAnRGlzcG9uaWJsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNDU2NzgsXHJcbiAgICBub206ICdDSEFPVUMnLFxyXG4gICAgcHJlbm9tOiAnTW9oYW1tZWQnLFxyXG4gICAgc29jaWV0ZTogJ0RYQycsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdqY29uc3VsdGFudCBTSVJIJyxcclxuICAgIGFmZmVjdGF0aW9uOiAnTcOpdHJvIGRlIENvcGVuaGFndWUgbGlnbmUgNCcsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246ICczMC8wNC8yMDE5IC0gMzEvMTIvMjAxOScsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiAnUFBPJyxcclxuICAgIHN0YXR1dDogJ0luZGlzcG9uaWJsZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NTY3ODksXHJcbiAgICBub206ICdEVUJPJyxcclxuICAgIHByZW5vbTogJ01laWR5JyxcclxuICAgIHNvY2lldGU6ICdWSU5DSScsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdNYcOnb24nLFxyXG4gICAgYWZmZWN0YXRpb246ICdNw6l0cm8gZGUgQ29wZW5oYWd1ZSBsaWduZSA0JyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzAxLzA0LzIwMTkgLSAzMS8wOS8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdGb25jdGlvbiBvcMOpcmF0aW9ubmVsJyxcclxuICAgIHN0YXR1dDogJ1NvcnRpJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU2Nzg5MCxcclxuICAgIG5vbTogJ0JFTllBS09VQicsXHJcbiAgICBwcmVub206ICdNZWQnLFxyXG4gICAgc29jaWV0ZTogJ0RYQyBUZWNobm9sb2dpZScsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdQZWludHJlJyxcclxuICAgIGFmZmVjdGF0aW9uOiAnQWVyb3BvcnQgaW50ZXJuYXRpb25hbCBBcnR1cm8gTWVyaW5vIEJlbml0ZXonLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjYvMDQvMjAxOSAtIDMxLzA5LzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0NvdXZyZXVyJyxcclxuICAgIHN0YXR1dDogJ1NvcnRpJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDExMTExMSxcclxuICAgIG5vbTogJ0xFQkhBUicsXHJcbiAgICBwcmVub206ICdOYW91ZmFsJyxcclxuICAgIHNvY2lldGU6ICdEQ0InLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiAnQXJjaGl0ZWN0ZScsXHJcbiAgICBhZmZlY3RhdGlvbjogJ1BvbnQgZGUgTFxcJ0F0bGFudGlxdWUnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjYvMDQvMjAxOSAtIDAxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0VsZWN0aWNpZW4nLFxyXG4gICAgc3RhdHV0OiAnQXJjaGl2w6knXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNjY2NjY2LFxyXG4gICAgbm9tOiAnVEFMQUwnLFxyXG4gICAgcHJlbm9tOiAnTW9oc3NpbmUnLFxyXG4gICAgc29jaWV0ZTogJ0RYQycsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdEaXJlY3RldXIgZGUgcHJvamV0JyxcclxuICAgIGFmZmVjdGF0aW9uOiAnU3RhdGlvbiBkXFwnw6lwdXJhdGlvbiBkZSBCcnV4ZWxsZXMgc3VkJyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzI2LzA2LzIwMTkgLSAzMS8xMi8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdDb25kdWN0ZXVyIGRlIHRydmFpbCcsXHJcbiAgICBzdGF0dXQ6ICdBY3RpZidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDExMTIsXHJcbiAgICBub206ICdBQkFSR0hBWicsXHJcbiAgICBwcmVub206ICdFaWZmYWdlJyxcclxuICAgIHNvY2lldGU6ICdAa2FyZW4nLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiAnQ29uc3VsdGFudGUnLFxyXG4gICAgYWZmZWN0YXRpb246ICdNw6l0cm8gZGUgRG9oYSBsaWduZSByb3VnZSBzdWQnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjYvMDQvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ01hw6dvbicsXHJcbiAgICBzdGF0dXQ6ICdEaXNwb25pYmxlJ1xyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSUdfT0JKRUNUX1ZJTkNJID0ge1xyXG4gIC8vIGhpZGVIZWFkZXI6IGZhbHNlLFxyXG4gIC8vIGFkZDoge1xyXG4gIC8vICAgYWRkQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItcGx1cyc+PC9pPlwiLFxyXG4gIC8vICAgY3JlYXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgLy8gICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gIC8vICAgY29uZmlybUNyZWF0ZTogXCJ0cnVlXCJcclxuICAvLyB9LFxyXG4gIC8vIGVkaXQ6IHtcclxuICAvLyAgIGVkaXRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1lZGl0Jz48L2k+XCIsXHJcbiAgLy8gICBzYXZlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgLy8gICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gIC8vICAgY29uZmlybVNhdmU6IFwidHJ1ZVwiXHJcbiAgLy8gfSxcclxuICAvLyBkZWxldGU6IHtcclxuICAvLyAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLXRyYXNoJz48L2k+XCIsXHJcbiAgLy8gICBjb25maXJtRGVsZXRlOiBcInRydWVcIlxyXG4gIC8vIH0sXHJcbiAgLy8gc2VsZWN0TW9kZTogXCJtdWx0aVwiLFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHRpdGxlOiAnSUQgVklOQ0knLFxyXG4gICAgICBlZGl0YWJsZTogJ2ZhbHNlJyxcclxuICAgICAgYWRkYWJsZTogJ2ZhbHNlJyxcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmYWxzZScsXHJcbiAgICAgIGhpZGVIZWFkZXI6ICd0cnVlJyxcclxuICAgICAgb3JkZXI6IDAsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG5vbToge1xyXG4gICAgICB0aXRsZTogJ05vbScsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIG5vdFNob3duRmllbGQ6ICdmYWxzZScsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBwcmVub206IHtcclxuICAgICAgdGl0bGU6ICdQcsOpbm9tJyxcclxuICAgICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5OiAnZmFsc2UnXHJcbiAgICB9LFxyXG4gICAgc29jaWV0ZToge1xyXG4gICAgICB0aXRsZTogJ1NvY2nDqXTDqScsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBvcmRlcjogMyxcclxuICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IHtcclxuICAgICAgdGl0bGU6ICdGb25jdGlvbiBvZmZpY2llbCcsXHJcbiAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgdmFsdWU6ICc8aW5wdXQgIHR5cGU9XFwnZW1haWxcXCc+J1xyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNCxcclxuICAgICAgZGlzcGxheTogJ3RydWUnXHJcbiAgICB9LFxyXG4gICAgYWZmZWN0YXRpb246IHtcclxuICAgICAgdGl0bGU6ICdBZmZlY3RhdGlvbicsXHJcbiAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogJ2xpc3QnLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogJ1NlbGVjdC4uLicsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ2phY29iJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ2phY29iJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdoY2dsd2psd2Nnd3djZ3djd2onLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnaGNnbHdqbHdjZ3d3Y2d3Y3dqJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdZYXNzaW4nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnWWFzc2luJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdZYXNzJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1lhc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ0FubicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdBbm4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ1RPVE8nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVE9UTydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnTWVkJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ01lZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQkVuJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ0JFbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnbW9oYW1tZWQgYmVueWFrb3ViJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ21vaGFtbWVkIGJlbnlha291YidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnU0VMTEFNSScsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdTRUxMQU1JJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICd0YWxhTCcsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICd0YWxhTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnPGI+U2FtYW50aGE8L2I+JyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1NhbWFudGhhJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IHtcclxuICAgICAgdGl0bGU6ICdQw6lyaW9kZSBkXFwnYWZmZWN0YXRpb24nLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICBvcmRlcjogNixcclxuICAgICAgZGlzcGxheTogJ3RydWUnXHJcbiAgICB9LFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZToge1xyXG4gICAgICB0aXRsZTogJ0ZvbmN0aW9uIG9ww6lyYXRpb25uZWwnLFxyXG4gICAgICBlZGl0YWJsZTogJ2ZhbHNlJyxcclxuICAgICAgb3JkZXI6IDcsXHJcbiAgICAgIGZpbHRlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdGF0dXQ6IHtcclxuICAgICAgdGl0bGU6ICdTdGF0dXQnLFxyXG4gICAgICBlZGl0YWJsZTogJ3RydWUnLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICBvcmRlcjogOCxcclxuICAgICAgZGlzcGxheTogJ3RydWUnXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0ZUludGVyZmFjZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhZ2U6IHN0cmluZyB8IG51bWJlcjtcclxuICBwYXNzZWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBX1RhYmxlOiBUYWJsZURhdGVJbnRlcmZhY2VbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZpcnN0TmFtZTogJ01hcmsnLFxyXG4gICAgbGFzdE5hbWU6ICdPVFRPTycsXHJcbiAgICB1c2VybmFtZTogJzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWt2ZW8vbmcyLWFkbWluXCI+TmcyIEFkbWluPC9hPicsXHJcbiAgICBlbWFpbDogJ21kb0BnbWFpbC5jb20nLFxyXG4gICAgYWdlOiAnMjgnLFxyXG4gICAgcGFzc2VkOiAnWWVzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBmaXJzdE5hbWU6ICdKYWNvYicsXHJcbiAgICBsYXN0TmFtZTogJ1Rob3JudG9uJyxcclxuICAgIHVzZXJuYW1lOlxyXG4gICAgICAnPGltZyBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvNzMvRFhDX1RlY2gucG5nLzI4MHB4LURYQ19UZWNoLnBuZ1wiIGFsdD1cIlNtaWxleSBmYWNlXCIgaGVpZ2h0PVwiNDJcIiBpZHRoPVwiNDJcIj4nLFxyXG4gICAgZW1haWw6ICdmYXRAeWFuZGV4LnJ1JyxcclxuICAgIGFnZTogJzQ1JyxcclxuICAgIHBhc3NlZDogJ1llcydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgZmlyc3ROYW1lOiAnTGFycnknLFxyXG4gICAgbGFzdE5hbWU6ICdCaXJkJyxcclxuICAgIHVzZXJuYW1lOiAnQHR3aXR0ZXInLFxyXG4gICAgZW1haWw6ICd0d2l0dGVyQG91dGxvb2suY29tJyxcclxuICAgIGFnZTogJzE4JyxcclxuICAgIHBhc3NlZDogJ1llcydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXHJcbiAgICBsYXN0TmFtZTogJ1Nub3cnLFxyXG4gICAgdXNlcm5hbWU6ICdAc25vdycsXHJcbiAgICBlbWFpbDogJ3Nub3dAZ21haWwuY29tJyxcclxuICAgIGFnZTogJzIwJyxcclxuICAgIHBhc3NlZDogJ1llcydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgZmlyc3ROYW1lOiAnSmFjaycsXHJcbiAgICBsYXN0TmFtZTogJ1NwYXJyb3cnLFxyXG4gICAgdXNlcm5hbWU6ICdAamFjaycsXHJcbiAgICBlbWFpbDogJ2phY2tAeWFuZGV4LnJ1JyxcclxuICAgIGFnZTogJzMwJyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBmaXJzdE5hbWU6ICdBbm4nLFxyXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXHJcbiAgICB1c2VybmFtZTogJ0Bhbm4nLFxyXG4gICAgZW1haWw6ICdhbm5AZ21haWwuY29tJyxcclxuICAgIGFnZTogJzIxJyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBmaXJzdE5hbWU6ICdCYXJiYXJhJyxcclxuICAgIGxhc3ROYW1lOiAnQmxhY2snLFxyXG4gICAgdXNlcm5hbWU6ICdAYmFyYmFyYScsXHJcbiAgICBlbWFpbDogJ2JhcmJhcmFAeWFuZGV4LnJ1JyxcclxuICAgIGFnZTogJzQzJyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDgsXHJcbiAgICBmaXJzdE5hbWU6ICdTZXZhbicsXHJcbiAgICBsYXN0TmFtZTogJ0JhZ3JhdCcsXHJcbiAgICB1c2VybmFtZTogJ0BzZXZhbicsXHJcbiAgICBlbWFpbDogJ3NldmFuQG91dGxvb2suY29tJyxcclxuICAgIGFnZTogJzEzJyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBmaXJzdE5hbWU6ICdSdWJlbicsXHJcbiAgICBsYXN0TmFtZTogJ1ZhcmRhbicsXHJcbiAgICB1c2VybmFtZTogJ0BydWJlbicsXHJcbiAgICBlbWFpbDogJ3J1YmVuQGdtYWlsLmNvbScsXHJcbiAgICBhZ2U6ICcyMicsXHJcbiAgICBwYXNzZWQ6ICdObydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMCxcclxuICAgIGZpcnN0TmFtZTogJ0thcmVuJyxcclxuICAgIGxhc3ROYW1lOiAnU2V2YW4nLFxyXG4gICAgdXNlcm5hbWU6ICdAa2FyZW4nLFxyXG4gICAgZW1haWw6ICdrYXJlbkB5YW5kZXgucnUnLFxyXG4gICAgYWdlOiAnMzMnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBmaXJzdE5hbWU6ICdNYXJrJyxcclxuICAgIGxhc3ROYW1lOiAnT3R0bycsXHJcbiAgICB1c2VybmFtZTogJ0BtYXJrJyxcclxuICAgIGVtYWlsOiAnbWFya0BnbWFpbC5jb20nLFxyXG4gICAgYWdlOiAnMzgnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBmaXJzdE5hbWU6ICdKYWNvYicsXHJcbiAgICBsYXN0TmFtZTogJ1Rob3JudG9uJyxcclxuICAgIHVzZXJuYW1lOiAnQGphY29iJyxcclxuICAgIGVtYWlsOiAnamFjb2JAeWFuZGV4LnJ1JyxcclxuICAgIGFnZTogJzQ4JyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgZmlyc3ROYW1lOiAnSGFpaycsXHJcbiAgICBsYXN0TmFtZTogJ0hha29iJyxcclxuICAgIHVzZXJuYW1lOiAnQGhhaWsnLFxyXG4gICAgZW1haWw6ICdoYWlrQG91dGxvb2suY29tJyxcclxuICAgIGFnZTogJzQ4J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE0LFxyXG4gICAgZmlyc3ROYW1lOiAnR2FyZWdpbicsXHJcbiAgICBsYXN0TmFtZTogJ0ppcmFpcicsXHJcbiAgICB1c2VybmFtZTogJ0BnYXJlZ2luJyxcclxuICAgIGVtYWlsOiAnZ2FyZWdpbkBnbWFpbC5jb20nLFxyXG4gICAgYWdlOiAnNDAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBmaXJzdE5hbWU6ICdLcmlrb3InLFxyXG4gICAgbGFzdE5hbWU6ICdCZWRyb3MnLFxyXG4gICAgdXNlcm5hbWU6ICdAa3Jpa29yJyxcclxuICAgIGVtYWlsOiAna3Jpa29yQHlhbmRleC5ydScsXHJcbiAgICBhZ2U6ICczMidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNixcclxuICAgIGZpcnN0TmFtZTogJ0ZyYW5jaXNjYScsXHJcbiAgICBsYXN0TmFtZTogJ0JyYWR5JyxcclxuICAgIHVzZXJuYW1lOiAnQEdpYnNvbicsXHJcbiAgICBlbWFpbDogJ2ZyYW5jaXNjYWdpYnNvbkBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgZmlyc3ROYW1lOiAnVGlsbG1hbicsXHJcbiAgICBsYXN0TmFtZTogJ0ZpZ3Vlcm9hJyxcclxuICAgIHVzZXJuYW1lOiAnQFNub3cnLFxyXG4gICAgZW1haWw6ICd0aWxsbWFuc25vd0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgZmlyc3ROYW1lOiAnSmltZW5leicsXHJcbiAgICBsYXN0TmFtZTogJ01vcnJpcycsXHJcbiAgICB1c2VybmFtZTogJ0BCcnlhbnQnLFxyXG4gICAgZW1haWw6ICdqaW1lbmV6YnJ5YW50QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTksXHJcbiAgICBmaXJzdE5hbWU6ICdTYW5kb3ZhbCcsXHJcbiAgICBsYXN0TmFtZTogJ0phY29ic29uJyxcclxuICAgIHVzZXJuYW1lOiAnQE1jYnJpZGUnLFxyXG4gICAgZW1haWw6ICdzYW5kb3ZhbG1jYnJpZGVAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMzJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMCxcclxuICAgIGZpcnN0TmFtZTogJ0dyaWZmaW4nLFxyXG4gICAgbGFzdE5hbWU6ICdUb3JyZXMnLFxyXG4gICAgdXNlcm5hbWU6ICdAQ2hhcmxlcycsXHJcbiAgICBlbWFpbDogJ2dyaWZmaW5jaGFybGVzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDE5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjEsXHJcbiAgICBmaXJzdE5hbWU6ICdDb3JhJyxcclxuICAgIGxhc3ROYW1lOiAnUGFya2VyJyxcclxuICAgIHVzZXJuYW1lOiAnQENhbGR3ZWxsJyxcclxuICAgIGVtYWlsOiAnY29yYWNhbGR3ZWxsQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjIsXHJcbiAgICBmaXJzdE5hbWU6ICdDaW5keScsXHJcbiAgICBsYXN0TmFtZTogJ0JvbmQnLFxyXG4gICAgdXNlcm5hbWU6ICdAVmVsZXonLFxyXG4gICAgZW1haWw6ICdjaW5keXZlbGV6QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjMsXHJcbiAgICBmaXJzdE5hbWU6ICdGcmllZGEnLFxyXG4gICAgbGFzdE5hbWU6ICdUeXNvbicsXHJcbiAgICB1c2VybmFtZTogJ0BDcmFpZycsXHJcbiAgICBlbWFpbDogJ2ZyaWVkYWNyYWlnQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjQsXHJcbiAgICBmaXJzdE5hbWU6ICdDb3RlJyxcclxuICAgIGxhc3ROYW1lOiAnSG9sY29tYicsXHJcbiAgICB1c2VybmFtZTogJ0BSb3dlJyxcclxuICAgIGVtYWlsOiAnY290ZXJvd2VAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNSxcclxuICAgIGZpcnN0TmFtZTogJ1RydWppbGxvJyxcclxuICAgIGxhc3ROYW1lOiAnTWVqaWEnLFxyXG4gICAgdXNlcm5hbWU6ICdAVmFsZW56dWVsYScsXHJcbiAgICBlbWFpbDogJ3RydWppbGxvdmFsZW56dWVsYUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI2LFxyXG4gICAgZmlyc3ROYW1lOiAnUHJ1aXR0JyxcclxuICAgIGxhc3ROYW1lOiAnU2hlcGFyZCcsXHJcbiAgICB1c2VybmFtZTogJ0BTbG9hbicsXHJcbiAgICBlbWFpbDogJ3BydWl0dHNsb2FuQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjcsXHJcbiAgICBmaXJzdE5hbWU6ICdTdXR0b24nLFxyXG4gICAgbGFzdE5hbWU6ICdPcnRlZ2EnLFxyXG4gICAgdXNlcm5hbWU6ICdAQmxhY2snLFxyXG4gICAgZW1haWw6ICdzdXR0b25ibGFja0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI4LFxyXG4gICAgZmlyc3ROYW1lOiAnTWFyaW9uJyxcclxuICAgIGxhc3ROYW1lOiAnSGVhdGgnLFxyXG4gICAgdXNlcm5hbWU6ICdARXNwaW5vemEnLFxyXG4gICAgZW1haWw6ICdtYXJpb25lc3Bpbm96YUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA0N1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI5LFxyXG4gICAgZmlyc3ROYW1lOiAnTmV3bWFuJyxcclxuICAgIGxhc3ROYW1lOiAnSGlja3MnLFxyXG4gICAgdXNlcm5hbWU6ICdAS2VpdGgnLFxyXG4gICAgZW1haWw6ICduZXdtYW5rZWl0aEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMwLFxyXG4gICAgZmlyc3ROYW1lOiAnQm95bGUnLFxyXG4gICAgbGFzdE5hbWU6ICdMYXJzb24nLFxyXG4gICAgdXNlcm5hbWU6ICdAU3VtbWVycycsXHJcbiAgICBlbWFpbDogJ2JveWxlc3VtbWVyc0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMxLFxyXG4gICAgZmlyc3ROYW1lOiAnSGF5bmVzJyxcclxuICAgIGxhc3ROYW1lOiAnVmluc29uJyxcclxuICAgIHVzZXJuYW1lOiAnQE1ja2VuemllJyxcclxuICAgIGVtYWlsOiAnaGF5bmVzbWNrZW56aWVAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMixcclxuICAgIGZpcnN0TmFtZTogJ01pbGxlcicsXHJcbiAgICBsYXN0TmFtZTogJ0Fjb3N0YScsXHJcbiAgICB1c2VybmFtZTogJ0BZb3VuZycsXHJcbiAgICBlbWFpbDogJ21pbGxlcnlvdW5nQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzMsXHJcbiAgICBmaXJzdE5hbWU6ICdKb2huc3RvbicsXHJcbiAgICBsYXN0TmFtZTogJ0Jyb3duJyxcclxuICAgIHVzZXJuYW1lOiAnQEtuaWdodCcsXHJcbiAgICBlbWFpbDogJ2pvaG5zdG9ua25pZ2h0QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzQsXHJcbiAgICBmaXJzdE5hbWU6ICdMZW5hJyxcclxuICAgIGxhc3ROYW1lOiAnUGl0dHMnLFxyXG4gICAgdXNlcm5hbWU6ICdARm9yYmVzJyxcclxuICAgIGVtYWlsOiAnbGVuYWZvcmJlc0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgZmlyc3ROYW1lOiAnVGVycmllJyxcclxuICAgIGxhc3ROYW1lOiAnS2VubmVkeScsXHJcbiAgICB1c2VybmFtZTogJ0BCcmFuY2gnLFxyXG4gICAgZW1haWw6ICd0ZXJyaWVicmFuY2hAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMzdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNixcclxuICAgIGZpcnN0TmFtZTogJ0xvdWlzZScsXHJcbiAgICBsYXN0TmFtZTogJ0FndWlycmUnLFxyXG4gICAgdXNlcm5hbWU6ICdAS2lyYnknLFxyXG4gICAgZW1haWw6ICdsb3Vpc2VraXJieUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA0NFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM3LFxyXG4gICAgZmlyc3ROYW1lOiAnRGF2aWQnLFxyXG4gICAgbGFzdE5hbWU6ICdQYXR0b24nLFxyXG4gICAgdXNlcm5hbWU6ICdAU2FuZGVycycsXHJcbiAgICBlbWFpbDogJ2Rhdmlkc2FuZGVyc0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM4LFxyXG4gICAgZmlyc3ROYW1lOiAnSG9sZGVuJyxcclxuICAgIGxhc3ROYW1lOiAnQmFybG93JyxcclxuICAgIHVzZXJuYW1lOiAnQE1ja2lubmV5JyxcclxuICAgIGVtYWlsOiAnaG9sZGVubWNraW5uZXlAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMTFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzOSxcclxuICAgIGZpcnN0TmFtZTogJ0Jha2VyJyxcclxuICAgIGxhc3ROYW1lOiAnUml2ZXJhJyxcclxuICAgIHVzZXJuYW1lOiAnQE1vbnRveWEnLFxyXG4gICAgZW1haWw6ICdiYWtlcm1vbnRveWFAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MCxcclxuICAgIGZpcnN0TmFtZTogJ0JlbGluZGEnLFxyXG4gICAgbGFzdE5hbWU6ICdMbG95ZCcsXHJcbiAgICB1c2VybmFtZTogJ0BDYWxkZXJvbicsXHJcbiAgICBlbWFpbDogJ2JlbGluZGFjYWxkZXJvbkBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQxLFxyXG4gICAgZmlyc3ROYW1lOiAnUGVhcnNvbicsXHJcbiAgICBsYXN0TmFtZTogJ1BhdHJpY2snLFxyXG4gICAgdXNlcm5hbWU6ICdAQ2xlbWVudHMnLFxyXG4gICAgZW1haWw6ICdwZWFyc29uY2xlbWVudHNAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MixcclxuICAgIGZpcnN0TmFtZTogJ0FseWNlJyxcclxuICAgIGxhc3ROYW1lOiAnTWNrZWUnLFxyXG4gICAgdXNlcm5hbWU6ICdARGF1Z2hlcnR5JyxcclxuICAgIGVtYWlsOiAnYWx5Y2VkYXVnaGVydHlAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MyxcclxuICAgIGZpcnN0TmFtZTogJ1ZhbGVuY2lhJyxcclxuICAgIGxhc3ROYW1lOiAnU3BlbmNlJyxcclxuICAgIHVzZXJuYW1lOiAnQE9sc2VuJyxcclxuICAgIGVtYWlsOiAndmFsZW5jaWFvbHNlbkBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ0LFxyXG4gICAgZmlyc3ROYW1lOiAnTGVhY2gnLFxyXG4gICAgbGFzdE5hbWU6ICdIb2xjb21iJyxcclxuICAgIHVzZXJuYW1lOiAnQEh1bXBocmV5JyxcclxuICAgIGVtYWlsOiAnbGVhY2hodW1waHJleUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ1LFxyXG4gICAgZmlyc3ROYW1lOiAnTW9zcycsXHJcbiAgICBsYXN0TmFtZTogJ0JheHRlcicsXHJcbiAgICB1c2VybmFtZTogJ0BGaXR6cGF0cmljaycsXHJcbiAgICBlbWFpbDogJ21vc3NmaXR6cGF0cmlja0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1MVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ2LFxyXG4gICAgZmlyc3ROYW1lOiAnSmVhbm5lJyxcclxuICAgIGxhc3ROYW1lOiAnQ29va2UnLFxyXG4gICAgdXNlcm5hbWU6ICdAV2FyZCcsXHJcbiAgICBlbWFpbDogJ2plYW5uZXdhcmRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NyxcclxuICAgIGZpcnN0TmFtZTogJ1dpbG1hJyxcclxuICAgIGxhc3ROYW1lOiAnQnJpZ2dzJyxcclxuICAgIHVzZXJuYW1lOiAnQEtpZGQnLFxyXG4gICAgZW1haWw6ICd3aWxtYWtpZGRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0OCxcclxuICAgIGZpcnN0TmFtZTogJ0JlYXRyaWNlJyxcclxuICAgIGxhc3ROYW1lOiAnUGVycnknLFxyXG4gICAgdXNlcm5hbWU6ICdAR2lsYmVydCcsXHJcbiAgICBlbWFpbDogJ2JlYXRyaWNlZ2lsYmVydEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ5LFxyXG4gICAgZmlyc3ROYW1lOiAnV2hpdGFrZXInLFxyXG4gICAgbGFzdE5hbWU6ICdIeWRlJyxcclxuICAgIHVzZXJuYW1lOiAnQE1jZG9uYWxkJyxcclxuICAgIGVtYWlsOiAnd2hpdGFrZXJtY2RvbmFsZEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUwLFxyXG4gICAgZmlyc3ROYW1lOiAnUmViZWthaCcsXHJcbiAgICBsYXN0TmFtZTogJ0R1cmFuJyxcclxuICAgIHVzZXJuYW1lOiAnQEdyb3NzJyxcclxuICAgIGVtYWlsOiAncmViZWthaGdyb3NzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTEsXHJcbiAgICBmaXJzdE5hbWU6ICdFYXJsaW5lJyxcclxuICAgIGxhc3ROYW1lOiAnTWF5ZXInLFxyXG4gICAgdXNlcm5hbWU6ICdAV29vZHdhcmQnLFxyXG4gICAgZW1haWw6ICdlYXJsaW5ld29vZHdhcmRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MixcclxuICAgIGZpcnN0TmFtZTogJ01vcmFuJyxcclxuICAgIGxhc3ROYW1lOiAnQmF4dGVyJyxcclxuICAgIHVzZXJuYW1lOiAnQEpvaG5zJyxcclxuICAgIGVtYWlsOiAnbW9yYW5qb2huc0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUzLFxyXG4gICAgZmlyc3ROYW1lOiAnTmFuZXR0ZScsXHJcbiAgICBsYXN0TmFtZTogJ0h1YmJhcmQnLFxyXG4gICAgdXNlcm5hbWU6ICdAQ29va2UnLFxyXG4gICAgZW1haWw6ICduYW5ldHRlY29va2VAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NCxcclxuICAgIGZpcnN0TmFtZTogJ0RhbHRvbicsXHJcbiAgICBsYXN0TmFtZTogJ1dhbGtlcicsXHJcbiAgICB1c2VybmFtZTogJ0BIZW5kcmlja3MnLFxyXG4gICAgZW1haWw6ICdkYWx0b25oZW5kcmlja3NAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NSxcclxuICAgIGZpcnN0TmFtZTogJ0Jlbm5ldHQnLFxyXG4gICAgbGFzdE5hbWU6ICdCbGFrZScsXHJcbiAgICB1c2VybmFtZTogJ0BQZW5hJyxcclxuICAgIGVtYWlsOiAnYmVubmV0dHBlbmFAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMTNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NixcclxuICAgIGZpcnN0TmFtZTogJ0tlbGxpZScsXHJcbiAgICBsYXN0TmFtZTogJ0hvcnRvbicsXHJcbiAgICB1c2VybmFtZTogJ0BXZWlzcycsXHJcbiAgICBlbWFpbDogJ2tlbGxpZXdlaXNzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTcsXHJcbiAgICBmaXJzdE5hbWU6ICdIb2JicycsXHJcbiAgICBsYXN0TmFtZTogJ1RhbGxleScsXHJcbiAgICB1c2VybmFtZTogJ0BTYW5mb3JkJyxcclxuICAgIGVtYWlsOiAnaG9iYnNzYW5mb3JkQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTgsXHJcbiAgICBmaXJzdE5hbWU6ICdNY2d1aXJlJyxcclxuICAgIGxhc3ROYW1lOiAnRG9uYWxkc29uJyxcclxuICAgIHVzZXJuYW1lOiAnQFJvbWFuJyxcclxuICAgIGVtYWlsOiAnbWNndWlyZXJvbWFuQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDM4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTksXHJcbiAgICBmaXJzdE5hbWU6ICdSb2RyaXF1ZXonLFxyXG4gICAgbGFzdE5hbWU6ICdTYXVuZGVycycsXHJcbiAgICB1c2VybmFtZTogJ0BIYXJwZXInLFxyXG4gICAgZW1haWw6ICdyb2RyaXF1ZXpoYXJwZXJAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2MCxcclxuICAgIGZpcnN0TmFtZTogJ0xvdScsXHJcbiAgICBsYXN0TmFtZTogJ0Nvbm5lcicsXHJcbiAgICB1c2VybmFtZTogJ0BTYW5jaGV6JyxcclxuICAgIGVtYWlsOiAnbG91c2FuY2hlekBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxNlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSUdfU0VUVElOR1MgPSB7XHJcbiAgYWRkOiB7XHJcbiAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItcGx1c1xcJz48L2k+JyxcclxuICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi1jaGVja21hcmtcXCc+PC9pPicsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItY2xvc2VcXCc+PC9pPicsXHJcbiAgICBjb25maXJtQ3JlYXRlOiAndHJ1ZSdcclxuICB9LFxyXG4gIGVkaXQ6IHtcclxuICAgIGVkaXRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItZWRpdFxcJz48L2k+JyxcclxuICAgIHNhdmVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItY2hlY2ttYXJrXFwnPjwvaT4nLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVxcJ25iLWNsb3NlXFwnPjwvaT4nLFxyXG4gICAgY29uZmlybVNhdmU6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgZGVsZXRlOiB7XHJcbiAgICBkZWxldGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItdHJhc2hcXCc+PC9pPicsXHJcbiAgICBjb25maXJtRGVsZXRlOiAndHJ1ZSdcclxuICB9LFxyXG4gIHNlbGVjdE1vZGU6ICdtdWx0aScsXHJcbiAgY29sdW1uczoge1xyXG4gICAgaWQ6IHtcclxuICAgICAgdGl0bGU6ICdJRCcsXHJcbiAgICAgIGVkaXRhYmxlOiAnZmFsc2UnLFxyXG4gICAgICBhZGRhYmxlOiAnZmFsc2UnLFxyXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgbm90U2hvd25GaWVsZDogJ3RydWUnLFxyXG4gICAgICBoaWRlSGVhZGVyOiAndHJ1ZScsXHJcbiAgICAgIG9yZGVyOiAwXHJcbiAgICB9LFxyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiAnbGlzdCcsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBzZWxlY3RUZXh0OiAnU2VsZWN0Li4uJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnamFjb2InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnamFjb2InXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ2hjZ2x3amx3Y2d3d2Nnd2N3aicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdoY2dsd2psd2Nnd3djZ3djd2onXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ01lZCcsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdNZWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdFNob3duRmllbGQ6ICdmYWxzZScsXHJcbiAgICAgIG9yZGVyOiAxXHJcbiAgICB9LFxyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdGl0bGU6ICdVc2VybmFtZScsXHJcbiAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgb3JkZXI6IDJcclxuICAgIH0sXHJcbiAgICBsYXN0TmFtZToge1xyXG4gICAgICB0aXRsZTogJ0xhc3QgTmFtZScsXHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBvcmRlcjogM1xyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHRpdGxlOiAnRS1tYWlsJyxcclxuICAgICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiAnY29tcGxldGVyJyxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIGNvbXBsZXRlcjoge1xyXG4gICAgICAgICAgICBkYXRhOiAndGhpcy5zb3VyY2UnLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHM6ICdjb21wbGV0ZXInLFxyXG4gICAgICAgICAgICB0aXRsZUZpZWxkOiAnZW1haWwnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgdmFsdWU6ICc8aW5wdXQgIHR5cGU9XFwnZW1haWxcXCc+J1xyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNFxyXG4gICAgfSxcclxuICAgIGFnZToge1xyXG4gICAgICB0aXRsZTogJ0RhdGUnLFxyXG4gICAgICB0eXBlOiAnaHRtbCcsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6ICdsaXN0JyxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHNlbGVjdFRleHQ6ICdTZWxlY3QuLi4nLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdqYWNvYicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdqYWNvYidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnaGNnbHdqbHdjZ3d3Y2d3Y3dqJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ2hjZ2x3amx3Y2d3d2Nnd2N3aidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnWWFzc2luJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1lhc3NpbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnWWFzcycsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdZYXNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdBbm4nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnQW5uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdUT1RPJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1RPVE8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ01lZCcsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdNZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ0JFbicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdCRW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ21vaGFtbWVkIGJlbnlha291YicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2hhbW1lZCBiZW55YWtvdWInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ1NFTExBTUknLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnU0VMTEFNSSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAndGFsYUwnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAndGFsYUwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJzxiPlNhbWFudGhhPC9iPicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdTYW1hbnRoYSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDVcclxuICAgIH0sXHJcbiAgICBwYXNzZWQ6IHtcclxuICAgICAgdGl0bGU6ICdQYXNzZWQnLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgdHJ1ZTogJ1llcycsXHJcbiAgICAgICAgICBmYWxzZTogJ05vJyxcclxuICAgICAgICAgIHJlc2V0VGV4dDogJ2NsZWFyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDZcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==