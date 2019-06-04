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
        _this._url = "assets/utils/config_table.json";
        _this._url0 = "assets/utils/vinci_data.json";
        _this._url1 = "assets/utils/settings.ts";
        _this._url2 = "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
        _this._url3 = "http://localhost:3000";
        // apiUrl = environment.apiUrl;
        _this.apiUrl = "https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils";
        return _this;
    }
    SmartTableService.prototype.getData = function () {
        // return DATA_Table;
        return DATA_Grid;
    };
    SmartTableService.prototype.getDataFromBackend = function () {
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
    };
    SmartTableService.prototype.editDataFromBackend = function (settings) {
        return this._http.post(this._url0, settings);
    };
    SmartTableService.prototype.deleteDataFromBackend = function () {
    };
    SmartTableService.prototype.addDataFromBackend = function () {
    };
    SmartTableService.prototype.getSettings = function () {
        // return CONFIG_SETTINGS;
        return CONFIG_OBJECT_VINCI;
    };
    SmartTableService.prototype.updateColumns = function (columns) {
        console.log(" ==> UPDATE COLUMNS ==> ");
        CONFIG_OBJECT_VINCI.columns = columns;
    };
    SmartTableService.prototype.savePreferences = function () {
    };
    // getLifeCycleTable(): Observable<[MobileItem]> {
    // return of(DataMobileListItem).pipe(delay(4000));
    // }
    // updateLifeCycleTableItem(mobileListEditFormComponent: MobileListEditFormComponent): Observable<any> {
    //   console.log('Adding... ', mobileListEditFormComponent);
    //   return of(null).pipe(delay(2000));
    // }
    SmartTableService.prototype.getSetting = function () { };
    SmartTableService.prototype.getVinciSetting = function () {
        return this._http.get(this._url0);
        // return JSON.stringify(this._url);
        // return this._http.get<any[]>(this._url);
        // return this._http.get(this._url).pipe(map((res: any) => res));
        // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
    };
    SmartTableService.prototype.editVinciSetting = function (settings) {
        // return this.http.put("https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json", settings);
        // CONFIG_OBJECT_VINCI.unshift() = settings;
    };
    SmartTableService.prototype.getSettingsFromGitHub = function () {
        return this._http.get(this.apiUrl + '/settings.ts').pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.updateData = function () {
        return DATA_Table;
    };
    SmartTableService.prototype.updateSettings = function (settings) {
        console.log(" Update Settings Service ");
        console.log("Settings to sauvgard : ", settings);
        return this._http.post("http://localhost:3000", settings)
            .subscribe({
            next: function (data) {
                console.log("data retourned from the backend : ", data);
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
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SmartTableService);
    return SmartTableService;
}(SmartTableData));
export { SmartTableService };
export var DATA_Grid = [
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
export var CONFIG_OBJECT_VINCI = {
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
export var DATA_Table = [
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
export var CONFIG_SETTINGS = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFrQixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELGlGQUFpRjtBQUNqRjtJQUFBO0lBSUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBTUQ7SUFBdUMsNkNBQWM7SUFhbkQsMkJBQW9CLEtBQWlCO1FBQXJDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBWnJDLG1DQUFtQztRQUUzQixVQUFJLEdBQVcsZ0NBQWdDLENBQUM7UUFDaEQsV0FBSyxHQUFXLDhCQUE4QixDQUFBO1FBQzlDLFdBQUssR0FBVywwQkFBMEIsQ0FBQztRQUMzQyxXQUFLLEdBQVcsc0ZBQXNGLENBQUM7UUFDdkcsV0FBSyxHQUFXLHVCQUF1QixDQUFDO1FBR2hELCtCQUErQjtRQUMvQixZQUFNLEdBQUcsbUZBQW1GLENBQUM7O0lBSTdGLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBRUUscUJBQXFCO1FBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBRW5CLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsaUVBQWlFO1FBQ2pFLGlDQUFpQztRQUNqQyxLQUFLO1FBRUwsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdB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QUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsU0FBUyxFQUFFLE9BQU87aUJBQ25CO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNUO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSAnc3JjXFxlbnZpcm9ubWVudHMnO1xyXG4vLyBpbXBvcnQgeyBTbWFydFRhYmxlRGF0YSB9IGZyb20gJy4vc21hcnQtdGFibGUnO1xyXG4vLyBpbXBvcnQgeyBDT05GSUdfU0VUVElOR1MgfSBmcm9tIFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzXCI7IC8vIGphdmFzY3JpcHQgb29iamVjdFxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU21hcnRUYWJsZURhdGEge1xyXG4gIGFic3RyYWN0IGdldERhdGEoKTogYW55W107XHJcbiAgYWJzdHJhY3QgZ2V0U2V0dGluZ3MoKTogYW55O1xyXG4gIGFic3RyYWN0IGdldFNldHRpbmcoKTogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgLy8gZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy9jb25maWdfdGFibGUuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDA6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3ZpbmNpX2RhdGEuanNvblwiXHJcbiAgcHJpdmF0ZSBfdXJsMTogc3RyaW5nID0gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3MudHNcIjtcclxuICBwcml2YXRlIF91cmwyOiBzdHJpbmcgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iZW5tZWQwMC92aW5jaS1zZXR0aW5ncy9tYXN0ZXIvdmluY2lfc2V0dGluZ3MuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDM6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5cclxuICAvLyBhcGlVcmwgPSBlbnZpcm9ubWVudC5hcGlVcmw7XHJcbiAgYXBpVXJsID0gXCJodHRwczovL2dpdGh1Yi5keGMuY29tL21iZW55YWtvdWIvR2VuZXJpcXVlLURhdGFHcmlkL2Jsb2IvbWFzdGVyL3NyYy9hc3NldHMvdXRpbHNcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKXtcclxuXHJcbiAgICAvLyByZXR1cm4gREFUQV9UYWJsZTtcclxuICAgIHJldHVybiBEQVRBX0dyaWQ7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZyb21CYWNrZW5kKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiIEdldCBEYXRhIFNlcnZpY2UgXCIpO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiICsgJy9kYXRhJykucGlwZShcclxuICAgIC8vICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8gKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybDApO1xyXG4gICAgLy8gLnN1YnNjcmliZSh7XHJcbiAgICAvLyAgIG5leHQ6IGRhdGEgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6IFwiLCBkYXRhKTtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZXJyb3I6IHRoaXMuaGFuZGxlRXJyb3JcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdERhdGFGcm9tQmFja2VuZChzZXR0aW5ncyl7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PGFueVtdPih0aGlzLl91cmwwLCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVEYXRhRnJvbUJhY2tlbmQoKXtcclxuXHJcbiAgfVxyXG5cclxuICBhZGREYXRhRnJvbUJhY2tlbmQoKXtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5ncygpIHtcclxuICAgIC8vIHJldHVybiBDT05GSUdfU0VUVElOR1M7XHJcbiAgICByZXR1cm4gQ09ORklHX09CSkVDVF9WSU5DSTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbHVtbnMoY29sdW1uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIiA9PT4gVVBEQVRFIENPTFVNTlMgPT0+IFwiKTtcclxuICAgIENPTkZJR19PQkpFQ1RfVklOQ0kuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICBzYXZlUHJlZmVyZW5jZXMoKXtcclxuICB9XHJcblxyXG4gIC8vIGdldExpZmVDeWNsZVRhYmxlKCk6IE9ic2VydmFibGU8W01vYmlsZUl0ZW1dPiB7XHJcbiAgICAgLy8gcmV0dXJuIG9mKERhdGFNb2JpbGVMaXN0SXRlbSkucGlwZShkZWxheSg0MDAwKSk7XHJcbiAgIC8vIH1cclxuXHJcbiAgLy8gdXBkYXRlTGlmZUN5Y2xlVGFibGVJdGVtKG1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudDogTW9iaWxlTGlzdEVkaXRGb3JtQ29tcG9uZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdBZGRpbmcuLi4gJywgbW9iaWxlTGlzdEVkaXRGb3JtQ29tcG9uZW50KTtcclxuICAvLyAgIHJldHVybiBvZihudWxsKS5waXBlKGRlbGF5KDIwMDApKTtcclxuICAvLyB9XHJcblxyXG4gIGdldFNldHRpbmcoKXt9XHJcblxyXG4gIGdldFZpbmNpU2V0dGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpLnBpcGUobWFwKChyZXM6IGFueSkgPT4gcmVzKSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICB9XHJcbiAgZWRpdFZpbmNpU2V0dGluZyhzZXR0aW5ncyA6IHt9KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLnB1dChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iZW5tZWQwMC92aW5jaS1zZXR0aW5ncy9tYXN0ZXIvdmluY2lfc2V0dGluZ3MuanNvblwiLCBzZXR0aW5ncyk7XHJcbiAgICAvLyBDT05GSUdfT0JKRUNUX1ZJTkNJLnVuc2hpZnQoKSA9IHNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3NGcm9tR2l0SHViKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuYXBpVXJsICsgJy9zZXR0aW5ncy50cycpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIERBVEFfVGFibGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyl7XHJcbiAgICBjb25zb2xlLmxvZyhcIiBVcGRhdGUgU2V0dGluZ3MgU2VydmljZSBcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5ncyB0byBzYXV2Z2FyZCA6IFwiLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLCBzZXR0aW5ncylcclxuICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmV0b3VybmVkIGZyb20gdGhlIGJhY2tlbmQgOiBcIiwgZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB0aGlzLmhhbmRsZUVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV0U2V0dGluZygpIHtcclxuICAgIGxldCBzZXR0aW5nO1xyXG4gICAgdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHNldHRpbmcgPSByZXM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXHJcbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcclxuICAgICAgY29uc29sZS5lcnJvcihgQmFja2VuZCByZXR1cm5lZCBjb2RlICR7ZXJyb3Iuc3RhdHVzfSwgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoJ1NvbWV0aGluZyBiYWQgaGFwcGVuZWQ7IHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlVmluY2lJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbm9tOiBzdHJpbmc7XHJcbiAgcHJlbm9tOiBzdHJpbmc7XHJcbiAgc29jaWV0ZTogc3RyaW5nO1xyXG4gIGZvbmN0aW9uT2ZmaWNpZWw6IHN0cmluZztcclxuICBhZmZlY3RhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHBlcmlvZGVBZmZlY3RhdGlvbj86IHN0cmluZztcclxuICBmb25jdGlvbk9wZXJhdGlvbm5lbDogc3RyaW5nO1xyXG4gIHN0YXR1dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9HcmlkOiBUYWJsZVZpbmNpSW50ZXJmYWNlW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEyMzQ1NixcclxuICAgIG5vbTogXCJMSU1PVVJJXCIsXHJcbiAgICBwcmVub206IFwiQW5vdWFyXCIsXHJcbiAgICBzb2NpZXRlOiBcIlZHQ1BcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWw6IFwiQXJjaGl0ZWN0ZSBJVFwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiTcOpdHJvIGQgYWlyXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkFyY2hpdGVjdGUgYXBwbGlxdWVyXCIsXHJcbiAgICBzdGF0dXQ6IFwiQWN0aWZcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIzNDU2NyxcclxuICAgIG5vbTogXCJEVVBPTlRcIixcclxuICAgIHByZW5vbTogXCJGcmFuw6dvaXNcIixcclxuICAgIHNvY2lldGU6IFwiVkdDUFwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJDaGVmIGRlIHByb2pldFwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiVDNDXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjcvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkNoZWYgZGUgcHJvamV0XCIsXHJcbiAgICBzdGF0dXQ6IFwiSW5hY3RpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogODI5MDc3LFxyXG4gICAgbm9tOiBcIkdBUk5JRUZcIixcclxuICAgIHByZW5vbTogXCJMYXVyZW50XCIsXHJcbiAgICBzb2NpZXRlOiBcIkRDQlwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJNYcOnb25cIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIkFmZmVjdGF0aW9uXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjgvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkNoZWYgZGUgY2hhbnRpZXJcIixcclxuICAgIHN0YXR1dDogXCJBIGNvbXBsw6l0ZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDc2Njc4OSxcclxuICAgIG5vbTogXCJHQVJcIixcclxuICAgIHByZW5vbTogXCJMYXVyZVwiLFxyXG4gICAgc29jaWV0ZTogXCJFZWlmZmFnZVwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJQZWludHJlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZHUgQ2FpcmVcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyOS8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IFwiQ2hlZiBkJ8OpcXVpcGVcIixcclxuICAgIHN0YXR1dDogXCJEaXNwb25pYmxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNDU2NzgsXHJcbiAgICBub206IFwiQ0hBT1VDXCIsXHJcbiAgICBwcmVub206IFwiTW9oYW1tZWRcIixcclxuICAgIHNvY2lldGU6IFwiRFhDXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsOiBcImpjb25zdWx0YW50IFNJUkhcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIk3DqXRybyBkZSBDb3BlbmhhZ3VlIGxpZ25lIDRcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIzMC8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IFwiUFBPXCIsXHJcbiAgICBzdGF0dXQ6IFwiSW5kaXNwb25pYmxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NTY3ODksXHJcbiAgICBub206IFwiRFVCT1wiLFxyXG4gICAgcHJlbm9tOiBcIk1laWR5XCIsXHJcbiAgICBzb2NpZXRlOiBcIlZJTkNJXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsOiBcIk1hw6dvblwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiTcOpdHJvIGRlIENvcGVuaGFndWUgbGlnbmUgNFwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjAxLzA0LzIwMTkgLSAzMS8wOS8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJGb25jdGlvbiBvcMOpcmF0aW9ubmVsXCIsXHJcbiAgICBzdGF0dXQ6IFwiU29ydGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU2Nzg5MCxcclxuICAgIG5vbTogXCJCRU5ZQUtPVUJcIixcclxuICAgIHByZW5vbTogXCJNZWRcIixcclxuICAgIHNvY2lldGU6IFwiRFhDIFRlY2hub2xvZ2llXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsOiBcIlBlaW50cmVcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIkFlcm9wb3J0IGludGVybmF0aW9uYWwgQXJ0dXJvIE1lcmlubyBCZW5pdGV6XCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDQvMjAxOSAtIDMxLzA5LzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkNvdXZyZXVyXCIsXHJcbiAgICBzdGF0dXQ6IFwiU29ydGlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDExMTExMSxcclxuICAgIG5vbTogXCJMRUJIQVJcIixcclxuICAgIHByZW5vbTogXCJOYW91ZmFsXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRDQlwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJBcmNoaXRlY3RlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJQb250IGRlIEwnQXRsYW50aXF1ZVwiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI2LzA0LzIwMTkgLSAwMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbDogXCJFbGVjdGljaWVuXCIsXHJcbiAgICBzdGF0dXQ6IFwiQXJjaGl2w6lcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDY2NjY2NixcclxuICAgIG5vbTogXCJUQUxBTFwiLFxyXG4gICAgcHJlbm9tOiBcIk1vaHNzaW5lXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRYQ1wiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDogXCJEaXJlY3RldXIgZGUgcHJvamV0XCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJTdGF0aW9uIGQnw6lwdXJhdGlvbiBkZSBCcnV4ZWxsZXMgc3VkXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDYvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsOiBcIkNvbmR1Y3RldXIgZGUgdHJ2YWlsXCIsXHJcbiAgICBzdGF0dXQ6IFwiQWN0aWZcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwMTExMixcclxuICAgIG5vbTogXCJBQkFSR0hBWlwiLFxyXG4gICAgcHJlbm9tOiBcIkVpZmZhZ2VcIixcclxuICAgIHNvY2lldGU6IFwiQGthcmVuXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsOiBcIkNvbnN1bHRhbnRlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZGUgRG9oYSBsaWduZSByb3VnZSBzdWRcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyNi8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IFwiTWHDp29uXCIsXHJcbiAgICBzdGF0dXQ6IFwiRGlzcG9uaWJsZVwiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR19PQkpFQ1RfVklOQ0kgPSB7XHJcbiAgYWRkOiB7XHJcbiAgICBhZGRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1wbHVzJz48L2k+XCIsXHJcbiAgICBjcmVhdGVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgICBjb25maXJtQ3JlYXRlOiBcInRydWVcIlxyXG4gIH0sXHJcbiAgZWRpdDoge1xyXG4gICAgZWRpdEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWVkaXQnPjwvaT5cIixcclxuICAgIHNhdmVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jaGVja21hcmsnPjwvaT5cIixcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNsb3NlJz48L2k+XCIsXHJcbiAgICBjb25maXJtU2F2ZTogXCJ0cnVlXCJcclxuICB9LFxyXG4gIGRlbGV0ZToge1xyXG4gICAgZGVsZXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItdHJhc2gnPjwvaT5cIixcclxuICAgIGNvbmZpcm1EZWxldGU6IFwidHJ1ZVwiXHJcbiAgfSxcclxuICBzZWxlY3RNb2RlOiBcIm11bHRpXCIsXHJcbiAgY29sdW1uczoge1xyXG4gICAgaWQ6IHtcclxuICAgICAgdGl0bGU6IFwiSUQgVklOQ0lcIixcclxuICAgICAgZWRpdGFibGU6IFwiZmFsc2VcIixcclxuICAgICAgYWRkYWJsZTogXCJmYWxzZVwiLFxyXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICBub3RTaG93bkZpZWxkOiBcInRydWVcIixcclxuICAgICAgaGlkZUhlYWRlcjogXCJ0cnVlXCIsXHJcbiAgICAgIG9yZGVyOiAwLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbm9tOiB7XHJcbiAgICAgIHRpdGxlOiBcIk5vbVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICBub3RTaG93bkZpZWxkOiBcImZhbHNlXCIsXHJcbiAgICAgIG9yZGVyOiAxLFxyXG4gICAgfSxcclxuICAgIHByZW5vbToge1xyXG4gICAgICB0aXRsZTogXCJQcsOpbm9tXCIsXHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICBvcmRlcjogMixcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNvY2lldGU6IHtcclxuICAgICAgdGl0bGU6IFwiU29jacOpdMOpXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIG9yZGVyOiAzLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbDoge1xyXG4gICAgICB0aXRsZTogXCJGb25jdGlvbiBvZmZpY2llbFwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiPGlucHV0ICB0eXBlPSdlbWFpbCc+XCJcclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDQsXHJcbiAgICB9LFxyXG4gICAgYWZmZWN0YXRpb246IHtcclxuICAgICAgdGl0bGU6IFwiQWZmZWN0YXRpb25cIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3QuLi5cIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImphY29iXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiamFjb2JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIllhc3NpblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIllhc3NpblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJZYXNzXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiWWFzc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJBbm5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBbm5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiVE9UT1wiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlRPVE9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiTWVkXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTWVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIkJFblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkJFblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiU0VMTEFNSVwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlNFTExBTUlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwidGFsYUxcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJ0YWxhTFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCI8Yj5TYW1hbnRoYTwvYj5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTYW1hbnRoYVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiB7XHJcbiAgICAgIHRpdGxlOiBcIlDDqXJpb2RlIGQnYWZmZWN0YXRpb25cIixcclxuICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICB9LFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWw6IHtcclxuICAgICAgdGl0bGU6IFwiRm9uY3Rpb24gb3DDqXJhdGlvbm5lbFwiLFxyXG4gICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxyXG4gICAgICBvcmRlcjogNyxcclxuICAgICAgZmlsdGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0YXR1dDoge1xyXG4gICAgICB0aXRsZTogXCJTdGF0dXRcIixcclxuICAgICAgZWRpdGFibGU6IFwidHJ1ZVwiLFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICBvcmRlcjogOCxcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRlSW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHBhc3NlZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfVGFibGU6IFRhYmxlRGF0ZUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmtcIixcclxuICAgIGxhc3ROYW1lOiBcIk9UVE9PXCIsXHJcbiAgICB1c2VybmFtZTogJzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWt2ZW8vbmcyLWFkbWluXCI+TmcyIEFkbWluPC9hPicsXHJcbiAgICBlbWFpbDogXCJtZG9AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjhcIixcclxuICAgIHBhc3NlZDogXCJZZXNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFjb2JcIixcclxuICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICB1c2VybmFtZTpcclxuICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi83LzczL0RYQ19UZWNoLnBuZy8yODBweC1EWENfVGVjaC5wbmdcIiBhbHQ9XCJTbWlsZXkgZmFjZVwiIGhlaWdodD1cIjQyXCIgaWR0aD1cIjQyXCI+JyxcclxuICAgIGVtYWlsOiBcImZhdEB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCI0NVwiLFxyXG4gICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGZpcnN0TmFtZTogXCJMYXJyeVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmlyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHR3aXR0ZXJcIixcclxuICAgIGVtYWlsOiBcInR3aXR0ZXJAb3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCIxOFwiLFxyXG4gICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTbm93XCIsXHJcbiAgICB1c2VybmFtZTogXCJAc25vd1wiLFxyXG4gICAgZW1haWw6IFwic25vd0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyMFwiLFxyXG4gICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGZpcnN0TmFtZTogXCJKYWNrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTcGFycm93XCIsXHJcbiAgICB1c2VybmFtZTogXCJAamFja1wiLFxyXG4gICAgZW1haWw6IFwiamFja0B5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCIzMFwiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkFublwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU21pdGhcIixcclxuICAgIHVzZXJuYW1lOiBcIkBhbm5cIixcclxuICAgIGVtYWlsOiBcImFubkBnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyMVwiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJhcmJhcmFcIixcclxuICAgIGxhc3ROYW1lOiBcIkJsYWNrXCIsXHJcbiAgICB1c2VybmFtZTogXCJAYmFyYmFyYVwiLFxyXG4gICAgZW1haWw6IFwiYmFyYmFyYUB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCI0M1wiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4LFxyXG4gICAgZmlyc3ROYW1lOiBcIlNldmFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYWdyYXRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBzZXZhblwiLFxyXG4gICAgZW1haWw6IFwic2V2YW5Ab3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCIxM1wiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA5LFxyXG4gICAgZmlyc3ROYW1lOiBcIlJ1YmVuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJWYXJkYW5cIixcclxuICAgIHVzZXJuYW1lOiBcIkBydWJlblwiLFxyXG4gICAgZW1haWw6IFwicnViZW5AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjJcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBmaXJzdE5hbWU6IFwiS2FyZW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlNldmFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAa2FyZW5cIixcclxuICAgIGVtYWlsOiBcImthcmVuQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjMzXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDExLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmtcIixcclxuICAgIGxhc3ROYW1lOiBcIk90dG9cIixcclxuICAgIHVzZXJuYW1lOiBcIkBtYXJrXCIsXHJcbiAgICBlbWFpbDogXCJtYXJrQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjM4XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMixcclxuICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGhvcm50b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBqYWNvYlwiLFxyXG4gICAgZW1haWw6IFwiamFjb2JAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiNDhcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTMsXHJcbiAgICBmaXJzdE5hbWU6IFwiSGFpa1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiSGFrb2JcIixcclxuICAgIHVzZXJuYW1lOiBcIkBoYWlrXCIsXHJcbiAgICBlbWFpbDogXCJoYWlrQG91dGxvb2suY29tXCIsXHJcbiAgICBhZ2U6IFwiNDhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkdhcmVnaW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkppcmFpclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGdhcmVnaW5cIixcclxuICAgIGVtYWlsOiBcImdhcmVnaW5AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiNDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE1LFxyXG4gICAgZmlyc3ROYW1lOiBcIktyaWtvclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmVkcm9zXCIsXHJcbiAgICB1c2VybmFtZTogXCJAa3Jpa29yXCIsXHJcbiAgICBlbWFpbDogXCJrcmlrb3JAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiMzJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkZyYW5jaXNjYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQnJhZHlcIixcclxuICAgIHVzZXJuYW1lOiBcIkBHaWJzb25cIixcclxuICAgIGVtYWlsOiBcImZyYW5jaXNjYWdpYnNvbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNyxcclxuICAgIGZpcnN0TmFtZTogXCJUaWxsbWFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJGaWd1ZXJvYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNub3dcIixcclxuICAgIGVtYWlsOiBcInRpbGxtYW5zbm93QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgZmlyc3ROYW1lOiBcIkppbWVuZXpcIixcclxuICAgIGxhc3ROYW1lOiBcIk1vcnJpc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEJyeWFudFwiLFxyXG4gICAgZW1haWw6IFwiamltZW5lemJyeWFudEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOSxcclxuICAgIGZpcnN0TmFtZTogXCJTYW5kb3ZhbFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSmFjb2Jzb25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBNY2JyaWRlXCIsXHJcbiAgICBlbWFpbDogXCJzYW5kb3ZhbG1jYnJpZGVAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDMyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjAsXHJcbiAgICBmaXJzdE5hbWU6IFwiR3JpZmZpblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVG9ycmVzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ2hhcmxlc1wiLFxyXG4gICAgZW1haWw6IFwiZ3JpZmZpbmNoYXJsZXNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjEsXHJcbiAgICBmaXJzdE5hbWU6IFwiQ29yYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGFya2VyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ2FsZHdlbGxcIixcclxuICAgIGVtYWlsOiBcImNvcmFjYWxkd2VsbEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMixcclxuICAgIGZpcnN0TmFtZTogXCJDaW5keVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQm9uZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFZlbGV6XCIsXHJcbiAgICBlbWFpbDogXCJjaW5keXZlbGV6QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkZyaWVkYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVHlzb25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBDcmFpZ1wiLFxyXG4gICAgZW1haWw6IFwiZnJpZWRhY3JhaWdAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjQsXHJcbiAgICBmaXJzdE5hbWU6IFwiQ290ZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSG9sY29tYlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFJvd2VcIixcclxuICAgIGVtYWlsOiBcImNvdGVyb3dlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI1LFxyXG4gICAgZmlyc3ROYW1lOiBcIlRydWppbGxvXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNZWppYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFZhbGVuenVlbGFcIixcclxuICAgIGVtYWlsOiBcInRydWppbGxvdmFsZW56dWVsYUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTZcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNixcclxuICAgIGZpcnN0TmFtZTogXCJQcnVpdHRcIixcclxuICAgIGxhc3ROYW1lOiBcIlNoZXBhcmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTbG9hblwiLFxyXG4gICAgZW1haWw6IFwicHJ1aXR0c2xvYW5AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjcsXHJcbiAgICBmaXJzdE5hbWU6IFwiU3V0dG9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJPcnRlZ2FcIixcclxuICAgIHVzZXJuYW1lOiBcIkBCbGFja1wiLFxyXG4gICAgZW1haWw6IFwic3V0dG9uYmxhY2tAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjgsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWFyaW9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIZWF0aFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEVzcGlub3phXCIsXHJcbiAgICBlbWFpbDogXCJtYXJpb25lc3Bpbm96YUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyOSxcclxuICAgIGZpcnN0TmFtZTogXCJOZXdtYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkhpY2tzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS2VpdGhcIixcclxuICAgIGVtYWlsOiBcIm5ld21hbmtlaXRoQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkJveWxlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJMYXJzb25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBTdW1tZXJzXCIsXHJcbiAgICBlbWFpbDogXCJib3lsZXN1bW1lcnNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDMyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzEsXHJcbiAgICBmaXJzdE5hbWU6IFwiSGF5bmVzXCIsXHJcbiAgICBsYXN0TmFtZTogXCJWaW5zb25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBNY2tlbnppZVwiLFxyXG4gICAgZW1haWw6IFwiaGF5bmVzbWNrZW56aWVAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzIsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWlsbGVyXCIsXHJcbiAgICBsYXN0TmFtZTogXCJBY29zdGFcIixcclxuICAgIHVzZXJuYW1lOiBcIkBZb3VuZ1wiLFxyXG4gICAgZW1haWw6IFwibWlsbGVyeW91bmdAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzMsXHJcbiAgICBmaXJzdE5hbWU6IFwiSm9obnN0b25cIixcclxuICAgIGxhc3ROYW1lOiBcIkJyb3duXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS25pZ2h0XCIsXHJcbiAgICBlbWFpbDogXCJqb2huc3RvbmtuaWdodEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNCxcclxuICAgIGZpcnN0TmFtZTogXCJMZW5hXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQaXR0c1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEZvcmJlc1wiLFxyXG4gICAgZW1haWw6IFwibGVuYWZvcmJlc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNSxcclxuICAgIGZpcnN0TmFtZTogXCJUZXJyaWVcIixcclxuICAgIGxhc3ROYW1lOiBcIktlbm5lZHlcIixcclxuICAgIHVzZXJuYW1lOiBcIkBCcmFuY2hcIixcclxuICAgIGVtYWlsOiBcInRlcnJpZWJyYW5jaEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNixcclxuICAgIGZpcnN0TmFtZTogXCJMb3Vpc2VcIixcclxuICAgIGxhc3ROYW1lOiBcIkFndWlycmVcIixcclxuICAgIHVzZXJuYW1lOiBcIkBLaXJieVwiLFxyXG4gICAgZW1haWw6IFwibG91aXNla2lyYnlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzcsXHJcbiAgICBmaXJzdE5hbWU6IFwiRGF2aWRcIixcclxuICAgIGxhc3ROYW1lOiBcIlBhdHRvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNhbmRlcnNcIixcclxuICAgIGVtYWlsOiBcImRhdmlkc2FuZGVyc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjZcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzOCxcclxuICAgIGZpcnN0TmFtZTogXCJIb2xkZW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkJhcmxvd1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1ja2lubmV5XCIsXHJcbiAgICBlbWFpbDogXCJob2xkZW5tY2tpbm5leUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzOSxcclxuICAgIGZpcnN0TmFtZTogXCJCYWtlclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUml2ZXJhXCIsXHJcbiAgICB1c2VybmFtZTogXCJATW9udG95YVwiLFxyXG4gICAgZW1haWw6IFwiYmFrZXJtb250b3lhQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0N1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkJlbGluZGFcIixcclxuICAgIGxhc3ROYW1lOiBcIkxsb3lkXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ2FsZGVyb25cIixcclxuICAgIGVtYWlsOiBcImJlbGluZGFjYWxkZXJvbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MSxcclxuICAgIGZpcnN0TmFtZTogXCJQZWFyc29uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQYXRyaWNrXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ2xlbWVudHNcIixcclxuICAgIGVtYWlsOiBcInBlYXJzb25jbGVtZW50c0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MixcclxuICAgIGZpcnN0TmFtZTogXCJBbHljZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTWNrZWVcIixcclxuICAgIHVzZXJuYW1lOiBcIkBEYXVnaGVydHlcIixcclxuICAgIGVtYWlsOiBcImFseWNlZGF1Z2hlcnR5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQzLFxyXG4gICAgZmlyc3ROYW1lOiBcIlZhbGVuY2lhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTcGVuY2VcIixcclxuICAgIHVzZXJuYW1lOiBcIkBPbHNlblwiLFxyXG4gICAgZW1haWw6IFwidmFsZW5jaWFvbHNlbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NCxcclxuICAgIGZpcnN0TmFtZTogXCJMZWFjaFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSG9sY29tYlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEh1bXBocmV5XCIsXHJcbiAgICBlbWFpbDogXCJsZWFjaGh1bXBocmV5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ1LFxyXG4gICAgZmlyc3ROYW1lOiBcIk1vc3NcIixcclxuICAgIGxhc3ROYW1lOiBcIkJheHRlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEZpdHpwYXRyaWNrXCIsXHJcbiAgICBlbWFpbDogXCJtb3NzZml0enBhdHJpY2tAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDUxXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDYsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmVhbm5lXCIsXHJcbiAgICBsYXN0TmFtZTogXCJDb29rZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFdhcmRcIixcclxuICAgIGVtYWlsOiBcImplYW5uZXdhcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDcsXHJcbiAgICBmaXJzdE5hbWU6IFwiV2lsbWFcIixcclxuICAgIGxhc3ROYW1lOiBcIkJyaWdnc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtpZGRcIixcclxuICAgIGVtYWlsOiBcIndpbG1ha2lkZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0OCxcclxuICAgIGZpcnN0TmFtZTogXCJCZWF0cmljZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGVycnlcIixcclxuICAgIHVzZXJuYW1lOiBcIkBHaWxiZXJ0XCIsXHJcbiAgICBlbWFpbDogXCJiZWF0cmljZWdpbGJlcnRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDksXHJcbiAgICBmaXJzdE5hbWU6IFwiV2hpdGFrZXJcIixcclxuICAgIGxhc3ROYW1lOiBcIkh5ZGVcIixcclxuICAgIHVzZXJuYW1lOiBcIkBNY2RvbmFsZFwiLFxyXG4gICAgZW1haWw6IFwid2hpdGFrZXJtY2RvbmFsZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MCxcclxuICAgIGZpcnN0TmFtZTogXCJSZWJla2FoXCIsXHJcbiAgICBsYXN0TmFtZTogXCJEdXJhblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEdyb3NzXCIsXHJcbiAgICBlbWFpbDogXCJyZWJla2FoZ3Jvc3NAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTEsXHJcbiAgICBmaXJzdE5hbWU6IFwiRWFybGluZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTWF5ZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBXb29kd2FyZFwiLFxyXG4gICAgZW1haWw6IFwiZWFybGluZXdvb2R3YXJkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUyLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1vcmFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYXh0ZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBKb2huc1wiLFxyXG4gICAgZW1haWw6IFwibW9yYW5qb2huc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MyxcclxuICAgIGZpcnN0TmFtZTogXCJOYW5ldHRlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIdWJiYXJkXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ29va2VcIixcclxuICAgIGVtYWlsOiBcIm5hbmV0dGVjb29rZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NCxcclxuICAgIGZpcnN0TmFtZTogXCJEYWx0b25cIixcclxuICAgIGxhc3ROYW1lOiBcIldhbGtlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEhlbmRyaWNrc1wiLFxyXG4gICAgZW1haWw6IFwiZGFsdG9uaGVuZHJpY2tzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU1LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJlbm5ldHRcIixcclxuICAgIGxhc3ROYW1lOiBcIkJsYWtlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAUGVuYVwiLFxyXG4gICAgZW1haWw6IFwiYmVubmV0dHBlbmFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDEzXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTYsXHJcbiAgICBmaXJzdE5hbWU6IFwiS2VsbGllXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIb3J0b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBXZWlzc1wiLFxyXG4gICAgZW1haWw6IFwia2VsbGlld2Vpc3NAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTcsXHJcbiAgICBmaXJzdE5hbWU6IFwiSG9iYnNcIixcclxuICAgIGxhc3ROYW1lOiBcIlRhbGxleVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNhbmZvcmRcIixcclxuICAgIGVtYWlsOiBcImhvYmJzc2FuZm9yZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1OCxcclxuICAgIGZpcnN0TmFtZTogXCJNY2d1aXJlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJEb25hbGRzb25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBSb21hblwiLFxyXG4gICAgZW1haWw6IFwibWNndWlyZXJvbWFuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU5LFxyXG4gICAgZmlyc3ROYW1lOiBcIlJvZHJpcXVlelwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU2F1bmRlcnNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBIYXJwZXJcIixcclxuICAgIGVtYWlsOiBcInJvZHJpcXVlemhhcnBlckBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2MCxcclxuICAgIGZpcnN0TmFtZTogXCJMb3VcIixcclxuICAgIGxhc3ROYW1lOiBcIkNvbm5lclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNhbmNoZXpcIixcclxuICAgIGVtYWlsOiBcImxvdXNhbmNoZXpAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE2XHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR19TRVRUSU5HUyA9IHtcclxuICBhZGQ6IHtcclxuICAgIGFkZEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLXBsdXMnPjwvaT5cIixcclxuICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNoZWNrbWFyayc+PC9pPlwiLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2xvc2UnPjwvaT5cIixcclxuICAgIGNvbmZpcm1DcmVhdGU6IFwidHJ1ZVwiXHJcbiAgfSxcclxuICBlZGl0OiB7XHJcbiAgICBlZGl0QnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItZWRpdCc+PC9pPlwiLFxyXG4gICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNoZWNrbWFyayc+PC9pPlwiLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2xvc2UnPjwvaT5cIixcclxuICAgIGNvbmZpcm1TYXZlOiBcInRydWVcIlxyXG4gIH0sXHJcbiAgZGVsZXRlOiB7XHJcbiAgICBkZWxldGVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi10cmFzaCc+PC9pPlwiLFxyXG4gICAgY29uZmlybURlbGV0ZTogXCJ0cnVlXCJcclxuICB9LFxyXG4gIHNlbGVjdE1vZGU6IFwibXVsdGlcIixcclxuICBjb2x1bW5zOiB7XHJcbiAgICBpZDoge1xyXG4gICAgICB0aXRsZTogXCJJRFwiLFxyXG4gICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxyXG4gICAgICBhZGRhYmxlOiBcImZhbHNlXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgIG5vdFNob3duRmllbGQ6IFwidHJ1ZVwiLFxyXG4gICAgICBoaWRlSGVhZGVyOiBcInRydWVcIixcclxuICAgICAgb3JkZXI6IDBcclxuICAgIH0sXHJcbiAgICBmaXJzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiRmlyc3QgTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHNlbGVjdFRleHQ6IFwiU2VsZWN0Li4uXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJqYWNvYlwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImphY29iXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcImhjZ2x3amx3Y2d3d2Nnd2N3alwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJNZWRcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJNZWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBub3RTaG93bkZpZWxkOiBcImZhbHNlXCIsXHJcbiAgICAgIG9yZGVyOiAxXHJcbiAgICB9LFxyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiVXNlcm5hbWVcIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIG9yZGVyOiAyXHJcbiAgICB9LFxyXG4gICAgbGFzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiTGFzdCBOYW1lXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIG9yZGVyOiAzXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdGl0bGU6IFwiRS1tYWlsXCIsXHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiBcImNvbXBsZXRlclwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgY29tcGxldGVyOiB7XHJcbiAgICAgICAgICAgIGRhdGE6IFwidGhpcy5zb3VyY2VcIixcclxuICAgICAgICAgICAgc2VhcmNoRmllbGRzOiBcImNvbXBsZXRlclwiLFxyXG4gICAgICAgICAgICB0aXRsZUZpZWxkOiBcImVtYWlsXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjxpbnB1dCAgdHlwZT0nZW1haWwnPlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA0XHJcbiAgICB9LFxyXG4gICAgYWdlOiB7XHJcbiAgICAgIHRpdGxlOiBcIkRhdGVcIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3QuLi5cIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImphY29iXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiamFjb2JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIllhc3NpblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIllhc3NpblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJZYXNzXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiWWFzc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJBbm5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBbm5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiVE9UT1wiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlRPVE9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiTWVkXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTWVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIkJFblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkJFblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiU0VMTEFNSVwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlNFTExBTUlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwidGFsYUxcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJ0YWxhTFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCI8Yj5TYW1hbnRoYTwvYj5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTYW1hbnRoYVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA1XHJcbiAgICB9LFxyXG4gICAgcGFzc2VkOiB7XHJcbiAgICAgIHRpdGxlOiBcIlBhc3NlZFwiLFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICB0cnVlOiBcIlllc1wiLFxyXG4gICAgICAgICAgZmFsc2U6IFwiTm9cIixcclxuICAgICAgICAgIHJlc2V0VGV4dDogXCJjbGVhclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlcjogNlxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19