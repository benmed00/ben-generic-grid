/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
declare var Liferay: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {

  settings: any;
  data: any[];

  constructor(public service: AppService) {}

  ngOnInit(): void {

    // this.settings = this.service.getLocalSettings() ;

    this.service.getSettings('rh', 1, 1).subscribe(settings => {
      this.settings = settings;
      // console.log(" SETTINGS : ", this.settings);
    });

    // this.service.getData().subscribe(settings => {
    //   this.data = data;
    //   console.log(" DATA : ", this.data);
    // });

    this.data = this.service.getData();
    // console.log(" DATA : ", this.data);

  }
}
