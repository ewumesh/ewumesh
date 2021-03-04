(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\ewumesh\src\main.ts */"zUnb");


/***/ }),

/***/ "0tfL":
/*!**********************************************!*\
  !*** ./src/app/modules/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth.service */ "TcFV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");






function NavComponent_li_19_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_19_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.team(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_19_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_19_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.blogAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_19_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_19_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.user(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.profile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_li_19_button_8_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_19_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.chat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Live Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_li_19_button_12_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavComponent_li_19_button_13_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedData.content.role === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedData.content.role === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedData.content.role === "admin");
} }
function NavComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_20_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isLogged = false;
    }
    ngOnInit() {
        let a = JSON.parse(localStorage.getItem('logged'));
        if (a !== null) {
            this.isLogged = true;
            this.loggedData = a;
        }
    }
    home() {
        this.router.navigate(['/home']);
    }
    login() {
        this.router.navigate(['/login']);
    }
    logout() {
        localStorage.setItem('logged', null);
        this.router.navigate(['/home']);
        window.location.reload();
    }
    register() {
        this.router.navigate(['/register']);
    }
    contact() {
        this.router.navigate(['/contact']);
    }
    about() {
        this.router.navigate(['/about']);
    }
    blog() {
        this.router.navigate(['/blogs']);
    }
    blogAdmin() {
        this.router.navigate(['/admin/blogs']);
    }
    profile() {
        this.router.navigate(['/profile']);
    }
    team() {
        this.router.navigate(['/admin/team']);
    }
    user() {
        this.router.navigate(['admin/users']);
    }
    chat() {
        this.router.navigate(['live-chat']);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["top-nav"]], decls: 46, vars: 4, consts: [[1, "nav"], [1, "container"], [1, "logo"], ["href", "Javascript:;"], ["src", "assets/logo/e-logo.png", 1, "l_img"], ["id", "mainListDiv", 1, "main_list"], [1, "navlinks"], ["href", "Javascript:;", 3, "click"], [4, "ngIf"], [3, "click", 4, "ngIf"], ["id", "overlay-input", 1, "navTrigger"], ["id", "mySidepanel", 1, "sidepanel"], ["href", "Javascript:;", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", ""], [3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() { return ctx.blog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { return ctx.contact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.about(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavComponent_li_19_Template, 16, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavComponent_li_20_Template, 3, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavComponent_li_21_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavComponent_li_22_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_29_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_32_listener() { return ctx.blog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_35_listener() { return ctx.contact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_38_listener() { return ctx.about(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_41_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_44_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,500,700\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 62.5%;\n  font-size: 10px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  position: fixed;\n  line-height: 65px;\n  text-align: center;\n  z-index: 99;\n}\n.nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  float: left;\n  width: auto;\n  height: auto;\n  padding-left: 3rem;\n}\n.nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  font-size: 15px;\n}\n.nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00E676;\n}\n.nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%] {\n  height: 65px;\n  float: right;\n}\n.nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  height: 65px;\n  padding: 0;\n  padding-right: 3rem;\n}\n.nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  line-height: 65px;\n  font-size: 15px;\n}\n.nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00E676;\n}\n\n.home[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);\n  background-position: center top;\n  background-size: cover;\n}\n.navTrigger[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  transition: all 0.4s ease;\n}\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media screen and (max-width: 768px) {\n  .navTrigger[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.show_list[_ngcontent-%COMP%] {\n    height: auto;\n    display: none;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #111;\n    \n    background-position: center top;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.main_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    font-size: 3rem;\n    padding: 20px;\n  }\n\n  .nav[_ngcontent-%COMP%]   div.media_button[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n\n.navTrigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 25px;\n  margin: auto;\n  position: absolute;\n  right: 30px;\n  top: 0;\n  bottom: 0;\n}\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 2px;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 4px;\n}\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation: outT 0.8s backwards;\n  animation-direction: reverse;\n}\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 5px 0;\n  animation: outM 0.8s backwards;\n  animation-direction: reverse;\n}\n.navTrigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation: outBtm 0.8s backwards;\n  animation-direction: reverse;\n}\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation: inT 0.8s forwards;\n}\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation: inM 0.8s forwards;\n}\n.navTrigger.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation: inBtm 0.8s forwards;\n}\n@keyframes inM {\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(45deg);\n  }\n}\n@keyframes outM {\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(45deg);\n  }\n}\n@keyframes inT {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(9px) rotate(135deg);\n  }\n}\n@keyframes outT {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(9px) rotate(135deg);\n  }\n}\n@keyframes inBtm {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-9px) rotate(135deg);\n  }\n}\n@keyframes outBtm {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-9px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-9px) rotate(135deg);\n  }\n}\n.affix[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: #161618;\n}\n.sidepanel[_ngcontent-%COMP%] {\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  height: 250px;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 20px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  margin-top: 66px;\n}\n.sidepanel[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.sidepanel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0px 20px 20px 32px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #fff;\n  display: block;\n  transition: 0.3s;\n}\n.sidepanel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00E676 !important;\n}\n.sidepanel[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n}\n.openbtn[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #111;\n  color: white;\n  padding: 10px 15px;\n  border: none;\n}\n.openbtn[_ngcontent-%COMP%]:hover {\n  background-color: #444;\n}\n.l_img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.mobile_view_button[_ngcontent-%COMP%] {\n  font-size: 50px !important;\n  margin-right: 90px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUNSOztFQUVJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBR0EsbUJBQUE7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBREo7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUE7RUFDSSxjQUFBO0FBREo7QUFLQSxpQkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnTUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEseUJBQUE7QUFISjtBQU9BLHdCQUFBO0FBRUE7RUFDSTtJQUNJLFNBQUE7RUFMTjtBQUNGO0FBUUE7RUFDSTtJQUNJLGNBQUE7RUFOTjs7RUFRRTtJQUNJLGlCQUFBO0VBTE47O0VBT0U7SUFDSSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0VBSk47O0VBTUU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUhOOztFQUtFO0lBQ0ksc0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0NBQUE7SUFDQSwrQkFBQTtFQUZOOztFQUlFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VBRE47O0VBR0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtFQUFOOztFQUVFO0lBQ0ksY0FBQTtFQUNOO0FBQ0Y7QUFHQSxjQUFBO0FBR0EsK0ZBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQUpKO0FBT0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUpKO0FBT0E7RUFFSSw4QkFBQTtFQUVBLDRCQUFBO0FBSko7QUFPQTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtFQUVBLDRCQUFBO0FBSko7QUFPQTtFQUVJLGdDQUFBO0VBRUEsNEJBQUE7QUFKSjtBQU9BO0VBRUksNEJBQUE7QUFKSjtBQU9BO0VBRUksNEJBQUE7QUFKSjtBQU9BO0VBRUksOEJBQUE7QUFKSjtBQWdCQTtFQUNJO0lBQ0ksdUJBQUE7RUFMTjtFQU9FO0lBQ0ksd0JBQUE7RUFMTjtBQUNGO0FBaUJBO0VBQ0k7SUFDSSx1QkFBQTtFQVBOO0VBU0U7SUFDSSx3QkFBQTtFQVBOO0FBQ0Y7QUFzQkE7RUFDSTtJQUNJLHVDQUFBO0VBVE47RUFXRTtJQUNJLHVDQUFBO0VBVE47RUFXRTtJQUNJLHlDQUFBO0VBVE47QUFDRjtBQXdCQTtFQUNJO0lBQ0ksdUNBQUE7RUFYTjtFQWFFO0lBQ0ksdUNBQUE7RUFYTjtFQWFFO0lBQ0kseUNBQUE7RUFYTjtBQUNGO0FBMEJBO0VBQ0k7SUFDSSx1Q0FBQTtFQWJOO0VBZUU7SUFDSSx3Q0FBQTtFQWJOO0VBZUU7SUFDSSwwQ0FBQTtFQWJOO0FBQ0Y7QUE0QkE7RUFDSTtJQUNJLHVDQUFBO0VBZk47RUFpQkU7SUFDSSx3Q0FBQTtFQWZOO0VBaUJFO0lBQ0ksMENBQUE7RUFmTjtBQUNGO0FBa0JBO0VBQ0ksVUFBQTtFQUVBLHlCQUFBO0FBakJKO0FBcUJBO0VBQ0ksUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWxCSjtBQXFCQTtFQUNJLHFCQUFBO0FBbEJKO0FBcUJBO0VBQ0ksMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbEJKO0FBcUJBO0VBQ0kseUJBQUE7QUFsQko7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXFCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbEJKO0FBcUJBO0VBQ0ksc0JBQUE7QUFsQko7QUFzQkE7RUFDSSxXQUFBO0FBbkJKO0FBc0JBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQW5CSiIsImZpbGUiOiJuYXYuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjQwMCw1MDAsNzAwJyk7XHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBOYXZiYXIgc2VjdGlvbiAqL1xyXG5cclxuLm5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5uYXYgZGl2LmxvZ28ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxufVxyXG5cclxuLm5hdiBkaXYubG9nbyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubmF2IGRpdi5sb2dvIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMEU2NzY7XHJcbn1cclxuXHJcbi5uYXYgZGl2Lm1haW5fbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uYXYgZGl2Lm1haW5fbGlzdCB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBFNjc2O1xyXG59XHJcblxyXG5cclxuLyogSG9tZSBzZWN0aW9uICovXHJcblxyXG4uaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTg1NTA3NDQ5MjEtNzVmNzk4MDZiOGE3P2l4bGliPXJiLTAuMy41Jml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmcz1iMGY2OTA4ZmE1ZTgxMjg2MjEzYzcyMTEyNzZlNmIzZCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1MDAmcT04MCk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm5hdlRyaWdnZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG5cclxuXHJcbi8qIE1lZGlhIHF1cmV5IHNlY3Rpb24gKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5uYXZUcmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uYXYgZGl2LmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdiBkaXYubWFpbl9saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5uYXYgZGl2LnNob3dfbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgICAgIC8qc2FtZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIG5hdmJhciovXHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIH1cclxuICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkgYSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdiBkaXYubWVkaWFfYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuXHJcbi8qIEluc3BpcmF0aW9uIHRha2VuIGZyb20gRGljc29uIGh0dHBzOi8vY29kZW15dWkuY29tL3NpbXBsZS1oYW1idXJnZXItbWVudS14LW1hcmstYW5pbWF0aW9uLyAqL1xyXG5cclxuLm5hdlRyaWdnZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLm5hdlRyaWdnZXIgaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRUIDAuOHMgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBvdXRUIDAuOHMgYmFja3dhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxufVxyXG5cclxuLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRNIDAuOHMgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBvdXRNIDAuOHMgYmFja3dhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxufVxyXG5cclxuLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG91dEJ0bSAwLjhzIGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjogb3V0QnRtIDAuOHMgYmFja3dhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxufVxyXG5cclxuLm5hdlRyaWdnZXIuYWN0aXZlIGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpblQgMC44cyBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogaW5UIDAuOHMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5NIDAuOHMgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGluTSAwLjhzIGZvcndhcmRzO1xyXG59XHJcblxyXG4ubmF2VHJpZ2dlci5hY3RpdmUgaTpudGgtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGluQnRtIDAuOHMgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGluQnRtIDAuOHMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbk0ge1xyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5NIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRNIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG91dE0ge1xyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluVCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpblQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRUIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG91dFQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbkJ0bSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluQnRtIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRCdG0ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvdXRCdG0ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmFmZml4IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMiwgMjQpO1xyXG59XHJcblxyXG4vLyBuZXdcclxuLnNpZGVwYW5lbCB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcblxyXG4uc2lkZXBhbmVsPmxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNpZGVwYW5lbCBhIHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZXBhbmVsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMEU2NzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVwYW5lbCAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5vcGVuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5vcGVuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi8vIFxyXG4ubF9pbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5tb2JpbGVfdmlld19idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'top-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBp-MidoWWtt6rIqfpZ-oIoi1zTv-OjxjI",
        authDomain: "ewumesh-cf0ac.firebaseapp.com",
        projectId: "ewumesh-cf0ac",
        storageBucket: "ewumesh-cf0ac.appspot.com",
        messagingSenderId: "665073898824",
        appId: "1:665073898824:web:1995da1ac838dda3784f7d",
        measurementId: "G-SFVR4S939Q"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BKWt":
/*!**********************************************************************!*\
  !*** ./src/app/modules/404/access-denied/access-denied.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AccessDeniedComponent {
    constructor() { }
    ngOnInit() { }
}
AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) { return new (t || AccessDeniedComponent)(); };
AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessDeniedComponent, selectors: [["ng-component"]], decls: 17, vars: 0, consts: [[1, "bg-dark", "text-white", "py-5", 2, "height", "100vh", "padding-top", "200px !important"], [1, "container", "py-5"], [1, "row"], [1, "col-md-2", "text-center"], [1, "fa", "fa-exclamation-triangle", "fa-5x"], [1, "col-md-10"], ["href", "#", 1, "btn", "btn-danger"]], template: function AccessDeniedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status Code: 403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "OPPSSS!!!! Sorry...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sorry, your access is refused due to security reasons of our server and also our sensitive data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please go back to the previous page to continue browsing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  margin-left: 530px;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjZXNzLWRlbmllZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiYWNjZXNzLWRlbmllZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTMwcHg7XHJcbiAgICBib3R0b206IDBweFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './access-denied.component.html',
                styleUrls: ['./access-denied.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HZax":
/*!**********************************************!*\
  !*** ./src/app/modules/404/404.component.ts ***!
  \**********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["ng-component"]], decls: 26, vars: 0, consts: [["charset", "UTF-8"], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css?family=Lato"), "rel", "stylesheet"], ["id", "container", 2, "padding-top", "250px !important"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 200 82.7", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 200 82.7"], ["id", "Calque_1"], ["id", "XMLID_3_", "transform", "matrix(1.2187 0 0 1 13 75.6393)", 1, "st0", "st1"], ["id", "XMLID_4_", "transform", "matrix(1.2187 0 0 1 133.0003 73.6393)", 1, "st0", "st1"], ["id", "Calque_2"], ["id", "XMLID_11_", "d", "M81.8,29.2c4.1-5.7,10.7-9.4,18.3-9.4c6.3,0,12.1,2.7,16.1,6.9c0.6-0.4,1.1-0.7,1.7-1.1\n\t\tc-4.4-4.8-10.8-7.9-17.8-7.9c-8.3,0-15.6,4.2-20,10.6C80.7,28.5,81.3,28.8,81.8,29.2z"], ["id", "XMLID_2_", "d", "M118.1,53.7c-4,5.7-10.7,9.5-18.2,9.5c-6.3,0-12.1-2.6-16.2-6.8c-0.6,0.4-1.1,0.7-1.7,1.1\n\t\tc4.4,4.8,10.8,7.8,17.9,7.8c8.3,0,15.6-4.3,19.9-10.7C119.2,54.5,118.6,54.1,118.1,53.7z"], ["attributeName", "transform", "type", "rotate", "from", "360 100 41.3", "to", "0 100 41.3", "dur", "10s", "repeatCount", "indefinite"], ["id", "XMLID_6_"], ["id", "XMLID_18_"], ["cx", "100", "cy", "41", "r", "1", 1, "circle"], ["id", "blurFilter4", "x", "-20", "y", "-20", "width", "200", "height", "200"], ["in", "SourceGraphic", "stdDeviation", "2"], ["id", "XMLID_5_", "d", "M103.8,16.7c0.1,0.3,0.1,0.6,0.1,0.9c11.6,1.9,20.4,11.9,20.4,24.1c0,13.5-10.9,24.4-24.4,24.4\n  S75.6,55.1,75.6,41.7c0-3.2,0.6-6.3,1.7-9.1c-0.3-0.2-0.5-0.3-0.7-0.5c-1.2,3-1.9,6.2-1.9,9.6c0,14,11.3,25.3,25.3,25.3\n  s25.3-11.3,25.3-25.3C125.3,29,115.9,18.5,103.8,16.7z", 1, "st2"], [1, "message"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "animateTransform", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feGaussianBlur", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Page not found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.st0[_ngcontent-%COMP%] {\n  font-family: \"FootlightMTLight\";\n}\n\n.st1[_ngcontent-%COMP%] {\n  font-size: 83.0285px;\n}\n\n.st2[_ngcontent-%COMP%] {\n  fill: gray;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  text-align: center;\n  fill: #16a085;\n}\n\npath#XMLID_5_[_ngcontent-%COMP%] {\n  fill: #16a085;\n  filter: url(#blurFilter4);\n}\n\npath#XMLID_11_[_ngcontent-%COMP%], path#XMLID_2_[_ngcontent-%COMP%] {\n  fill: #16a085;\n}\n\n.circle[_ngcontent-%COMP%] {\n  animation: out 2s infinite ease-out;\n  fill: #16a085;\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.message[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n\n.message[_ngcontent-%COMP%]:after {\n  content: \"]\";\n}\n\n.message[_ngcontent-%COMP%]:before {\n  content: \"[\";\n}\n\n.message[_ngcontent-%COMP%]:after, .message[_ngcontent-%COMP%]:before {\n  color: #16a085;\n  font-size: 20px;\n  -webkit-animation-name: opacity;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-name: opacity;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  margin: 0 50px;\n}\n\n@keyframes opacity {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes out {\n  0% {\n    r: 1;\n    opacity: 0.9;\n  }\n  25% {\n    r: 5;\n    opacity: 0.3;\n  }\n  50% {\n    r: 10;\n    opacity: 0.2;\n  }\n  75% {\n    r: 15;\n    opacity: 0.1;\n  }\n  100% {\n    r: 20;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFw0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBOztFQUVJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUVBLHVCQUFBO0VBRUEsc0JBQUE7RUFFQSxtQ0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFZQTtFQUNJO0lBRUksVUFBQTtFQUZOO0VBSUU7SUFDSSxVQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksSUFBQTtJQUNBLFlBQUE7RUFITjtFQUtFO0lBQ0ksSUFBQTtJQUNBLFlBQUE7RUFITjtFQUtFO0lBQ0ksS0FBQTtJQUNBLFlBQUE7RUFITjtFQUtFO0lBQ0ksS0FBQTtJQUNBLFlBQUE7RUFITjtFQUtFO0lBQ0ksS0FBQTtJQUNBLFVBQUE7RUFITjtBQUNGIiwiZmlsZSI6IjQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5zdDAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGb290bGlnaHRNVExpZ2h0JztcclxufVxyXG5cclxuLnN0MSB7XHJcbiAgICBmb250LXNpemU6IDgzLjAyODVweDtcclxufVxyXG5cclxuLnN0MiB7XHJcbiAgICBmaWxsOiBncmF5O1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZpbGw6ICMxNmEwODU7XHJcbn1cclxuXHJcbnBhdGgjWE1MSURfNV8ge1xyXG4gICAgZmlsbDogIzE2YTA4NTtcclxuICAgIGZpbHRlcjogdXJsKCNibHVyRmlsdGVyNCk7XHJcbn1cclxuXHJcbnBhdGgjWE1MSURfMTFfLFxyXG5wYXRoI1hNTElEXzJfIHtcclxuICAgIGZpbGw6ICMxNmEwODU7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgYW5pbWF0aW9uOiBvdXQgMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgICBmaWxsOiAjMTZhMDg1O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICMxNmEwODU7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXVwiO1xyXG59XHJcblxyXG4ubWVzc2FnZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJbXCI7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmFmdGVyLFxyXG4ubWVzc2FnZTpiZWZvcmUge1xyXG4gICAgY29sb3I6ICMxNmEwODU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgcjogMTtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIHI6IDU7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICByOiAxMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICAgIHI6IDE1O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHI6IDIwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './404.component.html',
                styleUrls: ['./404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MEuP":
/*!************************************************************!*\
  !*** ./src/app/modules/scroll-top/scroll-top.component.ts ***!
  \************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




const _c0 = function (a0) { return { "show-scrollTop": a0 }; };
class ScrollTopComponent {
    constructor(document) {
        this.document = document;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() { }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 3, consts: [[1, "scroll-to-top", 3, "ngClass"], [1, "btn", "btn-danger", "scroll_top_button", 3, "click"], [1, "fa", "fa-arrow-up"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_1_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], styles: [".scroll-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    opacity: 0;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.show-scrollTop[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.scroll_top_button[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 100px;\r\n    background-color: #00E676 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNjcm9sbC10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zaG93LXNjcm9sbFRvcCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNjcm9sbF90b3BfYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBFNjc2ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "Neet":
/*!***************************************************************!*\
  !*** ./src/app/shred/validations/snackbar/snackbar.module.ts ***!
  \***************************************************************/
/*! exports provided: SnackbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarModule", function() { return SnackbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snackbar.component */ "t8So");






class SnackbarModule {
}
SnackbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SnackbarModule });
SnackbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SnackbarModule_Factory(t) { return new (t || SnackbarModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SnackbarModule, { declarations: [_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                exports: [_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "NpyV":
/*!*******************************************!*\
  !*** ./src/app/modules/nav/nav.module.ts ***!
  \*******************************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component */ "0tfL");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");





class NavModule {
}
NavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavModule });
NavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavModule_Factory(t) { return new (t || NavModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavModule, { declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]], exports: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
                ],
                exports: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _route_transition_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-transition-animations */ "jJ8u");
/* harmony import */ var _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav/nav.component */ "0tfL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-top/scroll-top.component */ "MEuP");






class AppComponent {
    constructor() {
        this.title = 'ewumesh';
    }
    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 77, vars: 1, consts: [["o", "outlet"], [1, "footer_bg"], [1, "my-container"], [1, "row", "f_row"], [1, "col-md-4", "text-left"], [1, "f_name"], [1, "footer_p"], [1, "col-md-2"], [1, "f_links"], ["href", "Javascript:;"], [1, "col-md-3"], [1, "text-left", "copyright"], [1, "s_icon"], ["href", "https://www.youtube.com/channel/UCHlF-J937VlQBsphDmSGuFw"], [1, "fa", "fa-youtube-square", "ml-1", "mr-1", "s_icon", "s_youtube"], ["href", "https://www.twitter.com/ewumesh"], [1, "fa", "fa-twitter-square", "ml-1", "mr-1", "s_icon", "s_twitter"], ["href", "https://www.instagram.com/ewumesh"], [1, "fa", "fa-instagram", "ml-1", "mr-1", "s_icon", "s_instagram"], ["href", "https://www.facebook.com/ewumesh"], [1, "fa", "fa-facebook-square", "ml-1", "mr-1", "s_icon", "s_facebook"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-scroll-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "EWUMESH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quick links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Offers and discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Latest blogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Web Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our society");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Frequently asked questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Report a issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Copyright \u00A92021, Ewumesh. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getRouterOutletState(_r0));
    } }, directives: [_modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _modules_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopComponent"]], styles: [".my-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n    box-sizing: border-box;\r\n    background-color: rgb(22, 22, 24);\r\n    padding: 2% 0;\r\n}\r\n\r\n.f_name[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n\r\n.f_links[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    text-align: left;\r\n    padding: 0;\r\n}\r\n\r\n.f_links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 5px 0 !important;\r\n}\r\n\r\n.f_links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: rgb(69, 97, 121);\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0px);\r\n}\r\n\r\n.f_links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    transform: translateX(10px);\r\n}\r\n\r\n.s_icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.s_icon[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    display: inline;\r\n}\r\n\r\n.s_icon[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.footer_bg[_ngcontent-%COMP%] {\r\n    background-color: rgb(22, 22, 24) !important;\r\n}\r\n\r\n.f_row[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n}\r\n\r\n.footer_p[_ngcontent-%COMP%] {\r\n    color: rgb(69, 97, 121);\r\n    line-height: 30px;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n    color: rgb(69, 97, 121);\r\n}\r\n\r\n.s_youtube[_ngcontent-%COMP%] {\r\n    color: #FF0000 !important;\r\n    font-size: 25px;\r\n}\r\n\r\n.s_twitter[_ngcontent-%COMP%] {\r\n    color: #385898 !important;\r\n    font-size: 25px;\r\n}\r\n\r\n.s_instagram[_ngcontent-%COMP%] {\r\n    color: #ed4956 !important;\r\n    font-size: 25px;\r\n}\r\n\r\n.s_facebook[_ngcontent-%COMP%] {\r\n    color: #385898 !important;\r\n    font-size: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDIyLCAyNCk7XHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG59XHJcblxyXG4uZl9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZl9saW5rcyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZfbGlua3M+bGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZfbGlua3M+bGk+YSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDY5LCA5NywgMTIxKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxufVxyXG5cclxuLmZfbGlua3M+bGk+YTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxufVxyXG5cclxuLnNfaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zX2ljb24+bGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uc19pY29uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlcl9iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDIyLCAyNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZfcm93IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXJfcCB7XHJcbiAgICBjb2xvcjogcmdiKDY5LCA5NywgMTIxKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiByZ2IoNjksIDk3LCAxMjEpO1xyXG59XHJcblxyXG4uc195b3V0dWJlIHtcclxuICAgIGNvbG9yOiAjRkYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5zX3R3aXR0ZXIge1xyXG4gICAgY29sb3I6ICMzODU4OTggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnNfaW5zdGFncmFtIHtcclxuICAgIGNvbG9yOiAjZWQ0OTU2ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5zX2ZhY2Vib29rIHtcclxuICAgIGNvbG9yOiAjMzg1ODk4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0iXX0= */"], data: { animation: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [_route_transition_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TcFV":
/*!********************************************************!*\
  !*** ./src/app/modules/authentication/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class AuthService {
    constructor(db) {
        this.db = db;
        this.currentUser = false;
    }
    isLogged() {
        return this.currentUser;
    }
    getAllUsers() {
        this.usersList = this.db.list('users');
        return this.usersList.snapshotChanges();
    }
    addUser(body) {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('users').push({ content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    deleteUser(key) {
        let k = key;
        this.db.list('users').remove(k);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    logOut() {
        return this.currentUser = false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "Uzdw":
/*!*********************************************************!*\
  !*** ./src/app/modules/scroll-top/scroll-top.module.ts ***!
  \*********************************************************/
/*! exports provided: ScrollTopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopModule", function() { return ScrollTopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-top.component */ "MEuP");





class ScrollTopModule {
}
ScrollTopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollTopModule });
ScrollTopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollTopModule_Factory(t) { return new (t || ScrollTopModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollTopModule, { declarations: [_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]], exports: [_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"]
                ],
                exports: [_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nav/nav.module */ "NpyV");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _shred_validations_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shred/validations/snackbar/snackbar.module */ "Neet");
/* harmony import */ var _modules_404_404_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/404/404.module */ "iYIW");
/* harmony import */ var _modules_scroll_top_scroll_top_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll-top/scroll-top.module */ "Uzdw");
/* harmony import */ var _modules_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/authentication/auth.service */ "TcFV");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route.guard */ "eQqx");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_modules_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _route_guard__WEBPACK_IMPORTED_MODULE_13__["AlwaysAuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _modules_scroll_top_scroll_top_module__WEBPACK_IMPORTED_MODULE_8__["ScrollTopModule"],
            _shred_validations_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_6__["SnackbarModule"],
            _modules_404_404_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _modules_scroll_top_scroll_top_module__WEBPACK_IMPORTED_MODULE_8__["ScrollTopModule"],
        _shred_validations_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_6__["SnackbarModule"],
        _modules_404_404_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _modules_scroll_top_scroll_top_module__WEBPACK_IMPORTED_MODULE_8__["ScrollTopModule"],
                    _shred_validations_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_6__["SnackbarModule"],
                    _modules_404_404_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"]
                ],
                providers: [_modules_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _route_guard__WEBPACK_IMPORTED_MODULE_13__["AlwaysAuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/404/404.component */ "HZax");
/* harmony import */ var _modules_404_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/404/access-denied/access-denied.component */ "BKWt");
/* harmony import */ var _modules_404_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/404/page-not-found.component */ "ouTI");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route.guard */ "eQqx");








const routes = [
    { path: 'login', loadChildren: () => Promise.all(/*! import() | modules-authentication-login-login-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~c9bcb68f"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-modul~4c29961c"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~e094aa64"), __webpack_require__.e("default~modules-authentication-login-login-module~modules-authentication-sign-up-sign-up-module"), __webpack_require__.e("modules-authentication-login-login-module")]).then(__webpack_require__.bind(null, /*! ./modules/authentication/login/login.module */ "GCxG")).then(r => r.LoginModule) },
    { path: 'register', loadChildren: () => Promise.all(/*! import() | modules-authentication-sign-up-sign-up-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~c9bcb68f"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~e094aa64"), __webpack_require__.e("default~modules-authentication-login-login-module~modules-authentication-sign-up-sign-up-module"), __webpack_require__.e("modules-authentication-sign-up-sign-up-module")]).then(__webpack_require__.bind(null, /*! ./modules/authentication/sign-up/sign-up.module */ "XUkN")).then(r => r.SignUpModule) },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | modules-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-home-home-module")]).then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "iydT")).then(r => r.HomeModule) },
    { path: 'profile', loadChildren: () => Promise.all(/*! import() | modules-profile-profile-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~c9bcb68f"), __webpack_require__.e("modules-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./modules/profile/profile.module */ "Lvw3")).then(r => r.ProfileModule) },
    { path: 'admin', children: [
            { path: 'team', canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["AlwaysAuthGuard"]], loadChildren: () => Promise.all(/*! import() | modules-admin-team-team-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~c9bcb68f"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-modul~4c29961c"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~e094aa64"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-module"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-admin-team-team-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin/team/team.module */ "2/Cs")).then(r => r.TeamModule) },
            { path: 'users', loadChildren: () => Promise.all(/*! import() | modules-admin-users-user-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-modul~4c29961c"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-module"), __webpack_require__.e("modules-admin-users-user-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin/users/user.module */ "NlOH")).then(r => r.UserModule) },
            { path: 'blogs', canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["AlwaysAuthGuard"]], loadChildren: () => Promise.all(/*! import() | modules-admin-blog-blog-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~c9bcb68f"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-modul~4c29961c"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~e094aa64"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-admin-users-user-module"), __webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-admin-blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./modules/admin/blog/blog.module */ "s09p")).then(r => r.BlogModule) },
            { path: 'user-response', canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["AlwaysAuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | modules-admin-user-response-user-response-module */ "modules-admin-user-response-user-response-module").then(__webpack_require__.bind(null, /*! ./modules/admin/user-response/user-response.module */ "As8w")).then(r => r.UserResponseModule) },
        ] },
    { path: 'blogs', loadChildren: () => Promise.all(/*! import() | modules-blog-view-blog-view-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-blog-view-blog-view-module")]).then(__webpack_require__.bind(null, /*! ./modules/blog-view/blog-view.module */ "75mK")).then(b => b.BlogViewModule) },
    { path: 'contact', loadChildren: () => Promise.all(/*! import() | modules-contact-contact-us-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("modules-contact-contact-us-module")]).then(__webpack_require__.bind(null, /*! ./modules/contact/contact-us.module */ "FCti")).then(b => b.ContactUSModule) },
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | modules-about-about-module */ "modules-about-about-module").then(__webpack_require__.bind(null, /*! ./modules/about/about.module */ "Afwt")).then(b => b.AboutModule) },
    { path: 'view', loadChildren: () => Promise.all(/*! import() | modules-blog-view-individual-individual-view-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-blog-view-individual-individual-view-module")]).then(__webpack_require__.bind(null, /*! ./modules/blog-view/individual/individual-view.module */ "jzfu")).then(b => b.IndividualViewModule) },
    { path: 'live-chat', canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["AlwaysAuthGuard"]], loadChildren: () => Promise.all(/*! import() | modules-chat-chat-module */[__webpack_require__.e("default~modules-admin-blog-blog-module~modules-admin-team-team-module~modules-authentication-login-l~2ed3fbf0"), __webpack_require__.e("modules-chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./modules/chat/chat.module */ "CgF7")).then(b => b.ChatModule) },
    { path: '404', component: _modules_404_404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
    { path: 'notfound', component: _modules_404_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: 'access-denied', component: _modules_404_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' },
    { path: '*', redirectTo: 'notfound' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eQqx":
/*!********************************!*\
  !*** ./src/app/route.guard.ts ***!
  \********************************/
/*! exports provided: AlwaysAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlwaysAuthGuard", function() { return AlwaysAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AlwaysAuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        let data = JSON.parse(localStorage.getItem('logged'));
        if (data !== null) {
            if (data.content.role === 'admin') {
                return true;
            }
            // else {
            //     return this.router.parseUrl('/404');
            //     // return false;
            // }
            // if(data.content.role !== 'admin') {
            //     return this.router.navigate(['/access-denied']);
            // }
        }
    }
}
AlwaysAuthGuard.ɵfac = function AlwaysAuthGuard_Factory(t) { return new (t || AlwaysAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlwaysAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlwaysAuthGuard, factory: AlwaysAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlwaysAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "iYIW":
/*!*******************************************!*\
  !*** ./src/app/modules/404/404.module.ts ***!
  \*******************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.component */ "HZax");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "ouTI");
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "BKWt");






class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "jJ8u":
/*!************************************************!*\
  !*** ./src/app/route-transition-animations.ts ***!
  \************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "ouTI":
/*!*********************************************************!*\
  !*** ./src/app/modules/404/page-not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    goto() {
        this.router.navigate(['/home']);
    }
    ngOnInit() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["ng-component"]], decls: 17, vars: 0, consts: [[1, "body"], ["width", "380px", "height", "500px", "viewBox", "0 0 837 1045", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd", 0, "sketch", "type", "MSPage"], ["d", "M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z", "id", "Polygon-1", "stroke", "#007FB2", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z", "id", "Polygon-2", "stroke", "#EF4A5B", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z", "id", "Polygon-3", "stroke", "#795D9C", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z", "id", "Polygon-4", "stroke", "#F2773F", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], ["d", "M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z", "id", "Polygon-5", "stroke", "#36B455", "stroke-width", "6", 0, "sketch", "type", "MSShapeGroup"], [1, "message-box"], [1, "buttons-con"], [1, "action-link-wrap"], ["href", "", 1, "link-button", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_15_listener() { return ctx.goto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go to Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%] {\n  background-color: #2F3242;\n  min-height: 100vh !important;\n}\n\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -400px;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 380px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: 50px;\n  color: #FFF;\n  font-family: Roboto;\n  font-weight: 300;\n}\n\n.message-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  line-height: 46px;\n  margin-bottom: 40px;\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #68c950;\n  padding: 8px 25px;\n  border-radius: 4px;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 14px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  text-decoration: none;\n  margin-right: 10px;\n}\n\n.buttons-con[_ngcontent-%COMP%]   .action-link-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #5A5C6C;\n  color: #fff;\n}\n\n#Polygon-1[_ngcontent-%COMP%], #Polygon-2[_ngcontent-%COMP%], #Polygon-3[_ngcontent-%COMP%], #Polygon-4[_ngcontent-%COMP%], #Polygon-4[_ngcontent-%COMP%], #Polygon-5[_ngcontent-%COMP%] {\n  animation: float 1s infinite ease-in-out alternate;\n}\n\n#Polygon-2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n\n#Polygon-3[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\n\n#Polygon-4[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n\n#Polygon-5[_ngcontent-%COMP%] {\n  animation-delay: 0.8s;\n}\n\n@keyframes float {\n  100% {\n    transform: translateY(20px);\n  }\n}\n\n@media (max-width: 450px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -250px;\n    margin-left: -190px;\n  }\n\n  .message-box[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;\n    margin-left: -190px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOzs7Ozs7RUFNSSxrREFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksMkJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUFOOztFQUVFO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGMzI0MjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJveCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJveCBoMSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb24gLmFjdGlvbi1saW5rLXdyYXAgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjhjOTUwO1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1QTVDNkM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI1BvbHlnb24tMSxcclxuI1BvbHlnb24tMixcclxuI1BvbHlnb24tMyxcclxuI1BvbHlnb24tNCxcclxuI1BvbHlnb24tNCxcclxuI1BvbHlnb24tNSB7XHJcbiAgICBhbmltYXRpb246IGZsb2F0IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZTtcclxufVxyXG5cclxuI1BvbHlnb24tMiB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC4ycztcclxufVxyXG5cclxuI1BvbHlnb24tMyB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC40cztcclxufVxyXG5cclxuI1BvbHlnb24tNCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC42cztcclxufVxyXG5cclxuI1BvbHlnb24tNSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC44cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE5MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtYm94IHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "t8So":
/*!******************************************************************!*\
  !*** ./src/app/shred/validations/snackbar/snackbar.component.ts ***!
  \******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class SnackbarComponent {
    constructor(sbRef, data) {
        this.sbRef = sbRef;
        this.data = data;
    }
    ngOnInit() { }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-basic-snackbar"]], decls: 6, vars: 1, consts: [[1, "snack"], [1, "mb-4"], [1, "dismiss"], ["mat-icon-button", "", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_4_listener() { return ctx.sbRef.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: [".snack[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-basic-snackbar",
                templateUrl: "./snackbar.component.html",
                styleUrls: ["./snackbar.component.css"]
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map