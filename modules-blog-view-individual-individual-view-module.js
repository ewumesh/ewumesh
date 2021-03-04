(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-blog-view-individual-individual-view-module"],{

/***/ "ND3/":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blog-view/individual/individual-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndividualViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualViewComponent", function() { return IndividualViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _admin_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/blog/blog.service */ "9q6C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return ["/view"]; };
function IndividualViewComponent_article_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, a_r2.content.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("queryParams", a_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r2.content.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 10, a_r2.content.content, 0, 200), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", a_r2.content.headerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r2.content.author);
} }
function IndividualViewComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", b_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", b_r3.content.headerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", b_r3.content.title, " ");
} }
class IndividualViewComponent {
    constructor(blogService, router, _route) {
        this.blogService = blogService;
        this.router = router;
        this._route = _route;
        this.blogs = [];
    }
    ngOnInit() {
        this.subs$ = this._route
            .queryParams
            .subscribe((params) => {
            // this.memberName = params["name"];
            // this.individualBlog = this.blogs.find(_ => _.id === params)
            this.individualBlog = params;
        });
        this.getAllBlogs();
    }
    getAllBlogs() {
        this.blogService.getAllBlogs().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(_ => {
            this.blogs = _;
        });
    }
    // this is to kill the subscription
    ngOnDestroy() {
        if (this.subs$) {
            this.subs$.unsubscribe();
        }
    }
}
IndividualViewComponent.ɵfac = function IndividualViewComponent_Factory(t) { return new (t || IndividualViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
IndividualViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndividualViewComponent, selectors: [["ng-component"]], decls: 97, vars: 19, consts: [["id", "page-title", 1, "jumbotron", "background"], ["id", "title-image", 1, "bg"], ["alt", "", 3, "src"], [1, "container"], [1, "horizontal-center", "vertical-center"], [1, "article-title"], [1, "article-subtitle"], [1, "container", "foreground"], [1, "row"], [1, "col-lg-12"], [1, "bs-component"], [2, "letter-spacing", "-0.003em", "line-height", "32px", "font-size", "21px", "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"], [1, "p", 3, "innerHtml"], [1, "horizontal-center"], [1, "author"], ["href", "#"], ["src", "assets/images/team-2.jpg", 1, "author-image"], [1, "author-name"], [1, "date-published"], [1, "pager"], [1, "previous"], ["href", "Javascript:;"], [1, "pull-right", 2, "margin-bottom", "40px !important"], [1, "foreground", 2, "background-color", "#4a6e92"], ["class", "container article-preview pt-4", 4, "ngFor", "ngForOf"], [1, "container", "pt-4"], [1, "col-sm-4"], [1, "fa", "fa-leaf"], ["href", "https://umeshthapa12.github.io/ewumesh/"], [1, "social-cont"], [1, "fa-stack", "facebook"], [1, "fa", "fa-circle", "fa-stack-2x"], [1, "fa", "fa-facebook", "fa-stack-1x", "fa-inverse", "social-ico"], [1, "fa-stack", "twitter"], [1, "fa", "fa-twitter", "fa-stack-1x", "fa-inverse", "social-ico"], [1, "fa-stack", "google"], [1, "fa", "fa-google-plus", "fa-stack-1x", "fa-inverse", "social-ico"], [1, "fa-stack", "instagram"], [1, "fa", "fa-linkedin", "fa-stack-1x", "fa-inverse", "social-ico"], [1, "fa", "fa-newspaper-o"], [1, "recent-posts-cont"], [1, "image-list"], ["class", "table", 4, "ngFor", "ngForOf"], [1, "fa", "fa-tags"], [1, "tag-cont"], ["type", "submit", 1, "btn"], [1, "container", "article-preview", "pt-4"], [1, "col-sm-2"], [1, "publish-day"], [1, "col-sm-10"], [1, "post-title"], [2, "color", "#fff", 3, "routerLink", "queryParams"], [1, "post-preview"], [3, "innerHtml"], ["alt", "", 1, "author-image", 3, "src"], [1, "table"], [1, "table-row", 3, "routerLink", "queryParams"], [1, "vertical-center"], [1, "author-image", 3, "src"], [1, "vertical-center", "article-title"]], template: function IndividualViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u2190 Older");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Newer \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, IndividualViewComponent_article_33_Template, 18, 15, "article", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "www.umeshthapa12.github.io/ewumesh/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Nepal, Kathmandu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Durbarmarg, 44600 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, IndividualViewComponent_li_78_Template, 6, 5, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Surfing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Beaches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Gold Coast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.individualBlog.headerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.individualBlog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("--By ", ctx.individualBlog.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.individualBlog.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.individualBlog.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 8, ctx.individualBlog.date, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](34, 11, ctx.blogs, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](79, 15, ctx.blogs, 0, 3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n\n\n.horizontal-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n\n\n#navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-family: \"ubuntu\";\n}\n\n\n\n.bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n}\n\n.bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%;\n}\n\n#page-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: white;\n  background-color: #1f4a6f;\n  font-family: \"ubuntu\";\n  overflow: hidden;\n}\n\n#title-image[_ngcontent-%COMP%] {\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n  -moz-opacity: 0.8;\n}\n\n#page-title[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  min-height: 350px;\n  display: table;\n}\n\n#page-title[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%], #page-title[_ngcontent-%COMP%]   .article-subtitle[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 40px black;\n}\n\n\n\narticle[_ngcontent-%COMP%] {\n  font-family: \"roboto\";\n  font-size: 1.1em;\n}\n\narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"ubuntu\";\n}\n\n.author[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.author-image[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  border-radius: 100%;\n}\n\n.author-name[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n\n\n.pager[_ngcontent-%COMP%] {\n  font-family: \"ubuntu\";\n  list-style-type: none;\n}\n\n\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #0f171f;\n  padding-bottom: 40px;\n  margin-bottom: 0;\n  color: white;\n  font-family: \"roboto\";\n}\n\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"ubuntu\";\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #70a7d7;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #337ab7;\n}\n\n\n\n.social-cont[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n\n\n.image-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\n.image-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  display: table-row;\n}\n\n.image-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.image-list[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  padding-bottom: 6px;\n}\n\n\n\n.tag-cont[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-bottom: 7px;\n  color: #fff;\n}\n\n.tag-cont[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n\n.p[_ngcontent-%COMP%]::first-letter {\n  font-size: 200%;\n  color: #00E676;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5kaXZpZHVhbC12aWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUdBLDRCQUFBOztBQUVBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFLQSxXQUFBOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BLGVBQUE7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQVFBOztFQUVJLCtCQUFBO0FBTEo7O0FBU0EsWUFBQTs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFVQTs7RUFFSSxxQkFBQTtBQVBKOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdBLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtBQVBKOztBQVdBLFVBQUE7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FBVEo7O0FBYUEsV0FBQTs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQVhKOztBQWNBOztFQUVJLHFCQUFBO0FBWEo7O0FBY0E7RUFDSSxjQUFBO0FBWEo7O0FBY0E7RUFDSSxjQUFBO0FBWEo7O0FBZUEsdUJBQUE7O0FBRUE7RUFDSSxnQkFBQTtBQWJKOztBQWlCQSxlQUFBOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBZko7O0FBa0JBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWZKOztBQWtCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBZko7O0FBa0JBO0VBQ0ksbUJBQUE7QUFmSjs7QUFtQkEsYUFBQTs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBakJKOztBQW9CQTtFQUNJLHNCQUFBO0FBakJKOztBQW9CQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBakJKIiwiZmlsZSI6ImluZGl2aWR1YWwtdmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIFRleHQgQ2VudGVyaW5nIFNob3J0Y3V0ICovXHJcblxyXG4uaG9yaXpvbnRhbC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50YWJsZS1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLyogTmF2YmFyICovXHJcblxyXG4jbmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogJ3VidW50dSc7XHJcbn1cclxuXHJcblxyXG4vKiBQYWdlIHRpdGxlICovXHJcblxyXG4uYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTAlO1xyXG4gICAgbGVmdDogLTUwJTtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG59XHJcblxyXG4uYmcgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgbWluLWhlaWdodDogNTAlO1xyXG59XHJcblxyXG4jcGFnZS10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjRhNmY7XHJcbiAgICBmb250LWZhbWlseTogJ3VidW50dSc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jdGl0bGUtaW1hZ2Uge1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIC1tb3otb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4jcGFnZS10aXRsZSAuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbiNwYWdlLXRpdGxlIC5hcnRpY2xlLXRpdGxlLFxyXG4jcGFnZS10aXRsZSAuYXJ0aWNsZS1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0MHB4IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogQXJ0aWNsZSAqL1xyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG5hcnRpY2xlIGgyLFxyXG5hcnRpY2xlIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAndWJ1bnR1J1xyXG59XHJcblxyXG4uYXV0aG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWltYWdlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmF1dGhvci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcblxyXG4vKiBQYWdlciAqL1xyXG5cclxuLnBhZ2VyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAndWJ1bnR1JztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XHJcbn1cclxuXHJcbmZvb3RlciBoMixcclxuZm9vdGVyIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAndWJ1bnR1JztcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICM3MGE3ZDc7XHJcbn1cclxuXHJcbmZvb3RlciBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzM3YWI3O1xyXG59XHJcblxyXG5cclxuLyogU29jaWFsIEJ1dHRvbiBMaXN0ICovXHJcblxyXG4uc29jaWFsLWNvbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi8qIEltYWdlIExpc3QgKi9cclxuXHJcbi5pbWFnZS1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pbWFnZS1saXN0IGxpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuXHJcbi5pbWFnZS1saXN0IGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlLWxpc3QgLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG5cclxuLyogVGFnIExpc3QgKi9cclxuXHJcbi50YWctY29udCAuYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50YWctY29udCAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgY29sb3I6ICMwMEU2NzY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndividualViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './individual-view.component.html',
                styleUrls: ['./individual-view.scss']
            }]
    }], function () { return [{ type: _admin_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "jzfu":
/*!************************************************************************!*\
  !*** ./src/app/modules/blog-view/individual/individual-view.module.ts ***!
  \************************************************************************/
/*! exports provided: IndividualViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualViewModule", function() { return IndividualViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _individual_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./individual-view.component */ "ND3/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class IndividualViewModule {
}
IndividualViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IndividualViewModule });
IndividualViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IndividualViewModule_Factory(t) { return new (t || IndividualViewModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', component: _individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IndividualViewModule, { declarations: [_individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndividualViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: '', component: _individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"] }
                    ])
                ],
                exports: [_individual_view_component__WEBPACK_IMPORTED_MODULE_2__["IndividualViewComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-blog-view-individual-individual-view-module.js.map