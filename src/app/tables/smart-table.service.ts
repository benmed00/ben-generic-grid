import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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

  private _url: string = "assets/utils/config_table.json";
  private _url0: string = "assets/utils/vinci_data.json";
  private _url1: string = "assets/utils/settings.ts";
  private _url2: string =
    "https://raw.githubusercontent.com/benmed00/vinci-settings/master/vinci_settings.json";
  private _url3: string = "http://localhost:3000";

  // apiUrl = environment.apiUrl;
  apiUrl =
    "https://github.dxc.com/mbenyakoub/Generique-DataGrid/blob/master/src/assets/utils";

  constructor(private _http: HttpClient) {
    super();
  }

  getData() {
    // return DATA_Table;
    return DATA_Grid;
  }

  getdata() {
    return this._http.get<any[]>(this._url3 + "/data");
  }
  getSettingsFromNodeBckend() {
    return this._http
      .get(this._url3 + "/settings")
      .pipe(catchError(this.handleError));
  }

  getDataFromBackend() {
    console.log(" Get Data Service ");

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
    console.log(" ==> UPDATE COLUMNS ==> ");
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
    console.log(" getVinciSetting() : ");
    return this._http
      .get(this._url3 + "/settings")
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

  getSettingsFromGitHub() {
    return this._http
      .get(this.apiUrl + "/settings.ts")
      .pipe(catchError(this.handleError));
  }

  updateData() {
    return DATA_Table;
  }

  updateSettings(settings) {
    // console.log(" Update Settings Service ");

    console.log("SERVICE send Settings : ", settings.columns);

    return this._http.post("http://localhost:3000", settings).subscribe({
      next: data => {
        // console.log("data retourned from the backend : ", data);
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
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}

export interface TableVinciInterface {
  id: number;
  nom: string;
  prenom: string;
  societe: string;
  fonctionOfficiel: string;
  affectation: string | number;
  periodeAffectation?: string;
  fonctionOperationnel: string;
  statut: string;
}

export const DATA_Grid: TableVinciInterface[] = [
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
  hideHeader: false,
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
      display: "false",
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
      display: "true"
    },
    prenom: {
      title: "Prénom",
      type: "html",
      order: 2,
      filter: false,
      display: "false"
    },
    societe: {
      title: "Société",
      type: "string",
      order: 3,
      filter: false,
      display: "true"
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
      filter: false,
      display: "true"
    },
    periodeAffectation: {
      title: "Période d'affectation",
      filter: false,
      order: 6,
      display: "true"
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
      display: "true"
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
    username:
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/DXC_Tech.png/280px-DXC_Tech.png" alt="Smiley face" height="42" idth="42">',
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
