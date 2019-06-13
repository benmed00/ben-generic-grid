import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare abstract class SmartTableData {
    abstract getData(): any[];
    abstract getSettings(): any;
    abstract getSetting(): any;
}
export declare class SmartTableService extends SmartTableData {
    private _http;
    private _url;
    private _url0;
    private _url1;
    private _url2;
    private _url3;
    private _url4;
    private _url5;
    private _url6;
    apiUrl: string;
    constructor(_http: HttpClient);
    getData(): TableVinciInterface[];
    getdata(): Observable<any[]>;
    getSettingsFromNodeBckend(): Observable<any>;
    getDataFromBackend(): Observable<any[]>;
    editDataFromBackend(settings: any): Observable<any[]>;
    deleteDataFromBackend(): void;
    addDataFromBackend(): void;
    getSettings(): {
        columns: {
            id: {
                title: string;
                editable: string;
                addable: string;
                type: string;
                display: string;
                hideHeader: string;
                order: number;
                filter: boolean;
            };
            nom: {
                title: string;
                type: string;
                filter: boolean;
                notShownField: string;
                order: number;
                display: string;
            };
            prenom: {
                title: string;
                type: string;
                order: number;
                filter: boolean;
                display: string;
            };
            societe: {
                title: string;
                type: string;
                order: number;
                filter: boolean;
                display: string;
            };
            fonctionOfficielle: {
                title: string;
                type: string;
                filter: boolean;
                editor: {
                    type: string;
                    value: string;
                };
                order: number;
                display: string;
            };
            affectation: {
                title: string;
                type: string;
                editor: {
                    type: string;
                    config: {
                        selectText: string;
                        list: {
                            value: string;
                            title: string;
                        }[];
                    };
                };
                order: number;
                filter: boolean;
                display: string;
            };
            periodeAffectation: {
                title: string;
                filter: boolean;
                order: number;
                display: string;
            };
            fonctionOperationnelle: {
                title: string;
                editable: string;
                order: number;
                filter: boolean;
            };
            statut: {
                title: string;
                editable: string;
                filter: boolean;
                order: number;
                display: string;
            };
        };
    };
    updateColumns(columns: any): void;
    savePreferences(): void;
    getSetting(): void;
    getVinciSetting(): Observable<Object>;
    editVinciSetting(settings: {}): void;
    updatePreferences(preference: any): import("rxjs").Subscription;
    getSettingsBackend(roleUser: string, idTable: number, idUser: number): import("rxjs").Subscription;
    getSettingsFromGitHub(): Observable<Object>;
    updateData(): TableDateInterface[];
    updateSettings(settings: any): import("rxjs").Subscription;
    etSetting(): any;
    private handleError;
}
export declare enum PreferencesType {
    PREF_ORDER = 0,
    PREF_SORT = 1,
    PREF_FILTER = 2,
    PREF_VISIBILITY = 3
}
export interface Preference {
    idPreference: number;
    idTable: number;
    idUser: number;
    preferneceType: string;
    roleUser: string;
    value: [string];
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
export declare const DATA_Grid: TableVinciInterface[];
export declare const CONFIG_OBJECT_VINCI: {
    columns: {
        id: {
            title: string;
            editable: string;
            addable: string;
            type: string;
            display: string;
            hideHeader: string;
            order: number;
            filter: boolean;
        };
        nom: {
            title: string;
            type: string;
            filter: boolean;
            notShownField: string;
            order: number;
            display: string;
        };
        prenom: {
            title: string;
            type: string;
            order: number;
            filter: boolean;
            display: string;
        };
        societe: {
            title: string;
            type: string;
            order: number;
            filter: boolean;
            display: string;
        };
        fonctionOfficielle: {
            title: string;
            type: string;
            filter: boolean;
            editor: {
                type: string;
                value: string;
            };
            order: number;
            display: string;
        };
        affectation: {
            title: string;
            type: string;
            editor: {
                type: string;
                config: {
                    selectText: string;
                    list: {
                        value: string;
                        title: string;
                    }[];
                };
            };
            order: number;
            filter: boolean;
            display: string;
        };
        periodeAffectation: {
            title: string;
            filter: boolean;
            order: number;
            display: string;
        };
        fonctionOperationnelle: {
            title: string;
            editable: string;
            order: number;
            filter: boolean;
        };
        statut: {
            title: string;
            editable: string;
            filter: boolean;
            order: number;
            display: string;
        };
    };
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
export declare const DATA_Table: TableDateInterface[];
export declare const CONFIG_SETTINGS: {
    add: {
        addButtonContent: string;
        createButtonContent: string;
        cancelButtonContent: string;
        confirmCreate: string;
    };
    edit: {
        editButtonContent: string;
        saveButtonContent: string;
        cancelButtonContent: string;
        confirmSave: string;
    };
    delete: {
        deleteButtonContent: string;
        confirmDelete: string;
    };
    selectMode: string;
    columns: {
        id: {
            title: string;
            editable: string;
            addable: string;
            type: string;
            notShownField: string;
            hideHeader: string;
            order: number;
        };
        firstName: {
            title: string;
            type: string;
            filter: {
                type: string;
                config: {
                    selectText: string;
                    list: {
                        value: string;
                        title: string;
                    }[];
                };
            };
            notShownField: string;
            order: number;
        };
        username: {
            title: string;
            type: string;
            order: number;
        };
        lastName: {
            title: string;
            type: string;
            order: number;
        };
        email: {
            title: string;
            type: string;
            filter: {
                type: string;
                config: {
                    completer: {
                        data: string;
                        searchFields: string;
                        titleField: string;
                    };
                };
            };
            editor: {
                type: string;
                value: string;
            };
            order: number;
        };
        age: {
            title: string;
            type: string;
            editor: {
                type: string;
                config: {
                    selectText: string;
                    list: {
                        value: string;
                        title: string;
                    }[];
                };
            };
            order: number;
        };
        passed: {
            title: string;
            filter: {
                type: string;
                config: {
                    true: string;
                    false: string;
                    resetText: string;
                };
            };
            order: number;
        };
    };
};
