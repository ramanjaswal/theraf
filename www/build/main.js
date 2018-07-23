webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //private headers = new Headers({'Content-Type': 'application/json'});
        this.API_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_BASE */]; // URL to web api
    }
    AuthService.prototype.login = function (params) {
        return this.http.post(this.API_URL + 'jwt-auth/v1/token', params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    'الرياض',
    'الخرج',
    'جدة',
    'مكة',
    'الدمام',
    'الخبر',
    'الظهران',
    'المدينة المنورة',
    'بريدة',
    'عنيزة',
    'البكيرية',
    'الرس',
    'الخبراء',
    'الطائف',
    'الهفوف',
    'راس تنورة',
    'الاحساء',
    'الجبيل',
    'عنك',
    'البدائع',
    'سيهات',
    'صفوى',
    'القطيف'
]);
//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterSuccess = (function () {
    function RegisterSuccess(navCtrl, wpService, notification, params) {
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.params = params;
        this.message = this.params.get('message');
    }
    RegisterSuccess.prototype.dismiss = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* Home */], {}, {
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    return RegisterSuccess;
}());
RegisterSuccess = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',
        template: "\n  \t<ion-header>\n\t\t<ion-navbar hideBackButton=\"true\">\n\t    \t<ion-title color=\"light\">Registration Success</ion-title>\n\t    \t<ion-buttons end>\n\t\t      <button ion-button (click)=\"dismiss()\" color=\"dark\">\n\t\t        <ion-icon name=\"md-close\"></ion-icon>\n\t\t      </button>\n\t\t    </ion-buttons>\n\t    </ion-navbar>\n\t</ion-header>\n\t<ion-content padding class=\"card-background-page\">\n\t\t<ion-card class=\"card-page\">\n\t\t\t<div [innerHtml]=\"message\"></div>\n\t\t</ion-card>\n\t</ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RegisterSuccess);

//# sourceMappingURL=register-success.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Categories = (function () {
    function Categories(navCtrl, wpService, notification) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.notification.showLoading();
        this.wpService.getCategories().subscribe(function (result) {
            _this.categories = result;
            _this.notification.stopLoading();
        });
    }
    Categories.prototype.getServices = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* Services */], { category: category });
    };
    return Categories;
}());
Categories = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'all-categories',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\categories\categories.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title color="dark">{{\'Categories\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="grid-services">\n\n	  <ion-row>\n\n	    <ion-col col-6 col-sm-4 col-md-3 *ngFor="let category of categories">\n\n	      <div class="service card-ios" (click)="getServices(category)">\n\n	      	<div class="service-icon">\n\n	      		<img class="logo" [src]="category.image"/>\n\n	      	</div>\n\n	      	<div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{category.name | translate}}\n\n	      	</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\categories\categories.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */]])
], Categories);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List = (function () {
    function List(navCtrl, wpService, notification, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.navParams = navParams;
        this.showToggle = false;
        this.notification.showLoading();
        this.wpService.getCelebrities().subscribe(function (result) {
            _this.celebrities = result;
            _this.notification.stopLoading();
        });
        this.showToggle = this.navParams.get('showToggle');
    }
    List.prototype.ViewCelebrity = function (celeb) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_view__["a" /* View */], { celebrity: celeb });
    };
    return List;
}());
List = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'list-celebrities',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\list\list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n				<button *ngIf="showToggle" ion-button icon-only menuToggle clear color="dark">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title color="dark">{{\'Celebrities\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="grid-services">\n\n	  <ion-row>\n\n	    <ion-col col-6 col-sm-4 col-md-3 *ngFor="let celeb of celebrities">\n\n	      <div class="service card-ios" (click)="ViewCelebrity(celeb)">\n\n	      	<div class="service-icon">\n\n	      		<img class="logo" [src]="celeb.photo"/>\n\n	      	</div>\n\n	      	<div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{celeb.name | translate}}\n\n	      	</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], List);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Services } from '../../services/services';

var View = (function () {
    function View(navParams, wpService, navCtrl, notification) {
        var _this = this;
        this.navParams = navParams;
        this.wpService = wpService;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.categories = [];
        this.celebrity = this.navParams.get('celebrity');
        this.notification.showLoading();
        wpService.getCelebrityCategories(this.celebrity.id).subscribe(function (result) {
            _this.categories = result;
            _this.notification.stopLoading();
        });
    }
    View.prototype.showItems = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__items_items__["a" /* Items */], { celebrity: this.celebrity, category: category });
    };
    return View;
}());
View = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'view-celebrity',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\view\view.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title color="dark">{{celebrity.name | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page page-celebs-categories">\n\n	<div class="celeb-photo">\n\n		<img [src]="celebrity.image" alt="celebrity.name" />\n\n\n\n	</div>\n\n	<!-- <ion-list>\n\n	  <ion-item *ngIf="categories.length == 0" class="no-item">No item to show</ion-item>\n\n	  <button ion-item *ngFor="let category of categories" (click)="showItems(category)">\n\n	    {{ category.name }}\n\n	  </button>  \n\n	</ion-list> -->\n\n	<div *ngIf="categories.length == 0" class="no-result-celeb">No item to show</div>\n\n	<ion-grid class="grid-services grid-celeb-cats">\n\n	  <ion-row>\n\n	    <ion-col col-6 col-sm-4 col-md-3 *ngFor="let category of categories">\n\n	      <div class="service card-ios" (click)="showItems(category)">\n\n	      	<div class="service-icon">\n\n	      		<img class="logo" [src]="category.image"/>\n\n	      	</div>\n\n	      	<div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{category.name | translate}}\n\n	      	</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\view\view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */]])
], View);

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List = (function () {
    function List(navCtrl, wpService, notification, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.navParams = navParams;
        this.showToggle = false;
        this.notification.showLoading();
        this.wpService.getVendors().subscribe(function (results) {
            _this.vendors = results;
            _this.notification.stopLoading();
        });
        this.showToggle = this.navParams.get('showToggle');
    }
    List.prototype.showItems = function (author) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* Services */], { author: author });
    };
    return List;
}());
List = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'list-vendors',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\vendors\list\list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n				<button *ngIf="showToggle" ion-button icon-only menuToggle clear color="dark">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title color="dark">{{\'Vendors\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="grid-services">\n\n	  <ion-row>\n\n	    <ion-col col-6 col-sm-4 col-md-3 *ngFor="let vendor of vendors">\n\n	      <div class="service card-ios" (click)="showItems(vendor)">\n\n	      	<div class="service-icon">\n\n	      		<img class="logo" [src]="vendor.avatar"/>\n\n	      	</div>\n\n	      	<div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{vendor.name | translate}}\n\n	      	</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\vendors\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], List);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(wpService, notification, navCtrl) {
        this.wpService = wpService;
        this.notification = notification;
        this.navCtrl = navCtrl;
    }
    Login.prototype.doLogin = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.celebrityLogin(this.passcode).subscribe(function (response) {
            console.log(response);
            if (response.success) {
                var _celeb = response.data;
                localStorage.setItem('celebrity', JSON.stringify(_celeb));
                //this.navCtrl.push( CelebritiesProfile, { celebrity: _celeb } );
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* Profile */], { celebrity: _celeb });
            }
            _this.notification.showToast(response.message);
            _this.notification.stopLoading();
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'celebrities-login',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n        <button ion-button icon-only menuToggle clear color="dark">\n\n                <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    	<ion-title color="light">{{\'Login\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <form>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Enter Passcode</ion-label>\n\n              <ion-input type="password" name="passcode" [(ngModel)]="passcode"></ion-input>\n\n            </ion-item>\n\n          \n\n        </ion-list>\n\n\n\n        <button ion-button color="dark" full (click)="doLogin()">Login</button>\n\n\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Profile = (function () {
    function Profile(navParams, navController, notifications) {
        this.navParams = navParams;
        this.navController = navController;
        this.notifications = notifications;
        this.celebrity = navParams.get('celebrity');
    }
    Profile.prototype.doContinue = function () {
        //alert("WORKING")
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* Categories */]);
    };
    Profile.prototype.logOut = function () {
        localStorage.removeItem('celebrity');
        //this.navController.pop();
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
        this.notifications.showToast('You have been logged out successfully');
    };
    return Profile;
}());
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'celebrities-profile',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\profile\profile.html"*/'<ion-header>\n\n	<ion-navbar>\n\n        <button ion-button icon-only menuToggle clear color="dark">\n\n                <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title color="dark">{{\'Login\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="logOut()" color="dark">\n\n                Logout\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="celeb-profile">\n\n        <div class="celeb-photo">\n\n            <div>\n\n                <img [src]="celebrity.photo" />\n\n            </div>\n\n        </div>\n\n        <div class="continue">\n\n            <button round ion-button color="dark" (click)="doContinue()">\n\n                Continue as {{celebrity.name}} &nbsp;<ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_notification_helper__["a" /* NotificationHelper */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE; });
var API_BASE = "http://www.theraf.co/wp-json/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_locations__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Address = (function () {
    //allLocations: any = [];
    function Address(navCtrl, notification, wpService, authService, events) {
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.authService = authService;
        this.events = events;
        this.address = {};
        this.is_logged_in = false;
        this.login = {};
        this.initAddress();
        //this.allLocations = LOCATIONS;
        //console.log( this.address.city );
    }
    Address.prototype.initAddress = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {
            this.is_logged_in = true;
            this.notification.showLoading();
            this.wpService.myAddress().subscribe(function (address) {
                _this.notification.stopLoading();
                _this.address = address;
                //override city with the shiping city selected
                var location = parseInt(localStorage.getItem('delivery_location'));
                if (location > 0)
                    _this.address.city = __WEBPACK_IMPORTED_MODULE_6__data_locations__["a" /* default */][location - 1];
            });
        }
    };
    Address.prototype.saveAddress = function () {
        var _this = this;
        console.log(this.address);
        console.log(this.isValidate());
        this.address.country = "SAR";
        if (this.isValidate()) {
            if (this.is_logged_in) {
                this.notification.showLoading();
                this.wpService.saveAddress(this.address).subscribe(function (response) {
                    _this.notification.stopLoading();
                    if (response.status) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* Review */]);
                    }
                    else {
                        _this.notification.showToast("Error while saving your address. Please try again.");
                    }
                });
            }
            else {
                if (this.address.password && this.address.password == this.address.cpassword) {
                    this.notification.showLoading();
                    this.wpService.registerAndCheckout(this.address).subscribe(function (response) {
                        _this.notification.stopLoading();
                        if (response.success) {
                            // console.log(response);
                            localStorage.setItem('user', JSON.stringify(response.user));
                            //publish login event -- user to update menu view
                            _this.events.publish('user:login', true);
                            _this.initAddress();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* Review */]);
                        }
                        else {
                            _this.notification.showToast(response.message);
                        }
                    });
                }
                else {
                    this.notification.showToast('Password and Confirm password do not match.');
                }
            }
        }
        else {
            this.notification.showToast('Please fill the required fields.');
        }
    };
    Address.prototype.doLogin = function () {
        var _this = this;
        this.notification.showLoading();
        this.authService.login(this.login)
            .then(function (response) {
            // 		//console.log(); 
            localStorage.setItem('user', JSON.stringify(response));
            _this.notification.stopLoading();
            //assign cart
            _this.events.publish('user:login', true);
            _this.wpService.assignCart().subscribe(function (response) {
                console.log("Temporay Cart Assigned to user");
            });
            _this.initAddress();
        }).catch(function (err) {
            _this.notification.stopLoading();
            if (err.status == 403) {
                _this.notification.showToast("Invalid username or password");
                return false;
            }
            _this.notification.showToast("Error connecting to server. Please try again");
            console.log(err);
        });
    };
    Address.prototype.isValidate = function () {
        return (this.address.first_name &&
            this.address.last_name &&
            this.address.user_email &&
            this.address.mobile &&
            this.address.address &&
            this.address.province &&
            this.address.city &&
            this.address.comments);
    };
    return Address;
}());
Address = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\address\address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">Delivery Address</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only color="light">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n	<ion-card *ngIf="!is_logged_in">\n\n		<ion-card-content>\n\n			<h3 class="title-card">RETURNING CUSTOMER</h3>\n\n			<p class="note-light">If you are a registered user, please enter your email and password here and enjoy a faster checkout.</p>\n\n\n\n			<ion-list class="form-address form-login">\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Username\' | translate}}</ion-label>\n\n				    <ion-input type="text" name="username" [(ngModel)]="login.username"></ion-input>\n\n				  </ion-item>\n\n\n\n				  <ion-item>\n\n				    <ion-label stacked>{{\'Password\' | translate}}</ion-label>\n\n				    <ion-input type="password" name="password" [(ngModel)]="login.password"></ion-input>\n\n				  </ion-item>\n\n			</ion-list>\n\n\n\n			<div class="btn--wrapper">\n\n				<button ion-button block color="dark" (click)="doLogin()">{{\'LOGIN\' | translate}}</button>\n\n			</div>\n\n\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card>\n\n		<ion-card-content>\n\n\n\n			<ion-list class="form-address">\n\n\n\n				<ion-list-header>\n\n				    CONTACT INFO\n\n				</ion-list-header>\n\n\n\n				<span class="register-note" *ngIf="!is_logged_in">By Filling up this info you are creating a new account with us</span>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'First Name\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="text" name="first_name" [(ngModel)]="address.first_name" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Last Name\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="text" name="last_name" [(ngModel)]="address.last_name" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Email\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="text" name="user_email" [(ngModel)]="address.user_email" [disabled]="is_logged_in" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item *ngIf="!is_logged_in">\n\n				    <ion-label stacked>{{\'Password\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="password" name="password" [(ngModel)]="address.password" required></ion-input>\n\n			  	</ion-item>\n\n\n\n				<ion-item *ngIf="!is_logged_in">\n\n				    <ion-label stacked>{{\'Confirm Password\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="password" name="cpassword" [(ngModel)]="address.cpassword" required></ion-input>\n\n			  	</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{"Mobile" | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-label class="mobile-code">+966</ion-label>\n\n				    <ion-input class="mobile-no" type="text" name="mobile" [(ngModel)]="address.mobile" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-list-header class="header-margin">\n\n				    DELIVERY INFO\n\n				</ion-list-header>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Address\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-textarea name="address" [(ngModel)]="address.address" required></ion-textarea>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Country\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="text" value="Soudi Arabia" disabled></ion-input>\n\n				</ion-item>\n\n\n\n				<!-- <ion-item>\n\n					<ion-label stacked>{{\'City\' | translate}} <span class="txt-required">*</span></ion-label>\n\n					<ion-select [(ngModel)]="address.city">\n\n					    <ion-option *ngFor="let location of allLocations" value="location">{{location}}</ion-option>\n\n				  	</ion-select>\n\n				</ion-item> -->\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'City\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input disabled type="text" name="city" [(ngModel)]="address.city" required></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Area\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-input type="text" name="province" [(ngModel)]="address.province" required></ion-input>\n\n				</ion-item>\n\n				\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Postal Code\' | translate}}</ion-label>\n\n				    <ion-input type="text" name="postal_code" [(ngModel)]="address.postal_code"></ion-input>\n\n				</ion-item>\n\n\n\n				<ion-item>\n\n				    <ion-label stacked>{{\'Additional Comments\' | translate}} <span class="txt-required">*</span></ion-label>\n\n				    <ion-textarea name="comments" [(ngModel)]="address.comments" required></ion-textarea>\n\n				</ion-item>\n\n\n\n			</ion-list>\n\n\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<div class="btn-wrapper">\n\n		<button ion-button block color="dark" (click)="saveAddress()">{{\'CONTINUE\' | translate}}</button>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\address\address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Address);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Review = (function () {
    function Review(navCtrl, notification, wpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.is_loaded = false;
        this.cart = {};
        this.notification.showLoading();
        this.wpService.getMyCart().subscribe(function (cart) {
            _this.cart = cart;
            _this.notification.stopLoading();
            _this.is_loaded = true;
        });
    }
    Review.prototype.saveOrder = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.saveOrder().subscribe(function (response) {
            //console.log( response );
            _this.notification.stopLoading();
            if (response.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* Payment */], { order_id: response.order_id });
            }
            else {
                _this.notification.showToast(response.message);
            }
        });
    };
    return Review;
}());
Review = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\review\review.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">Review Cart</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only color="light">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  	<p *ngIf="cart.items && cart.items.length == 0" class="center no-item">Your cart is empty</p>\n\n\n\n  	<ion-card *ngIf="is_loaded && cart.items.length > 0">\n\n		<ion-card-content>\n\n			<ion-list>\n\n\n\n			  <ion-item *ngFor="let item of cart.items" class="cart-item">\n\n			    <div class="item-image">\n\n			      <img [src]="item.image">\n\n			    </div>\n\n			    <div class="item-details">\n\n				    <h2>{{ item.title }}</h2>\n\n				    <p>By: {{item.author}}</p>\n\n				    <p>Qty: {{item.quantity}}</p>\n\n				    <p *ngIf="item.date"> {{item.date}} |  {{item.time}}</p>\n\n			    </div>\n\n			    <!-- <div class="item-action">\n\n			    	<span class="price">{{item.price}} SR</span>\n\n			    	<button ion-button outline color="danger" (click)="removeItem(item.key)">DELETE</button>\n\n			    </div> -->\n\n			  </ion-item>\n\n\n\n			</ion-list>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card *ngIf="is_loaded && cart.items.length > 0">\n\n		<ion-card-content>\n\n			<table class="cart-details">\n\n				<tr>\n\n					<th>{{\'Subtotal\' | translate}}</th>\n\n					<td width="100px">{{cart.subtotal}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Shipping Charges\' | translate}}</th>\n\n					<td width="100px">{{cart.shipping_charges}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Discount\' | translate}}</th>\n\n					<td>{{cart.discount}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Total\' | translate}}</th>\n\n					<td>{{cart.total}} SR</td>\n\n				</tr>\n\n			</table>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<div class="btn-wrapper" *ngIf="is_loaded && cart.items.length > 0">\n\n		<button ion-button block color="dark" (click)="saveOrder()">{{\'CONTINUE TO PAYMENT\' | translate}}</button>\n\n	</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\review\review.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */]])
], Review);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wp_page_wp_page__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_translate__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories_categories__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__celebrities_list_list__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vendors_list_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__celebrities_view_view__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var Home = Home_1 = (function () {
    function Home(navCtrl, notification, wpService, translate, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.categories = [];
        this.slides = [];
        this.celbrities = [];
        this.vendors = [];
        this.showSearchBar = false;
        this.language = localStorage.getItem('language');
        this.wpService.getSlides().subscribe(function (results) {
            _this.slides = results;
        });
        this.wpService.getCategories().subscribe(function (results) {
            _this.categories = results;
        });
        this.wpService.getCelebrities().subscribe(function (results) {
            _this.celbrities = results;
        });
        //this.locations = this.wpService.getLocations();
        this.wpService.getVendors().subscribe(function (results) {
            _this.vendors = results;
        });
    }
    Home.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wpService.getCartCount().subscribe(function (res) {
            _this.cart_total = res.count;
        });
        setTimeout(function () {
            ///this.notification.stopLoading();
        }, 300);
    };
    Home.prototype.showLangSelector = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Language');
        alert.addInput({
            type: 'radio',
            label: 'English',
            value: 'en',
            checked: this.language == 'en'
        });
        alert.addInput({
            type: 'radio',
            label: 'عربي',
            value: 'ar',
            checked: this.language == 'ar'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.switchLanguage(data);
            }
        });
        alert.present();
    };
    Home.prototype.switchLanguage = function (lang) {
        this.language = lang;
        localStorage.setItem('language', lang);
        this.translate.use(lang);
    };
    Home.prototype.getServices = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* Services */], { category: category, search: this.selectedLocation });
    };
    Home.prototype.showCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* Cart */]);
    };
    Home.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* Search */], { area: this.selectedLocation });
    };
    Home.prototype.systemLink = function (link) {
        cordova.InAppBrowser.open(link, '_system');
    };
    Home.prototype.toggleSearchBar = function () {
        this.showSearchBar = !this.showSearchBar;
        if (this.showSearchBar) {
            this.content.scrollToTop();
        }
    };
    Home.prototype.textSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* Search */], { s: this.searchTerm });
    };
    Home.prototype.allCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__categories_categories__["a" /* Categories */]);
    };
    Home.prototype.allCelebrities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__celebrities_list_list__["a" /* List */]);
    };
    Home.prototype.allVendors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__vendors_list_list__["a" /* List */]);
    };
    Home.prototype.getByVendor = function (vendor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* Services */], { author: vendor });
    };
    Home.prototype.ViewCelebrity = function (celeb) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__celebrities_view_view__["a" /* View */], { celebrity: celeb });
    };
    Home.prototype.openPage = function (page) {
        switch (page) {
            case 'services':
                this.navCtrl.push(Home_1, {}, {
                    animate: false,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'about':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wp_page_wp_page__["a" /* WpPage */], { id: 74, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'contact':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* Contact */], { hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'terms':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wp_page_wp_page__["a" /* WpPage */], { id: 313, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'privacy':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wp_page_wp_page__["a" /* WpPage */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'login':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* Login */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forsward'
                });
                break;
            case 'register':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__register_register__["a" /* Register */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
        }
    };
    return Home;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], Home.prototype, "content", void 0);
Home = Home_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true">\n\n        <button ion-button icon-only menuToggle clear color="dark">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    	<ion-title color="light">\n\n            <img [src]="\'assets/images/logo-raf.png\'" class="app-logo" />\n\n        </ion-title>\n\n    	<ion-buttons end>\n\n	        <button ion-button icon-only clear color="dark" (click)="showLangSelector()">\n\n                <ion-icon name="md-globe"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only clear color="dark" (click)="showCart()">\n\n                <ion-icon name="cart"></ion-icon>\n\n                <span class="cart-count">{{cart_total}}</span>\n\n            </button>\n\n	    </ion-buttons>\n\n    </ion-navbar>\n\n    <!-- <div class="search-bar-wrap">\n\n        <div class="search-bar">\n\n            <ion-searchbar [(ngModel)]="searchTerm" ></ion-searchbar>\n\n            <button ion-button outline small (click)="textSearch()" color="light">{{\'SEARCH\' | translate}}</button>\n\n        </div>\n\n    </div> -->\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n        <div class="banner skeleton">\n\n\n\n            <ion-slides id="slider">\n\n\n\n                <ion-slide class="banner-placeholder" *ngIf="slides.length == 0">\n\n                    <!-- <h3 class="slide-title">{{slide.title}}</h3> -->\n\n                    <ion-icon name="image"></ion-icon>\n\n                </ion-slide>\n\n\n\n                <ion-slide *ngFor="let slide of slides">\n\n                    <!-- <h3 class="slide-title">{{slide.title}}</h3> -->\n\n                    <img [src]="slide.image">\n\n                </ion-slide>\n\n            </ion-slides>\n\n    \n\n        </div>\n\n\n\n        <section class="section-home">\n\n            <div class="section-header">\n\n                <h4 class="section-title">{{\'Categories\' | translate}}</h4>\n\n                <button ion-button color="dark" small (click)="allCategories()">{{\'VIEW ALL\' | translate}}</button>\n\n            </div>\n\n            <ion-slides class="custom-slider cat-slider" slidesPerView="3" spaceBetween="3" pager="true">\n\n\n\n                <ion-slide class="cat-placeholder" *ngIf="categories.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="categories.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="categories.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n\n\n\n\n\n\n                <ion-slide *ngFor="let category of categories">\n\n                    <div class="service card-ios" (click)="getServices(category)">\n\n                        <div class="service-icon">\n\n                            <img class="logo" [src]="category.image"/>\n\n                        </div>\n\n                        <div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n                            {{category.name | translate}}\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </section>\n\n\n\n        <section class="section-home">\n\n            <div class="section-header">\n\n                <h4 class="section-title">{{\'Celebrities\' | translate}}</h4>\n\n                <button ion-button color="dark" small (click)="allCelebrities()">{{\'VIEW ALL\' | translate}}</button>\n\n            </div>\n\n            <ion-slides class="custom-slider" slidesPerView="3" spaceBetween="3" pager="true">\n\n\n\n                <ion-slide class="cat-placeholder" *ngIf="celbrities.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="celbrities.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="celbrities.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n\n\n                <ion-slide *ngFor="let celeb of celbrities">\n\n                    <div class="service card-celeb card-ios" (click)="ViewCelebrity(celeb)">\n\n                        <div class="service-icon">\n\n                            <img class="logo" [src]="celeb.photo"/>\n\n                        </div>\n\n                        <div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n                            {{celeb.name | translate}}\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </section>\n\n\n\n        <section class="section-home last">\n\n            <div class="section-header">\n\n                <h4 class="section-title">{{\'Vendors\' | translate}}</h4>\n\n                <button ion-button color="dark" small (click)="allVendors()">{{\'VIEW ALL\' | translate}}</button>\n\n            </div>\n\n            <ion-slides class="custom-slider" slidesPerView="3" spaceBetween="3" pager="true">\n\n\n\n                <ion-slide class="cat-placeholder" *ngIf="vendors.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="vendors.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="cat-placeholder" *ngIf="vendors.length == 0">\n\n                    <div class="service card-ios">\n\n                        <div class="service-icon">\n\n                            <ion-icon name="image"></ion-icon>\n\n                        </div>\n\n                        <div class="service-name">\n\n                            <span></span>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n\n\n                <ion-slide *ngFor="let vendor of vendors">\n\n                    <div class="service card-vendor card-ios" (click)="getByVendor(vendor)">\n\n                        <div class="service-icon">\n\n                            <img class="logo" [src]="vendor.avatar"/>\n\n                        </div>\n\n                        <div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n                            {{vendor.name | translate}}\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </section>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_5__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Home);

var Home_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_success_payment_success__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Payment = (function () {
    function Payment(navCtrl, notification, wpService, params) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.params = params;
        this.paymentMethod = 1;
        this.enableOffline = true;
        this.enableHomePayment = true;
        //notification.stopLoading();
        notification.showLoading();
        this.wpService.availablePaymentMethods(this.params.get('order_id'))
            .subscribe(function (response) {
            notification.stopLoading();
            // console.log(response);
            _this.enableOffline = response.offline;
            _this.enableHomePayment = response.home_payment;
        });
    }
    Payment.prototype.selectPaymentMethod = function (method) {
        this.paymentMethod = method;
    };
    Payment.prototype.confirmOrder = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.processPayment({ order: this.params.get('order_id'), payment_method: this.paymentMethod }).subscribe(function (response) {
            //console.log(response);
            _this.notification.stopLoading();
            if (_this.paymentMethod == 1 && response.status == true) {
                //var ref = window.open( response.url );
                //var ref = window.open( response.url , '_blank', 'toolbarposition=top,location=no');
                var ref = cordova.InAppBrowser.open(response.url, '_blank', 'toolbarposition=top,location=yes');
                ref.addEventListener('exit', function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */], {}, {
                        animate: true,
                        animation: 'md-transition',
                        direction: 'back'
                    });
                });
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payment_success_payment_success__["a" /* PaymentSuccess */], { data: response });
            }
            if (response.status == false) {
                _this.notification.showToast(response.message);
                return false;
            }
        });
    };
    return Payment;
}());
Payment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\payment\payment.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">Payment</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only color="light">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" radio-group>\n\n\n\n	<ion-card class="card-payment">\n\n		<ion-card-content>\n\n			<ion-item>\n\n				<ion-radio value="1" checked name="payment_method" id="cc" (click)="selectPaymentMethod(1)"></ion-radio>\n\n				<ion-label>Credit Card</ion-label>\n\n			</ion-item>\n\n			<img [ngStyle]="{width: \'auto\'}" src="https://www.paytabs.com/theme/payment_page/img/credit-cards.png" />\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<!-- <ion-card class="card-payment" *ngIf="enableOffline">\n\n		<ion-card-content>\n\n			<ion-item>\n\n				<ion-radio value="2" name="payment_method" id="bank" (click)="selectPaymentMethod(2)"></ion-radio>\n\n				<ion-label>Bank Transfer</ion-label>\n\n			</ion-item>\n\n\n\n			<div class="bank-details">\n\n				<img src="assets/images/bank-logo.png" />\n\n				<div>\n\n					<span>Al-Rajhi Bank</span>\n\n					<p>Account Number <span class="act-number">SA6980000153608010066434</span></p>\n\n				</div>\n\n			</div>\n\n\n\n			<p><small class="note-light">After transferring, please send the transaction receipt you got to <a href="mailto:sales@eventos.com">sales@eventit.com</a> or via whatsapp <strong>00966555088195 </strong></small></p>\n\n\n\n		</ion-card-content>\n\n	</ion-card> -->\n\n\n\n	<!-- <ion-card class="card-payment" *ngIf="enableOffline && enableHomePayment">\n\n		<ion-card-content>\n\n			<ion-item>\n\n				<ion-radio value="3" name="payment_method" id="cod" (click)="selectPaymentMethod(3)"></ion-radio>\n\n				<ion-label>Home Payment</ion-label>\n\n			</ion-item>\n\n			<p>We will send someone from our company to collect the payment ( this will cost additional 30SR)</p>\n\n		</ion-card-content>\n\n	</ion-card> -->\n\n\n\n	<ion-card class="card-payment">\n\n		<ion-card-content>\n\n			<ion-item>\n\n				<ion-radio value="4" name="payment_method" id="cod" (click)="selectPaymentMethod(4)"></ion-radio>\n\n				<ion-label>Cash On Delivery</ion-label>\n\n			</ion-item>\n\n			<!-- <img [ngStyle]="{width: \'auto\', height: \'40px\' }" src="assets/images/fastlo_logo.png" /> -->\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n\n\n	<div class="btn-wrapper">\n\n		<button ion-button block color="dark" (click)="confirmOrder()">{{\'CONFIRM AND PAY\' | translate }}</button>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\payment\payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Payment);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentSuccess = (function () {
    function PaymentSuccess(navCtrl, notification, wpService, params) {
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.params = params;
        //notification.stopLoading();
        this.data = this.params.get('data');
        console.log(this.data);
        localStorage.removeItem('cart_id');
    }
    PaymentSuccess.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* Home */], {}, {
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    return PaymentSuccess;
}());
PaymentSuccess = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-success',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\payment_success\payment_success.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title color="dark">Success</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="dark" (click)="goBack()">DONE</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n	<ion-card>\n\n\n\n		<ion-card-content>\n\n\n\n      <h3>Your order has been succesfully received.</h3>\n\n\n\n      <div [innerHTML]="data.message"></div>\n\n\n\n      <h3>Order Summary</h3>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item *ngFor="let item of data.order.items" class="cart-item">\n\n          <div class="item-image">\n\n            <img [src]="item.image">\n\n          </div>\n\n          <div class="item-details">\n\n            <h2>{{ item.title }}</h2>\n\n            <!-- <p>By: {{item.author}}</p> -->\n\n            <p>Qty: {{item.quantity}}</p>\n\n            <p> {{item.date}} |  {{item.time}}</p>\n\n          </div>\n\n          <div class="item-action">\n\n            <span class="price">{{item.price}} SR</span>\n\n            <!-- <button ion-button outline color="danger" (click)="removeItem(item.key)">DELETE</button> -->\n\n          </div>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <table class="cart-details">\n\n        <tr>\n\n          <th>{{\'Subtotal\' | translate}}</th>\n\n          <td width="100px">{{data.order.sub_total}} SR</td>\n\n        </tr>\n\n        <tr>\n\n          <th>{{\'Shipping\' | translate}}</th>\n\n          <td width="100px">{{data.order.shipping}} SR</td>\n\n        </tr>\n\n        <tr *ngIf="data.order.discount > 0">\n\n          <th>{{\'Discount\' | translate}}</th>\n\n          <td>{{data.order.discount}} SR</td>\n\n        </tr>\n\n        <tr>\n\n          <th>{{\'Total\' | translate}}</th>\n\n          <td>{{data.order.total}} SR</td>\n\n        </tr>\n\n      </table>\n\n\n\n    </ion-card-content>\n\n\n\n	</ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\payment_success\payment_success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PaymentSuccess);

//# sourceMappingURL=payment_success.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Vendors = (function () {
    function Vendors(navCtrl, navParams, notification, wpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = notification;
        this.wpService = wpService;
        this.browse_by = 'vendor';
        this.vendors = [];
        if (this.navParams.data.category != undefined && this.navParams.data.area != undefined) {
            this.notification.showLoading();
            this.wpService.getVendors(this.navParams.data.category.term_id, this.navParams.data.area).subscribe(function (vendors) {
                _this.vendors = vendors;
                _this.notification.stopLoading();
            });
        }
    }
    Vendors.prototype.ionViewDidEnter = function () {
        this.browse_by = 'vendor';
    };
    Vendors.prototype.byVendor = function (author) {
        //console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* Services */], { author: author, search: this.navParams.data.area, category: this.navParams.data.category });
    };
    Vendors.prototype.browseByProduct = function () {
        this.navCtrl.popToRoot({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    return Vendors;
}());
Vendors = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vendors',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\vendors\vendors.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">Vendors</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<div class="segment-top">\n\n	    <ion-segment color="dark" [(ngModel)]="browse_by">\n\n	      <ion-segment-button  value="product" (ionSelect)="browseByProduct()">\n\n	        Browse By Product\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="vendor">\n\n	        Browse By Vendor\n\n	      </ion-segment-button>\n\n	    </ion-segment>\n\n  	</div>\n\n\n\n	<ion-grid class="list-services">\n\n	    <ion-row>\n\n	      <ion-col col-12 *ngIf="vendors && vendors.length == 0"><p class="center no-result">No Vendor Found</p></ion-col>\n\n	      <ion-col col-6 col-sm-4 *ngFor="let vendor of vendors">\n\n	        <ion-card>\n\n	          <!-- <img src="{{ service.image }}"/> -->\n\n	          <div id="service-thumb" [ngStyle]="{\'background-image\': \'url(\' + vendor.avatar + \')\'}"></div>\n\n	          <ion-card-content>\n\n	            <ion-card-title>\n\n	              {{ vendor.name }}\n\n	            </ion-card-title>\n\n	            <button ion-button block color="dark" (click)="byVendor(vendor)">{{\'View\' | translate}}</button>\n\n	          </ion-card-content>\n\n	        </ion-card>\n\n	      </ion-col>\n\n	    </ion-row>\n\n\n\n	  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\vendors\vendors.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */]])
], Vendors);

//# sourceMappingURL=vendors.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Items = (function () {
    function Items(navParams, wpService, navCtrl, notification) {
        var _this = this;
        this.navParams = navParams;
        this.wpService = wpService;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.services = [];
        this.celebrity = navParams.get('celebrity');
        this.category = navParams.get('category');
        this.notification.showLoading();
        wpService.getCelebrityServices(this.celebrity.id, this.category.term_id).subscribe(function (result) {
            _this.services = result;
            _this.notification.stopLoading();
        });
    }
    Items.prototype.showService = function (service) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* Service */], { service: service, celebrity_id: this.celebrity.id });
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'celebrity-items',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\items\items.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title color="dark">{{category.name | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="list-services">\n\n	    <ion-row>\n\n	      <ion-col col-12 *ngIf="services && services.length == 0"><p class="center no-result">No Service Found</p></ion-col>\n\n	      <ion-col col-6 col-sm-4 *ngFor="let service of services">\n\n	        <ion-card>\n\n	          <div class="service-img">\n\n	          <img src="{{ service.image }}"/>\n\n	          </div>\n\n	          <!-- <div id="service-thumb" [ngStyle]="{\'background-image\': \'url(\' + service.image + \')\'}"></div> -->\n\n	          <ion-card-content>\n\n	            <ion-card-title>\n\n	              {{ service.title }}\n\n	              <br/>\n\n	              <small>by {{service.author}}</small>\n\n	            </ion-card-title>\n\n	            <p>\n\n	              <strong>{{ service.price }} SR {{ service.price_factor }}</strong>\n\n	            </p>\n\n	            <button ion-button block color="dark" (click)="showService(service)">{{\'View\' | translate}}</button>\n\n	          </ion-card-content>\n\n	        </ion-card>\n\n	      </ion-col>\n\n	    </ion-row>\n\n  	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\items\items.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Categories = (function () {
    function Categories(navCtrl, wpService, notification) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.notification.showLoading();
        this.wpService.getCategories().subscribe(function (result) {
            _this.categories = result;
            _this.notification.stopLoading();
        });
    }
    Categories.prototype.showItems = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* Services */], { category: category });
    };
    return Categories;
}());
Categories = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'celebrities-categories',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\categories\categories.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title color="dark">{{\'Select Services\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let category of categories" (click)="showItems(category)">\n\n            <ion-thumbnail item-start>\n\n                <img [src]="category.image">\n\n            </ion-thumbnail>\n\n            <h2>{{category.name | translate}}</h2>\n\n            <button ion-button item-end outline icon-right color="dark">{{\'Chose\' | translate}} <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\categories\categories.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */]])
], Categories);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Services = (function () {
    //savedServices: any = [];
    function Services(navParams, wpService, notification, navCtrl) {
        this.navParams = navParams;
        this.wpService = wpService;
        this.notification = notification;
        this.navCtrl = navCtrl;
        this.selectedItems = [];
        this.category = navParams.get('category');
        this.services = this.wpService.getServicesByCategory(this.category.term_id, '0');
        this.getSavedServices();
    }
    Services.prototype.getSavedServices = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.getCelebrityServicesByCategory(this.category.term_id)
            .subscribe(function (results) {
            _this.notification.stopLoading();
            for (var i = 0; i < results.length; i++) {
                var _result = results[i];
                _this.selectedItems.push(parseInt(_result.service_id));
            }
        });
    };
    Services.prototype.selectItem = function (service) {
        //console.log(service);
        if (this.selectedItems.indexOf(service.ID) > -1) {
            this.selectedItems.splice(this.selectedItems.indexOf(service.ID), 1);
        }
        else {
            this.selectedItems.push(service.ID);
        }
    };
    Services.prototype.isSelected = function (service) {
        return (this.selectedItems.indexOf(service.ID) > -1);
    };
    Services.prototype.saveItems = function () {
        var _this = this;
        var celeb = JSON.parse(localStorage.getItem('celebrity'));
        var _params = { celebrity_id: celeb.id, category_id: this.category.term_id, services: this.selectedItems };
        this.notification.showLoading();
        this.wpService.saveCelebirityServices(_params).subscribe(function (response) {
            //console.log( response );
            _this.notification.stopLoading();
            if (response.success) {
                _this.notification.showToast(response.message);
            }
            debugger;
        });
    };
    return Services;
}());
Services = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'celebrities-services',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\services\services.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title color="dark">{{\'Select Services\' | translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="saveItems()" color="dark">\n\n                Save\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        <ion-list>\n\n            <ion-item *ngIf="services.length == 0">No product to show</ion-item>\n\n            <ion-item *ngFor="let service of services | async" (click)="selectItem(service)">\n\n                <ion-thumbnail item-start>\n\n                    <img [src]="service.image">\n\n                </ion-thumbnail>\n\n                <h2>{{service.title | translate}}</h2>\n\n                <p>by {{service.author}}</p>\n\n                <p class="service-price">{{service.price}} SR {{service.price_factor}}</p>\n\n                <ion-icon name="checkmark-circle" item-end *ngIf="isSelected(service)"></ion-icon>\n\n                <ion-icon item-end name="radio-button-off" *ngIf="!isSelected(service)"></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\celebrities\services\services.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _d || Object])
], Services);

var _a, _b, _c, _d;
//# sourceMappingURL=services.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_success__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Register = (function () {
    function Register(navCtrl, wpService, notification, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.user = {};
        // 
        this.notification.showLoading();
        this.wpService.getCategories().subscribe(function (result) {
            _this.categories = result;
            _this.notification.stopLoading();
        });
        this.wpService.getLocations().subscribe(function (result) {
            _this.locations = result;
        });
        this.user.id_type = "national_id";
        this.vendorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'business_name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.business_name, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'fname': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.fname, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'lname': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.lname, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'mobile': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.mobile, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.email, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'instagram': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.instagram, []),
            'product_categories': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.product_categories, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'city': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.city, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'bank': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.bank, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'address': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.address, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'account_number': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.account_number, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'account_holder': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.account_holder, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            'id_type': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.id_type, []),
            'id_number': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.user.id_number, [])
        });
        this.events.subscribe('vendor:created', function (res) {
            console.log("Registration success");
            _this.navCtrl.popToRoot({
                animate: true,
                animation: 'md-transition',
                direction: 'back'
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_success__["a" /* RegisterSuccess */], { message: res.description });
            _this.vendorForm.reset();
        });
    }
    Register.prototype.register = function () {
        if (this.vendorForm.invalid) {
            this.notification.showToast("Enter all the required fields");
            return false;
        }
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* Terms */], { showAgree: true, user: this.vendorForm.value, type: 'vendor' }).present();
    };
    Register.prototype.openTerms = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* Terms */]);
        modal.present();
    };
    return Register;
}());
Register = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'vendor-register',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\register\vendor\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n    	<button ion-button icon-only menuToggle clear color="dark">\n\n				<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n        <ion-title color="dark">{{\'Vendor Registration\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form (submit)="register()" [formGroup]="vendorForm">\n\n	  	<ion-list>\n\n\n\n		  <ion-item>\n\n		    <ion-label stacked>{{ \'Store Name\' | translate}} <span class="astrix">*</span></ion-label>\n\n				<ion-input type="text" name="business_name" formControlName="business_name"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label stacked>{{ \'Name\'  | translate }} <span class="astrix">*</span></ion-label>\n\n		    <ion-input type="text" name="fname" formControlName="fname"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label stacked>{{\'Family\' | translate}} <span class="astrix">*</span></ion-label>\n\n		    <ion-input type="text" name="lname" formControlName="lname"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label stacked>{{\'Mobile Number\' | translate}} <span class="astrix">*</span></ion-label>\n\n		    <ion-input type="text" name="mobile" formControlName="mobile"></ion-input>\n\n		  </ion-item>\n\n			\n\n			<ion-item>\n\n		    <ion-label stacked>{{\'Email\' | translate}} <span class="astrix">*</span></ion-label>\n\n		    <ion-input type="email" name="email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n			\n\n			<ion-item>\n\n		    <ion-label stacked>{{\'Instagram Account\' | translate}}</ion-label>\n\n		    <ion-input type="text" name="instagram" formControlName="instagram"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label stacked>{{\'Kind of products\' | translate}} <span class="astrix">*</span></ion-label>\n\n				<ion-select name="product_categories" formControlName="product_categories" multiple="true">\n\n					<ion-option *ngFor="let category of categories" [value]="category.term_id">{{category.name | translate}}</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			\n\n			<ion-item>\n\n					<ion-label stacked>{{\'City\' | translate}} <span class="astrix">*</span></ion-label>\n\n					<ion-select name="city" formControlName="city">\n\n						<ion-option *ngFor="let location of locations" [value]="location.term_id">{{location.name | translate}}</ion-option>\n\n					</ion-select>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n					<ion-label stacked>{{\'Full Address\' | translate}} <span class="astrix">*</span></ion-label>\n\n					<ion-input type="text" name="address" formControlName="address" placeholder="{{ \'Street, Area, Neighborhood\' | translate }}"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n					<ion-label stacked>{{\'Bank Name\' | translate}} <span class="astrix">*</span></ion-label>\n\n					<ion-input type="text" name="bank" formControlName="bank"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n					<ion-label stacked>{{\'Account Number\' | translate}} <span class="astrix">*</span></ion-label>\n\n					<ion-input type="text" name="account_number" formControlName="account_number"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n					<ion-label stacked>{{\'Account Holder\' | translate}} <span class="astrix">*</span></ion-label>\n\n					<ion-input type="text" name="account_holder" formControlName="account_holder"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n					<ion-label stacked>{{\'ID Number\' | translate}}</ion-label>\n\n					<ion-select name="id_type" formControlName="id_type">\n\n						<ion-option value="national_id" selected>National Identification Number</ion-option>\n\n						<ion-option value="commercial_id">Commercial Registration No</ion-option>\n\n					</ion-select>\n\n					<ion-input type="text" name="id_number" formControlName="id_number"></ion-input>\n\n			</ion-item>\n\n\n\n		</ion-list>\n\n		<p>By registering you agree to our <a href="javascript:;" (click)="openTerms()">terms and conditions</a>.</p>\n\n		<button ion-button color="dark" block>{{\'REGISTER\' | translate}}</button>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\register\vendor\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_list_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__celebrities_list_list__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* Home */];
        this.tabCelebs = __WEBPACK_IMPORTED_MODULE_2__celebrities_list_list__["a" /* List */];
        this.tabVendors = __WEBPACK_IMPORTED_MODULE_1__vendors_list_list__["a" /* List */];
        this.tabCategories = __WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* Categories */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\tabs\tabs.html"*/'<ion-tabs class="raf-tabs">\n\n    <ion-tab [root]="tabHome" tabTitle="Home" tabIcon="md-home"></ion-tab>\n\n    <ion-tab [root]="tabCelebs" tabTitle="Celebrities" tabIcon="md-star" [rootParams]="{showToggle: true}"></ion-tab>\n\n    <ion-tab [root]="tabVendors" tabTitle="Vendors" tabIcon="md-list-box" [rootParams]="{showToggle: true}"></ion-tab>\n\n    <ion-tab [root]="tabCategories" tabTitle="Categories" tabIcon="md-apps" [rootParams]="{showToggle: true}"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register_success__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_services_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_service_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_address_address__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_review_review__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_payment_success_payment_success__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_wp_page_wp_page__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_vendors_vendors__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_terms_terms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_translate__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_deals_deals__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_celebrities_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_celebrities_profile_profile__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_celebrities_categories_categories__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_celebrities_services_services__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_celebrities_list_list__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_celebrities_view_view__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_celebrities_items_items__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_vendors_list_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_register_vendor_register__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_29_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* Landing */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_11__pages_services_services__["a" /* Services */],
            __WEBPACK_IMPORTED_MODULE_12__pages_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* Cart */],
            __WEBPACK_IMPORTED_MODULE_14__pages_address_address__["a" /* Address */],
            __WEBPACK_IMPORTED_MODULE_15__pages_review_review__["a" /* Review */],
            __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* Payment */],
            __WEBPACK_IMPORTED_MODULE_17__pages_payment_success_payment_success__["a" /* PaymentSuccess */],
            __WEBPACK_IMPORTED_MODULE_18__pages_wp_page_wp_page__["a" /* WpPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_21__pages_vendors_vendors__["a" /* Vendors */],
            __WEBPACK_IMPORTED_MODULE_27__pages_terms_terms__["a" /* Terms */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register_success__["a" /* RegisterSuccess */],
            __WEBPACK_IMPORTED_MODULE_30__pages_deals_deals__["a" /* Deals */],
            __WEBPACK_IMPORTED_MODULE_31__pages_celebrities_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_32__pages_celebrities_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_34__pages_celebrities_services_services__["a" /* Services */],
            __WEBPACK_IMPORTED_MODULE_33__pages_celebrities_categories_categories__["a" /* Categories */],
            __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__["a" /* Categories */],
            __WEBPACK_IMPORTED_MODULE_35__pages_celebrities_list_list__["a" /* List */],
            __WEBPACK_IMPORTED_MODULE_40__pages_vendors_list_list__["a" /* List */],
            __WEBPACK_IMPORTED_MODULE_36__pages_celebrities_view_view__["a" /* View */],
            __WEBPACK_IMPORTED_MODULE_37__pages_celebrities_items_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_41__pages_register_vendor_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                mode: 'ios',
                platforms: {
                    ios: {
                        statusbarPadding: false
                    }
                }
            }),
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_29_ng2_translate__["a" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* Http */]]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* Landing */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_11__pages_services_services__["a" /* Services */],
            __WEBPACK_IMPORTED_MODULE_12__pages_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* Cart */],
            __WEBPACK_IMPORTED_MODULE_14__pages_address_address__["a" /* Address */],
            __WEBPACK_IMPORTED_MODULE_15__pages_review_review__["a" /* Review */],
            __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* Payment */],
            __WEBPACK_IMPORTED_MODULE_17__pages_payment_success_payment_success__["a" /* PaymentSuccess */],
            __WEBPACK_IMPORTED_MODULE_18__pages_wp_page_wp_page__["a" /* WpPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* Search */],
            __WEBPACK_IMPORTED_MODULE_21__pages_vendors_vendors__["a" /* Vendors */],
            __WEBPACK_IMPORTED_MODULE_27__pages_terms_terms__["a" /* Terms */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register_success__["a" /* RegisterSuccess */],
            __WEBPACK_IMPORTED_MODULE_30__pages_deals_deals__["a" /* Deals */],
            __WEBPACK_IMPORTED_MODULE_31__pages_celebrities_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_32__pages_celebrities_profile_profile__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_34__pages_celebrities_services_services__["a" /* Services */],
            __WEBPACK_IMPORTED_MODULE_33__pages_celebrities_categories_categories__["a" /* Categories */],
            __WEBPACK_IMPORTED_MODULE_39__pages_categories_categories__["a" /* Categories */],
            __WEBPACK_IMPORTED_MODULE_35__pages_celebrities_list_list__["a" /* List */],
            __WEBPACK_IMPORTED_MODULE_40__pages_vendors_list_list__["a" /* List */],
            __WEBPACK_IMPORTED_MODULE_36__pages_celebrities_view_view__["a" /* View */],
            __WEBPACK_IMPORTED_MODULE_37__pages_celebrities_items_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_41__pages_register_vendor_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_notification_helper__["a" /* NotificationHelper */],
            __WEBPACK_IMPORTED_MODULE_23__providers_wp_service__["a" /* WPService */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__["a" /* Push */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wp_page_wp_page__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_celebrities_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_celebrities_profile_profile__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_vendor_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_translate__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import { Push, PushObject, PushOptions } from '@ionic-native/push';





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, notifications, menuCtrl, fcm, events, wpService, translate, alertCtrl) {
        /*****/
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.notifications = notifications;
        this.menuCtrl = menuCtrl;
        this.fcm = fcm;
        this.events = events;
        this.wpService = wpService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */];
        // rootPage: any = Landing;
        this.user = {};
        this.language = localStorage.getItem('language');
        var lang = localStorage.getItem('language');
        if (lang == null) {
            lang = 'en';
        }
        translate.setDefaultLang('en');
        translate.use(lang);
        localStorage.setItem('language', lang);
        this.initializeApp();
        // used for menu bar
        this.pages = [
            { title: 'Home', icon: 'md-home', component: __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */], params: {} },
            //{ title: 'Deals', icon: 'md-cash', component: Deals, params: {} },
            { title: 'About Us', icon: 'md-contact', component: __WEBPACK_IMPORTED_MODULE_5__pages_wp_page_wp_page__["a" /* WpPage */], params: { id: 74 } },
            { title: 'Contact Us', icon: 'md-mail', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* Contact */], params: {} },
        ];
        this.user = localStorage.getItem('user');
        //after login
        events.subscribe('user:login', function () {
            _this.user = localStorage.getItem('user');
            _this.wpService.savePushToken().subscribe(function (res) {
                console.log("Push token saved");
            });
        });
        // console.log(this.user);
        // if(this.user !== null){ //if user logged In
        //   this.notifications.showLoading();
        //   this.rootPage = Home;
        // }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // const options: PushOptions = {
            //    ios: {
            //        alert: 'true',
            //        badge: true,
            //        sound: 'true'
            //    }
            // };
            // const pushObject: PushObject = this.push.init(options);
            // pushObject.on('notification').subscribe((notification: any) => {
            //   console.log('Received a notification', notification)
            // });
            // pushObject.on('registration').subscribe((registration: any) => {
            //   console.log('Device registered', registration);
            //   localStorage.setItem('push_token', registration.registrationId );
            // });
            _this.fcm.getToken().then(function (token) {
                localStorage.setItem('push_token', token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                    // alert( JSON.stringify(data) )
                }
                ;
                var alert = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: data.aps.alert.title,
                    message: data.aps.alert.body,
                    buttons: ['Dismiss']
                });
                alert.present();
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                localStorage.setItem('push_token', token);
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, page.params);
    };
    MyApp.prototype.logOut = function () {
        //localStorage.clear();
        localStorage.removeItem('user'); //remove user data only
        this.menuCtrl.close();
        //this.rootPage = Landing;
        this.user = null;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
    };
    MyApp.prototype.openLogin = function () {
        //this.nav.push(Login,{});
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */], {});
        this.menuCtrl.close();
    };
    MyApp.prototype.openRegister = function () {
        //this.nav.push(Register,{});
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* Register */], {});
        this.menuCtrl.close();
    };
    MyApp.prototype.openVendorRegistration = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_register_vendor_register__["a" /* Register */], {});
        this.menuCtrl.close();
    };
    MyApp.prototype.openVendorLogin = function () {
        var ref = cordova.InAppBrowser.open('http://www.theraf.co/wp-admin', '_blank', 'toolbarposition=top,location=yes');
    };
    MyApp.prototype.pushPage = function (page) {
        switch (page) {
            case 'celeb_login':
                var celeb = localStorage.getItem('celebrity');
                if (celeb !== null) {
                    celeb = JSON.parse(celeb);
                    //this.nav.push( CelebritiesProfile, { celebrity: celeb } );
                    this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_celebrities_profile_profile__["a" /* Profile */], { celebrity: celeb });
                }
                else {
                    //this.nav.push( CelebritiesLogin,{});
                    this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_celebrities_login_login__["a" /* Login */], {});
                }
                break;
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-header>\n    <ion-navbar>\n    	<ion-title color="light"><img [src]="\'assets/images/logo-raf.png\'" class="app-logo" /></ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n\n    <!-- <div class="user">\n      <div class="avatar" *ngIf="user !== null">\n        <img src="assets/images/avatar.png" />\n        <span >{{user.display_name}}</span>\n        <button class="btn-logout" ion-button color="danger" (click)="logOut()">{{\'Logout\' | translate}}</button>\n      </div>\n      <div class="login" *ngIf="user == null">\n        <button ion-button block color="secondary" (click)="openLogin()">{{\'Login\' | translate}}</button>\n        <button ion-button block color="dark" (click)="openRegister()">{{\'Register\' | translate}}</button>\n      </div>\n    </div> -->\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon> <span>{{p.title | translate}}</span>\n      </button>\n\n      <ion-list-header *ngIf="user == null">\n        {{\'CUSTOMERS\' | translate}}\n      </ion-list-header>\n      <button menuClose ion-item (click)="openLogin()" *ngIf="user == null">\n        <ion-icon name="md-log-in"></ion-icon> <span>{{\'Login\' | translate}}</span>\n      </button>\n      <button menuClose ion-item (click)="openRegister()" *ngIf="user == null">\n        <ion-icon name="md-person-add"></ion-icon> {{\'Register\' | translate}}\n      </button>\n      <ion-list-header *ngIf="user == null">\n        {{\'VENDORS\' | translate}}\n      </ion-list-header>\n      <button menuClose ion-item (click)="openVendorLogin()" *ngIf="user == null">\n        <ion-icon name="md-log-in"></ion-icon> <span>{{\'Login\' | translate}}</span>\n      </button>\n      <button menuClose ion-item (click)="openVendorRegistration()" *ngIf="user == null">\n        <ion-icon name="md-person-add"></ion-icon> {{\'Register\' | translate}}\n      </button>\n\n      <ion-list-header *ngIf="user == null">\n        {{\'CELEBRITIES\' | translate}}\n      </ion-list-header>\n      <button menuClose ion-item (click)="pushPage(\'celeb_login\')" *ngIf="user == null">\n        <ion-icon name="md-log-in"></ion-icon> <span>{{\'Login\' | translate}}</span>\n      </button>\n\n      <ion-list-header>\n        {{\'LEGAL\' | translate}}\n      </ion-list-header>\n      <button menuClose ion-item (click)="openPage(\'terms\')">\n        <span>{{\'Terms and Conditions\' | translate}}</span>\n      </button>\n      <button menuClose ion-item (click)="openPage(\'terms\')">\n        <span>{{\'Privacy Policy\' | translate}}</span>\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n  <!-- <ion-footer>\n    <ion-toolbar>\n      <ion-segment color="dark" [(ngModel)]="language">\n        <ion-segment-button value="arabic">\n          Arabic\n        </ion-segment-button>\n        <ion-segment-button value="english">\n          English\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-footer> -->\n\n</ion-menu>\n\n<ion-nav [ngClass]="{ \'is_rtl\' : language == \'ar\' }" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_12__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_14__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_15_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Landing = (function () {
    function Landing(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Landing.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */], {}, {
            animate: true,
            animation: 'md-transition',
            direction: 'forward'
        });
    };
    Landing.prototype.openRegistrationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* Register */], {}, {
            animate: true,
            animation: 'md-transition',
            direction: 'forward'
        });
    };
    Landing.prototype.openTerms = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* Terms */]);
        modal.present();
    };
    return Landing;
}());
Landing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\landing\landing.html"*/'<ion-content padding>\n\n\n\n	<div class="logo">\n\n		<img src="assets/images/logo_new.png" alt="" width="160px" />\n\n	</div>\n\n\n\n	<div class="landing-btns">\n\n		<button ion-button color="light" block (click)="openLoginPage()">LOGIN</button>\n\n		<button ion-button color="dark" block (click)="openRegistrationPage()">REGISTER</button>\n\n		<p class="terms-conditoins" (click)="openTerms()">\n\n			By using this app, you agree to<br/>\n\n			<a>Terms and Conditions</a>\n\n		</p>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\landing\landing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], Landing);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Deals = (function () {
    function Deals(wpService, notification) {
        this.wpService = wpService;
        this.notification = notification;
        this.language = localStorage.getItem('language');
        this.deals = wpService.getDeals();
    }
    Deals.prototype.activateDeal = function (deal) {
        ///this.notification.showLoading();
        localStorage.setItem('deal', deal.id);
        this.notification.showToast("Deal Succesfully Activated");
        // this.wpService.activateDeal(deal.id)
        // 	.subscribe( response => {
        // 		this.notification.stopLoading();
        // 		console.log(response);
        // 	} )
    };
    return Deals;
}());
Deals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-deals',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\deals\deals.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<button ion-button icon-only menuToggle clear color="dark">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title color="dark">Deals</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only color="light">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="grid-deals">\n\n	  <ion-row>\n\n	    <ion-col col-12 col-sm-6 col-md-6 *ngFor="let deal of deals | async">\n\n	      <div class="deal card-ios" >\n\n	      	<div class="deal-icon">\n\n	      		<img class="logo" [src]="deal.image"/>\n\n	      	</div>\n\n	      	<div class="deal-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{deal.title}}\n\n					</div>\n\n					<div class="deal-button">\n\n						<button ion-button block color="dark" (click)="activateDeal(deal)">ACTIVATE DEAL</button>\n\n					</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\deals\deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_notification_helper__["a" /* NotificationHelper */]])
], Deals);

//# sourceMappingURL=deals.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_address__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_locations__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Cart = (function () {
    function Cart(navCtrl, notification, wpService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.alertCtrl = alertCtrl;
        this.is_loaded = false;
        this.coupon = '';
        this.coupon_discount = 0;
        this.coupon_applied = false;
        this.cart = {};
        // let coupon = localStorage.getItem('coupon');
        // let coupon_discount = localStorage.getItem('coupon_discount');
        // if(null !== coupon){
        // 	this.coupon = coupon;
        // 	this.coupon_discount = parseInt(coupon_discount);
        // 	this.coupon_applied = true;
        // }
    }
    Cart.prototype.getMyCart = function () {
        var _this = this;
        console.log("Getting cart content...");
        return new Promise(function (resolve, reject) {
            _this.wpService.getMyCart().subscribe(function (cart) {
                _this.cart = cart;
                _this.cart.discount = parseInt(cart.discount);
                _this.notification.stopLoading();
                if (cart.coupon && cart.coupon !== null) {
                    _this.coupon = cart.coupon.coupon_code;
                    _this.coupon_applied = true;
                }
                else {
                    _this.coupon = '';
                    _this.coupon_applied = false;
                }
                _this.is_loaded = true;
                resolve(true);
            });
        });
    };
    Cart.prototype.changeLocation = function () {
        var delivery_location = localStorage.getItem('delivery_location');
        var _index = parseInt(delivery_location) - 1;
        this.showLocationSelector(_index);
    };
    Cart.prototype.ionViewDidEnter = function () {
        // this.wpService.getCartCount().then( response =>{
        //   this.cart_total = response.count;
        // } )
        var delivery_location = localStorage.getItem('delivery_location');
        if (delivery_location == null) {
            this.showLocationSelector();
        }
        else {
            var _index = parseInt(delivery_location) - 1;
            this.selected_location = __WEBPACK_IMPORTED_MODULE_5__data_locations__["a" /* default */][_index];
            this.loadCart();
        }
    };
    Cart.prototype.showLocationSelector = function (selectedIndex) {
        var _this = this;
        if (selectedIndex === void 0) { selectedIndex = 0; }
        var alert = this.alertCtrl.create();
        alert.setTitle('Delivery Location');
        __WEBPACK_IMPORTED_MODULE_5__data_locations__["a" /* default */].forEach(function (location, index) {
            alert.addInput({
                type: 'radio',
                label: location,
                value: (index + 1).toString(),
                checked: index == selectedIndex
            });
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.setLocation(data);
            }
        });
        alert.present();
    };
    Cart.prototype.setLocation = function (location) {
        console.log("Selected Location: " + location);
        this.selected_location = __WEBPACK_IMPORTED_MODULE_5__data_locations__["a" /* default */][location - 1];
        localStorage.setItem('delivery_location', location);
        this.loadCart();
    };
    Cart.prototype.loadCart = function () {
        var _this = this;
        this.notification.showLoading();
        this.getMyCart().then(function () {
            var deal_id = localStorage.getItem('deal');
            if (deal_id) {
                _this.notification.showLoading('Appying Deal...');
                _this.wpService.activateDeal(deal_id)
                    .subscribe(function (response) {
                    _this.notification.stopLoading();
                    console.log(response);
                    if (response.status) {
                        _this.getMyCart();
                    }
                    _this.notification.showToast(response.message);
                });
            }
        });
    };
    Cart.prototype.removeItem = function (index) {
        var _this = this;
        this.notification.showLoading();
        this.wpService.removeFromCart(index).subscribe(function (cart) {
            _this.cart = cart;
            _this.notification.stopLoading();
            _this.is_loaded = true;
        });
    };
    Cart.prototype.goToAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__address_address__["a" /* Address */]);
    };
    Cart.prototype.applyCoupon = function () {
        var _this = this;
        if (this.coupon == '') {
            return false;
        }
        this.notification.showLoading();
        this.wpService.applyCoupon({ coupon: this.coupon }).subscribe(function (result) {
            if (result.status) {
                // localStorage.setItem('coupon', this.coupon);
                // localStorage.setItem('coupon_discount', result.discount.value);
                // //Apply coupon discount
                // this.coupon_discount = result.discount.value;
                //this.coupon_applied = true;
                //this.notification.showLoading();
                _this.getMyCart();
            }
            else {
                _this.notification.stopLoading();
            }
            _this.notification.showToast(result.message);
            //this.notification.stopLoading();
        });
    };
    Cart.prototype.removeCoupon = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.removeCoupon().subscribe(function (result) {
            if (result.status) {
                // localStorage.removeItem('coupon');
                // localStorage.removeItem('coupon_discount');
                // this.coupon_discount = 0;
                // this.coupon = '';
                // this.coupon_applied = false;
                //this.notification.showLoading();
                _this.getMyCart();
            }
            else {
                _this.notification.stopLoading();
            }
            _this.notification.showToast(result.message);
            //this.notification.stopLoading();
        });
    };
    return Cart;
}());
Cart = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">My Cart</ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button ion-button icon-only color="light">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  	<p *ngIf="cart.items && cart.items.length == 0" class="center no-item">Your cart is empty</p>\n\n\n\n  	<ion-card class="card-coupon" *ngIf="is_loaded && cart.items.length > 0">\n\n  		<ion-card-content class="shipping-note">\n\n  			Shipping to {{selected_location}}\n\n  			<button ion-button small outline (click)="changeLocation()">Change</button>\n\n  		</ion-card-content>\n\n  	</ion-card>\n\n\n\n	<ion-card *ngIf="is_loaded && cart.items.length > 0">\n\n		<ion-card-content>\n\n			<ion-list>\n\n\n\n			  <ion-item *ngFor="let item of cart.items" class="cart-item">\n\n			    <div class="item-image">\n\n			      <img [src]="item.image">\n\n			    </div>\n\n			    <div class="item-details">\n\n				    <h2>{{ item.title }}</h2>\n\n				    <p>By: {{item.author}}</p>\n\n				    <p>Qty: {{item.quantity}}</p>\n\n				    <p *ngIf="item.date"> {{item.date}} |  {{item.time}}</p>\n\n			    </div>\n\n			    <div class="item-action">\n\n			    	<span class="price">{{item.price}} SR</span>\n\n			    	<button ion-button outline color="danger" (click)="removeItem(item.key)">{{\'DELETE\' | translate}}</button>\n\n			    </div>\n\n			  </ion-item>\n\n\n\n			</ion-list>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card class="card-coupon" *ngIf="is_loaded && cart.items.length > 0">\n\n		<ion-card-content >\n\n			<div class="coupon-input-wrapper">\n\n				<ion-list>\n\n				  <ion-item>\n\n				    <ion-input type="text" placeholder="{{\'Coupon Code\' | translate}}" [(ngModel)]="coupon"></ion-input>\n\n				  </ion-item>\n\n				</ion-list>\n\n				<button *ngIf="!coupon_applied" ion-button color="dark" (click)="applyCoupon()">{{\'Apply\' | translate}}</button>\n\n				<button *ngIf="coupon_applied" ion-button color="danger" (click)="removeCoupon()">{{\'Remove\' | translate}}</button>\n\n			</div>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card *ngIf="is_loaded && cart.items.length > 0">\n\n		<ion-card-content>\n\n			<table class="cart-details">\n\n				<tr>\n\n					<th>{{\'Subtotal\' | translate}}</th>\n\n					<td width="100px">{{cart.subtotal}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Shipping Charges\' | translate}}</th>\n\n					<td width="100px">{{cart.shipping_charges}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Discount\' | translate}}</th>\n\n					<td>{{cart.discount + coupon_discount}} SR</td>\n\n				</tr>\n\n				<tr>\n\n					<th>{{\'Total\' | translate}}</th>\n\n					<td>{{cart.total - coupon_discount}} SR</td>\n\n				</tr>\n\n			</table>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	\n\n\n\n	<div class="btn-wrapper" *ngIf="is_loaded && cart.items.length > 0">\n\n		<button ion-button block color="dark" (click)="goToAddress()">{{\'CHECKOUT\' | translate}}</button>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Cart);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vendors_vendors__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_locations__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Services = (function () {
    function Services(navCtrl, navParams, notification, wpService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = notification;
        this.wpService = wpService;
        this.alertCtrl = alertCtrl;
        this.browse_by = 'product';
        if (this.navParams.get('category') != undefined &&
            this.navParams.get('search') != undefined &&
            this.navParams.get('author') == undefined) {
            this.category = this.navParams.get('category');
            this.area = this.navParams.get('search');
            this.page_title = this.category.name;
            this.notification.showLoading();
            this.wpService.getServicesByCategory(this.category.term_id, this.area).subscribe(function (services) {
                _this.services = services;
                _this.notification.stopLoading();
            });
            this.browse_by = 'product';
        }
        else if (this.navParams.get('author') != undefined &&
            this.navParams.get('search') != undefined && this.navParams.get('category') != undefined) {
            this.category = this.navParams.get('category');
            this.author = this.navParams.get('author');
            this.area = this.navParams.get('search');
            this.page_title = this.author.name;
            this.notification.showLoading();
            this.wpService.getByAuthor(this.author.id, this.category.term_id, this.area).subscribe(function (services) {
                _this.services = services;
                _this.notification.stopLoading();
            });
            this.browse_by = 'vendor';
        }
        else if (this.navParams.get('author') != undefined) {
            this.author = this.navParams.get('author');
            this.notification.showLoading();
            this.wpService.getByAuthor(this.author.id).subscribe(function (services) {
                _this.services = services;
                _this.notification.stopLoading();
            });
            this.browse_by = 'vendor';
        }
        else {
            this.category = this.navParams.get('category');
            this.services = [];
            if (this.category && this.category.needs_location) {
                this.notification.showLoading();
                this.showLocationSelector();
                this.notification.stopLoading();
                // this.wpService.getLocations().subscribe( locations => {
                //   this.notification.stopLoading();
                //     this.notification.showSelectLocation( 
                //       'Locations', 
                //       'Choose Your Area',
                //       locations,
                //       (data) => { this.search(data) });
                // } );
            }
            else {
                //load services irrespective of the location
                this.area = 0; //set location to 0 => load services for all locations
                this.notification.showLoading();
                this.wpService.getServicesByCategory(this.category.term_id, this.area).subscribe(function (services) {
                    _this.services = services;
                    _this.notification.stopLoading();
                });
            }
        }
    }
    Services.prototype.showLocationSelector = function (selectedIndex) {
        var _this = this;
        if (selectedIndex === void 0) { selectedIndex = 0; }
        var alert = this.alertCtrl.create();
        alert.setTitle('Delivery Location');
        __WEBPACK_IMPORTED_MODULE_7__data_locations__["a" /* default */].forEach(function (location, index) {
            alert.addInput({
                type: 'radio',
                label: location,
                value: (index + 1).toString(),
                checked: index == selectedIndex
            });
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) { _this.setLocation(data); }
        });
        alert.present();
    };
    Services.prototype.setLocation = function (location) {
        console.log("Selected Location: " + location);
        //this.selected_location = LOCATIONS[ location - 1 ];
        localStorage.setItem('delivery_location', location);
        this.search(location);
    };
    Services.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wpService.getCartCount().subscribe(function (response) {
            _this.cart_total = response.count;
        });
    };
    Services.prototype.showService = function (service) {
        this.notification.showLoading();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* Service */], { service: service });
    };
    Services.prototype.showCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* Cart */]);
    };
    Services.prototype.search = function (area) {
        var _this = this;
        if (this.navParams.get('category') != undefined && area != undefined) {
            this.category = this.navParams.get('category');
            this.area = area;
            this.page_title = this.category.name;
            this.notification.showLoading();
            this.wpService.getServicesByCategory(this.category.term_id, area).subscribe(function (services) {
                _this.services = services;
                _this.notification.stopLoading();
            });
            this.browse_by = 'product';
        }
    };
    Services.prototype.browseByVendor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__vendors_vendors__["a" /* Vendors */], { category: this.category,
            area: this.area }, {
            animate: true,
            animation: 'md-transition',
            direction: 'forward'
        });
    };
    Services.prototype.browseByProduct = function () {
        this.navCtrl.popToRoot({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    return Services;
}());
Services = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\services\services.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">{{ page_title | translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="dark" (click)="showCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <div class="segment-top">\n\n    <ion-segment color="dark" [(ngModel)]="browse_by">\n\n      <ion-segment-button  value="product" (ionSelect)="browseByProduct()">\n\n        {{"Browse By Product" | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="vendor" (ionSelect)="browseByVendor()">\n\n        {{"Browse By Vendor" | translate}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <ion-grid class="list-services">\n\n    <ion-row>\n\n      <ion-col col-12 *ngIf="services && services.length == 0"><p class="center no-result">No Service Found</p></ion-col>\n\n      <ion-col col-6 col-sm-4 *ngFor="let service of services">\n\n        <ion-card>\n\n          <!-- <img src="{{ service.image }}"/> -->\n\n          <div id="service-thumb" [ngStyle]="{\'background-image\': \'url(\' + service.image + \')\'}"></div>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              {{ service.title }}\n\n              <br/>\n\n              <small>by {{service.author}}</small>\n\n            </ion-card-title>\n\n            <p>\n\n              <strong>{{ service.price }} SR {{ service.price_factor }}</strong>\n\n            </p>\n\n            <button ion-button block color="dark" (click)="showService(service)">{{\'View\' | translate}}</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\services\services.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_3__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Services);

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Login = (function () {
    function Login(navCtrl, viewCtrl, authService, wpService, notification, events) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.wpService = wpService;
        this.notification = notification;
        this.events = events;
        this.login = {};
    }
    Login.prototype.doLogin = function () {
        var _this = this;
        this.notification.showLoading();
        this.authService.login(this.login)
            .then(function (response) {
            // 		//console.log(); 
            localStorage.setItem('user', JSON.stringify(response));
            _this.events.publish('user:login', true);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* Home */], {}, {
                animate: true,
                animation: 'md-transition',
                direction: 'forward'
            });
            _this.notification.stopLoading();
        }).catch(function (err) {
            _this.notification.stopLoading();
            if (err.status == 403) {
                _this.notification.showToast("Invalid username or password");
                return false;
            }
            _this.notification.showToast("Error connecting to server. Please try again");
            console.log(err);
        });
    };
    Login.prototype.dismiss = function () {
        //this.viewCtrl.dismiss();
        this.navCtrl.pop({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n			<button ion-button icon-only menuToggle clear color="dark">\n\n					<ion-icon name="menu"></ion-icon>\n\n			</button>\n\n    	<ion-title color="dark">{{\'Login\' | translate}}</ion-title>\n\n    	<!-- <ion-buttons end>\n\n	      <button ion-button (click)="dismiss()" class="btn-white">\n\n	        <ion-icon name="md-close"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<form>\n\n	  	<ion-list>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Username</ion-label>\n\n		    <ion-input type="text" name="username" [(ngModel)]="login.username"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Password</ion-label>\n\n		    <ion-input type="password" name="password" [(ngModel)]="login.password"></ion-input>\n\n		  </ion-item>\n\n\n\n		</ion-list>\n\n		<button type="button" ion-button color="dark" block (click)="doLogin()">{{\'LOGIN\' | translate}}</button>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_success__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Register = (function () {
    function Register(navCtrl, viewCtrl, wpService, notification, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.user = {};
        this.events.subscribe('user:created', function (res) {
            console.log("Registration success");
            _this.navCtrl.popToRoot({
                animate: true,
                animation: 'md-transition',
                direction: 'back'
            });
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_success__["a" /* RegisterSuccess */], { message: res.description });
        });
    }
    Register.prototype.register = function () {
        this.termsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* Terms */], { showAgree: true, user: this.user, type: 'customer' });
        this.termsModal.present();
    };
    Register.prototype.dismiss = function () {
        this.navCtrl.pop({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    Register.prototype.openTerms = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* Terms */]);
        modal.present();
    };
    return Register;
}());
Register = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\register\register.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button icon-only menuToggle clear color="dark">\n\n				<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    	<ion-title color="dark">{{\'Customer Registration\' | translate}}</ion-title>\n\n    	<!-- <ion-buttons end>\n\n	      <button ion-button (click)="dismiss()" class="btn-white">\n\n	        <ion-icon name="md-close"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  	<form (submit)="register()">\n\n	  	<ion-list>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>First Name</ion-label>\n\n		    <ion-input type="text" name="fname" [(ngModel)]="user.fname"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Last Name</ion-label>\n\n		    <ion-input type="text" name="lname" [(ngModel)]="user.lname"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n			  <ion-label floating>Date Of Birth</ion-label>\n\n			  <ion-datetime displayFormat="MM/DD/YYYY" name="dob" min="1900" max="2000" [(ngModel)]="user.dob"></ion-datetime>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Email</ion-label>\n\n		    <ion-input type="email" name="email" [(ngModel)]="user.email"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Confirm Email</ion-label>\n\n		    <ion-input type="email" name="cemail" [(ngModel)]="user.cemail"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Mobile</ion-label>\n\n		    <ion-input type="text" name="mobile" [(ngModel)]="user.mobile"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Password</ion-label>\n\n		    <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-label floating>Confirm Password</ion-label>\n\n		    <ion-input type="password" name="cpassword" [(ngModel)]="user.cpassword"></ion-input>\n\n		  </ion-item>\n\n\n\n		</ion-list>\n\n		<p>By registering you agree to our <a href="javascript:;" (click)="openTerms()">terms and conditions</a>.</p>\n\n		<button ion-button color="dark" block>{{\'REGISTER\' | translate}}</button>\n\n	</form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//declare var $: any;
var Service = (function () {
    function Service(navCtrl, navParams, notification, wpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = notification;
        this.wpService = wpService;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.times = [];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.variant_price = 0;
        this.booked_slots = [];
        //----
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var prev = {
            title: 'Previous Days',
            startTime: new Date(Date.UTC(1900, 1, 1)),
            endTime: yesterday,
            allDay: true
        };
        this.eventSource.push(prev);
        //-------------
        this.item = {};
        this.item.variants = {};
        this.item.questions = {};
        this.item.days = 1;
        this.item.quantity = 1;
        this.language = localStorage.getItem('language');
        this.service = this.navParams.get('service');
        //Get Celbrity Id from NavParams
        this.celebrity_id = this.navParams.get('celebrity_id');
        this.wpService.getService(this.service.ID).subscribe(function (service) {
            console.log("Service:", service);
            _this.service = service;
            _this.item.service_id = _this.service.ID;
            _this.item.hours = _this.service.minimum_hours;
            for (var _i = 0, _a = service.variants; _i < _a.length; _i++) {
                var variant = _a[_i];
                // console.log( variant );
                _this.item.variants[variant.variant_name] = variant.variants_optionss[0].variant_name;
            }
            if (service.prepration_days > 0) {
                var end_time = new Date();
                if (service.prepration_days > 1) {
                    end_time.setDate(end_time.getDate() + (service.prepration_days - 1));
                }
                var _d = new Date();
                _d.setDate(_d.getDate() + parseInt(service.prepration_days));
                _this.calendar.currentDate = _d;
                var _day = {
                    title: 'Prepration Days',
                    startTime: new Date(),
                    endTime: end_time,
                    allDay: true
                };
                _this.eventSource.push(_day);
            }
            //checking for unavailable days and times
            for (var i = 0; i < service.bookings.length; i++) {
                var _booking = service.bookings[i];
                //console.log( _booking );
                var _end = new Date(_booking.date);
                _end.setDate(_end.getDate() + 1);
                if (_booking.all_day == 1) {
                    var _day = {
                        title: 'Booked Days',
                        startTime: new Date(_booking.date),
                        endTime: _end,
                        allDay: true
                    };
                    _this.eventSource.push(_day);
                }
            }
            //console.log(this.eventSource);
            _this.notification.stopLoading();
            if (service.manage_calendar) {
                _this.initCalendar();
            }
        });
    }
    Service.prototype.initCalendar = function () {
        this.item.date = this.calendar.currentDate;
        console.log(this.calendar.currentDate);
        var that = this;
        var times = [];
        for (var i = 0; i < this.service.timings.length; i++) {
            var _timing = this.service.timings[i];
            if (i == 0) {
                this.item.time = _timing.from;
            }
            for (var j = parseInt(_timing.from); j <= (parseInt(_timing.to) - 1); j++) {
                times.push(j);
            }
        }
        this.times = times;
        // $("#datetimepicker").datetimepicker({
        //   inline:true,
        //   minDate: 0,
        //   allowTimes: times,
        //   onSelectDate: function(ct){
        //     console.log(ct);
        //     that.item.date = ct;
        //   },
        //   onSelectTime: function(ct){
        //     that.item.time = ct;
        //   }
        // });
        //force calendar to reload events
        this.eventCalendar.loadEvents();
    };
    Service.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wpService.getCartCount().subscribe(function (response) {
            _this.cart_total = response.count;
        });
        document.querySelector("body").classList.add('is_rtl');
    };
    Service.prototype.fakeArray = function (start, end) {
        var _arr = [];
        for (var i = start; i <= end; i++) {
            _arr.push(i);
        }
        return _arr;
    };
    Service.prototype.onViewTitleChanged = function (title) {
        this.calendarTitle = title;
    };
    // today(){
    //   this.calendar.currentDate = new Date();
    // }
    Service.prototype.addToCart = function () {
        //console.log( this.item );
        var _this = this;
        //modify to match the format on website
        var d = new Date(this.item.date);
        this.item.date = d.getDate() + ' ' + this.months[d.getMonth()] + ', ' + d.getFullYear();
        //filer only hour in time
        var t = this.item.time;
        //this.item.time = t.getHours();
        var required_questions = [];
        for (var i = 0; i < this.service.questions.length; i++) {
            var _question = this.service.questions[i];
            if (_question.is_required) {
                required_questions.push(_question.question);
            }
        }
        var answered = Object.keys(this.item.questions);
        var is_valid = true;
        if (required_questions.length > answered.length) {
            is_valid = false;
        }
        else {
            for (var i = 0; i < required_questions.length; i++) {
                if (answered.indexOf(required_questions[i]) < 0) {
                    is_valid = false;
                }
            }
        }
        if (!is_valid) {
            this.notification.showToast("Please Enter all the required fields.");
            return false;
        }
        //attach celeb id to item if from celeb page
        if (this.celebrity_id) {
            this.item.celebrity_id = this.celebrity_id;
        }
        console.log("Item", this.item);
        this.notification.showLoading();
        this.wpService.addToCart(this.item).subscribe(function (response) {
            // console.log( response );
            _this.cart_total = response.count;
            //save cart id to loacl storage
            localStorage.setItem('cart_id', response.cart_id);
            _this.notification.showConfirm('Success', _this.service.title + ' has been successfully added to your cart.', function () { _this.navCtrl.pop(); }, function () { _this.showCart(); });
            _this.notification.stopLoading();
        }, function (err) {
            _this.notification.stopLoading();
            if (err.status == 403) {
                _this.notification.showToast("You are not authorized to perform this action");
            }
            else {
                _this.notification.showToast("Error connecting to server");
            }
        });
    };
    Service.prototype.showCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* Cart */]);
    };
    Service.prototype.onChangeDate = function (date) {
        this.item.date = date;
        this.booked_slots = [];
        var _y = date.getFullYear();
        var _m = date.getMonth();
        var _d = date.getDate();
        var date_str = _y + '-' + (_m < 9 ? ('0' + (_m + 1)) : _m) + '-' + (_d < 9 ? ('0' + (_d + 1)) : _d);
        if (this.service && this.service.bookings) {
            for (var i = 0; i < this.service.bookings.length; i++) {
                var _booking = this.service.bookings[i];
                if (date_str == _booking.date) {
                    //console.log(  )
                    for (var i_1 = 0; i_1 < _booking.time.length; i_1++) {
                        var slot_index = _booking.time[i_1];
                        var slot = this.service.timings[slot_index];
                        for (var i_2 = parseInt(slot.from); i_2 < (slot.to - 1); i_2++) {
                            this.booked_slots.push(i_2);
                        }
                    }
                }
            }
        }
    };
    Service.prototype.addVariantPrice = function (variant) {
        var _this = this;
        var variant_name = this.item.variants[variant.variant_name];
        var keepGoing = true;
        variant.variants_optionss.forEach(function (st) {
            if (st.variant_name == variant_name && keepGoing) {
                _this.variant_price = parseFloat(st.variant_price);
                keepGoing = false;
            }
        });
    };
    Service.prototype.isOutofstock = function (service) {
        var k = Object.keys(this.item.variants);
        var selected_variant = this.item.variants[k[0]];
        var out_of_stock = false;
        if (service.manage_stock && service.stock == 0) {
            out_of_stock = true;
        }
        if (this.service.variants) {
            this.service.variants.forEach(function (val, i) {
                if (val.variant_name == k[0]) {
                    val.variants_optionss.forEach(function (val2, j) {
                        if (val2.variant_name == selected_variant) {
                            if (val2.variant_stock == 0) {
                                out_of_stock = true;
                            }
                            else {
                                out_of_stock = false;
                            }
                        }
                    });
                }
            });
        }
        return out_of_stock;
    };
    Service.prototype.toFloat = function (num) {
        return parseFloat(num);
    };
    return Service;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__["a" /* CalendarComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar_calendar__["a" /* CalendarComponent */])
], Service.prototype, "eventCalendar", void 0);
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\service\service.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">{{ service.title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="dark" (click)="showCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page" [ngClass]="{ \'rtl\' : language == \'ar\' }">\n\n  <ion-card>\n\n\n\n    <ion-slides [ngStyle]="{ \'height\' : \'200px\' }">\n\n\n\n      <ion-slide *ngFor="let image of service.gallery" class="productSlide">\n\n        <img [src]="image"/>\n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n    <ion-card-content class="service-card">\n\n\n\n      <div class="service-availability">\n\n        <span class="available" *ngIf="service.availability == \'available\'">Available</span>\n\n        <span class="not-available" *ngIf="service.availability == \'not_available\'">Not Available</span>\n\n      </div>\n\n\n\n      <ion-card-title>\n\n        {{ service.title }}\n\n        <br/>\n\n        <small>by {{service.author}}</small>\n\n      </ion-card-title>\n\n      <h2>{{ toFloat(service.price) + variant_price}} SR {{ service.price_factor }}</h2>\n\n      <p>\n\n        {{ service.description }}\n\n      </p>\n\n\n\n      <div class="properties" *ngIf="service.attributes && service.attributes.length > 0">\n\n        <table class="specifications">\n\n          <tr *ngFor="let attr of service.attributes">\n\n            <th>{{attr.attr_title}}</th>\n\n            <td>{{attr.attr_value}}</td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n    <ion-list>\n\n      <ion-item *ngFor="let variant of service.variants">\n\n          <ion-label>{{variant.variant_name}}</ion-label>\n\n          <ion-select name="variants[][{{variant.variant_name}}]" (ionChange)="addVariantPrice(variant)" [(ngModel)]="item.variants[variant.variant_name]"  >\n\n            <ion-option *ngFor="let option of variant.variants_optionss" value="{{option.variant_name}}">{{option.variant_name}} <span *ngIf="option.variant_price && option.variant_price > 0"> + {{option.variant_price}} SR</span></ion-option>\n\n          </ion-select>\n\n\n\n      </ion-item>\n\n\n\n      <ion-item class="questions-input" *ngFor="let q of service.questions">\n\n          <ion-label stacked>{{q.question}} <span class="red" *ngIf="q.is_required">*</span></ion-label>\n\n          <ion-input type="text" [required]="q.is_required" name="questions[][{{q.question}}]" [(ngModel)]="item.questions[q.question]"></ion-input>\n\n      </ion-item>\n\n        \n\n      \n\n\n\n      <ion-item *ngIf="service.manage_calendar">\n\n          <div class="calendar-month">{{calendarTitle}} <!-- <a (click)="today()">TODAY</a> --></div>\n\n          <calendar [eventSource]="eventSource" \n\n            [calendarMode]="calendar.mode" \n\n            [currentDate]="calendar.currentDate"\n\n            [lockSwipeToPrev]="false" \n\n            (onCurrentDateChanged)="onChangeDate($event)"\n\n            (onTitleChanged)="onViewTitleChanged($event)"></calendar>\n\n          <!-- <ion-label>Start Date</ion-label> -->\n\n          <!-- <ion-datetime displayFormat="DD MMMM, YYYY" pickerFormat="DD MM YYYY" name="date" [(ngModel)]="item.date"></ion-datetime> -->\n\n\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n          <ion-label>Start Time</ion-label>\n\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" name="time" [(ngModel)]="item.time"></ion-datetime>\n\n      </ion-item> -->\n\n      <ion-item *ngIf="service.manage_calendar">\n\n        <ul class="times-list">\n\n          <li *ngFor="let time of times" [ngClass]="{ \'disabled\' : ( booked_slots.indexOf( time ) > -1 ) }"><label [ngClass]="{ active: item.time == time }"><input type="radio" name="time" [(ngModel)]="item.time" value="{{time}}" />{{time}} : 00</label></li>\n\n        </ul>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>{{\'Quantity\' | translate}}</ion-label>\n\n        <ion-input type="number" placeholder="Enter Quantity" name="quantity" [(ngModel)]="item.quantity"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="service.is_hourly">\n\n        <ion-label>{{\'Number of hours\' | translate}}</ion-label>\n\n        <ion-select name="hours" [(ngModel)]="item.hours">\n\n          <ion-option *ngFor="let i of fakeArray( service.minimum_hours, service.maximum_hours )" value="{{i}}">{{i}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="service.is_daily">\n\n        <ion-label>{{\'Number of days\' | translate}}</ion-label>\n\n        <ion-select name="days" [(ngModel)]="item.days">\n\n          <ion-option *ngFor="let i of fakeArray( 1, 30 )" value="{{i}}">{{i}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <div class="card-ios">\n\n    <button *ngIf="!isOutofstock(service)" [disabled]="service.availability != \'available\'" ion-button block color="dark" href="javascript:;" (click)="addToCart()">{{\'Add To Cart\' | translate}}</button>\n\n    <button *ngIf="isOutofstock(service)" disabled ion-button block color="dark">{{\'Out of Stock\' | translate }}</button>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\service\service.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WpPage = WpPage_1 = (function () {
    function WpPage(navCtrl, notification, wpService, params, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.params = params;
        this.translate = translate;
        this.page = {};
        this.is_loaded = false;
        this.hideBackButton = false;
        this.showSearchBar = false;
        this.hideBackButton = this.params.get('hideBackButton');
        console.log(this.hideBackButton);
        this.language = localStorage.getItem('language');
        notification.showLoading();
        this.wpService.getPage(this.params.get('id')).subscribe(function (page) {
            _this.page.title = page.post_title;
            _this.page.content = page.post_content;
            notification.stopLoading();
            _this.is_loaded = true;
        });
    }
    WpPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wpService.getCartCount().subscribe(function (res) {
            _this.cart_total = res.count;
        });
    };
    WpPage.prototype.switchLanguage = function (lang) {
        this.language = lang;
        localStorage.setItem('language', lang);
        this.translate.use(lang);
    };
    WpPage.prototype.dismiss = function () {
        this.navCtrl.pop({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    WpPage.prototype.showCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* Cart */]);
    };
    WpPage.prototype.systemLink = function (link) {
        cordova.InAppBrowser.open(link, '_system');
    };
    WpPage.prototype.toggleSearchBar = function () {
        this.showSearchBar = !this.showSearchBar;
        if (this.showSearchBar) {
            this.content.scrollToTop();
        }
    };
    WpPage.prototype.textSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* Search */], { s: this.searchTerm });
    };
    WpPage.prototype.openPage = function (page) {
        switch (page) {
            case 'services':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* Home */], {}, {
                    animate: false,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'about':
                this.navCtrl.push(WpPage_1, { id: 74, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'contact':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* Contact */], { hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'terms':
                this.navCtrl.push(WpPage_1, { id: 313, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'privacy':
                this.navCtrl.push(WpPage_1, { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'login':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* Login */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'register':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* Register */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
        }
    };
    return WpPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], WpPage.prototype, "content", void 0);
WpPage = WpPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wp-page',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\wp-page\wp-page.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true">\n\n        <button ion-button icon-only menuToggle clear color="dark">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    	<ion-title color="light">{{page.title | translate}}</ion-title>\n\n    	<ion-buttons end>\n\n	      \n\n            <button ion-button icon-only clear color="dark" (click)="showCart()">\n\n                <ion-icon name="cart"></ion-icon>\n\n                <span class="cart-count">{{cart_total}}</span>\n\n            </button>\n\n	    </ion-buttons>\n\n    </ion-navbar>\n\n    <!-- <div class="search-bar-wrap">\n\n        <div class="search-bar">\n\n            <ion-searchbar [(ngModel)]="searchTerm" ></ion-searchbar>\n\n            <button ion-button outline small (click)="textSearch()" color="light">{{\'SEARCH\' | translate}}</button>\n\n        </div>\n\n    </div> -->\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n    <ion-card *ngIf="is_loaded" class="card-page">\n\n        <ion-card-header>{{ page.title }}</ion-card-header>\n\n        <ion-card-content>\n\n            <div [innerHtml]="page.content"></div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\wp-page\wp-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateService */]])
], WpPage);

var WpPage_1;
//# sourceMappingURL=wp-page.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Search = (function () {
    function Search(navCtrl, navParams, notification, wpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = notification;
        this.wpService = wpService;
        this.categories = this.wpService.getCategories();
        // this.notification.showLoading();
        // this.wpService.searchServices({area: this.navParams.get('area'), s: this.navParams.get('s')}).subscribe( services => {
        // 	// this.cart_total = res.count;
        // 	this.services = services;
        // 	this.notification.stopLoading();
        // } )	
    }
    Search.prototype.showService = function (service) {
        this.notification.showLoading();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* Service */], { service: service });
    };
    Search.prototype.getServices = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__services_services__["a" /* Services */], { category: category, search: this.navParams.get('area') });
    };
    return Search;
}());
Search = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title color="dark">Search</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only color="light" (click)="showCart()">\n\n        <ion-icon name="cart"></ion-icon>\n\n        <span class="cart-count">{{cart_total}}</span>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n	<ion-grid class="grid-services">\n\n	  <ion-row>\n\n	    <ion-col col-6 col-sm-4 col-md-3 *ngFor="let category of categories | async">\n\n	      <div class="service card-ios" (click)="getServices(category)">\n\n	      	<div class="service-icon">\n\n	      		<img class="logo" [src]="category.image"/>\n\n	      	</div>\n\n	      	<div class="service-name" [ngClass]="{ rtl : language == \'ar\' }">\n\n	      		{{category.name | translate}}\n\n	      	</div>\n\n	      </div>\n\n	    </ion-col>\n\n	  </ion-row>\n\n	</ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */]])
], Search);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wp_page_wp_page__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Contact = Contact_1 = (function () {
    function Contact(navCtrl, notification, wpService, params, translate) {
        this.navCtrl = navCtrl;
        this.notification = notification;
        this.wpService = wpService;
        this.params = params;
        this.translate = translate;
        this.hideBackButton = false;
        this.showSearchBar = false;
        this.contact = {};
        this.hideBackButton = this.params.get('hideBackButton');
        this.language = localStorage.getItem('language');
    }
    Contact.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wpService.getCartCount().subscribe(function (res) {
            _this.cart_total = res.count;
        });
    };
    Contact.prototype.switchLanguage = function (lang) {
        this.language = lang;
        localStorage.setItem('language', lang);
        this.translate.use(lang);
    };
    Contact.prototype.sendMessage = function () {
        var _this = this;
        this.notification.showLoading();
        this.wpService.contactUs(this.contact).subscribe(function (response) {
            _this.notification.stopLoading();
            _this.clearForm();
            _this.notification.showToast(response.message);
        });
    };
    Contact.prototype.clearForm = function () {
        this.contact.name = '';
        this.contact.email = '';
        this.contact.message = '';
    };
    Contact.prototype.dismiss = function () {
        this.navCtrl.pop({
            animate: true,
            animation: 'md-transition',
            direction: 'back'
        });
    };
    Contact.prototype.showCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* Cart */]);
    };
    Contact.prototype.systemLink = function (link) {
        cordova.InAppBrowser.open(link, '_system');
    };
    Contact.prototype.toggleSearchBar = function () {
        this.showSearchBar = !this.showSearchBar;
        if (this.showSearchBar) {
            this.content.scrollToTop();
        }
    };
    Contact.prototype.textSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* Search */], { s: this.searchTerm });
    };
    Contact.prototype.openPage = function (page) {
        switch (page) {
            case 'services':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* Home */], {}, {
                    animate: false,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'about':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wp_page_wp_page__["a" /* WpPage */], { id: 74, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'contact':
                this.navCtrl.push(Contact_1, { hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'terms':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wp_page_wp_page__["a" /* WpPage */], { id: 313, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'privacy':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wp_page_wp_page__["a" /* WpPage */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'login':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* Login */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
            case 'register':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* Register */], { id: 327, hideBackButton: true }, {
                    animate: true,
                    animation: 'md-transition',
                    direction: 'forward'
                });
                break;
        }
    };
    return Contact;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], Contact.prototype, "content", void 0);
Contact = Contact_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\contact\contact.html"*/'<ion-header>\n\n  \n\n  <!-- <header class="app-header">\n\n    <ion-grid class="grid-header">\n\n      <ion-row>\n\n        <ion-col col-3 class="text-left">\n\n          <div class="btn-cart">\n\n            <a href="javascript:;" (click)="showCart()"><ion-icon name="cart"></ion-icon><span class="count">{{cart_total}}</span></a>\n\n          </div>\n\n          <button ion-button icon-only menuToggle clear color="dark">\n\n              <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-6 class="text-mid">\n\n          <img class="logo-app" src="assets/images/logo_new.png"/>\n\n        </ion-col>\n\n        <ion-col col-3 class="text-right">\n\n          <div class="btn-lang">\n\n            <a href="javascript:;" *ngIf="language == \'en\'" (click)="switchLanguage(\'ar\')">عربي</a>\n\n            <a href="javascript:;" class="english" *ngIf="language == \'ar\'" (click)="switchLanguage(\'en\')">English</a>\n\n          </div>\n\n          <button ion-button icon-only clear color="dark" (click)="toggleSearchBar()">\n\n                <ion-icon name="search"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </header> -->\n\n\n\n  <ion-navbar hideBackButton="true">\n\n\n\n  	<button ion-button icon-only menuToggle clear color="dark">\n\n    	<ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title color="light">Contact Us</ion-title>\n\n\n\n    <!-- <ion-buttons end>\n\n        <button ion-button *ngIf="hideBackButton" (click)="dismiss()" class="btn-white">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n    </ion-buttons> -->\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <div [hidden]="!showSearchBar" class="search-bar">\n\n    <ion-searchbar [(ngModel)]="searchTerm" ></ion-searchbar>\n\n    <button ion-button outline small (click)="textSearch()" color="light">{{\'SEARCH\' | translate }}</button>\n\n  </div>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <!-- <ion-card-header>\n\n        {{\'Contact Us\' | translate}}\n\n      </ion-card-header> -->\n\n\n\n      <p>Contact us through whatsapp <strong>00966555088195</strong> or email :</p>\n\n	\n\n        <form>\n\n            <ion-list>\n\n\n\n              <ion-item>\n\n                <ion-label stacked>{{\'Name\' | translate}}</ion-label>\n\n                <ion-input type="text" name="name" [(ngModel)]="contact.name" required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked>{{\'Email\' | translate}}</ion-label>\n\n                <ion-input type="text" name="email" [(ngModel)]="contact.email" required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label stacked>{{\'Message\' | translate}}</ion-label>\n\n                  <ion-textarea name="message" [(ngModel)]="contact.message" required></ion-textarea>\n\n              </ion-item>\n\n\n\n            </ion-list>\n\n            <button type="button" ion-button color="dark" block (click)="sendMessage()">{{\'SEND\' | translate}}</button>\n\n        </form>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateService */]])
], Contact);

var Contact_1;
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var $: any;
var Terms = (function () {
    function Terms(viewCtrl, wpService, notification, navParams, navCtrl, events) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.wpService = wpService;
        this.notification = notification;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.events = events;
        this.page = {};
        this.showAgree = false;
        this.is_loading = true;
        notification.showLoading();
        this.wpService.getPage(313).subscribe(function (page) {
            _this.page = page;
            notification.stopLoading();
            _this.is_loading = false;
        });
        this.showAgree = this.navParams.get('showAgree');
        this.user = this.navParams.get('user');
        this.user_type = this.navParams.get('type');
    }
    Terms.prototype.doRegister = function () {
        var _this = this;
        this.dismiss();
        this.notification.showLoading();
        if (this.user_type == 'customer') {
            this.wpService.registerCustomer(this.user)
                .then(function (response) {
                _this.notification.stopLoading();
                //console.log(response);
                _this.notification.showToast(response.message);
                if (response.success) {
                    _this.events.publish('user:created', response);
                }
            }).catch(function (err) {
                _this.notification.stopLoading();
                console.log(err);
                _this.notification.showToast("Error connecting to server. Please try again");
                //this.dismiss();
            });
        }
        if (this.user_type == 'vendor') {
            //alert("WORKING")
            console.log(this.user);
            this.wpService.registerVendor(this.user)
                .then(function (response) {
                _this.notification.stopLoading();
                _this.notification.showToast(response.message);
                if (response.success) {
                    _this.events.publish('vendor:created', response);
                }
            }).catch(function (err) {
                _this.notification.stopLoading();
                console.log(err);
                _this.notification.showToast("Error connecting to server. Please try again");
                //this.dismiss();
            });
        }
    };
    Terms.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Terms;
}());
Terms = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"C:\Users\developer\Desktop\eventit\eventit\src\pages\terms\terms.html"*/'<ion-header>\n\n	<ion-navbar hideBackButton="true">\n\n		<ion-buttons *ngIf="showAgree">\n\n			<button ion-button (click)="doRegister()" color="dark">\n\n		        AGREE\n\n		    </button>\n\n		</ion-buttons>\n\n    	<ion-title color="dark">Terms and conditions</ion-title>\n\n    	<ion-buttons end>\n\n	      <button ion-button (click)="dismiss()" color="dark">\n\n	        <ion-icon name="md-close"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n		\n\n		<ion-card *ngIf="!is_loading">\n\n			<ion-card-content>\n\n				<div [innerHtml]="page.post_content"></div>\n\n			</ion-card-content>\n\n		</ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\developer\Desktop\eventit\eventit\src\pages\terms\terms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_wp_service__["a" /* WPService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_notification_helper__["a" /* NotificationHelper */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Terms);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationHelper = (function () {
    function NotificationHelper(loadingCtrl, toastCtrl, alertCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
    }
    NotificationHelper.prototype.showLoading = function (msg) {
        if (msg === void 0) { msg = 'Please wait...'; }
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    NotificationHelper.prototype.stopLoading = function () {
        this.loading ? this.loading.dismiss() : '';
    };
    NotificationHelper.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000,
        });
        toast.present();
    };
    NotificationHelper.prototype.showConfirm = function (title, message, no, yes) {
        var _success_txt = 'Continue Shopping';
        this.translate.get(_success_txt).subscribe(function (res) {
            _success_txt = res;
        });
        var _cancel_txt = 'Show Cart';
        this.translate.get(_cancel_txt).subscribe(function (res) {
            _cancel_txt = res;
        });
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: _success_txt,
                    handler: no
                },
                {
                    text: _cancel_txt,
                    handler: yes
                }
            ]
        });
        confirm.present();
    };
    NotificationHelper.prototype.showSelectLocation = function (title, message, data, yes) {
        this.translate.get(message).subscribe(function (res) {
            message = res;
        });
        var alert = this.alertCtrl.create();
        alert.setTitle(message);
        console.log(data);
        data.forEach(function (st) {
            alert.addInput({
                type: 'radio',
                label: st.name,
                value: st.term_id
            });
        });
        alert.addButton({
            text: 'OK',
            handler: yes
        });
        alert.present();
    };
    return NotificationHelper;
}());
NotificationHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
], NotificationHelper);

//# sourceMappingURL=notification.helper.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WPService = (function () {
    function WPService(http) {
        this.http = http;
        this.API_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* API_BASE */] + 'eventos/v1';
    }
    WPService.prototype.getHeader = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            headers.append('Authorization', 'Bearer ' + user.token);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
        else {
            return {};
        }
    };
    WPService.prototype.getCartId = function () {
        var cart_id = localStorage.getItem('cart_id');
        if (cart_id == null)
            cart_id = '0';
        return cart_id;
    };
    //Register Customer
    WPService.prototype.registerCustomer = function (params) {
        return this.http.post(this.API_URL + '/register-customer', params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Register Vendor
    WPService.prototype.registerVendor = function (params) {
        return this.http.post(this.API_URL + '/vendor/register', params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WPService.prototype.getCategories = function () {
        return this.http.get(this.API_URL + '/categories')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
        });
    };
    WPService.prototype.getLocations = function () {
        return this.http.get(this.API_URL + '/locations')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
        });
    };
    WPService.prototype.getSlides = function () {
        return this.http.get(this.API_URL + '/slides')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
        });
    };
    WPService.prototype.getServicesByCategory = function (id, area) {
        if (area === void 0) { area = ''; }
        var params = id;
        if (area !== '') {
            params = id + '?area=' + area;
        }
        return this.http.get(this.API_URL + '/category/' + params)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
        });
    };
    WPService.prototype.getService = function (id) {
        return this.http.get(this.API_URL + '/service/' + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.addToCart = function (params) {
        var cart_id = this.getCartId();
        return this.http.post(this.API_URL + '/add-to-cart?cart_id=' + cart_id, params, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.getCartCount = function () {
        var cart_id = this.getCartId();
        return this.http.get(this.API_URL + '/cart-count?cart_id=' + cart_id, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of();
        });
    };
    WPService.prototype.getMyCart = function () {
        var cart_id = this.getCartId();
        var location = localStorage.getItem('delivery_location');
        return this.http.get(this.API_URL + '/my-cart?cart_id=' + cart_id + '&location=' + location, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
        });
    };
    WPService.prototype.removeFromCart = function (key) {
        var cart_id = this.getCartId();
        return this.http.post(this.API_URL + '/delete-from-cart?cart_id=' + cart_id, { id: key }, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.myAddress = function () {
        return this.http.get(this.API_URL + '/my-address/', this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.saveAddress = function (address) {
        return this.http.post(this.API_URL + '/save-address/', address, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.registerAndCheckout = function (data) {
        data.cart_id = this.getCartId();
        return this.http.post(this.API_URL + '/register-and-checkout/', data)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({});
        });
    };
    WPService.prototype.saveOrder = function () {
        var cart_id = this.getCartId();
        var lang = localStorage.getItem('language');
        return this.http.post(this.API_URL + '/save-order?cart_id=' + cart_id + '&lang=' + lang, {}, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while saving order'
            });
        });
    };
    WPService.prototype.processPayment = function (params) {
        return this.http.post(this.API_URL + '/process-payment/', params, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while processing payment'
            });
        });
    };
    WPService.prototype.getPage = function (id) {
        var lang = localStorage.getItem('language');
        return this.http.get(this.API_URL + '/get-page/' + id + "?lang=" + lang)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while serving request'
            });
        });
    };
    WPService.prototype.contactUs = function (params) {
        return this.http.post(this.API_URL + '/contact-us/', params)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while sending request'
            });
        });
    };
    WPService.prototype.applyCoupon = function (params) {
        params.cart_id = this.getCartId();
        return this.http.post(this.API_URL + '/apply-coupon/', params, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while sending request'
            });
        });
    };
    WPService.prototype.removeCoupon = function () {
        return this.http.post(this.API_URL + '/remove-coupon/', { cart_id: this.getCartId() }, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while sending request'
            });
        });
    };
    WPService.prototype.searchServices = function (params) {
        var area = '';
        var s = '';
        if (params.area !== undefined) {
            area = params.area;
        }
        if (params.s !== undefined) {
            s = params.s;
        }
        return this.http.get(this.API_URL + '/search/?area=' + area + '&s=' + s)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while sending request'
            });
        });
    };
    WPService.prototype.getVendors = function (cat, area) {
        if (cat === void 0) { cat = 0; }
        if (area === void 0) { area = 0; }
        return this.http.get(this.API_URL + '/vendors?cat=' + cat + '&area=' + area)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while serving request'
            });
        });
    };
    WPService.prototype.getByAuthor = function (id, cat, area) {
        if (cat === void 0) { cat = 0; }
        if (area === void 0) { area = 0; }
        return this.http.get(this.API_URL + '/author/' + id + '?cat=' + cat + '&area=' + area)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while serving request'
            });
        });
    };
    WPService.prototype.assignCart = function () {
        var cart_id = this.getCartId();
        return this.http.post(this.API_URL + '/assign-cart?cart_id=' + cart_id, {}, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while updating cart'
            });
        });
    };
    WPService.prototype.availablePaymentMethods = function (order_id) {
        return this.http.get(this.API_URL + '/available-payment-methods/' + order_id)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while serving request'
            });
        });
    };
    WPService.prototype.savePushToken = function () {
        var _push_token = localStorage.getItem('push_token');
        var _params = { push_token: _push_token };
        //alert( JSON.stringify(_params) );
        //let _params = { push_token: 'token_goes_here' }
        return this.http.post(this.API_URL + '/save-push-token/', _params, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while saving token'
            });
        });
    };
    WPService.prototype.getDeals = function () {
        var lang = localStorage.getItem('language');
        return this.http.get(this.API_URL + '/get-deals/')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while serving request'
            });
        });
    };
    WPService.prototype.activateDeal = function (deal_id) {
        var cart_id = localStorage.getItem('cart_id');
        var _params = { deal_id: deal_id, cart_id: cart_id };
        return this.http.post(this.API_URL + '/apply-deal/', _params, this.getHeader())
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while saving token'
            });
        });
    };
    WPService.prototype.celebrityLogin = function (passcode) {
        var _params = { passcode: passcode };
        return this.http.post(this.API_URL + '/celebrity-login/', _params)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //console.log(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while loggin in'
            });
        });
    };
    WPService.prototype.saveCelebirityServices = function (params) {
        return this.http.post(this.API_URL + '/celebrity/service/save', params)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while saving data'
            });
        });
    };
    WPService.prototype.getCelebrityServicesByCategory = function (cat_id) {
        return this.http.get(this.API_URL + '/celebrity/service/category/' + cat_id)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while fetching results'
            });
        });
    };
    WPService.prototype.getCelebrities = function () {
        return this.http.get(this.API_URL + '/celebrities/')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while fetching results'
            });
        });
    };
    WPService.prototype.getCelebrityCategories = function (id) {
        return this.http.get(this.API_URL + '/celebrity/categories/' + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while fetching results'
            });
        });
    };
    WPService.prototype.getCelebrityServices = function (celebrity_id, category_id) {
        return this.http.get(this.API_URL + '/celebrity/items/?category_id=' + category_id + '&celebrity_id=' + celebrity_id)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of({
                status: false,
                message: 'Error while fetching results'
            });
        });
    };
    //Error Handler
    WPService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return WPService;
}());
WPService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WPService);

//# sourceMappingURL=wp.service.js.map

/***/ })

},[239]);
//# sourceMappingURL=main.js.map