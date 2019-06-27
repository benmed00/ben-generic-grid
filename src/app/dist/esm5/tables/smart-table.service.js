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
var SmartTableData = /** @class */ (function () {
    function SmartTableData() {
    }
    return SmartTableData;
}());
export { SmartTableData };
var SmartTableService = /** @class */ (function (_super) {
    tslib_1.__extends(SmartTableService, _super);
    function SmartTableService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        // export class SmartTableService {
        _this.activeTabs = false;
        _this._url = "assets/utils/config_table.json";
        _this._url0 = "assets/utils/vinci_data.json";
        _this._url1 = "assets/utils/settings.ts";
        _this._url2 = "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
        _this._url3 = "http://localhost:3000";
        _this._url4 = "http://192.168.8.35:9097/api/ui";
        _this._url5 = 'http://192.168.8.38:9097/api/ui';
        _this._url6 = 'http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider';
        // apiUrl = environment.apiUrl;
        _this.apiUrl = 'https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils';
        return _this;
    }
    SmartTableService.prototype.updateActiveTab = function (activeTab) {
        this.activeTabs = true;
    };
    SmartTableService.prototype.getActivetab = function () {
        return this.activeTabs;
    };
    SmartTableService.prototype.getData = function () {
        // return DATA_Table;
        return DATA_Grid;
    };
    SmartTableService.prototype.getdata = function () {
        return this._http.get(this._url3 + '/data');
    };
    SmartTableService.prototype.getSettingsFromNodeBckend = function () {
        return this._http.get('http://localhost:3000/settings');
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.getDataFromBackend = function () {
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
    };
    SmartTableService.prototype.editDataFromBackend = function (settings) {
        return this._http.post(this._url0, settings);
    };
    SmartTableService.prototype.deleteDataFromBackend = function () { };
    SmartTableService.prototype.addDataFromBackend = function () { };
    SmartTableService.prototype.getSettings = function () {
        // return CONFIG_SETTINGS;
        return CONFIG_OBJECT_VINCI;
        // return this._http.get(this._url3 + "/settings");
    };
    SmartTableService.prototype.updateColumns = function (columns) {
        console.log(' ==> UPDATE COLUMNS ==> ');
        CONFIG_OBJECT_VINCI.columns = columns;
    };
    SmartTableService.prototype.savePreferences = function () { };
    // getLifeCycleTable(): Observable<[MobileItem]> {
    // return of(DataMobileListItem).pipe(delay(4000));
    // }
    // updateLifeCycleTableItem(mobileListEditFormComponent: MobileListEditFormComponent): Observable<any> {
    //   console.log('Adding... ', mobileListEditFormComponent);
    //   return of(null).pipe(delay(2000));
    // }
    SmartTableService.prototype.getSetting = function () { };
    SmartTableService.prototype.getVinciSetting = function () {
        console.log(' getVinciSetting() : ');
        return this._http
            .get(this._url3 + '/settings')
            .pipe(catchError(this.handleError));
        // return JSON.stringify(this._url);
        // return this._http.get<any[]>(this._url);
        // return this._http.get(this._url).pipe(map((res: any) => res));
        // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
    };
    SmartTableService.prototype.editVinciSetting = function (settings) {
        // return this.http.put("https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json", settings);
        // CONFIG_OBJECT_VINCI.unshift() = settings;
    };
    SmartTableService.prototype.updatePreferences = function (preference) {
        console.log(' Update preference service: ');
        var headers1 = new HttpHeaders();
        headers1.append('Content-Type', 'application/json').append('accept', '*/*');
        // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
        // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
        return (this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .put(this._url6 + '/api/ui/preference/savePreference', preference, {
            headers: headers1
        })
            .subscribe({
            next: function (data) {
                console.log('after preference update: ', data);
            },
            error: function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured : ', err);
                }
                else {
                    console.log('Server-side error occured : ', err);
                }
            }
        }));
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.updatePreferencesObject = function (preference) {
        console.log(' Service => Update preferences Object : ');
        var headers1 = new HttpHeaders();
        headers1.append('Content-Type', 'application/json').append('accept', '*/*');
        // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
        // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
        return (this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .put(this._url6 + '/api/ui/preference/savePreference', preference, {
            headers: headers1
        })
            .subscribe({
            next: function (data) {
                console.log('after preference update: ', data);
            },
            error: function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured : ', err);
                }
                else {
                    console.log('Server-side error occured : ', err);
                }
            }
        }));
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.getActiveTab = function (active) {
        return active;
    };
    SmartTableService.prototype.getSettingsBackend = function (roleUser, idTable, idUser) {
        console.log(' Get Settings from Backend: ');
        var headers1 = new HttpHeaders();
        headers1.append('accept', '*/*');
        return (this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .get(this._url5 + '/getSetting/' + roleUser + '/' + idTable + '/' + idUser, { headers: headers1 })
            .subscribe({
            next: function (data) {
                console.log('after getting Settings: ', data);
            },
            error: function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                }
                else {
                    console.log('Server-side error occured.');
                }
            }
        }));
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.getSettingsFromGitHub = function () {
        return this._http
            .get(this.apiUrl + '/settings.ts')
            .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.updateData = function () {
        return DATA_Table;
    };
    SmartTableService.prototype.updateSettings = function (settings) {
        // console.log(' Update Settings Service ');
        // console.log('SERVICE send Settings : ', settings.columns);
        return this._http.post('http://localhost:3000', settings).subscribe({
            next: function (data) {
                console.log('data retourned from the backend : ', data);
            },
            error: this.handleError
        });
    };
    SmartTableService.prototype.etSetting = function () {
        var setting;
        this._http.get(this._url2).subscribe(function (res) {
            setting = res;
        });
        return setting;
    };
    SmartTableService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
    SmartTableService.ngInjectableDef = i0.defineInjectable({ factory: function SmartTableService_Factory() { return new SmartTableService(i0.inject(i1.HttpClient)); }, token: SmartTableService, providedIn: "root" });
    SmartTableService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SmartTableService);
    return SmartTableService;
}(SmartTableData));
export { SmartTableService };
export var PreferencesType;
(function (PreferencesType) {
    PreferencesType[PreferencesType["PREF_ORDER"] = 0] = "PREF_ORDER";
    PreferencesType[PreferencesType["PREF_SORT"] = 1] = "PREF_SORT";
    PreferencesType[PreferencesType["PREF_FILTER"] = 2] = "PREF_FILTER";
    PreferencesType[PreferencesType["PREF_VISIBILITY"] = 3] = "PREF_VISIBILITY"; // string
})(PreferencesType || (PreferencesType = {}));
export var PREFERENCE_OBJECT = {
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
var preferencesObject = {
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
export var DATA_Grid = [
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
export var CONFIG_OBJECT_VINCI = {
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
export var DATA_Table = [
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
export var CONFIG_SETTINGS = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFdBQVcsRUFDWixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFrQixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELGlGQUFpRjtBQUNqRjtJQUFBO0lBSUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBS0Q7SUFBdUMsNkNBQWM7SUFrQm5ELDJCQUFvQixLQUFpQjtRQUFyQyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQWpCckMsbUNBQW1DO1FBQzFCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTdCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQztRQUNoRCxXQUFLLEdBQVcsOEJBQThCLENBQUM7UUFDL0MsV0FBSyxHQUFXLDBCQUEwQixDQUFDO1FBQzNDLFdBQUssR0FDWCxzRkFBc0YsQ0FBQztRQUNqRixXQUFLLEdBQVcsdUJBQXVCLENBQUM7UUFDeEMsV0FBSyxHQUFXLGlDQUFpQyxDQUFDO1FBQ2xELFdBQUssR0FBVyxpQ0FBaUMsQ0FBQztRQUNsRCxXQUFLLEdBQ1gsZ0VBQWdFLENBQUM7UUFDbkUsK0JBQStCO1FBQy9CLFlBQU0sR0FDSixtRkFBbUYsQ0FBQzs7SUFJdEYsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsU0FBa0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFD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QkFDbEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFLO29CQUNYLEtBQUssRUFBRSxJQUFJO29CQUNYLFNBQVMsRUFBRSxPQUFPO2lCQUNuQjthQUNGO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVDtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cEhlYWRlcnNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbi8vIGltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJ3NyY1xcZW52aXJvbm1lbnRzJztcclxuLy8gaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL3NtYXJ0LXRhYmxlJztcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiOyAvLyBqYXZhc2NyaXB0IG9vYmplY3RcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0VGFibGVEYXRhIHtcclxuICBhYnN0cmFjdCBnZXREYXRhKCk6IGFueVtdO1xyXG4gIGFic3RyYWN0IGdldFNldHRpbmdzKCk6IGFueTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5nKCk6IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbWFydFRhYmxlU2VydmljZSBleHRlbmRzIFNtYXJ0VGFibGVEYXRhIHtcclxuICAvLyBleHBvcnQgY2xhc3MgU21hcnRUYWJsZVNlcnZpY2Uge1xyXG4gICAgcHVibGljIGFjdGl2ZVRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy9jb25maWdfdGFibGUuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDA6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3ZpbmNpX2RhdGEuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDE6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzLnRzXCI7XHJcbiAgcHJpdmF0ZSBfdXJsMjogc3RyaW5nID1cclxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jlbm1lZDAwL3ZpbmNpLXNldHRpbmdzL21hc3Rlci92aW5jaV9zZXR0aW5ncy5qc29uXCI7XHJcbiAgcHJpdmF0ZSBfdXJsMzogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuICBwcml2YXRlIF91cmw0OiBzdHJpbmcgPSBcImh0dHA6Ly8xOTIuMTY4LjguMzU6OTA5Ny9hcGkvdWlcIjtcclxuICBwcml2YXRlIF91cmw1OiBzdHJpbmcgPSAnaHR0cDovLzE5Mi4xNjguOC4zODo5MDk3L2FwaS91aSc7XHJcbiAgcHJpdmF0ZSBfdXJsNjogc3RyaW5nID1cclxuICAgICdodHRwOi8vdmNncC1pcnMuZnJhbmNlY2VudHJhbC5jbG91ZGFwcC5henVyZS5jb20vcmVzdC1wcm92aWRlcic7XHJcbiAgLy8gYXBpVXJsID0gZW52aXJvbm1lbnQuYXBpVXJsO1xyXG4gIGFwaVVybCA9XHJcbiAgICAnaHR0cHM6Ly9naXRodWIuZHhjLmNvbS9tYmVueWFrb3ViL0dlbmVyaXF1ZS1EYXRhR3JpZC9ibG9iL21hc3Rlci9zcmMvYXNzZXRzL3V0aWxzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFjdGl2ZVRhYihhY3RpdmVUYWI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWN0aXZlVGFicyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmV0YWIoKXtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRhYnM7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgLy8gcmV0dXJuIERBVEFfVGFibGU7XHJcbiAgICByZXR1cm4gREFUQV9HcmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0ZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsMyArICcvZGF0YScpO1xyXG4gIH1cclxuICBnZXRTZXR0aW5nc0Zyb21Ob2RlQmNrZW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXR0aW5ncycpO1xyXG4gICAgLy8gLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhRnJvbUJhY2tlbmQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnIEdldCBEYXRhIFNlcnZpY2UgJyk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgKyAnL2RhdGEnKS5waXBlKFxyXG4gICAgLy8gICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAvLyApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsMCk7XHJcbiAgICAvLyAuc3Vic2NyaWJlKHtcclxuICAgIC8vICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkYXRhIHJldG91cm5lZCBmcm9tIHRoZSBiYWNrZW5kIDogXCIsIGRhdGEpO1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBlcnJvcjogdGhpcy5oYW5kbGVFcnJvclxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0RGF0YUZyb21CYWNrZW5kKHNldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PGFueVtdPih0aGlzLl91cmwwLCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVEYXRhRnJvbUJhY2tlbmQoKSB7fVxyXG5cclxuICBhZGREYXRhRnJvbUJhY2tlbmQoKSB7fVxyXG5cclxuICBnZXRTZXR0aW5ncygpIHtcclxuICAgIC8vIHJldHVybiBDT05GSUdfU0VUVElOR1M7XHJcbiAgICByZXR1cm4gQ09ORklHX09CSkVDVF9WSU5DSTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwzICsgXCIvc2V0dGluZ3NcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2x1bW5zKGNvbHVtbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJyA9PT4gVVBEQVRFIENPTFVNTlMgPT0+ICcpO1xyXG4gICAgQ09ORklHX09CSkVDVF9WSU5DSS5jb2x1bW5zID0gY29sdW1ucztcclxuICB9XHJcblxyXG4gIHNhdmVQcmVmZXJlbmNlcygpIHt9XHJcblxyXG4gIC8vIGdldExpZmVDeWNsZVRhYmxlKCk6IE9ic2VydmFibGU8W01vYmlsZUl0ZW1dPiB7XHJcbiAgLy8gcmV0dXJuIG9mKERhdGFNb2JpbGVMaXN0SXRlbSkucGlwZShkZWxheSg0MDAwKSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyB1cGRhdGVMaWZlQ3ljbGVUYWJsZUl0ZW0obW9iaWxlTGlzdEVkaXRGb3JtQ29tcG9uZW50OiBNb2JpbGVMaXN0RWRpdEZvcm1Db21wb25lbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0FkZGluZy4uLiAnLCBtb2JpbGVMaXN0RWRpdEZvcm1Db21wb25lbnQpO1xyXG4gIC8vICAgcmV0dXJuIG9mKG51bGwpLnBpcGUoZGVsYXkoMjAwMCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgZ2V0U2V0dGluZygpIHt9XHJcblxyXG4gIGdldFZpbmNpU2V0dGluZygpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgZ2V0VmluY2lTZXR0aW5nKCkgOiAnKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgIC5nZXQodGhpcy5fdXJsMyArICcvc2V0dGluZ3MnKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKTtcclxuICAgIC8vIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKS5waXBlKG1hcCgocmVzOiBhbnkpID0+IHJlcykpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFZpbmNpU2V0dGluZyhzZXR0aW5nczoge30pIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAucHV0KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jlbm1lZDAwL3ZpbmNpLXNldHRpbmdzL21hc3Rlci92aW5jaV9zZXR0aW5ncy5qc29uXCIsIHNldHRpbmdzKTtcclxuICAgIC8vIENPTkZJR19PQkpFQ1RfVklOQ0kudW5zaGlmdCgpID0gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgVXBkYXRlIHByZWZlcmVuY2Ugc2VydmljZTogJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyczEgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKS5hcHBlbmQoJ2FjY2VwdCcsICcqLyonKTtcclxuICAgIC8vIGhlYWRlcnMxID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2V0KCdhY2NlcHQnLCAnKi8qOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJzMiA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAsJ2FjY2VwdCc6ICcqLyonfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9odHRwXHJcbiAgICAgICAgLy8gLnB1dCh0aGlzLl91cmw0LCBwcmVmZXJlbmNlLCB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKS5zZXQoYWNjZXB0LCAnKi8qOyBjaGFyc2V0PXV0Zi04Jyl9KVxyXG4gICAgICAgIC5wdXQodGhpcy5fdXJsNiArICcvYXBpL3VpL3ByZWZlcmVuY2Uvc2F2ZVByZWZlcmVuY2UnLCBwcmVmZXJlbmNlLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzMVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHByZWZlcmVuY2UgdXBkYXRlOiAnLCBkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyci5lcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudC1zaWRlIGVycm9yIG9jY3VyZWQgOiAnLCBlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXItc2lkZSBlcnJvciBvY2N1cmVkIDogJywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgLy8gLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcmVmZXJlbmNlc09iamVjdChwcmVmZXJlbmNlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgU2VydmljZSA9PiBVcGRhdGUgcHJlZmVyZW5jZXMgT2JqZWN0IDogJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyczEgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKS5hcHBlbmQoJ2FjY2VwdCcsICcqLyonKTtcclxuICAgIC8vIGhlYWRlcnMxID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2V0KCdhY2NlcHQnLCAnKi8qOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAvLyBjb25zdCBoZWFkZXJzMiA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAsJ2FjY2VwdCc6ICcqLyonfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9odHRwXHJcbiAgICAgICAgLy8gLnB1dCh0aGlzLl91cmw0LCBwcmVmZXJlbmNlLCB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKS5zZXQoYWNjZXB0LCAnKi8qOyBjaGFyc2V0PXV0Zi04Jyl9KVxyXG4gICAgICAgIC5wdXQodGhpcy5fdXJsNiArICcvYXBpL3VpL3ByZWZlcmVuY2Uvc2F2ZVByZWZlcmVuY2UnLCBwcmVmZXJlbmNlLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzMVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHByZWZlcmVuY2UgdXBkYXRlOiAnLCBkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyci5lcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudC1zaWRlIGVycm9yIG9jY3VyZWQgOiAnLCBlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXItc2lkZSBlcnJvciBvY2N1cmVkIDogJywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgLy8gLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmVUYWIoYWN0aXZlOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3NCYWNrZW5kKHJvbGVVc2VyOiBzdHJpbmcsIGlkVGFibGU6IG51bWJlciwgaWRVc2VyOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgR2V0IFNldHRpbmdzIGZyb20gQmFja2VuZDogJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyczEgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnYWNjZXB0JywgJyovKicpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5faHR0cFxyXG4gICAgICAgIC8vIC5wdXQodGhpcy5fdXJsNCwgcHJlZmVyZW5jZSwgeyBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jykuc2V0KGFjY2VwdCwgJyovKjsgY2hhcnNldD11dGYtOCcpfSlcclxuICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgdGhpcy5fdXJsNSArICcvZ2V0U2V0dGluZy8nICsgcm9sZVVzZXIgKyAnLycgKyBpZFRhYmxlICsgJy8nICsgaWRVc2VyLFxyXG4gICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzMSB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBnZXR0aW5nIFNldHRpbmdzOiAnLCBkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyci5lcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudC1zaWRlIGVycm9yIG9jY3VyZWQuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZlci1zaWRlIGVycm9yIG9jY3VyZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3NGcm9tR2l0SHViKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgLmdldCh0aGlzLmFwaVVybCArICcvc2V0dGluZ3MudHMnKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURhdGEoKSB7XHJcbiAgICByZXR1cm4gREFUQV9UYWJsZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnIFVwZGF0ZSBTZXR0aW5ncyBTZXJ2aWNlICcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1NFUlZJQ0Ugc2VuZCBTZXR0aW5ncyA6ICcsIHNldHRpbmdzLmNvbHVtbnMpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwJywgc2V0dGluZ3MpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIHJldG91cm5lZCBmcm9tIHRoZSBiYWNrZW5kIDogJywgZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB0aGlzLmhhbmRsZUVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV0U2V0dGluZygpIHtcclxuICAgIGxldCBzZXR0aW5nO1xyXG4gICAgdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHNldHRpbmcgPSByZXM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXHJcbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgQmFja2VuZCByZXR1cm5lZCBjb2RlICR7ZXJyb3Iuc3RhdHVzfSwgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKCdTb21ldGhpbmcgYmFkIGhhcHBlbmVkOyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJlZmVyZW5jZXNUeXBlIHtcclxuICBQUkVGX09SREVSLCAvLyBzdHJpbmdcclxuICBQUkVGX1NPUlQsIC8vIHN0cmluZ1xyXG4gIFBSRUZfRklMVEVSLCAvLyBzdHJpbmdcclxuICBQUkVGX1ZJU0lCSUxJVFkgLy8gc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcmVmZXJlbmNlIHtcclxuICBpZFByZWZlcmVuY2U6IG51bWJlcjtcclxuICBpZFRhYmxlOiBudW1iZXI7XHJcbiAgaWRVc2VyOiBudW1iZXI7XHJcbiAgcHJlZmVybmVjZVR5cGU6IHN0cmluZztcclxuICByb2xlVXNlcjogc3RyaW5nO1xyXG4gIHZhbHVlOiBbc3RyaW5nXTsgLy8gc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgcm9sZVVzZXI6IHN0cmluZztcclxuICBpZFRhYmxlOiBudW1iZXI7XHJcbiAgaWRVc2VyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVWaW5jaUludGVyZmFjZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBub206IHN0cmluZztcclxuICBwcmVub206IHN0cmluZztcclxuICBzb2NpZXRlOiBzdHJpbmc7XHJcbiAgZm9uY3Rpb25PZmZpY2llbGxlOiBzdHJpbmc7XHJcbiAgYWZmZWN0YXRpb246IHN0cmluZyB8IG51bWJlcjtcclxuICBwZXJpb2RlQWZmZWN0YXRpb24/OiBzdHJpbmc7XHJcbiAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogc3RyaW5nO1xyXG4gIHN0YXR1dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUFJFRkVSRU5DRV9PQkpFQ1QgPSB7XHJcbiAgaWRQcmVmZXJlbmNlOiAwLFxyXG4gIGlkVGFibGU6IDAsXHJcbiAgaWRVc2VyOiAwLFxyXG4gIHJvbGVVc2VyOiAncmgnLFxyXG4gIHZhbHVlOiBbXHJcbiAgICB7XHJcbiAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9TT1JUJyxcclxuICAgICAgdmFsdWU6IFsnbm9tLWNsb25uZScsICdBU0N8RFNDJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9GSUxURVInLFxyXG4gICAgICB2YWx1ZTogWydub20tY2xvbm5lLTE6ZmlsdGVyLXZhbHVlLTEnLCAnbm9tLWNsb25uZS0yOmZpbHRlci12YWx1ZS0yJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgIHZhbHVlOiBbJ25vbScsICdwcmVub20nXSAvLyBvcmRyZSBleGlzdGFudCBkZXMgY29sb25uZXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9WSVNJQklMSVRZJyxcclxuICAgICAgdmFsdWU6IFsnbm9tJ11cclxuICAgIH1cclxuICBdXHJcbn07XHJcblxyXG5jb25zdCBwcmVmZXJlbmNlc09iamVjdCA9IHtcclxuICAgIGlkUHJlZmVyZW5jZTogMCxcclxuICAgIGlkVGFibGU6IDAsXHJcbiAgICBpZFVzZXI6IDAsXHJcblxyXG4gICAgcm9sZVVzZXI6ICdyaCcsXHJcbiAgICB2YWx1ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcHJlZmVyZW5jZVR5cGU6ICdQUkVGX1NPUlQnLFxyXG4gICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAnbm9tJywgJ3ByZW5vbSdcclxuICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfRklMVEVSJyxcclxuICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgJ25vbTpmZXonLCAncHJlbm9tOnRlc3QnXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgIHByZWZlcmVuY2VUeXBlOiAnUFJFRl9PUkRFUicsXHJcbiAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICdub20nLCAncHJlbm9tJ1xyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICBwcmVmZXJlbmNlVHlwZTogJ1BSRUZfVklTSUJJTElUWScsXHJcbiAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICdub20nXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9HcmlkOiBUYWJsZVZpbmNpSW50ZXJmYWNlW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEyMzQ1NixcclxuICAgIG5vbTogJ0xJTU9VUkknLFxyXG4gICAgcHJlbm9tOiAnQW5vdWFyJyxcclxuICAgIHNvY2lldGU6ICdWR0NQJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ0FyY2hpdGVjdGUgSVQnLFxyXG4gICAgYWZmZWN0YXRpb246ICdNw6l0cm8gZCBhaXInLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjYvMDQvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0FyY2hpdGVjdGUgYXBwbGlxdWVyJyxcclxuICAgIHN0YXR1dDogJ0FjdGlmJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIzNDU2NyxcclxuICAgIG5vbTogJ0RVUE9OVCcsXHJcbiAgICBwcmVub206ICdGcmFuw6dvaXMnLFxyXG4gICAgc29jaWV0ZTogJ1ZHQ1AnLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiAnQ2hlZiBkZSBwcm9qZXQnLFxyXG4gICAgYWZmZWN0YXRpb246ICdUM0MnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjcvMDQvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0NoZWYgZGUgcHJvamV0JyxcclxuICAgIHN0YXR1dDogJ0luYWN0aWYnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogODI5MDc3LFxyXG4gICAgbm9tOiAnR0FSTklFRicsXHJcbiAgICBwcmVub206ICdMYXVyZW50JyxcclxuICAgIHNvY2lldGU6ICdEQ0InLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiAnTWHDp29uJyxcclxuICAgIGFmZmVjdGF0aW9uOiAnQWZmZWN0YXRpb24nLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjgvMDQvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0NoZWYgZGUgY2hhbnRpZXInLFxyXG4gICAgc3RhdHV0OiAnQSBjb21wbMOpdGVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDc2Njc4OSxcclxuICAgIG5vbTogJ0dBUicsXHJcbiAgICBwcmVub206ICdMYXVyZScsXHJcbiAgICBzb2NpZXRlOiAnRWVpZmZhZ2UnLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiAnUGVpbnRyZScsXHJcbiAgICBhZmZlY3RhdGlvbjogJ03DqXRybyBkdSBDYWlyZScsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246ICcyOS8wNC8yMDE5IC0gMzEvMTIvMjAxOScsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiAnQ2hlZiBkXFwnw6lxdWlwZScsXHJcbiAgICBzdGF0dXQ6ICdEaXNwb25pYmxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM0NTY3OCxcclxuICAgIG5vbTogJ0NIQU9VQycsXHJcbiAgICBwcmVub206ICdNb2hhbW1lZCcsXHJcbiAgICBzb2NpZXRlOiAnRFhDJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ2pjb25zdWx0YW50IFNJUkgnLFxyXG4gICAgYWZmZWN0YXRpb246ICdNw6l0cm8gZGUgQ29wZW5oYWd1ZSBsaWduZSA0JyxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogJzMwLzA0LzIwMTkgLSAzMS8xMi8yMDE5JyxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6ICdQUE8nLFxyXG4gICAgc3RhdHV0OiAnSW5kaXNwb25pYmxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ1Njc4OSxcclxuICAgIG5vbTogJ0RVQk8nLFxyXG4gICAgcHJlbm9tOiAnTWVpZHknLFxyXG4gICAgc29jaWV0ZTogJ1ZJTkNJJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ01hw6dvbicsXHJcbiAgICBhZmZlY3RhdGlvbjogJ03DqXRybyBkZSBDb3BlbmhhZ3VlIGxpZ25lIDQnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMDEvMDQvMjAxOSAtIDMxLzA5LzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0ZvbmN0aW9uIG9ww6lyYXRpb25uZWwnLFxyXG4gICAgc3RhdHV0OiAnU29ydGknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTY3ODkwLFxyXG4gICAgbm9tOiAnQkVOWUFLT1VCJyxcclxuICAgIHByZW5vbTogJ01lZCcsXHJcbiAgICBzb2NpZXRlOiAnRFhDIFRlY2hub2xvZ2llJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ1BlaW50cmUnLFxyXG4gICAgYWZmZWN0YXRpb246ICdBZXJvcG9ydCBpbnRlcm5hdGlvbmFsIEFydHVybyBNZXJpbm8gQmVuaXRleicsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246ICcyNi8wNC8yMDE5IC0gMzEvMDkvMjAxOScsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiAnQ291dnJldXInLFxyXG4gICAgc3RhdHV0OiAnU29ydGknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTExMTExLFxyXG4gICAgbm9tOiAnTEVCSEFSJyxcclxuICAgIHByZW5vbTogJ05hb3VmYWwnLFxyXG4gICAgc29jaWV0ZTogJ0RDQicsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdBcmNoaXRlY3RlJyxcclxuICAgIGFmZmVjdGF0aW9uOiAnUG9udCBkZSBMXFwnQXRsYW50aXF1ZScsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246ICcyNi8wNC8yMDE5IC0gMDEvMTIvMjAxOScsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiAnRWxlY3RpY2llbicsXHJcbiAgICBzdGF0dXQ6ICdBcmNoaXbDqSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2NjY2NjYsXHJcbiAgICBub206ICdUQUxBTCcsXHJcbiAgICBwcmVub206ICdNb2hzc2luZScsXHJcbiAgICBzb2NpZXRlOiAnRFhDJyxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogJ0RpcmVjdGV1ciBkZSBwcm9qZXQnLFxyXG4gICAgYWZmZWN0YXRpb246ICdTdGF0aW9uIGRcXCfDqXB1cmF0aW9uIGRlIEJydXhlbGxlcyBzdWQnLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiAnMjYvMDYvMjAxOSAtIDMxLzEyLzIwMTknLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogJ0NvbmR1Y3RldXIgZGUgdHJ2YWlsJyxcclxuICAgIHN0YXR1dDogJ0FjdGlmJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwMTExMixcclxuICAgIG5vbTogJ0FCQVJHSEFaJyxcclxuICAgIHByZW5vbTogJ0VpZmZhZ2UnLFxyXG4gICAgc29jaWV0ZTogJ0BrYXJlbicsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6ICdDb25zdWx0YW50ZScsXHJcbiAgICBhZmZlY3RhdGlvbjogJ03DqXRybyBkZSBEb2hhIGxpZ25lIHJvdWdlIHN1ZCcsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246ICcyNi8wNC8yMDE5IC0gMzEvMTIvMjAxOScsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiAnTWHDp29uJyxcclxuICAgIHN0YXR1dDogJ0Rpc3BvbmlibGUnXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR19PQkpFQ1RfVklOQ0kgPSB7XHJcbiAgLy8gaGlkZUhlYWRlcjogZmFsc2UsXHJcbiAgLy8gYWRkOiB7XHJcbiAgLy8gICBhZGRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1wbHVzJz48L2k+XCIsXHJcbiAgLy8gICBjcmVhdGVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAvLyAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgLy8gICBjb25maXJtQ3JlYXRlOiBcInRydWVcIlxyXG4gIC8vIH0sXHJcbiAgLy8gZWRpdDoge1xyXG4gIC8vICAgZWRpdEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWVkaXQnPjwvaT5cIixcclxuICAvLyAgIHNhdmVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAvLyAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgLy8gICBjb25maXJtU2F2ZTogXCJ0cnVlXCJcclxuICAvLyB9LFxyXG4gIC8vIGRlbGV0ZToge1xyXG4gIC8vICAgZGVsZXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItdHJhc2gnPjwvaT5cIixcclxuICAvLyAgIGNvbmZpcm1EZWxldGU6IFwidHJ1ZVwiXHJcbiAgLy8gfSxcclxuICAvLyBzZWxlY3RNb2RlOiBcIm11bHRpXCIsXHJcbiAgY29sdW1uczoge1xyXG4gICAgaWQ6IHtcclxuICAgICAgdGl0bGU6ICdJRCBWSU5DSScsXHJcbiAgICAgIGVkaXRhYmxlOiAnZmFsc2UnLFxyXG4gICAgICBhZGRhYmxlOiAnZmFsc2UnLFxyXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgZGlzcGxheTogJ2ZhbHNlJyxcclxuICAgICAgaGlkZUhlYWRlcjogJ3RydWUnLFxyXG4gICAgICBvcmRlcjogMCxcclxuICAgICAgZmlsdGVyOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tOiB7XHJcbiAgICAgIHRpdGxlOiAnTm9tJyxcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgbm90U2hvd25GaWVsZDogJ2ZhbHNlJyxcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIGRpc3BsYXk6ICd0cnVlJ1xyXG4gICAgfSxcclxuICAgIHByZW5vbToge1xyXG4gICAgICB0aXRsZTogJ1Byw6lub20nLFxyXG4gICAgICB0eXBlOiAnaHRtbCcsXHJcbiAgICAgIG9yZGVyOiAyLFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIGRpc3BsYXk6ICdmYWxzZSdcclxuICAgIH0sXHJcbiAgICBzb2NpZXRlOiB7XHJcbiAgICAgIHRpdGxlOiAnU29jacOpdMOpJyxcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIG9yZGVyOiAzLFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIGRpc3BsYXk6ICd0cnVlJ1xyXG4gICAgfSxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZToge1xyXG4gICAgICB0aXRsZTogJ0ZvbmN0aW9uIG9mZmljaWVsJyxcclxuICAgICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB2YWx1ZTogJzxpbnB1dCAgdHlwZT1cXCdlbWFpbFxcJz4nXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBhZmZlY3RhdGlvbjoge1xyXG4gICAgICB0aXRsZTogJ0FmZmVjdGF0aW9uJyxcclxuICAgICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiAnbGlzdCcsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBzZWxlY3RUZXh0OiAnU2VsZWN0Li4uJyxcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnamFjb2InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnamFjb2InXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ2hjZ2x3amx3Y2d3d2Nnd2N3aicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdoY2dsd2psd2Nnd3djZ3djd2onXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ1lhc3NpbicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdZYXNzaW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ1lhc3MnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnWWFzcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQW5uJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ0FubidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnVE9UTycsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdUT1RPJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdNZWQnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnTWVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdCRW4nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnQkVuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdtb2hhbW1lZCBiZW55YWtvdWInLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9oYW1tZWQgYmVueWFrb3ViJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdTRUxMQU1JJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1NFTExBTUknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3RhbGFMJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ3RhbGFMJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICc8Yj5TYW1hbnRoYTwvYj4nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnU2FtYW50aGEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIGRpc3BsYXk6ICd0cnVlJ1xyXG4gICAgfSxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjoge1xyXG4gICAgICB0aXRsZTogJ1DDqXJpb2RlIGRcXCdhZmZlY3RhdGlvbicsXHJcbiAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiB7XHJcbiAgICAgIHRpdGxlOiAnRm9uY3Rpb24gb3DDqXJhdGlvbm5lbCcsXHJcbiAgICAgIGVkaXRhYmxlOiAnZmFsc2UnLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0YXR1dDoge1xyXG4gICAgICB0aXRsZTogJ1N0YXR1dCcsXHJcbiAgICAgIGVkaXRhYmxlOiAndHJ1ZScsXHJcbiAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgIG9yZGVyOiA4LFxyXG4gICAgICBkaXNwbGF5OiAndHJ1ZSdcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRlSW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHBhc3NlZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfVGFibGU6IFRhYmxlRGF0ZUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZmlyc3ROYW1lOiAnTWFyaycsXHJcbiAgICBsYXN0TmFtZTogJ09UVE9PJyxcclxuICAgIHVzZXJuYW1lOiAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ha3Zlby9uZzItYWRtaW5cIj5OZzIgQWRtaW48L2E+JyxcclxuICAgIGVtYWlsOiAnbWRvQGdtYWlsLmNvbScsXHJcbiAgICBhZ2U6ICcyOCcsXHJcbiAgICBwYXNzZWQ6ICdZZXMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGZpcnN0TmFtZTogJ0phY29iJyxcclxuICAgIGxhc3ROYW1lOiAnVGhvcm50b24nLFxyXG4gICAgdXNlcm5hbWU6XHJcbiAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNy83My9EWENfVGVjaC5wbmcvMjgwcHgtRFhDX1RlY2gucG5nXCIgYWx0PVwiU21pbGV5IGZhY2VcIiBoZWlnaHQ9XCI0MlwiIGlkdGg9XCI0MlwiPicsXHJcbiAgICBlbWFpbDogJ2ZhdEB5YW5kZXgucnUnLFxyXG4gICAgYWdlOiAnNDUnLFxyXG4gICAgcGFzc2VkOiAnWWVzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBmaXJzdE5hbWU6ICdMYXJyeScsXHJcbiAgICBsYXN0TmFtZTogJ0JpcmQnLFxyXG4gICAgdXNlcm5hbWU6ICdAdHdpdHRlcicsXHJcbiAgICBlbWFpbDogJ3R3aXR0ZXJAb3V0bG9vay5jb20nLFxyXG4gICAgYWdlOiAnMTgnLFxyXG4gICAgcGFzc2VkOiAnWWVzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICAgIGxhc3ROYW1lOiAnU25vdycsXHJcbiAgICB1c2VybmFtZTogJ0Bzbm93JyxcclxuICAgIGVtYWlsOiAnc25vd0BnbWFpbC5jb20nLFxyXG4gICAgYWdlOiAnMjAnLFxyXG4gICAgcGFzc2VkOiAnWWVzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBmaXJzdE5hbWU6ICdKYWNrJyxcclxuICAgIGxhc3ROYW1lOiAnU3BhcnJvdycsXHJcbiAgICB1c2VybmFtZTogJ0BqYWNrJyxcclxuICAgIGVtYWlsOiAnamFja0B5YW5kZXgucnUnLFxyXG4gICAgYWdlOiAnMzAnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGZpcnN0TmFtZTogJ0FubicsXHJcbiAgICBsYXN0TmFtZTogJ1NtaXRoJyxcclxuICAgIHVzZXJuYW1lOiAnQGFubicsXHJcbiAgICBlbWFpbDogJ2FubkBnbWFpbC5jb20nLFxyXG4gICAgYWdlOiAnMjEnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIGZpcnN0TmFtZTogJ0JhcmJhcmEnLFxyXG4gICAgbGFzdE5hbWU6ICdCbGFjaycsXHJcbiAgICB1c2VybmFtZTogJ0BiYXJiYXJhJyxcclxuICAgIGVtYWlsOiAnYmFyYmFyYUB5YW5kZXgucnUnLFxyXG4gICAgYWdlOiAnNDMnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIGZpcnN0TmFtZTogJ1NldmFuJyxcclxuICAgIGxhc3ROYW1lOiAnQmFncmF0JyxcclxuICAgIHVzZXJuYW1lOiAnQHNldmFuJyxcclxuICAgIGVtYWlsOiAnc2V2YW5Ab3V0bG9vay5jb20nLFxyXG4gICAgYWdlOiAnMTMnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIGZpcnN0TmFtZTogJ1J1YmVuJyxcclxuICAgIGxhc3ROYW1lOiAnVmFyZGFuJyxcclxuICAgIHVzZXJuYW1lOiAnQHJ1YmVuJyxcclxuICAgIGVtYWlsOiAncnViZW5AZ21haWwuY29tJyxcclxuICAgIGFnZTogJzIyJyxcclxuICAgIHBhc3NlZDogJ05vJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgZmlyc3ROYW1lOiAnS2FyZW4nLFxyXG4gICAgbGFzdE5hbWU6ICdTZXZhbicsXHJcbiAgICB1c2VybmFtZTogJ0BrYXJlbicsXHJcbiAgICBlbWFpbDogJ2thcmVuQHlhbmRleC5ydScsXHJcbiAgICBhZ2U6ICczMycsXHJcbiAgICBwYXNzZWQ6ICdObydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGZpcnN0TmFtZTogJ01hcmsnLFxyXG4gICAgbGFzdE5hbWU6ICdPdHRvJyxcclxuICAgIHVzZXJuYW1lOiAnQG1hcmsnLFxyXG4gICAgZW1haWw6ICdtYXJrQGdtYWlsLmNvbScsXHJcbiAgICBhZ2U6ICczOCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMixcclxuICAgIGZpcnN0TmFtZTogJ0phY29iJyxcclxuICAgIGxhc3ROYW1lOiAnVGhvcm50b24nLFxyXG4gICAgdXNlcm5hbWU6ICdAamFjb2InLFxyXG4gICAgZW1haWw6ICdqYWNvYkB5YW5kZXgucnUnLFxyXG4gICAgYWdlOiAnNDgnLFxyXG4gICAgcGFzc2VkOiAnTm8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTMsXHJcbiAgICBmaXJzdE5hbWU6ICdIYWlrJyxcclxuICAgIGxhc3ROYW1lOiAnSGFrb2InLFxyXG4gICAgdXNlcm5hbWU6ICdAaGFpaycsXHJcbiAgICBlbWFpbDogJ2hhaWtAb3V0bG9vay5jb20nLFxyXG4gICAgYWdlOiAnNDgnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBmaXJzdE5hbWU6ICdHYXJlZ2luJyxcclxuICAgIGxhc3ROYW1lOiAnSmlyYWlyJyxcclxuICAgIHVzZXJuYW1lOiAnQGdhcmVnaW4nLFxyXG4gICAgZW1haWw6ICdnYXJlZ2luQGdtYWlsLmNvbScsXHJcbiAgICBhZ2U6ICc0MCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNSxcclxuICAgIGZpcnN0TmFtZTogJ0tyaWtvcicsXHJcbiAgICBsYXN0TmFtZTogJ0JlZHJvcycsXHJcbiAgICB1c2VybmFtZTogJ0Brcmlrb3InLFxyXG4gICAgZW1haWw6ICdrcmlrb3JAeWFuZGV4LnJ1JyxcclxuICAgIGFnZTogJzMyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgZmlyc3ROYW1lOiAnRnJhbmNpc2NhJyxcclxuICAgIGxhc3ROYW1lOiAnQnJhZHknLFxyXG4gICAgdXNlcm5hbWU6ICdAR2lic29uJyxcclxuICAgIGVtYWlsOiAnZnJhbmNpc2NhZ2lic29uQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDExXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBmaXJzdE5hbWU6ICdUaWxsbWFuJyxcclxuICAgIGxhc3ROYW1lOiAnRmlndWVyb2EnLFxyXG4gICAgdXNlcm5hbWU6ICdAU25vdycsXHJcbiAgICBlbWFpbDogJ3RpbGxtYW5zbm93QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDM0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTgsXHJcbiAgICBmaXJzdE5hbWU6ICdKaW1lbmV6JyxcclxuICAgIGxhc3ROYW1lOiAnTW9ycmlzJyxcclxuICAgIHVzZXJuYW1lOiAnQEJyeWFudCcsXHJcbiAgICBlbWFpbDogJ2ppbWVuZXpicnlhbnRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOSxcclxuICAgIGZpcnN0TmFtZTogJ1NhbmRvdmFsJyxcclxuICAgIGxhc3ROYW1lOiAnSmFjb2Jzb24nLFxyXG4gICAgdXNlcm5hbWU6ICdATWNicmlkZScsXHJcbiAgICBlbWFpbDogJ3NhbmRvdmFsbWNicmlkZUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgZmlyc3ROYW1lOiAnR3JpZmZpbicsXHJcbiAgICBsYXN0TmFtZTogJ1RvcnJlcycsXHJcbiAgICB1c2VybmFtZTogJ0BDaGFybGVzJyxcclxuICAgIGVtYWlsOiAnZ3JpZmZpbmNoYXJsZXNAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMSxcclxuICAgIGZpcnN0TmFtZTogJ0NvcmEnLFxyXG4gICAgbGFzdE5hbWU6ICdQYXJrZXInLFxyXG4gICAgdXNlcm5hbWU6ICdAQ2FsZHdlbGwnLFxyXG4gICAgZW1haWw6ICdjb3JhY2FsZHdlbGxAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMixcclxuICAgIGZpcnN0TmFtZTogJ0NpbmR5JyxcclxuICAgIGxhc3ROYW1lOiAnQm9uZCcsXHJcbiAgICB1c2VybmFtZTogJ0BWZWxleicsXHJcbiAgICBlbWFpbDogJ2NpbmR5dmVsZXpAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMyxcclxuICAgIGZpcnN0TmFtZTogJ0ZyaWVkYScsXHJcbiAgICBsYXN0TmFtZTogJ1R5c29uJyxcclxuICAgIHVzZXJuYW1lOiAnQENyYWlnJyxcclxuICAgIGVtYWlsOiAnZnJpZWRhY3JhaWdAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNCxcclxuICAgIGZpcnN0TmFtZTogJ0NvdGUnLFxyXG4gICAgbGFzdE5hbWU6ICdIb2xjb21iJyxcclxuICAgIHVzZXJuYW1lOiAnQFJvd2UnLFxyXG4gICAgZW1haWw6ICdjb3Rlcm93ZUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI1LFxyXG4gICAgZmlyc3ROYW1lOiAnVHJ1amlsbG8nLFxyXG4gICAgbGFzdE5hbWU6ICdNZWppYScsXHJcbiAgICB1c2VybmFtZTogJ0BWYWxlbnp1ZWxhJyxcclxuICAgIGVtYWlsOiAndHJ1amlsbG92YWxlbnp1ZWxhQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDE2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjYsXHJcbiAgICBmaXJzdE5hbWU6ICdQcnVpdHQnLFxyXG4gICAgbGFzdE5hbWU6ICdTaGVwYXJkJyxcclxuICAgIHVzZXJuYW1lOiAnQFNsb2FuJyxcclxuICAgIGVtYWlsOiAncHJ1aXR0c2xvYW5AY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNyxcclxuICAgIGZpcnN0TmFtZTogJ1N1dHRvbicsXHJcbiAgICBsYXN0TmFtZTogJ09ydGVnYScsXHJcbiAgICB1c2VybmFtZTogJ0BCbGFjaycsXHJcbiAgICBlbWFpbDogJ3N1dHRvbmJsYWNrQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjgsXHJcbiAgICBmaXJzdE5hbWU6ICdNYXJpb24nLFxyXG4gICAgbGFzdE5hbWU6ICdIZWF0aCcsXHJcbiAgICB1c2VybmFtZTogJ0BFc3Bpbm96YScsXHJcbiAgICBlbWFpbDogJ21hcmlvbmVzcGlub3phQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjksXHJcbiAgICBmaXJzdE5hbWU6ICdOZXdtYW4nLFxyXG4gICAgbGFzdE5hbWU6ICdIaWNrcycsXHJcbiAgICB1c2VybmFtZTogJ0BLZWl0aCcsXHJcbiAgICBlbWFpbDogJ25ld21hbmtlaXRoQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDE1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzAsXHJcbiAgICBmaXJzdE5hbWU6ICdCb3lsZScsXHJcbiAgICBsYXN0TmFtZTogJ0xhcnNvbicsXHJcbiAgICB1c2VybmFtZTogJ0BTdW1tZXJzJyxcclxuICAgIGVtYWlsOiAnYm95bGVzdW1tZXJzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDMyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzEsXHJcbiAgICBmaXJzdE5hbWU6ICdIYXluZXMnLFxyXG4gICAgbGFzdE5hbWU6ICdWaW5zb24nLFxyXG4gICAgdXNlcm5hbWU6ICdATWNrZW56aWUnLFxyXG4gICAgZW1haWw6ICdoYXluZXNtY2tlbnppZUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMyLFxyXG4gICAgZmlyc3ROYW1lOiAnTWlsbGVyJyxcclxuICAgIGxhc3ROYW1lOiAnQWNvc3RhJyxcclxuICAgIHVzZXJuYW1lOiAnQFlvdW5nJyxcclxuICAgIGVtYWlsOiAnbWlsbGVyeW91bmdAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMyxcclxuICAgIGZpcnN0TmFtZTogJ0pvaG5zdG9uJyxcclxuICAgIGxhc3ROYW1lOiAnQnJvd24nLFxyXG4gICAgdXNlcm5hbWU6ICdAS25pZ2h0JyxcclxuICAgIGVtYWlsOiAnam9obnN0b25rbmlnaHRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNCxcclxuICAgIGZpcnN0TmFtZTogJ0xlbmEnLFxyXG4gICAgbGFzdE5hbWU6ICdQaXR0cycsXHJcbiAgICB1c2VybmFtZTogJ0BGb3JiZXMnLFxyXG4gICAgZW1haWw6ICdsZW5hZm9yYmVzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzUsXHJcbiAgICBmaXJzdE5hbWU6ICdUZXJyaWUnLFxyXG4gICAgbGFzdE5hbWU6ICdLZW5uZWR5JyxcclxuICAgIHVzZXJuYW1lOiAnQEJyYW5jaCcsXHJcbiAgICBlbWFpbDogJ3RlcnJpZWJyYW5jaEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAzN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM2LFxyXG4gICAgZmlyc3ROYW1lOiAnTG91aXNlJyxcclxuICAgIGxhc3ROYW1lOiAnQWd1aXJyZScsXHJcbiAgICB1c2VybmFtZTogJ0BLaXJieScsXHJcbiAgICBlbWFpbDogJ2xvdWlzZWtpcmJ5QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDQ0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzcsXHJcbiAgICBmaXJzdE5hbWU6ICdEYXZpZCcsXHJcbiAgICBsYXN0TmFtZTogJ1BhdHRvbicsXHJcbiAgICB1c2VybmFtZTogJ0BTYW5kZXJzJyxcclxuICAgIGVtYWlsOiAnZGF2aWRzYW5kZXJzQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzgsXHJcbiAgICBmaXJzdE5hbWU6ICdIb2xkZW4nLFxyXG4gICAgbGFzdE5hbWU6ICdCYXJsb3cnLFxyXG4gICAgdXNlcm5hbWU6ICdATWNraW5uZXknLFxyXG4gICAgZW1haWw6ICdob2xkZW5tY2tpbm5leUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM5LFxyXG4gICAgZmlyc3ROYW1lOiAnQmFrZXInLFxyXG4gICAgbGFzdE5hbWU6ICdSaXZlcmEnLFxyXG4gICAgdXNlcm5hbWU6ICdATW9udG95YScsXHJcbiAgICBlbWFpbDogJ2Jha2VybW9udG95YUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA0N1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQwLFxyXG4gICAgZmlyc3ROYW1lOiAnQmVsaW5kYScsXHJcbiAgICBsYXN0TmFtZTogJ0xsb3lkJyxcclxuICAgIHVzZXJuYW1lOiAnQENhbGRlcm9uJyxcclxuICAgIGVtYWlsOiAnYmVsaW5kYWNhbGRlcm9uQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDIxXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDEsXHJcbiAgICBmaXJzdE5hbWU6ICdQZWFyc29uJyxcclxuICAgIGxhc3ROYW1lOiAnUGF0cmljaycsXHJcbiAgICB1c2VybmFtZTogJ0BDbGVtZW50cycsXHJcbiAgICBlbWFpbDogJ3BlYXJzb25jbGVtZW50c0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQyLFxyXG4gICAgZmlyc3ROYW1lOiAnQWx5Y2UnLFxyXG4gICAgbGFzdE5hbWU6ICdNY2tlZScsXHJcbiAgICB1c2VybmFtZTogJ0BEYXVnaGVydHknLFxyXG4gICAgZW1haWw6ICdhbHljZWRhdWdoZXJ0eUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQzLFxyXG4gICAgZmlyc3ROYW1lOiAnVmFsZW5jaWEnLFxyXG4gICAgbGFzdE5hbWU6ICdTcGVuY2UnLFxyXG4gICAgdXNlcm5hbWU6ICdAT2xzZW4nLFxyXG4gICAgZW1haWw6ICd2YWxlbmNpYW9sc2VuQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDQsXHJcbiAgICBmaXJzdE5hbWU6ICdMZWFjaCcsXHJcbiAgICBsYXN0TmFtZTogJ0hvbGNvbWInLFxyXG4gICAgdXNlcm5hbWU6ICdASHVtcGhyZXknLFxyXG4gICAgZW1haWw6ICdsZWFjaGh1bXBocmV5QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDUsXHJcbiAgICBmaXJzdE5hbWU6ICdNb3NzJyxcclxuICAgIGxhc3ROYW1lOiAnQmF4dGVyJyxcclxuICAgIHVzZXJuYW1lOiAnQEZpdHpwYXRyaWNrJyxcclxuICAgIGVtYWlsOiAnbW9zc2ZpdHpwYXRyaWNrQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDUxXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDYsXHJcbiAgICBmaXJzdE5hbWU6ICdKZWFubmUnLFxyXG4gICAgbGFzdE5hbWU6ICdDb29rZScsXHJcbiAgICB1c2VybmFtZTogJ0BXYXJkJyxcclxuICAgIGVtYWlsOiAnamVhbm5ld2FyZEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1OVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ3LFxyXG4gICAgZmlyc3ROYW1lOiAnV2lsbWEnLFxyXG4gICAgbGFzdE5hbWU6ICdCcmlnZ3MnLFxyXG4gICAgdXNlcm5hbWU6ICdAS2lkZCcsXHJcbiAgICBlbWFpbDogJ3dpbG1ha2lkZEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1M1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ4LFxyXG4gICAgZmlyc3ROYW1lOiAnQmVhdHJpY2UnLFxyXG4gICAgbGFzdE5hbWU6ICdQZXJyeScsXHJcbiAgICB1c2VybmFtZTogJ0BHaWxiZXJ0JyxcclxuICAgIGVtYWlsOiAnYmVhdHJpY2VnaWxiZXJ0QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDM5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDksXHJcbiAgICBmaXJzdE5hbWU6ICdXaGl0YWtlcicsXHJcbiAgICBsYXN0TmFtZTogJ0h5ZGUnLFxyXG4gICAgdXNlcm5hbWU6ICdATWNkb25hbGQnLFxyXG4gICAgZW1haWw6ICd3aGl0YWtlcm1jZG9uYWxkQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDM1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTAsXHJcbiAgICBmaXJzdE5hbWU6ICdSZWJla2FoJyxcclxuICAgIGxhc3ROYW1lOiAnRHVyYW4nLFxyXG4gICAgdXNlcm5hbWU6ICdAR3Jvc3MnLFxyXG4gICAgZW1haWw6ICdyZWJla2FoZ3Jvc3NAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MSxcclxuICAgIGZpcnN0TmFtZTogJ0VhcmxpbmUnLFxyXG4gICAgbGFzdE5hbWU6ICdNYXllcicsXHJcbiAgICB1c2VybmFtZTogJ0BXb29kd2FyZCcsXHJcbiAgICBlbWFpbDogJ2VhcmxpbmV3b29kd2FyZEBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUyLFxyXG4gICAgZmlyc3ROYW1lOiAnTW9yYW4nLFxyXG4gICAgbGFzdE5hbWU6ICdCYXh0ZXInLFxyXG4gICAgdXNlcm5hbWU6ICdASm9obnMnLFxyXG4gICAgZW1haWw6ICdtb3JhbmpvaG5zQGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBmaXJzdE5hbWU6ICdOYW5ldHRlJyxcclxuICAgIGxhc3ROYW1lOiAnSHViYmFyZCcsXHJcbiAgICB1c2VybmFtZTogJ0BDb29rZScsXHJcbiAgICBlbWFpbDogJ25hbmV0dGVjb29rZUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU0LFxyXG4gICAgZmlyc3ROYW1lOiAnRGFsdG9uJyxcclxuICAgIGxhc3ROYW1lOiAnV2Fsa2VyJyxcclxuICAgIHVzZXJuYW1lOiAnQEhlbmRyaWNrcycsXHJcbiAgICBlbWFpbDogJ2RhbHRvbmhlbmRyaWNrc0Bjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU1LFxyXG4gICAgZmlyc3ROYW1lOiAnQmVubmV0dCcsXHJcbiAgICBsYXN0TmFtZTogJ0JsYWtlJyxcclxuICAgIHVzZXJuYW1lOiAnQFBlbmEnLFxyXG4gICAgZW1haWw6ICdiZW5uZXR0cGVuYUBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAxM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU2LFxyXG4gICAgZmlyc3ROYW1lOiAnS2VsbGllJyxcclxuICAgIGxhc3ROYW1lOiAnSG9ydG9uJyxcclxuICAgIHVzZXJuYW1lOiAnQFdlaXNzJyxcclxuICAgIGVtYWlsOiAna2VsbGlld2Vpc3NAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogNDhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NyxcclxuICAgIGZpcnN0TmFtZTogJ0hvYmJzJyxcclxuICAgIGxhc3ROYW1lOiAnVGFsbGV5JyxcclxuICAgIHVzZXJuYW1lOiAnQFNhbmZvcmQnLFxyXG4gICAgZW1haWw6ICdob2Jic3NhbmZvcmRAY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMjhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1OCxcclxuICAgIGZpcnN0TmFtZTogJ01jZ3VpcmUnLFxyXG4gICAgbGFzdE5hbWU6ICdEb25hbGRzb24nLFxyXG4gICAgdXNlcm5hbWU6ICdAUm9tYW4nLFxyXG4gICAgZW1haWw6ICdtY2d1aXJlcm9tYW5AY29tdG91cnMuY29tJyxcclxuICAgIGFnZTogMzhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1OSxcclxuICAgIGZpcnN0TmFtZTogJ1JvZHJpcXVleicsXHJcbiAgICBsYXN0TmFtZTogJ1NhdW5kZXJzJyxcclxuICAgIHVzZXJuYW1lOiAnQEhhcnBlcicsXHJcbiAgICBlbWFpbDogJ3JvZHJpcXVlemhhcnBlckBjb210b3Vycy5jb20nLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYwLFxyXG4gICAgZmlyc3ROYW1lOiAnTG91JyxcclxuICAgIGxhc3ROYW1lOiAnQ29ubmVyJyxcclxuICAgIHVzZXJuYW1lOiAnQFNhbmNoZXonLFxyXG4gICAgZW1haWw6ICdsb3VzYW5jaGV6QGNvbXRvdXJzLmNvbScsXHJcbiAgICBhZ2U6IDE2XHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR19TRVRUSU5HUyA9IHtcclxuICBhZGQ6IHtcclxuICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi1wbHVzXFwnPjwvaT4nLFxyXG4gICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVxcJ25iLWNoZWNrbWFya1xcJz48L2k+JyxcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi1jbG9zZVxcJz48L2k+JyxcclxuICAgIGNvbmZpcm1DcmVhdGU6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgZWRpdDoge1xyXG4gICAgZWRpdEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi1lZGl0XFwnPjwvaT4nLFxyXG4gICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi1jaGVja21hcmtcXCc+PC9pPicsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XFwnbmItY2xvc2VcXCc+PC9pPicsXHJcbiAgICBjb25maXJtU2F2ZTogJ3RydWUnXHJcbiAgfSxcclxuICBkZWxldGU6IHtcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cXCduYi10cmFzaFxcJz48L2k+JyxcclxuICAgIGNvbmZpcm1EZWxldGU6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgc2VsZWN0TW9kZTogJ211bHRpJyxcclxuICBjb2x1bW5zOiB7XHJcbiAgICBpZDoge1xyXG4gICAgICB0aXRsZTogJ0lEJyxcclxuICAgICAgZWRpdGFibGU6ICdmYWxzZScsXHJcbiAgICAgIGFkZGFibGU6ICdmYWxzZScsXHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBub3RTaG93bkZpZWxkOiAndHJ1ZScsXHJcbiAgICAgIGhpZGVIZWFkZXI6ICd0cnVlJyxcclxuICAgICAgb3JkZXI6IDBcclxuICAgIH0sXHJcbiAgICBmaXJzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6ICdsaXN0JyxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHNlbGVjdFRleHQ6ICdTZWxlY3QuLi4nLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdqYWNvYicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdqYWNvYidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnaGNnbHdqbHdjZ3d3Y2d3Y3dqJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ2hjZ2x3amx3Y2d3d2Nnd2N3aidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnTWVkJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ01lZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbm90U2hvd25GaWVsZDogJ2ZhbHNlJyxcclxuICAgICAgb3JkZXI6IDFcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0aXRsZTogJ1VzZXJuYW1lJyxcclxuICAgICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgICBvcmRlcjogMlxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiAnTGFzdCBOYW1lJyxcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIG9yZGVyOiAzXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdGl0bGU6ICdFLW1haWwnLFxyXG4gICAgICB0eXBlOiAnaHRtbCcsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6ICdjb21wbGV0ZXInLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgY29tcGxldGVyOiB7XHJcbiAgICAgICAgICAgIGRhdGE6ICd0aGlzLnNvdXJjZScsXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkczogJ2NvbXBsZXRlcicsXHJcbiAgICAgICAgICAgIHRpdGxlRmllbGQ6ICdlbWFpbCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB2YWx1ZTogJzxpbnB1dCAgdHlwZT1cXCdlbWFpbFxcJz4nXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA0XHJcbiAgICB9LFxyXG4gICAgYWdlOiB7XHJcbiAgICAgIHRpdGxlOiAnRGF0ZScsXHJcbiAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogJ2xpc3QnLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogJ1NlbGVjdC4uLicsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ2phY29iJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ2phY29iJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdoY2dsd2psd2Nnd3djZ3djd2onLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnaGNnbHdqbHdjZ3d3Y2d3Y3dqJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdZYXNzaW4nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnWWFzc2luJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICdZYXNzJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1lhc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ0FubicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdBbm4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ1RPVE8nLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVE9UTydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnTWVkJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ01lZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQkVuJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ0JFbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnbW9oYW1tZWQgYmVueWFrb3ViJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ21vaGFtbWVkIGJlbnlha291YidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnU0VMTEFNSScsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdTRUxMQU1JJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6ICd0YWxhTCcsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICd0YWxhTCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAnPGI+U2FtYW50aGE8L2I+JyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1NhbWFudGhhJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNVxyXG4gICAgfSxcclxuICAgIHBhc3NlZDoge1xyXG4gICAgICB0aXRsZTogJ1Bhc3NlZCcsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICB0cnVlOiAnWWVzJyxcclxuICAgICAgICAgIGZhbHNlOiAnTm8nLFxyXG4gICAgICAgICAgcmVzZXRUZXh0OiAnY2xlYXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNlxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19