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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXJlbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW5lcmljLWNvbXBvbmVudHMtZHhjLyIsInNvdXJjZXMiOlsic2hhcmVkL3JlbmRlckNvbXBvbmVudHMvY3VzdG9tLXJlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3pELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBT2hDLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekQsQ0FBQztDQUVGLENBQUE7QUFQVTtJQUFSLEtBQUssRUFBRTs7b0RBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOztzREFBYztBQUxYLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUU7O0dBRVQ7S0FDRixDQUFDO0dBQ1cscUJBQXFCLENBV2pDO1NBWFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBWaWV3Q2VsbCB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAge3tyZW5kZXJWYWx1ZX19XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVJlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIFZpZXdDZWxsLCBPbkluaXQge1xyXG5cclxuICByZW5kZXJWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlclZhbHVlID0gdGhpcy52YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=