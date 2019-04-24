import { __decorate, __metadata } from 'tslib';
import { Component, Injectable, ComponentFactoryResolver, NgModule, Input } from '@angular/core';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbButtonModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let TablesComponent = class TablesComponent {
};
TablesComponent = __decorate([
    Component({
        selector: 'app-tables',
        template: `<router-outlet></router-outlet>`
    })
], TablesComponent);

// import { SmartTableData } from './smart-table';
class SmartTableData {
}
let SmartTableService = class SmartTableService extends SmartTableData {
    constructor(_http) {
        super();
        this._http = _http;
        this._url = "assets/utils/config_table.json";
    }
    getData() {
        return DATA_Table;
    }
    getSettings() {
        return settings;
    }
    getSetting() {
        return this._http.get(this._url);
        // return JSON.stringify(this._url);
        // return this._http.get<any[]>(this._url);
        // return this._http.get(this._url).pipe(map((res: any) => res));
        // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
    }
    updateData() {
        return DATA_Table;
    }
    etSetting() {
        let setting;
        this._http.get(this._url).subscribe(res => {
            setting = res;
        });
        return setting;
    }
};
SmartTableService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], SmartTableService);
const DATA_Table = [
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
        username: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/DXC_Tech.png/280px-DXC_Tech.png" alt="Smiley face" height="42" idth="42">',
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
const settings = {
    add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
    },
    columns: {
        id: {
            title: "ID",
            type: "number"
        },
        firstName: {
            title: "First Name",
            type: "string"
        },
        lastName: {
            title: "Last Name",
            type: "string"
        },
        username: {
            title: "Username",
            type: "string"
        },
        email: {
            title: "E-mail",
            type: "string"
        },
        age: {
            title: "Age",
            type: "number"
        }
    }
};

let SmartTableComponent = class SmartTableComponent {
    constructor(service, componentFactoryResolver) {
        this.service = service;
        this.componentFactoryResolver = componentFactoryResolver;
        this.source = new LocalDataSource();
        //  this.settings = this.service.getSettings();
        // console.log("setting : " + this.setting);
        let data = this.service.getData();
        this.source.load(data);
    }
    ngOnInit() {
        // this.settings = this.service.getSettings();
        // this.settings = this.service.etSetting();
        // console.log("settings : " + JSON.stringify(this.settings));
        this.service.getSetting().subscribe((res) => {
            // res.columns.lastName.renderComponent = this.componentFactoryResolver.resolveComponentFactory(
            //   res.columns.lastName.renderComponent
            // );
            this.settings = res;
            console.log("setting : " + JSON.stringify(res));
            console.log("Type of setting : " + typeof res);
        });
    }
    onSearch(query = "") {
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: "id",
                search: query
            },
            {
                field: "firstName",
                search: query
            },
            {
                field: "lastName",
                search: query
            },
            {
                field: "username",
                search: query
            },
            {
                field: "email",
                search: query
            },
            {
                field: "age",
                search: query
            }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }
    onDeleteConfirm(event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm("Are you sure you want to save?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm("Are you sure you want to create?")) {
            event.newData["name"] += " + added in code";
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    ngOnDestroy() {
        console.log("settings : " + JSON.stringify(this.settings));
    }
};
SmartTableComponent = __decorate([
    Component({
        selector: "app-smart-table",
        template: "<nb-card>\r\n    <nb-card-header>\r\n\r\n        VINCI DATA-GRID\r\n\r\n        <div class=\"search-input\">\r\n            <button nbButton outline status=\"info\">WORD</button>\r\n            <button nbButton status=\"success\">EXCEL</button>\r\n            <button nbButton status=\"danger\">PDF</button>\r\n        </div>\r\n\r\n\r\n\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n        </ng2-smart-table>\r\n        <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table> -->\r\n    </nb-card-body>\r\n\r\n</nb-card>",
        styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }
      .search-input {
        margin-bottom: 1rem;
        margin-right: 1rem;
        float: right;
      }

      button {
        margin: 1rem;
        margin-right: 1rem;
      }
    `]
    }),
    __metadata("design:paramtypes", [SmartTableService,
        ComponentFactoryResolver])
], SmartTableComponent);

const routes = [
    {
        path: "",
        component: SmartTableComponent,
        children: [
            {
                path: "smart-table",
                component: SmartTableComponent
            }
        ]
    }
];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TablesRoutingModule);
const routedComponents = [
    TablesComponent,
    SmartTableComponent
];

let CustomRenderComponent = class CustomRenderComponent {
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "rowData", void 0);
CustomRenderComponent = __decorate([
    Component({
        template: `
    {{renderValue}}
  `
    })
], CustomRenderComponent);

let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        imports: [
            NbCardModule,
            TablesRoutingModule,
            Ng2SmartTableModule,
            NbCardModule,
            NbButtonModule,
            NbThemeModule,
            NbLayoutModule,
            NbCardModule,
            NbButtonModule,
            NgbModule,
            NbLayoutModule
        ],
        providers: [SmartTableService],
        declarations: [...routedComponents, CustomRenderComponent],
        entryComponents: [
            CustomRenderComponent
        ],
        exports: [SmartTableComponent]
    })
], TablesModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DATA_Table, SmartTableComponent, SmartTableData, SmartTableService, TablesModule, settings, TablesRoutingModule as ɵa, routedComponents as ɵb, TablesComponent as ɵc, CustomRenderComponent as ɵd };
//# sourceMappingURL=vinci-datagrid.js.map