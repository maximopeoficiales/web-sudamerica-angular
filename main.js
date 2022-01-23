(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maximoprog/idat/remiseria-sudamericana-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "6jGZ":
/*!************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/tariff-controller.service.ts ***!
  \************************************************************************************/
/*! exports provided: TariffControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffControllerService", function() { return TariffControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Tariff Controller
 */
class TariffControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a Tariff
     * @param tariff tariff
     * @return OK
     */
    saveUsingPOST5Response(tariff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = tariff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/tariff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a Tariff
     * @param tariff tariff
     * @return OK
     */
    saveUsingPOST5(tariff) {
        return this.saveUsingPOST5Response(tariff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Tariff
     * @param tariff tariff
     * @return OK
     */
    updateUsingPUT5Response(tariff) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = tariff;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/tariff`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Tariff
     * @param tariff tariff
     * @return OK
     */
    updateUsingPUT5(tariff) {
        return this.updateUsingPUT5Response(tariff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all tariffs
     * @return OK
     */
    getAllUsingGET5Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/tariff/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all tariffs
     * @return OK
     */
    getAllUsingGET5() {
        return this.getAllUsingGET5Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a tariff with a ID
     * @param id The id of the tariff
     * @return OK
     */
    getByIdUsingGET5Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/tariff/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a tariff with a ID
     * @param id The id of the tariff
     * @return OK
     */
    getByIdUsingGET5(id) {
        return this.getByIdUsingGET5Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a Tariff by ID
     * @param id The id of the tariff
     * @return OK
     */
    deleteUsingDELETE5Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/tariff/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a Tariff by ID
     * @param id The id of the tariff
     * @return OK
     */
    deleteUsingDELETE5(id) {
        return this.deleteUsingDELETE5Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
TariffControllerService.saveUsingPOST5Path = '/api/tariff';
TariffControllerService.updateUsingPUT5Path = '/api/tariff';
TariffControllerService.getAllUsingGET5Path = '/api/tariff/all';
TariffControllerService.getByIdUsingGET5Path = '/api/tariff/{id}';
TariffControllerService.deleteUsingDELETE5Path = '/api/tariff/{id}';
TariffControllerService.ɵfac = function TariffControllerService_Factory(t) { return new (t || TariffControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TariffControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TariffControllerService, factory: TariffControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "A7fI":
/*!*************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/payment-controller.service.ts ***!
  \*************************************************************************************/
/*! exports provided: PaymentControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentControllerService", function() { return PaymentControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Payment Controller
 */
class PaymentControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a payment
     * @param payment payment
     * @return OK
     */
    saveUsingPOSTResponse(payment) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = payment;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/payment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a payment
     * @param payment payment
     * @return OK
     */
    saveUsingPOST(payment) {
        return this.saveUsingPOSTResponse(payment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Payment
     * @param payment1 payment1
     * @return OK
     */
    updateUsingPUTResponse(payment1) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = payment1;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/payment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Payment
     * @param payment1 payment1
     * @return OK
     */
    updateUsingPUT(payment1) {
        return this.updateUsingPUTResponse(payment1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all payments
     * @return OK
     */
    getAllUsingGETResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/payment/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all payments
     * @return OK
     */
    getAllUsingGET() {
        return this.getAllUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Filter payment by dates
     * @param data data
     * @return OK
     */
    filterByTravelDateUsingPOSTResponse(data) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = data;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/payment/filterByTravelDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Filter payment by dates
     * @param data data
     * @return OK
     */
    filterByTravelDateUsingPOST(data) {
        return this.filterByTravelDateUsingPOSTResponse(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a payment with a ID
     * @param id The id of the payment
     * @return OK
     */
    getByIdUsingGETResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/payment/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a payment with a ID
     * @param id The id of the payment
     * @return OK
     */
    getByIdUsingGET(id) {
        return this.getByIdUsingGETResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a Payment by ID
     * @param id The id of the payment
     * @return OK
     */
    deleteUsingDELETEResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/payment/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a Payment by ID
     * @param id The id of the payment
     * @return OK
     */
    deleteUsingDELETE(id) {
        return this.deleteUsingDELETEResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
PaymentControllerService.saveUsingPOSTPath = '/api/payment';
PaymentControllerService.updateUsingPUTPath = '/api/payment';
PaymentControllerService.getAllUsingGETPath = '/api/payment/all';
PaymentControllerService.filterByTravelDateUsingPOSTPath = '/api/payment/filterByTravelDate';
PaymentControllerService.getByIdUsingGETPath = '/api/payment/{id}';
PaymentControllerService.deleteUsingDELETEPath = '/api/payment/{id}';
PaymentControllerService.ɵfac = function PaymentControllerService_Factory(t) { return new (t || PaymentControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PaymentControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PaymentControllerService, factory: PaymentControllerService.ɵfac, providedIn: 'root' });



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
const prod = true;
const urlDomainProduction = 'https://remiseria-spring-boot-heroku.herokuapp.com';
const urlDomainDev = 'http://localhost:8080';
const urlDomain = prod ? urlDomainProduction : urlDomainDev;
const environment = {
    production: true,
    apiURL: urlDomain,
    url_api: 'https://platzi-store.herokuapp.com',
    url_client_images: `${urlDomain}/uploads/photos-clients/`,
    url_voucher_images: `${urlDomain}/uploads/vouchers/`,
    url_products_images: `${urlDomain}/uploads/products/thumbnails/`,
    url_productos_other_images: `${urlDomain}/uploads/products/product-images/`,
    url_product_not_found: 'https://www.w4ter.co.za/error.png',
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

/***/ "C8C6":
/*!****************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/permission-controller.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PermissionControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionControllerService", function() { return PermissionControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Permission Controller
 */
class PermissionControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a permission
     * @param permission permission
     * @return OK
     */
    saveUsingPOST1Response(permission) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = permission;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/permission`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a permission
     * @param permission permission
     * @return OK
     */
    saveUsingPOST1(permission) {
        return this.saveUsingPOST1Response(permission).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Permission
     * @param permission1 permission1
     * @return OK
     */
    updateUsingPUT1Response(permission1) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = permission1;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/permission`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Permission
     * @param permission1 permission1
     * @return OK
     */
    updateUsingPUT1(permission1) {
        return this.updateUsingPUT1Response(permission1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all permissions
     * @return OK
     */
    getAllUsingGET1Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/permission/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all permissions
     * @return OK
     */
    getAllUsingGET1() {
        return this.getAllUsingGET1Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a permission with a ID
     * @param id The id of the permission
     * @return OK
     */
    getByIdUsingGET1Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/permission/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a permission with a ID
     * @param id The id of the permission
     * @return OK
     */
    getByIdUsingGET1(id) {
        return this.getByIdUsingGET1Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a Permission by ID
     * @param id The id of the permission
     * @return OK
     */
    deleteUsingDELETE1Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/permission/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a Permission by ID
     * @param id The id of the permission
     * @return OK
     */
    deleteUsingDELETE1(id) {
        return this.deleteUsingDELETE1Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
PermissionControllerService.saveUsingPOST1Path = '/api/permission';
PermissionControllerService.updateUsingPUT1Path = '/api/permission';
PermissionControllerService.getAllUsingGET1Path = '/api/permission/all';
PermissionControllerService.getByIdUsingGET1Path = '/api/permission/{id}';
PermissionControllerService.deleteUsingDELETE1Path = '/api/permission/{id}';
PermissionControllerService.ɵfac = function PermissionControllerService_Factory(t) { return new (t || PermissionControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PermissionControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PermissionControllerService, factory: PermissionControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "FNCV":
/*!*******************************************************!*\
  !*** ./src/app/infraestructure/auth/login.service.ts ***!
  \*******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginService {
    constructor() {
        this.nameJWT = 'jwt';
        this.nameCLient = 'user';
    }
    saveJWT(jwt, user) {
        if (this.getJWT()) {
            localStorage.removeItem(this.nameJWT);
            localStorage.removeItem(this.nameCLient);
            localStorage.setItem(this.nameJWT, jwt);
            localStorage.setItem(this.nameCLient, JSON.stringify(user));
        }
        localStorage.setItem(this.nameJWT, jwt);
        localStorage.setItem(this.nameCLient, JSON.stringify(user));
    }
    getJWT() {
        return localStorage.getItem(this.nameJWT);
    }
    getUser() {
        return JSON.parse(localStorage.getItem(this.nameCLient));
    }
    isLogged() {
        return this.getJWT() ? true : false;
    }
    logout() {
        localStorage.removeItem(this.nameJWT);
        localStorage.removeItem(this.nameCLient);
    }
    saveUser(user) {
        localStorage.removeItem(this.nameCLient);
        localStorage.setItem(this.nameCLient, JSON.stringify(user));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OpjJ":
/*!**************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/base-service.ts ***!
  \**************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
const PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
class BaseService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    /**
     * Returns the root url for API operations. If not set directly in this
     * service, will fallback to ApiConfiguration.rootUrl.
     */
    get rootUrl() {
        return this._rootUrl || this.config.rootUrl;
    }
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl) {
        this._rootUrl = rootUrl;
    }
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    newParams() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: PARAMETER_CODEC
        });
    }
}


/***/ }),

/***/ "RoWq":
/*!****************************************************!*\
  !*** ./src/app/presentation/guards/login.guard.ts ***!
  \****************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infraestructure_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../infraestructure/auth/login.service */ "FNCV");



class LoginGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate(route, state) {
        if (this.loginService.isLogged()) {
            // this.loginService.logout();
            return this.router.navigate(['/remiseria/welcome']);
        }
        else {
            return true;
        }
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_infraestructure_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'WebSudamericana';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Tj9p":
/*!*******************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/api-configuration.ts ***!
  \*******************************************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * Global configuration for Api services
 */
class ApiConfiguration {
    constructor() {
        this.rootUrl = '//localhost:8080';
    }
}
ApiConfiguration.ɵfac = function ApiConfiguration_Factory(t) { return new (t || ApiConfiguration)(); };
ApiConfiguration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiConfiguration, factory: ApiConfiguration.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UohU":
/*!***********************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/state-reservation-controller.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: StateReservationControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReservationControllerService", function() { return StateReservationControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * State Reservation Controller
 */
class StateReservationControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a stateReservation
     * @param stateReservation stateReservation
     * @return OK
     */
    saveUsingPOST4Response(stateReservation) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = stateReservation;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/stateReservation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a stateReservation
     * @param stateReservation stateReservation
     * @return OK
     */
    saveUsingPOST4(stateReservation) {
        return this.saveUsingPOST4Response(stateReservation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a StateReservation
     * @param stateReservation1 stateReservation1
     * @return OK
     */
    updateUsingPUT4Response(stateReservation1) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = stateReservation1;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/stateReservation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a StateReservation
     * @param stateReservation1 stateReservation1
     * @return OK
     */
    updateUsingPUT4(stateReservation1) {
        return this.updateUsingPUT4Response(stateReservation1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all stateReservations
     * @return OK
     */
    getAllUsingGET4Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/stateReservation/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all stateReservations
     * @return OK
     */
    getAllUsingGET4() {
        return this.getAllUsingGET4Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a stateReservation with a ID
     * @param id The id of the stateReservation
     * @return OK
     */
    getByIdUsingGET4Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/stateReservation/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a stateReservation with a ID
     * @param id The id of the stateReservation
     * @return OK
     */
    getByIdUsingGET4(id) {
        return this.getByIdUsingGET4Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a StateReservation by ID
     * @param id The id of the stateReservation
     * @return OK
     */
    deleteUsingDELETE4Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/stateReservation/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a StateReservation by ID
     * @param id The id of the stateReservation
     * @return OK
     */
    deleteUsingDELETE4(id) {
        return this.deleteUsingDELETE4Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
StateReservationControllerService.saveUsingPOST4Path = '/api/stateReservation';
StateReservationControllerService.updateUsingPUT4Path = '/api/stateReservation';
StateReservationControllerService.getAllUsingGET4Path = '/api/stateReservation/all';
StateReservationControllerService.getByIdUsingGET4Path = '/api/stateReservation/{id}';
StateReservationControllerService.deleteUsingDELETE4Path = '/api/stateReservation/{id}';
StateReservationControllerService.ɵfac = function StateReservationControllerService_Factory(t) { return new (t || StateReservationControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StateReservationControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StateReservationControllerService, factory: StateReservationControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "YEfe":
/*!*****************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/reservation-controller.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReservationControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationControllerService", function() { return ReservationControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Reservation Controller
 */
class ReservationControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a reservation
     * @param reservation reservation
     * @return OK
     */
    saveUsingPOST2Response(reservation) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = reservation;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/reservation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a reservation
     * @param reservation reservation
     * @return OK
     */
    saveUsingPOST2(reservation) {
        return this.saveUsingPOST2Response(reservation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Reservation
     * @param reservation1 reservation1
     * @return OK
     */
    updateUsingPUT2Response(reservation1) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = reservation1;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/reservation`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Reservation
     * @param reservation1 reservation1
     * @return OK
     */
    updateUsingPUT2(reservation1) {
        return this.updateUsingPUT2Response(reservation1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all reservations
     * @return OK
     */
    getAllUsingGET2Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/reservation/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all reservations
     * @return OK
     */
    getAllUsingGET2() {
        return this.getAllUsingGET2Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Filter reservation by dates
     * @param data data
     * @return OK
     */
    filterByTravelDateUsingPOST1Response(data) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = data;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/reservation/filterByTravelDate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Filter reservation by dates
     * @param data data
     * @return OK
     */
    filterByTravelDateUsingPOST1(data) {
        return this.filterByTravelDateUsingPOST1Response(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search by idPassenger
     * @param idPassenger The id of passenger
     * @return OK
     */
    getByidPassengerUsingGETResponse(idPassenger) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/reservation/findByIdPassenger/${encodeURIComponent(String(idPassenger))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search by idPassenger
     * @param idPassenger The id of passenger
     * @return OK
     */
    getByidPassengerUsingGET(idPassenger) {
        return this.getByidPassengerUsingGETResponse(idPassenger).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search by idStateReservation
     * @param idStateReservation The id of state Reservation
     * @return OK
     */
    getByIdStateReservationUsingGETResponse(idStateReservation) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/reservation/findByIdStateReservation/${encodeURIComponent(String(idStateReservation))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search by idStateReservation
     * @param idStateReservation The id of state Reservation
     * @return OK
     */
    getByIdStateReservationUsingGET(idStateReservation) {
        return this.getByIdStateReservationUsingGETResponse(idStateReservation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a reservation with a ID
     * @param id The id of the reservation
     * @return OK
     */
    getByIdUsingGET2Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/reservation/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a reservation with a ID
     * @param id The id of the reservation
     * @return OK
     */
    getByIdUsingGET2(id) {
        return this.getByIdUsingGET2Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a Reservation by ID
     * @param id The id of the reservation
     * @return OK
     */
    deleteUsingDELETE2Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/reservation/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a Reservation by ID
     * @param id The id of the reservation
     * @return OK
     */
    deleteUsingDELETE2(id) {
        return this.deleteUsingDELETE2Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
ReservationControllerService.saveUsingPOST2Path = '/api/reservation';
ReservationControllerService.updateUsingPUT2Path = '/api/reservation';
ReservationControllerService.getAllUsingGET2Path = '/api/reservation/all';
ReservationControllerService.filterByTravelDateUsingPOST1Path = '/api/reservation/filterByTravelDate';
ReservationControllerService.getByidPassengerUsingGETPath = '/api/reservation/findByIdPassenger/{idPassenger}';
ReservationControllerService.getByIdStateReservationUsingGETPath = '/api/reservation/findByIdStateReservation/{idStateReservation}';
ReservationControllerService.getByIdUsingGET2Path = '/api/reservation/{id}';
ReservationControllerService.deleteUsingDELETE2Path = '/api/reservation/{id}';
ReservationControllerService.ɵfac = function ReservationControllerService_Factory(t) { return new (t || ReservationControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReservationControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ReservationControllerService, factory: ReservationControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: API_INTERCEPTOR_PROVIDER, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_INTERCEPTOR_PROVIDER", function() { return API_INTERCEPTOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _infraestructure_interceptors_ApiInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infraestructure/interceptors/ApiInterceptor */ "a8IK");
/* harmony import */ var _infraestructure_remiseriaApi_api_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infraestructure/remiseriaApi/api.module */ "teyu");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");

















// configuracion de headers global para la api
const API_INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _infraestructure_interceptors_ApiInterceptor__WEBPACK_IMPORTED_MODULE_6__["ApiInterceptor"]),
    multi: true
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_infraestructure_interceptors_ApiInterceptor__WEBPACK_IMPORTED_MODULE_6__["ApiInterceptor"],
        API_INTERCEPTOR_PROVIDER], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _infraestructure_remiseriaApi_api_module__WEBPACK_IMPORTED_MODULE_7__["ApiModule"].forRoot({ rootUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _infraestructure_remiseriaApi_api_module__WEBPACK_IMPORTED_MODULE_7__["ApiModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]] }); })();


/***/ }),

/***/ "ZRhu":
/*!*************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/vehicle-controller.service.ts ***!
  \*************************************************************************************/
/*! exports provided: VehicleControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleControllerService", function() { return VehicleControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Vehicle Controller
 */
class VehicleControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a Vehicle
     * @param vehicle vehicle
     * @return OK
     */
    saveUsingPOST7Response(vehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = vehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/vehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a Vehicle
     * @param vehicle vehicle
     * @return OK
     */
    saveUsingPOST7(vehicle) {
        return this.saveUsingPOST7Response(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Vehicle
     * @param vehicle vehicle
     * @return OK
     */
    updateUsingPUT7Response(vehicle) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = vehicle;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/vehicle`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Vehicle
     * @param vehicle vehicle
     * @return OK
     */
    updateUsingPUT7(vehicle) {
        return this.updateUsingPUT7Response(vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all vehicles
     * @return OK
     */
    getAllUsingGET7Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/vehicle/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all vehicles
     * @return OK
     */
    getAllUsingGET7() {
        return this.getAllUsingGET7Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a vehicle with a ID
     * @param id The id of the vehicle
     * @return OK
     */
    getByIdUsingGET7Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/vehicle/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a vehicle with a ID
     * @param id The id of the vehicle
     * @return OK
     */
    getByIdUsingGET7(id) {
        return this.getByIdUsingGET7Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Desactive Vehicle by ID
     * @param id The id of the vehicle
     * @return OK
     */
    deleteUsingDELETE7Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/vehicle/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Desactive Vehicle by ID
     * @param id The id of the vehicle
     * @return OK
     */
    deleteUsingDELETE7(id) {
        return this.deleteUsingDELETE7Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
VehicleControllerService.saveUsingPOST7Path = '/api/vehicle';
VehicleControllerService.updateUsingPUT7Path = '/api/vehicle';
VehicleControllerService.getAllUsingGET7Path = '/api/vehicle/all';
VehicleControllerService.getByIdUsingGET7Path = '/api/vehicle/{id}';
VehicleControllerService.deleteUsingDELETE7Path = '/api/vehicle/{id}';
VehicleControllerService.ɵfac = function VehicleControllerService_Factory(t) { return new (t || VehicleControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VehicleControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VehicleControllerService, factory: VehicleControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "a8IK":
/*!****************************************************************!*\
  !*** ./src/app/infraestructure/interceptors/ApiInterceptor.ts ***!
  \****************************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login.service */ "FNCV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ApiInterceptor {
    constructor(jwtOperations, router) {
        this.jwtOperations = jwtOperations;
        this.router = router;
    }
    intercept(req, next) {
        const tokenJWT = this.jwtOperations.getJWT();
        // Si existe el token lo aplico a las peticiones
        if (tokenJWT) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${tokenJWT}`,
                },
            });
        }
        // req = req.clone({});
        // this.router.navigate(['/login']);
        // configuracion global de los errores
        return next.handle(req).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_0__["tap"])((x) => x, (err) => {
            // cuando ocurre un 403 borro el token y redirijo al login
            console.error(`Su sesion a expirado vuelva a loguearse ${err.status}`);
            if (err.status === 403) {
                this.jwtOperations.logout();
                this.router.navigate(['/login']);
            }
        }));
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });


/***/ }),

/***/ "fFHB":
/*!**********************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/user-controller.service.ts ***!
  \**********************************************************************************/
/*! exports provided: UserControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserControllerService", function() { return UserControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * User Controller
 */
class UserControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a User
     * @param user user
     * @return OK
     */
    saveUsingPOST6Response(user) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = user;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/user`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a User
     * @param user user
     * @return OK
     */
    saveUsingPOST6(user) {
        return this.saveUsingPOST6Response(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a User
     * @param user user
     * @return OK
     */
    updateUsingPUT6Response(user) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = user;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/user`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a User
     * @param user user
     * @return OK
     */
    updateUsingPUT6(user) {
        return this.updateUsingPUT6Response(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all users
     * @return OK
     */
    getAllUsingGET6Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/user/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all users
     * @return OK
     */
    getAllUsingGET6() {
        return this.getAllUsingGET6Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all employes
     * @return OK
     */
    getAllEmployesUsingGETResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/user/allEmployes`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all employes
     * @return OK
     */
    getAllEmployesUsingGET() {
        return this.getAllEmployesUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a user filter id role
     * @param id The id role
     * @return OK
     */
    getByIdRoleUsingGETResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/user/findByRole/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a user filter id role
     * @param id The id role
     * @return OK
     */
    getByIdRoleUsingGET(id) {
        return this.getByIdRoleUsingGETResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a User
     * @param user user
     * @return OK
     */
    updatePassengerUsingPUTResponse(user) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = user;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/user/updatePassenger`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a User
     * @param user user
     * @return OK
     */
    updatePassengerUsingPUT(user) {
        return this.updatePassengerUsingPUTResponse(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a user with a ID
     * @param id The id of the user
     * @return OK
     */
    getByIdUsingGET6Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/user/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a user with a ID
     * @param id The id of the user
     * @return OK
     */
    getByIdUsingGET6(id) {
        return this.getByIdUsingGET6Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a User by ID
     * @param id The id of the user
     * @return OK
     */
    deleteUsingDELETE6Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/user/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a User by ID
     * @param id The id of the user
     * @return OK
     */
    deleteUsingDELETE6(id) {
        return this.deleteUsingDELETE6Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
UserControllerService.saveUsingPOST6Path = '/api/user';
UserControllerService.updateUsingPUT6Path = '/api/user';
UserControllerService.getAllUsingGET6Path = '/api/user/all';
UserControllerService.getAllEmployesUsingGETPath = '/api/user/allEmployes';
UserControllerService.getByIdRoleUsingGETPath = '/api/user/findByRole/{id}';
UserControllerService.updatePassengerUsingPUTPath = '/api/user/updatePassenger';
UserControllerService.getByIdUsingGET6Path = '/api/user/{id}';
UserControllerService.deleteUsingDELETE6Path = '/api/user/{id}';
UserControllerService.ɵfac = function UserControllerService_Factory(t) { return new (t || UserControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserControllerService, factory: UserControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "k/BR":
/*!************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/public-controller.service.ts ***!
  \************************************************************************************/
/*! exports provided: PublicControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicControllerService", function() { return PublicControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Public Controller
 */
class PublicControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Get all Clients
     * @return OK
     */
    getClientsUsingGETResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/public/users/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all Clients
     * @return OK
     */
    getClientsUsingGET() {
        return this.getClientsUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
PublicControllerService.getClientsUsingGETPath = '/api/public/users/all';
PublicControllerService.ɵfac = function PublicControllerService_Factory(t) { return new (t || PublicControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PublicControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PublicControllerService, factory: PublicControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "mg/j":
/*!****************************************************!*\
  !*** ./src/app/presentation/guards/admin.guard.ts ***!
  \****************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _infraestructure_auth_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infraestructure/auth/login.service */ "FNCV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        // rol 2 admin rol 1 client
        if (this.loginService.isLogged()) {
            // if (this.loginService.getUser()?.idRol === 2) {
            //   return true;
            // } else if (this.loginService.getUser()?.idRol === 1) {
            //   this.router.navigate(['/home']);
            //   return false;
            // }
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_infraestructure_auth_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oOl6":
/*!*****************************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/basic-error-controller.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: BasicErrorControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicErrorControllerService", function() { return BasicErrorControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Basic Error Controller
 */
class BasicErrorControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * error
     * @return OK
     */
    errorUsingGETResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingGET() {
        return this.errorUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingHEADResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('HEAD', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingHEAD() {
        return this.errorUsingHEADResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPOSTResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPOST() {
        return this.errorUsingPOSTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPUTResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPUT() {
        return this.errorUsingPUTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingDELETEResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingDELETE() {
        return this.errorUsingDELETEResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingOPTIONSResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('OPTIONS', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingOPTIONS() {
        return this.errorUsingOPTIONSResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPATCHResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PATCH', this.rootUrl + `/api/error`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * error
     * @return OK
     */
    errorUsingPATCH() {
        return this.errorUsingPATCHResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
BasicErrorControllerService.errorUsingGETPath = '/api/error';
BasicErrorControllerService.errorUsingHEADPath = '/api/error';
BasicErrorControllerService.errorUsingPOSTPath = '/api/error';
BasicErrorControllerService.errorUsingPUTPath = '/api/error';
BasicErrorControllerService.errorUsingDELETEPath = '/api/error';
BasicErrorControllerService.errorUsingOPTIONSPath = '/api/error';
BasicErrorControllerService.errorUsingPATCHPath = '/api/error';
BasicErrorControllerService.ɵfac = function BasicErrorControllerService_Factory(t) { return new (t || BasicErrorControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BasicErrorControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BasicErrorControllerService, factory: BasicErrorControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "sEhF":
/*!**********************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/role-controller.service.ts ***!
  \**********************************************************************************/
/*! exports provided: RoleControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleControllerService", function() { return RoleControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Role Controller
 */
class RoleControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Save a Role
     * @param role role
     * @return OK
     */
    saveUsingPOST3Response(role) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = role;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/role`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Save a Role
     * @param role role
     * @return OK
     */
    saveUsingPOST3(role) {
        return this.saveUsingPOST3Response(role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Update a Role
     * @param role role
     * @return OK
     */
    updateUsingPUT3Response(role) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = role;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', this.rootUrl + `/api/role`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Update a Role
     * @param role role
     * @return OK
     */
    updateUsingPUT3(role) {
        return this.updateUsingPUT3Response(role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Get all roles
     * @return OK
     */
    getAllUsingGET3Response() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/role/all`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Get all roles
     * @return OK
     */
    getAllUsingGET3() {
        return this.getAllUsingGET3Response().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Search a role with a ID
     * @param id The id of the role
     * @return OK
     */
    getByIdUsingGET3Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.rootUrl + `/api/role/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Search a role with a ID
     * @param id The id of the role
     * @return OK
     */
    getByIdUsingGET3(id) {
        return this.getByIdUsingGET3Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Delete a Role by ID
     * @param id The id of the category
     * @return OK
     */
    deleteUsingDELETE3Response(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', this.rootUrl + `/api/role/${encodeURIComponent(String(id))}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Delete a Role by ID
     * @param id The id of the category
     * @return OK
     */
    deleteUsingDELETE3(id) {
        return this.deleteUsingDELETE3Response(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
RoleControllerService.saveUsingPOST3Path = '/api/role';
RoleControllerService.updateUsingPUT3Path = '/api/role';
RoleControllerService.getAllUsingGET3Path = '/api/role/all';
RoleControllerService.getByIdUsingGET3Path = '/api/role/{id}';
RoleControllerService.deleteUsingDELETE3Path = '/api/role/{id}';
RoleControllerService.ɵfac = function RoleControllerService_Factory(t) { return new (t || RoleControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RoleControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleControllerService, factory: RoleControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "teyu":
/*!************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/api.module.ts ***!
  \************************************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "Tj9p");
/* harmony import */ var _services_auth_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-controller.service */ "ypNQ");
/* harmony import */ var _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/basic-error-controller.service */ "oOl6");
/* harmony import */ var _services_payment_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/payment-controller.service */ "A7fI");
/* harmony import */ var _services_permission_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/permission-controller.service */ "C8C6");
/* harmony import */ var _services_public_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/public-controller.service */ "k/BR");
/* harmony import */ var _services_reservation_controller_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/reservation-controller.service */ "YEfe");
/* harmony import */ var _services_role_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/role-controller.service */ "sEhF");
/* harmony import */ var _services_state_reservation_controller_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/state-reservation-controller.service */ "UohU");
/* harmony import */ var _services_tariff_controller_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/tariff-controller.service */ "6jGZ");
/* harmony import */ var _services_user_controller_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user-controller.service */ "fFHB");
/* harmony import */ var _services_vehicle_controller_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/vehicle-controller.service */ "ZRhu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














/**
 * Provider for all Api services, plus ApiConfiguration
 */
class ApiModule {
    static forRoot(customParams) {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"],
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    }
}
ApiModule.ɵfac = function ApiModule_Factory(t) { return new (t || ApiModule)(); };
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"],
        _services_auth_controller_service__WEBPACK_IMPORTED_MODULE_2__["AuthControllerService"],
        _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_3__["BasicErrorControllerService"],
        _services_payment_controller_service__WEBPACK_IMPORTED_MODULE_4__["PaymentControllerService"],
        _services_permission_controller_service__WEBPACK_IMPORTED_MODULE_5__["PermissionControllerService"],
        _services_public_controller_service__WEBPACK_IMPORTED_MODULE_6__["PublicControllerService"],
        _services_reservation_controller_service__WEBPACK_IMPORTED_MODULE_7__["ReservationControllerService"],
        _services_role_controller_service__WEBPACK_IMPORTED_MODULE_8__["RoleControllerService"],
        _services_state_reservation_controller_service__WEBPACK_IMPORTED_MODULE_9__["StateReservationControllerService"],
        _services_tariff_controller_service__WEBPACK_IMPORTED_MODULE_10__["TariffControllerService"],
        _services_user_controller_service__WEBPACK_IMPORTED_MODULE_11__["UserControllerService"],
        _services_vehicle_controller_service__WEBPACK_IMPORTED_MODULE_12__["VehicleControllerService"]
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ApiModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation/guards/admin.guard */ "mg/j");
/* harmony import */ var _presentation_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/guards/login.guard */ "RoWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        canActivate: [_presentation_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]],
        loadChildren: () => Promise.all(/*! import() | presentation-pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("presentation-pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./presentation/pages/login/login.module */ "0B48")).then((m) => m.LoginModule),
    },
    {
        path: 'remiseria',
        canActivate: [_presentation_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AdminGuard"]],
        loadChildren: () => Promise.all(/*! import() | presentation-pages-remiseria-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("presentation-pages-remiseria-admin-module")]).then(__webpack_require__.bind(null, /*! ./presentation/pages/remiseria/admin.module */ "RM/0")).then((m) => m.AdminModule),
    },
    { path: '**', redirectTo: '/login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ypNQ":
/*!**********************************************************************************!*\
  !*** ./src/app/infraestructure/remiseriaApi/services/auth-controller.service.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthControllerService", function() { return AuthControllerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-service */ "OpjJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "Tj9p");






/**
 * Auth Controller
 */
class AuthControllerService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * createToken
     * @param request request
     * @return OK
     */
    createTokenUsingPOSTResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/auth/authenticate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * createToken
     * @param request request
     * @return OK
     */
    createTokenUsingPOST(request) {
        return this.createTokenUsingPOSTResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * createTokenPassengers
     * @param request request
     * @return OK
     */
    createTokenPassengersUsingPOSTResponse(request) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = request;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/auth/authenticatePassengers`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * createTokenPassengers
     * @param request request
     * @return OK
     */
    createTokenPassengersUsingPOST(request) {
        return this.createTokenPassengersUsingPOSTResponse(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
    /**
     * Register User
     * @param user user
     * @return OK
     */
    saveUserUsingPOSTResponse(user) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        let __body = null;
        __body = user;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.rootUrl + `/api/auth/register`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((_r) => {
            return _r;
        }));
    }
    /**
     * Register User
     * @param user user
     * @return OK
     */
    saveUserUsingPOST(user) {
        return this.saveUserUsingPOSTResponse(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_r => _r.body));
    }
}
AuthControllerService.createTokenUsingPOSTPath = '/api/auth/authenticate';
AuthControllerService.createTokenPassengersUsingPOSTPath = '/api/auth/authenticatePassengers';
AuthControllerService.saveUserUsingPOSTPath = '/api/auth/register';
AuthControllerService.ɵfac = function AuthControllerService_Factory(t) { return new (t || AuthControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthControllerService, factory: AuthControllerService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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