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
        _this._url = "assets/utils/config_table.json";
        _this._url0 = "assets/utils/vinci_data.json";
        _this._url1 = "assets/utils/settings.ts";
        _this._url2 = "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
        _this._url3 = "http://localhost:3000";
        _this._url4 = "http://192.168.8.35:9097/api/ui";
        _this._url5 = "http://192.168.8.38:9097/api/ui";
        _this._url6 = "http://vcgp-irs.francecentral.cloudapp.azure.com/rest-provider";
        // apiUrl = environment.apiUrl;
        _this.apiUrl = "https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils";
        return _this;
    }
    SmartTableService.prototype.getData = function () {
        // return DATA_Table;
        return DATA_Grid;
    };
    SmartTableService.prototype.getdata = function () {
        return this._http.get(this._url3 + "/data");
    };
    SmartTableService.prototype.getSettingsFromNodeBckend = function () {
        return this._http.get("http://localhost:3000/settings");
        // .pipe(catchError(this.handleError));
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
    SmartTableService.prototype.deleteDataFromBackend = function () { };
    SmartTableService.prototype.addDataFromBackend = function () { };
    SmartTableService.prototype.getSettings = function () {
        // return CONFIG_SETTINGS;
        return CONFIG_OBJECT_VINCI;
        // return this._http.get(this._url3 + "/settings");
    };
    SmartTableService.prototype.updateColumns = function (columns) {
        console.log(" ==> UPDATE COLUMNS ==> ");
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
        console.log(" getVinciSetting() : ");
        return this._http
            .get(this._url3 + "/settings")
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
        console.log(" Update preference service: ");
        var headers1 = new HttpHeaders();
        headers1.append('Content-Type', 'application/json').append('accept', '*/*');
        // headers1 = headers.set('Content-Type', 'application/json; charset=utf-8').set('accept', '*/*; charset=utf-8');
        // const headers2 = new HttpHeaders({'Content-Type': 'application/json' ,'accept': '*/*'});
        return this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .put(this._url6 + "/api/ui/preference/savePreference", preference, { headers: headers1 })
            .subscribe({
            next: function (data) {
                console.log("after preference update: ", data);
            },
            error: function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                }
                else {
                    console.log('Server-side error occured.');
                }
            }
        });
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.getSettingsBackend = function (roleUser, idTable, idUser) {
        console.log(" Get Settings from Backend: ");
        var headers1 = new HttpHeaders();
        headers1.append('accept', '*/*');
        return this._http
            // .put(this._url4, preference, { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set(accept, '*/*; charset=utf-8')})
            .get(this._url5 + "/getSetting/" + roleUser + "/" + idTable + "/" + idUser, { headers: headers1 })
            .subscribe({
            next: function (data) {
                console.log("after getting Settings: ", data);
            },
            error: function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                }
                else {
                    console.log('Server-side error occured.');
                }
            }
        });
        // .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.getSettingsFromGitHub = function () {
        return this._http
            .get(this.apiUrl + "/settings.ts")
            .pipe(catchError(this.handleError));
    };
    SmartTableService.prototype.updateData = function () {
        return DATA_Table;
    };
    SmartTableService.prototype.updateSettings = function (settings) {
        // console.log(" Update Settings Service ");
        console.log("SERVICE send Settings : ", settings.columns);
        return this._http.post("http://localhost:3000", settings).subscribe({
            next: function (data) {
                // console.log("data retourned from the backend : ", data);
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
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
        }
        // return an observable with a user-facing error message
        return throwError("Something bad happened; please try again later.");
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
export var DATA_Grid = [
    {
        id: 123456,
        nom: "LIMOURI",
        prenom: "Anouar",
        societe: "VGCP",
        fonctionOfficielle: "Architecte IT",
        affectation: "Métro d air",
        periodeAffectation: "26/04/2019 - 31/12/2019",
        fonctionOperationnelle: "Architecte appliquer",
        statut: "Actif"
    },
    {
        id: 234567,
        nom: "DUPONT",
        prenom: "François",
        societe: "VGCP",
        fonctionOfficielle: "Chef de projet",
        affectation: "T3C",
        periodeAffectation: "27/04/2019 - 31/12/2019",
        fonctionOperationnelle: "Chef de projet",
        statut: "Inactif"
    },
    {
        id: 829077,
        nom: "GARNIEF",
        prenom: "Laurent",
        societe: "DCB",
        fonctionOfficielle: "Maçon",
        affectation: "Affectation",
        periodeAffectation: "28/04/2019 - 31/12/2019",
        fonctionOperationnelle: "Chef de chantier",
        statut: "A compléter"
    },
    {
        id: 766789,
        nom: "GAR",
        prenom: "Laure",
        societe: "Eeiffage",
        fonctionOfficielle: "Peintre",
        affectation: "Métro du Caire",
        periodeAffectation: "29/04/2019 - 31/12/2019",
        fonctionOperationnelle: "Chef d'équipe",
        statut: "Disponible"
    },
    {
        id: 345678,
        nom: "CHAOUC",
        prenom: "Mohammed",
        societe: "DXC",
        fonctionOfficielle: "jconsultant SIRH",
        affectation: "Métro de Copenhague ligne 4",
        periodeAffectation: "30/04/2019 - 31/12/2019",
        fonctionOperationnelle: "PPO",
        statut: "Indisponible"
    },
    {
        id: 456789,
        nom: "DUBO",
        prenom: "Meidy",
        societe: "VINCI",
        fonctionOfficielle: "Maçon",
        affectation: "Métro de Copenhague ligne 4",
        periodeAffectation: "01/04/2019 - 31/09/2019",
        fonctionOperationnelle: "Fonction opérationnel",
        statut: "Sorti"
    },
    {
        id: 567890,
        nom: "BENYAKOUB",
        prenom: "Med",
        societe: "DXC Technologie",
        fonctionOfficielle: "Peintre",
        affectation: "Aeroport international Arturo Merino Benitez",
        periodeAffectation: "26/04/2019 - 31/09/2019",
        fonctionOperationnelle: "Couvreur",
        statut: "Sorti"
    },
    {
        id: 111111,
        nom: "LEBHAR",
        prenom: "Naoufal",
        societe: "DCB",
        fonctionOfficielle: "Architecte",
        affectation: "Pont de L'Atlantique",
        periodeAffectation: "26/04/2019 - 01/12/2019",
        fonctionOperationnelle: "Electicien",
        statut: "Archivé"
    },
    {
        id: 666666,
        nom: "TALAL",
        prenom: "Mohssine",
        societe: "DXC",
        fonctionOfficielle: "Directeur de projet",
        affectation: "Station d'épuration de Bruxelles sud",
        periodeAffectation: "26/06/2019 - 31/12/2019",
        fonctionOperationnelle: "Conducteur de trvail",
        statut: "Actif"
    },
    {
        id: 101112,
        nom: "ABARGHAZ",
        prenom: "Eiffage",
        societe: "@karen",
        fonctionOfficielle: "Consultante",
        affectation: "Métro de Doha ligne rouge sud",
        periodeAffectation: "26/04/2019 - 31/12/2019",
        fonctionOperationnelle: "Maçon",
        statut: "Disponible"
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
            title: "ID VINCI",
            editable: "false",
            addable: "false",
            type: "number",
            display: "false",
            hideHeader: "true",
            order: 0,
            filter: true
        },
        nom: {
            title: "Nom",
            type: "string",
            filter: true,
            notShownField: "false",
            order: 1,
            display: "true"
        },
        prenom: {
            title: "Prénom",
            type: "html",
            order: 2,
            filter: true,
            display: "false"
        },
        societe: {
            title: "Société",
            type: "string",
            order: 3,
            filter: true,
            display: "true"
        },
        fonctionOfficielle: {
            title: "Fonction officiel",
            type: "html",
            filter: true,
            editor: {
                type: "text",
                value: "<input  type='email'>"
            },
            order: 4,
            display: "true"
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
            filter: true,
            display: "true"
        },
        periodeAffectation: {
            title: "Période d'affectation",
            filter: false,
            order: 6,
            display: "true"
        },
        fonctionOperationnelle: {
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
            display: "true"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbmVyaWMtY29tcG9uZW50cy1keGMvIiwic291cmNlcyI6WyJ0YWJsZXMvc21hcnQtdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFxQixXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsVUFBVSxFQUFpQixNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBa0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFDbEQsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxpRkFBaUY7QUFDakY7SUFBQTtJQUlBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUtEO0lBQXVDLDZDQUFjO0lBY25ELDJCQUFvQixLQUFpQjtRQUFyQyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQWJyQyxtQ0FBbUM7UUFFM0IsVUFBSSxHQUFXLGdDQUFnQyxDQUFDO1FBQ2hELFdBQUssR0FBVyw4QkFBOEIsQ0FBQztRQUMvQyxXQUFLLEdBQVcsMEJBQTBCLENBQUM7UUFDM0MsV0FBSyxHQUFXLHNGQUFzRixDQUFDO1FBQ3ZHLFdBQUssR0FBVyx1QkFBdUIsQ0FBQztRQUN4QyxXQUFLLEdBQVcsaUNBQWlDLENBQUM7UUFDbEQsV0FBSyxHQUFXLGlDQUFpQyxDQUFDO1FBQ2xELFdBQUssR0FBVyxnRUFBZ0UsQ0FBQztRQUN6RiwrQkFBK0I7UUFDL0IsWUFBTSxHQUFHLG1GQUFtRixDQUFDOztJQUk3RixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLHFCQUFxQjtRQUNyQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFD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RjthQUNGO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxRQUFRO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsU0FBUyxFQUFFLE9BQU87aUJBQ25CO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNUO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG4vLyBpbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICdzcmNcXGVudmlyb25tZW50cyc7XHJcbi8vIGltcG9ydCB7IFNtYXJ0VGFibGVEYXRhIH0gZnJvbSAnLi9zbWFydC10YWJsZSc7XHJcbi8vIGltcG9ydCB7IENPTkZJR19TRVRUSU5HUyB9IGZyb20gXCJhc3NldHMvdXRpbHMvc2V0dGluZ3NcIjsgLy8gamF2YXNjcmlwdCBvb2JqZWN0XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnlbXTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5ncygpOiBhbnk7XHJcbiAgYWJzdHJhY3QgZ2V0U2V0dGluZygpOiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgLy8gZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy9jb25maWdfdGFibGUuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDA6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3ZpbmNpX2RhdGEuanNvblwiO1xyXG4gIHByaXZhdGUgX3VybDE6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL3NldHRpbmdzLnRzXCI7XHJcbiAgcHJpdmF0ZSBfdXJsMjogc3RyaW5nID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYmVubWVkMDAvdmluY2ktc2V0dGluZ3MvbWFzdGVyL3ZpbmNpX3NldHRpbmdzLmpzb25cIjtcclxuICBwcml2YXRlIF91cmwzOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG4gIHByaXZhdGUgX3VybDQ6IHN0cmluZyA9IFwiaHR0cDovLzE5Mi4xNjguOC4zNTo5MDk3L2FwaS91aVwiO1xyXG4gIHByaXZhdGUgX3VybDU6IHN0cmluZyA9IFwiaHR0cDovLzE5Mi4xNjguOC4zODo5MDk3L2FwaS91aVwiO1xyXG4gIHByaXZhdGUgX3VybDY6IHN0cmluZyA9IFwiaHR0cDovL3ZjZ3AtaXJzLmZyYW5jZWNlbnRyYWwuY2xvdWRhcHAuYXp1cmUuY29tL3Jlc3QtcHJvdmlkZXJcIjtcclxuICAvLyBhcGlVcmwgPSBlbnZpcm9ubWVudC5hcGlVcmw7XHJcbiAgYXBpVXJsID0gXCJodHRwczovL2dpdGh1Yi5keGMuY29tL21iZW55YWtvdWIvR2VuZXJpcXVlLURhdGFHcmlkL2Jsb2IvbWFzdGVyL3NyYy9hc3NldHMvdXRpbHNcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICAvLyByZXR1cm4gREFUQV9UYWJsZTtcclxuICAgIHJldHVybiBEQVRBX0dyaWQ7XHJcbiAgfVxyXG5cclxuICBnZXRkYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwzICsgXCIvZGF0YVwiKTtcclxuICB9XHJcbiAgZ2V0U2V0dGluZ3NGcm9tTm9kZUJja2VuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NldHRpbmdzXCIpO1xyXG4gICAgICAvLyAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGdldERhdGFGcm9tQmFja2VuZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiIEdldCBEYXRhIFNlcnZpY2UgXCIpO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiICsgJy9kYXRhJykucGlwZShcclxuICAgIC8vICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgLy8gKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybDApO1xyXG4gICAgLy8gLnN1YnNjcmliZSh7XHJcbiAgICAvLyAgIG5leHQ6IGRhdGEgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXRvdXJuZWQgZnJvbSB0aGUgYmFja2VuZCA6IFwiLCBkYXRhKTtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZXJyb3I6IHRoaXMuaGFuZGxlRXJyb3JcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdERhdGFGcm9tQmFja2VuZChzZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxhbnlbXT4odGhpcy5fdXJsMCwgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YUZyb21CYWNrZW5kKCkge31cclxuXHJcbiAgYWRkRGF0YUZyb21CYWNrZW5kKCkge31cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyByZXR1cm4gQ09ORklHX1NFVFRJTkdTO1xyXG4gICAgcmV0dXJuIENPTkZJR19PQkpFQ1RfVklOQ0k7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMyArIFwiL3NldHRpbmdzXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sdW1ucyhjb2x1bW5zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiID09PiBVUERBVEUgQ09MVU1OUyA9PT4gXCIpO1xyXG4gICAgQ09ORklHX09CSkVDVF9WSU5DSS5jb2x1bW5zID0gY29sdW1ucztcclxuICB9XHJcblxyXG4gIHNhdmVQcmVmZXJlbmNlcygpIHt9XHJcblxyXG4gIC8vIGdldExpZmVDeWNsZVRhYmxlKCk6IE9ic2VydmFibGU8W01vYmlsZUl0ZW1dPiB7XHJcbiAgICAvLyByZXR1cm4gb2YoRGF0YU1vYmlsZUxpc3RJdGVtKS5waXBlKGRlbGF5KDQwMDApKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHVwZGF0ZUxpZmVDeWNsZVRhYmxlSXRlbShtb2JpbGVMaXN0RWRpdEZvcm1Db21wb25lbnQ6IE1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnQWRkaW5nLi4uICcsIG1vYmlsZUxpc3RFZGl0Rm9ybUNvbXBvbmVudCk7XHJcbiAgLy8gICByZXR1cm4gb2YobnVsbCkucGlwZShkZWxheSgyMDAwKSk7XHJcbiAgLy8gfVxyXG5cclxuICBnZXRTZXR0aW5nKCkge31cclxuXHJcbiAgZ2V0VmluY2lTZXR0aW5nKCkge1xyXG4gICAgY29uc29sZS5sb2coXCIgZ2V0VmluY2lTZXR0aW5nKCkgOiBcIik7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuX3VybDMgKyBcIi9zZXR0aW5nc1wiKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKTtcclxuICAgIC8vIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKS5waXBlKG1hcCgocmVzOiBhbnkpID0+IHJlcykpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFZpbmNpU2V0dGluZyhzZXR0aW5nczoge30pIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAucHV0KFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Jlbm1lZDAwL3ZpbmNpLXNldHRpbmdzL21hc3Rlci92aW5jaV9zZXR0aW5ncy5qc29uXCIsIHNldHRpbmdzKTtcclxuICAgIC8vIENPTkZJR19PQkpFQ1RfVklOQ0kudW5zaGlmdCgpID0gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlIDogYW55KXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiBVcGRhdGUgcHJlZmVyZW5jZSBzZXJ2aWNlOiBcIik7XHJcblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJykuYXBwZW5kKCdhY2NlcHQnLCAnKi8qJyk7XHJcbiAgICAvLyBoZWFkZXJzMSA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpLnNldCgnYWNjZXB0JywgJyovKjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgLy8gY29uc3QgaGVhZGVyczIgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLCdhY2NlcHQnOiAnKi8qJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgLy8gLnB1dCh0aGlzLl91cmw0LCBwcmVmZXJlbmNlLCB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKS5zZXQoYWNjZXB0LCAnKi8qOyBjaGFyc2V0PXV0Zi04Jyl9KVxyXG4gICAgICAucHV0KHRoaXMuX3VybDYgKyBcIi9hcGkvdWkvcHJlZmVyZW5jZS9zYXZlUHJlZmVyZW5jZVwiLCBwcmVmZXJlbmNlLCB7aGVhZGVycyA6IGhlYWRlcnMxfSlcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBwcmVmZXJlbmNlIHVwZGF0ZTogXCIsIGRhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkLicpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyLXNpZGUgZXJyb3Igb2NjdXJlZC4nKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldFNldHRpbmdzQmFja2VuZChyb2xlVXNlciA6IHN0cmluZywgaWRUYWJsZSA6IG51bWJlcixcdGlkVXNlciA6IG51bWJlcil7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIgR2V0IFNldHRpbmdzIGZyb20gQmFja2VuZDogXCIpO1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdhY2NlcHQnLCAnKi8qJyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAvLyAucHV0KHRoaXMuX3VybDQsIHByZWZlcmVuY2UsIHsgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpLnNldChhY2NlcHQsICcqLyo7IGNoYXJzZXQ9dXRmLTgnKX0pXHJcbiAgICAgIC5nZXQodGhpcy5fdXJsNSArIFwiL2dldFNldHRpbmcvXCIrIHJvbGVVc2VyICsgXCIvXCIgICsgaWRUYWJsZSArIFwiL1wiICArIGlkVXNlciwge2hlYWRlcnMgOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZ2V0dGluZyBTZXR0aW5nczogXCIsIGRhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkLicpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmVyLXNpZGUgZXJyb3Igb2NjdXJlZC4nKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3NGcm9tR2l0SHViKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgLmdldCh0aGlzLmFwaVVybCArIFwiL3NldHRpbmdzLnRzXCIpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBEQVRBX1RhYmxlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiIFVwZGF0ZSBTZXR0aW5ncyBTZXJ2aWNlIFwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU0VSVklDRSBzZW5kIFNldHRpbmdzIDogXCIsIHNldHRpbmdzLmNvbHVtbnMpXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIHNldHRpbmdzKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiBkYXRhID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGEgcmV0b3VybmVkIGZyb20gdGhlIGJhY2tlbmQgOiBcIiwgZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB0aGlzLmhhbmRsZUVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV0U2V0dGluZygpIHtcclxuICAgIGxldCBzZXR0aW5nO1xyXG4gICAgdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsMikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHNldHRpbmcgPSByZXM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cclxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBib2R5IHdhczogJHtlcnJvci5lcnJvcn1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoXCJTb21ldGhpbmcgYmFkIGhhcHBlbmVkOyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByZWZlcmVuY2VzVHlwZSB7XHJcbiAgUFJFRl9PUkRFUiwgLy8gc3RyaW5nXHJcbiAgUFJFRl9TT1JULCAvLyBzdHJpbmdcclxuICBQUkVGX0ZJTFRFUiwgLy8gc3RyaW5nXHJcbiAgUFJFRl9WSVNJQklMSVRZIC8vIHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJlZmVyZW5jZSB7XHJcbiAgaWRQcmVmZXJlbmNlOiBudW1iZXI7XHJcbiAgaWRUYWJsZTogbnVtYmVyO1xyXG4gIGlkVXNlcjogbnVtYmVyO1xyXG4gIHByZWZlcm5lY2VUeXBlOiBzdHJpbmc7XHJcbiAgcm9sZVVzZXI6IHN0cmluZyxcclxuICB2YWx1ZTogW3N0cmluZ107IC8vIHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG4gIHJvbGVVc2VyOiBzdHJpbmc7XHJcbiAgaWRUYWJsZTogbnVtYmVyO1xyXG4gIGlkVXNlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlVmluY2lJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbm9tOiBzdHJpbmc7XHJcbiAgcHJlbm9tOiBzdHJpbmc7XHJcbiAgc29jaWV0ZTogc3RyaW5nO1xyXG4gIGZvbmN0aW9uT2ZmaWNpZWxsZTogc3RyaW5nO1xyXG4gIGFmZmVjdGF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcGVyaW9kZUFmZmVjdGF0aW9uPzogc3RyaW5nO1xyXG4gIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IHN0cmluZztcclxuICBzdGF0dXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfR3JpZDogVGFibGVWaW5jaUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxMjM0NTYsXHJcbiAgICBub206IFwiTElNT1VSSVwiLFxyXG4gICAgcHJlbm9tOiBcIkFub3VhclwiLFxyXG4gICAgc29jaWV0ZTogXCJWR0NQXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IFwiQXJjaGl0ZWN0ZSBJVFwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiTcOpdHJvIGQgYWlyXCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IFwiQXJjaGl0ZWN0ZSBhcHBsaXF1ZXJcIixcclxuICAgIHN0YXR1dDogXCJBY3RpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjM0NTY3LFxyXG4gICAgbm9tOiBcIkRVUE9OVFwiLFxyXG4gICAgcHJlbm9tOiBcIkZyYW7Dp29pc1wiLFxyXG4gICAgc29jaWV0ZTogXCJWR0NQXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IFwiQ2hlZiBkZSBwcm9qZXRcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIlQzQ1wiLFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiBcIjI3LzA0LzIwMTkgLSAzMS8xMi8yMDE5XCIsXHJcbiAgICBmb25jdGlvbk9wZXJhdGlvbm5lbGxlOiBcIkNoZWYgZGUgcHJvamV0XCIsXHJcbiAgICBzdGF0dXQ6IFwiSW5hY3RpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogODI5MDc3LFxyXG4gICAgbm9tOiBcIkdBUk5JRUZcIixcclxuICAgIHByZW5vbTogXCJMYXVyZW50XCIsXHJcbiAgICBzb2NpZXRlOiBcIkRDQlwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiBcIk1hw6dvblwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiQWZmZWN0YXRpb25cIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyOC8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogXCJDaGVmIGRlIGNoYW50aWVyXCIsXHJcbiAgICBzdGF0dXQ6IFwiQSBjb21wbMOpdGVyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3NjY3ODksXHJcbiAgICBub206IFwiR0FSXCIsXHJcbiAgICBwcmVub206IFwiTGF1cmVcIixcclxuICAgIHNvY2lldGU6IFwiRWVpZmZhZ2VcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogXCJQZWludHJlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZHUgQ2FpcmVcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyOS8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogXCJDaGVmIGQnw6lxdWlwZVwiLFxyXG4gICAgc3RhdHV0OiBcIkRpc3BvbmlibGVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM0NTY3OCxcclxuICAgIG5vbTogXCJDSEFPVUNcIixcclxuICAgIHByZW5vbTogXCJNb2hhbW1lZFwiLFxyXG4gICAgc29jaWV0ZTogXCJEWENcIixcclxuICAgIGZvbmN0aW9uT2ZmaWNpZWxsZTogXCJqY29uc3VsdGFudCBTSVJIXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZGUgQ29wZW5oYWd1ZSBsaWduZSA0XCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMzAvMDQvMjAxOSAtIDMxLzEyLzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IFwiUFBPXCIsXHJcbiAgICBzdGF0dXQ6IFwiSW5kaXNwb25pYmxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NTY3ODksXHJcbiAgICBub206IFwiRFVCT1wiLFxyXG4gICAgcHJlbm9tOiBcIk1laWR5XCIsXHJcbiAgICBzb2NpZXRlOiBcIlZJTkNJXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IFwiTWHDp29uXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZGUgQ29wZW5oYWd1ZSBsaWduZSA0XCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMDEvMDQvMjAxOSAtIDMxLzA5LzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IFwiRm9uY3Rpb24gb3DDqXJhdGlvbm5lbFwiLFxyXG4gICAgc3RhdHV0OiBcIlNvcnRpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1Njc4OTAsXHJcbiAgICBub206IFwiQkVOWUFLT1VCXCIsXHJcbiAgICBwcmVub206IFwiTWVkXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRYQyBUZWNobm9sb2dpZVwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiBcIlBlaW50cmVcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIkFlcm9wb3J0IGludGVybmF0aW9uYWwgQXJ0dXJvIE1lcmlubyBCZW5pdGV6XCIsXHJcbiAgICBwZXJpb2RlQWZmZWN0YXRpb246IFwiMjYvMDQvMjAxOSAtIDMxLzA5LzIwMTlcIixcclxuICAgIGZvbmN0aW9uT3BlcmF0aW9ubmVsbGU6IFwiQ291dnJldXJcIixcclxuICAgIHN0YXR1dDogXCJTb3J0aVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTExMTExLFxyXG4gICAgbm9tOiBcIkxFQkhBUlwiLFxyXG4gICAgcHJlbm9tOiBcIk5hb3VmYWxcIixcclxuICAgIHNvY2lldGU6IFwiRENCXCIsXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IFwiQXJjaGl0ZWN0ZVwiLFxyXG4gICAgYWZmZWN0YXRpb246IFwiUG9udCBkZSBMJ0F0bGFudGlxdWVcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyNi8wNC8yMDE5IC0gMDEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogXCJFbGVjdGljaWVuXCIsXHJcbiAgICBzdGF0dXQ6IFwiQXJjaGl2w6lcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDY2NjY2NixcclxuICAgIG5vbTogXCJUQUxBTFwiLFxyXG4gICAgcHJlbm9tOiBcIk1vaHNzaW5lXCIsXHJcbiAgICBzb2NpZXRlOiBcIkRYQ1wiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiBcIkRpcmVjdGV1ciBkZSBwcm9qZXRcIixcclxuICAgIGFmZmVjdGF0aW9uOiBcIlN0YXRpb24gZCfDqXB1cmF0aW9uIGRlIEJydXhlbGxlcyBzdWRcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyNi8wNi8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogXCJDb25kdWN0ZXVyIGRlIHRydmFpbFwiLFxyXG4gICAgc3RhdHV0OiBcIkFjdGlmXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDExMTIsXHJcbiAgICBub206IFwiQUJBUkdIQVpcIixcclxuICAgIHByZW5vbTogXCJFaWZmYWdlXCIsXHJcbiAgICBzb2NpZXRlOiBcIkBrYXJlblwiLFxyXG4gICAgZm9uY3Rpb25PZmZpY2llbGxlOiBcIkNvbnN1bHRhbnRlXCIsXHJcbiAgICBhZmZlY3RhdGlvbjogXCJNw6l0cm8gZGUgRG9oYSBsaWduZSByb3VnZSBzdWRcIixcclxuICAgIHBlcmlvZGVBZmZlY3RhdGlvbjogXCIyNi8wNC8yMDE5IC0gMzEvMTIvMjAxOVwiLFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZTogXCJNYcOnb25cIixcclxuICAgIHN0YXR1dDogXCJEaXNwb25pYmxlXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHX09CSkVDVF9WSU5DSSA9IHtcclxuICAvLyBoaWRlSGVhZGVyOiBmYWxzZSxcclxuICAvLyBhZGQ6IHtcclxuICAvLyAgIGFkZEJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLXBsdXMnPjwvaT5cIixcclxuICAvLyAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNoZWNrbWFyayc+PC9pPlwiLFxyXG4gIC8vICAgY2FuY2VsQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2xvc2UnPjwvaT5cIixcclxuICAvLyAgIGNvbmZpcm1DcmVhdGU6IFwidHJ1ZVwiXHJcbiAgLy8gfSxcclxuICAvLyBlZGl0OiB7XHJcbiAgLy8gICBlZGl0QnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItZWRpdCc+PC9pPlwiLFxyXG4gIC8vICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLWNoZWNrbWFyayc+PC9pPlwiLFxyXG4gIC8vICAgY2FuY2VsQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2xvc2UnPjwvaT5cIixcclxuICAvLyAgIGNvbmZpcm1TYXZlOiBcInRydWVcIlxyXG4gIC8vIH0sXHJcbiAgLy8gZGVsZXRlOiB7XHJcbiAgLy8gICBkZWxldGVCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi10cmFzaCc+PC9pPlwiLFxyXG4gIC8vICAgY29uZmlybURlbGV0ZTogXCJ0cnVlXCJcclxuICAvLyB9LFxyXG4gIC8vIHNlbGVjdE1vZGU6IFwibXVsdGlcIixcclxuICBjb2x1bW5zOiB7XHJcbiAgICBpZDoge1xyXG4gICAgICB0aXRsZTogXCJJRCBWSU5DSVwiLFxyXG4gICAgICBlZGl0YWJsZTogXCJmYWxzZVwiLFxyXG4gICAgICBhZGRhYmxlOiBcImZhbHNlXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmFsc2VcIixcclxuICAgICAgaGlkZUhlYWRlcjogXCJ0cnVlXCIsXHJcbiAgICAgIG9yZGVyOiAwLFxyXG4gICAgICBmaWx0ZXI6IHRydWVcclxuICAgIH0sXHJcbiAgICBub206IHtcclxuICAgICAgdGl0bGU6IFwiTm9tXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgbm90U2hvd25GaWVsZDogXCJmYWxzZVwiLFxyXG4gICAgICBvcmRlcjogMSxcclxuICAgICAgZGlzcGxheTogXCJ0cnVlXCJcclxuICAgIH0sXHJcbiAgICBwcmVub206IHtcclxuICAgICAgdGl0bGU6IFwiUHLDqW5vbVwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgZGlzcGxheTogXCJmYWxzZVwiXHJcbiAgICB9LFxyXG4gICAgc29jaWV0ZToge1xyXG4gICAgICB0aXRsZTogXCJTb2Npw6l0w6lcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgb3JkZXI6IDMsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgZGlzcGxheTogXCJ0cnVlXCJcclxuICAgIH0sXHJcbiAgICBmb25jdGlvbk9mZmljaWVsbGU6IHtcclxuICAgICAgdGl0bGU6IFwiRm9uY3Rpb24gb2ZmaWNpZWxcIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiPGlucHV0ICB0eXBlPSdlbWFpbCc+XCJcclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDQsXHJcbiAgICAgIGRpc3BsYXk6IFwidHJ1ZVwiXHJcbiAgICB9LFxyXG4gICAgYWZmZWN0YXRpb246IHtcclxuICAgICAgdGl0bGU6IFwiQWZmZWN0YXRpb25cIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGVkaXRvcjoge1xyXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3QuLi5cIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImphY29iXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiamFjb2JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIllhc3NpblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIllhc3NpblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJZYXNzXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiWWFzc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJBbm5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJBbm5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiVE9UT1wiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlRPVE9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiTWVkXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTWVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIkJFblwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkJFblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJtb2hhbW1lZCBiZW55YWtvdWJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiU0VMTEFNSVwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlNFTExBTUlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwidGFsYUxcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJ0YWxhTFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCI8Yj5TYW1hbnRoYTwvYj5cIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTYW1hbnRoYVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA1LFxyXG4gICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgIGRpc3BsYXk6IFwidHJ1ZVwiXHJcbiAgICB9LFxyXG4gICAgcGVyaW9kZUFmZmVjdGF0aW9uOiB7XHJcbiAgICAgIHRpdGxlOiBcIlDDqXJpb2RlIGQnYWZmZWN0YXRpb25cIixcclxuICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIGRpc3BsYXk6IFwidHJ1ZVwiXHJcbiAgICB9LFxyXG4gICAgZm9uY3Rpb25PcGVyYXRpb25uZWxsZToge1xyXG4gICAgICB0aXRsZTogXCJGb25jdGlvbiBvcMOpcmF0aW9ubmVsXCIsXHJcbiAgICAgIGVkaXRhYmxlOiBcImZhbHNlXCIsXHJcbiAgICAgIG9yZGVyOiA3LFxyXG4gICAgICBmaWx0ZXI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RhdHV0OiB7XHJcbiAgICAgIHRpdGxlOiBcIlN0YXR1dFwiLFxyXG4gICAgICBlZGl0YWJsZTogXCJ0cnVlXCIsXHJcbiAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgIG9yZGVyOiA4LFxyXG4gICAgICBkaXNwbGF5OiBcInRydWVcIlxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGVJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgYWdlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcGFzc2VkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREFUQV9UYWJsZTogVGFibGVEYXRlSW50ZXJmYWNlW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWFya1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiT1RUT09cIixcclxuICAgIHVzZXJuYW1lOiAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ha3Zlby9uZzItYWRtaW5cIj5OZzIgQWRtaW48L2E+JyxcclxuICAgIGVtYWlsOiBcIm1kb0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyOFwiLFxyXG4gICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGhvcm50b25cIixcclxuICAgIHVzZXJuYW1lOlxyXG4gICAgICAnPGltZyBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvNzMvRFhDX1RlY2gucG5nLzI4MHB4LURYQ19UZWNoLnBuZ1wiIGFsdD1cIlNtaWxleSBmYWNlXCIgaGVpZ2h0PVwiNDJcIiBpZHRoPVwiNDJcIj4nLFxyXG4gICAgZW1haWw6IFwiZmF0QHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjQ1XCIsXHJcbiAgICBwYXNzZWQ6IFwiWWVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkxhcnJ5XCIsXHJcbiAgICBsYXN0TmFtZTogXCJCaXJkXCIsXHJcbiAgICB1c2VybmFtZTogXCJAdHdpdHRlclwiLFxyXG4gICAgZW1haWw6IFwidHdpdHRlckBvdXRsb29rLmNvbVwiLFxyXG4gICAgYWdlOiBcIjE4XCIsXHJcbiAgICBwYXNzZWQ6IFwiWWVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcclxuICAgIGxhc3ROYW1lOiBcIlNub3dcIixcclxuICAgIHVzZXJuYW1lOiBcIkBzbm93XCIsXHJcbiAgICBlbWFpbDogXCJzbm93QGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjIwXCIsXHJcbiAgICBwYXNzZWQ6IFwiWWVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgZmlyc3ROYW1lOiBcIkphY2tcIixcclxuICAgIGxhc3ROYW1lOiBcIlNwYXJyb3dcIixcclxuICAgIHVzZXJuYW1lOiBcIkBqYWNrXCIsXHJcbiAgICBlbWFpbDogXCJqYWNrQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjMwXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBmaXJzdE5hbWU6IFwiQW5uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTbWl0aFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGFublwiLFxyXG4gICAgZW1haWw6IFwiYW5uQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjIxXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmFyYmFyYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmxhY2tcIixcclxuICAgIHVzZXJuYW1lOiBcIkBiYXJiYXJhXCIsXHJcbiAgICBlbWFpbDogXCJiYXJiYXJhQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjQzXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDgsXHJcbiAgICBmaXJzdE5hbWU6IFwiU2V2YW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkJhZ3JhdFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHNldmFuXCIsXHJcbiAgICBlbWFpbDogXCJzZXZhbkBvdXRsb29rLmNvbVwiLFxyXG4gICAgYWdlOiBcIjEzXCIsXHJcbiAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBmaXJzdE5hbWU6IFwiUnViZW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlZhcmRhblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHJ1YmVuXCIsXHJcbiAgICBlbWFpbDogXCJydWJlbkBnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyMlwiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMCxcclxuICAgIGZpcnN0TmFtZTogXCJLYXJlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU2V2YW5cIixcclxuICAgIHVzZXJuYW1lOiBcIkBrYXJlblwiLFxyXG4gICAgZW1haWw6IFwia2FyZW5AeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiMzNcIixcclxuICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWFya1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiT3R0b1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQG1hcmtcIixcclxuICAgIGVtYWlsOiBcIm1hcmtAZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMzhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkphY29iXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUaG9ybnRvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGphY29iXCIsXHJcbiAgICBlbWFpbDogXCJqYWNvYkB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCI0OFwiLFxyXG4gICAgcGFzc2VkOiBcIk5vXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMyxcclxuICAgIGZpcnN0TmFtZTogXCJIYWlrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIYWtvYlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGhhaWtcIixcclxuICAgIGVtYWlsOiBcImhhaWtAb3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCI0OFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBmaXJzdE5hbWU6IFwiR2FyZWdpblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSmlyYWlyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAZ2FyZWdpblwiLFxyXG4gICAgZW1haWw6IFwiZ2FyZWdpbkBnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCI0MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBmaXJzdE5hbWU6IFwiS3Jpa29yXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCZWRyb3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBrcmlrb3JcIixcclxuICAgIGVtYWlsOiBcImtyaWtvckB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCIzMlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBmaXJzdE5hbWU6IFwiRnJhbmNpc2NhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcmFkeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEdpYnNvblwiLFxyXG4gICAgZW1haWw6IFwiZnJhbmNpc2NhZ2lic29uQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgZmlyc3ROYW1lOiBcIlRpbGxtYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkZpZ3Vlcm9hXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU25vd1wiLFxyXG4gICAgZW1haWw6IFwidGlsbG1hbnNub3dAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTgsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmltZW5lelwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTW9ycmlzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQnJ5YW50XCIsXHJcbiAgICBlbWFpbDogXCJqaW1lbmV6YnJ5YW50QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE5LFxyXG4gICAgZmlyc3ROYW1lOiBcIlNhbmRvdmFsXCIsXHJcbiAgICBsYXN0TmFtZTogXCJKYWNvYnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1jYnJpZGVcIixcclxuICAgIGVtYWlsOiBcInNhbmRvdmFsbWNicmlkZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMCxcclxuICAgIGZpcnN0TmFtZTogXCJHcmlmZmluXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUb3JyZXNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDaGFybGVzXCIsXHJcbiAgICBlbWFpbDogXCJncmlmZmluY2hhcmxlc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMSxcclxuICAgIGZpcnN0TmFtZTogXCJDb3JhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQYXJrZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDYWxkd2VsbFwiLFxyXG4gICAgZW1haWw6IFwiY29yYWNhbGR3ZWxsQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkNpbmR5XCIsXHJcbiAgICBsYXN0TmFtZTogXCJCb25kXCIsXHJcbiAgICB1c2VybmFtZTogXCJAVmVsZXpcIixcclxuICAgIGVtYWlsOiBcImNpbmR5dmVsZXpAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjMsXHJcbiAgICBmaXJzdE5hbWU6IFwiRnJpZWRhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUeXNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENyYWlnXCIsXHJcbiAgICBlbWFpbDogXCJmcmllZGFjcmFpZ0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNCxcclxuICAgIGZpcnN0TmFtZTogXCJDb3RlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIb2xjb21iXCIsXHJcbiAgICB1c2VybmFtZTogXCJAUm93ZVwiLFxyXG4gICAgZW1haWw6IFwiY290ZXJvd2VAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjUsXHJcbiAgICBmaXJzdE5hbWU6IFwiVHJ1amlsbG9cIixcclxuICAgIGxhc3ROYW1lOiBcIk1lamlhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAVmFsZW56dWVsYVwiLFxyXG4gICAgZW1haWw6IFwidHJ1amlsbG92YWxlbnp1ZWxhQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI2LFxyXG4gICAgZmlyc3ROYW1lOiBcIlBydWl0dFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU2hlcGFyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNsb2FuXCIsXHJcbiAgICBlbWFpbDogXCJwcnVpdHRzbG9hbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNyxcclxuICAgIGZpcnN0TmFtZTogXCJTdXR0b25cIixcclxuICAgIGxhc3ROYW1lOiBcIk9ydGVnYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEJsYWNrXCIsXHJcbiAgICBlbWFpbDogXCJzdXR0b25ibGFja0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyOCxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJpb25cIixcclxuICAgIGxhc3ROYW1lOiBcIkhlYXRoXCIsXHJcbiAgICB1c2VybmFtZTogXCJARXNwaW5vemFcIixcclxuICAgIGVtYWlsOiBcIm1hcmlvbmVzcGlub3phQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0N1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI5LFxyXG4gICAgZmlyc3ROYW1lOiBcIk5ld21hblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSGlja3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBLZWl0aFwiLFxyXG4gICAgZW1haWw6IFwibmV3bWFua2VpdGhAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzAsXHJcbiAgICBmaXJzdE5hbWU6IFwiQm95bGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkxhcnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFN1bW1lcnNcIixcclxuICAgIGVtYWlsOiBcImJveWxlc3VtbWVyc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMSxcclxuICAgIGZpcnN0TmFtZTogXCJIYXluZXNcIixcclxuICAgIGxhc3ROYW1lOiBcIlZpbnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1ja2VuemllXCIsXHJcbiAgICBlbWFpbDogXCJoYXluZXNtY2tlbnppZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMixcclxuICAgIGZpcnN0TmFtZTogXCJNaWxsZXJcIixcclxuICAgIGxhc3ROYW1lOiBcIkFjb3N0YVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFlvdW5nXCIsXHJcbiAgICBlbWFpbDogXCJtaWxsZXJ5b3VuZ0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMyxcclxuICAgIGZpcnN0TmFtZTogXCJKb2huc3RvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQnJvd25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBLbmlnaHRcIixcclxuICAgIGVtYWlsOiBcImpvaG5zdG9ua25pZ2h0QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxlbmFcIixcclxuICAgIGxhc3ROYW1lOiBcIlBpdHRzXCIsXHJcbiAgICB1c2VybmFtZTogXCJARm9yYmVzXCIsXHJcbiAgICBlbWFpbDogXCJsZW5hZm9yYmVzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgZmlyc3ROYW1lOiBcIlRlcnJpZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiS2VubmVkeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEJyYW5jaFwiLFxyXG4gICAgZW1haWw6IFwidGVycmllYnJhbmNoQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxvdWlzZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQWd1aXJyZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtpcmJ5XCIsXHJcbiAgICBlbWFpbDogXCJsb3Vpc2VraXJieUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNyxcclxuICAgIGZpcnN0TmFtZTogXCJEYXZpZFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGF0dG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuZGVyc1wiLFxyXG4gICAgZW1haWw6IFwiZGF2aWRzYW5kZXJzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM4LFxyXG4gICAgZmlyc3ROYW1lOiBcIkhvbGRlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmFybG93XCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNraW5uZXlcIixcclxuICAgIGVtYWlsOiBcImhvbGRlbm1ja2lubmV5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM5LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJha2VyXCIsXHJcbiAgICBsYXN0TmFtZTogXCJSaXZlcmFcIixcclxuICAgIHVzZXJuYW1lOiBcIkBNb250b3lhXCIsXHJcbiAgICBlbWFpbDogXCJiYWtlcm1vbnRveWFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDAsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVsaW5kYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTGxveWRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDYWxkZXJvblwiLFxyXG4gICAgZW1haWw6IFwiYmVsaW5kYWNhbGRlcm9uQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQxLFxyXG4gICAgZmlyc3ROYW1lOiBcIlBlYXJzb25cIixcclxuICAgIGxhc3ROYW1lOiBcIlBhdHJpY2tcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDbGVtZW50c1wiLFxyXG4gICAgZW1haWw6IFwicGVhcnNvbmNsZW1lbnRzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkFseWNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNY2tlZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQERhdWdoZXJ0eVwiLFxyXG4gICAgZW1haWw6IFwiYWx5Y2VkYXVnaGVydHlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDMsXHJcbiAgICBmaXJzdE5hbWU6IFwiVmFsZW5jaWFcIixcclxuICAgIGxhc3ROYW1lOiBcIlNwZW5jZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE9sc2VuXCIsXHJcbiAgICBlbWFpbDogXCJ2YWxlbmNpYW9sc2VuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxlYWNoXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIb2xjb21iXCIsXHJcbiAgICB1c2VybmFtZTogXCJASHVtcGhyZXlcIixcclxuICAgIGVtYWlsOiBcImxlYWNoaHVtcGhyZXlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDUsXHJcbiAgICBmaXJzdE5hbWU6IFwiTW9zc1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJARml0enBhdHJpY2tcIixcclxuICAgIGVtYWlsOiBcIm1vc3NmaXR6cGF0cmlja0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NixcclxuICAgIGZpcnN0TmFtZTogXCJKZWFubmVcIixcclxuICAgIGxhc3ROYW1lOiBcIkNvb2tlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV2FyZFwiLFxyXG4gICAgZW1haWw6IFwiamVhbm5ld2FyZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NyxcclxuICAgIGZpcnN0TmFtZTogXCJXaWxtYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQnJpZ2dzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS2lkZFwiLFxyXG4gICAgZW1haWw6IFwid2lsbWFraWRkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1M1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ4LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJlYXRyaWNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQZXJyeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEdpbGJlcnRcIixcclxuICAgIGVtYWlsOiBcImJlYXRyaWNlZ2lsYmVydEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0OSxcclxuICAgIGZpcnN0TmFtZTogXCJXaGl0YWtlclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSHlkZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1jZG9uYWxkXCIsXHJcbiAgICBlbWFpbDogXCJ3aGl0YWtlcm1jZG9uYWxkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUwLFxyXG4gICAgZmlyc3ROYW1lOiBcIlJlYmVrYWhcIixcclxuICAgIGxhc3ROYW1lOiBcIkR1cmFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAR3Jvc3NcIixcclxuICAgIGVtYWlsOiBcInJlYmVrYWhncm9zc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MSxcclxuICAgIGZpcnN0TmFtZTogXCJFYXJsaW5lXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNYXllclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFdvb2R3YXJkXCIsXHJcbiAgICBlbWFpbDogXCJlYXJsaW5ld29vZHdhcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDUyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTIsXHJcbiAgICBmaXJzdE5hbWU6IFwiTW9yYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkJheHRlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEpvaG5zXCIsXHJcbiAgICBlbWFpbDogXCJtb3JhbmpvaG5zQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUzLFxyXG4gICAgZmlyc3ROYW1lOiBcIk5hbmV0dGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkh1YmJhcmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDb29rZVwiLFxyXG4gICAgZW1haWw6IFwibmFuZXR0ZWNvb2tlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkRhbHRvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiV2Fsa2VyXCIsXHJcbiAgICB1c2VybmFtZTogXCJASGVuZHJpY2tzXCIsXHJcbiAgICBlbWFpbDogXCJkYWx0b25oZW5kcmlja3NAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTUsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVubmV0dFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmxha2VcIixcclxuICAgIHVzZXJuYW1lOiBcIkBQZW5hXCIsXHJcbiAgICBlbWFpbDogXCJiZW5uZXR0cGVuYUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NixcclxuICAgIGZpcnN0TmFtZTogXCJLZWxsaWVcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvcnRvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFdlaXNzXCIsXHJcbiAgICBlbWFpbDogXCJrZWxsaWV3ZWlzc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NyxcclxuICAgIGZpcnN0TmFtZTogXCJIb2Jic1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGFsbGV5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuZm9yZFwiLFxyXG4gICAgZW1haWw6IFwiaG9iYnNzYW5mb3JkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU4LFxyXG4gICAgZmlyc3ROYW1lOiBcIk1jZ3VpcmVcIixcclxuICAgIGxhc3ROYW1lOiBcIkRvbmFsZHNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFJvbWFuXCIsXHJcbiAgICBlbWFpbDogXCJtY2d1aXJlcm9tYW5AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTksXHJcbiAgICBmaXJzdE5hbWU6IFwiUm9kcmlxdWV6XCIsXHJcbiAgICBsYXN0TmFtZTogXCJTYXVuZGVyc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEhhcnBlclwiLFxyXG4gICAgZW1haWw6IFwicm9kcmlxdWV6aGFycGVyQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkxvdVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQ29ubmVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuY2hlelwiLFxyXG4gICAgZW1haWw6IFwibG91c2FuY2hlekBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTZcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHX1NFVFRJTkdTID0ge1xyXG4gIGFkZDoge1xyXG4gICAgYWRkQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItcGx1cyc+PC9pPlwiLFxyXG4gICAgY3JlYXRlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gICAgY29uZmlybUNyZWF0ZTogXCJ0cnVlXCJcclxuICB9LFxyXG4gIGVkaXQ6IHtcclxuICAgIGVkaXRCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1lZGl0Jz48L2k+XCIsXHJcbiAgICBzYXZlQnV0dG9uQ29udGVudDogXCI8aSBjbGFzcz0nbmItY2hlY2ttYXJrJz48L2k+XCIsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiBcIjxpIGNsYXNzPSduYi1jbG9zZSc+PC9pPlwiLFxyXG4gICAgY29uZmlybVNhdmU6IFwidHJ1ZVwiXHJcbiAgfSxcclxuICBkZWxldGU6IHtcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6IFwiPGkgY2xhc3M9J25iLXRyYXNoJz48L2k+XCIsXHJcbiAgICBjb25maXJtRGVsZXRlOiBcInRydWVcIlxyXG4gIH0sXHJcbiAgc2VsZWN0TW9kZTogXCJtdWx0aVwiLFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHRpdGxlOiBcIklEXCIsXHJcbiAgICAgIGVkaXRhYmxlOiBcImZhbHNlXCIsXHJcbiAgICAgIGFkZGFibGU6IFwiZmFsc2VcIixcclxuICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgbm90U2hvd25GaWVsZDogXCJ0cnVlXCIsXHJcbiAgICAgIGhpZGVIZWFkZXI6IFwidHJ1ZVwiLFxyXG4gICAgICBvcmRlcjogMFxyXG4gICAgfSxcclxuICAgIGZpcnN0TmFtZToge1xyXG4gICAgICB0aXRsZTogXCJGaXJzdCBOYW1lXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3QuLi5cIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImphY29iXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiamFjb2JcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiaGNnbHdqbHdjZ3d3Y2d3Y3dqXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIk1lZFwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1lZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdFNob3duRmllbGQ6IFwiZmFsc2VcIixcclxuICAgICAgb3JkZXI6IDFcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0aXRsZTogXCJVc2VybmFtZVwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgb3JkZXI6IDJcclxuICAgIH0sXHJcbiAgICBsYXN0TmFtZToge1xyXG4gICAgICB0aXRsZTogXCJMYXN0IE5hbWVcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgb3JkZXI6IDNcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0aXRsZTogXCJFLW1haWxcIixcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6IFwiY29tcGxldGVyXCIsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBjb21wbGV0ZXI6IHtcclxuICAgICAgICAgICAgZGF0YTogXCJ0aGlzLnNvdXJjZVwiLFxyXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHM6IFwiY29tcGxldGVyXCIsXHJcbiAgICAgICAgICAgIHRpdGxlRmllbGQ6IFwiZW1haWxcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgdmFsdWU6IFwiPGlucHV0ICB0eXBlPSdlbWFpbCc+XCJcclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDRcclxuICAgIH0sXHJcbiAgICBhZ2U6IHtcclxuICAgICAgdGl0bGU6IFwiRGF0ZVwiLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgZWRpdG9yOiB7XHJcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICBzZWxlY3RUZXh0OiBcIlNlbGVjdC4uLlwiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiamFjb2JcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJqYWNvYlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJoY2dsd2psd2Nnd3djZ3djd2pcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJoY2dsd2psd2Nnd3djZ3djd2pcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiWWFzc2luXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiWWFzc2luXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIllhc3NcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJZYXNzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIkFublwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFublwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJUT1RPXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVE9UT1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJNZWRcIixcclxuICAgICAgICAgICAgICB0aXRsZTogXCJNZWRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IFwiQkVuXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQkVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIm1vaGFtbWVkIGJlbnlha291YlwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIm1vaGFtbWVkIGJlbnlha291YlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJTRUxMQU1JXCIsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU0VMTEFNSVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJ0YWxhTFwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcInRhbGFMXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBcIjxiPlNhbWFudGhhPC9iPlwiLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlNhbWFudGhhXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IDVcclxuICAgIH0sXHJcbiAgICBwYXNzZWQ6IHtcclxuICAgICAgdGl0bGU6IFwiUGFzc2VkXCIsXHJcbiAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHRydWU6IFwiWWVzXCIsXHJcbiAgICAgICAgICBmYWxzZTogXCJOb1wiLFxyXG4gICAgICAgICAgcmVzZXRUZXh0OiBcImNsZWFyXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyOiA2XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=