(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('underscore'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gocodee-lib-demo', ['exports', 'rxjs', 'underscore', '@angular/core', '@angular/common'], factory) :
    (factory((global['gocodee-lib-demo'] = {}),global.rxjs,global.underscore,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,underscore,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLibDemoService = /** @class */ (function () {
        function GocodeeLibDemoService(config) {
            this.config = config;
            this.message = new rxjs.BehaviorSubject('');
            this.visible = new rxjs.BehaviorSubject(false);
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
                return underscore._.each(array, delegate);
            };
        GocodeeLibDemoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GocodeeLibDemoService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ GocodeeLibDemoService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLibDemoService_Factory() { return new GocodeeLibDemoService(i0.inject("config")); }, token: GocodeeLibDemoService, providedIn: "root" });
        return GocodeeLibDemoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'gl-gocodee-lib-demo',
                        template: "<div id=\"toast\" *ngIf=\"toast.visible | async\">\n    {{ toast.message | async }}<br>\n    <a (click)=\"toast.hide()\">Dismiss</a><br/>\n  </div>\n  ",
                        styles: ['./gocodee-lib-demo.component.scss']
                    }] }
        ];
        /** @nocollapse */
        GocodeeLibDemoComponent.ctorParameters = function () {
            return [
                { type: GocodeeLibDemoService }
            ];
        };
        return GocodeeLibDemoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibComponentComponent = /** @class */ (function () {
        function LibComponentComponent() {
        }
        /**
         * @return {?}
         */
        LibComponentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LibComponentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gl-lib-component',
                        template: "<p>\n  lib-component works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LibComponentComponent.ctorParameters = function () { return []; };
        return LibComponentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLibDemoModule = /** @class */ (function () {
        function GocodeeLibDemoModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        GocodeeLibDemoModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: GocodeeLibDemoModule,
                    providers: [
                        GocodeeLibDemoService,
                        { provide: 'config', useValue: config }
                    ]
                };
            };
        GocodeeLibDemoModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GocodeeLibDemoComponent, LibComponentComponent],
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [GocodeeLibDemoComponent]
                    },] }
        ];
        return GocodeeLibDemoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GocodeeLibDemoService = GocodeeLibDemoService;
    exports.GocodeeLibDemoComponent = GocodeeLibDemoComponent;
    exports.GocodeeLibDemoModule = GocodeeLibDemoModule;
    exports.ɵa = LibComponentComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gocodee-lib-demo.umd.js.map