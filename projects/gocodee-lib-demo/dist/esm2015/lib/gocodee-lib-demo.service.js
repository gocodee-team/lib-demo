/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { _ } from 'underscore';
import * as i0 from "@angular/core";
export class GocodeeLibDemoService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.message = new BehaviorSubject('');
        this.visible = new BehaviorSubject(false);
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    sumValue(val1, val2) {
        /** @type {?} */
        let sum = 0;
        sum = val1 + val2;
        this.message.next(`User name is ${this.config.brand} \n ${sum} with values input1: ${val1} and input2: ${val2}`);
    }
    /**
     * @return {?}
     */
    show() {
        this.visible.next(true);
    }
    /**
     * @return {?}
     */
    hide() {
        this.visible.next(false);
    }
    /**
     * @param {?} array
     * @param {?} delegate
     * @return {?}
     */
    each(array, delegate) {
        return _.each(array, delegate);
    }
}
GocodeeLibDemoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GocodeeLibDemoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ GocodeeLibDemoService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLibDemoService_Factory() { return new GocodeeLibDemoService(i0.inject("config")); }, token: GocodeeLibDemoService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29jb2RlZS1saWItZGVtby8iLCJzb3VyY2VzIjpbImxpYi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUtoQyxZQUFzQyxNQUFNO1FBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTtRQUg1QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRVcsQ0FBQzs7Ozs7O0lBRWpELFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBWTs7WUFDN0IsR0FBRyxHQUFHLENBQUM7UUFDWCxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sR0FBRyx3QkFBd0IsSUFBSSxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FNYyxNQUFNLFNBQUMsUUFBUTs7Ozs7SUFINUIsd0NBQWtDOztJQUNsQyx3Q0FBcUM7Ozs7O0lBRXpCLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvY29kZWVMaWJEZW1vU2VydmljZSB7XG5cbiAgbWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICB2aXNpYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcpIHsgfVxuXG4gIHN1bVZhbHVlKHZhbDE6IG51bWJlciwgdmFsMjogbnVtYmVyKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgc3VtID0gdmFsMSArIHZhbDI7XG4gICAgdGhpcy5tZXNzYWdlLm5leHQoYFVzZXIgbmFtZSBpcyAke3RoaXMuY29uZmlnLmJyYW5kfSBcXG4gJHtzdW19IHdpdGggdmFsdWVzIGlucHV0MTogJHt2YWwxfSBhbmQgaW5wdXQyOiAke3ZhbDJ9YCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMudmlzaWJsZS5uZXh0KHRydWUpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gIH1cblxuICBlYWNoKGFycmF5LCBkZWxlZ2F0ZSkge1xuICAgIHJldHVybiBfLmVhY2goYXJyYXksIGRlbGVnYXRlKTtcbiAgfVxuXG59XG4iXX0=