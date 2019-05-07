/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { _ } from 'underscore';
import * as i0 from "@angular/core";
var GocodeeLibDemoService = /** @class */ (function () {
    function GocodeeLibDemoService(config) {
        this.config = config;
        this.message = new BehaviorSubject('');
        this.visible = new BehaviorSubject(false);
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    GocodeeLibDemoService.prototype.sumValue = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        /** @type {?} */
        var sum = 0;
        sum = val1 + val2;
        this.message.next("User name is " + this.config.brand + " \n " + sum + " with values input1: " + val1 + " and input2: " + val2);
    };
    /**
     * @return {?}
     */
    GocodeeLibDemoService.prototype.show = /**
     * @return {?}
     */
    function () {
        this.visible.next(true);
    };
    /**
     * @return {?}
     */
    GocodeeLibDemoService.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.visible.next(false);
    };
    /**
     * @param {?} array
     * @param {?} delegate
     * @return {?}
     */
    GocodeeLibDemoService.prototype.each = /**
     * @param {?} array
     * @param {?} delegate
     * @return {?}
     */
    function (array, delegate) {
        return _.each(array, delegate);
    };
    GocodeeLibDemoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GocodeeLibDemoService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ GocodeeLibDemoService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLibDemoService_Factory() { return new GocodeeLibDemoService(i0.inject("config")); }, token: GocodeeLibDemoService, providedIn: "root" });
    return GocodeeLibDemoService;
}());
export { GocodeeLibDemoService };
if (false) {
    /** @type {?} */
    GocodeeLibDemoService.prototype.message;
    /** @type {?} */
    GocodeeLibDemoService.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    GocodeeLibDemoService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29jb2RlZS1saWItZGVtby8iLCJzb3VyY2VzIjpbImxpYi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFL0I7SUFRRSwrQkFBc0MsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUFINUMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVXLENBQUM7Ozs7OztJQUVqRCx3Q0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxJQUFZOztZQUM3QixHQUFHLEdBQUcsQ0FBQztRQUNYLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBTyxHQUFHLDZCQUF3QixJQUFJLHFCQUFnQixJQUFNLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELG9DQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELG9DQUFJOzs7OztJQUFKLFVBQUssS0FBSyxFQUFFLFFBQVE7UUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFNYyxNQUFNLFNBQUMsUUFBUTs7O2dDQVo5QjtDQWdDQyxBQTVCRCxJQTRCQztTQXpCWSxxQkFBcUI7OztJQUVoQyx3Q0FBa0M7O0lBQ2xDLHdDQUFxQzs7Ozs7SUFFekIsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IF8gfSBmcm9tICd1bmRlcnNjb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29jb2RlZUxpYkRlbW9TZXJ2aWNlIHtcblxuICBtZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHZpc2libGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZykgeyB9XG5cbiAgc3VtVmFsdWUodmFsMTogbnVtYmVyLCB2YWwyOiBudW1iZXIpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBzdW0gPSB2YWwxICsgdmFsMjtcbiAgICB0aGlzLm1lc3NhZ2UubmV4dChgVXNlciBuYW1lIGlzICR7dGhpcy5jb25maWcuYnJhbmR9IFxcbiAke3N1bX0gd2l0aCB2YWx1ZXMgaW5wdXQxOiAke3ZhbDF9IGFuZCBpbnB1dDI6ICR7dmFsMn1gKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQodHJ1ZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIGVhY2goYXJyYXksIGRlbGVnYXRlKSB7XG4gICAgcmV0dXJuIF8uZWFjaChhcnJheSwgZGVsZWdhdGUpO1xuICB9XG5cbn1cbiJdfQ==