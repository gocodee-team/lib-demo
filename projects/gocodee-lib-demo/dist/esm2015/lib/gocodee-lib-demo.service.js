/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}
GocodeeLibDemoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GocodeeLibDemoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['values',] }] }
];
/** @nocollapse */ GocodeeLibDemoService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLibDemoService_Factory() { return new GocodeeLibDemoService(i0.inject("values")); }, token: GocodeeLibDemoService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29jb2RlZS1saWItZGVtby8iLCJzb3VyY2VzIjpbImxpYi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFLaEMsWUFBdUMsTUFBTTtRQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7UUFIN0MsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVZLENBQUM7Ozs7OztJQUVsRCxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVk7O1lBQzdCLEdBQUcsR0FBRyxDQUFDO1FBQ1gsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPLEdBQUcsd0JBQXdCLElBQUksZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbkgsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBTWUsTUFBTSxTQUFDLFFBQVE7Ozs7O0lBSDdCLHdDQUFrQzs7SUFDbEMsd0NBQXFDOzs7OztJQUV4Qix1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb2NvZGVlTGliRGVtb1NlcnZpY2Uge1xuIFxuICBtZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHZpc2libGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvciggQEluamVjdCgndmFsdWVzJykgcHJpdmF0ZSBjb25maWcpIHsgfVxuXG4gIHN1bVZhbHVlKHZhbDE6IG51bWJlciwgdmFsMjogbnVtYmVyICkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIHN1bSA9IHZhbDEgKyB2YWwyO1xuICAgIHRoaXMubWVzc2FnZS5uZXh0KGBVc2VyIG5hbWUgaXMgJHt0aGlzLmNvbmZpZy5icmFuZH0gXFxuICR7c3VtfSB3aXRoIHZhbHVlcyBpbnB1dDE6ICR7dmFsMX0gYW5kIGlucHV0MjogJHt2YWwyfWApO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLnZpc2libGUubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy52aXNpYmxlLm5leHQoZmFsc2UpO1xuICB9XG5cblxufVxuIl19