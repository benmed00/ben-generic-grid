import { OnInit, OnDestroy, ComponentFactoryResolver } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableService } from "../smart-table.service";
import { Observable } from "rxjs";
export declare class SmartTableComponent implements OnInit, OnDestroy {
    private service;
    private componentFactoryResolver;
    source: LocalDataSource;
    setting: Observable<any>;
    settings: any;
    constructor(service: SmartTableService, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    onSearch(query?: string): void;
    onDeleteConfirm(event: any): void;
    onSaveConfirm(event: any): void;
    onCreateConfirm(event: any): void;
    ngOnDestroy(): void;
}
