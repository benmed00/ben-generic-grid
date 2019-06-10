import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _url3: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }


  getData() {
    return DATA_Grid; // from Local
    // return this._http.get<any[]>(this._url3 + "/data"); // From remote with HTTP
  }

  getSettings() {
    // return CONFIG_OBJECT_VINCI; // from Local
    return this._http.get<any>(this._url3 + "/settings"); // From remote with HTTP
      // .pipe(catchError(this.handleError));
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
    fonctionOfficiel: {
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
