(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "9q6C":
/*!****************************************************!*\
  !*** ./src/app/modules/admin/blog/blog.service.ts ***!
  \****************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class BlogService {
    constructor(db) {
        this.db = db;
    }
    getBlogById(a) {
        if (a) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(a);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
    }
    getAllBlogs() {
        this.blogsList = this.db.list('blogs');
        return this.blogsList.snapshotChanges();
    }
    postBlog(body) {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('blogs').push({ content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    editBlog(key, body, a) {
        body.id = a.id;
        body.sn = a.sn;
        this.blogsList.update(key, { content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    deleteBlog(key) {
        let k = key;
        this.db.list('blogs').remove(k);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();
let BLOGS = [
    {
        id: 1,
        sn: 1,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 2,
        sn: 2,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 3,
        sn: 3,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    },
    {
        id: 4,
        sn: 4,
        headerImg: 'https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Ewumesh',
        date: 'Feb 21 2021',
        author: 'Umesh Thapa',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae.        '
    }
];


/***/ }),

/***/ "szbo":
/*!****************************************************!*\
  !*** ./src/app/modules/admin/team/team.service.ts ***!
  \****************************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class TeamService {
    constructor(db) {
        this.db = db;
    }
    getAllTeams() {
        this.teamList = this.db.list('teams');
        return this.teamList.snapshotChanges();
    }
    getTeamById(id) {
        // let data = TEAM.find(_ => _.id === id);
        let data;
        this.teamList.valueChanges().subscribe(_ => {
            let a = _.find(_ => _.content.id === id);
            data = a.content;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    }
    updateTeam(key, body, a) {
        body.id = a.id;
        body.sn = a.sn;
        this.teamList.update(key, { content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    addTeam(body) {
        let rand = Math.floor(Math.random() * (9999 - 1111 + 1)) + 100;
        body.id = rand;
        body.sn = rand;
        this.db.list('teams').push({ content: body });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(body);
    }
    deleteTeam(key) {
        let k = key;
        this.db.list('teams').remove(k);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    // Links
    addLinks(body) {
        // let data = TEAM.find(_ => _.id === body.id);
        // let d = data.links.findIndex(_ => _.id ===body.id);
        // data.links[d] = body;
        // localStorage.setItem('teams', JSON.stringify(TEAM))
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map