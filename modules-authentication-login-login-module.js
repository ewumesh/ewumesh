(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-authentication-login-login-module"],{

/***/ "3nk5":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/authentication/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shred/validations/generic-validators */ "9Q/d");
/* harmony import */ var _shred_validations_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shred/validations/regex */ "xCwu");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ForgotPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.displayMessage == null ? null : ctx_r0.displayMessage.email);
} }
class ForgotPasswordComponent {
    constructor(fb, snackbar, dialogRef) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.displayMessage = {};
        this.genericValidator = new _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"]({
            'email': {
                'required': 'This field is required.',
                'pattern': 'Please enter valid email address'
            }
        });
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.forgotPasswordForm = this.fb.group({
            id: 0,
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shred_validations_regex__WEBPACK_IMPORTED_MODULE_3__["Regex"].emailRegex)]]
        });
    }
    ngAfterViewInit() {
        this.validation();
    }
    validation() {
        this.genericValidator
            .initValidationProcess(this.forgotPasswordForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }
    sumbit() {
        setTimeout(() => {
            this.dialogRef.close();
            this.snackbar.open('Please check your email.', 'Close', {
                duration: 1000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
            });
        }, 1500);
    }
    cancel() {
        this.dialogRef.close();
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["ng-component"]], viewQuery: function ForgotPasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
    } }, decls: 18, vars: 3, consts: [[1, "row", "p-3"], [1, "col-md-12", "text-center"], [2, "font-size", "13px"], ["autocomplete", "off", 1, "pt-4", 3, "formGroup", "ngSubmit"], [1, "login_field", "pb-3", 2, "width", "90%"], [1, "input_label"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "Enter your email"], ["class", "font-danger", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "ml-3", 3, "click"], [1, "font-danger"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Forgot Your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Don't worry! Just fill in your email and we will send you a link to reset your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.sumbit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordComponent_mat_error_11_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.forgotPasswordForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, { formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "GCxG":
/*!**************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.component */ "ipBw");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "3nk5");














// import { AuthService } from '../auth.service';
class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] }
            ]),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] }
                    ]),
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]
                ],
                exports: [],
                // providers: [AuthService],
                entryComponents: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ipBw":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shred/validations/generic-validators */ "9Q/d");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "3nk5");
/* harmony import */ var _src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/app/shred/validations/snackbar/snackbar.component */ "t8So");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "TcFV");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");


















function LoginComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.displayMessage == null ? null : ctx_r0.displayMessage.userName);
} }
function LoginComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayMessage == null ? null : ctx_r1.displayMessage.password);
} }
function LoginComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, dialog, router, snackbarService, authService, db) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.snackbarService = snackbarService;
        this.authService = authService;
        this.db = db;
        this.horizontalPosition = 'right';
        this.verticalPosition = 'top';
        this.isLoading = false;
        this.users = [];
        this.displayMessage = {};
        this.genericValidator = new _shred_validations_generic_validators__WEBPACK_IMPORTED_MODULE_3__["GenericValidator"]({
            'userName': {
                'required': 'This field is required.'
            },
            'password': {
                'required': 'This field is required.'
            }
        });
    }
    ngOnInit() {
        this.initForm();
        this.getListOfUsers();
    }
    getListOfUsers() {
        this.authService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(_ => {
            this.users = _;
        });
    }
    initForm() {
        this.loginForm = this.fb.group({
            id: 0,
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.validation();
    }
    validation() {
        this.genericValidator
            .initValidationProcess(this.loginForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }
    saveChanges() {
        this.isLoading = true;
        let a = this.users.find(_ => _.content.email === this.loginForm.value.userName && _.content.password === this.loginForm.value.password);
        if (a !== undefined) {
            setTimeout(() => {
                this.snackbarService.openFromComponent(_src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
                    data: 'User Login Successfully.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                });
                this.authService.currentUser = true;
                this.authService.logged = a.key;
                localStorage.setItem("logged", JSON.stringify(a));
                this.router.navigate(['home']);
                window.location.reload();
            }, 400);
        }
        else {
            setTimeout(() => {
                this.snackbarService.openFromComponent(_src_app_shred_validations_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
                    data: 'Login username or password incorrect.',
                    duration: 5000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                });
            }, 400);
        }
    }
    forgotPassword() {
        const dialogRef = this.dialog.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], {
            height: '330px',
            width: '530px'
        });
    }
    signUp() {
        setTimeout(() => {
            this.router.navigate(['/register']);
        }, 400);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
    } }, decls: 38, vars: 6, consts: [["id", "home", 1, "login_page", "pb-4"], [1, "row", "m_o"], [1, "col-md-4"], [1, "login_card"], [1, "text-center"], ["src", "assets/logo/e-logo.png", 1, "login_img"], [1, "row"], [1, "col-md-12", "text-center", "login_form"], ["autocomplete", "off", 1, "example-form", 3, "formGroup", "ngSubmit"], [1, "login_field"], [1, "input_label"], ["formControlName", "userName", "type", "email", "matInput", "", "placeholder", "Enter username"], ["class", "font-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "Enter Your Password"], [1, "row", "pt-3"], [1, "col-md-6", "text-left", "pl-4"], [1, "m_checkbox"], [1, "col-md-6", "text-left", "login_card_footer"], ["href", "Javascript:;", 1, "forgot_password", 3, "click"], [1, "col-md", "12", "text-center", "pt-3"], [1, "login_btn", "login_btn-5", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "col-md-12", "text-center", "pt-4"], [1, "f_text"], ["id", "reg", "href", "Javascript:;", 3, "click"], [1, "font-danger"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_25_listener() { return ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Forgot password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_span_30_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_35_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMessage == null ? null : ctx.displayMessage.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: [".login_card[_ngcontent-%COMP%] {\n  background-image: url('lo.jpg');\n  background-repeat: no-repeat;\n  justify-content: center;\n  background-size: cover;\n}\n\n.login_img[_ngcontent-%COMP%] {\n  height: 120px;\n  border-radius: 100%;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0;\n  background-repeat: no-repeat;\n  justify-content: center;\n  background-image: url('e-logo.png');\n}\n\n.login_form[_ngcontent-%COMP%] {\n  padding: 30px 50px 0 50px !important;\n}\n\n.login_field[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.login_card_footer[_ngcontent-%COMP%] {\n  padding-left: 33px;\n}\n\n.login_page[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  min-height: 105vh;\n  background: url(https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg);\n  background-size: cover;\n}\n\n@keyframes myanimation {\n  0% {\n    background-color: #501818;\n  }\n  25% {\n    background-color: #4e4e47;\n  }\n  50% {\n    background-color: #375537;\n  }\n  75% {\n    background-color: #3a2828;\n  }\n  100% {\n    background-color: #3d3535;\n  }\n  75% {\n    background-color: #525055;\n  }\n  50% {\n    background-color: #794871;\n  }\n  25% {\n    background-color: #210527;\n  }\n  0% {\n    background-color: #501818;\n  }\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  color: #000;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  margin: 0 auto 2em;\n  position: relative;\n  text-transform: uppercase;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.login_btn-5[_ngcontent-%COMP%] {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n}\n\n.login_btn-5[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-offset: 15px;\n  outline-color: rgba(255, 255, 255, 0);\n  text-shadow: 1px 1px 2px #427388;\n}\n\n.forgot_password[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-style: italic;\n  font-family: serif;\n}\n\n.forgot_password[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transition: color 0.8s ease-in;\n  color: #00E676;\n}\n\n.input_label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.m_o[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.m_checkbox[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #fff;\n}\n\n.f_text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n#reg[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0272f1 !important;\n}\n\n#reg[_ngcontent-%COMP%]:hover {\n  color: #00E676 !important;\n  text-decoration: none;\n  transition: color 0.8s ease-in-out;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  padding: 0 auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 10px solid transparent;\n  border-top-color: #00E676;\n  border-radius: 50%;\n  animation: spinnerOne 1.2s linear infinite;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 10px solid transparent;\n  border-bottom-color: #00E676;\n  animation: spinnerTwo 1.2s linear infinite;\n}\n\n@keyframes spinnerOne {\n  0% {\n    transform: rotate(0deg);\n    border-width: 10px;\n  }\n  50% {\n    transform: rotate(180deg);\n    border-width: 1px;\n  }\n  100% {\n    transform: rotate(360deg);\n    border-width: 10px;\n  }\n}\n\n@keyframes spinnerTwo {\n  0% {\n    transform: rotate(0deg);\n    border-width: 1px;\n  }\n  50% {\n    transform: rotate(180deg);\n    border-width: 10px;\n  }\n  100% {\n    transform: rotate(360deg);\n    border-width: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0VBRUEsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBRUEsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFHQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBTEo7O0FBUUE7RUFDSSxvQ0FBQTtBQUxKOztBQVFBO0VBQ0ksVUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFRQTtFQU9JLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRkFBQTtFQUNBLHNCQUFBO0FBWEo7O0FBZUE7RUFDSTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47RUFjRTtJQUNJLHlCQUFBO0VBWk47QUFDRjs7QUFlQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFpQ0E7RUFDSSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHFEQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxpQkFBQTtFQUNBLHNGQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBOUJKOztBQWlDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQTlCSjs7QUFpQ0E7RUFDSSxXQUFBO0FBOUJKOztBQWlDQTtFQUNJLG9CQUFBO0FBOUJKOztBQWlDQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQTlCSjs7QUFpQ0E7RUFDSSxXQUFBO0FBOUJKOztBQWlDQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUE5Qko7O0FBaUNBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBOUJKOztBQWtDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBL0JKOztBQWtDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBL0JKOztBQWtDQTtFQUNJLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtBQS9CSjs7QUFrQ0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0Esa0JBQUE7RUEvQk47RUFpQ0U7SUFDSSx5QkFBQTtJQUNBLGlCQUFBO0VBL0JOO0VBaUNFO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtFQS9CTjtBQUNGOztBQWtDQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxpQkFBQTtFQWhDTjtFQWtDRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7RUFoQ047RUFrQ0U7SUFDSSx5QkFBQTtJQUNBLGlCQUFBO0VBaENOO0FBQ0YiLCJmaWxlIjoibG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9jYXJkIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BleGVscy1ldmllLXNoYWZmZXItNDAwNDM3NC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sby5qcGcnKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMEU2NzY7XHJcbn1cclxuXHJcbi5sb2dpbl9pbWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC8vIHdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9sb2dvL2UtbG9nby5wbmcnKTtcclxufVxyXG5cclxuLmxvZ2luX2Zvcm0ge1xyXG4gICAgcGFkZGluZzogMzBweCA1MHB4IDAgNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW5fZmllbGQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmxvZ2luX2NhcmRfZm9vdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzNweDtcclxufVxyXG5cclxuLmxvZ2luX3BhZ2Uge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAvLyBjb2xvcjogYmxhY2s7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwNXZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS1waG90by9zaGlueS1saWdodHNfMzg1LTE5MzIxMjQ0LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gYW5pbWF0aW9uOiBteWFuaW1hdGlvbiAxMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbXlhbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMjQsIDI0KTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzEpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDg1LCA1NSk7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNDAsIDQwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNTMsIDUzKTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MCwgODUpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCA3MiwgMTEzKTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCA1LCAzOSk7XHJcbiAgICB9XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAyNCwgMjQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW5fYnRuIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbi8vICAgICAubG9naW5fYnRuIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5sb2dpbl9idG46bnRoLW9mLXR5cGUoZXZlbikge1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuLy8gICAgIC5sb2dpbl9idG46bnRoLW9mLXR5cGUoZXZlbikge1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMi41ZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAubG9naW5fYnRuOm50aC1vZi10eXBlKDUpIHtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLmxvZ2luX2J0bi01IHtcclxuICAgIGJvcmRlcjogMCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQ7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDBweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTI1MG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMjUwbXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDBweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bi01OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMTVweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzQyNzM4ODtcclxufVxyXG5cclxuLmZvcmdvdF9wYXNzd29yZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxufVxyXG5cclxuLmZvcmdvdF9wYXNzd29yZDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjhzIGVhc2UtaW47XHJcbiAgICBjb2xvcjogIzAwRTY3NjtcclxufVxyXG5cclxuLmlucHV0X2xhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubV9vIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubV9jaGVja2JveCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZl90ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jcmVnPmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyLCAxMTQsIDI0MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3JlZzpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwRTY3NiFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vLyBidXR0b24gc3Bpbm5lclxyXG4uc3Bpbm5lciB7XHJcbiAgICBwYWRkaW5nOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNwaW5uZXIgZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDBFNjc2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyT25lIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMEU2NzY7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXJUd28gMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lck9uZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lclR3byB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './login.component.html',
                styleUrls: ['./login.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] }]; }, { formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-authentication-login-login-module.js.map