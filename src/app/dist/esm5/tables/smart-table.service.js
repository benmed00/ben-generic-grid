import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { SmartTableData } from './smart-table';
var SmartTableData = /** @class */ (function () {
    function SmartTableData() {
    }
    return SmartTableData;
}());
export { SmartTableData };
var SmartTableService = /** @class */ (function (_super) {
    tslib_1.__extends(SmartTableService, _super);
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
    SmartTableService.prototype.updateData = function () {
        return DATA_Table;
    };
    SmartTableService.prototype.etSetting = function () {
        var setting;
        this._http.get(this._url).subscribe(function (res) {
            setting = res;
        });
        return setting;
    };
    SmartTableService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SmartTableService);
    return SmartTableService;
}(SmartTableData));
export { SmartTableService };
export var DATA_Table = [
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
export var settings = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3NtYXJ0LXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELGtEQUFrRDtBQUVsRDtJQUFBO0lBSUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBR0Q7SUFBdUMsNkNBQWM7SUFHbkQsMkJBQW9CLEtBQWlCO1FBQXJDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBRjdCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQzs7SUFJeEQsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxpRUFBaUU7UUFDakUsd0VBQXdFO0lBQzFFLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ3JDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFD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LElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsUUFBUTtTQUNmO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuLy8gaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL3NtYXJ0LXRhYmxlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnlbXTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5ncygpOiBhbnk7XHJcbiAgYWJzdHJhY3QgZ2V0U2V0dGluZygpOiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIGV4dGVuZHMgU21hcnRUYWJsZURhdGEge1xyXG4gIHByaXZhdGUgX3VybDogc3RyaW5nID0gXCJhc3NldHMvdXRpbHMvY29uZmlnX3RhYmxlLmpzb25cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gREFUQV9UYWJsZTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpO1xyXG5cclxuICAgIC8vIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKS5waXBlKG1hcCgocmVzOiBhbnkpID0+IHJlcykpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBEQVRBX1RhYmxlO1xyXG4gIH1cclxuXHJcbiAgZXRTZXR0aW5nKCkge1xyXG4gICAgbGV0IHNldHRpbmc7XHJcbiAgICB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBzZXR0aW5nID0gcmVzO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRlSW50ZXJmYWNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHBhc3NlZD86IHN0cmluZyA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBX1RhYmxlOiBUYWJsZURhdGVJbnRlcmZhY2VbXSA9IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiT1RUT09cIixcclxuICAgICAgICAgICB1c2VybmFtZTpcclxuICAgICAgICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FrdmVvL25nMi1hZG1pblwiPk5nMiBBZG1pbjwvYT4nLFxyXG4gICAgICAgICAgIGVtYWlsOiBcIm1kb0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICBhZ2U6IFwiMjhcIixcclxuICAgICAgICAgICBwYXNzZWQ6IFwiWWVzXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6JzxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi83LzczL0RYQ19UZWNoLnBuZy8yODBweC1EWENfVGVjaC5wbmdcIiBhbHQ9XCJTbWlsZXkgZmFjZVwiIGhlaWdodD1cIjQyXCIgaWR0aD1cIjQyXCI+JyxcclxuICAgICAgICAgICBlbWFpbDogXCJmYXRAeWFuZGV4LnJ1XCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjQ1XCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiTGFycnlcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJCaXJkXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQHR3aXR0ZXJcIixcclxuICAgICAgICAgICBlbWFpbDogXCJ0d2l0dGVyQG91dGxvb2suY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjE4XCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlNub3dcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAc25vd1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInNub3dAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjIwXCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIlllc1wiXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiSmFja1wiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlNwYXJyb3dcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAamFja1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImphY2tAeWFuZGV4LnJ1XCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjMwXCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIk5vXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJBbm5cIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJTbWl0aFwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBhbm5cIixcclxuICAgICAgICAgICBlbWFpbDogXCJhbm5AZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjIxXCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIk5vXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJCYXJiYXJhXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQmxhY2tcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAYmFyYmFyYVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImJhcmJhcmFAeWFuZGV4LnJ1XCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjQzXCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIk5vXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJTZXZhblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkJhZ3JhdFwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBzZXZhblwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInNldmFuQG91dGxvb2suY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjEzXCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIk5vXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA5LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJSdWJlblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlZhcmRhblwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBydWJlblwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInJ1YmVuQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogXCIyMlwiLFxyXG4gICAgICAgICAgIHBhc3NlZDogXCJOb1wiXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkthcmVuXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiU2V2YW5cIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAa2FyZW5cIixcclxuICAgICAgICAgICBlbWFpbDogXCJrYXJlbkB5YW5kZXgucnVcIixcclxuICAgICAgICAgICBhZ2U6IFwiMzNcIixcclxuICAgICAgICAgICBwYXNzZWQ6IFwiTm9cIlxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiT3R0b1wiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBtYXJrXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibWFya0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICBhZ2U6IFwiMzhcIlxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQGphY29iXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiamFjb2JAeWFuZGV4LnJ1XCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjQ4XCIsXHJcbiAgICAgICAgICAgcGFzc2VkOiBcIk5vXCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAxMyxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiSGFpa1wiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkhha29iXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQGhhaWtcIixcclxuICAgICAgICAgICBlbWFpbDogXCJoYWlrQG91dGxvb2suY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiBcIjQ4XCJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAxNCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiR2FyZWdpblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkppcmFpclwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBnYXJlZ2luXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiZ2FyZWdpbkBnbWFpbC5jb21cIixcclxuICAgICAgICAgICBhZ2U6IFwiNDBcIlxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDE1LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJLcmlrb3JcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJCZWRyb3NcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAa3Jpa29yXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwia3Jpa29yQHlhbmRleC5ydVwiLFxyXG4gICAgICAgICAgIGFnZTogXCIzMlwiXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMTYsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkZyYW5jaXNjYVwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkJyYWR5XCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEdpYnNvblwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImZyYW5jaXNjYWdpYnNvbkBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDExXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMTcsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlRpbGxtYW5cIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJGaWd1ZXJvYVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBTbm93XCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwidGlsbG1hbnNub3dAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAzNFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDE4LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJKaW1lbmV6XCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiTW9ycmlzXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEJyeWFudFwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImppbWVuZXpicnlhbnRAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiA0NVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDE5LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJTYW5kb3ZhbFwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkphY29ic29uXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQE1jYnJpZGVcIixcclxuICAgICAgICAgICBlbWFpbDogXCJzYW5kb3ZhbG1jYnJpZGVAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAzMlxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDIwLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJHcmlmZmluXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiVG9ycmVzXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQENoYXJsZXNcIixcclxuICAgICAgICAgICBlbWFpbDogXCJncmlmZmluY2hhcmxlc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDE5XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjEsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkNvcmFcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJQYXJrZXJcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAQ2FsZHdlbGxcIixcclxuICAgICAgICAgICBlbWFpbDogXCJjb3JhY2FsZHdlbGxAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAyN1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDIyLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJDaW5keVwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkJvbmRcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAVmVsZXpcIixcclxuICAgICAgICAgICBlbWFpbDogXCJjaW5keXZlbGV6QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMjRcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAyMyxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiRnJpZWRhXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiVHlzb25cIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAQ3JhaWdcIixcclxuICAgICAgICAgICBlbWFpbDogXCJmcmllZGFjcmFpZ0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQ1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjQsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkNvdGVcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJIb2xjb21iXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQFJvd2VcIixcclxuICAgICAgICAgICBlbWFpbDogXCJjb3Rlcm93ZUBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDIwXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjUsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlRydWppbGxvXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiTWVqaWFcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAVmFsZW56dWVsYVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInRydWppbGxvdmFsZW56dWVsYUBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDE2XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjYsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlBydWl0dFwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIlNoZXBhcmRcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAU2xvYW5cIixcclxuICAgICAgICAgICBlbWFpbDogXCJwcnVpdHRzbG9hbkBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQ0XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjcsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlN1dHRvblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIk9ydGVnYVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBCbGFja1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInN1dHRvbmJsYWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNDJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAyOCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiTWFyaW9uXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiSGVhdGhcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJARXNwaW5vemFcIixcclxuICAgICAgICAgICBlbWFpbDogXCJtYXJpb25lc3Bpbm96YUBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQ3XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMjksXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIk5ld21hblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkhpY2tzXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEtlaXRoXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibmV3bWFua2VpdGhAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAxNVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDMwLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJCb3lsZVwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkxhcnNvblwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBTdW1tZXJzXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiYm95bGVzdW1tZXJzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMzJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAzMSxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiSGF5bmVzXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiVmluc29uXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQE1ja2VuemllXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiaGF5bmVzbWNrZW56aWVAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAxNVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDMyLFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJNaWxsZXJcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJBY29zdGFcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAWW91bmdcIixcclxuICAgICAgICAgICBlbWFpbDogXCJtaWxsZXJ5b3VuZ0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDU1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMzMsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkpvaG5zdG9uXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQnJvd25cIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAS25pZ2h0XCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiam9obnN0b25rbmlnaHRAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAyOVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDM0LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJMZW5hXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiUGl0dHNcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJARm9yYmVzXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibGVuYWZvcmJlc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDI1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMzUsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlRlcnJpZVwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIktlbm5lZHlcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAQnJhbmNoXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwidGVycmllYnJhbmNoQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMzdcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAzNixcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiTG91aXNlXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQWd1aXJyZVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBLaXJieVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImxvdWlzZWtpcmJ5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNDRcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAzNyxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiRGF2aWRcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJQYXR0b25cIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAU2FuZGVyc1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImRhdmlkc2FuZGVyc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDI2XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMzgsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkhvbGRlblwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkJhcmxvd1wiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBNY2tpbm5leVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImhvbGRlbm1ja2lubmV5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMTFcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiAzOSxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJSaXZlcmFcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJATW9udG95YVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImJha2VybW9udG95YUBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQ3XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNDAsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkJlbGluZGFcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJMbG95ZFwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBDYWxkZXJvblwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImJlbGluZGFjYWxkZXJvbkBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDIxXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNDEsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlBlYXJzb25cIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJQYXRyaWNrXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQENsZW1lbnRzXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwicGVhcnNvbmNsZW1lbnRzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNDJcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA0MixcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiQWx5Y2VcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJNY2tlZVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBEYXVnaGVydHlcIixcclxuICAgICAgICAgICBlbWFpbDogXCJhbHljZWRhdWdoZXJ0eUBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDU1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNDMsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlZhbGVuY2lhXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiU3BlbmNlXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQE9sc2VuXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwidmFsZW5jaWFvbHNlbkBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDIwXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNDQsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkxlYWNoXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiSG9sY29tYlwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBIdW1waHJleVwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImxlYWNoaHVtcGhyZXlAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAyOFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDQ1LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJNb3NzXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEZpdHpwYXRyaWNrXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibW9zc2ZpdHpwYXRyaWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNTFcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA0NixcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiSmVhbm5lXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQ29va2VcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAV2FyZFwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImplYW5uZXdhcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiA1OVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDQ3LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJXaWxtYVwiLFxyXG4gICAgICAgICAgIGxhc3ROYW1lOiBcIkJyaWdnc1wiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBLaWRkXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwid2lsbWFraWRkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNTNcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA0OCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiQmVhdHJpY2VcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJQZXJyeVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBHaWxiZXJ0XCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiYmVhdHJpY2VnaWxiZXJ0QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMzlcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA0OSxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiV2hpdGFrZXJcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJIeWRlXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQE1jZG9uYWxkXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwid2hpdGFrZXJtY2RvbmFsZEBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDM1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTAsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIlJlYmVrYWhcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJEdXJhblwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBHcm9zc1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcInJlYmVrYWhncm9zc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQwXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTEsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkVhcmxpbmVcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJNYXllclwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBXb29kd2FyZFwiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImVhcmxpbmV3b29kd2FyZEBjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDUyXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTIsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIk1vcmFuXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEpvaG5zXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibW9yYW5qb2huc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDIwXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTMsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIk5hbmV0dGVcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJIdWJiYXJkXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQENvb2tlXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibmFuZXR0ZWNvb2tlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogNTVcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA1NCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiRGFsdG9uXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiV2Fsa2VyXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQEhlbmRyaWNrc1wiLFxyXG4gICAgICAgICAgIGVtYWlsOiBcImRhbHRvbmhlbmRyaWNrc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDI1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTUsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkJlbm5ldHRcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJCbGFrZVwiLFxyXG4gICAgICAgICAgIHVzZXJuYW1lOiBcIkBQZW5hXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwiYmVubmV0dHBlbmFAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAxM1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDU2LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJLZWxsaWVcIixcclxuICAgICAgICAgICBsYXN0TmFtZTogXCJIb3J0b25cIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJAV2Vpc3NcIixcclxuICAgICAgICAgICBlbWFpbDogXCJrZWxsaWV3ZWlzc0Bjb210b3Vycy5jb21cIixcclxuICAgICAgICAgICBhZ2U6IDQ4XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNTcsXHJcbiAgICAgICAgICAgZmlyc3ROYW1lOiBcIkhvYmJzXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiVGFsbGV5XCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQFNhbmZvcmRcIixcclxuICAgICAgICAgICBlbWFpbDogXCJob2Jic3NhbmZvcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICAgICAgICAgYWdlOiAyOFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDU4LFxyXG4gICAgICAgICAgIGZpcnN0TmFtZTogXCJNY2d1aXJlXCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiRG9uYWxkc29uXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQFJvbWFuXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwibWNndWlyZXJvbWFuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMzhcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA1OSxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiUm9kcmlxdWV6XCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiU2F1bmRlcnNcIixcclxuICAgICAgICAgICB1c2VybmFtZTogXCJASGFycGVyXCIsXHJcbiAgICAgICAgICAgZW1haWw6IFwicm9kcmlxdWV6aGFycGVyQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMjBcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOiA2MCxcclxuICAgICAgICAgICBmaXJzdE5hbWU6IFwiTG91XCIsXHJcbiAgICAgICAgICAgbGFzdE5hbWU6IFwiQ29ubmVyXCIsXHJcbiAgICAgICAgICAgdXNlcm5hbWU6IFwiQFNhbmNoZXpcIixcclxuICAgICAgICAgICBlbWFpbDogXCJsb3VzYW5jaGV6QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgICAgICAgIGFnZTogMTZcclxuICAgICAgICAgfVxyXG4gICAgICAgXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICBhZGQ6IHtcclxuICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIj48L2k+JyxcclxuICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNoZWNrbWFya1wiPjwvaT4nLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+J1xyXG4gIH0sXHJcbiAgZWRpdDoge1xyXG4gICAgZWRpdEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWVkaXRcIj48L2k+JyxcclxuICAgIHNhdmVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPidcclxuICB9LFxyXG4gIGRlbGV0ZToge1xyXG4gICAgZGVsZXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItdHJhc2hcIj48L2k+JyxcclxuICAgIGNvbmZpcm1EZWxldGU6IHRydWVcclxuICB9LFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHRpdGxlOiBcIklEXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIH0sXHJcbiAgICBmaXJzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiRmlyc3QgTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgbGFzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiTGFzdCBOYW1lXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0aXRsZTogXCJVc2VybmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdGl0bGU6IFwiRS1tYWlsXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0sXHJcbiAgICBhZ2U6IHtcclxuICAgICAgdGl0bGU6IFwiQWdlXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==