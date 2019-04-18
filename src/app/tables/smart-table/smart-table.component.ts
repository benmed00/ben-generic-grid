import { Component, OnInit, OnDestroy } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData, SmartTableService } from "../smart-table.service";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-smart-table",
  templateUrl: "./smart-table.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class SmartTableComponent implements OnInit, OnDestroy {
  source: LocalDataSource = new LocalDataSource();

  setting: Observable<any>;
  settings: any;

  constructor(private service: SmartTableService) {
    //  this.setting = this.service.getSettings();
    // console.log("setting : " + this.setting);
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    // this.settings = this.service.getSettings();
    // this.settings = this.service.etSetting();
    // console.log("settings : " + JSON.stringify(this.settings));

    this.service.getSetting().subscribe(res => {
      this.settings = res;
      console.log("setting : " + JSON.stringify(res));
    });


  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   console.log("settings : " + JSON.stringify(this.settings));

  }
}
