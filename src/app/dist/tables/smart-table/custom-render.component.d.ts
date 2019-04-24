import { OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
export declare class CustomRenderComponent implements ViewCell, OnInit {
    renderValue: string;
    value: string | number;
    rowData: any;
    ngOnInit(): void;
}
