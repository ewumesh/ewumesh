(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-user-response-user-response-module"],{

/***/ "As8w":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/user-response/user-response.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserResponseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseModule", function() { return UserResponseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_response_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-response.component */ "U3hw");






class UserResponseModule {
}
UserResponseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserResponseModule });
UserResponseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserResponseModule_Factory(t) { return new (t || UserResponseModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _user_response_component__WEBPACK_IMPORTED_MODULE_3__["UserResponseComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserResponseModule, { declarations: [_user_response_component__WEBPACK_IMPORTED_MODULE_3__["UserResponseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResponseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_response_component__WEBPACK_IMPORTED_MODULE_3__["UserResponseComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _user_response_component__WEBPACK_IMPORTED_MODULE_3__["UserResponseComponent"] }
                    ])
                ],
                exports: [],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "U3hw":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/user-response/user-response.component.ts ***!
  \************************************************************************/
/*! exports provided: UserResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseComponent", function() { return UserResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserResponseComponent {
    constructor() { }
    ngOnInit() { }
}
UserResponseComponent.ɵfac = function UserResponseComponent_Factory(t) { return new (t || UserResponseComponent)(); };
UserResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserResponseComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function UserResponseComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlc3BvbnNlLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResponseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './user-response.component.html',
                styleUrls: ['./user-response.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-admin-user-response-user-response-module.js.map