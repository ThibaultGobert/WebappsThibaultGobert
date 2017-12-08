webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/wishlist/wishlist.module": [
		"../../../../../src/app/wishlist/wishlist.module.ts",
		"wishlist.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'wishlist',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__user_auth_guard_service__["a" /* AuthGuardService */]],
        loadChildren: 'app/wishlist/wishlist.module#WishlistModule' },
    { path: '', redirectTo: 'wishlist/list', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"containter-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Wishlistapp</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a href=\"#\" class='item' routerLinkActive='active' routerLink=\"wishlist/list\">Wishlists</a></li>\n      <li><a href=\"#\" class='item' routerLinkActive='active' routerLink=\"wishlist/add\">Add Wishlist</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li><a *ngIf='(currentUser | async)' >{{currentUser|async}} </a></li>\n        <li><a href=\"#\" *ngIf='(currentUser | async) else registerlink'></a></li>\n      <li>\n        <a href=\"#\" *ngIf='(currentUser | async) else loginlink' class=\"item\" routerLinkActive='active' routerLink=\"/logout\">\n        <span class=\"glyphicon glyphicon-log-out\"></span> Log out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n       \n        <ng-template #loginlink>\n          <a href=\"#\" class='item' routerLinkActive='active' routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n        </ng-template>\n        \n        <ng-template #registerlink>\n            <a href=\"#\" class='item' routerLink=\"/register\" ><span class=\"glyphicon glyphicon-user\"></span> Sign up</a>\n        </ng-template>\n  \n\n    <router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlist_wishlist_data_service__ = __webpack_require__("../../../../../src/app/wishlist/wishlist-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(AppComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.user$;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__wishlist_wishlist_data_service__["a" /* WishlistDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user$.getValue()) {
            return true;
        }
        //attempted url for redirect
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._url = '/API/users';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._user$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](currentUser && currentUser.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).token;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/register", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username.toLowerCase() }).map(function (res) { return res.json(); })
            .map(function (item) {
            return item.username === 'alreadyexists';
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui{\r\n    margin-left: 2%;\r\n    font-weight :bold;\r\n }\r\n .input-group-addon{\r\n   width: 100px;\r\n }\r\n \r\n .input-group{\r\n   margin-left: 2%;\r\n   margin-bottom: 2%;\r\n }\r\n \r\n .form-control{\r\n   width: 300px;\r\n }\r\n \r\n button{\r\n   margin-left: 2%;\r\n }\r\n\r\n .alert{\r\n     margin-top: 2%;\r\n     width: 80%;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n    <h3 class=\"ui header\">Login</h3>\n    <div class=\"input-group\">\n        \n      <label class=\"input-group-addon\" for=\"username\">Username</label>\n      <input class=\"form-control\" type=\"text\" id=\"username\" formControlName='username'>\n    </div>\n    <div class=\"input-group\">\n      <label class=\"input-group-addon\" for=\"password\">Password</label>\n      <input class=\"form-control\" type=\"password\" id=\"password\" formControlName='password'>\n    </div>\n    <div>\n    <button type='submit' [disabled]='!user.valid' class=\"btn btn-success\">log in</button>\n    Not a user yet? -> \n    <a class='item' routerLink=\"/register\" >register now!</a>\n  </div>\n  <div *ngIf='errorMsg' class='alert alert-warning'>{{errorMsg}}</div>\n  \n  </form>\n   \n   \n   "

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator() {
    return function (control) {
        console.log(control.value);
        return control.value.length < 12 ? { 'passwordTooShort': { value: control.value.length } } : null;
    };
}
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.user.value.username, this.user.value.password).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                    _this.authService.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/wishlist/list']);
                }
            }
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\">\r\nYou are succesfully logged out!\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        //this.router.navigate(['login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/user/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui{\r\n    margin-left: 2%;\r\n    font-weight :bold;\r\n }\r\n .input-group-addon{\r\n   width: 140px;\r\n }\r\n \r\n .input-group{\r\n   margin-left: 2%;\r\n   margin-bottom: 2%;\r\n }\r\n \r\n .form-control{\r\n   width: 300px;\r\n }\r\n \r\n button{\r\n   margin-left: 2%;\r\n }\r\n .alert{\r\n     margin-top:2%;\r\n     width: 80%;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n    <h3 class=\"ui header\">Register new user</h3>\n    <div class=\"input-group\">\n      <label class=\"input-group-addon\" for=\"username\">Username</label>\n      <input class=\"form-control\" type=\"text\" id=\"username\" formControlName='username' #spy>\n    </div>\n    <div formGroupName='passwordGroup'>\n        <div class=\"input-group\">\n        <label class=\"input-group-addon\" for=\"password\">Password</label>\n        <input class=\"form-control\" type=\"password\" id=\"password\" formControlName='password'>\n      </div>\n        <div class=\"input-group\">\n        <label class=\"input-group-addon\" for=\"confirmpassword\">Confirm password</label>\n        <input class=\"form-control\" type=\"password\" id=\"confirmpassword\" formControlName='confirmPassword'>\n      </div>\n     \n    </div>\n    <button type='submit' [disabled]='!user.valid' class=\"btn btn-success\">Register</button>\n    <div class='alert alert-warning' *ngIf=' user.get(\"username\").errors?.required && user.get(\"username\").touched'>\n        a username is required\n      </div>\n      <div class='alert alert-warning' *ngIf='user.get(\"username\").errors?.minlength && user.get(\"username\").touched'>\n        the username should be at least {{user.get(\"username\").errors?.minlength.requiredLength }} letters\n      </div>\n      <div class='alert alert-warning' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n        a user with that name already exists\n      </div>\n      <div class='alert alert-warning' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n          password too short, please use at least {{passwordControl.errors?.passwordTooShort.requiredLength}} letters (got {{passwordControl.errors?.passwordTooShort.actualLength}})\n      </div>\n      <div class='alert alert-warning' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n            the two passwords should be the same\n      </div>\n  </form>\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator(length) {
    return function (control) {
        return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, fb) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(RegisterComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)],
                this.serverSideValidateUsername()],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, passwordValidator(12)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
            }, { validator: comparePasswords })
        });
    };
    RegisterComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authenticationService.checkUserNameAvailability(control.value).map(function (alreadyExists) {
                if (!alreadyExists) {
                    //doesn't exist, all is good
                    return null;
                }
                return { userAlreadyExists: true };
            });
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe(function (val) {
            if (val) {
                _this.router.navigate(['/wishlist/list']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/user/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] }
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]
        ],
        exports: []
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/wishlist/wishlist-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wishlist_model__ = __webpack_require__("../../../../../src/app/wishlist/wishlist.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_item_wishlistItem_model__ = __webpack_require__("../../../../../src/app/wishlist/wishlist-item/wishlistItem.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistDataService = (function () {
    function WishlistDataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = '/API';
    }
    Object.defineProperty(WishlistDataService.prototype, "wishlist", {
        get: function () {
            return this.http.get(this._appUrl + "/wishlists/", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
                .map(function (response) { return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__wishlist_model__["a" /* Wishlist */].fromJSON(item); }); });
        },
        enumerable: true,
        configurable: true
    });
    WishlistDataService.prototype.getWishlist = function (id) {
        return this.http.get(this._appUrl + "/wishlist/" + id).map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__wishlist_model__["a" /* Wishlist */].fromJSON(item);
        });
    };
    WishlistDataService.prototype.addNewWishlist = function (rec) {
        return this.http.post(this._appUrl + "/wishlists/", rec, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__wishlist_model__["a" /* Wishlist */].fromJSON(item); });
    };
    WishlistDataService.prototype.removeWishlist = function (rec) {
        return this.http.delete(this._appUrl + "/wishlist/" + rec.id).map(function (res) { return res.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__wishlist_model__["a" /* Wishlist */].fromJSON(item);
        });
    };
    WishlistDataService.prototype.getWishlistItem = function (rec, id) {
        return this.http.get(this._appUrl + "/wishlist/" + rec.id + "/wishlistItems/" + id).map(function (res) { return res.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_4__wishlist_item_wishlistItem_model__["a" /* WishlistItem */].fromJSON(item);
        });
    };
    //slide 42, addNewWishlistItem naar hier verplaatsen en dan nog eens wishlist getter aanroepen voor changes? 
    WishlistDataService.prototype.addNewWishlistItem = function (wishlistItem, rec) {
        return this.http.post(this._appUrl + "/wishlist/" + rec.id + "/wishlistItems", wishlistItem)
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_4__wishlist_item_wishlistItem_model__["a" /* WishlistItem */].fromJSON(item); });
    };
    WishlistDataService.prototype.removeWishlistItem = function (wishlistItem, rec) {
        return this.http.delete(this._appUrl + "/wishlist/" + rec.id + "/wishlistItems/" + wishlistItem._id)
            .map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__wishlist_model__["a" /* Wishlist */].fromJSON(item); });
    };
    return WishlistDataService;
}());
WishlistDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], WishlistDataService);

var _a, _b;
//# sourceMappingURL=wishlist-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/wishlist/wishlist-item/wishlistItem.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistItem; });
var WishlistItem = (function () {
    function WishlistItem(name, price) {
        this._name = name;
        this._price = price;
    }
    WishlistItem.fromJSON = function (json) {
        var rec = new WishlistItem(json.name);
        rec._id = json._id;
        return rec;
    };
    Object.defineProperty(WishlistItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WishlistItem.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    WishlistItem.prototype.toJSON = function () {
        return {
            _id: this._id,
            name: this._name,
        };
    };
    return WishlistItem;
}());

//# sourceMappingURL=wishlistItem.model.js.map

/***/ }),

/***/ "../../../../../src/app/wishlist/wishlist.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wishlist; });
var Wishlist = (function () {
    function Wishlist(name, username, wishlistItems) {
        this._username = username;
        this._name = name;
        this._wishlistItems = wishlistItems || new Array();
    }
    Wishlist.fromJSON = function (json) {
        var rec = new Wishlist(json.name, json.username, json.wishlistItems);
        rec._id = json._id;
        return rec;
    };
    Object.defineProperty(Wishlist.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wishlist.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wishlist.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wishlist.prototype, "wishlistItems", {
        get: function () {
            return this._wishlistItems;
        },
        set: function (wishlistItems) {
            this._wishlistItems = wishlistItems;
        },
        enumerable: true,
        configurable: true
    });
    Wishlist.prototype.addWishlistItem = function (wishlistItem) {
        this._wishlistItems.push(wishlistItem);
    };
    Wishlist.prototype.toJSON = function () {
        return {
            _id: this._id,
            name: this._name,
            username: this._username,
            wishlistItems: this._wishlistItems
        };
    };
    return Wishlist;
}());

//# sourceMappingURL=wishlist.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map