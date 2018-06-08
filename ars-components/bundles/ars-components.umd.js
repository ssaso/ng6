(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ars-components', ['exports', '@angular/core'], factory) :
    (factory((global['ars-components'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArsComponentsService = (function () {
        function ArsComponentsService() {
        }
        ArsComponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ArsComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ArsComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function ArsComponentsService_Factory() { return new ArsComponentsService(); }, token: ArsComponentsService, providedIn: "root" });
        return ArsComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArsComponentsComponent = (function () {
        function ArsComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ArsComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ArsComponentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ars-ars-components',
                        template: "\n    <p>\n      ars-components works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ArsComponentsComponent.ctorParameters = function () { return []; };
        return ArsComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CheckboxComponent = (function () {
        function CheckboxComponent() {
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ars-checkbox',
                        template: "<p>\n  checkbox works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TextinputComponent = (function () {
        function TextinputComponent() {
        }
        /**
         * @return {?}
         */
        TextinputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TextinputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ars-textinput',
                        template: "<input>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TextinputComponent.ctorParameters = function () { return []; };
        return TextinputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArsComponentsModule = (function () {
        function ArsComponentsModule() {
        }
        ArsComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ArsComponentsComponent, CheckboxComponent, TextinputComponent],
                        exports: [ArsComponentsComponent, CheckboxComponent, TextinputComponent]
                    },] },
        ];
        return ArsComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ArsComponentsService = ArsComponentsService;
    exports.ArsComponentsComponent = ArsComponentsComponent;
    exports.ArsComponentsModule = ArsComponentsModule;
    exports.ɵa = CheckboxComponent;
    exports.ɵb = TextinputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJzLWNvbXBvbmVudHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hcnMtY29tcG9uZW50cy9saWIvYXJzLWNvbXBvbmVudHMuc2VydmljZS50cyIsIm5nOi8vYXJzLWNvbXBvbmVudHMvbGliL2Fycy1jb21wb25lbnRzLmNvbXBvbmVudC50cyIsIm5nOi8vYXJzLWNvbXBvbmVudHMvbGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vYXJzLWNvbXBvbmVudHMvbGliL3RleHRpbnB1dC90ZXh0aW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9hcnMtY29tcG9uZW50cy9saWIvYXJzLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXJzQ29tcG9uZW50c1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcnMtYXJzLWNvbXBvbmVudHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYXJzLWNvbXBvbmVudHMgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFyc0NvbXBvbmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXJzLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY2hlY2tib3ggd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXJzLXRleHRpbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRpbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJzQ29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vYXJzLWNvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0aW5wdXQvdGV4dGlucHV0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXJzQ29tcG9uZW50c0NvbXBvbmVudCwgQ2hlY2tib3hDb21wb25lbnQsIFRleHRpbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBcnNDb21wb25lbnRzQ29tcG9uZW50LCBDaGVja2JveENvbXBvbmVudCwgVGV4dGlucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcnNDb21wb25lbnRzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7bUNBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxzREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztxQ0FWRDs7Ozs7OztBQ0FBO1FBWUU7U0FBaUI7Ozs7UUFFakIsb0NBQVE7OztZQUFSO2FBQ0M7O29CQWJGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnQ0FHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7Z0NBVEQ7Ozs7Ozs7QUNBQTtRQVVFO1NBQWlCOzs7O1FBRWpCLHFDQUFROzs7WUFBUjthQUNDOztvQkFYRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsV0FDWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7aUNBUEQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO3dCQUM3RSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztxQkFDekU7O2tDQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=