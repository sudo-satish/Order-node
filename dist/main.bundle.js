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
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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

module.exports = "  <app-layout></app-layout>\n  <!-- <app-remark></app-remark> -->\n  <!-- <app-order></app-order>   -->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_product_module__ = __webpack_require__("./src/app/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__product_product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__layouts_layout_layout_component__ = __webpack_require__("./src/app/layouts/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__layouts_header_header_component__ = __webpack_require__("./src/app/layouts/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__layouts_footer_footer_component__ = __webpack_require__("./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__playground_remark_remark_component__ = __webpack_require__("./src/app/playground/remark/remark.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { HttpServiceService } from './services/http-service.service';














// import { ItemComponent } from './product/item/item.component';
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
                __WEBPACK_IMPORTED_MODULE_14__playground_playground_playground_component__["a" /* PlaygroundComponent */],
                __WEBPACK_IMPORTED_MODULE_24__layouts_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_25__layouts_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__layouts_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__playground_remark_remark_component__["a" /* RemarkComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_15__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_22__product_product_module__["a" /* ProductModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_10__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_data_storage_service__["a" /* DataStorageService */],
                __WEBPACK_IMPORTED_MODULE_17__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__product_product_service__["a" /* ProductService */],
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

/***/ "./src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
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
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(authRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
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
    function AuthService(router, httpClient, messageService) {
        this.router = router;
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.token = '';
        this.user = {};
    }
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        // console.log(email, password);
        this.httpClient.post('/auth/signup', { email: email, password: password }).subscribe(function (data) {
            var token = data['tokens'][0].token;
            _this.messageService.add('success', 'Signup Successful. You are login now.');
        }, function (err) {
            if (err['error']['errmsg']) {
                _this.messageService.add('error', err['error']['errmsg']);
            }
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        this.httpClient.post('/auth/signin', { email: email, password: password }).subscribe(function (data) {
            if (data['error']) {
                _this.messageService.add('error', 'Login Failed');
            }
            else {
                var token = data['tokens'][0].token;
                _this.user = data;
                _this.token = token;
                _this.messageService.add('success', 'Login Successful');
                _this.router.navigate(['']);
            }
        }, function (err) {
            _this.messageService.add('error', 'Login Failed');
        });
    };
    AuthService.prototype.logout = function () {
        this.token = '';
        this.user = '';
        this.messageService.add('success', 'Logout Successfully');
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token !== '';
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
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

/***/ "./src/app/layouts/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-expand navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"index.html#\">Bottom navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html#\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"index.html#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"index.html#\">Disabled</a>\n      </li>\n      <li class=\"nav-item dropup\">\n        <a class=\"nav-link dropdown-toggle\"  href=\"\" id=\"dropdown10\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">Dropup</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown10\">\n          <a class=\"dropdown-item\" href=\"index.html#\">Action</a>\n          <a class=\"dropdown-item\" href=\"index.html#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"index.html#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layouts/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> -->\n<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../assets/images/logo/logo.jpg\" width=\"30\" height=\"30\" alt=\"OrderIstic\">\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/order\" class=\"nav-link\">Take Order</a>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"index.html#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Product\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"bd-versions\">\n          <a class=\"dropdown-item\" routerLink=\"/item\">Item</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a routerLink=\"#\" class=\"nav-link\">Role and access</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"#\" class=\"nav-link\">Configuration</a>\n      </li>\n\n      <div class=\"dropdown nav-item\" appDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Manage\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <ng-template [ngIf]=\" !authService.isAuthenticated()\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/signup\" class=\"dropdown-item\">Register</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/signin\" class=\"dropdown-item\">Login</a>\n            </li>\n          </ng-template>\n          <ng-template [ngIf]=\" authService.isAuthenticated()\">\n            <li class=\"nav-item\">\n              <a style=\"cursor: pointer;\" (click)=\"onLogout()\" class=\"dropdown-item\">Logout</a>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </ul>\n\n    \n  </div>\n</nav>\n\n\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"index.html#\">Never expand</a>\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample01\" aria-controls=\"navbarsExample01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse collapse\" id=\"navbarsExample01\" style=\"\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html#\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"index.html#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"index.html#\">Disabled</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" href=\"index.html#\">Action</a>\n          <a class=\"dropdown-item\" href=\"index.html#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"index.html#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-md-0\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layouts/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layouts/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main role=\"main\" class=\"container\">\n\n  <div class=\"row row-offcanvas row-offcanvas-right\">\n\n    <div class=\"col-12 col-md-9\">\n      <p class=\"float-right d-md-none\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"offcanvas\">Toggle nav</button>\n      </p>\n      <div class=\"jumbotron\">\n        <h1>Hello, world!</h1>\n        <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport\n          sizes to see it in action.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\n            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio\n            dui. </p>\n          <p>\n            <a class=\"btn btn-secondary\" href=\"index.html#\" role=\"button\">View details »</a>\n          </p>\n        </div>\n        <!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\n            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio\n            dui. </p>\n          <p>\n            <a class=\"btn btn-secondary\" href=\"index.html#\" role=\"button\">View details »</a>\n          </p>\n        </div>\n        <!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\n            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio\n            dui. </p>\n          <p>\n            <a class=\"btn btn-secondary\" href=\"index.html#\" role=\"button\">View details »</a>\n          </p>\n        </div>\n        <!--/span-->\n        <div class=\"col-6 col-lg-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\n            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio\n            dui. </p>\n          <p>\n            <a class=\"btn btn-secondary\" href=\"index.html#\" role=\"button\">View details »</a>\n          </p>\n        </div>\n        <!--/span-->\n        \n      </div>\n      <!--/row-->\n    </div>\n    <!--/span-->\n\n    <div class=\"col-6 col-md-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a href=\"index.html#\" class=\"list-group-item active\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n        <a href=\"index.html#\" class=\"list-group-item\">Link</a>\n      </div>\n    </div>\n    <!--/span-->\n  </div>\n  <!--/row-->\n\n  <hr>\n\n</main>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layouts/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"messageService.messages !== '' && messageService.type == 'success'\">\n  <div> {{ messageService.messages }} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"messageService.clear()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"messageService.messages !== '' && messageService.type == 'error'\">\n  <div > {{ messageService.messages }} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"messageService.clear()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"

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
        // return this.cart.placeOrder();
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

module.exports = "<div class=\"container\">\n  <button *ngFor=\"let item of cart.getItems()\" type=\"button\" class=\"btn btn-primary btn-lg item\" (click)=\"add(item._id)\">{{ item.name }}</button>\n</div>"

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
        this.items = this.cart.getItems();
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

module.exports = "\n<div class=\"container\">\n\n  <h1>Take an Order</h1>\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-8\"></div>\n  </div>\n\n  <div class=\"row justify-content-end\">\n    <div class=\"col-md-6\">\n      <app-order-form></app-order-form>\n      <app-hold-order></app-hold-order>\n    </div>\n    <div class=\"col-md-6\">\n      <app-cart></app-cart>\n    </div>\n  </div>\n</div>\n"

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
            var user = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.phoneNumbers, { phone: this.phone });
            console.log(user);
            this.cart.placeOrder(user);
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

/***/ "./src/app/playground/remark/remark.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/playground/remark/remark.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <html lang=\"en\"> -->\n\n<head>\n  <!-- <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui\">\n  <meta name=\"description\" content=\"bootstrap admin template\">\n  <meta name=\"author\" content=\"\"> -->\n\n  <!-- <title>Page Aside Right Static | Remark Admin Template</title> -->\n  <!-- Stylesheets -->\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/css/bootstrap-extend.min.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/css/site.min.css\">\n\n  <!-- Plugins -->\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/animsition/animsition.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/asscrollable/asScrollable.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/switchery/switchery.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/intro-js/introjs.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/slidepanel/slidePanel.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/vendor/flag-icon-css/flag-icon.css\">\n\n\n  <!-- Fonts -->\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/fonts/web-icons/web-icons.min.css\">\n  <link rel=\"stylesheet\" href=\"/assets/remark/global/fonts/brand-icons/brand-icons.min.css\">\n  <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>\n\n  <!--[if lt IE 9]>\n      <script src=\"/assets/remark/global/vendor/html5shiv/html5shiv.min.js\"></script>\n      <![endif]-->\n\n  <!--[if lt IE 10]>\n      <script src=\"/assets/remark/global/vendor/media-match/media.match.min.js\"></script>\n      <script src=\"/assets/remark/global/vendor/respond/respond.min.js\"></script>\n      <![endif]-->\n\n  <!-- Scripts -->\n  <script src=\"/assets/remark/global/vendor/breakpoints/breakpoints.js\"></script>\n  <script>\n    Breakpoints();\n  </script>\n</head>\n  <body class=\"animsition page-aside-static page-aside-right site-menubar-unfold\">\n    \n  \n    <!--[if lt IE 8]>\n        <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n    <![endif]-->\n\n    <nav class=\"site-navbar navbar navbar-default navbar-fixed-top navbar-mega\" role=\"navigation\">\n    \n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggler hamburger hamburger-close navbar-toggler-left hided\"\n          data-toggle=\"menubar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"hamburger-bar\"></span>\n        </button>\n        <button type=\"button\" class=\"navbar-toggler collapsed\" data-target=\"#site-navbar-collapse\"\n          data-toggle=\"collapse\">\n          <i class=\"icon wb-more-horizontal\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"navbar-brand navbar-brand-center site-gridmenu-toggle\" data-toggle=\"gridmenu\">\n          <img class=\"navbar-brand-logo\" src=\"/assets/remark/images/logo.png\" title=\"Remark\">\n          <span class=\"navbar-brand-text hidden-xs-down\"> Remark</span>\n        </div>\n        <button type=\"button\" class=\"navbar-toggler collapsed\" data-target=\"#site-navbar-search\"\n          data-toggle=\"collapse\">\n          <span class=\"sr-only\">Toggle Search</span>\n          <i class=\"icon wb-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    \n      <div class=\"navbar-container container-fluid\">\n        <!-- Navbar Collapse -->\n        <div class=\"collapse navbar-collapse navbar-collapse-toolbar\" id=\"site-navbar-collapse\">\n          <!-- Navbar Toolbar -->\n          <ul class=\"nav navbar-toolbar\">\n            <li class=\"nav-item hidden-float\" id=\"toggleMenubar\">\n              <a class=\"nav-link\" data-toggle=\"menubar\" href=\"#\" role=\"button\">\n                <i class=\"icon hamburger hamburger-arrow-left\">\n                  <span class=\"sr-only\">Toggle menubar</span>\n                  <span class=\"hamburger-bar\"></span>\n                </i>\n              </a>\n            </li>\n            <li class=\"nav-item hidden-sm-down\" id=\"toggleFullscreen\">\n              <a class=\"nav-link icon icon-fullscreen\" data-toggle=\"fullscreen\" href=\"#\" role=\"button\">\n                <span class=\"sr-only\">Toggle fullscreen</span>\n              </a>\n            </li>\n            <li class=\"nav-item hidden-float\">\n              <a class=\"nav-link icon wb-search\" data-toggle=\"collapse\" href=\"#\" data-target=\"#site-navbar-search\"\n                role=\"button\">\n                <span class=\"sr-only\">Toggle Search</span>\n              </a>\n            </li>\n            <li class=\"nav-item dropdown dropdown-fw dropdown-mega\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\" data-animation=\"fade\"\n                role=\"button\">Mega <i class=\"icon wb-chevron-down-mini\" aria-hidden=\"true\"></i></a>\n              <div class=\"dropdown-menu\" role=\"menu\">\n                <div class=\"mega-content\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <h5>UI Kit</h5>\n                      <ul class=\"blocks-2\">\n                        <li class=\"mega-menu m-0\">\n                          <ul class=\"list-icons\">\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../advanced/animation.html\">Animation</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/buttons.html\">Buttons</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/colors.html\">Colors</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/dropdowns.html\">Dropdowns</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/icons.html\">Icons</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../advanced/lightbox.html\">Lightbox</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li class=\"mega-menu m-0\">\n                          <ul class=\"list-icons\">\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/modals.html\">Modals</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/panel-structure.html\">Panels</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../structure/overlay.html\">Overlay</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/tooltip-popover.html \">Tooltips</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../advanced/scrollable.html\">Scrollable</a>\n                            </li>\n                            <li><i class=\"wb-chevron-right-mini\" aria-hidden=\"true\"></i>\n                              <a\n                                href=\"../uikit/typography.html\">Typography</a>\n                            </li>\n                          </ul>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <h5>Media\n                        <span class=\"badge badge-pill badge-success\">4</span>\n                      </h5>\n                      <ul class=\"blocks-3\">\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                        <li>\n                          <a class=\"thumbnail m-0\" href=\"javascript:void(0)\">\n                            <img class=\"w-full\" src=\"/assets/remark/global/photos/placeholder.png\" alt=\"...\" />\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <h5 class=\"mb-0\">Accordion</h5>\n                      <!-- Accordion -->\n                      <div class=\"panel-group panel-group-simple\" id=\"siteMegaAccordion\" aria-multiselectable=\"true\"\n                        role=\"tablist\">\n                        <div class=\"panel\">\n                          <div class=\"panel-heading\" id=\"siteMegaAccordionHeadingOne\" role=\"tab\">\n                            <a class=\"panel-title\" data-toggle=\"collapse\" href=\"#siteMegaCollapseOne\" data-parent=\"#siteMegaAccordion\"\n                              aria-expanded=\"false\" aria-controls=\"siteMegaCollapseOne\">\n                              Collapsible Group Item #1\n                            </a>\n                          </div>\n                          <div class=\"panel-collapse collapse\" id=\"siteMegaCollapseOne\" aria-labelledby=\"siteMegaAccordionHeadingOne\"\n                            role=\"tabpanel\">\n                            <div class=\"panel-body\">\n                              De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti\n                              congressus ostendit alienae, voluptati ornateque accusamus\n                              clamat reperietur convicia albucius.\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"panel\">\n                          <div class=\"panel-heading\" id=\"siteMegaAccordionHeadingTwo\" role=\"tab\">\n                            <a class=\"panel-title collapsed\" data-toggle=\"collapse\" href=\"#siteMegaCollapseTwo\"\n                              data-parent=\"#siteMegaAccordion\" aria-expanded=\"false\"\n                              aria-controls=\"siteMegaCollapseTwo\">\n                              Collapsible Group Item #2\n                            </a>\n                          </div>\n                          <div class=\"panel-collapse collapse\" id=\"siteMegaCollapseTwo\" aria-labelledby=\"siteMegaAccordionHeadingTwo\"\n                            role=\"tabpanel\">\n                            <div class=\"panel-body\">\n                              Praestabiliorem. Pellat excruciant legantur ullum leniter vacare foris voluptate\n                              loco ignavi, credo videretur multoque choro fatemur mortis\n                              animus adoptionem, bello statuat expediunt naturales.\n                            </div>\n                          </div>\n                        </div>\n    \n                        <div class=\"panel\">\n                          <div class=\"panel-heading\" id=\"siteMegaAccordionHeadingThree\" role=\"tab\">\n                            <a class=\"panel-title collapsed\" data-toggle=\"collapse\" href=\"#siteMegaCollapseThree\"\n                              data-parent=\"#siteMegaAccordion\" aria-expanded=\"false\"\n                              aria-controls=\"siteMegaCollapseThree\">\n                              Collapsible Group Item #3\n                            </a>\n                          </div>\n                          <div class=\"panel-collapse collapse\" id=\"siteMegaCollapseThree\" aria-labelledby=\"siteMegaAccordionHeadingThree\"\n                            role=\"tabpanel\">\n                            <div class=\"panel-body\">\n                              Horum, antiquitate perciperet d conspectum locus obruamus animumque perspici probabis\n                              suscipere. Desiderat magnum, contenta poena desiderant\n                              concederetur menandri damna disputandum corporum.\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- End Accordion -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <!-- End Navbar Toolbar -->\n    \n          <!-- Navbar Toolbar Right -->\n          <ul class=\"nav navbar-toolbar navbar-right navbar-toolbar-right\">\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"javascript:void(0)\" data-animation=\"scale-up\"\n                aria-expanded=\"false\" role=\"button\">\n                <span class=\"flag-icon flag-icon-us\"></span>\n              </a>\n              <div class=\"dropdown-menu\" role=\"menu\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                  <span class=\"flag-icon flag-icon-gb\"></span> English</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                  <span class=\"flag-icon flag-icon-fr\"></span> French</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                  <span class=\"flag-icon flag-icon-cn\"></span> Chinese</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                  <span class=\"flag-icon flag-icon-de\"></span> German</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                  <span class=\"flag-icon flag-icon-nl\"></span> Dutch</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link navbar-avatar\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\"\n                data-animation=\"scale-up\" role=\"button\">\n                <span class=\"avatar avatar-online\">\n                  <img src=\"/assets/remark/global/portraits/5.jpg\" alt=\"...\">\n                  <i></i>\n                </span>\n              </a>\n              <div class=\"dropdown-menu\" role=\"menu\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-user\" aria-hidden=\"true\"></i> Profile</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-payment\" aria-hidden=\"true\"></i> Billing</a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-settings\" aria-hidden=\"true\"></i> Settings</a>\n                <div class=\"dropdown-divider\" role=\"presentation\"></div>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\"><i class=\"icon wb-power\" aria-hidden=\"true\"></i> Logout</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"javascript:void(0)\" title=\"Notifications\"\n                aria-expanded=\"false\" data-animation=\"scale-up\" role=\"button\">\n                <i class=\"icon wb-bell\" aria-hidden=\"true\"></i>\n                <span class=\"badge badge-pill badge-danger up\">5</span>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-media\" role=\"menu\">\n                <div class=\"dropdown-menu-header\">\n                  <h5>NOTIFICATIONS</h5>\n                  <span class=\"badge badge-round badge-danger\">New 5</span>\n                </div>\n    \n                <div class=\"list-group\">\n                  <div data-role=\"container\">\n                    <div data-role=\"content\">\n                      <a class=\"list-group-item dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <i class=\"icon wb-order bg-red-600 white icon-circle\" aria-hidden=\"true\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">A new order has been placed</h6>\n                            <time class=\"media-meta\" datetime=\"2018-06-12T20:50:48+08:00\">5 hours ago</time>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <i class=\"icon wb-user bg-green-600 white icon-circle\" aria-hidden=\"true\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Completed the task</h6>\n                            <time class=\"media-meta\" datetime=\"2018-06-11T18:29:20+08:00\">2 days ago</time>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <i class=\"icon wb-settings bg-red-600 white icon-circle\" aria-hidden=\"true\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Settings updated</h6>\n                            <time class=\"media-meta\" datetime=\"2018-06-11T14:05:00+08:00\">2 days ago</time>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <i class=\"icon wb-calendar bg-blue-600 white icon-circle\" aria-hidden=\"true\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Event started</h6>\n                            <time class=\"media-meta\" datetime=\"2018-06-10T13:50:18+08:00\">3 days ago</time>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <i class=\"icon wb-chat bg-orange-600 white icon-circle\" aria-hidden=\"true\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Message received</h6>\n                            <time class=\"media-meta\" datetime=\"2018-06-10T12:34:48+08:00\">3 days ago</time>\n                          </div>\n                        </div>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"dropdown-menu-footer\">\n                  <a class=\"dropdown-menu-footer-btn\" href=\"javascript:void(0)\" role=\"button\">\n                    <i class=\"icon wb-settings\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                    All notifications\n                  </a>\n                </div>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"javascript:void(0)\" title=\"Messages\"\n                aria-expanded=\"false\" data-animation=\"scale-up\" role=\"button\">\n                <i class=\"icon wb-envelope\" aria-hidden=\"true\"></i>\n                <span class=\"badge badge-pill badge-info up\">3</span>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-media\" role=\"menu\">\n                <div class=\"dropdown-menu-header\" role=\"presentation\">\n                  <h5>MESSAGES</h5>\n                  <span class=\"badge badge-round badge-info\">New 3</span>\n                </div>\n    \n                <div class=\"list-group\" role=\"presentation\">\n                  <div data-role=\"container\">\n                    <div data-role=\"content\">\n                      <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <span class=\"avatar avatar-sm avatar-online\">\n                              <img src=\"/assets/remark/global/portraits/2.jpg\" alt=\"...\" />\n                              <i></i>\n                            </span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Mary Adams</h6>\n                            <div class=\"media-meta\">\n                              <time datetime=\"2018-06-17T20:22:05+08:00\">30 minutes ago</time>\n                            </div>\n                            <div class=\"media-detail\">Anyways, i would like just do it</div>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <span class=\"avatar avatar-sm avatar-off\">\n                              <img src=\"/assets/remark/global/portraits/3.jpg\" alt=\"...\" />\n                              <i></i>\n                            </span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Caleb Richards</h6>\n                            <div class=\"media-meta\">\n                              <time datetime=\"2018-06-17T12:30:30+08:00\">12 hours ago</time>\n                            </div>\n                            <div class=\"media-detail\">I checheck the document. But there seems</div>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <span class=\"avatar avatar-sm avatar-busy\">\n                              <img src=\"/assets/remark/global/portraits/4.jpg\" alt=\"...\" />\n                              <i></i>\n                            </span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">June Lane</h6>\n                            <div class=\"media-meta\">\n                              <time datetime=\"2018-06-16T18:38:40+08:00\">2 days ago</time>\n                            </div>\n                            <div class=\"media-detail\">Lorem ipsum Id consectetur et minim</div>\n                          </div>\n                        </div>\n                      </a>\n                      <a class=\"list-group-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                        <div class=\"media\">\n                          <div class=\"pr-10\">\n                            <span class=\"avatar avatar-sm avatar-away\">\n                              <img src=\"/assets/remark/global/portraits/5.jpg\" alt=\"...\" />\n                              <i></i>\n                            </span>\n                          </div>\n                          <div class=\"media-body\">\n                            <h6 class=\"media-heading\">Edward Fletcher</h6>\n                            <div class=\"media-meta\">\n                              <time datetime=\"2018-06-15T20:34:48+08:00\">3 days ago</time>\n                            </div>\n                            <div class=\"media-detail\">Dolor et irure cupidatat commodo nostrud nostrud.</div>\n                          </div>\n                        </div>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"dropdown-menu-footer\" role=\"presentation\">\n                  <a class=\"dropdown-menu-footer-btn\" href=\"javascript:void(0)\" role=\"button\">\n                    <i class=\"icon wb-settings\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a class=\"dropdown-item\" href=\"javascript:void(0)\" role=\"menuitem\">\n                    See all messages\n                  </a>\n                </div>\n              </div>\n            </li>\n            <li class=\"nav-item\" id=\"toggleChat\">\n              <a class=\"nav-link\" data-toggle=\"site-sidebar\" href=\"javascript:void(0)\" title=\"Chat\"\n                data-url=\"../site-sidebar.tpl\">\n                <i class=\"icon wb-chat\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n          </ul>\n          <!-- End Navbar Toolbar Right -->\n        </div>\n        <!-- End Navbar Collapse -->\n    \n        <!-- Site Navbar Seach -->\n        <div class=\"collapse navbar-search-overlap\" id=\"site-navbar-search\">\n          <form role=\"search\">\n            <div class=\"form-group\">\n              <div class=\"input-search\">\n                <i class=\"input-search-icon wb-search\" aria-hidden=\"true\"></i>\n                <input type=\"text\" class=\"form-control\" name=\"site-search\" placeholder=\"Search...\">\n                <button type=\"button\" class=\"input-search-close icon wb-close\" data-target=\"#site-navbar-search\"\n                  data-toggle=\"collapse\" aria-label=\"Close\"></button>\n              </div>\n            </div>\n          </form>\n        </div>\n        <!-- End Site Navbar Seach -->\n      </div>\n    </nav>    <div class=\"site-menubar\">\n      <div class=\"site-menubar-body\">\n        <div>\n          <div>\n            <ul class=\"site-menu\" data-plugin=\"menu\">\n              <li class=\"site-menu-category\">General</li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-dashboard\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Dashboard</span>\n                            <div class=\"site-menu-badge\">\n                                <span class=\"badge badge-pill badge-success\">3</span>\n                            </div>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../index.html\">\n                      <span class=\"site-menu-title\">Dashboard v1</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../dashboard/v2.html\">\n                      <span class=\"site-menu-title\">Dashboard v2</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../dashboard/ecommerce.html\">\n                      <span class=\"site-menu-title\">Ecommerce</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../dashboard/analytics.html\">\n                      <span class=\"site-menu-title\">Analytics</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../dashboard/team.html\">\n                      <span class=\"site-menu-title\">Team</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub active open\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-layout\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Layouts</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/menu-collapsed.html\">\n                      <span class=\"site-menu-title\">Menu Collapsed</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/menu-collapsed-alt.html\">\n                      <span class=\"site-menu-title\">Menu Collapsed Alt</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/menu-expended.html\">\n                      <span class=\"site-menu-title\">Menu Expended</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/grids.html\">\n                      <span class=\"site-menu-title\">Grid Scaffolding</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/layout-grid.html\">\n                      <span class=\"site-menu-title\">Layout Grid</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/headers.html\">\n                      <span class=\"site-menu-title\">Different Headers</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/panel-transition.html\">\n                      <span class=\"site-menu-title\">Panel Transition</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/boxed.html\">\n                      <span class=\"site-menu-title\">Boxed Layout</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/two-columns.html\">\n                      <span class=\"site-menu-title\">Two Columns</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/menubar-flipped.html\">\n                      <span class=\"site-menu-title\">Menubar Flipped</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/menubar-native-scrolling.html\">\n                      <span class=\"site-menu-title\">Menubar Native Scrolling</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../layouts/bordered-header.html\">\n                      <span class=\"site-menu-title\">Bordered Header</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item has-sub active open\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Page Aside</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge-danger badge-round mr-25\">new</span>\n                      </div>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../layouts/aside-left-static.html\">\n                          <span class=\"site-menu-title\">Left Static</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item active\">\n                        <a class=\"animsition-link\" href=\"../layouts/aside-right-static.html\">\n                          <span class=\"site-menu-title\">Right Static</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../layouts/aside-left-fixed.html\">\n                          <span class=\"site-menu-title\">Left Fixed</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../layouts/aside-right-fixed.html\">\n                          <span class=\"site-menu-title\">Right Fixed</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-file\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Pages</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Errors</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/error-400.html\">\n                          <span class=\"site-menu-title\">400 Bad Request</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/error-403.html\">\n                          <span class=\"site-menu-title\">403 Forbidden</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/error-404.html\">\n                          <span class=\"site-menu-title\">404 Not Found</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/error-500.html\">\n                          <span class=\"site-menu-title\">500 Internal Server Error</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/error-503.html\">\n                          <span class=\"site-menu-title\">503 Service Unavailable</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/faq.html\">\n                      <span class=\"site-menu-title\">FAQ</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/gallery.html\">\n                      <span class=\"site-menu-title\">Gallery</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/gallery-grid.html\">\n                      <span class=\"site-menu-title\">Gallery Grid</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/search-result.html\">\n                      <span class=\"site-menu-title\">Search Result</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Maps</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/map-google.html\">\n                          <span class=\"site-menu-title\">Google Maps</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/map-vector.html\">\n                          <span class=\"site-menu-title\">Vector Maps</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/maintenance.html\">\n                      <span class=\"site-menu-title\">Maintenance</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/forgot-password.html\">\n                      <span class=\"site-menu-title\">Forgot Password</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/lockscreen.html\">\n                      <span class=\"site-menu-title\">Lockscreen</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/login.html\">\n                      <span class=\"site-menu-title\">Login</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/register.html\">\n                      <span class=\"site-menu-title\">Register</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/login-v2.html\">\n                      <span class=\"site-menu-title\">Login V2</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/register-v2.html\">\n                      <span class=\"site-menu-title\">Register V2</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/login-v3.html\">\n                      <span class=\"site-menu-title\">Login V3</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/register-v3.html\">\n                      <span class=\"site-menu-title\">Register V3</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/user.html\">\n                      <span class=\"site-menu-title\">User List</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/invoice.html\">\n                      <span class=\"site-menu-title\">Invoice</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/blank.html\">\n                      <span class=\"site-menu-title\">Blank Page</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Email</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/email-articles.html\">\n                          <span class=\"site-menu-title\">Articles</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/email-welcome.html\">\n                          <span class=\"site-menu-title\">Welcome</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/email-post.html\">\n                          <span class=\"site-menu-title\">Post</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/email-thumbnail.html\">\n                          <span class=\"site-menu-title\">Thumbnail</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../pages/email-news.html\">\n                          <span class=\"site-menu-title\">News</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/code-editor.html\">\n                      <span class=\"site-menu-title\">Code Editor</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/profile.html\">\n                      <span class=\"site-menu-title\">Profile</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/profile-v2.html\">\n                      <span class=\"site-menu-title\">Profile V2</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge-info badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/profile-v3.html\">\n                      <span class=\"site-menu-title\">Profile V3</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge-info badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/site-map.html\">\n                      <span class=\"site-menu-title\">Sitemap</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../pages/project.html\">\n                      <span class=\"site-menu-title\">Project</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge-info badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-category\">Elements</li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-bookmark\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Basic UI</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Panel</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../uikit/panel-structure.html\">\n                          <span class=\"site-menu-title\">Panel Structure</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../uikit/panel-actions.html\">\n                          <span class=\"site-menu-title\">Panel Actions</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../uikit/panel-portlets.html\">\n                          <span class=\"site-menu-title\">Panel Portlets</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/buttons.html\">\n                      <span class=\"site-menu-title\">Buttons</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/cards.html\">\n                      <span class=\"site-menu-title\">Cards</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/dropdowns.html\">\n                      <span class=\"site-menu-title\">Dropdowns</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/icons.html\">\n                      <span class=\"site-menu-title\">Icons</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/list.html\">\n                      <span class=\"site-menu-title\">List</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/tooltip-popover.html\">\n                      <span class=\"site-menu-title\">Tooltip &amp; Popover</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/modals.html\">\n                      <span class=\"site-menu-title\">Modals</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/tabs-accordions.html\">\n                      <span class=\"site-menu-title\">Tabs &amp; Accordions</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/images.html\">\n                      <span class=\"site-menu-title\">Images</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/badges.html\">\n                      <span class=\"site-menu-title\">Badges</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/progress-bars.html\">\n                      <span class=\"site-menu-title\">Progress Bars</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/carousel.html\">\n                      <span class=\"site-menu-title\">Carousel</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/typography.html\">\n                      <span class=\"site-menu-title\">Typography</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/colors.html\">\n                      <span class=\"site-menu-title\">Colors</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../uikit/utilities.html\">\n                      <span class=\"site-menu-title\">Utilties</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-hammer\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Advanced UI</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item hidden-sm-down site-tour-trigger\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Tour</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/animation.html\">\n                      <span class=\"site-menu-title\">Animation</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/highlight.html\">\n                      <span class=\"site-menu-title\">Highlight</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/lightbox.html\">\n                      <span class=\"site-menu-title\">Lightbox</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/scrollable.html\">\n                      <span class=\"site-menu-title\">Scrollable</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/rating.html\">\n                      <span class=\"site-menu-title\">Rating</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/context-menu.html\">\n                      <span class=\"site-menu-title\">Context Menu</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/alertify.html\">\n                      <span class=\"site-menu-title\">Alertify</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/masonry.html\">\n                      <span class=\"site-menu-title\">Masonry</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/treeview.html\">\n                      <span class=\"site-menu-title\">Treeview</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/toastr.html\">\n                      <span class=\"site-menu-title\">Toastr</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/maps-vector.html\">\n                      <span class=\"site-menu-title\">Vector Maps</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/maps-google.html\">\n                      <span class=\"site-menu-title\">Google Maps</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/sortable-nestable.html\">\n                      <span class=\"site-menu-title\">Sortable &amp; Nestable</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../advanced/bootbox-sweetalert.html\">\n                      <span class=\"site-menu-title\">Bootbox &amp; Sweetalert</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-plugin\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Structure</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/alerts.html\">\n                      <span class=\"site-menu-title\">Alerts</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/ribbon.html\">\n                      <span class=\"site-menu-title\">Ribbon</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/pricing-tables.html\">\n                      <span class=\"site-menu-title\">Pricing Tables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/overlay.html\">\n                      <span class=\"site-menu-title\">Overlay</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/cover.html\">\n                      <span class=\"site-menu-title\">Cover</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/timeline-simple.html\">\n                      <span class=\"site-menu-title\">Simple Timeline</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/timeline.html\">\n                      <span class=\"site-menu-title\">Timeline</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/step.html\">\n                      <span class=\"site-menu-title\">Step</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/comments.html\">\n                      <span class=\"site-menu-title\">Comments</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/media.html\">\n                      <span class=\"site-menu-title\">Media</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/chat.html\">\n                      <span class=\"site-menu-title\">Chat</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/testimonials.html\">\n                      <span class=\"site-menu-title\">Testimonials</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/nav.html\">\n                      <span class=\"site-menu-title\">Nav</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/navbars.html\">\n                      <span class=\"site-menu-title\">Navbars</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/blockquotes.html\">\n                      <span class=\"site-menu-title\">Blockquotes</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/pagination.html\">\n                      <span class=\"site-menu-title\">Pagination</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../structure/breadcrumbs.html\">\n                      <span class=\"site-menu-title\">Breadcrumbs</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-extension\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Widgets</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/statistics.html\">\n                      <span class=\"site-menu-title\">Statistics Widgets</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/data.html\">\n                      <span class=\"site-menu-title\">Data Widgets</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/blog.html\">\n                      <span class=\"site-menu-title\">Blog Widgets</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/chart.html\">\n                      <span class=\"site-menu-title\">Chart Widgets</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/social.html\">\n                      <span class=\"site-menu-title\">Social Widgets</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../widgets/weather.html\">\n                      <span class=\"site-menu-title\">Weather Widgets</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-library\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Forms</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/general.html\">\n                      <span class=\"site-menu-title\">General Elements</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/material.html\">\n                      <span class=\"site-menu-title\">Material Elements</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/advanced.html\">\n                      <span class=\"site-menu-title\">Advanced Elements</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/layouts.html\">\n                      <span class=\"site-menu-title\">Form Layouts</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge badge-warning badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/wizard.html\">\n                      <span class=\"site-menu-title\">Form Wizard</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/validation.html\">\n                      <span class=\"site-menu-title\">Form Validation</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/masks.html\">\n                      <span class=\"site-menu-title\">Form Masks</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Editors</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../forms/editor-summernote.html\">\n                          <span class=\"site-menu-title\">Summernote</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../forms/editor-markdown.html\">\n                          <span class=\"site-menu-title\">Markdown</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../forms/editor-ace.html\">\n                          <span class=\"site-menu-title\">Ace Editor</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/image-cropping.html\">\n                      <span class=\"site-menu-title\">Image Cropping</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../forms/file-uploads.html\">\n                      <span class=\"site-menu-title\">File Uploads</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-table\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Tables</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/basic.html\">\n                      <span class=\"site-menu-title\">Basic Tables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/bootstrap.html\">\n                      <span class=\"site-menu-title\">Bootstrap Tables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/floatthead.html\">\n                      <span class=\"site-menu-title\">floatThead</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/responsive.html\">\n                      <span class=\"site-menu-title\">Responsive Tables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/editable.html\">\n                      <span class=\"site-menu-title\">Editable Tables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/jsgrid.html\">\n                      <span class=\"site-menu-title\">jsGrid</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/footable.html\">\n                      <span class=\"site-menu-title\">FooTable</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/datatable.html\">\n                      <span class=\"site-menu-title\">DataTables</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/jqtabledit.html\">\n                      <span class=\"site-menu-title\">Jquery Tabledit</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge badge-info badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../tables/table-dragger.html\">\n                      <span class=\"site-menu-title\">Table Dragger</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge badge-warning badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-pie-chart\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Chart</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/chartjs.html\">\n                      <span class=\"site-menu-title\">Chart.js</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/gauges.html\">\n                      <span class=\"site-menu-title\">Gauges</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/flot.html\">\n                      <span class=\"site-menu-title\">Flot</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/peity.html\">\n                      <span class=\"site-menu-title\">Peity</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/sparkline.html\">\n                      <span class=\"site-menu-title\">Sparkline</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/morris.html\">\n                      <span class=\"site-menu-title\">Morris</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/chartist.html\">\n                      <span class=\"site-menu-title\">Chartist.js</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/rickshaw.html\">\n                      <span class=\"site-menu-title\">Rickshaw</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/pie-progress.html\">\n                      <span class=\"site-menu-title\">Pie Progress</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../charts/c3.html\">\n                      <span class=\"site-menu-title\">C3</span>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"site-menu-category\">Apps</li>\n              <li class=\"site-menu-item has-sub\">\n                <a href=\"javascript:void(0)\">\n                        <i class=\"site-menu-icon wb-grid-4\" aria-hidden=\"true\"></i>\n                        <span class=\"site-menu-title\">Apps</span>\n                                <span class=\"site-menu-arrow\"></span>\n                    </a>\n                <ul class=\"site-menu-sub\">\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/contacts/contacts.html\">\n                      <span class=\"site-menu-title\">Contacts</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/calendar/calendar.html\">\n                      <span class=\"site-menu-title\">Calendar</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/notebook/notebook.html\">\n                      <span class=\"site-menu-title\">Notebook</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/taskboard/taskboard.html\">\n                      <span class=\"site-menu-title\">Taskboard</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item has-sub\">\n                    <a href=\"javascript:void(0)\">\n                      <span class=\"site-menu-title\">Documents</span>\n                      <span class=\"site-menu-arrow\"></span>\n                    </a>\n                    <ul class=\"site-menu-sub\">\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../apps/documents/articles.html\">\n                          <span class=\"site-menu-title\">Articles</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../apps/documents/categories.html\">\n                          <span class=\"site-menu-title\">Categories</span>\n                        </a>\n                      </li>\n                      <li class=\"site-menu-item\">\n                        <a class=\"animsition-link\" href=\"../apps/documents/article.html\">\n                          <span class=\"site-menu-title\">Article</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/forum/forum.html\">\n                      <span class=\"site-menu-title\">Forum</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/message/message.html\">\n                      <span class=\"site-menu-title\">Message</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/projects/projects.html\">\n                      <span class=\"site-menu-title\">Projects</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/mailbox/mailbox.html\">\n                      <span class=\"site-menu-title\">Mailbox</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/media/overview.html\">\n                      <span class=\"site-menu-title\">Media</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/work/work.html\">\n                      <span class=\"site-menu-title\">Work</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/location/location.html\">\n                      <span class=\"site-menu-title\">Location</span>\n                    </a>\n                  </li>\n                  <li class=\"site-menu-item\">\n                    <a class=\"animsition-link\" href=\"../apps/travel/travel.html\">\n                      <span class=\"site-menu-title\">Travel</span>\n                      <div class=\"site-menu-label\">\n                        <span class=\"badge badge-info badge-round\">new</span>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <div class=\"site-menubar-section\">\n              <h5>\n                Milestone\n                <span class=\"float-right\">30%</span>\n              </h5>\n              <div class=\"progress progress-xs\">\n                <div class=\"progress-bar active\" style=\"width: 30%;\" role=\"progressbar\"></div>\n              </div>\n              <h5>\n                Release\n                <span class=\"float-right\">60%</span>\n              </h5>\n              <div class=\"progress progress-xs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%;\" role=\"progressbar\"></div>\n              </div>\n            </div>      </div>\n        </div>\n      </div>\n    \n      <div class=\"site-menubar-footer\">\n        <a href=\"javascript: void(0);\" class=\"fold-show\" data-placement=\"top\" data-toggle=\"tooltip\"\n          data-original-title=\"Settings\">\n          <span class=\"icon wb-settings\" aria-hidden=\"true\"></span>\n        </a>\n        <a href=\"javascript: void(0);\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Lock\">\n          <span class=\"icon wb-eye-close\" aria-hidden=\"true\"></span>\n        </a>\n        <a href=\"javascript: void(0);\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Logout\">\n          <span class=\"icon wb-power\" aria-hidden=\"true\"></span>\n        </a>\n      </div></div>    <div class=\"site-gridmenu\">\n      <div>\n        <div>\n          <ul>\n            <li>\n              <a href=\"../apps/mailbox/mailbox.html\">\n                <i class=\"icon wb-envelope\"></i>\n                <span>Mailbox</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/calendar/calendar.html\">\n                <i class=\"icon wb-calendar\"></i>\n                <span>Calendar</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/contacts/contacts.html\">\n                <i class=\"icon wb-user\"></i>\n                <span>Contacts</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/media/overview.html\">\n                <i class=\"icon wb-camera\"></i>\n                <span>Media</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/documents/categories.html\">\n                <i class=\"icon wb-order\"></i>\n                <span>Documents</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/projects/projects.html\">\n                <i class=\"icon wb-image\"></i>\n                <span>Project</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../apps/forum/forum.html\">\n                <i class=\"icon wb-chat-group\"></i>\n                <span>Forum</span>\n              </a>\n            </li>\n            <li>\n              <a href=\"../index.html\">\n                <i class=\"icon wb-dashboard\"></i>\n                <span>Dashboard</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"page\">\n      <div class=\"page-aside\">\n\n        <div class=\"page-aside-switch\">\n          <i class=\"icon wb-chevron-left\" aria-hidden=\"true\"></i>\n          <i class=\"icon wb-chevron-right\" aria-hidden=\"true\"></i>\n        </div>\n\n        <div class=\"page-aside-inner page-aside-scroll\">\n          <div data-role=\"container\">\n            <div data-role=\"content\">\n              <section class=\"page-aside-section\">\n                <h5 class=\"page-aside-title\">Main</h5>\n                <div class=\"list-group\">\n                  <a class=\"list-group-item list-group-item-action active\" href=\"javascript:void(0)\"><i class=\"icon wb-dashboard\" aria-hidden=\"true\"></i>Overview</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-pluse\" aria-hidden=\"true\"></i>Activity</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-heart\" aria-hidden=\"true\"></i>Dearest</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-folder\" aria-hidden=\"true\"></i>Folders</a>\n                </div>\n              </section>\n              <section class=\"page-aside-section\">\n                <h5 class=\"page-aside-title\">Filter</h5>\n                <div class=\"list-group\">\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-image\" aria-hidden=\"true\"></i>Images</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-volume-high\" aria-hidden=\"true\"></i>Audio</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-camera\" aria-hidden=\"true\"></i>Video</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-file\" aria-hidden=\"true\"></i>Notes</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-link-intact\" aria-hidden=\"true\"></i>Links</a>\n                  <a class=\"list-group-item\" href=\"javascript:void(0)\"><i class=\"icon wb-order\" aria-hidden=\"true\"></i>Files</a>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n        <!---page-aside-inner-->\n      </div>\n\n      <div class=\"page-main\">\n        <div class=\"page-header\">\n          <h1 class=\"page-title\">Page Aside Right Static</h1>\n        </div>\n        <div class=\"page-content\">\n          <div class=\"panel\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">DEMO CONTENT</h3>\n            </div>\n            <div class=\"panel-body\">\n              <p>Beata civitas malum iracundia scipio perspecta doleamus molestiae\n                illa, expectata commodi pericula liberos iuberet sitne suas aspernari,\n                numquidnam responsum cupiditatum romanum asperum. Umquam percipit\n                contemnit utrumque conquisitis angere perspicuum loquuntur statu,\n                vigiliae carum honestatis maximasque. Atomorum pariatur dolorem\n                theophrasti sitne intuemur turbulentaeque captet postulet pleniorem,\n                inanes error illi, adest dissidens putamus deserere voluptatis\n                sit perspecta pluribus fortasse atomum, apertam adhuc vitiis parvos\n                perturbatur dicunt facio mutat numeranda erimus, amorem iracundia\n                mollitia transferre, habent paratus consequatur. Tenere iusteque\n                imperitos cupiditatum omnium, aetatis erudito eorumque declinare\n                probaturum turpius arare, inhumanus potiora pacto permagna, malo\n                ego turpe, efficitur tranquilli albucius ipsarum praetereat nullam\n                corrupisti suas re, frui percipiatur dein accusator arguerent alias.\n                Eamque censet, paranda postulet utilitatibus nostros consistat\n                divitias secutus iudico blanditiis asperiores, voluptatem valetudinis\n                iustius consequentium maioribus, significet scribendi comparat\n                primis declinare ista adversantur per ferre perpetiuntur, erigimur\n                iucundius cognitionem, unum sublatum afranius, seditiones rationibus\n                odio efficitur, leniat antiopam vocant voluptates exhorrescere,\n                hic voluptaria sequitur graeca. Quale desistemus praesentium habemus.</p>\n              <p>Ingeniis stoicis finiri sequatur possum verissimum vel debemus statu\n                exquirere. Omnibus, verterem ferae arbitrer maiora referatur mediocris\n                praeter deseruisse, legendum detractio, consectetur disputandum\n                harum. Aequo cernimus explicabo beatae afficit approbantibus lictores\n                robustus numeranda accedit, apeirian cogitemus parvos adiuvet probatum\n                voluptas saluto proficiscuntur intemperantes data, maiestatis fautrices\n                assidua suaviter mihi. Iis claris quaestionem statim quarum pertinerent\n                audire sedulitatem, referatur, suscipiet maximeque. Tale acutus\n                intercapedo mandamus status nescius insolens audiebamus menandro\n                contenta, fugiat pro, studio morati poetarum venustate supplicii\n                melius lictores sequatur disputari, sapiente imperiis foedus putarent\n                nec dubio lucifugi miraretur fastidium, nescius parabilis poetis\n                num fictae homero praeterea tractatos graecis fortunam, ferrentur\n                muniti atomi adiit sententia hac beata. Facultas dubitemus puerilis\n                generis inflammati assentiar habeat. Studia discordant. Mors sibi\n                propriae umquam magnam saxum celeritas, uti conquirendae videro\n                delicata patre. Errore pertineant consequamur orestem videatur\n                motum usque cyrenaicisque, aptius praesertim tuo istam existimare\n                equos prospexit necesse intereant probatum, improborum, integre\n                motu nostram anteponant paulo, itaque prompta partus albam turma\n                propter litterae cetero, intemperantiam possumus, deterius.</p>\n              <p>Pedalis mediocris, magnosque vitiis dubio parte recusabo, invitat\n                percurri liberalitati maerores fortitudinis legant multavit torquentur,\n                inciderit quaerendi periculum alienum numquid amaret tranquillat\n                modum suo futuros, disciplinis statuerunt debet erudito quae confirmare,\n                meam consequentium voluptatum meminit victi splendore tenebimus\n                definitiones firme iudicari. Amici affert tollit suscipiantur nullam\n                derigatur vicinum, exedunt diu iudicium, aristotele impetu proposita\n                facimus locis conclusum regione turbent segnitiae. Athenis perspexit\n                fonte cum paene indicaverunt temperantiam, signiferumque amatoriis\n                suscipiantur credo reddidisti perdiderunt incommoda poetarum suspicio\n                incidant. Atomum, unde laetitia insolens laudatur, philosophi chaere.\n                Sapientia expressas astris praeclare iudex ornatus expetendam adolescens\n                plurimum, moveat nulla, nulla paranda mutae fidelissimae ibidem\n                caelo ius metuque divinum paene, privatio putamus dicebas, dicant\n                atque velit collegisti firmitatem ferantur sponte inani utrumvis,\n                veritatis, magis coniunctione munere porro indocti scipio graeco\n                quietae obligantur adoptionem, aptissimum quosque, opinemur scripserit\n                rebus acutum ipsarum consentinis singulos declinare, iniurias mens\n                verterem uberius debilitatem afferre captiosa perspicuum magna.\n                Debeo ineruditus asperner iudicat, odio iustioribus alterum optimi\n                cohaerescant metrodorus. Laboribus meis inquam caelo quoque videamus\n                debilitatem metus gravis fugienda.</p>\n              <p>Admodum recordamur ne unum, vitae, detractio poterit primum, genuit\n                utilitate displicet hortensio nescius contemnit duo meis ad, declinabunt\n                fructuosam que improborum zenonem placet saluti tam, legendis quietus\n                tractatas tria, verissimum theseo summum que. Dividendo fictae\n                patria totam nostris texit aliena pecunias. Degendae late disseretur,\n                quoniam suavitate quo terentianus debent arridens. Fruuntur doloribus\n                nimis mandaremus assentiar, tempore expectata. Genuit voluptaria\n                artem graecis venustate, praesidium foedus facio aegritudines sentit\n                suscipit torquatus gessisse ob. Concursio quanti agam vestrae.\n                Consequentium assentior provident gravioribus, metuamus intellegerem,\n                incurreret utilitate audita tollunt bene, perpetuis modi bonarum\n                amicis chrysippe, tranquilli interesse liberamur viam chrysippo\n                vituperari proposita manu, volumus virtutem temperantiamque philosophiae\n                expetendum, aliquo multam suscipiet dolores vero exitum, mens ornateque\n                directam, numeris pars torquem calere cupiditatibusque difficiles\n                nulli laboriosam tueri praesenti, labore praesens percipit dices.\n                Te legerint aequitate. Constringendos. Audaces cupiditates tranquilli\n                vester seditione prohiberet putant non, dissident tolerabiles loqueretur\n                fructuosam oratione, fatendum etiam, bonorum probarentur imperitorum\n                dicantur, pueri ferre studiose, videor clarorum. Artifex regione\n                conflixisse impetum graeci. Omne desideraturam expressas deterret\n                inciderint, fungimur nosmet.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Footer -->\n    <footer class=\"site-footer\">\n      <div class=\"site-footer-legal\">© 2018 <a href=\"http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202\">Remark</a></div>\n      <div class=\"site-footer-right\">\n        Crafted with <i class=\"red-600 wb wb-heart\"></i> by <a href=\"https://themeforest.net/user/creation-studio\">Creation Studio</a>\n      </div>\n    </footer>\n    \n    <!-- Core  -->\n    <script src=\"/assets/remark/global/vendor/babel-external-helpers/babel-external-helpers.js\"></script>\n    <script src=\"/assets/remark/global/vendor/jquery/jquery.js\"></script>\n    <script src=\"/assets/remark/global/vendor/popper-js/umd/popper.min.js\"></script>\n    <script src=\"/assets/remark/global/vendor/bootstrap/bootstrap.js\"></script>\n    <script src=\"/assets/remark/global/vendor/animsition/animsition.js\"></script>\n    <script src=\"/assets/remark/global/vendor/mousewheel/jquery.mousewheel.js\"></script>\n    <script src=\"/assets/remark/global/vendor/asscrollbar/jquery-asScrollbar.js\"></script>\n    <script src=\"/assets/remark/global/vendor/asscrollable/jquery-asScrollable.js\"></script>\n    <script src=\"/assets/remark/global/vendor/ashoverscroll/jquery-asHoverScroll.js\"></script>\n    \n    <!-- Plugins -->\n    <script src=\"/assets/remark/global/vendor/switchery/switchery.js\"></script>\n    <script src=\"/assets/remark/global/vendor/intro-js/intro.js\"></script>\n    <script src=\"/assets/remark/global/vendor/screenfull/screenfull.js\"></script>\n    <script src=\"/assets/remark/global/vendor/slidepanel/jquery-slidePanel.js\"></script>\n    \n    <!-- Scripts -->\n    <script src=\"/assets/remark/global/js/Component.js\"></script>\n    <script src=\"/assets/remark/global/js/Plugin.js\"></script>\n    <script src=\"/assets/remark/global/js/Base.js\"></script>\n    <script src=\"/assets/remark/global/js/Config.js\"></script>\n    \n    <script src=\"/assets/remark/js/Section/Menubar.js\"></script>\n    <script src=\"/assets/remark/js/Section/GridMenu.js\"></script>\n    <script src=\"/assets/remark/js/Section/Sidebar.js\"></script>\n    <script src=\"/assets/remark/js/Section/PageAside.js\"></script>\n    <script src=\"/assets/remark/js/Plugin/menu.js\"></script>\n    \n    <script src=\"/assets/remark/global/js/config/colors.js\"></script>\n    <script src=\"/assets/remark/js/config/tour.js\"></script>\n    <script>Config.set('assets', '/assets/remark');</script>\n    \n    <!-- Page -->\n    <script src=\"/assets/remark/js/Site.js\"></script>\n    <script src=\"/assets/remark/global/js/Plugin/asscrollable.js\"></script>\n    <script src=\"/assets/remark/global/js/Plugin/slidepanel.js\"></script>\n    <script src=\"/assets/remark/global/js/Plugin/switchery.js\"></script>\n    \n    <script>\n      (function (document, window, $) {\n        'use strict';\n\n        var Site = window.Site;\n        $(document).ready(function () {\n          Site.run();\n        });\n      })(document, window, jQuery);\n    </script>\n  </body>\n<!-- </html> -->"

/***/ }),

/***/ "./src/app/playground/remark/remark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemarkComponent; });
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

var RemarkComponent = /** @class */ (function () {
    function RemarkComponent() {
    }
    RemarkComponent.prototype.ngOnInit = function () {
    };
    RemarkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-remark',
            template: __webpack_require__("./src/app/playground/remark/remark.component.html"),
            styles: [__webpack_require__("./src/app/playground/remark/remark.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RemarkComponent);
    return RemarkComponent;
}());



/***/ }),

/***/ "./src/app/product/item-detail/item-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
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

var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent() {
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-detail',
            template: __webpack_require__("./src/app/product/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("./src/app/product/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/item-edit/item-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/item-edit/item-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form \n  \n  (ngSubmit)=\"onSubmit(f)\" \n  #f=\"ngForm\"\n>\n\n    <!-- <label for=\"inputEmail4\">Email</label> -->\n    <input type=\"hidden\" class=\"form-control\" id=\"_id\" name=\"_id\" placeholder=\"_id\" ngModel>\n\n\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <!-- <label for=\"inputEmail4\">Email</label> -->\n      <input \n        type=\"text\" \n        name=\"name\" \n        class=\"form-control\" \n        id=\"name\" \n        placeholder=\"Name\" \n        ngModel\n        required\n      >\n    </div>\n    <div class=\"form-group col-md-6\">\n      <!-- <label for=\"inputPassword4\">Password</label> -->\n      <input \n        type=\"text\" \n        class=\"form-control\" \n        id=\"code\" \n        name=\"code\" \n        placeholder=\"Code\"\n        ngModel\n        required\n      >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <!-- <label for=\"inputAddress\">Address</label> -->\n    <input \n      type=\"text\" \n      class=\"form-control\" \n      id=\"rate\" \n      name=\"rate\"\n      placeholder=\"Rate\"\n      ngModel\n      required \n    >\n  </div>\n  <div class=\"form-group\">\n    <!-- <label for=\"inputAddress2\">Address 2</label> -->\n    <textarea \n      type=\"text\" \n      class=\"form-control\" \n      id=\"desc\" \n      name=\"desc\"\n      placeholder=\"Desc\"\n      ngModel\n      required\n      >\n      </textarea>\n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(f.valid && f.touched)\">Save</button>\n</form>"

/***/ }),

/***/ "./src/app/product/item-edit/item-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemEditComponent = /** @class */ (function () {
    // private form: NgModelGroup;
    // @ViewChild('form'): form;
    function ItemEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            // console.log(this.form);
            var item = _this.productService.getItem(_this.id);
            console.log('item', item);
            // console.log({ name: item.name });
            // this.form.setValue({value: {_id: item._id}}); //.setValue takes complete form object as argument
            _this.form.form.patchValue({ name: item.name });
            _this.form.form.patchValue({ code: item.code });
            /*
            this.form.value._id = item._id,
  
            this.form.value.name = item.name,
            this.form.value.code = item.code,
            this.form.value.rate = item.rate,
            this.form.value.desc = item.desc,
            */
            console.log(_this.form);
            console.log(item);
            // console.log(this.id);
            // console.log('Edit');
        });
    };
    ItemEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    // onSubmit(form: NgModelGroup) {
    ItemEditComponent.prototype.onSubmit = function (form) {
        form.value.offers = [{}];
        console.log(form);
        var resp = this.productService.save(form.value);
        console.log(resp);
        if (resp) {
            console.log('Resp => ', resp);
            form.reset();
        }
        form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], ItemEditComponent.prototype, "form", void 0);
    ItemEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-edit',
            template: __webpack_require__("./src/app/product/item-edit/item-edit.component.html"),
            styles: [__webpack_require__("./src/app/product/item-edit/item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/product/item-list/item-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <button *ngFor=\"let item of productService.getItems()\" type=\"button\" class=\"btn btn-primary btn-lg item\" [id] =\" item._id\" (click)=\"onEdit(item._id)\">{{ item.name }}</button>\n  <!-- <li class=\"list-group-item\" > sdf </li> -->\n  \n</ul>\n"

/***/ }),

/***/ "./src/app/product/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var items = this.productService.getItems();
        console.log('item list = > ', items);
    };
    ItemListComponent.prototype.onEdit = function (id) {
        this.router.navigate([id, 'edit'], { relativeTo: this.route });
    };
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-list',
            template: __webpack_require__("./src/app/product/item-list/item-list.component.html"),
            styles: [__webpack_require__("./src/app/product/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/product/item/item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-12\">\n      <button type=\"button\" class=\"btn btn-primary\" (click) =\"onNewItem()\">New Item</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/product/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.onNewItem = function () {
        console.log('Route to cpm ');
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item',
            template: __webpack_require__("./src/app/product/item/item.component.html"),
            styles: [__webpack_require__("./src/app/product/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__("./src/app/product/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__ = __webpack_require__("./src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_edit_item_edit_component__ = __webpack_require__("./src/app/product/item-edit/item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail_component__ = __webpack_require__("./src/app/product/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_list_item_list_component__ = __webpack_require__("./src/app/product/item-list/item-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { SigninComponent } from './signin/signin.component';
// const authRoutes: Routes = [
//   { path: 'item', component: ItemComponent },
//   // { path: 'signin', component: SigninComponent },
// ];
var recipesRoutes = [
    {
        path: 'item', component: __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__item_list_item_list_component__["a" /* ItemListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__item_edit_item_edit_component__["a" /* ItemEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail_component__["a" /* ItemDetailComponent */] },
            // { path: ':id/edit', component: ItemEditComponent, canActivate: [AuthGuard] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_4__item_edit_item_edit_component__["a" /* ItemEditComponent */] },
        ]
    },
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(recipesRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuard */]
            ]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__("./src/app/product/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_routing_module__ = __webpack_require__("./src/app/product/product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_edit_item_edit_component__ = __webpack_require__("./src/app/product/item-edit/item-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail_component__ = __webpack_require__("./src/app/product/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_list_item_list_component__ = __webpack_require__("./src/app/product/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { SignupComponent } from './signup/signup.component';
// import { AuthRoutingModule } from './auth-routing.module';
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__item_edit_item_edit_component__["a" /* ItemEditComponent */],
                __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__item_list_item_list_component__["a" /* ItemListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__product_routing_module__["a" /* ProductRoutingModule */],
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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




var ProductService = /** @class */ (function () {
    function ProductService(router, httpClient, messageService, route) {
        var _this = this;
        this.router = router;
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.route = route;
        this.httpClient.get('/product/item').subscribe(function (items) {
            _this.items = items;
        });
    }
    ProductService.prototype.save = function (value) {
        var _this = this;
        this.httpClient.post('/product/item', value).subscribe(function (res) {
            _this.messageService.add('success', JSON.stringify(res));
            // this.router.navigate(['../'], { relativeTo: this.route });
            // this.router.navigate[(['../'], {relativeTo: this.route});
            return res;
        }, function (err) {
            _this.messageService.add('error', JSON.stringify(err));
            return false;
        });
    };
    ProductService.prototype.getItems = function () {
        return this.items;
    };
    ProductService.prototype.getItem = function (id) {
        console.log(this.items);
        var item = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.items, { _id: id });
        console.log('item => ', item);
        return item;
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], ProductService);
    return ProductService;
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
        var _this = this;
        this.messageService = messageService;
        this.httpClient = httpClient;
        this.router = router;
        this.holdId = 0;
        this.totalQuantity = 0;
        this.totalAmount = 0;
        this.cartItems = [];
        this.holdQueue = [];
        this.httpClient.get('/product/item').subscribe(function (item) {
            _this.items = item;
        });
    }
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    CartService.prototype.addToCart = function (itemId) {
        // var id = parseInt(itemId);
        // var id = itemId;
        var quantity = 1;
        console.log('id => ', itemId);
        var item = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.items, { _id: itemId });
        console.log('item', item);
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](item)) {
            console.error('Could not find Item with ID => ' + itemId);
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
        var cartItem = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.cartItems, { _id: itemId });
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
        var id = itemId;
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
            this.messageService.add('sucess', 'Item added in cart!!');
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
        var id = itemId;
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
    CartService.prototype.placeOrder = function (userDetail) {
        var _this = this;
        this.messageService.add('success', 'Order Placed, Order Details => ' + JSON.stringify(this.cartItems));
        console.log('Order  => ', userDetail);
        this.httpClient.post('/payment', { user: userDetail, order: this.cartItems }).subscribe(function (res) {
            // console.log(res);
            _this.messageService.add('success', JSON.stringify(res));
        }, function (err) {
            _this.messageService.add('success', JSON.stringify(err));
        });
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
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
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
    }
    MessageService.prototype.add = function (type, message) {
        this.type = type;
        this.messages = message;
    };
    MessageService.prototype.clear = function () {
        this.messages = '';
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
        // console.log(req.url);
        var token = localStorage.getItem('token');
        var copiedReq = req.clone({
            headers: req.headers.append('Auth', 'Bearer ' + token), url: req.url
        });
        // headers: req.headers.append('Auth', 'Bearer ' + token), url: 'http://localhost:3000' + req.url});
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
            // console.log('Logging interceptor', event);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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