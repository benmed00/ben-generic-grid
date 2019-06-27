/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { SmartTableService } from "./tables/smart-table.service";
declare var Liferay: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  settings: any;
  data: any[];
  idcollaborateur: string;
  active: boolean;
  listActive: boolean = true;
  dossierActive: boolean = false;

  constructor(
    public service: AppService,
    public smartTableService: SmartTableService
  ) {}

  ngOnInit(): void {
    this.settings = this.service.getLocalSettings() ;

    this.service.getSettings("rh", 4, 1).subscribe(settings => {
      // this.settings = settings;
      console.log(" SETTINGS : ", this.settings);
    });

    // console.log(" Active tabs value : ", this.activeTabs);

    // this.service.getData().subscribe(settings => {
    //   this.data = data;
    //   console.log(" DATA : ", this.data);
    // });

    this.data = this.service.getData();
    // console.log(" DATA : ", this.data);
  }

  tabdossierActive() {
    this.listActive = false;
    this.dossierActive = true;
    console.log(
      "Function tabdossierActive() " + " this.listActive : ",
      this.listActive + " this.dossierActive : ",
      this.dossierActive
    );
  }

  tablistActive() {
    this.listActive = true;
    this.dossierActive = false;
    console.log(
      " Function tablistActive() " + " this.listActive : ",
      this.listActive + " this.dossierActive : ",
      this.dossierActive
    );
  }

  onChangedTab(event) {
    console.log(" changeTab : ", event);
    if (event.tabTitle === "Dossier Collaborateur") {
      this.listActive = false;
      this.dossierActive = true;
    } else {
      this.listActive = true;
      this.dossierActive = false;
    }
  }

  getIdCollaborateur(idCollaborateur: string) {
    this.listActive = false;
    this.dossierActive = true;
    this.idcollaborateur = idCollaborateur;
    console.log(" ID Collaborateur : ", this.idcollaborateur);

  }
}
