webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order_component__ = __webpack_require__("./src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment_form_payment_form_component__ = __webpack_require__("./src/app/payment/payment-form/payment-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common'; // Since we don't use any component in this module.



var routes = [
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_2__order_order_component__["a" /* OrderComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_3__payment_payment_form_payment_form_component__["a" /* PaymentFormComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                // CommonModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
            // declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container app\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../assets/images/logo/logo.jpg\" width=\"30\" height=\"30\" alt=\"OrderIstic\">\n    </a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/order\" class=\"nav-link\">Take Order</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"#\" class=\"nav-link\">Product</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"#\" class=\"nav-link\">Role and access</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"#\" class=\"nav-link\">Configuration</a>\n        </li>\n      </ul>\n    </div>\n \n    <ul class=\"nav navbar-right\">\n      <!-- <ng-template [ngIf]=\"!authService.isAuthenticated()\"> -->\n    \n      <li>\n        <!-- <a style=\"cursor: pointer;\" (click)=\"onLogout()\" *ngIf=\"authService.isAuthenticated()\">Logout</a> -->\n      </li>\n    \n      <!-- <li class=\"dropdown\" appDropdown *ngIf=\"authService.isAuthenticated()\"> -->\n      <div class=\"dropdown\" appDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n           Manage\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <ng-template [ngIf]=\" !authService.isAuthenticated()\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/signup\" class=\"dropdown-item\">Register</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/signin\" class=\"dropdown-item\">Login</a>\n            </li>\n          </ng-template>\n          <ng-template [ngIf]=\" authService.isAuthenticated()\">\n            <li class=\"nav-item\">\n              <a style=\"cursor: pointer;\" (click)=\"onLogout()\" class=\"dropdown-item\">Logout</a>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </ul>\n  </nav>\n\n  \n  \n  <router-outlet></router-outlet>\n  <!-- <app-messages></app-messages> -->\n  <!-- <app-order></app-order>   -->\n  <!-- <app-playground> </app-playground> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_order_component__ = __webpack_require__("./src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order_form_order_form_component__ = __webpack_require__("./src/app/order/order-form/order-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_cart_cart_component__ = __webpack_require__("./src/app/order/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_hold_order_hold_order_component__ = __webpack_require__("./src/app/order/hold-order/hold-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__payment_payment_form_payment_form_component__ = __webpack_require__("./src/app/payment/payment-form/payment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__payment_invoice_invoice_component__ = __webpack_require__("./src/app/payment/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__playground_playground_playground_component__ = __webpack_require__("./src/app/playground/playground/playground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_auth_interceptor__ = __webpack_require__("./src/app/shared/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_logging_interceptor__ = __webpack_require__("./src/app/shared/logging.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { HttpServiceService } from './services/http-service.service';








// import { HttpClient } from 'selenium-webdriver/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__order_order_form_order_form_component__["a" /* OrderFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__order_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_hold_order_hold_order_component__["a" /* HoldOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__payment_payment_form_payment_form_component__["a" /* PaymentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__payment_invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_14__playground_playground_playground_component__["a" /* PlaygroundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_15__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_10__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_data_storage_service__["a" /* DataStorageService */],
                __WEBPACK_IMPORTED_MODULE_17__auth_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_19__shared_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__shared_logging_interceptor__["a" /* LoggingInterceptor */], multi: true }
                // ,
                // {
                //   provide: HttpServiceService,
                //   useFactory: httpServiceFactory,
                //   deps: [XHRBackend, RequestOptions]
                // }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(authRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__["a" /* AuthRoutingModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as firebase from 'firebase';


var AuthService = /** @class */ (function () {
    function AuthService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
    }
    AuthService.prototype.signupUser = function (email, password) {
        // console.log(email, password);
        this.httpClient.post('/auth/signup', { email: email, password: password }).subscribe(function (data) {
            var token = data['tokens'][0].token;
            localStorage.setItem('token', token);
        }, function (err) {
            console.log(err);
        });
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .catch(
        //     error => console.log(error)
        //   )
    };
    AuthService.prototype.signinUser = function (email, password) {
        this.httpClient.post('/auth/signin', { email: email, password: password }).subscribe(function (data) {
            var token = data['tokens'][0].token;
            localStorage.setItem('token', token);
        }, function (err) {
            console.log(err);
        });
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //   .then(
        //     response => {
        //       this.router.navigate(['/']);
        //       firebase.auth().currentUser.getToken()
        //         .then(
        //           (token: string) => this.token = token
        //         )
        //     }
        //   )
        //   .catch(
        //     error => console.log(error)
        //   );
    };
    AuthService.prototype.logout = function () {
        // firebase.auth().signOut();
        localStorage.setItem('token', '');
    };
    AuthService.prototype.getToken = function () {
        // firebase.auth().currentUser.getToken()
        //   .then(
        //     (token: string) => this.token = token
        //   );
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('token') !== '';
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" email ngModel class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          required\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign Up</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"messageService.messages.length\">\n  <div *ngFor='let message of messageService.messages'> {{ message }} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"messageService.clear()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/order/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- <h2>\n    cart works!\n  </h2> -->\n  \n  <!-- <div *ngFor = \"let item of cartItems\" class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{ item.name }}</h4>\n      <h6 class=\"card-subtitle mb-2 text-muted\">{{ item.desc }}</h6>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      <a href=\"#\" class=\"card-link\"> - </a>\n      <a href=\"#\" class=\"card-link\"> 1 </a>\n      <a href=\"#\" class=\"card-link\"> + </a>\n    </div>\n  </div> -->\n\n  <!-- <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor = \"let item of cartItems\">\n      {{ item.name }} \n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-secondary\">-</button>\n        <button type=\"button\" class=\"btn btn-secondary\">1</button>\n        <button type=\"button\" class=\"btn btn-secondary\">+</button>\n      </div>\n      Rs. {{ item.rate }}\n    </li>\n  </ul> -->\n\n  <table class=\"table table-stripped \">\n    <thead>\n      <tr>\n        <th scope=\"col\">Item</th>\n        <th scope=\"col\">Rate</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Total</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let item of getCartItems()\">\n        <th scope=\"row\">{{ item.name }}</th>\n        <td>Rs. {{ item.rate }}</td>\n        <td>{{ item.quantity }}</td>\n        <td>Rs. {{ item.total }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-secondary\" (click) = \"removeOneItem(item._id)\">-</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click) = \"addOneItem(item._id)\">1</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click) = \"addOneItem(item._id)\">+</button>\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Total</th>\n        <td></td>\n        <td>{{ getTotalQuantity() }}</td>\n        <td>Rs. {{ getTotalAmount() }}</td>\n        <td> <button type=\"button\" class=\"btn btn-danger\" (click)=\"resetCart()\">Reset the cart</button></td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row\">\n    <div class=\"col-6\"><button type=\"button\" class=\"btn btn-success btn-block\" routerLink=\"/payment\">Place the order</button></div>\n    <div class=\"col-6\"><button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"holdOrder()\">Hold Order</button></div>\n  </div>\n  \n  \n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/order/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cart) {
        this.cart = cart;
        this.cartItems = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        // this.cartItems = this.cart.getCartItems();
        // this.totalQuantity = _.sumBy(this.cartItems, 'quantity');
        // this.totalAmount = _.sumBy(this.cartItems, 'amount');
        // this.cart.getTotalAmount().subscribe(amount => this.totalAmount = amount);
        // console.log(this.totalAmount);
        // this.totalQuantity = this.cart.getTotalQuantity();
        //this.totalAmount = this.cart.getTotalAmount();
        //console.log(this.cartItems);
    };
    CartComponent.prototype.getCartItems = function () {
        return this.cart.getCartItems();
    };
    CartComponent.prototype.addOneItem = function (itemId) {
        return this.cart.addOneToCart(itemId);
    };
    CartComponent.prototype.removeOneItem = function (itemId) {
        return this.cart.removeOneFromCart(itemId);
    };
    CartComponent.prototype.resetCart = function () {
        return this.cart.resetCart();
    };
    CartComponent.prototype.getTotalAmount = function () {
        var totalAmount;
        this.cart.getTotalAmount().subscribe(function (amount) { return totalAmount = amount; });
        return totalAmount;
    };
    CartComponent.prototype.getTotalQuantity = function () {
        return this.cart.getTotalQuantity();
    };
    CartComponent.prototype.placeOrder = function () {
        return this.cart.placeOrder();
    };
    CartComponent.prototype.holdOrder = function () {
        return this.cart.holdOrder();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/order/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/order/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/order/hold-order/hold-order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/hold-order/hold-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a *ngFor=\"let holdItem of cart.getHoldQueue()\" (click)=\"populateHoldItem(holdItem._id)\" class=\"list-group-item list-group-item-action list-group-item-light\"> Total Item {{ holdItem.totalQuantity }}, Total Amount {{ holdItem.totalAmount }}</a>\n</div>"

/***/ }),

/***/ "./src/app/order/hold-order/hold-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HoldOrderComponent = /** @class */ (function () {
    function HoldOrderComponent(cart) {
        this.cart = cart;
    }
    HoldOrderComponent.prototype.ngOnInit = function () {
    };
    HoldOrderComponent.prototype.getHoldItem = function () {
        return this.cart.getHoldQueue();
    };
    HoldOrderComponent.prototype.populateHoldItem = function (id) {
        return this.cart.populateOrder(id);
    };
    HoldOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hold-order',
            template: __webpack_require__("./src/app/order/hold-order/hold-order.component.html"),
            styles: [__webpack_require__("./src/app/order/hold-order/hold-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], HoldOrderComponent);
    return HoldOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order-form/order-form.component.css":
/***/ (function(module, exports) {

module.exports = ".item {\r\n   margin-right: 1em; \r\n}"

/***/ }),

/***/ "./src/app/order/order-form/order-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button *ngFor=\"let item of items\" type=\"button\" class=\"btn btn-primary btn-lg item\" (click)=\"add(item._id)\">{{ item.name }}</button>\n</div>"

/***/ }),

/***/ "./src/app/order/order-form/order-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(cart) {
        this.cart = cart;
        this.items = [];
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.getItems().subscribe(function (item) {
            _this.items = item;
            _this.cart.items = item;
            console.log('Fetched Items', _this.items);
        });
    };
    OrderFormComponent.prototype.add = function (item) {
        return this.cart.addOneToCart(item);
        // alert('Going to add Item ' + item);
        // Logic to add to Service.
    };
    OrderFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-form',
            template: __webpack_require__("./src/app/order/order-form/order-form.component.html"),
            styles: [__webpack_require__("./src/app/order/order-form/order-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Take an Order</h1>\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-8\"><app-order-form></app-order-form></div>\n  </div>\n\n  <div class=\"row justify-content-end\">\n    <div class=\"col-md-6\">\n      <app-hold-order></app-hold-order>\n    </div>\n    <div class=\"col-md-6\">\n      <app-cart></app-cart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            console.log('Order comp => ', token);
        }
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__("./src/app/order/order.component.html"),
            styles: [__webpack_require__("./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/payment/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-stripped \">\n    <thead>\n      <tr>\n        <th scope=\"col\">Item</th>\n        <th scope=\"col\">Rate</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Total</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of getCartItems()\">\n        <th scope=\"row\">{{ item.name }}</th>\n        <td>Rs. {{ item.rate }}</td>\n        <td>{{ item.quantity }}</td>\n        <td>Rs. {{ item.total }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Total</th>\n        <td></td>\n        <td>{{ getTotalQuantity() }}</td>\n        <td>Rs. {{ getTotalAmount() }}</td>\n      </tr>\n      <tr>\n        <button type=\"button\" class=\"btn btn-success btn-block\" routerLink=\"/order\">Alter the order</button>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/payment/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(cart) {
        this.cart = cart;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.getCartItems = function () {
        return this.cart.getCartItems();
    };
    InvoiceComponent.prototype.getTotalQuantity = function () {
        return this.cart.getTotalQuantity();
    };
    InvoiceComponent.prototype.getTotalAmount = function () {
        var totalAmount;
        this.cart.getTotalAmount().subscribe(function (amount) { return totalAmount = amount; });
        return totalAmount;
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice',
            template: __webpack_require__("./src/app/payment/invoice/invoice.component.html"),
            styles: [__webpack_require__("./src/app/payment/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment-form/payment-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment-form/payment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row \">\n    <div class=\"col-md-6\">\n      <form #orderForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <input type=\"text\" id=\"phone\" [(ngModel)]=\"phone\" required maxlength=\"10\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" (keyup)=\"autoFillFormData()\" autocomplete=\"off\">\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"firstname\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" autocomplete=\"off\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <input type=\"text\" [(ngModel)]=\"lastname\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\" autocomplete=\"off\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" autocomplete=\"off\">\n        </div>\n        \n        <div class=\"form-group\">\n          <textarea [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" placeholder=\"Address\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!orderForm.form.valid\">Place Order</button>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"col-md-6\">\n      <app-invoice></app-invoice>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/payment/payment-form/payment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var phone = document.getElementById('phone');
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(cart) {
        this.cart = cart;
        this.phoneNumbers = [
            { phone: '8130626713', firstname: 'Satish', lastname: 'Gupta', email: 'satishkumr001@gmail.com', address: 'Shyam Colony' },
            { phone: '9873393248', firstname: 'Nitin', lastname: 'Gupta', email: 'nitingupta@gmail.com', address: 'Shyam Colony' },
        ];
    }
    PaymentFormComponent.prototype.ngOnInit = function () {
        // console.log(phone);
    };
    PaymentFormComponent.prototype.autoFillFormData = function () {
        if (this.phone.length == 10) {
            console.log(this.phone);
            var formObj = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.phoneNumbers, { phone: this.phone });
            console.log(formObj);
            this.phone = formObj.phone;
            this.firstname = formObj.firstname;
            this.lastname = formObj.lastname;
            this.email = formObj.email;
            this.address = formObj.address;
        }
        else {
            // this.phone = '';
            this.firstname = '';
            this.lastname = '';
            this.email = '';
            this.address = '';
        }
    };
    PaymentFormComponent.prototype.onSubmit = function () {
        if (this.phone.length !== 10) {
            alert('Not a valid phone number');
            return false;
        }
        else {
            this.cart.placeOrder();
        }
    };
    PaymentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-payment-form',
            template: __webpack_require__("./src/app/payment/payment-form/payment-form.component.html"),
            styles: [__webpack_require__("./src/app/payment/payment-form/payment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());



/***/ }),

/***/ "./src/app/playground/playground/playground.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/playground/playground/playground.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  playground works!\n</p>\n"

/***/ }),

/***/ "./src/app/playground/playground/playground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpServiceService } from '../../services/http-service.service';
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
    };
    PlaygroundComponent.prototype.hitGetMethod = function () {
        // this.http.get('payment').subscribe(data => {
        //   console.log(data);
        // });
    };
    PlaygroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playground',
            template: __webpack_require__("./src/app/playground/playground/playground.component.html"),
            styles: [__webpack_require__("./src/app/playground/playground/playground.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartService = /** @class */ (function () {
    function CartService(messageService, httpClient, router) {
        this.messageService = messageService;
        this.httpClient = httpClient;
        this.router = router;
        this.holdId = 0;
        this.totalQuantity = 0;
        this.totalAmount = 0;
        this.cartItems = [];
        this.holdQueue = [];
    }
    CartService.prototype.getItems = function () {
        return this.httpClient.get('/product/item');
    };
    CartService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    CartService.prototype.addToCart = function (itemId) {
        var id = parseInt(itemId);
        var quantity = 1;
        var item = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.items, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](item)) {
            console.error('Could not find Item with ID => ' + id);
            return false;
        }
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](this.cartItems)) {
            item.quantity = quantity;
            var amount = parseInt(item.rate) * parseInt(item.quantity);
            item.total = amount;
            this.cartItems.push(item);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
        var cartItem = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.cartItems, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](cartItem)) {
            item.quantity = quantity;
            item.total = parseInt(item.rate) * parseInt(item.quantity);
            this.cartItems.push(item);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
        else {
            item.quantity += quantity;
            item.total = parseInt(item.rate) * parseInt(item.quantity);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
    };
    CartService.prototype.addOneToCart = function (itemId) {
        this.messageService.add('Item added in cart!!');
        var id = parseInt(itemId);
        var quantity = 1;
        var item = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.items, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](item)) {
            console.error('Could not find Item with ID => ' + id);
            return false;
        }
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](this.cartItems)) {
            item.quantity = quantity;
            var amount = parseInt(item.rate) * parseInt(item.quantity);
            item.total = amount;
            this.cartItems.push(item);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
        var cartItem = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.cartItems, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](cartItem)) {
            item.quantity = quantity;
            item.total = parseInt(item.rate) * parseInt(item.quantity);
            this.cartItems.push(item);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
        else {
            item.quantity += quantity;
            item.total = parseInt(item.rate) * parseInt(item.quantity);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            return true;
        }
    };
    CartService.prototype.removeOneFromCart = function (itemId) {
        var id = parseInt(itemId);
        var quantity = 1;
        var item = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.items, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](item)) {
            console.error('Could not find Item with ID => ' + id);
            return false;
        }
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](this.cartItems)) {
            console.warn('How is it possible that the cart is empty, But you got access to remove the item from cart, It smells like BUG.');
            return true;
        }
        var cartItem = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.cartItems, { _id: id });
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](cartItem)) {
            console.warn('Cart in not empty but it don\'t have the item which your are looking for, But you got access to remove the item from cart, It smells like BUG.');
            return true;
        }
        else {
            item.quantity -= quantity;
            item.total = parseInt(item.rate) * parseInt(item.quantity);
            this.totalQuantity = this.calculateTotalQuantity();
            this.totalAmount = this.calculateTotalAmount();
            if (item.quantity == 0) {
                __WEBPACK_IMPORTED_MODULE_1_lodash__["pullAllWith"](this.cartItems, [item], __WEBPACK_IMPORTED_MODULE_1_lodash__["isEqual"]);
            }
            return true;
        }
    };
    CartService.prototype.calculateTotalAmount = function () {
        var returnVal = __WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](this.cartItems, 'total');
        return returnVal;
    };
    CartService.prototype.calculateTotalQuantity = function () {
        var returnVal = __WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](this.cartItems, 'quantity');
        return returnVal;
    };
    CartService.prototype.getTotalAmount = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.totalAmount);
    };
    CartService.prototype.getTotalQuantity = function () {
        return this.totalQuantity;
    };
    CartService.prototype.resetCart = function () {
        //  _.remove(this.cartItems, () => { return true;});
        this.cartItems = [];
        this.totalAmount = 0;
        this.totalQuantity = 0;
        return true;
    };
    CartService.prototype.placeOrder = function () {
        this.messageService.add('Order Placed, Order Details => ' + JSON.stringify(this.cartItems));
        console.log('Order  => ', this.cartItems);
        this.router.navigate(['/order']);
        return this.resetCart();
    };
    CartService.prototype.holdOrder = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](this.cartItems)) {
            return false;
        }
        // let id = this.holdQueue.length;
        // let idStr = Math.random(); // Make an unique n 
        // let unique = _.random();
        this.holdQueue.push({ _id: __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqueId"]('HOLD_'), items: this.cartItems, totalAmount: this.totalAmount, totalQuantity: this.totalQuantity });
        // this.messageService.add('Order Hold, Order Details => ' + JSON.stringify(this.holdQueue));
        this.resetCart();
        // console.log(this.holdQueue);
        return true;
    };
    CartService.prototype.getHoldQueue = function () {
        return this.holdQueue;
    };
    CartService.prototype.populateOrder = function (id) {
        var cartItem = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.holdQueue, { _id: id });
        this.cartItems = cartItem.items;
        this.totalAmount = cartItem.totalAmount;
        this.totalQuantity = cartItem.totalQuantity;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["remove"](this.holdQueue, { _id: id });
        // console.log(cartItems);
        console.log(cartItem.items);
        return true;
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log(req.url);
        var token = localStorage.getItem('token');
        var copiedReq = req.clone({
            headers: req.headers.append('Auth', 'Bearer ' + token), url: 'http://localhost:3000' + req.url
        });
        // const copiedReq = req.clone({ headers: req.headers.append('Access-Control-Allow-Origin', '*')});
        // const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
        return next.handle(copiedReq);
        // return null;
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';

var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, 
        // private recipeService: RecipeService,
        authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        // const headers = new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf');
        // return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //   observe: 'body',
        //   params: new HttpParams().set('auth', token)
        //   // headers: headers
        // });
        // const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
        // return this.httpClient.request(req);
    };
    DataStorageService.prototype.getRecipes = function () {
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
        //   observe: 'body',
        //   responseType: 'json'
        // })
        //   .map(
        //     (recipes) => {
        //       console.log(recipes);
        //       for (let recipe of recipes) {
        //         if (!recipe['ingredients']) {
        //           recipe['ingredients'] = [];
        //         }
        //       }
        //       return recipes;
        //     }
        //   )
        //   .subscribe(
        //     (recipes: Recipe[]) => {
        //       this.recipeService.setRecipes(recipes);
        //     }
        //   );
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/logging.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");

var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).do(function (event) {
            console.log('Logging interceptor', event);
        });
    };
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__("./src/app/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map