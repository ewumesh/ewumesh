(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-sign-up-sign-up-module"],{

/***/ "XUkN":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/sign-up/sign-up.module.ts ***!
  \******************************************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up.component */ "gwj8");












// import { AuthService } from '../auth.service';
class SignUpModule {
}
SignUpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignUpModule });
SignUpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignUpModule_Factory(t) { return new (t || SignUpModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"] }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignUpModule, { declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"] }
                    ]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
                ],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "gwj8":
/*!*********************************************************************!*\
  !*** ./src/app/modules/authentication/sign-up/sign-up.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shred/validations/generic-validators */ "9Q/d");
/* harmony import */ var _shred_validations_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shred/validations/regex */ "xCwu");
/* harmony import */ var src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shred/validations/snackbar/snackbar.component */ "t8So");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "TcFV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");















function SignUpComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.displayMessage == null ? null : ctx_r0.displayMessage.email);
} }
function SignUpComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayMessage == null ? null : ctx_r1.displayMessage.password);
} }
function SignUpComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.displayMessage == null ? null : ctx_r2.displayMessage.confirmPassword);
} }
function SignUpComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password doesn't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(fb, router, snackbarService, authService) {
        this.fb = fb;
        this.router = router;
        this.snackbarService = snackbarService;
        this.authService = authService;
        this.isLoading = false;
        this.users = [];
        this.displayMessage = {};
        this.genericValidator = new _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"]({
            'email': {
                'required': 'This field is required.',
                'pattern': 'Please enter valid email address.'
            },
            'password': {
                'required': 'This field is required.'
            },
            'confirmPassword': {
                'required': 'This field is required.'
            }
        });
    }
    ngOnInit() {
        this.initForm();
        this.getListOfUsers();
    }
    getListOfUsers() {
        this.authService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(_ => {
            this.users = _;
        });
    }
    initForm() {
        this.signupForm = this.fb.group({
            id: 0,
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shred_validations_regex__WEBPACK_IMPORTED_MODULE_3__["Regex"].emailRegex)]],
            role: 'user',
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordConfirming });
    }
    validation() {
        this.genericValidator
            .initValidationProcess(this.signupForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }
    passwordConfirming(c) {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalid: true };
        }
    }
    ngAfterViewInit() {
        this.validation();
    }
    saveChanges() {
        this.isLoading = true;
        let a = this.users.find(_ => _.content.email === this.signupForm.value.email);
        if (a === undefined) {
            this.authService.addUser(this.signupForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(400)).subscribe(_ => {
                this.router.navigate(['/home']);
                this.snackbarService.openFromComponent(src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], {
                    data: 'User registered successfully.',
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.isLoading = false;
                this.router.navigate(['/login']);
            });
        }
        else {
            this.snackbarService.openFromComponent(src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], {
                data: 'User already registered.',
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
            this.isLoading = false;
        }
    }
    login() {
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 400);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["ng-component"]], viewQuery: function SignUpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
    } }, decls: 37, vars: 8, consts: [["id", "home", 1, "signup_page", "pb-4"], [1, "row", "m_0"], [1, "col-md-4"], [1, "signup_card"], [1, "text-center"], ["src", "assets/logo/e-logo.png", 1, "login_img"], [1, "row"], [1, "col-md-12", "text-center", "signup_form"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "max-width"], [1, "input_label"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "Enter username"], ["class", "font-danger", 4, "ngIf"], [1, "max-width", "pt-3"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "Enter Your Password"], ["formControlName", "confirmPassword", "type", "password", "matInput", "", "placeholder", "Re-enter your password"], ["class", "wrong_password", 4, "ngIf"], [1, "col-md", "12", "text-center", "pt-3"], [1, "signup_btn", "signup_btn-5", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "col-md-12", "text-center", "pt-4"], [1, "already"], ["href", "Javascript:;", 1, "s_login", 3, "click"], [1, "font-danger"], [1, "wrong_password"], [1, "spinner"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_9_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignUpComponent_mat_error_14_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_mat_error_19_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_mat_error_24_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_p_25_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignUpComponent_span_29_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignUpComponent_div_30_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_34_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.errors == null ? null : ctx.signupForm.errors.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".signup_img[_ngcontent-%COMP%] {\n  height: 120px;\n  border-radius: 100%;\n}\n\n.signup_card[_ngcontent-%COMP%] {\n  background-image: url('lo.jpg');\n  background-repeat: no-repeat;\n  justify-content: center;\n  background-size: cover;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0;\n  background-repeat: no-repeat;\n  justify-content: center;\n  background-image: url('e-logo.png');\n}\n\n.signup_page[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  min-height: 100vh;\n  background: url(https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg);\n  background-size: cover;\n}\n\n@keyframes myanimation {\n  0% {\n    background-color: #501818;\n  }\n  25% {\n    background-color: #4e4e47;\n  }\n  50% {\n    background-color: #375537;\n  }\n  75% {\n    background-color: #3a2828;\n  }\n  100% {\n    background-color: #3d3535;\n  }\n  75% {\n    background-color: #525055;\n  }\n  50% {\n    background-color: #794871;\n  }\n  25% {\n    background-color: #210527;\n  }\n  0% {\n    background-color: #501818;\n  }\n}\n\n.input_label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.signup_btn[_ngcontent-%COMP%] {\n  color: #000;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  margin: 0 auto 2em;\n  position: relative;\n  text-transform: uppercase;\n  vertical-align: middle;\n  width: 100%;\n}\n\n@media (min-width: 400px) {\n  .signup_btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 2.5em;\n  }\n\n  .signup_btn[_ngcontent-%COMP%]:nth-of-type(even) {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 600px) {\n  .signup_btn[_ngcontent-%COMP%]:nth-of-type(even) {\n    margin-right: 2.5em;\n  }\n\n  .signup_btn[_ngcontent-%COMP%]:nth-of-type(5) {\n    margin-right: 0;\n  }\n}\n\n.signup_btn-5[_ngcontent-%COMP%] {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n}\n\n.signup_btn-5[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-offset: 15px;\n  outline-color: rgba(255, 255, 255, 0);\n  text-shadow: 1px 1px 2px #427388;\n}\n\n.m_0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.max-width[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\n\n.wrong_password[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding-left: 10% !important;\n  color: #f44336;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.already[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.s_login[_ngcontent-%COMP%] {\n  color: #0272f1 !important;\n  text-decoration: none;\n}\n\n.s_login[_ngcontent-%COMP%]:hover {\n  color: #00E676 !important;\n  text-decoration: none;\n  transition: color 0.8s ease-in-out;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  padding: 0 auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 10px solid transparent;\n  border-top-color: #00E676;\n  border-radius: 50%;\n  animation: spinnerOne 1.2s linear infinite;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 10px solid transparent;\n  border-bottom-color: #00E676;\n  animation: spinnerTwo 1.2s linear infinite;\n}\n\n@keyframes spinnerOne {\n  0% {\n    transform: rotate(0deg);\n    border-width: 10px;\n  }\n  50% {\n    transform: rotate(180deg);\n    border-width: 1px;\n  }\n  100% {\n    transform: rotate(360deg);\n    border-width: 10px;\n  }\n}\n\n@keyframes spinnerTwo {\n  0% {\n    transform: rotate(0deg);\n    border-width: 1px;\n  }\n  50% {\n    transform: rotate(180deg);\n    border-width: 10px;\n  }\n  100% {\n    transform: rotate(360deg);\n    border-width: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbi11cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0FBQUo7O0FBR0E7RUFHSSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUdBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBUUE7RUFDSTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47RUFPRTtJQUNJLHlCQUFBO0VBTE47QUFDRjs7QUFRQTtFQUNJLFdBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtFQU5OOztFQVFFO0lBQ0ksZUFBQTtFQUxOO0FBQ0Y7O0FBUUE7RUFDSTtJQUNJLG1CQUFBO0VBTk47O0VBUUU7SUFDSSxlQUFBO0VBTE47QUFDRjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEscURBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLHNGQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBTko7O0FBU0E7RUFDSSxTQUFBO0FBTko7O0FBU0E7RUFDSSxxQkFBQTtBQU5KOztBQVNBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNBO0VBQ0ksc0JBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0VBR0EscUJBQUE7QUFSSjs7QUFXQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQVJKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBVEo7O0FBWUE7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QUFUSjs7QUFZQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxrQkFBQTtFQVROO0VBV0U7SUFDSSx5QkFBQTtJQUNBLGlCQUFBO0VBVE47RUFXRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7RUFUTjtBQUNGOztBQVlBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLGlCQUFBO0VBVk47RUFZRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7RUFWTjtFQVlFO0lBQ0kseUJBQUE7SUFDQSxpQkFBQTtFQVZOO0FBQ0YiLCJmaWxlIjoic2lnbi11cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cF9pbWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC8vIHdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWdudXBfY2FyZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMEU2NzY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG8uanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAvLyB3aWR0aDogMTgwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbG9nby9lLWxvZ28ucG5nJyk7XHJcbn1cclxuXHJcbi5zaWdudXBfcGFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vc2hpbnktbGlnaHRzXzM4NS0xOTMyMTI0NC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGFuaW1hdGlvbjogbXlhbmltYXRpb24gMTBzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG15YW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDI0LCAyNCk7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDcxKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA4NSwgNTUpO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDQwLCA0MCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDUzLCA1Myk7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODAsIDg1KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgNzIsIDExMyk7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgNSwgMzkpO1xyXG4gICAgfVxyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMjQsIDI0KTtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0X2xhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lnbnVwX2J0biB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnNpZ251cF9idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG4gICAgfVxyXG4gICAgLnNpZ251cF9idG46bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2lnbnVwX2J0bjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuICAgIH1cclxuICAgIC5zaWdudXBfYnRuOm50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWdudXBfYnRuLTUge1xyXG4gICAgYm9yZGVyOiAwIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZDtcclxuICAgIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMjUwbXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEyNTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwX2J0bi01OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMTVweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzQyNzM4ODtcclxufVxyXG5cclxuLm1fMCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud3JvbmdfcGFzc3dvcmQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbi5hbHJlYWR5IHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zX2xvZ2luIHtcclxuICAgIGNvbG9yOiByZ2IoMiwgMTE0LCAyNDEpICFpbXBvcnRhbnQ7XHJcbiAgICA7XHJcbiAgICAvLyBjb2xvcjojMDBFNjc2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc19sb2dpbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwRTY3NiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC44cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLy8gYnV0dG9uIHNwaW5uZXJcclxuLnNwaW5uZXIge1xyXG4gICAgcGFkZGluZzogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zcGlubmVyIGRpdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwRTY3NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lck9uZSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNwaW5uZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBFNjc2O1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyVHdvIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXJPbmUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXJUd28ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, { formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-authentication-sign-up-sign-up-module.js.map