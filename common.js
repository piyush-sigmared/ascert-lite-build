"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["common"],{

/***/ 10062:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/DashboardService.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);






class DashboardService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.gateway = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl;
        this.gateway2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gateway2Url;
    }
    getDashboard() {
        let url = `${this.gateway}/v1/bias/get_homepage`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "test_set_path": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getFormlist() {
        let url = `${this.gateway2}/v1/tprm/get_form`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "scope": "string",
            "model_name": "string",
            "model_framework": "string",
            "model_dtype": "string",
            "description": "string",
            "model_owner": "string",
            "email": "string",
            "location": "string",
            "last_trained_on": "string",
            "remarks": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getRisk1() {
        let url = `${this.gateway2}/v1/tprm/get_risk_table`;
        return this.http.post(url, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    LoadPieMajorChart(path, cat) {
        let url = `${this.gateway2}/v1/tprm/getMajorPie`;
        return this.http.post(url, {
            "path": path,
            "major_category": cat
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    LoadPieMinorChart(path, major) {
        let url = `${this.gateway2}/v1/tprm/getMinorPie`;
        return this.http.post(url, {
            "path": path,
            "major_category": major
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getReportTable(path, major) {
        let url = `${this.gateway2}/v1/tprm/getReportTable`;
        return this.http.post(url, {
            "path": path,
            "major_category": major
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getVendorreport() {
        let url = `${this.gateway}/v1/compliance/get_vendor_report`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "vendor_name": sessionStorage.getItem('vendor'),
            "priv": [
                "string"
            ],
            "Unpriv": [
                "string"
            ],
            "str_input": "string",
            "prot_feat": "string",
            "approved": "string",
            "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getDataQuality(path) {
        let url = `${this.gateway}/v1/mlops/get_dataquality`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "test_set_path": path
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map