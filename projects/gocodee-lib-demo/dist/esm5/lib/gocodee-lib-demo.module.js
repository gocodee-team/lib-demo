/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GocodeeLibDemoComponent } from './gocodee-lib-demo.component';
import { LibComponentComponent } from './lib-component/lib-component.component';
import { CommonModule } from '@angular/common';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';
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
        { type: NgModule, args: [{
                    declarations: [GocodeeLibDemoComponent, LibComponentComponent],
                    imports: [
                        CommonModule,
                    ],
                    exports: [GocodeeLibDemoComponent]
                },] }
    ];
    return GocodeeLibDemoModule;
}());
export { GocodeeLibDemoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpYi1kZW1vLyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGliLWRlbW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkU7SUFBQTtJQWtCQSxDQUFDOzs7OztJQVRlLDRCQUFPOzs7O0lBQXJCLFVBQXNCLE1BQU07UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjtnQkFDckIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDdkM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBakJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDOUQsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBRWI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOztJQVdELDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29jb2RlZUxpYkRlbW9Db21wb25lbnQgfSBmcm9tICcuL2dvY29kZWUtbGliLWRlbW8uY29tcG9uZW50JztcbmltcG9ydCB7IExpYkNvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vbGliLWNvbXBvbmVudC9saWItY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR29jb2RlZUxpYkRlbW9TZXJ2aWNlIH0gZnJvbSAnLi9nb2NvZGVlLWxpYi1kZW1vLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHb2NvZGVlTGliRGVtb0NvbXBvbmVudCwgTGliQ29tcG9uZW50Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0dvY29kZWVMaWJEZW1vQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHb2NvZGVlTGliRGVtb01vZHVsZSB7IFxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHb2NvZGVlTGliRGVtb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb2NvZGVlTGliRGVtb1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWd9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19