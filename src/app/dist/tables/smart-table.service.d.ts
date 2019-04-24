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
    constructor(_http: HttpClient);
    getData(): TableDateInterface[];
    getSettings(): {
        add: {
            addButtonContent: string;
            createButtonContent: string;
            cancelButtonContent: string;
        };
        edit: {
            editButtonContent: string;
            saveButtonContent: string;
            cancelButtonContent: string;
        };
        delete: {
            deleteButtonContent: string;
            confirmDelete: boolean;
        };
        columns: {
            id: {
                title: string;
                type: string;
            };
            firstName: {
                title: string;
                type: string;
            };
            lastName: {
                title: string;
                type: string;
            };
            username: {
                title: string;
                type: string;
            };
            email: {
                title: string;
                type: string;
            };
            age: {
                title: string;
                type: string;
            };
        };
    };
    getSetting(): Observable<Object>;
    etSetting(): any;
}
export interface TableDateInterface {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    age: string | number;
}
export declare const DATA_Table: TableDateInterface[];
export declare const settings: {
    add: {
        addButtonContent: string;
        createButtonContent: string;
        cancelButtonContent: string;
    };
    edit: {
        editButtonContent: string;
        saveButtonContent: string;
        cancelButtonContent: string;
    };
    delete: {
        deleteButtonContent: string;
        confirmDelete: boolean;
    };
    columns: {
        id: {
            title: string;
            type: string;
        };
        firstName: {
            title: string;
            type: string;
        };
        lastName: {
            title: string;
            type: string;
        };
        username: {
            title: string;
            type: string;
        };
        email: {
            title: string;
            type: string;
        };
        age: {
            title: string;
            type: string;
        };
    };
};
