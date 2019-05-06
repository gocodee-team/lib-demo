/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';
export class GocodeeLibDemoComponent {
    /**
     * @param {?} toast
     */
    constructor(toast) {
        this.toast = toast;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GocodeeLibDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-gocodee-lib-demo',
                template: "<div id=\"toast\" *ngIf=\"toast.visible | async\">\n    {{ toast.message | async }}<br>\n    <a (click)=\"toast.hide()\">Dismiss</a><br/>\n  </div>\n  ",
                styles: ['./gocodee-lib-demo.component.scss']
            }] }
];
/** @nocollapse */
GocodeeLibDemoComponent.ctorParameters = () => [
    { type: GocodeeLibDemoService }
];
if (false) {
    /** @type {?} */
    GocodeeLibDemoComponent.prototype.toast;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpYi1kZW1vLyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGliLWRlbW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU9uRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRWxDLFlBQW1CLEtBQTRCO1FBQTVCLFVBQUssR0FBTCxLQUFLLENBQXVCO0lBQUksQ0FBQzs7OztJQUVwRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG1LQUFnRDt5QkFDdkMsbUNBQW1DO2FBQzdDOzs7O1lBTlEscUJBQXFCOzs7O0lBU2hCLHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvY29kZWVMaWJEZW1vU2VydmljZSB9IGZyb20gJy4vZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtZ29jb2RlZS1saWItZGVtbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nb2NvZGVlLWxpYi1kZW1vLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJy4vZ29jb2RlZS1saWItZGVtby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvY29kZWVMaWJEZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9hc3Q6IEdvY29kZWVMaWJEZW1vU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19