import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
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
        this._url = "assets/utils/config_table.json";
        this._url0 = "assets/utils/vinci_data.json";
        this._url1 = "assets/utils/settings.ts";
        this._url2 = "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
        this._url3 = "http://localhost:3000";
        // apiUrl = environment.apiUrl;
        this.apiUrl = "https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils";
    }
    getData() {
        // return DATA_Table;
        return DATA_Grid;
    }
    getDataFromBackend() {
        console.log(" Get Data Service ");
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
    deleteDataFromBackend() {
    }
    addDataFromBackend() {
    }
    getSettings() {
        // return CONFIG_SETTINGS;
        return CONFIG_OBJECT_VINCI;
    }
    updateColumns(columns) {
        console.log(" ==> UPDATE COLUMNS ==> ");
        CONFIG_OBJECT_VINCI.columns = columns;
    }
    savePreferences() {
    }
    // getLifeCycleTable(): Observable<[MobileItem]> {
    // return of(DataMobileListItem).pipe(delay(4000));
    // }
    // updateLifeCycleTableItem(mobileListEditFormComponent: MobileListEditFormComponent): Observable<any> {
    //   console.log('Adding... ', mobileListEditFormComponent);
    //   return of(null).pipe(delay(2000));
    // }
    getSetting() { }
    getVinciSetting() {
        return this._http.get(this._url0);
        // return JSON.stringify(this._url);
        // return this._http.get<any[]>(this._url);
        // return this._http.get(this._url).pipe(map((res: any) => res));
        // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
    }
    editVinciSetting(settings) {
        // return this.http.put("https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json", settings);
        // CONFIG_OBJECT_VINCI.unshift() = settings;
    }
    getSettingsFromGitHub() {
        return this._http.get(this.apiUrl + '/settings.ts').pipe(catchError(this.handleError));
    }
    updateData() {
        return DATA_Table;
    }
    updateSettings(settings) {
        console.log(" Update Settings Service ");
        console.log("Settings to sauvgard : ", settings);
        return this._http.post("http://localhost:3000", settings)
            .subscribe({
            next: data => {
                console.log("data retourned from the backend : ", data);
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
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SmartTableService);
export { SmartTableService };
export const DATA_Grid = [
    {
        id: 123456,
        nom: "LIMOURI",
        prenom: "Anouar",
        societe: "VGCP",
        fonctionOfficiel: "Architecte IT",
        affectation: "Métro d air",
        periodeAffectation: "26/04/2019 - 31/12/2019",
        fonctionOperationnel: "Architecte appliquer",
        statut: "Actif"
    },
    {
        id: 234567,
        nom: "DUPONT",
        prenom: "François",
        societe: "VGCP",
        fonctionOfficiel: "Chef de projet",
        affectation: "T3C",
        periodeAffectation: "27/04/2019 - 31/12/2019",
        fonctionOperationnel: "Chef de projet",
        statut: "Inactif"
    },
    {
        id: 829077,
        nom: "GARNIEF",
        prenom: "Laurent",
        societe: "DCB",
        fonctionOfficiel: "Maçon",
        affectation: "Affectation",
        periodeAffectation: "28/04/2019 - 31/12/2019",
        fonctionOperationnel: "Chef de chantier",
        statut: "A compléter"
    },
    {
        id: 766789,
        nom: "GAR",
        prenom: "Laure",
        societe: "Eeiffage",
        fonctionOfficiel: "Peintre",
        affectation: "Métro du Caire",
        periodeAffectation: "29/04/2019 - 31/12/2019",
        fonctionOperationnel: "Chef d'équipe",
        statut: "Disponible"
    },
    {
        id: 345678,
        nom: "CHAOUC",
        prenom: "Mohammed",
        societe: "DXC",
        fonctionOfficiel: "jconsultant SIRH",
        affectation: "Métro de Copenhague ligne 4",
        periodeAffectation: "30/04/2019 - 31/12/2019",
        fonctionOperationnel: "PPO",
        statut: "Indisponible"
    },
    {
        id: 456789,
        nom: "DUBO",
        prenom: "Meidy",
        societe: "VINCI",
        fonctionOfficiel: "Maçon",
        affectation: "Métro de Copenhague ligne 4",
        periodeAffectation: "01/04/2019 - 31/09/2019",
        fonctionOperationnel: "Fonction opérationnel",
        statut: "Sorti"
    },
    {
        id: 567890,
        nom: "BENYAKOUB",
        prenom: "Med",
        societe: "DXC Technologie",
        fonctionOfficiel: "Peintre",
        affectation: "Aeroport international Arturo Merino Benitez",
        periodeAffectation: "26/04/2019 - 31/09/2019",
        fonctionOperationnel: "Couvreur",
        statut: "Sorti"
    },
    {
        id: 111111,
        nom: "LEBHAR",
        prenom: "Naoufal",
        societe: "DCB",
        fonctionOfficiel: "Architecte",
        affectation: "Pont de L'Atlantique",
        periodeAffectation: "26/04/2019 - 01/12/2019",
        fonctionOperationnel: "Electicien",
        statut: "Archivé"
    },
    {
        id: 666666,
        nom: "TALAL",
        prenom: "Mohssine",
        societe: "DXC",
        fonctionOfficiel: "Directeur de projet",
        affectation: "Station d'épuration de Bruxelles sud",
        periodeAffectation: "26/06/2019 - 31/12/2019",
        fonctionOperationnel: "Conducteur de trvail",
        statut: "Actif"
    },
    {
        id: 101112,
        nom: "ABARGHAZ",
        prenom: "Eiffage",
        societe: "@karen",
        fonctionOfficiel: "Consultante",
        affectation: "Métro de Doha ligne rouge sud",
        periodeAffectation: "26/04/2019 - 31/12/2019",
        fonctionOperationnel: "Maçon",
        statut: "Disponible"
    }
];
export const CONFIG_OBJECT_VINCI = {
    add: {
        addButtonContent: "<i class='nb-plus'></i>",
        createButtonContent: "<i class='nb-checkmark'></i>",
        cancelButtonContent: "<i class='nb-close'></i>",
        confirmCreate: "true"
    },
    edit: {
        editButtonContent: "<i class='nb-edit'></i>",
        saveButtonContent: "<i class='nb-checkmark'></i>",
        cancelButtonContent: "<i class='nb-close'></i>",
        confirmSave: "true"
    },
    delete: {
        deleteButtonContent: "<i class='nb-trash'></i>",
        confirmDelete: "true"
    },
    selectMode: "multi",
    columns: {
        id: {
            title: "ID VINCI",
            editable: "false",
            addable: "false",
            type: "number",
            notShownField: "true",
            hideHeader: "true",
            order: 0,
            filter: false
        },
        nom: {
            title: "Nom",
            type: "string",
            filter: false,
            notShownField: "false",
            order: 1,
        },
        prenom: {
            title: "Prénom",
            type: "html",
            order: 2,
            filter: false
        },
        societe: {
            title: "Société",
            type: "string",
            order: 3,
            filter: false
        },
        fonctionOfficiel: {
            title: "Fonction officiel",
            type: "html",
            filter: false,
            editor: {
                type: "text",
                value: "<input  type='email'>"
            },
            order: 4,
        },
        affectation: {
            title: "Affectation",
            type: "html",
            editor: {
                type: "list",
                config: {
                    selectText: "Select...",
                    list: [
                        {
                            value: "jacob",
                            title: "jacob"
                        },
                        {
                            value: "hcglwjlwcgwwcgwcwj",
                            title: "hcglwjlwcgwwcgwcwj"
                        },
                        {
                            value: "Yassin",
                            title: "Yassin"
                        },
                        {
                            value: "Yass",
                            title: "Yass"
                        },
                        {
                            value: "Ann",
                            title: "Ann"
                        },
                        {
                            value: "TOTO",
                            title: "TOTO"
                        },
                        {
                            value: "Med",
                            title: "Med"
                        },
                        {
                            value: "BEn",
                            title: "BEn"
                        },
                        {
                            value: "mohammed benyakoub",
                            title: "mohammed benyakoub"
                        },
                        {
                            value: "SELLAMI",
                            title: "SELLAMI"
                        },
                        {
                            value: "talaL",
                            title: "talaL"
                        },
                        {
                            value: "<b>Samantha</b>",
                            title: "Samantha"
                        }
                    ]
                }
            },
            order: 5,
            filter: false
        },
        periodeAffectation: {
            title: "Période d'affectation",
            filter: false,
            order: 6,
        },
        fonctionOperationnel: {
            title: "Fonction opérationnel",
            editable: "false",
            order: 7,
            filter: false
        },
        statut: {
            title: "Statut",
            editable: "true",
            filter: false,
            order: 8,
        }
    }
};
export const DATA_Table = [
    {
        id: 1,
        firstName: "Mark",
        lastName: "OTTOO",
        username: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        email: "mdo@gmail.com",
        age: "28",
        passed: "Yes"
    },
    {
        id: 2,
        firstName: "Jacob",
        lastName: "Thornton",
        username: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/DXC_Tech.png/280px-DXC_Tech.png" alt="Smiley face" height="42" idth="42">',
        email: "fat@yandex.ru",
        age: "45",
        passed: "Yes"
    },
    {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        username: "@twitter",
        email: "twitter@outlook.com",
        age: "18",
        passed: "Yes"
    },
    {
        id: 4,
        firstName: "John",
        lastName: "Snow",
        username: "@snow",
        email: "snow@gmail.com",
        age: "20",
        passed: "Yes"
    },
    {
        id: 5,
        firstName: "Jack",
        lastName: "Sparrow",
        username: "@jack",
        email: "jack@yandex.ru",
        age: "30",
        passed: "No"
    },
    {
        id: 6,
        firstName: "Ann",
        lastName: "Smith",
        username: "@ann",
        email: "ann@gmail.com",
        age: "21",
        passed: "No"
    },
    {
        id: 7,
        firstName: "Barbara",
        lastName: "Black",
        username: "@barbara",
        email: "barbara@yandex.ru",
        age: "43",
        passed: "No"
    },
    {
        id: 8,
        firstName: "Sevan",
        lastName: "Bagrat",
        username: "@sevan",
        email: "sevan@outlook.com",
        age: "13",
        passed: "No"
    },
    {
        id: 9,
        firstName: "Ruben",
        lastName: "Vardan",
        username: "@ruben",
        email: "ruben@gmail.com",
        age: "22",
        passed: "No"
    },
    {
        id: 10,
        firstName: "Karen",
        lastName: "Sevan",
        username: "@karen",
        email: "karen@yandex.ru",
        age: "33",
        passed: "No"
    },
    {
        id: 11,
        firstName: "Mark",
        lastName: "Otto",
        username: "@mark",
        email: "mark@gmail.com",
        age: "38"
    },
    {
        id: 12,
        firstName: "Jacob",
        lastName: "Thornton",
        username: "@jacob",
        email: "jacob@yandex.ru",
        age: "48",
        passed: "No"
    },
    {
        id: 13,
        firstName: "Haik",
        lastName: "Hakob",
        username: "@haik",
        email: "haik@outlook.com",
        age: "48"
    },
    {
        id: 14,
        firstName: "Garegin",
        lastName: "Jirair",
        username: "@garegin",
        email: "garegin@gmail.com",
        age: "40"
    },
    {
        id: 15,
        firstName: "Krikor",
        lastName: "Bedros",
        username: "@krikor",
        email: "krikor@yandex.ru",
        age: "32"
    },
    {
        id: 16,
        firstName: "Francisca",
        lastName: "Brady",
        username: "@Gibson",
        email: "franciscagibson@comtours.com",
        age: 11
    },
    {
        id: 17,
        firstName: "Tillman",
        lastName: "Figueroa",
        username: "@Snow",
        email: "tillmansnow@comtours.com",
        age: 34
    },
    {
        id: 18,
        firstName: "Jimenez",
        lastName: "Morris",
        username: "@Bryant",
        email: "jimenezbryant@comtours.com",
        age: 45
    },
    {
        id: 19,
        firstName: "Sandoval",
        lastName: "Jacobson",
        username: "@Mcbride",
        email: "sandovalmcbride@comtours.com",
        age: 32
    },
    {
        id: 20,
        firstName: "Griffin",
        lastName: "Torres",
        username: "@Charles",
        email: "griffincharles@comtours.com",
        age: 19
    },
    {
        id: 21,
        firstName: "Cora",
        lastName: "Parker",
        username: "@Caldwell",
        email: "coracaldwell@comtours.com",
        age: 27
    },
    {
        id: 22,
        firstName: "Cindy",
        lastName: "Bond",
        username: "@Velez",
        email: "cindyvelez@comtours.com",
        age: 24
    },
    {
        id: 23,
        firstName: "Frieda",
        lastName: "Tyson",
        username: "@Craig",
        email: "friedacraig@comtours.com",
        age: 45
    },
    {
        id: 24,
        firstName: "Cote",
        lastName: "Holcomb",
        username: "@Rowe",
        email: "coterowe@comtours.com",
        age: 20
    },
    {
        id: 25,
        firstName: "Trujillo",
        lastName: "Mejia",
        username: "@Valenzuela",
        email: "trujillovalenzuela@comtours.com",
        age: 16
    },
    {
        id: 26,
        firstName: "Pruitt",
        lastName: "Shepard",
        username: "@Sloan",
        email: "pruittsloan@comtours.com",
        age: 44
    },
    {
        id: 27,
        firstName: "Sutton",
        lastName: "Ortega",
        username: "@Black",
        email: "suttonblack@comtours.com",
        age: 42
    },
    {
        id: 28,
        firstName: "Marion",
        lastName: "Heath",
        username: "@Espinoza",
        email: "marionespinoza@comtours.com",
        age: 47
    },
    {
        id: 29,
        firstName: "Newman",
        lastName: "Hicks",
        username: "@Keith",
        email: "newmankeith@comtours.com",
        age: 15
    },
    {
        id: 30,
        firstName: "Boyle",
        lastName: "Larson",
        username: "@Summers",
        email: "boylesummers@comtours.com",
        age: 32
    },
    {
        id: 31,
        firstName: "Haynes",
        lastName: "Vinson",
        username: "@Mckenzie",
        email: "haynesmckenzie@comtours.com",
        age: 15
    },
    {
        id: 32,
        firstName: "Miller",
        lastName: "Acosta",
        username: "@Young",
        email: "milleryoung@comtours.com",
        age: 55
    },
    {
        id: 33,
        firstName: "Johnston",
        lastName: "Brown",
        username: "@Knight",
        email: "johnstonknight@comtours.com",
        age: 29
    },
    {
        id: 34,
        firstName: "Lena",
        lastName: "Pitts",
        username: "@Forbes",
        email: "lenaforbes@comtours.com",
        age: 25
    },
    {
        id: 35,
        firstName: "Terrie",
        lastName: "Kennedy",
        username: "@Branch",
        email: "terriebranch@comtours.com",
        age: 37
    },
    {
        id: 36,
        firstName: "Louise",
        lastName: "Aguirre",
        username: "@Kirby",
        email: "louisekirby@comtours.com",
        age: 44
    },
    {
        id: 37,
        firstName: "David",
        lastName: "Patton",
        username: "@Sanders",
        email: "davidsanders@comtours.com",
        age: 26
    },
    {
        id: 38,
        firstName: "Holden",
        lastName: "Barlow",
        username: "@Mckinney",
        email: "holdenmckinney@comtours.com",
        age: 11
    },
    {
        id: 39,
        firstName: "Baker",
        lastName: "Rivera",
        username: "@Montoya",
        email: "bakermontoya@comtours.com",
        age: 47
    },
    {
        id: 40,
        firstName: "Belinda",
        lastName: "Lloyd",
        username: "@Calderon",
        email: "belindacalderon@comtours.com",
        age: 21
    },
    {
        id: 41,
        firstName: "Pearson",
        lastName: "Patrick",
        username: "@Clements",
        email: "pearsonclements@comtours.com",
        age: 42
    },
    {
        id: 42,
        firstName: "Alyce",
        lastName: "Mckee",
        username: "@Daugherty",
        email: "alycedaugherty@comtours.com",
        age: 55
    },
    {
        id: 43,
        firstName: "Valencia",
        lastName: "Spence",
        username: "@Olsen",
        email: "valenciaolsen@comtours.com",
        age: 20
    },
    {
        id: 44,
        firstName: "Leach",
        lastName: "Holcomb",
        username: "@Humphrey",
        email: "leachhumphrey@comtours.com",
        age: 28
    },
    {
        id: 45,
        firstName: "Moss",
        lastName: "Baxter",
        username: "@Fitzpatrick",
        email: "mossfitzpatrick@comtours.com",
        age: 51
    },
    {
        id: 46,
        firstName: "Jeanne",
        lastName: "Cooke",
        username: "@Ward",
        email: "jeanneward@comtours.com",
        age: 59
    },
    {
        id: 47,
        firstName: "Wilma",
        lastName: "Briggs",
        username: "@Kidd",
        email: "wilmakidd@comtours.com",
        age: 53
    },
    {
        id: 48,
        firstName: "Beatrice",
        lastName: "Perry",
        username: "@Gilbert",
        email: "beatricegilbert@comtours.com",
        age: 39
    },
    {
        id: 49,
        firstName: "Whitaker",
        lastName: "Hyde",
        username: "@Mcdonald",
        email: "whitakermcdonald@comtours.com",
        age: 35
    },
    {
        id: 50,
        firstName: "Rebekah",
        lastName: "Duran",
        username: "@Gross",
        email: "rebekahgross@comtours.com",
        age: 40
    },
    {
        id: 51,
        firstName: "Earline",
        lastName: "Mayer",
        username: "@Woodward",
        email: "earlinewoodward@comtours.com",
        age: 52
    },
    {
        id: 52,
        firstName: "Moran",
        lastName: "Baxter",
        username: "@Johns",
        email: "moranjohns@comtours.com",
        age: 20
    },
    {
        id: 53,
        firstName: "Nanette",
        lastName: "Hubbard",
        username: "@Cooke",
        email: "nanettecooke@comtours.com",
        age: 55
    },
    {
        id: 54,
        firstName: "Dalton",
        lastName: "Walker",
        username: "@Hendricks",
        email: "daltonhendricks@comtours.com",
        age: 25
    },
    {
        id: 55,
        firstName: "Bennett",
        lastName: "Blake",
        username: "@Pena",
        email: "bennettpena@comtours.com",
        age: 13
    },
    {
        id: 56,
        firstName: "Kellie",
        lastName: "Horton",
        username: "@Weiss",
        email: "kellieweiss@comtours.com",
        age: 48
    },
    {
        id: 57,
        firstName: "Hobbs",
        lastName: "Talley",
        username: "@Sanford",
        email: "hobbssanford@comtours.com",
        age: 28
    },
    {
        id: 58,
        firstName: "Mcguire",
        lastName: "Donaldson",
        username: "@Roman",
        email: "mcguireroman@comtours.com",
        age: 38
    },
    {
        id: 59,
        firstName: "Rodriquez",
        lastName: "Saunders",
        username: "@Harper",
        email: "rodriquezharper@comtours.com",
        age: 20
    },
    {
        id: 60,
        firstName: "Lou",
        lastName: "Conner",
        username: "@Sanchez",
        email: "lousanchez@comtours.com",
        age: 16
    }
];
export const CONFIG_SETTINGS = {
    add: {
        addButtonContent: "<i class='nb-plus'></i>",
        createButtonContent: "<i class='nb-checkmark'></i>",
        cancelButtonContent: "<i class='nb-close'></i>",
        confirmCreate: "true"
    },
    edit: {
        editButtonContent: "<i class='nb-edit'></i>",
        saveButtonContent: "<i class='nb-checkmark'></i>",
        cancelButtonContent: "<i class='nb-close'></i>",
        confirmSave: "true"
    },
    delete: {
        deleteButtonContent: "<i class='nb-trash'></i>",
        confirmDelete: "true"
    },
    selectMode: "multi",
    columns: {
        id: {
            title: "ID",
            editable: "false",
            addable: "false",
            type: "number",
            notShownField: "true",
            hideHeader: "true",
            order: 0
        },
        firstName: {
            title: "First Name",
            type: "string",
            filter: {
                type: "list",
                config: {
                    selectText: "Select...",
                    list: [
                        {
                            value: "jacob",
                            title: "jacob"
                        },
                        {
                            value: "hcglwjlwcgwwcgwcwj",
                            title: "hcglwjlwcgwwcgwcwj"
                        },
                        {
                            value: "Med",
                            title: "Med"
                        }
                    ]
                }
            },
            notShownField: "false",
            order: 1
        },
        username: {
            title: "Username",
            type: "html",
            order: 2
        },
        lastName: {
            title: "Last Name",
            type: "string",
            order: 3
        },
        email: {
            title: "E-mail",
            type: "html",
            filter: {
                type: "completer",
                config: {
                    completer: {
                        data: "this.source",
                        searchFields: "completer",
                        titleField: "email"
                    }
                }
            },
            editor: {
                type: "text",
                value: "<input  type='email'>"
            },
            order: 4
        },
        age: {
            title: "Date",
            type: "html",
            editor: {
                type: "list",
                config: {
                    selectText: "Select...",
                    list: [
                        {
                            value: "jacob",
                            title: "jacob"
                        },
                        {
                            value: "hcglwjlwcgwwcgwcwj",
                            title: "hcglwjlwcgwwcgwcwj"
                        },
                        {
                            value: "Yassin",
                            title: "Yassin"
                        },
                        {
                            value: "Yass",
                            title: "Yass"
                        },
                        {
                            value: "Ann",
                            title: "Ann"
                        },
                        {
                            value: "TOTO",
                            title: "TOTO"
                        },
                        {
                            value: "Med",
                            title: "Med"
                        },
                        {
                            value: "BEn",
                            title: "BEn"
                        },
                        {
                            value: "mohammed benyakoub",
                            title: "mohammed benyakoub"
                        },
                        {
                            value: "SELLAMI",
                            title: "SELLAMI"
                        },
                        {
                            value: "talaL",
                            title: "talaL"
                        },
                        {
                            value: "<b>Samantha</b>",
                            title: "Samantha"
                        }
                    ]
                }
            },
            order: 5
        },
        passed: {
            title: "Passed",
            filter: {
                type: "checkbox",
                config: {
                    true: "Yes",
                    false: "No",
                    resetText: "clear"
                }
            },
            order: 6
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFrQixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELGlGQUFpRjtBQUNqRixNQUFNLE9BQWdCLGNBQWM7Q0FJbkM7QUFNRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGNBQWM7SUFhbkQsWUFBb0IsS0FBaUI7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFEVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBWnJDLG1DQUFtQztRQUUzQixTQUFJLEdBQVcsZ0NBQWdDLENBQUM7UUFDaEQsVUFBSyxHQUFXLDhCQUE4QixDQUFBO1FBQzlDLFVBQUssR0FBVywwQkFBMEIsQ0FBQztRQUMzQyxVQUFLLEdBQVcsc0ZBQXNGLENBQUM7UUFDdkcsVUFBSyxHQUFXLHVCQUF1QixDQUFDO1FBR2hELCtCQUErQjtRQUMvQixXQUFNLEdBQUcsbUZBQW1GLENBQUM7SUFJN0YsQ0FBQztJQUVELE9BQU87UUFFTCxxQkFBcUI7UUFDckIsT0FBTyxTQUFTLENBQUM7SUFFbkIsQ0FBQztJQUVELGtCQUFrQjtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsaUVBQWlFO1FBQ2pFLGlDQUFpQztRQUNqQyxLQUFLO1FBRUwsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBUSxJQUFJ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QUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbi8vIGltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJ3NyY1xcZW52aXJvbm1lbnRzJztcclxuLy8gaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL3NtYXJ0LXRhYmxlJztcclxuLy8gaW1wb3J0IHsgQ09ORklHX1NFVFRJTkdTIH0gZnJvbSBcImFzc2V0cy91dGlscy9zZXR0aW5nc1wiOyAvLyBqYXZhc2NyaXB0IG9vYmplY3RcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0VGFibGVEYXRhIHtcclxuICBhYnN0cmFjdCBnZXREYXRhKCk6IGFueVtdO1xyXG4gIGFic3RyYWN0IGdldFNldHRpbmdzKCk6IGFueTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5nKCk6IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIGV4dGVuZHMgU21hcnRUYWJsZURhdGEge1xyXG4gIC8vIGV4cG9ydCBjbGFzcyBTbWFydFRhYmxlU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gXCJhc3NldHMvdXRpbHMvY29uZmlnX3RhYmxlLmpzb25cIjtcclxuICBwcml2YXRlIF91cmwwOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy92aW5jaV9kYXRhLmpzb25cIlxyXG4gIHByaXZhdGUgX3VybDE6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzLnRzXCI7XHJcbiAgcHJpdmF0ZSBfdXJsMjogc3RyaW5nID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYmVubWVkMDAvdmluY2ktc2V0dGluZ3MvbWFzdGVyL3ZpbmNpX3NldHRpbmdzLmpzb25cIjtcclxuICBwcml2YXRlIF91cmwzOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuXHJcbiAgLy8gYXBpVXJsID0gZW52aXJvbm1lbnQuYXBpVXJsO1xyXG4gIGFwaVVybCA9IFwiaHR0cHM6Ly9naXRodWIuZHhjLmNvbS9tYmVueWFrb3ViL0dlbmVyaXF1ZS1EYXRhR3JpZC9ibG9iL21hc3Rlci9zcmMvYXNzZXRzL3V0aWxzXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCl7XHJcblxyXG4gICAgLy8gcmV0dXJuIERBVEFfVGFibGU7XHJcbiAgICByZXR1cm4gREFUQV9HcmlkO1xyXG5cclxuICB9XHJcblxyXG4gIGdldERhdGFGcm9tQmFja2VuZCgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiBHZXQgRGF0YSBTZXJ2aWNlIFwiKTtcclxuXHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiArICcvZGF0YScpLnBpcGUoXHJcbiAgICAvLyAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgIC8vICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwwKTtcclxuICAgIC8vIC5zdWJzY3JpYmUoe1xyXG4gICAgLy8gICBuZXh0OiBkYXRhID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmV0b3VybmVkIGZyb20gdGhlIGJhY2tlbmQgOiBcIiwgZGF0YSk7XHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGVycm9yOiB0aGlzLmhhbmRsZUVycm9yXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGVkaXREYXRhRnJvbUJhY2tlbmQoc2V0dGluZ3Mpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxhbnlbXT4odGhpcy5fdXJsMCwgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YUZyb21CYWNrZW5kKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkRGF0YUZyb21CYWNrZW5kKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyByZXR1cm4gQ09ORklHX1NFVFRJTkdTO1xyXG4gICAgcmV0dXJuIENPTkZJR19PQkpFQ1RfVklOQ0k7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2x1bW5zKGNvbHVtbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coXCIgPT0+IFVQREFURSBDT0xVTU5TID09PiBcIik7XHJcbiAgICBDT05GSUdfT0JKRUNUX1ZJTkNJLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByZWZlcmVuY2VzKCl7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRMaWZlQ3ljbGVUYWJsZSgpOiBPYnNlcnZhYmxlPFtNb2JpbGVJdGVtXT4ge1xyXG4gICAgIC8vIHJldHVybiBvZihEYXRhTW9iaWxlTGlzdEl0ZW0pLnBpcGUoZGVsYXkoNDAwMCkpO1xyXG4gICAvLyB9XHJcblxyXG4gIC8vIHVwZGF0ZUxpZmVDeWNsZVRhYmxlSXRlbShtb2JpbGVMaXN0RWRpdEZvcm1Db21wb25lbnQ6IE1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnQWRkaW5nLi4uICcsIG1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudCk7XHJcbiAgLy8gICByZXR1cm4gb2YobnVsbCkucGlwZShkZWxheSgyMDAwKSk7XHJcbiAgLy8gfVxyXG5cclxuICBnZXRTZXR0aW5nKCl7fVxyXG5cclxuICBnZXRWaW5jaVNldHRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX3VybCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKS5waXBlKG1hcCgocmVzOiBhbnkpID0+IHJlcykpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwpLnBpcGUobWFwKChyZXM6IGFueSkgPT4gcmVzKSk7XHJcbiAgfVxyXG4gIGVkaXRWaW5jaVNldHRpbmcoc2V0dGluZ3MgOiB7fSkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wdXQoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYmVubWVkMDAvdmluY2ktc2V0dGluZ3MvbWFzdGVyL3ZpbmNpX3NldHRpbmdzLmpzb25cIiwgc2V0dGluZ3MpO1xyXG4gICAgLy8gQ09ORklHX09CSkVDVF9WSU5DSS51bnNoaWZ0KCkgPSBzZXR0aW5ncztcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzRnJvbUdpdEh1YigpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmFwaVVybCArICcvc2V0dGluZ3MudHMnKS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBEQVRBX1RhYmxlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3Mpe1xyXG4gICAgY29uc29sZS5sb2coXCIgVXBkYXRlIFNldHRpbmdzIFNlcnZpY2UgXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZ3MgdG8gc2F1dmdhcmQgOiBcIiwgc2V0dGluZ3MpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgc2V0dGluZ3MpXHJcbiAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJldG91cm5lZCBmcm9tIHRoZSBiYWNrZW5kIDogXCIsIGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogdGhpcy5oYW5kbGVFcnJvclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBldFNldHRpbmcoKSB7XHJcbiAgICBsZXQgc2V0dGluZztcclxuICAgIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybDIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBzZXR0aW5nID0gcmVzO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxyXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKCdTb21ldGhpbmcgYmFkIGhhcHBlbmVkOyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVZpbmNpSW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5vbTogc3RyaW5nO1xyXG4gIHByZW5vbTogc3RyaW5nO1xyXG4gIHNvY2lldGU6IHN0cmluZztcclxuICBmb25jdGlvbk9mZmljaWVsOiBzdHJpbmc7XHJcbiAgYWZmZWN0YXRpb246IHN0cmluZyB8IG51bWJlcjtcclxuICBwZXJpb2RlQWZmZWN0YXRpb24/OiBzdHJpbmc7XHJcbiAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IHN0cmluZztcclxuICBzdGF0dXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfR3JpZDogVGFibGVWaW5jaUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxMjM0NTYsXHJcbiAgICBub206IFwiTElNT1VSSVwiLFxyXG4gICAgcHJlbm9tOiBcIkFub3VhclwiLFxyXG4gICAgc29jaWV0ZTogXCJWR0NQXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsOiBcIkFyY2hpdGVjdGUgSVRcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIk3DqXRybyBkIGFpclwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI2LzA0LzIwMTkgLSAzMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJBcmNoaXRlY3RlIGFwcGxpcXVlclwiLFxyXG4gICAgc3RhdHV0OiBcIkFjdGlmXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMzQ1NjcsXHJcbiAgICBub206IFwiRFVQT05UXCIsXHJcbiAgICBwcmVub206IFwiRnJhbsOnb2lzXCIsXHJcbiAgICBzb2NpZXRlOiBcIlZHQ1BcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiQ2hlZiBkZSBwcm9qZXRcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIlQzQ1wiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI3LzA0LzIwMTkgLSAzMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJDaGVmIGRlIHByb2pldFwiLFxyXG4gICAgc3RhdHV0OiBcIkluYWN0aWZcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDgyOTA3NyxcclxuICAgIG5vbTogXCJHQVJOSUVGXCIsXHJcbiAgICBwcmVub206IFwiTGF1cmVudFwiLFxyXG4gICAgc29jaWV0ZTogXCJEQ0JcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiTWHDp29uXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJBZmZlY3RhdGlvblwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI4LzA0LzIwMTkgLSAzMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJDaGVmIGRlIGNoYW50aWVyXCIsXHJcbiAgICBzdGF0dXQ6IFwiQSBjb21wbMOpdGVyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3NjY3ODksXHJcbiAgICBub206IFwiR0FSXCIsXHJcbiAgICBwcmVub206IFwiTGF1cmVcIixcclxuICAgIHNvY2lldGU6IFwiRWVpZmZhZ2VcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiUGVpbnRyZVwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiTcOpdHJvIGR1IENhaXJlXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjkvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkNoZWYgZCfDqXF1aXBlXCIsXHJcbiAgICBzdGF0dXQ6IFwiRGlzcG9uaWJsZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzQ1Njc4LFxyXG4gICAgbm9tOiBcIkNIQU9VQ1wiLFxyXG4gICAgcHJlbm9tOiBcIk1vaGFtbWVkXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRYQ1wiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJqY29uc3VsdGFudCBTSVJIXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZGUgQ29wZW5oYWd1ZSBsaWduZSA0XCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMzAvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIlBQT1wiLFxyXG4gICAgc3RhdHV0OiBcIkluZGlzcG9uaWJsZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDU2Nzg5LFxyXG4gICAgbm9tOiBcIkRVQk9cIixcclxuICAgIHByZW5vbTogXCJNZWlkeVwiLFxyXG4gICAgc29jaWV0ZTogXCJWSU5DSVwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJNYcOnb25cIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIk3DqXRybyBkZSBDb3BlbmhhZ3VlIGxpZ25lIDRcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIwMS8wNC8yMDE5IC0gMzEvMDkvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IFwiRm9uY3Rpb24gb3DDqXJhdGlvbm5lbFwiLFxyXG4gICAgc3RhdHV0OiBcIlNvcnRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1Njc4OTAsXHJcbiAgICBub206IFwiQkVOWUFLT1VCXCIsXHJcbiAgICBwcmVub206IFwiTWVkXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRYQyBUZWNobm9sb2dpZVwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJQZWludHJlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJBZXJvcG9ydCBpbnRlcm5hdGlvbmFsIEFydHVybyBNZXJpbm8gQmVuaXRlelwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI2LzA0LzIwMTkgLSAzMS8wOS8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJDb3V2cmV1clwiLFxyXG4gICAgc3RhdHV0OiBcIlNvcnRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMTExMTEsXHJcbiAgICBub206IFwiTEVCSEFSXCIsXHJcbiAgICBwcmVub206IFwiTmFvdWZhbFwiLFxyXG4gICAgc29jaWV0ZTogXCJEQ0JcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiQXJjaGl0ZWN0ZVwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiUG9udCBkZSBMJ0F0bGFudGlxdWVcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyNi8wNC8yMDE5IC0gMDEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IFwiRWxlY3RpY2llblwiLFxyXG4gICAgc3RhdHV0OiBcIkFyY2hpdsOpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2NjY2NjYsXHJcbiAgICBub206IFwiVEFMQUxcIixcclxuICAgIHByZW5vbTogXCJNb2hzc2luZVwiLFxyXG4gICAgc29jaWV0ZTogXCJEWENcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiRGlyZWN0ZXVyIGRlIHByb2pldFwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiU3RhdGlvbiBkJ8OpcHVyYXRpb24gZGUgQnJ1eGVsbGVzIHN1ZFwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI2LzA2LzIwMTkgLSAzMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJDb25kdWN0ZXVyIGRlIHRydmFpbFwiLFxyXG4gICAgc3RhdHV0OiBcIkFjdGlmXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDExMTIsXHJcbiAgICBub206IFwiQUJBUkdIQVpcIixcclxuICAgIHByZW5vbTogXCJFaWZmYWdlXCIsXHJcbiAgICBzb2NpZXRlOiBcIkBrYXJlblwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJDb25zdWx0YW50ZVwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiTcOpdHJvIGRlIERvaGEgbGlnbmUgcm91Z2Ugc3VkXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIk1hw6dvblwiLFxyXG4gICAgc3RhdHV0OiBcIkRpc3BvbmlibGVcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSUdfT0JKRUNUX1ZJTkNJID0ge1xyXG4gIGFkZDoge1xyXG4gICAgYWRkQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItcGx1cyc+PC9pPlwiLFxyXG4gICAgY3JlYXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gICAgY29uZmlybUNyZWF0ZTogXCJ0cnVlXCJcclxuICB9LFxyXG4gIGVkaXQ6IHtcclxuICAgIGVkaXRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1lZGl0Jz48L2k+XCIsXHJcbiAgICBzYXZlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gICAgY29uZmlybVNhdmU6IFwidHJ1ZVwiXHJcbiAgfSxcclxuICBkZWxldGU6IHtcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLXRyYXNoJz48L2k+XCIsXHJcbiAgICBjb25maXJtRGVsZXRlOiBcInRydWVcIlxyXG4gIH0sXHJcbiAgc2VsZWN0TW9kZTogXCJtdWx0aVwiLFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHRpdGxlOiBcIklEIFZJTkNJXCIsXHJcbiAgICAgIGVkaXRhYmxlOiBcImZhbHNlXCIsXHJcbiAgICAgIGFkZGFibGU6IFwiZmFsc2VcIixcclxuICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgbm90U2hvd25GaWVsZDogXCJ0cnVlXCIsXHJcbiAgICAgIGhpZGVIZWFkZXI6IFwidHJ1ZVwiLFxyXG4gICAgICBvcmRlcjogMCxcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG5vbToge1xyXG4gICAgICB0aXRsZTogXCJOb21cIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgbm90U2hvd25GaWVsZDogXCJmYWxzZVwiLFxyXG4gICAgICBvcmRlcjogMSxcclxuICAgIH0sXHJcbiAgICBwcmVub206IHtcclxuICAgICAgdGl0bGU6IFwiUHLDqW5vbVwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGZpbHRlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzb2NpZXRlOiB7XHJcbiAgICAgIHRpdGxlOiBcIlNvY2nDqXTDqVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICBvcmRlcjogMyxcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IHtcclxuICAgICAgdGl0bGU6IFwiRm9uY3Rpb24gb2ZmaWNpZWxcIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjxpbnB1dCAgdHlwZT0nZW1haWwnPlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA0LFxyXG4gICAgfSxcclxuICAgIGFmZmVjdGF0aW9uOiB7XHJcbiAgICAgIHRpdGxlOiBcIkFmZmVjdGF0aW9uXCIsXHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHNlbGVjdFRleHQ6IFwiU2VsZWN0Li4uXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJqYWNvYlwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImphY29iXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJZYXNzaW5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJZYXNzaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiWWFzc1wiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIllhc3NcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiQW5uXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQW5uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlRPVE9cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJUT1RPXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIk1lZFwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1lZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJCRW5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJCRW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwibW9oYW1tZWQgYmVueWFrb3ViXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwibW9oYW1tZWQgYmVueWFrb3ViXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlNFTExBTUlcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTRUxMQU1JXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcInRhbGFMXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwidGFsYUxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiPGI+U2FtYW50aGE8L2I+XCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU2FtYW50aGFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNSxcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjoge1xyXG4gICAgICB0aXRsZTogXCJQw6lyaW9kZSBkJ2FmZmVjdGF0aW9uXCIsXHJcbiAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgfSxcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiB7XHJcbiAgICAgIHRpdGxlOiBcIkZvbmN0aW9uIG9ww6lyYXRpb25uZWxcIixcclxuICAgICAgZWRpdGFibGU6IFwiZmFsc2VcIixcclxuICAgICAgb3JkZXI6IDcsXHJcbiAgICAgIGZpbHRlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdGF0dXQ6IHtcclxuICAgICAgdGl0bGU6IFwiU3RhdHV0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBcInRydWVcIixcclxuICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgb3JkZXI6IDgsXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0ZUludGVyZmFjZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhZ2U6IHN0cmluZyB8IG51bWJlcjtcclxuICBwYXNzZWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBX1RhYmxlOiBUYWJsZURhdGVJbnRlcmZhY2VbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJPVFRPT1wiLFxyXG4gICAgdXNlcm5hbWU6ICc8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FrdmVvL25nMi1hZG1pblwiPk5nMiBBZG1pbjwvYT4nLFxyXG4gICAgZW1haWw6IFwibWRvQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjI4XCIsXHJcbiAgICBwYXNzZWQ6IFwiWWVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkphY29iXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUaG9ybnRvblwiLFxyXG4gICAgdXNlcm5hbWU6XHJcbiAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNy83My9EWENfVGVjaC5wbmcvMjgwcHgtRFhDX1RlY2gucG5nXCIgYWx0PVwiU21pbGV5IGZhY2VcIiBoZWlnaHQ9XCI0MlwiIGlkdGg9XCI0MlwiPicsXHJcbiAgICBlbWFpbDogXCJmYXRAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiNDVcIixcclxuICAgIHBhc3NlZDogXCJZZXNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGFycnlcIixcclxuICAgIGxhc3ROYW1lOiBcIkJpcmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkB0d2l0dGVyXCIsXHJcbiAgICBlbWFpbDogXCJ0d2l0dGVyQG91dGxvb2suY29tXCIsXHJcbiAgICBhZ2U6IFwiMThcIixcclxuICAgIHBhc3NlZDogXCJZZXNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU25vd1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHNub3dcIixcclxuICAgIGVtYWlsOiBcInNub3dAZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjBcIixcclxuICAgIHBhc3NlZDogXCJZZXNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFja1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiU3BhcnJvd1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGphY2tcIixcclxuICAgIGVtYWlsOiBcImphY2tAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiMzBcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGZpcnN0TmFtZTogXCJBbm5cIixcclxuICAgIGxhc3ROYW1lOiBcIlNtaXRoXCIsXHJcbiAgICB1c2VybmFtZTogXCJAYW5uXCIsXHJcbiAgICBlbWFpbDogXCJhbm5AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjFcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIGZpcnN0TmFtZTogXCJCYXJiYXJhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCbGFja1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGJhcmJhcmFcIixcclxuICAgIGVtYWlsOiBcImJhcmJhcmFAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiNDNcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIGZpcnN0TmFtZTogXCJTZXZhblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmFncmF0XCIsXHJcbiAgICB1c2VybmFtZTogXCJAc2V2YW5cIixcclxuICAgIGVtYWlsOiBcInNldmFuQG91dGxvb2suY29tXCIsXHJcbiAgICBhZ2U6IFwiMTNcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIGZpcnN0TmFtZTogXCJSdWJlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVmFyZGFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAcnViZW5cIixcclxuICAgIGVtYWlsOiBcInJ1YmVuQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjIyXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkthcmVuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTZXZhblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGthcmVuXCIsXHJcbiAgICBlbWFpbDogXCJrYXJlbkB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCIzM1wiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJPdHRvXCIsXHJcbiAgICB1c2VybmFtZTogXCJAbWFya1wiLFxyXG4gICAgZW1haWw6IFwibWFya0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIzOFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFjb2JcIixcclxuICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAamFjb2JcIixcclxuICAgIGVtYWlsOiBcImphY29iQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjQ4XCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkhhaWtcIixcclxuICAgIGxhc3ROYW1lOiBcIkhha29iXCIsXHJcbiAgICB1c2VybmFtZTogXCJAaGFpa1wiLFxyXG4gICAgZW1haWw6IFwiaGFpa0BvdXRsb29rLmNvbVwiLFxyXG4gICAgYWdlOiBcIjQ4XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNCxcclxuICAgIGZpcnN0TmFtZTogXCJHYXJlZ2luXCIsXHJcbiAgICBsYXN0TmFtZTogXCJKaXJhaXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBnYXJlZ2luXCIsXHJcbiAgICBlbWFpbDogXCJnYXJlZ2luQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjQwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNSxcclxuICAgIGZpcnN0TmFtZTogXCJLcmlrb3JcIixcclxuICAgIGxhc3ROYW1lOiBcIkJlZHJvc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGtyaWtvclwiLFxyXG4gICAgZW1haWw6IFwia3Jpa29yQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjMyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNixcclxuICAgIGZpcnN0TmFtZTogXCJGcmFuY2lzY2FcIixcclxuICAgIGxhc3ROYW1lOiBcIkJyYWR5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAR2lic29uXCIsXHJcbiAgICBlbWFpbDogXCJmcmFuY2lzY2FnaWJzb25AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDExXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBmaXJzdE5hbWU6IFwiVGlsbG1hblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRmlndWVyb2FcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTbm93XCIsXHJcbiAgICBlbWFpbDogXCJ0aWxsbWFuc25vd0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOCxcclxuICAgIGZpcnN0TmFtZTogXCJKaW1lbmV6XCIsXHJcbiAgICBsYXN0TmFtZTogXCJNb3JyaXNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBCcnlhbnRcIixcclxuICAgIGVtYWlsOiBcImppbWVuZXpicnlhbnRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTksXHJcbiAgICBmaXJzdE5hbWU6IFwiU2FuZG92YWxcIixcclxuICAgIGxhc3ROYW1lOiBcIkphY29ic29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNicmlkZVwiLFxyXG4gICAgZW1haWw6IFwic2FuZG92YWxtY2JyaWRlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkdyaWZmaW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlRvcnJlc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENoYXJsZXNcIixcclxuICAgIGVtYWlsOiBcImdyaWZmaW5jaGFybGVzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkNvcmFcIixcclxuICAgIGxhc3ROYW1lOiBcIlBhcmtlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENhbGR3ZWxsXCIsXHJcbiAgICBlbWFpbDogXCJjb3JhY2FsZHdlbGxAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjIsXHJcbiAgICBmaXJzdE5hbWU6IFwiQ2luZHlcIixcclxuICAgIGxhc3ROYW1lOiBcIkJvbmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBWZWxlelwiLFxyXG4gICAgZW1haWw6IFwiY2luZHl2ZWxlekBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMyxcclxuICAgIGZpcnN0TmFtZTogXCJGcmllZGFcIixcclxuICAgIGxhc3ROYW1lOiBcIlR5c29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ3JhaWdcIixcclxuICAgIGVtYWlsOiBcImZyaWVkYWNyYWlnQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkNvdGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvbGNvbWJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBSb3dlXCIsXHJcbiAgICBlbWFpbDogXCJjb3Rlcm93ZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNSxcclxuICAgIGZpcnN0TmFtZTogXCJUcnVqaWxsb1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiTWVqaWFcIixcclxuICAgIHVzZXJuYW1lOiBcIkBWYWxlbnp1ZWxhXCIsXHJcbiAgICBlbWFpbDogXCJ0cnVqaWxsb3ZhbGVuenVlbGFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjYsXHJcbiAgICBmaXJzdE5hbWU6IFwiUHJ1aXR0XCIsXHJcbiAgICBsYXN0TmFtZTogXCJTaGVwYXJkXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2xvYW5cIixcclxuICAgIGVtYWlsOiBcInBydWl0dHNsb2FuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI3LFxyXG4gICAgZmlyc3ROYW1lOiBcIlN1dHRvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiT3J0ZWdhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQmxhY2tcIixcclxuICAgIGVtYWlsOiBcInN1dHRvbmJsYWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI4LFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmlvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSGVhdGhcIixcclxuICAgIHVzZXJuYW1lOiBcIkBFc3Bpbm96YVwiLFxyXG4gICAgZW1haWw6IFwibWFyaW9uZXNwaW5vemFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjksXHJcbiAgICBmaXJzdE5hbWU6IFwiTmV3bWFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIaWNrc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtlaXRoXCIsXHJcbiAgICBlbWFpbDogXCJuZXdtYW5rZWl0aEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMCxcclxuICAgIGZpcnN0TmFtZTogXCJCb3lsZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTGFyc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU3VtbWVyc1wiLFxyXG4gICAgZW1haWw6IFwiYm95bGVzdW1tZXJzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkhheW5lc1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiVmluc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNrZW56aWVcIixcclxuICAgIGVtYWlsOiBcImhheW5lc21ja2VuemllQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMyLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1pbGxlclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQWNvc3RhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAWW91bmdcIixcclxuICAgIGVtYWlsOiBcIm1pbGxlcnlvdW5nQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkpvaG5zdG9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcm93blwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtuaWdodFwiLFxyXG4gICAgZW1haWw6IFwiam9obnN0b25rbmlnaHRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzQsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGVuYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGl0dHNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBGb3JiZXNcIixcclxuICAgIGVtYWlsOiBcImxlbmFmb3JiZXNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzUsXHJcbiAgICBmaXJzdE5hbWU6IFwiVGVycmllXCIsXHJcbiAgICBsYXN0TmFtZTogXCJLZW5uZWR5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAQnJhbmNoXCIsXHJcbiAgICBlbWFpbDogXCJ0ZXJyaWVicmFuY2hAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzYsXHJcbiAgICBmaXJzdE5hbWU6IFwiTG91aXNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJBZ3VpcnJlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS2lyYnlcIixcclxuICAgIGVtYWlsOiBcImxvdWlzZWtpcmJ5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkRhdmlkXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQYXR0b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5kZXJzXCIsXHJcbiAgICBlbWFpbDogXCJkYXZpZHNhbmRlcnNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzgsXHJcbiAgICBmaXJzdE5hbWU6IFwiSG9sZGVuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYXJsb3dcIixcclxuICAgIHVzZXJuYW1lOiBcIkBNY2tpbm5leVwiLFxyXG4gICAgZW1haWw6IFwiaG9sZGVubWNraW5uZXlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDExXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzksXHJcbiAgICBmaXJzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgIGxhc3ROYW1lOiBcIlJpdmVyYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1vbnRveWFcIixcclxuICAgIGVtYWlsOiBcImJha2VybW9udG95YUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MCxcclxuICAgIGZpcnN0TmFtZTogXCJCZWxpbmRhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJMbG95ZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENhbGRlcm9uXCIsXHJcbiAgICBlbWFpbDogXCJiZWxpbmRhY2FsZGVyb25AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIxXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDEsXHJcbiAgICBmaXJzdE5hbWU6IFwiUGVhcnNvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGF0cmlja1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENsZW1lbnRzXCIsXHJcbiAgICBlbWFpbDogXCJwZWFyc29uY2xlbWVudHNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDIsXHJcbiAgICBmaXJzdE5hbWU6IFwiQWx5Y2VcIixcclxuICAgIGxhc3ROYW1lOiBcIk1ja2VlXCIsXHJcbiAgICB1c2VybmFtZTogXCJARGF1Z2hlcnR5XCIsXHJcbiAgICBlbWFpbDogXCJhbHljZWRhdWdoZXJ0eUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MyxcclxuICAgIGZpcnN0TmFtZTogXCJWYWxlbmNpYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU3BlbmNlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAT2xzZW5cIixcclxuICAgIGVtYWlsOiBcInZhbGVuY2lhb2xzZW5AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDQsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGVhY2hcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvbGNvbWJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBIdW1waHJleVwiLFxyXG4gICAgZW1haWw6IFwibGVhY2hodW1waHJleUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NSxcclxuICAgIGZpcnN0TmFtZTogXCJNb3NzXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYXh0ZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBGaXR6cGF0cmlja1wiLFxyXG4gICAgZW1haWw6IFwibW9zc2ZpdHpwYXRyaWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1MVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkplYW5uZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQ29va2VcIixcclxuICAgIHVzZXJuYW1lOiBcIkBXYXJkXCIsXHJcbiAgICBlbWFpbDogXCJqZWFubmV3YXJkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1OVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ3LFxyXG4gICAgZmlyc3ROYW1lOiBcIldpbG1hXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcmlnZ3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBLaWRkXCIsXHJcbiAgICBlbWFpbDogXCJ3aWxtYWtpZGRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDUzXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDgsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVhdHJpY2VcIixcclxuICAgIGxhc3ROYW1lOiBcIlBlcnJ5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAR2lsYmVydFwiLFxyXG4gICAgZW1haWw6IFwiYmVhdHJpY2VnaWxiZXJ0QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ5LFxyXG4gICAgZmlyc3ROYW1lOiBcIldoaXRha2VyXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIeWRlXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNkb25hbGRcIixcclxuICAgIGVtYWlsOiBcIndoaXRha2VybWNkb25hbGRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTAsXHJcbiAgICBmaXJzdE5hbWU6IFwiUmViZWthaFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRHVyYW5cIixcclxuICAgIHVzZXJuYW1lOiBcIkBHcm9zc1wiLFxyXG4gICAgZW1haWw6IFwicmViZWthaGdyb3NzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkVhcmxpbmVcIixcclxuICAgIGxhc3ROYW1lOiBcIk1heWVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV29vZHdhcmRcIixcclxuICAgIGVtYWlsOiBcImVhcmxpbmV3b29kd2FyZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MixcclxuICAgIGZpcnN0TmFtZTogXCJNb3JhblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJASm9obnNcIixcclxuICAgIGVtYWlsOiBcIm1vcmFuam9obnNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBmaXJzdE5hbWU6IFwiTmFuZXR0ZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSHViYmFyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENvb2tlXCIsXHJcbiAgICBlbWFpbDogXCJuYW5ldHRlY29va2VAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTQsXHJcbiAgICBmaXJzdE5hbWU6IFwiRGFsdG9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJXYWxrZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBIZW5kcmlja3NcIixcclxuICAgIGVtYWlsOiBcImRhbHRvbmhlbmRyaWNrc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NSxcclxuICAgIGZpcnN0TmFtZTogXCJCZW5uZXR0XCIsXHJcbiAgICBsYXN0TmFtZTogXCJCbGFrZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFBlbmFcIixcclxuICAgIGVtYWlsOiBcImJlbm5ldHRwZW5hQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU2LFxyXG4gICAgZmlyc3ROYW1lOiBcIktlbGxpZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSG9ydG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV2Vpc3NcIixcclxuICAgIGVtYWlsOiBcImtlbGxpZXdlaXNzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0OFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkhvYmJzXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUYWxsZXlcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5mb3JkXCIsXHJcbiAgICBlbWFpbDogXCJob2Jic3NhbmZvcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTgsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWNndWlyZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRG9uYWxkc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAUm9tYW5cIixcclxuICAgIGVtYWlsOiBcIm1jZ3VpcmVyb21hbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1OSxcclxuICAgIGZpcnN0TmFtZTogXCJSb2RyaXF1ZXpcIixcclxuICAgIGxhc3ROYW1lOiBcIlNhdW5kZXJzXCIsXHJcbiAgICB1c2VybmFtZTogXCJASGFycGVyXCIsXHJcbiAgICBlbWFpbDogXCJyb2RyaXF1ZXpoYXJwZXJAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNjAsXHJcbiAgICBmaXJzdE5hbWU6IFwiTG91XCIsXHJcbiAgICBsYXN0TmFtZTogXCJDb25uZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5jaGV6XCIsXHJcbiAgICBlbWFpbDogXCJsb3VzYW5jaGV6QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSUdfU0VUVElOR1MgPSB7XHJcbiAgYWRkOiB7XHJcbiAgICBhZGRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1wbHVzJz48L2k+XCIsXHJcbiAgICBjcmVhdGVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgICBjb25maXJtQ3JlYXRlOiBcInRydWVcIlxyXG4gIH0sXHJcbiAgZWRpdDoge1xyXG4gICAgZWRpdEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWVkaXQnPjwvaT5cIixcclxuICAgIHNhdmVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgICBjb25maXJtU2F2ZTogXCJ0cnVlXCJcclxuICB9LFxyXG4gIGRlbGV0ZToge1xyXG4gICAgZGVsZXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItdHJhc2gnPjwvaT5cIixcclxuICAgIGNvbmZpcm1EZWxldGU6IFwidHJ1ZVwiXHJcbiAgfSxcclxuICBzZWxlY3RNb2RlOiBcIm11bHRpXCIsXHJcbiAgY29sdW1uczoge1xyXG4gICAgaWQ6IHtcclxuICAgICAgdGl0bGU6IFwiSURcIixcclxuICAgICAgZWRpdGFibGU6IFwiZmFsc2VcIixcclxuICAgICAgYWRkYWJsZTogXCJmYWxzZVwiLFxyXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICBub3RTaG93bkZpZWxkOiBcInRydWVcIixcclxuICAgICAgaGlkZUhlYWRlcjogXCJ0cnVlXCIsXHJcbiAgICAgIG9yZGVyOiAwXHJcbiAgICB9LFxyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkZpcnN0IE5hbWVcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBzZWxlY3RUZXh0OiBcIlNlbGVjdC4uLlwiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiamFjb2JcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJqYWNvYlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJoY2dsd2psd2Nnd3djZ3djd2pcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJoY2dsd2psd2Nnd3djZ3djd2pcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiTWVkXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTWVkXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbm90U2hvd25GaWVsZDogXCJmYWxzZVwiLFxyXG4gICAgICBvcmRlcjogMVxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHRpdGxlOiBcIlVzZXJuYW1lXCIsXHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICBvcmRlcjogMlxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkxhc3QgTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICBvcmRlcjogM1xyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHRpdGxlOiBcIkUtbWFpbFwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgdHlwZTogXCJjb21wbGV0ZXJcIixcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIGNvbXBsZXRlcjoge1xyXG4gICAgICAgICAgICBkYXRhOiBcInRoaXMuc291cmNlXCIsXHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkczogXCJjb21wbGV0ZXJcIixcclxuICAgICAgICAgICAgdGl0bGVGaWVsZDogXCJlbWFpbFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICB2YWx1ZTogXCI8aW5wdXQgIHR5cGU9J2VtYWlsJz5cIlxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNFxyXG4gICAgfSxcclxuICAgIGFnZToge1xyXG4gICAgICB0aXRsZTogXCJEYXRlXCIsXHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICBlZGl0b3I6IHtcclxuICAgICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHNlbGVjdFRleHQ6IFwiU2VsZWN0Li4uXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJqYWNvYlwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImphY29iXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJZYXNzaW5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJZYXNzaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiWWFzc1wiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIllhc3NcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiQW5uXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQW5uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlRPVE9cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJUT1RPXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIk1lZFwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1lZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJCRW5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJCRW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwibW9oYW1tZWQgYmVueWFrb3ViXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwibW9oYW1tZWQgYmVueWFrb3ViXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlNFTExBTUlcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTRUxMQU1JXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcInRhbGFMXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwidGFsYUxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiPGI+U2FtYW50aGE8L2I+XCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU2FtYW50aGFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNVxyXG4gICAgfSxcclxuICAgIHBhc3NlZDoge1xyXG4gICAgICB0aXRsZTogXCJQYXNzZWRcIixcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgdHJ1ZTogXCJZZXNcIixcclxuICAgICAgICAgIGZhbHNlOiBcIk5vXCIsXHJcbiAgICAgICAgICByZXNldFRleHQ6IFwiY2xlYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDZcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==