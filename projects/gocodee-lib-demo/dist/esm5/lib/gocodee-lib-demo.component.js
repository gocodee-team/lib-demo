/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';
var GocodeeLibDemoComponent = /** @class */ (function () {
    function GocodeeLibDemoComponent(toast) {
        this.toast = toast;
    }
    /**
     * @return {?}
     */
    GocodeeLibDemoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GocodeeLibDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gl-gocodee-lib-demo',
                    template: "<div id=\"toast\" *ngIf=\"toast.visible | async\">\n    {{ toast.message | async }}<br>\n    <a (click)=\"toast.hide()\">Dismiss</a><br/>\n  </div>\n  ",
                    styles: ['./gocodee-lib-demo.component.scss']
                }] }
    ];
    /** @nocollapse */
    GocodeeLibDemoComponent.ctorParameters = function () { return [
        { type: GocodeeLibDemoService }
    ]; };
    return GocodeeLibDemoComponent;
}());
export { GocodeeLibDemoComponent };
if (false) {
    /** @type {?} */
    GocodeeLibDemoComponent.prototype.toast;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpYi1kZW1vLyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGliLWRlbW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQU9FLGlDQUFtQixLQUE0QjtRQUE1QixVQUFLLEdBQUwsS0FBSyxDQUF1QjtJQUFJLENBQUM7Ozs7SUFFcEQsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLG1LQUFnRDs2QkFDdkMsbUNBQW1DO2lCQUM3Qzs7OztnQkFOUSxxQkFBcUI7O0lBYzlCLDhCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUFksdUJBQXVCOzs7SUFFdEIsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29jb2RlZUxpYkRlbW9TZXJ2aWNlIH0gZnJvbSAnLi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1nb2NvZGVlLWxpYi1kZW1vJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvY29kZWUtbGliLWRlbW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnLi9nb2NvZGVlLWxpYi1kZW1vLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29jb2RlZUxpYkRlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2FzdDogR29jb2RlZUxpYkRlbW9TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=