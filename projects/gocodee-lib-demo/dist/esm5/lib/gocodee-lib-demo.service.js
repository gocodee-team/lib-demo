/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29jb2RlZS1saWItZGVtby8iLCJzb3VyY2VzIjpbImxpYi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDO0lBUUUsK0JBQXVDLE1BQU07UUFBTixXQUFNLEdBQU4sTUFBTSxDQUFBO1FBSDdDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFWSxDQUFDOzs7Ozs7SUFFbEQsd0NBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsSUFBWTs7WUFDN0IsR0FBRyxHQUFHLENBQUM7UUFDWCxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFlBQU8sR0FBRyw2QkFBd0IsSUFBSSxxQkFBZ0IsSUFBTSxDQUFDLENBQUM7SUFDbkgsQ0FBQzs7OztJQUVELG9DQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFNZSxNQUFNLFNBQUMsUUFBUTs7O2dDQVgvQjtDQTRCQyxBQXpCRCxJQXlCQztTQXRCWSxxQkFBcUI7OztJQUVoQyx3Q0FBa0M7O0lBQ2xDLHdDQUFxQzs7Ozs7SUFFeEIsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29jb2RlZUxpYkRlbW9TZXJ2aWNlIHtcbiBcbiAgbWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICB2aXNpYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnKSB7IH1cblxuICBzdW1WYWx1ZSh2YWwxOiBudW1iZXIsIHZhbDI6IG51bWJlciApIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBzdW0gPSB2YWwxICsgdmFsMjtcbiAgICB0aGlzLm1lc3NhZ2UubmV4dChgVXNlciBuYW1lIGlzICR7dGhpcy5jb25maWcuYnJhbmR9IFxcbiAke3N1bX0gd2l0aCB2YWx1ZXMgaW5wdXQxOiAke3ZhbDF9IGFuZCBpbnB1dDI6ICR7dmFsMn1gKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQodHJ1ZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KGZhbHNlKTtcbiAgfVxuXG5cbn1cbiJdfQ==