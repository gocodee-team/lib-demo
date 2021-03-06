import { BehaviorSubject } from 'rxjs';
import { _ } from 'underscore';
import { Injectable, Inject, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLibDemoService {
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
/** @nocollapse */ GocodeeLibDemoService.ngInjectableDef = defineInjectable({ factory: function GocodeeLibDemoService_Factory() { return new GocodeeLibDemoService(inject("config")); }, token: GocodeeLibDemoService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLibDemoComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibComponentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LibComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-lib-component',
                template: "<p>\n  lib-component works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LibComponentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLibDemoModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: GocodeeLibDemoModule,
            providers: [
                GocodeeLibDemoService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
GocodeeLibDemoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GocodeeLibDemoComponent, LibComponentComponent],
                imports: [
                    CommonModule,
                ],
                exports: [GocodeeLibDemoComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GocodeeLibDemoService, GocodeeLibDemoComponent, GocodeeLibDemoModule, LibComponentComponent as ɵa };

//# sourceMappingURL=gocodee-lib-demo.js.map