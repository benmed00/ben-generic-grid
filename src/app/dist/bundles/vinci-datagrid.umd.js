(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng2-smart-table'), require('@nebular/theme'), require('@angular/router'), require('@angular/common/http'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('vinci-datagrid', ['exports', '@angular/core', 'ng2-smart-table', '@nebular/theme', '@angular/router', '@angular/common/http', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = global || self, factory(global['vinci-datagrid'] = {}, global.ng.core, global.ng2SmartTable, global.theme, global.ng.router, global.ng.common.http, global.ngBootstrap));
}(this, function (exports, core, ng2SmartTable, theme, router, http, ngBootstrap) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var TablesComponent = /** @class */ (function () {
        function TablesComponent() {
        }
        TablesComponent = __decorate([
            core.Component({
                selector: 'app-tables',
                template: "<router-outlet></router-outlet>"
            })
        ], TablesComponent);
        return TablesComponent;
    }());

    // import { SmartTableData } from './smart-table';
    var SmartTableData = /** @class */ (function () {
        function SmartTableData() {
        }
        return SmartTableData;
    }());
    var SmartTableService = /** @class */ (function (_super) {
        __extends(SmartTableService, _super);
        function SmartTableService(_http) {
            var _this = _super.call(this) || this;
            _this._http = _http;
            _this._url = "assets/utils/config_table.json";
            return _this;
        }
        SmartTableService.prototype.getData = function () {
            return DATA_Table;
        };
        SmartTableService.prototype.getSettings = function () {
            return settings;
        };
        SmartTableService.prototype.getSetting = function () {
            return this._http.get(this._url);
            // return JSON.stringify(this._url);
            // return this._http.get<any[]>(this._url);
            // return this._http.get(this._url).pipe(map((res: any) => res));
            // return this._http.get<any[]>(this._url).pipe(map((res: any) => res));
        };
        SmartTableService.prototype.etSetting = function () {
            var setting;
            this._http.get(this._url).subscribe(function (res) {
                setting = res;
            });
            return setting;
        };
        SmartTableService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [http.HttpClient])
        ], SmartTableService);
        return SmartTableService;
    }(SmartTableData));
    var DATA_Table = [
        {
            id: 1,
            firstName: "Mark",
            lastName: "Otto",
            username: "@mdo",
            email: "mdo@gmail.com",
            age: "28"
        },
        {
            id: 2,
            firstName: "Jacob",
            lastName: "Thornton",
            username: "@fat",
            email: "fat@yandex.ru",
            age: "45"
        },
        {
            id: 3,
            firstName: "Larry",
            lastName: "Bird",
            username: "@twitter",
            email: "twitter@outlook.com",
            age: "18"
        },
        {
            id: 4,
            firstName: "John",
            lastName: "Snow",
            username: "@snow",
            email: "snow@gmail.com",
            age: "20"
        },
        {
            id: 5,
            firstName: "Jack",
            lastName: "Sparrow",
            username: "@jack",
            email: "jack@yandex.ru",
            age: "30"
        },
        {
            id: 6,
            firstName: "Ann",
            lastName: "Smith",
            username: "@ann",
            email: "ann@gmail.com",
            age: "21"
        },
        {
            id: 7,
            firstName: "Barbara",
            lastName: "Black",
            username: "@barbara",
            email: "barbara@yandex.ru",
            age: "43"
        },
        {
            id: 8,
            firstName: "Sevan",
            lastName: "Bagrat",
            username: "@sevan",
            email: "sevan@outlook.com",
            age: "13"
        },
        {
            id: 9,
            firstName: "Ruben",
            lastName: "Vardan",
            username: "@ruben",
            email: "ruben@gmail.com",
            age: "22"
        },
        {
            id: 10,
            firstName: "Karen",
            lastName: "Sevan",
            username: "@karen",
            email: "karen@yandex.ru",
            age: "33"
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
            age: "48"
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
    var settings = {
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

    var SmartTableComponent = /** @class */ (function () {
        function SmartTableComponent(service) {
            this.service = service;
            this.source = new ng2SmartTable.LocalDataSource();
            //  this.settings = this.service.getSettings();
            // console.log("setting : " + this.setting);
            var data = this.service.getData();
            this.source.load(data);
        }
        SmartTableComponent.prototype.ngOnInit = function () {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            var _this = this;
            // this.settings = this.service.getSettings();
            // this.settings = this.service.etSetting();
            // console.log("settings : " + JSON.stringify(this.settings));
            this.service.getSetting().subscribe(function (res) {
                _this.settings = res;
                console.log("setting : " + JSON.stringify(res));
            });
        };
        SmartTableComponent.prototype.onDeleteConfirm = function (event) {
            if (window.confirm("Are you sure you want to delete?")) {
                event.confirm.resolve();
            }
            else {
                event.confirm.reject();
            }
        };
        SmartTableComponent.prototype.ngOnDestroy = function () {
            //Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
            console.log("settings : " + JSON.stringify(this.settings));
        };
        SmartTableComponent = __decorate([
            core.Component({
                selector: "app-smart-table",
                template: "<nb-card>\r\n    <nb-card-header>\r\n        Smart Table\r\n    </nb-card-header>\r\n\r\n    <nb-card-body>\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n        </ng2-smart-table>\r\n    </nb-card-body>\r\n\r\n</nb-card>",
                styles: ["\n      nb-card {\n        transform: translate3d(0, 0, 0);\n      }\n    "]
            }),
            __metadata("design:paramtypes", [SmartTableService])
        ], SmartTableComponent);
        return SmartTableComponent;
    }());

    var routes = [
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
    var TablesRoutingModule = /** @class */ (function () {
        function TablesRoutingModule() {
        }
        TablesRoutingModule = __decorate([
            core.NgModule({
                imports: [router.RouterModule.forChild(routes)],
                exports: [router.RouterModule],
            })
        ], TablesRoutingModule);
        return TablesRoutingModule;
    }());
    var routedComponents = [
        TablesComponent,
        SmartTableComponent,
    ];

    var TablesModule = /** @class */ (function () {
        function TablesModule() {
        }
        TablesModule = __decorate([
            core.NgModule({
                imports: [
                    theme.NbCardModule,
                    TablesRoutingModule,
                    ng2SmartTable.Ng2SmartTableModule,
                    theme.NbCardModule,
                    theme.NbButtonModule,
                    theme.NbThemeModule,
                    theme.NbLayoutModule,
                    theme.NbCardModule,
                    theme.NbButtonModule,
                    ngBootstrap.NgbModule,
                    theme.NbLayoutModule
                ],
                providers: [SmartTableService],
                declarations: __spread(routedComponents),
                exports: [SmartTableComponent]
            })
        ], TablesModule);
        return TablesModule;
    }());

    exports.DATA_Table = DATA_Table;
    exports.SmartTableComponent = SmartTableComponent;
    exports.SmartTableData = SmartTableData;
    exports.SmartTableService = SmartTableService;
    exports.TablesModule = TablesModule;
    exports.settings = settings;
    exports.ɵa = TablesRoutingModule;
    exports.ɵb = routedComponents;
    exports.ɵc = TablesComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vinci-datagrid.umd.js.map
