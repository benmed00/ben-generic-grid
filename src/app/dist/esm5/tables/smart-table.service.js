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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3NtYXJ0LXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELGtEQUFrRDtBQUVsRDtJQUFBO0lBSUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBR0Q7SUFBdUMsNkNBQWM7SUFLbkQsMkJBQW9CLEtBQWlCO1FBQXJDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBRjdCLFVBQUksR0FBVyxnQ0FBZ0MsQ0FBQzs7SUFJeEQsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxpRUFBaUU7UUFDakUsd0VBQXdFO0lBQzFFLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNyQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQWhDVSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO2lEQU1nQixVQUFVO09BTDFC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bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG4vLyBpbXBvcnQgeyBTbWFydFRhYmxlRGF0YSB9IGZyb20gJy4vc21hcnQtdGFibGUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0VGFibGVEYXRhIHtcclxuICBhYnN0cmFjdCBnZXREYXRhKCk6IGFueVtdO1xyXG4gIGFic3RyYWN0IGdldFNldHRpbmdzKCk6IGFueTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5nKCk6IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU21hcnRUYWJsZVNlcnZpY2UgZXh0ZW5kcyBTbWFydFRhYmxlRGF0YSB7XHJcblxyXG5cclxuICBwcml2YXRlIF91cmw6IHN0cmluZyA9IFwiYXNzZXRzL3V0aWxzL2NvbmZpZ190YWJsZS5qc29uXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgcmV0dXJuIERBVEFfVGFibGU7XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKTtcclxuXHJcbiAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnlbXT4odGhpcy5fdXJsKTtcclxuICAgIC8vIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpLnBpcGUobWFwKChyZXM6IGFueSkgPT4gcmVzKSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybCkucGlwZShtYXAoKHJlczogYW55KSA9PiByZXMpKTtcclxuICB9XHJcblxyXG4gIGV0U2V0dGluZygpIHtcclxuICAgIGxldCBzZXR0aW5nO1xyXG4gICAgdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgc2V0dGluZyA9IHJlcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldHRpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0ZUludGVyZmFjZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhZ2U6IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERBVEFfVGFibGU6IFRhYmxlRGF0ZUludGVyZmFjZVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmtcIixcclxuICAgIGxhc3ROYW1lOiBcIk90dG9cIixcclxuICAgIHVzZXJuYW1lOiBcIkBtZG9cIixcclxuICAgIGVtYWlsOiBcIm1kb0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyOFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGhvcm50b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBmYXRcIixcclxuICAgIGVtYWlsOiBcImZhdEB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCI0NVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGZpcnN0TmFtZTogXCJMYXJyeVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmlyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHR3aXR0ZXJcIixcclxuICAgIGVtYWlsOiBcInR3aXR0ZXJAb3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCIxOFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTbm93XCIsXHJcbiAgICB1c2VybmFtZTogXCJAc25vd1wiLFxyXG4gICAgZW1haWw6IFwic25vd0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGZpcnN0TmFtZTogXCJKYWNrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTcGFycm93XCIsXHJcbiAgICB1c2VybmFtZTogXCJAamFja1wiLFxyXG4gICAgZW1haWw6IFwiamFja0B5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCIzMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGZpcnN0TmFtZTogXCJBbm5cIixcclxuICAgIGxhc3ROYW1lOiBcIlNtaXRoXCIsXHJcbiAgICB1c2VybmFtZTogXCJAYW5uXCIsXHJcbiAgICBlbWFpbDogXCJhbm5AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmFyYmFyYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmxhY2tcIixcclxuICAgIHVzZXJuYW1lOiBcIkBiYXJiYXJhXCIsXHJcbiAgICBlbWFpbDogXCJiYXJiYXJhQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjQzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4LFxyXG4gICAgZmlyc3ROYW1lOiBcIlNldmFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYWdyYXRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBzZXZhblwiLFxyXG4gICAgZW1haWw6IFwic2V2YW5Ab3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCIxM1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIGZpcnN0TmFtZTogXCJSdWJlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVmFyZGFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAcnViZW5cIixcclxuICAgIGVtYWlsOiBcInJ1YmVuQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjIyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMCxcclxuICAgIGZpcnN0TmFtZTogXCJLYXJlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU2V2YW5cIixcclxuICAgIHVzZXJuYW1lOiBcIkBrYXJlblwiLFxyXG4gICAgZW1haWw6IFwia2FyZW5AeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiMzNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDExLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmtcIixcclxuICAgIGxhc3ROYW1lOiBcIk90dG9cIixcclxuICAgIHVzZXJuYW1lOiBcIkBtYXJrXCIsXHJcbiAgICBlbWFpbDogXCJtYXJrQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjM4XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMixcclxuICAgIGZpcnN0TmFtZTogXCJKYWNvYlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGhvcm50b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBqYWNvYlwiLFxyXG4gICAgZW1haWw6IFwiamFjb2JAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiNDhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkhhaWtcIixcclxuICAgIGxhc3ROYW1lOiBcIkhha29iXCIsXHJcbiAgICB1c2VybmFtZTogXCJAaGFpa1wiLFxyXG4gICAgZW1haWw6IFwiaGFpa0BvdXRsb29rLmNvbVwiLFxyXG4gICAgYWdlOiBcIjQ4XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNCxcclxuICAgIGZpcnN0TmFtZTogXCJHYXJlZ2luXCIsXHJcbiAgICBsYXN0TmFtZTogXCJKaXJhaXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBnYXJlZ2luXCIsXHJcbiAgICBlbWFpbDogXCJnYXJlZ2luQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjQwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNSxcclxuICAgIGZpcnN0TmFtZTogXCJLcmlrb3JcIixcclxuICAgIGxhc3ROYW1lOiBcIkJlZHJvc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGtyaWtvclwiLFxyXG4gICAgZW1haWw6IFwia3Jpa29yQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjMyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNixcclxuICAgIGZpcnN0TmFtZTogXCJGcmFuY2lzY2FcIixcclxuICAgIGxhc3ROYW1lOiBcIkJyYWR5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAR2lic29uXCIsXHJcbiAgICBlbWFpbDogXCJmcmFuY2lzY2FnaWJzb25AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDExXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBmaXJzdE5hbWU6IFwiVGlsbG1hblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRmlndWVyb2FcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTbm93XCIsXHJcbiAgICBlbWFpbDogXCJ0aWxsbWFuc25vd0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOCxcclxuICAgIGZpcnN0TmFtZTogXCJKaW1lbmV6XCIsXHJcbiAgICBsYXN0TmFtZTogXCJNb3JyaXNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBCcnlhbnRcIixcclxuICAgIGVtYWlsOiBcImppbWVuZXpicnlhbnRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTksXHJcbiAgICBmaXJzdE5hbWU6IFwiU2FuZG92YWxcIixcclxuICAgIGxhc3ROYW1lOiBcIkphY29ic29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNicmlkZVwiLFxyXG4gICAgZW1haWw6IFwic2FuZG92YWxtY2JyaWRlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkdyaWZmaW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlRvcnJlc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENoYXJsZXNcIixcclxuICAgIGVtYWlsOiBcImdyaWZmaW5jaGFybGVzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkNvcmFcIixcclxuICAgIGxhc3ROYW1lOiBcIlBhcmtlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENhbGR3ZWxsXCIsXHJcbiAgICBlbWFpbDogXCJjb3JhY2FsZHdlbGxAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjIsXHJcbiAgICBmaXJzdE5hbWU6IFwiQ2luZHlcIixcclxuICAgIGxhc3ROYW1lOiBcIkJvbmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBWZWxlelwiLFxyXG4gICAgZW1haWw6IFwiY2luZHl2ZWxlekBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMyxcclxuICAgIGZpcnN0TmFtZTogXCJGcmllZGFcIixcclxuICAgIGxhc3ROYW1lOiBcIlR5c29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQ3JhaWdcIixcclxuICAgIGVtYWlsOiBcImZyaWVkYWNyYWlnQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkNvdGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvbGNvbWJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBSb3dlXCIsXHJcbiAgICBlbWFpbDogXCJjb3Rlcm93ZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNSxcclxuICAgIGZpcnN0TmFtZTogXCJUcnVqaWxsb1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiTWVqaWFcIixcclxuICAgIHVzZXJuYW1lOiBcIkBWYWxlbnp1ZWxhXCIsXHJcbiAgICBlbWFpbDogXCJ0cnVqaWxsb3ZhbGVuenVlbGFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjYsXHJcbiAgICBmaXJzdE5hbWU6IFwiUHJ1aXR0XCIsXHJcbiAgICBsYXN0TmFtZTogXCJTaGVwYXJkXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2xvYW5cIixcclxuICAgIGVtYWlsOiBcInBydWl0dHNsb2FuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI3LFxyXG4gICAgZmlyc3ROYW1lOiBcIlN1dHRvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiT3J0ZWdhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQmxhY2tcIixcclxuICAgIGVtYWlsOiBcInN1dHRvbmJsYWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI4LFxyXG4gICAgZmlyc3ROYW1lOiBcIk1hcmlvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSGVhdGhcIixcclxuICAgIHVzZXJuYW1lOiBcIkBFc3Bpbm96YVwiLFxyXG4gICAgZW1haWw6IFwibWFyaW9uZXNwaW5vemFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjksXHJcbiAgICBmaXJzdE5hbWU6IFwiTmV3bWFuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIaWNrc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtlaXRoXCIsXHJcbiAgICBlbWFpbDogXCJuZXdtYW5rZWl0aEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMCxcclxuICAgIGZpcnN0TmFtZTogXCJCb3lsZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTGFyc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU3VtbWVyc1wiLFxyXG4gICAgZW1haWw6IFwiYm95bGVzdW1tZXJzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkhheW5lc1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiVmluc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNrZW56aWVcIixcclxuICAgIGVtYWlsOiBcImhheW5lc21ja2VuemllQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMyLFxyXG4gICAgZmlyc3ROYW1lOiBcIk1pbGxlclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQWNvc3RhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAWW91bmdcIixcclxuICAgIGVtYWlsOiBcIm1pbGxlcnlvdW5nQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMzLFxyXG4gICAgZmlyc3ROYW1lOiBcIkpvaG5zdG9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcm93blwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtuaWdodFwiLFxyXG4gICAgZW1haWw6IFwiam9obnN0b25rbmlnaHRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI5XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzQsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGVuYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGl0dHNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBGb3JiZXNcIixcclxuICAgIGVtYWlsOiBcImxlbmFmb3JiZXNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzUsXHJcbiAgICBmaXJzdE5hbWU6IFwiVGVycmllXCIsXHJcbiAgICBsYXN0TmFtZTogXCJLZW5uZWR5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAQnJhbmNoXCIsXHJcbiAgICBlbWFpbDogXCJ0ZXJyaWVicmFuY2hAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzYsXHJcbiAgICBmaXJzdE5hbWU6IFwiTG91aXNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJBZ3VpcnJlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS2lyYnlcIixcclxuICAgIGVtYWlsOiBcImxvdWlzZWtpcmJ5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkRhdmlkXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQYXR0b25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5kZXJzXCIsXHJcbiAgICBlbWFpbDogXCJkYXZpZHNhbmRlcnNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI2XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzgsXHJcbiAgICBmaXJzdE5hbWU6IFwiSG9sZGVuXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYXJsb3dcIixcclxuICAgIHVzZXJuYW1lOiBcIkBNY2tpbm5leVwiLFxyXG4gICAgZW1haWw6IFwiaG9sZGVubWNraW5uZXlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDExXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzksXHJcbiAgICBmaXJzdE5hbWU6IFwiQmFrZXJcIixcclxuICAgIGxhc3ROYW1lOiBcIlJpdmVyYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1vbnRveWFcIixcclxuICAgIGVtYWlsOiBcImJha2VybW9udG95YUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MCxcclxuICAgIGZpcnN0TmFtZTogXCJCZWxpbmRhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJMbG95ZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENhbGRlcm9uXCIsXHJcbiAgICBlbWFpbDogXCJiZWxpbmRhY2FsZGVyb25AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIxXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDEsXHJcbiAgICBmaXJzdE5hbWU6IFwiUGVhcnNvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGF0cmlja1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENsZW1lbnRzXCIsXHJcbiAgICBlbWFpbDogXCJwZWFyc29uY2xlbWVudHNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDIsXHJcbiAgICBmaXJzdE5hbWU6IFwiQWx5Y2VcIixcclxuICAgIGxhc3ROYW1lOiBcIk1ja2VlXCIsXHJcbiAgICB1c2VybmFtZTogXCJARGF1Z2hlcnR5XCIsXHJcbiAgICBlbWFpbDogXCJhbHljZWRhdWdoZXJ0eUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0MyxcclxuICAgIGZpcnN0TmFtZTogXCJWYWxlbmNpYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU3BlbmNlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAT2xzZW5cIixcclxuICAgIGVtYWlsOiBcInZhbGVuY2lhb2xzZW5AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDQsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGVhY2hcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvbGNvbWJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBIdW1waHJleVwiLFxyXG4gICAgZW1haWw6IFwibGVhY2hodW1waHJleUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NSxcclxuICAgIGZpcnN0TmFtZTogXCJNb3NzXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCYXh0ZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBGaXR6cGF0cmlja1wiLFxyXG4gICAgZW1haWw6IFwibW9zc2ZpdHpwYXRyaWNrQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1MVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkplYW5uZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQ29va2VcIixcclxuICAgIHVzZXJuYW1lOiBcIkBXYXJkXCIsXHJcbiAgICBlbWFpbDogXCJqZWFubmV3YXJkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1OVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ3LFxyXG4gICAgZmlyc3ROYW1lOiBcIldpbG1hXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcmlnZ3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBLaWRkXCIsXHJcbiAgICBlbWFpbDogXCJ3aWxtYWtpZGRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDUzXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDgsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVhdHJpY2VcIixcclxuICAgIGxhc3ROYW1lOiBcIlBlcnJ5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAR2lsYmVydFwiLFxyXG4gICAgZW1haWw6IFwiYmVhdHJpY2VnaWxiZXJ0QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ5LFxyXG4gICAgZmlyc3ROYW1lOiBcIldoaXRha2VyXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIeWRlXCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNkb25hbGRcIixcclxuICAgIGVtYWlsOiBcIndoaXRha2VybWNkb25hbGRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTAsXHJcbiAgICBmaXJzdE5hbWU6IFwiUmViZWthaFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRHVyYW5cIixcclxuICAgIHVzZXJuYW1lOiBcIkBHcm9zc1wiLFxyXG4gICAgZW1haWw6IFwicmViZWthaGdyb3NzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUxLFxyXG4gICAgZmlyc3ROYW1lOiBcIkVhcmxpbmVcIixcclxuICAgIGxhc3ROYW1lOiBcIk1heWVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV29vZHdhcmRcIixcclxuICAgIGVtYWlsOiBcImVhcmxpbmV3b29kd2FyZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MixcclxuICAgIGZpcnN0TmFtZTogXCJNb3JhblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJASm9obnNcIixcclxuICAgIGVtYWlsOiBcIm1vcmFuam9obnNAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBmaXJzdE5hbWU6IFwiTmFuZXR0ZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSHViYmFyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENvb2tlXCIsXHJcbiAgICBlbWFpbDogXCJuYW5ldHRlY29va2VAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTQsXHJcbiAgICBmaXJzdE5hbWU6IFwiRGFsdG9uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJXYWxrZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBIZW5kcmlja3NcIixcclxuICAgIGVtYWlsOiBcImRhbHRvbmhlbmRyaWNrc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMjVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NSxcclxuICAgIGZpcnN0TmFtZTogXCJCZW5uZXR0XCIsXHJcbiAgICBsYXN0TmFtZTogXCJCbGFrZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFBlbmFcIixcclxuICAgIGVtYWlsOiBcImJlbm5ldHRwZW5hQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU2LFxyXG4gICAgZmlyc3ROYW1lOiBcIktlbGxpZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSG9ydG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV2Vpc3NcIixcclxuICAgIGVtYWlsOiBcImtlbGxpZXdlaXNzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0OFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkhvYmJzXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUYWxsZXlcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5mb3JkXCIsXHJcbiAgICBlbWFpbDogXCJob2Jic3NhbmZvcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTgsXHJcbiAgICBmaXJzdE5hbWU6IFwiTWNndWlyZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRG9uYWxkc29uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAUm9tYW5cIixcclxuICAgIGVtYWlsOiBcIm1jZ3VpcmVyb21hbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1OSxcclxuICAgIGZpcnN0TmFtZTogXCJSb2RyaXF1ZXpcIixcclxuICAgIGxhc3ROYW1lOiBcIlNhdW5kZXJzXCIsXHJcbiAgICB1c2VybmFtZTogXCJASGFycGVyXCIsXHJcbiAgICBlbWFpbDogXCJyb2RyaXF1ZXpoYXJwZXJAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNjAsXHJcbiAgICBmaXJzdE5hbWU6IFwiTG91XCIsXHJcbiAgICBsYXN0TmFtZTogXCJDb25uZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBTYW5jaGV6XCIsXHJcbiAgICBlbWFpbDogXCJsb3VzYW5jaGV6QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICBhZGQ6IHtcclxuICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIj48L2k+JyxcclxuICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNoZWNrbWFya1wiPjwvaT4nLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+J1xyXG4gIH0sXHJcbiAgZWRpdDoge1xyXG4gICAgZWRpdEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWVkaXRcIj48L2k+JyxcclxuICAgIHNhdmVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPidcclxuICB9LFxyXG4gIGRlbGV0ZToge1xyXG4gICAgZGVsZXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItdHJhc2hcIj48L2k+JyxcclxuICAgIGNvbmZpcm1EZWxldGU6IHRydWVcclxuICB9LFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHRpdGxlOiBcIklEXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIH0sXHJcbiAgICBmaXJzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiRmlyc3QgTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgbGFzdE5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiTGFzdCBOYW1lXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0aXRsZTogXCJVc2VybmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdGl0bGU6IFwiRS1tYWlsXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0sXHJcbiAgICBhZ2U6IHtcclxuICAgICAgdGl0bGU6IFwiQWdlXCIsXHJcbiAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==