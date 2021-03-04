(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-chat-chat-module"],{

/***/ "CgF7":
/*!*********************************************!*\
  !*** ./src/app/modules/chat/chat.module.ts ***!
  \*********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.component */ "bZ0P");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.service */ "Kuf2");








class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, providers: [_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] }
                    ]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [],
                providers: [_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Kuf2":
/*!**********************************************!*\
  !*** ./src/app/modules/chat/chat.service.ts ***!
  \**********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class ChatService {
    constructor(db) {
        this.db = db;
    }
    sendMessage(body) {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('liveChat').push({ content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    getAllMessages() {
        this.chats = this.db.list('liveChat');
        return this.chats.snapshotChanges();
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "bZ0P":
/*!************************************************!*\
  !*** ./src/app/modules/chat/chat.component.ts ***!
  \************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.service */ "Kuf2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ChatComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r2.content.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r2.content.currentTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r2.content.message, " ");
} }
function ChatComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.content.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.content.currentTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r3.content.message, " ");
} }
class ChatComponent {
    constructor(fb, chatService) {
        this.fb = fb;
        this.chatService = chatService;
        this.loggedUser = JSON.parse(localStorage.getItem('logged'));
        this.chats = [];
        this.individualChat = [];
        this.another = [];
        this.initForm();
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.chatService.getAllMessages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(_ => {
            this.chats = _;
            let a = this.chats.filter(_ => _.content.name === this.loggedUser.content.email);
            this.individualChat = a;
            let b = this.chats.filter(_ => _.content.name !== this.loggedUser.content.email);
            this.another = b;
        });
    }
    initForm() {
        this.chatForm = this.fb.group({
            id: 0,
            message: null,
            currentTime: Date.now(),
            name: this.loggedUser.content.email,
        });
    }
    saveChanges() {
        console.log(this.chatForm.value);
        this.chatService.sendMessage(this.chatForm.value).subscribe(_ => {
            console.log('Message sent!!!');
        });
        this.chatForm.setValue({
            id: null,
            message: null,
            currentTime: null,
            name: null
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["ng-component"]], decls: 19, vars: 3, consts: [[2, "height", "100vh", "background", "url(https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg)", "background-repeat", "no-repeat", "background-size", "cover", "padding-top", "100px"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "msger"], [1, "msger-header"], [1, "msger-header-title"], [1, "fas", "fa-comment-alt"], [1, "msger-header-options"], [1, "fas", "fa-cog"], [1, "msger-chat"], ["class", "msg left-msg", 4, "ngFor", "ngForOf"], ["class", "msg right-msg", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 1, "msger-inputarea", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "message", "placeholder", "Enter your message...", 1, "msger-input"], ["type", "submit", 1, "msger-send-btn"], [1, "msg", "left-msg"], [1, "msg-img", 2, "background-image", "url(https://image.flaticon.com/icons/svg/327/327779.svg)"], [1, "msg-bubble"], [1, "msg-info"], [1, "msg-info-name"], [1, "msg-info-time"], [1, "msg-text"], [1, "msg", "right-msg"], [1, "msg-img", 2, "background-image", "url(https://image.flaticon.com/icons/svg/145/145867.svg)"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SimpleChat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatComponent_div_13_Template, 10, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatComponent_div_14_Template, 10, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_15_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.another);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.individualChat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".msger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  width: 100%;\n  margin: 25px 10px;\n  height: calc(100% - 50px);\n  border: var(--border);\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\n}\n\n.msger-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 2px solid #ddd;\n  background: #eee;\n  color: #666;\n}\n\n.msger-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #bdbdbd;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.msg[_ngcontent-%COMP%]:last-of-type {\n  margin: 0;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  background: #ddd;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 450px;\n  padding: 15px;\n  border-radius: 15px;\n  background: #ececec;\n}\n\n.msg-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.msg-info-name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.msg-info-time[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n\n.left-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: #579ffb;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-img[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n}\n\n.msger-inputarea[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  border-top: 2px solid #ddd;\n  background: #eee;\n}\n\n.msger-inputarea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  font-size: 1em;\n}\n\n.msger-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #ddd;\n}\n\n.msger-send-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background: #00c441;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.23s;\n}\n\n.msger-send-btn[_ngcontent-%COMP%]:hover {\n  background: #00b432;\n}\n\n.msger-chat[_ngcontent-%COMP%] {\n  background-color: #fcfcfe;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSwwdFRBQUE7QUFBSiIsImZpbGUiOiJjaGF0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1heC13aWR0aDogODY3cHg7XHJcbiAgICBtYXJnaW46IDI1cHggMTBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5tc2dlci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLm1zZ2VyLWNoYXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubXNnZXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLm1zZ2VyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5tc2dlci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXNnOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tc2ctaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubXNnLWJ1YmJsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG59XHJcblxyXG4ubXNnLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXNnLWluZm8tbmFtZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1zZy1pbmZvLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbi5sZWZ0LW1zZyAubXNnLWJ1YmJsZSB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ucmlnaHQtbXNnIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLnJpZ2h0LW1zZyAubXNnLWJ1YmJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTc5ZmZiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLnJpZ2h0LW1zZyAubXNnLWltZyB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5tc2dlci1pbnB1dGFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5tc2dlci1pbnB1dGFyZWEgKiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5tc2dlci1pbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLm1zZ2VyLXNlbmQtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE5NiwgNjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yM3M7XHJcbn1cclxuXHJcbi5tc2dlci1zZW5kLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTgwLCA1MCk7XHJcbn1cclxuXHJcbi5tc2dlci1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI2MCcgaGVpZ2h0PScyNjAnIHZpZXdCb3g9JzAgMCAyNjAgMjYwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZGRkZGRkJyBmaWxsLW9wYWNpdHk9JzAuNCclM0UlM0NwYXRoIGQ9J00yNC4zNyAxNmMuMi42NS4zOSAxLjMyLjU0IDJIMjEuMTdsMS4xNyAyLjM0LjQ1LjktLjI0LjExVjI4YTUgNSAwIDAgMS0yLjIzIDguOTRsLS4wMi4wNmE4IDggMCAwIDEtNy43NSA2aC0yMGE4IDggMCAwIDEtNy43NC02bC0uMDItLjA2QTUgNSAwIDAgMS0xNy40NSAyOHYtNi43NmwtLjc5LTEuNTgtLjQ0LS45LjktLjQ0LjYzLS4zMkgtMjBhMjMuMDEgMjMuMDEgMCAwIDEgNDQuMzctMnptLTM2LjgyIDJhMSAxIDAgMCAwLS40NC4xbC0zLjEgMS41Ni44OSAxLjc5IDEuMzEtLjY2YTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjkgMGwyLjIxLTEuMWEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC45IDBsMi4yMS0xLjFhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuODYuMDJsMi44OC0xLjI3YTMgMyAwIDAgMSAyLjQzIDBsMi44OCAxLjI3YTEgMSAwIDAgMCAuODUtLjAybDMuMS0xLjU1LS44OS0xLjc5LTEuNDIuNzFhMyAzIDAgMCAxLTIuNTYuMDZsLTIuNzctMS4yM2ExIDEgMCAwIDAtLjQtLjA5aC0uMDFhMSAxIDAgMCAwLS40LjA5bC0yLjc4IDEuMjNhMyAzIDAgMCAxLTIuNTYtLjA2bC0yLjMtMS4xNWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxYTEgMSAwIDAgMC0uNDQuMUwuOSAxOS4yMmEzIDMgMCAwIDEtMi42OSAwbC0yLjItMS4xYTEgMSAwIDAgMC0uNDUtLjExaC0uMDFhMSAxIDAgMCAwLS40NC4xbC0yLjIxIDEuMTFhMyAzIDAgMCAxLTIuNjkgMGwtMi4yLTEuMWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxem0wLTJoLTQuOWEyMS4wMSAyMS4wMSAwIDAgMSAzOS42MSAwaC0yLjA5bC0uMDYtLjEzLS4yNi4xM2gtMzIuMzF6bTMwLjM1IDcuNjhsMS4zNi0uNjhoMS4zdjJoLTM2di0xLjE1bC4zNC0uMTcgMS4zNi0uNjhoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjY5IDBsMS4zNi0uNjhoMi41OWwxLjM2LjY4YTMgMyAwIDAgMCAyLjY5IDBMMi4yNiAyM2gyLjU5bDEuMzYuNjhhMyAzIDAgMCAwIDIuNTYuMDZsMS42Ny0uNzRoMy4yM2wxLjY3Ljc0YTMgMyAwIDAgMCAyLjU2LS4wNnpNLTEzLjgyIDI3bDE2LjM3IDQuOTFMMTguOTMgMjdoLTMyLjc1em0tLjYzIDJoLjM0bDE2LjY2IDUgMTYuNjctNWguMzNhMyAzIDAgMSAxIDAgNmgtMzRhMyAzIDAgMSAxIDAtNnptMS4zNSA4YTYgNiAwIDAgMCA1LjY1IDRoMjBhNiA2IDAgMCAwIDUuNjYtNEgtMTMuMXonLyUzRSUzQ3BhdGggaWQ9J3BhdGg2X2ZpbGwtY29weScgZD0nTTI4NC4zNyAxNmMuMi42NS4zOSAxLjMyLjU0IDJIMjgxLjE3bDEuMTcgMi4zNC40NS45LS4yNC4xMVYyOGE1IDUgMCAwIDEtMi4yMyA4Ljk0bC0uMDIuMDZhOCA4IDAgMCAxLTcuNzUgNmgtMjBhOCA4IDAgMCAxLTcuNzQtNmwtLjAyLS4wNmE1IDUgMCAwIDEtMi4yNC04Ljk0di02Ljc2bC0uNzktMS41OC0uNDQtLjkuOS0uNDQuNjMtLjMySDI0MGEyMy4wMSAyMy4wMSAwIDAgMSA0NC4zNy0yem0tMzYuODIgMmExIDEgMCAwIDAtLjQ0LjFsLTMuMSAxLjU2Ljg5IDEuNzkgMS4zMS0uNjZhMyAzIDAgMCAxIDIuNjkgMGwyLjIgMS4xYTEgMSAwIDAgMCAuOSAwbDIuMjEtMS4xYTMgMyAwIDAgMSAyLjY5IDBsMi4yIDEuMWExIDEgMCAwIDAgLjkgMGwyLjIxLTEuMWEzIDMgMCAwIDEgMi42OSAwbDIuMiAxLjFhMSAxIDAgMCAwIC44Ni4wMmwyLjg4LTEuMjdhMyAzIDAgMCAxIDIuNDMgMGwyLjg4IDEuMjdhMSAxIDAgMCAwIC44NS0uMDJsMy4xLTEuNTUtLjg5LTEuNzktMS40Mi43MWEzIDMgMCAwIDEtMi41Ni4wNmwtMi43Ny0xLjIzYTEgMSAwIDAgMC0uNC0uMDloLS4wMWExIDEgMCAwIDAtLjQuMDlsLTIuNzggMS4yM2EzIDMgMCAwIDEtMi41Ni0uMDZsLTIuMy0xLjE1YTEgMSAwIDAgMC0uNDUtLjExaC0uMDFhMSAxIDAgMCAwLS40NC4xbC0yLjIxIDEuMTFhMyAzIDAgMCAxLTIuNjkgMGwtMi4yLTEuMWExIDEgMCAwIDAtLjQ1LS4xMWgtLjAxYTEgMSAwIDAgMC0uNDQuMWwtMi4yMSAxLjExYTMgMyAwIDAgMS0yLjY5IDBsLTIuMi0xLjFhMSAxIDAgMCAwLS40NS0uMTFoLS4wMXptMC0yaC00LjlhMjEuMDEgMjEuMDEgMCAwIDEgMzkuNjEgMGgtMi4wOWwtLjA2LS4xMy0uMjYuMTNoLTMyLjMxem0zMC4zNSA3LjY4bDEuMzYtLjY4aDEuM3YyaC0zNnYtMS4xNWwuMzQtLjE3IDEuMzYtLjY4aDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi42OSAwbDEuMzYtLjY4aDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi42OSAwbDEuMzYtLjY4aDIuNTlsMS4zNi42OGEzIDMgMCAwIDAgMi41Ni4wNmwxLjY3LS43NGgzLjIzbDEuNjcuNzRhMyAzIDAgMCAwIDIuNTYtLjA2ek0yNDYuMTggMjdsMTYuMzcgNC45MUwyNzguOTMgMjdoLTMyLjc1em0tLjYzIDJoLjM0bDE2LjY2IDUgMTYuNjctNWguMzNhMyAzIDAgMSAxIDAgNmgtMzRhMyAzIDAgMSAxIDAtNnptMS4zNSA4YTYgNiAwIDAgMCA1LjY1IDRoMjBhNiA2IDAgMCAwIDUuNjYtNEgyNDYuOXonLyUzRSUzQ3BhdGggZD0nTTE1OS41IDIxLjAyQTkgOSAwIDAgMCAxNTEgMTVoLTQyYTkgOSAwIDAgMC04LjUgNi4wMiA2IDYgMCAwIDAgLjAyIDExLjk2QTguOTkgOC45OSAwIDAgMCAxMDkgNDVoNDJhOSA5IDAgMCAwIDguNDgtMTIuMDIgNiA2IDAgMCAwIC4wMi0xMS45NnpNMTUxIDE3aC00MmE3IDcgMCAwIDAtNi4zMyA0aDU0LjY2YTcgNyAwIDAgMC02LjMzLTR6bS05LjM0IDI2YTguOTggOC45OCAwIDAgMCAzLjM0LTdoLTJhNyA3IDAgMCAxLTcgN2gtNC4zNGE4Ljk4IDguOTggMCAwIDAgMy4zNC03aC0yYTcgNyAwIDAgMS03IDdoLTQuMzRhOC45OCA4Ljk4IDAgMCAwIDMuMzQtN2gtMmE3IDcgMCAwIDEtNyA3aC03YTcgNyAwIDEgMSAwLTE0aDQyYTcgNyAwIDEgMSAwIDE0aC05LjM0ek0xMDkgMjdhOSA5IDAgMCAwLTcuNDggNEgxMDFhNCA0IDAgMSAxIDAtOGg1OGE0IDQgMCAwIDEgMCA4aC0uNTJhOSA5IDAgMCAwLTcuNDgtNGgtNDJ6Jy8lM0UlM0NwYXRoIGQ9J00zOSAxMTVhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZ6bTYtOGE2IDYgMCAxIDEtMTIgMCA2IDYgMCAwIDEgMTIgMHptLTMtMjl2LTJoOHYtNkg0MGE0IDQgMCAwIDAtNCA0djEwSDIybC0xLjMzIDQtLjY3IDJoMi4xOUwyNiAxMzBoMjZsMy44MS00MEg1OGwtLjY3LTJMNTYgODRINDJ2LTZ6bS00LTR2MTBoMlY3NGg4di0yaC04YTIgMiAwIDAgMC0yIDJ6bTIgMTJoMTQuNTZsLjY3IDJIMjIuNzdsLjY3LTJINDB6bTEzLjggNEgyNC4ybDMuNjIgMzhoMjIuMzZsMy42Mi0zOHonLyUzRSUzQ3BhdGggZD0nTTEyOSA5MmgtNnY0aC02djRoLTZ2MTRoLTNsLjI0IDIgMy43NiAzMmgzNmwzLjc2LTMyIC4yNC0yaC0zdi0xNGgtNnYtNGgtNnYtNGgtOHptMTggMjJ2LTEyaC00djRoM3Y4aDF6bS0zIDB2LTZoLTR2Nmg0em0tNiA2di0xNmgtNHYxOS4xN2MxLjYtLjcgMi45Ny0xLjggNC0zLjE3em0tNiAzLjhWMTAwaC00djIzLjhhMTAuMDQgMTAuMDQgMCAwIDAgNCAwem0tNi0uNjNWMTA0aC00djE2YTEwLjA0IDEwLjA0IDAgMCAwIDQgMy4xN3ptLTYtOS4xN3YtNmgtNHY2aDR6bS02IDB2LThoM3YtNGgtNHYxMmgxem0yNy0xMnYtNGgtNHY0aDN2NGgxdi00em0tNiAwdi04aC00djRoM3Y0aDF6bS02LTR2LTRoLTR2OGgxdi00aDN6bS02IDR2LTRoLTR2OGgxdi00aDN6bTcgMjRhMTIgMTIgMCAwIDAgMTEuODMtMTBoNy45MmwtMy41MyAzMGgtMzIuNDRsLTMuNTMtMzBoNy45MkExMiAxMiAwIDAgMCAxMzAgMTI2eicvJTNFJTNDcGF0aCBkPSdNMjEyIDg2djJoLTR2LTJoNHptNCAwaC0ydjJoMnYtMnptLTIwIDB2LjFhNSA1IDAgMCAwLS41NiA5LjY1bC4wNi4yNSAxLjEyIDQuNDhhMiAyIDAgMCAwIDEuOTQgMS41MmguMDFsNy4wMiAyNC41NWEyIDIgMCAwIDAgMS45MiAxLjQ1aDQuOThhMiAyIDAgMCAwIDEuOTItMS40NWw3LjAyLTI0LjU1YTIgMiAwIDAgMCAxLjk1LTEuNTJMMjI0LjUgOTZsLjA2LS4yNWE1IDUgMCAwIDAtLjU2LTkuNjVWODZhMTQgMTQgMCAwIDAtMjggMHptNCAwaDZ2MmgtOWEzIDMgMCAxIDAgMCA2SDIyM2EzIDMgMCAxIDAgMC02SDIyMHYtMmgyYTEyIDEyIDAgMSAwLTI0IDBoMnptLTEuNDQgMTRsLTEtNGgyNC44OGwtMSA0aC0yMi44OHptOC45NSAyNmwtNi44Ni0yNGgxOC43bC02Ljg2IDI0aC00Ljk4ek0xNTAgMjQyYTIyIDIyIDAgMSAwIDAtNDQgMjIgMjIgMCAwIDAgMCA0NHptMjQtMjJhMjQgMjQgMCAxIDEtNDggMCAyNCAyNCAwIDAgMSA0OCAwem0tMjguMzggMTcuNzNsMi4wNC0uODdhNiA2IDAgMCAxIDQuNjggMGwyLjA0Ljg3YTIgMiAwIDAgMCAyLjUtLjgybDEuMTQtMS45YTYgNiAwIDAgMSAzLjc5LTIuNzVsMi4xNS0uNWEyIDIgMCAwIDAgMS41NC0yLjEybC0uMTktMi4yYTYgNiAwIDAgMSAxLjQ1LTQuNDZsMS40NS0xLjY3YTIgMiAwIDAgMCAwLTIuNjJsLTEuNDUtMS42N2E2IDYgMCAwIDEtMS40NS00LjQ2bC4yLTIuMmEyIDIgMCAwIDAtMS41NS0yLjEzbC0yLjE1LS41YTYgNiAwIDAgMS0zLjgtMi43NWwtMS4xMy0xLjlhMiAyIDAgMCAwLTIuNS0uOGwtMi4wNC44NmE2IDYgMCAwIDEtNC42OCAwbC0yLjA0LS44N2EyIDIgMCAwIDAtMi41LjgybC0xLjE0IDEuOWE2IDYgMCAwIDEtMy43OSAyLjc1bC0yLjE1LjVhMiAyIDAgMCAwLTEuNTQgMi4xMmwuMTkgMi4yYTYgNiAwIDAgMS0xLjQ1IDQuNDZsLTEuNDUgMS42N2EyIDIgMCAwIDAgMCAyLjYybDEuNDUgMS42N2E2IDYgMCAwIDEgMS40NSA0LjQ2bC0uMiAyLjJhMiAyIDAgMCAwIDEuNTUgMi4xM2wyLjE1LjVhNiA2IDAgMCAxIDMuOCAyLjc1bDEuMTMgMS45YTIgMiAwIDAgMCAyLjUuOHptMi44Mi45N2E0IDQgMCAwIDEgMy4xMiAwbDIuMDQuODdhNCA0IDAgMCAwIDQuOTktMS42MmwxLjE0LTEuOWE0IDQgMCAwIDEgMi41My0xLjg0bDIuMTUtLjVhNCA0IDAgMCAwIDMuMDktNC4yNGwtLjItMi4yYTQgNCAwIDAgMSAuOTctMi45OGwxLjQ1LTEuNjdhNCA0IDAgMCAwIDAtNS4yNGwtMS40NS0xLjY3YTQgNCAwIDAgMS0uOTctMi45N2wuMi0yLjJhNCA0IDAgMCAwLTMuMDktNC4yNWwtMi4xNS0uNWE0IDQgMCAwIDEtMi41My0xLjg0bC0xLjE0LTEuOWE0IDQgMCAwIDAtNS0xLjYybC0yLjAzLjg3YTQgNCAwIDAgMS0zLjEyIDBsLTIuMDQtLjg3YTQgNCAwIDAgMC00Ljk5IDEuNjJsLTEuMTQgMS45YTQgNCAwIDAgMS0yLjUzIDEuODRsLTIuMTUuNWE0IDQgMCAwIDAtMy4wOSA0LjI0bC4yIDIuMmE0IDQgMCAwIDEtLjk3IDIuOThsLTEuNDUgMS42N2E0IDQgMCAwIDAgMCA1LjI0bDEuNDUgMS42N2E0IDQgMCAwIDEgLjk3IDIuOTdsLS4yIDIuMmE0IDQgMCAwIDAgMy4wOSA0LjI1bDIuMTUuNWE0IDQgMCAwIDEgMi41MyAxLjg0bDEuMTQgMS45YTQgNCAwIDAgMCA1IDEuNjJsMi4wMy0uODd6TTE1MiAyMDdhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem02IDJhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tMTEgMWExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS02IDBhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0zLTVhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tOCA4YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptMyA2YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptMCA2YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNCA3YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNS0yYTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNSA0YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNC02YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptNi00YTEgMSAwIDEgMSAyIDAgMSAxIDAgMCAxLTIgMHptLTQtM2ExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTQtM2ExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bS01LTRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0tMjQgNmExIDEgMCAxIDEgMiAwIDEgMSAwIDAgMS0yIDB6bTE2IDVhNSA1IDAgMSAwIDAtMTAgNSA1IDAgMCAwIDAgMTB6bTctNWE3IDcgMCAxIDEtMTQgMCA3IDcgMCAwIDEgMTQgMHptODYtMjlhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTE5IDlhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptLTE0IDVhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bS0yNSAxYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem01IDRhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTkgMGExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0xNSAxYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bTEyLTJhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bS0xMS0xNGExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0tMTkgMGExIDEgMCAwIDAgMCAyaDJhMSAxIDAgMCAwIDAtMmgtMnptNiA1YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bS0yNSAxNWMwLS40Ny4wMS0uOTQuMDMtMS40YTUgNSAwIDAgMS0xLjctOCAzLjk5IDMuOTkgMCAwIDEgMS44OC01LjE4IDUgNSAwIDAgMSAzLjQtNi4yMiAzIDMgMCAwIDEgMS40Ni0xLjA1IDUgNSAwIDAgMSA3Ljc2LTMuMjdBMzAuODYgMzAuODYgMCAwIDEgMjQ2IDE4NGM2Ljc5IDAgMTMuMDYgMi4xOCAxOC4xNyA1Ljg4YTUgNSAwIDAgMSA3Ljc2IDMuMjcgMyAzIDAgMCAxIDEuNDcgMS4wNSA1IDUgMCAwIDEgMy40IDYuMjIgNCA0IDAgMCAxIDEuODcgNS4xOCA0Ljk4IDQuOTggMCAwIDEtMS43IDhjLjAyLjQ2LjAzLjkzLjAzIDEuNHYxaC02MnYtMXptLjgzLTcuMTdhMzAuOSAzMC45IDAgMCAwLS42MiAzLjU3IDMgMyAwIDAgMS0uNjEtNC4yYy4zNy4yOC43OC40OSAxLjIzLjYzem0xLjQ5LTQuNjFjLS4zNi44Ny0uNjggMS43Ni0uOTYgMi42OGEyIDIgMCAwIDEtLjIxLTMuNzFjLjMzLjQuNzMuNzUgMS4xNyAxLjAzem0yLjMyLTQuNTRjLS41NC44Ni0xLjAzIDEuNzYtMS40OSAyLjY4YTMgMyAwIDAgMS0uMDctNC42NyAzIDMgMCAwIDAgMS41NiAxLjk5em0xLjE0LTEuN2MuMzUtLjUuNzItLjk4IDEuMS0xLjQ2YTEgMSAwIDEgMC0xLjEgMS40NXptNS4zNC01Ljc3Yy0xLjAzLjg2LTIgMS43OS0yLjkgMi43N2EzIDMgMCAwIDAtMS4xMS0uNzcgMyAzIDAgMCAxIDQtMnptNDIuNjYgMi43N2MtLjktLjk4LTEuODctMS45LTIuOS0yLjc3YTMgMyAwIDAgMSA0LjAxIDIgMyAzIDAgMCAwLTEuMS43N3ptMS4zNCAxLjU0Yy4zOC40OC43NS45NiAxLjEgMS40NWExIDEgMCAxIDAtMS4xLTEuNDV6bTMuNzMgNS44NGMtLjQ2LS45Mi0uOTUtMS44Mi0xLjUtMi42OGEzIDMgMCAwIDAgMS41Ny0xLjk5IDMgMyAwIDAgMS0uMDcgNC42N3ptMS44IDQuNTNjLS4yOS0uOS0uNi0xLjgtLjk3LTIuNjcuNDQtLjI4Ljg0LS42MyAxLjE3LTEuMDNhMiAyIDAgMCAxLS4yIDMuN3ptMS4xNCA1LjUxYy0uMTQtMS4yMS0uMzUtMi40LS42Mi0zLjU3LjQ1LS4xNC44Ni0uMzUgMS4yMy0uNjNhMi45OSAyLjk5IDAgMCAxLS42IDQuMnpNMjc1IDIxNGEyOSAyOSAwIDAgMC01Ny45NyAwaDU3Ljk2ek03Mi4zMyAxOTguMTJjLS4yMS0uMzItLjM0LS43LS4zNC0xLjEydi0xMmgtMnYxMmE0LjAxIDQuMDEgMCAwIDAgNy4wOSAyLjU0Yy41Ny0uNjkuOTEtMS41Ny45MS0yLjU0di0xMmgtMnYxMmExLjk5IDEuOTkgMCAwIDEtMiAyIDIgMiAwIDAgMS0xLjY2LS44OHpNNzUgMTc2Yy4zOCAwIC43NC0uMDQgMS4xLS4xMmE0IDQgMCAwIDAgNi4xOSAyLjRBMTMuOTQgMTMuOTQgMCAwIDEgODQgMTg1djI0YTYgNiAwIDAgMS02IDZoLTN2OWE1IDUgMCAxIDEtMTAgMHYtOWgtM2E2IDYgMCAwIDEtNi02di0yNGExNCAxNCAwIDAgMSAxNC0xNCA1IDUgMCAwIDAgNSA1em0tMTcgMTV2MTJhMS45OSAxLjk5IDAgMCAwIDEuMjIgMS44NCAyIDIgMCAwIDAgMi40NC0uNzJjLjIxLS4zMi4zNC0uNy4zNC0xLjEydi0xMmgydjEyYTMuOTggMy45OCAwIDAgMS01LjM1IDMuNzcgMy45OCAzLjk4IDAgMCAxLS42NS0uM1YyMDlhNCA0IDAgMCAwIDQgNGgxNmE0IDQgMCAwIDAgNC00di0yNGMuMDEtMS41My0uMjMtMi44OC0uNzItNC4xNy0uNDMuMS0uODcuMTYtMS4yOC4xN2E2IDYgMCAwIDEtNS4yLTMgNyA3IDAgMCAxLTYuNDctNC44OEExMiAxMiAwIDAgMCA1OCAxODV2NnptOSAyNHY5YTMgMyAwIDEgMCA2IDB2LTloLTZ6Jy8lM0UlM0NwYXRoIGQ9J00tMTcgMTkxYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem0xOSA5YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAySDNhMSAxIDAgMCAxLTEtMXptLTE0IDVhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bS0yNSAxYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem01IDRhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTJ6bTkgMGExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDAgMmgtMmExIDEgMCAwIDEtMS0xem0xNSAxYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bTEyLTJhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJINHptLTExLTE0YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMS0xLTF6bS0xOSAwYTEgMSAwIDAgMCAwIDJoMmExIDEgMCAwIDAgMC0yaC0yem02IDVhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAxLTEtMXptLTI1IDE1YzAtLjQ3LjAxLS45NC4wMy0xLjRhNSA1IDAgMCAxLTEuNy04IDMuOTkgMy45OSAwIDAgMSAxLjg4LTUuMTggNSA1IDAgMCAxIDMuNC02LjIyIDMgMyAwIDAgMSAxLjQ2LTEuMDUgNSA1IDAgMCAxIDcuNzYtMy4yN0EzMC44NiAzMC44NiAwIDAgMS0xNCAxODRjNi43OSAwIDEzLjA2IDIuMTggMTguMTcgNS44OGE1IDUgMCAwIDEgNy43NiAzLjI3IDMgMyAwIDAgMSAxLjQ3IDEuMDUgNSA1IDAgMCAxIDMuNCA2LjIyIDQgNCAwIDAgMSAxLjg3IDUuMTggNC45OCA0Ljk4IDAgMCAxLTEuNyA4Yy4wMi40Ni4wMy45My4wMyAxLjR2MWgtNjJ2LTF6bS44My03LjE3YTMwLjkgMzAuOSAwIDAgMC0uNjIgMy41NyAzIDMgMCAwIDEtLjYxLTQuMmMuMzcuMjguNzguNDkgMS4yMy42M3ptMS40OS00LjYxYy0uMzYuODctLjY4IDEuNzYtLjk2IDIuNjhhMiAyIDAgMCAxLS4yMS0zLjcxYy4zMy40LjczLjc1IDEuMTcgMS4wM3ptMi4zMi00LjU0Yy0uNTQuODYtMS4wMyAxLjc2LTEuNDkgMi42OGEzIDMgMCAwIDEtLjA3LTQuNjcgMyAzIDAgMCAwIDEuNTYgMS45OXptMS4xNC0xLjdjLjM1LS41LjcyLS45OCAxLjEtMS40NmExIDEgMCAxIDAtMS4xIDEuNDV6bTUuMzQtNS43N2MtMS4wMy44Ni0yIDEuNzktMi45IDIuNzdhMyAzIDAgMCAwLTEuMTEtLjc3IDMgMyAwIDAgMSA0LTJ6bTQyLjY2IDIuNzdjLS45LS45OC0xLjg3LTEuOS0yLjktMi43N2EzIDMgMCAwIDEgNC4wMSAyIDMgMyAwIDAgMC0xLjEuNzd6bTEuMzQgMS41NGMuMzguNDguNzUuOTYgMS4xIDEuNDVhMSAxIDAgMSAwLTEuMS0xLjQ1em0zLjczIDUuODRjLS40Ni0uOTItLjk1LTEuODItMS41LTIuNjhhMyAzIDAgMCAwIDEuNTctMS45OSAzIDMgMCAwIDEtLjA3IDQuNjd6bTEuOCA0LjUzYy0uMjktLjktLjYtMS44LS45Ny0yLjY3LjQ0LS4yOC44NC0uNjMgMS4xNy0xLjAzYTIgMiAwIDAgMS0uMiAzLjd6bTEuMTQgNS41MWMtLjE0LTEuMjEtLjM1LTIuNC0uNjItMy41Ny40NS0uMTQuODYtLjM1IDEuMjMtLjYzYTIuOTkgMi45OSAwIDAgMS0uNiA0LjJ6TTE1IDIxNGEyOSAyOSAwIDAgMC01Ny45NyAwaDU3Ljk2eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-chat-chat-module.js.map