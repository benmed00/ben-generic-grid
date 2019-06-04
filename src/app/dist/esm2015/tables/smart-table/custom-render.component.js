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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXJlbmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW5lcmljLWNvbXBvbmVudHMtZHhjLyIsInNvdXJjZXMiOlsidGFibGVzL3NtYXJ0LXRhYmxlL2N1c3RvbS1yZW5kZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU9oQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pELENBQUM7Q0FFRixDQUFBO0FBUFU7SUFBUixLQUFLLEVBQUU7O29EQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs7c0RBQWM7QUFMWCxxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFOztHQUVUO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQVdqQztTQVhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIHt7cmVuZGVyVmFsdWV9fVxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21SZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBWaWV3Q2VsbCwgT25Jbml0IHtcclxuXHJcbiAgcmVuZGVyVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJWYWx1ZSA9IHRoaXMudmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19