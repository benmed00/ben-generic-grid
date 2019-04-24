import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CustomRenderComponent = class CustomRenderComponent {
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CustomRenderComponent.prototype, "value", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CustomRenderComponent.prototype, "rowData", void 0);
CustomRenderComponent = tslib_1.__decorate([
    Component({
        template: `
    {{renderValue}}
  `
    })
], CustomRenderComponent);
export { CustomRenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXJlbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92aW5jaS1kYXRhZ3JpZC8iLCJzb3VyY2VzIjpbInRhYmxlcy9zbWFydC10YWJsZS9jdXN0b20tcmVuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTekQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFPaEMsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0NBRUYsQ0FBQTtBQVBVO0lBQVIsS0FBSyxFQUFFOztvREFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7O3NEQUFjO0FBTFgscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRTs7R0FFVDtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0FXakM7U0FYWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFZpZXdDZWxsIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICB7e3JlbmRlclZhbHVlfX1cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgVmlld0NlbGwsIE9uSW5pdCB7XHJcblxyXG4gIHJlbmRlclZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyVmFsdWUgPSB0aGlzLnZhbHVlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==