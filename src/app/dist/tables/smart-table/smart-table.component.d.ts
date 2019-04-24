import { OnInit, OnDestroy } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
import { Observable } from "rxjs";
export declare class SmartTableComponent implements OnInit, OnDestroy {
    private service;
    source: LocalDataSource;
    setting: Observable<any>;
    settings: any;
    constructor(service: SmartTableService);
    ngOnInit(): void;
    onDeleteConfirm(event: any): void;
    ngOnDestroy(): void;
}
