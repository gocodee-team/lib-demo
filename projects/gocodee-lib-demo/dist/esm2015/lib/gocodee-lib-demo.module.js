/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GocodeeLibDemoComponent } from './gocodee-lib-demo.component';
import { LibComponentComponent } from './lib-component/lib-component.component';
import { CommonModule } from '@angular/common';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';
export class GocodeeLibDemoModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWItZGVtby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpYi1kZW1vLyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGliLWRlbW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFVbkUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQzFCLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQ3ZDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUM7Z0JBQzlELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUViO2dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvY29kZWVMaWJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9nb2NvZGVlLWxpYi1kZW1vLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaWJDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL2xpYi1jb21wb25lbnQvbGliLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEdvY29kZWVMaWJEZW1vU2VydmljZSB9IGZyb20gJy4vZ29jb2RlZS1saWItZGVtby5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR29jb2RlZUxpYkRlbW9Db21wb25lbnQsIExpYkNvbXBvbmVudENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtHb2NvZGVlTGliRGVtb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR29jb2RlZUxpYkRlbW9Nb2R1bGUgeyBcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR29jb2RlZUxpYkRlbW9Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR29jb2RlZUxpYkRlbW9TZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==