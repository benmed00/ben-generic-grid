import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { SmartTableData } from './smart-table';
export class SmartTableData {
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
    etSetting() {
        let setting;
        this._http.get(this._url).subscribe(res => {
            setting = res;
        });
        return setting;
    }
};
SmartTableService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SmartTableService);
export { SmartTableService };
export const DATA_Table = [
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
export const settings = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ZpbmNpLWRhdGFncmlkLyIsInNvdXJjZXMiOlsidGFibGVzL3NtYXJ0LXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELGtEQUFrRDtBQUVsRCxNQUFNLE9BQWdCLGNBQWM7Q0FJbkM7QUFHRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFrQixTQUFRLGNBQWM7SUFLbkQsWUFBb0IsS0FBaUI7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFEVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRjdCLFNBQUksR0FBVyxnQ0FBZ0MsQ0FBQztJQUl4RCxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLGlFQUFpRTtRQUNqRSx3RUFBd0U7SUFDMUUsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFBO0FBakNZLGlCQUFpQjtJQUQ3QixVQUFVLEVBQUU7NkNBTWdCLFVBQVU7R0FMMUIsaUJBQWlCLENB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U0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLHlCQUF5QjtRQUNoQyxHQUFHLEVBQUUsRUFBRTtLQUNSO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRztJQUN0QixHQUFHLEVBQUU7UUFDSCxnQkFBZ0IsRUFBRSx5QkFBeUI7UUFDM0MsbUJBQW1CLEVBQUUsOEJBQThCO1FBQ25ELG1CQUFtQixFQUFFLDBCQUEwQjtLQUNoRDtJQUNELElBQUksRUFBRTtRQUNKLGlCQUFpQixFQUFFLHlCQUF5QjtRQUM1QyxpQkFBaUIsRUFBRSw4QkFBOEI7UUFDakQsbUJBQW1CLEVBQUUsMEJBQTBCO0tBQ2hEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sbUJBQW1CLEVBQUUsMEJBQTBCO1FBQy9DLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFO1lBQ0YsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxXQUFXO1lBQ2xCLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsUUFBUTtTQUNmO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuLy8gaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL3NtYXJ0LXRhYmxlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydFRhYmxlRGF0YSB7XHJcbiAgYWJzdHJhY3QgZ2V0RGF0YSgpOiBhbnlbXTtcclxuICBhYnN0cmFjdCBnZXRTZXR0aW5ncygpOiBhbnk7XHJcbiAgYWJzdHJhY3QgZ2V0U2V0dGluZygpOiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNtYXJ0VGFibGVTZXJ2aWNlIGV4dGVuZHMgU21hcnRUYWJsZURhdGEge1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcgPSBcImFzc2V0cy91dGlscy9jb25maWdfdGFibGUuanNvblwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIHJldHVybiBEQVRBX1RhYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX3VybCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55W10+KHRoaXMuX3VybCk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKS5waXBlKG1hcCgocmVzOiBhbnkpID0+IHJlcykpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueVtdPih0aGlzLl91cmwpLnBpcGUobWFwKChyZXM6IGFueSkgPT4gcmVzKSk7XHJcbiAgfVxyXG5cclxuICBldFNldHRpbmcoKSB7XHJcbiAgICBsZXQgc2V0dGluZztcclxuICAgIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHNldHRpbmcgPSByZXM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5nO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGVJbnRlcmZhY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgYWdlOiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBX1RhYmxlOiBUYWJsZURhdGVJbnRlcmZhY2VbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJPdHRvXCIsXHJcbiAgICB1c2VybmFtZTogXCJAbWRvXCIsXHJcbiAgICBlbWFpbDogXCJtZG9AZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFjb2JcIixcclxuICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAZmF0XCIsXHJcbiAgICBlbWFpbDogXCJmYXRAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiNDVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBmaXJzdE5hbWU6IFwiTGFycnlcIixcclxuICAgIGxhc3ROYW1lOiBcIkJpcmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkB0d2l0dGVyXCIsXHJcbiAgICBlbWFpbDogXCJ0d2l0dGVyQG91dGxvb2suY29tXCIsXHJcbiAgICBhZ2U6IFwiMThcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU25vd1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHNub3dcIixcclxuICAgIGVtYWlsOiBcInNub3dAZ21haWwuY29tXCIsXHJcbiAgICBhZ2U6IFwiMjBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFja1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiU3BhcnJvd1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGphY2tcIixcclxuICAgIGVtYWlsOiBcImphY2tAeWFuZGV4LnJ1XCIsXHJcbiAgICBhZ2U6IFwiMzBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBmaXJzdE5hbWU6IFwiQW5uXCIsXHJcbiAgICBsYXN0TmFtZTogXCJTbWl0aFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGFublwiLFxyXG4gICAgZW1haWw6IFwiYW5uQGdtYWlsLmNvbVwiLFxyXG4gICAgYWdlOiBcIjIxXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJhcmJhcmFcIixcclxuICAgIGxhc3ROYW1lOiBcIkJsYWNrXCIsXHJcbiAgICB1c2VybmFtZTogXCJAYmFyYmFyYVwiLFxyXG4gICAgZW1haWw6IFwiYmFyYmFyYUB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCI0M1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIGZpcnN0TmFtZTogXCJTZXZhblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmFncmF0XCIsXHJcbiAgICB1c2VybmFtZTogXCJAc2V2YW5cIixcclxuICAgIGVtYWlsOiBcInNldmFuQG91dGxvb2suY29tXCIsXHJcbiAgICBhZ2U6IFwiMTNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBmaXJzdE5hbWU6IFwiUnViZW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlZhcmRhblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQHJ1YmVuXCIsXHJcbiAgICBlbWFpbDogXCJydWJlbkBnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIyMlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBmaXJzdE5hbWU6IFwiS2FyZW5cIixcclxuICAgIGxhc3ROYW1lOiBcIlNldmFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAa2FyZW5cIixcclxuICAgIGVtYWlsOiBcImthcmVuQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjMzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJPdHRvXCIsXHJcbiAgICB1c2VybmFtZTogXCJAbWFya1wiLFxyXG4gICAgZW1haWw6IFwibWFya0BnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCIzOFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmFjb2JcIixcclxuICAgIGxhc3ROYW1lOiBcIlRob3JudG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAamFjb2JcIixcclxuICAgIGVtYWlsOiBcImphY29iQHlhbmRleC5ydVwiLFxyXG4gICAgYWdlOiBcIjQ4XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMyxcclxuICAgIGZpcnN0TmFtZTogXCJIYWlrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIYWtvYlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQGhhaWtcIixcclxuICAgIGVtYWlsOiBcImhhaWtAb3V0bG9vay5jb21cIixcclxuICAgIGFnZTogXCI0OFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBmaXJzdE5hbWU6IFwiR2FyZWdpblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSmlyYWlyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAZ2FyZWdpblwiLFxyXG4gICAgZW1haWw6IFwiZ2FyZWdpbkBnbWFpbC5jb21cIixcclxuICAgIGFnZTogXCI0MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBmaXJzdE5hbWU6IFwiS3Jpa29yXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCZWRyb3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBrcmlrb3JcIixcclxuICAgIGVtYWlsOiBcImtyaWtvckB5YW5kZXgucnVcIixcclxuICAgIGFnZTogXCIzMlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBmaXJzdE5hbWU6IFwiRnJhbmNpc2NhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJCcmFkeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEdpYnNvblwiLFxyXG4gICAgZW1haWw6IFwiZnJhbmNpc2NhZ2lic29uQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgZmlyc3ROYW1lOiBcIlRpbGxtYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkZpZ3Vlcm9hXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU25vd1wiLFxyXG4gICAgZW1haWw6IFwidGlsbG1hbnNub3dAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTgsXHJcbiAgICBmaXJzdE5hbWU6IFwiSmltZW5lelwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTW9ycmlzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAQnJ5YW50XCIsXHJcbiAgICBlbWFpbDogXCJqaW1lbmV6YnJ5YW50QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE5LFxyXG4gICAgZmlyc3ROYW1lOiBcIlNhbmRvdmFsXCIsXHJcbiAgICBsYXN0TmFtZTogXCJKYWNvYnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1jYnJpZGVcIixcclxuICAgIGVtYWlsOiBcInNhbmRvdmFsbWNicmlkZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMCxcclxuICAgIGZpcnN0TmFtZTogXCJHcmlmZmluXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUb3JyZXNcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDaGFybGVzXCIsXHJcbiAgICBlbWFpbDogXCJncmlmZmluY2hhcmxlc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMSxcclxuICAgIGZpcnN0TmFtZTogXCJDb3JhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQYXJrZXJcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDYWxkd2VsbFwiLFxyXG4gICAgZW1haWw6IFwiY29yYWNhbGR3ZWxsQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkNpbmR5XCIsXHJcbiAgICBsYXN0TmFtZTogXCJCb25kXCIsXHJcbiAgICB1c2VybmFtZTogXCJAVmVsZXpcIixcclxuICAgIGVtYWlsOiBcImNpbmR5dmVsZXpAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI0XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjMsXHJcbiAgICBmaXJzdE5hbWU6IFwiRnJpZWRhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJUeXNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQENyYWlnXCIsXHJcbiAgICBlbWFpbDogXCJmcmllZGFjcmFpZ0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNCxcclxuICAgIGZpcnN0TmFtZTogXCJDb3RlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIb2xjb21iXCIsXHJcbiAgICB1c2VybmFtZTogXCJAUm93ZVwiLFxyXG4gICAgZW1haWw6IFwiY290ZXJvd2VAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDIwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjUsXHJcbiAgICBmaXJzdE5hbWU6IFwiVHJ1amlsbG9cIixcclxuICAgIGxhc3ROYW1lOiBcIk1lamlhXCIsXHJcbiAgICB1c2VybmFtZTogXCJAVmFsZW56dWVsYVwiLFxyXG4gICAgZW1haWw6IFwidHJ1amlsbG92YWxlbnp1ZWxhQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI2LFxyXG4gICAgZmlyc3ROYW1lOiBcIlBydWl0dFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiU2hlcGFyZFwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFNsb2FuXCIsXHJcbiAgICBlbWFpbDogXCJwcnVpdHRzbG9hbkBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyNyxcclxuICAgIGZpcnN0TmFtZTogXCJTdXR0b25cIixcclxuICAgIGxhc3ROYW1lOiBcIk9ydGVnYVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEJsYWNrXCIsXHJcbiAgICBlbWFpbDogXCJzdXR0b25ibGFja0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyOCxcclxuICAgIGZpcnN0TmFtZTogXCJNYXJpb25cIixcclxuICAgIGxhc3ROYW1lOiBcIkhlYXRoXCIsXHJcbiAgICB1c2VybmFtZTogXCJARXNwaW5vemFcIixcclxuICAgIGVtYWlsOiBcIm1hcmlvbmVzcGlub3phQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0N1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI5LFxyXG4gICAgZmlyc3ROYW1lOiBcIk5ld21hblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSGlja3NcIixcclxuICAgIHVzZXJuYW1lOiBcIkBLZWl0aFwiLFxyXG4gICAgZW1haWw6IFwibmV3bWFua2VpdGhAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDE1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzAsXHJcbiAgICBmaXJzdE5hbWU6IFwiQm95bGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkxhcnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFN1bW1lcnNcIixcclxuICAgIGVtYWlsOiBcImJveWxlc3VtbWVyc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMSxcclxuICAgIGZpcnN0TmFtZTogXCJIYXluZXNcIixcclxuICAgIGxhc3ROYW1lOiBcIlZpbnNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1ja2VuemllXCIsXHJcbiAgICBlbWFpbDogXCJoYXluZXNtY2tlbnppZUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMixcclxuICAgIGZpcnN0TmFtZTogXCJNaWxsZXJcIixcclxuICAgIGxhc3ROYW1lOiBcIkFjb3N0YVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFlvdW5nXCIsXHJcbiAgICBlbWFpbDogXCJtaWxsZXJ5b3VuZ0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzMyxcclxuICAgIGZpcnN0TmFtZTogXCJKb2huc3RvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQnJvd25cIixcclxuICAgIHVzZXJuYW1lOiBcIkBLbmlnaHRcIixcclxuICAgIGVtYWlsOiBcImpvaG5zdG9ua25pZ2h0QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxlbmFcIixcclxuICAgIGxhc3ROYW1lOiBcIlBpdHRzXCIsXHJcbiAgICB1c2VybmFtZTogXCJARm9yYmVzXCIsXHJcbiAgICBlbWFpbDogXCJsZW5hZm9yYmVzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgZmlyc3ROYW1lOiBcIlRlcnJpZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiS2VubmVkeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEJyYW5jaFwiLFxyXG4gICAgZW1haWw6IFwidGVycmllYnJhbmNoQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM2LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxvdWlzZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQWd1aXJyZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEtpcmJ5XCIsXHJcbiAgICBlbWFpbDogXCJsb3Vpc2VraXJieUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNyxcclxuICAgIGZpcnN0TmFtZTogXCJEYXZpZFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiUGF0dG9uXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuZGVyc1wiLFxyXG4gICAgZW1haWw6IFwiZGF2aWRzYW5kZXJzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM4LFxyXG4gICAgZmlyc3ROYW1lOiBcIkhvbGRlblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmFybG93XCIsXHJcbiAgICB1c2VybmFtZTogXCJATWNraW5uZXlcIixcclxuICAgIGVtYWlsOiBcImhvbGRlbm1ja2lubmV5QGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAxMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM5LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJha2VyXCIsXHJcbiAgICBsYXN0TmFtZTogXCJSaXZlcmFcIixcclxuICAgIHVzZXJuYW1lOiBcIkBNb250b3lhXCIsXHJcbiAgICBlbWFpbDogXCJiYWtlcm1vbnRveWFAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDQ3XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDAsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVsaW5kYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTGxveWRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDYWxkZXJvblwiLFxyXG4gICAgZW1haWw6IFwiYmVsaW5kYWNhbGRlcm9uQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQxLFxyXG4gICAgZmlyc3ROYW1lOiBcIlBlYXJzb25cIixcclxuICAgIGxhc3ROYW1lOiBcIlBhdHJpY2tcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDbGVtZW50c1wiLFxyXG4gICAgZW1haWw6IFwicGVhcnNvbmNsZW1lbnRzQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA0MlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQyLFxyXG4gICAgZmlyc3ROYW1lOiBcIkFseWNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNY2tlZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQERhdWdoZXJ0eVwiLFxyXG4gICAgZW1haWw6IFwiYWx5Y2VkYXVnaGVydHlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDMsXHJcbiAgICBmaXJzdE5hbWU6IFwiVmFsZW5jaWFcIixcclxuICAgIGxhc3ROYW1lOiBcIlNwZW5jZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE9sc2VuXCIsXHJcbiAgICBlbWFpbDogXCJ2YWxlbmNpYW9sc2VuQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkxlYWNoXCIsXHJcbiAgICBsYXN0TmFtZTogXCJIb2xjb21iXCIsXHJcbiAgICB1c2VybmFtZTogXCJASHVtcGhyZXlcIixcclxuICAgIGVtYWlsOiBcImxlYWNoaHVtcGhyZXlAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNDUsXHJcbiAgICBmaXJzdE5hbWU6IFwiTW9zc1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmF4dGVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJARml0enBhdHJpY2tcIixcclxuICAgIGVtYWlsOiBcIm1vc3NmaXR6cGF0cmlja0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NixcclxuICAgIGZpcnN0TmFtZTogXCJKZWFubmVcIixcclxuICAgIGxhc3ROYW1lOiBcIkNvb2tlXCIsXHJcbiAgICB1c2VybmFtZTogXCJAV2FyZFwiLFxyXG4gICAgZW1haWw6IFwiamVhbm5ld2FyZEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNTlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0NyxcclxuICAgIGZpcnN0TmFtZTogXCJXaWxtYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQnJpZ2dzXCIsXHJcbiAgICB1c2VybmFtZTogXCJAS2lkZFwiLFxyXG4gICAgZW1haWw6IFwid2lsbWFraWRkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1M1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQ4LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJlYXRyaWNlXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQZXJyeVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEdpbGJlcnRcIixcclxuICAgIGVtYWlsOiBcImJlYXRyaWNlZ2lsYmVydEBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMzlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0OSxcclxuICAgIGZpcnN0TmFtZTogXCJXaGl0YWtlclwiLFxyXG4gICAgbGFzdE5hbWU6IFwiSHlkZVwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQE1jZG9uYWxkXCIsXHJcbiAgICBlbWFpbDogXCJ3aGl0YWtlcm1jZG9uYWxkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAzNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUwLFxyXG4gICAgZmlyc3ROYW1lOiBcIlJlYmVrYWhcIixcclxuICAgIGxhc3ROYW1lOiBcIkR1cmFuXCIsXHJcbiAgICB1c2VybmFtZTogXCJAR3Jvc3NcIixcclxuICAgIGVtYWlsOiBcInJlYmVrYWhncm9zc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1MSxcclxuICAgIGZpcnN0TmFtZTogXCJFYXJsaW5lXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNYXllclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFdvb2R3YXJkXCIsXHJcbiAgICBlbWFpbDogXCJlYXJsaW5ld29vZHdhcmRAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDUyXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTIsXHJcbiAgICBmaXJzdE5hbWU6IFwiTW9yYW5cIixcclxuICAgIGxhc3ROYW1lOiBcIkJheHRlclwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEpvaG5zXCIsXHJcbiAgICBlbWFpbDogXCJtb3JhbmpvaG5zQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUzLFxyXG4gICAgZmlyc3ROYW1lOiBcIk5hbmV0dGVcIixcclxuICAgIGxhc3ROYW1lOiBcIkh1YmJhcmRcIixcclxuICAgIHVzZXJuYW1lOiBcIkBDb29rZVwiLFxyXG4gICAgZW1haWw6IFwibmFuZXR0ZWNvb2tlQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiA1NVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkRhbHRvblwiLFxyXG4gICAgbGFzdE5hbWU6IFwiV2Fsa2VyXCIsXHJcbiAgICB1c2VybmFtZTogXCJASGVuZHJpY2tzXCIsXHJcbiAgICBlbWFpbDogXCJkYWx0b25oZW5kcmlja3NAY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDI1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTUsXHJcbiAgICBmaXJzdE5hbWU6IFwiQmVubmV0dFwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQmxha2VcIixcclxuICAgIHVzZXJuYW1lOiBcIkBQZW5hXCIsXHJcbiAgICBlbWFpbDogXCJiZW5uZXR0cGVuYUBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NixcclxuICAgIGZpcnN0TmFtZTogXCJLZWxsaWVcIixcclxuICAgIGxhc3ROYW1lOiBcIkhvcnRvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFdlaXNzXCIsXHJcbiAgICBlbWFpbDogXCJrZWxsaWV3ZWlzc0Bjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogNDhcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1NyxcclxuICAgIGZpcnN0TmFtZTogXCJIb2Jic1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiVGFsbGV5XCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuZm9yZFwiLFxyXG4gICAgZW1haWw6IFwiaG9iYnNzYW5mb3JkQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDU4LFxyXG4gICAgZmlyc3ROYW1lOiBcIk1jZ3VpcmVcIixcclxuICAgIGxhc3ROYW1lOiBcIkRvbmFsZHNvblwiLFxyXG4gICAgdXNlcm5hbWU6IFwiQFJvbWFuXCIsXHJcbiAgICBlbWFpbDogXCJtY2d1aXJlcm9tYW5AY29tdG91cnMuY29tXCIsXHJcbiAgICBhZ2U6IDM4XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTksXHJcbiAgICBmaXJzdE5hbWU6IFwiUm9kcmlxdWV6XCIsXHJcbiAgICBsYXN0TmFtZTogXCJTYXVuZGVyc1wiLFxyXG4gICAgdXNlcm5hbWU6IFwiQEhhcnBlclwiLFxyXG4gICAgZW1haWw6IFwicm9kcmlxdWV6aGFycGVyQGNvbXRvdXJzLmNvbVwiLFxyXG4gICAgYWdlOiAyMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYwLFxyXG4gICAgZmlyc3ROYW1lOiBcIkxvdVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiQ29ubmVyXCIsXHJcbiAgICB1c2VybmFtZTogXCJAU2FuY2hlelwiLFxyXG4gICAgZW1haWw6IFwibG91c2FuY2hlekBjb210b3Vycy5jb21cIixcclxuICAgIGFnZTogMTZcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgYWRkOiB7XHJcbiAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1wbHVzXCI+PC9pPicsXHJcbiAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcclxuICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPidcclxuICB9LFxyXG4gIGVkaXQ6IHtcclxuICAgIGVkaXRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1lZGl0XCI+PC9pPicsXHJcbiAgICBzYXZlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXHJcbiAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nXHJcbiAgfSxcclxuICBkZWxldGU6IHtcclxuICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXRyYXNoXCI+PC9pPicsXHJcbiAgICBjb25maXJtRGVsZXRlOiB0cnVlXHJcbiAgfSxcclxuICBjb2x1bW5zOiB7XHJcbiAgICBpZDoge1xyXG4gICAgICB0aXRsZTogXCJJRFwiLFxyXG4gICAgICB0eXBlOiBcIm51bWJlclwiXHJcbiAgICB9LFxyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkZpcnN0IE5hbWVcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkxhc3QgTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdGl0bGU6IFwiVXNlcm5hbWVcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHRpdGxlOiBcIkUtbWFpbFwiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICB9LFxyXG4gICAgYWdlOiB7XHJcbiAgICAgIHRpdGxlOiBcIkFnZVwiLFxyXG4gICAgICB0eXBlOiBcIm51bWJlclwiXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=