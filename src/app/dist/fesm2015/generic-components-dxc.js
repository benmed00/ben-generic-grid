import { __decorate, __metadata } from 'tslib';
import { Component, ViewEncapsulation, defineInjectable, inject, Injectable, EventEmitter, Input, ViewChild, Output, TemplateRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';
import { NbWindowService, NbCardModule, NbButtonModule, NbThemeModule, NbLayoutModule, NbSelectModule, NbCheckboxModule, NbAccordionModule, NbWindowModule } from '@nebular/theme';
import { Router, RouterModule } from '@angular/router';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NbWindowComponent } from '@nebular/theme/components/window/window.component';

let TablesComponent = class TablesComponent {
};
TablesComponent = __decorate([
    Component({
        selector: 'app-tables',
        template: `<router-outlet></router-outlet>`,
        encapsulation: ViewEncapsulation.Native
    })
], TablesComponent);

// import {environment} from 'src\environments';
// import { SmartTableData } from './smart-table';
// import { CONFIG_SETTINGS } from "assets/utils/settings"; // javascript oobject
class SmartTableData {
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
SmartTableService.ngInjectableDef = defineInjectable({ factory: function SmartTableService_Factory() { return new SmartTableService(inject(HttpClient)); }, token: SmartTableService, providedIn: "root" });
SmartTableService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [HttpClient])
], SmartTableService);
var PreferencesType;
(function (PreferencesType) {
    PreferencesType[PreferencesType["PREF_ORDER"] = 0] = "PREF_ORDER";
    PreferencesType[PreferencesType["PREF_SORT"] = 1] = "PREF_SORT";
    PreferencesType[PreferencesType["PREF_FILTER"] = 2] = "PREF_FILTER";
    PreferencesType[PreferencesType["PREF_VISIBILITY"] = 3] = "PREF_VISIBILITY"; // string
})(PreferencesType || (PreferencesType = {}));
const PREFERENCE_OBJECT = {
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
const DATA_Grid = [
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
const CONFIG_OBJECT_VINCI = {
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
const DATA_Table = [
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
const CONFIG_SETTINGS = {
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartTableComponent.prototype, "config", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], SmartTableComponent.prototype, "datafromServer", void 0);
__decorate([
    ViewChild('ng2smart'),
    __metadata("design:type", Object)
], SmartTableComponent.prototype, "ng2smart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SmartTableComponent.prototype, "dataEvent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SmartTableComponent.prototype, "ligneData", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SmartTableComponent.prototype, "eventPreference", void 0);
__decorate([
    ViewChild('contentTemplate'),
    __metadata("design:type", TemplateRef)
], SmartTableComponent.prototype, "contentTemplate", void 0);
SmartTableComponent = __decorate([
    Component({
        selector: 'generic-datagrid',
        template: "<nb-card>\r\n  <nb-card-header>\r\n    <button nbButton shape=\"semi-round\" status=\"info\" (click)=\"savePreferences()\">\r\n      Sauvegarder mes pr\u00E9f\u00E9rences\r\n    </button>\r\n    <ng-content></ng-content>\r\n    <br />\r\n    <br />\r\n    <div class=\"vc-accordion\">\r\n      <nb-accordion multi>\r\n        <nb-accordion-item>\r\n          <nb-accordion-item-header>\r\n            Mes Pr\u00E9ferences\r\n          </nb-accordion-item-header>\r\n          <nb-accordion-item-body>\r\n            <nb-card>\r\n              <nb-card-header>S\u00E9lection des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <nb-select cdkDropList multiple placeholder=\"S\u00E9lection Multiple \" class=\"columns-selection\"\r\n                  (selectedChange)=\"selectColomns($event)\" [(selected)]=\"selectedItem\" shape=\"round\" size=\"small\">\r\n                  <nb-select-label>\r\n                    S\u00E9lectioner les colonnes \u00E0 afficher\r\n                  </nb-select-label>\r\n                  <nb-option *ngFor=\"let col of columns | keyvalue\" value=\"{{ col.key }}\" [disabled]=\"\r\n                      selectedItem.length > 10 && !selectedItem.includes(col.key)\">\r\n                    {{ col.value.title }}\r\n                  </nb-option>\r\n                </nb-select>\r\n              </nb-card-body>\r\n            </nb-card>\r\n            <nb-card>\r\n              <nb-card-header>Tri des colonnes</nb-card-header>\r\n              <nb-card-body>\r\n                <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\"\r\n                  (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\" *ngFor=\"let item of columnsArrayOfObjects\" cdkDrag>\r\n                    {{ item.title }}\r\n                  </div>\r\n                </div>\r\n              </nb-card-body>\r\n            </nb-card>\r\n          </nb-accordion-item-body>\r\n        </nb-accordion-item>\r\n      </nb-accordion>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [(settings)]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n      (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"\r\n      (rowHover)=\"sourieSurLigne($event)\" (custom)=\"onCustomAction($event)\" (userRowSelect)=\"onCustomAction($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"
        // changeDetection: ChangeDetectionStrategy.OnPush,
        ,
        styles: ["nb-card{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.search-input{width:100%;display:block;margin-bottom:1rem;margin-right:1rem}.columns-selection{float:center;display:block;width:90%;margin-bottom:1%}.vc-accordion{width:100%;height:auto;clear:both}button{margin:1rem}.example-list{width:100%;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.action-column{position:absolute;top:.2em;right:.2em}::ng-deep tr td.ng2-smart-actions{height:100%}::ng-deep tr td.ng2-smart-actions a.ng2-smart-action-custom-custom{width:50%!important;float:left}::ng-deep tr.consulterModifier i.nb-plus{display:none}::ng-deep tr.creerConsulter i.nb-edit{display:none}::ng-deep tr.creer i.nb-edit{display:none}::ng-deep tr.creer i.nb-search{display:none}"]
    }),
    __metadata("design:paramtypes", [SmartTableService,
        ComponentFactoryResolver,
        HttpClient,
        NbWindowService,
        Router])
], SmartTableComponent);

const routes = [
    {
        path: "",
        component: SmartTableComponent,
        children: [
            {
                path: "smart-table",
                component: SmartTableComponent
            }
        ]
    }
];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TablesRoutingModule);
const routedComponents = [
    TablesComponent,
    SmartTableComponent
];

let CustomRenderComponent = class CustomRenderComponent {
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "rowData", void 0);
CustomRenderComponent = __decorate([
    Component({
        template: `
    {{renderValue}}
  `
    })
], CustomRenderComponent);

// import { MatFormFieldModule } from '@angular/material/form-field';
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            TablesRoutingModule,
            DragDropModule,
            HttpClientModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            NbCardModule,
            Ng2CompleterModule,
            Ng2SmartTableModule,
            NbCardModule,
            NbButtonModule,
            NbThemeModule,
            NbLayoutModule,
            NbCardModule,
            NbButtonModule,
            NgbModule,
            NbLayoutModule,
            NbSelectModule,
            NbCheckboxModule,
            NbAccordionModule,
            NbWindowModule,
        ],
        providers: [SmartTableService],
        declarations: [...routedComponents, CustomRenderComponent],
        entryComponents: [
            CustomRenderComponent, NbWindowComponent
        ],
        exports: [SmartTableComponent]
    })
], TablesModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CONFIG_OBJECT_VINCI, CONFIG_SETTINGS, DATA_Grid, DATA_Table, PREFERENCE_OBJECT, PreferencesType, SmartTableComponent, SmartTableData, SmartTableService, TablesModule, TablesRoutingModule as ɵa, routedComponents as ɵb, TablesComponent as ɵc, CustomRenderComponent as ɵd };
//# sourceMappingURL=generic-components-dxc.js.map
