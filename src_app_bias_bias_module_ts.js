"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_bias_bias_module_ts"],{

/***/ 81516:
/*!********************************************************!*\
  !*** ./src/app/bias/Datacollection-service.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatacollectionService": () => (/* binding */ DatacollectionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);






class DatacollectionService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.gateway = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl;
        this.gateway3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gateway3Url;
        this.gatewayBias = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlBias;
    }
    // getBiasSummary2(): Observable<any> {
    //   let url = `${this.gateway3}/v1/metrics`;
    //   return this.http.get(url).pipe(map(data => {
    //     return data;
    //   }))
    // }
    getBiasSummary(user_id) {
        let url = `${this.gatewayBias}/get_bias_summary/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "user_id": user_id
            // "module_name": sessionStorage.getItem('Modulename'),
            // "priv": [
            //   "string"
            // ],
            // "Unpriv": [
            //   "string"
            // ],
            // "str_input": "string",
            // "prot_feat": "string",
            // "approved": "string",
            // "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    getAttribute(user_id) {
        let url = `${this.gatewayBias}/get_attributes/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "user_id": user_id
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    getBias(user_id) {
        let url = `${this.gatewayBias}/get_algolist/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "user_id": user_id
            // "project_name": sessionStorage.getItem('Projectname'),
            // "module_name": sessionStorage.getItem('Modulename'),
            // "priv": [
            //   "string"
            // ],
            // "Unpriv": [
            //   "string"
            // ],
            // "str_input": "string",
            // "prot_feat": "string",
            // "approved": "string",
            // "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    getOverAllEvalutionDropDown(user_id) {
        let url = `${this.gatewayBias}/get_overall_groups/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "user_id": user_id
            // "project_name": sessionStorage.getItem('Projectname'),
            // "module_name": sessionStorage.getItem('Modulename'),
            // "priv": [
            //   "string"
            // ],
            // "Unpriv": [
            //   "string"
            // ],
            // "str_input": "string",
            // "prot_feat": "string",
            // "approved": "string",
            // "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    // getIntersectionEvalutionDropDown(): Observable<any> {  
    //   let url = `${this.gateway}/v1/bias/get_overall_groups`;
    //   return this.http.post(url,{
    //     "project_name": sessionStorage.getItem('Projectname'),
    //     "module_name": sessionStorage.getItem('Modulename'),
    //     "priv": [
    //       "string"
    //     ],
    //     "Unpriv": [
    //       "string"
    //     ],
    //     "str_input": "string",
    //     "prot_feat": "string",
    //     "approved": "string",
    //     "score": "string"
    //   }).pipe(map(data => {
    //     return data;
    //   }))
    // }
    getOverAllEvalutionData(data, user_id) {
        let url = `${this.gatewayBias}/get_overall_metrics/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "feat_name": data,
            "user_id": user_id
            // "project_name": sessionStorage.getItem('Projectname'),
            // "module_name": sessionStorage.getItem('Modulename'),
            // "priv": [
            //   "string"
            // ],
            // "Unpriv": [
            //   "string"
            // ],
            // "str_input": data,
            // "prot_feat": "string",
            // "approved": "string",
            // "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    getProductedDataList(user_id) {
        let url = `${this.gatewayBias}/get_protected_data/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "client_id": sessionStorage.getItem('Client_id'),
            "user_id": user_id
            // "project_name": sessionStorage.getItem('Projectname'),
            // "module_name": sessionStorage.getItem('Modulename'),
            // "priv": [
            //   "string"
            // ],
            // "Unpriv": [
            //   "string"
            // ],
            // "str_input": "string",
            // "prot_feat": "string",
            // "approved": "string",
            // "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    // getIntersectional(priv:any,Unpriv:any): Observable<any> {  
    //   let url = `${this.gatewayBias}/get_intersectional_results/`;
    //   return this.http.post(url,{
    //     "project_name": "project1",
    //     "client_id": "client",
    //     //"project_name": sessionStorage.getItem('Projectname'),
    //     "module_name": sessionStorage.getItem('Modulename'),
    //     "priv": priv,
    //     "Unpriv": Unpriv,
    //     "str_input": "string",
    //     "prot_feat": "string",
    //     "approved": "string",
    //     "score": "string"
    //   }).pipe(map(data => {
    //     return data;
    //   }))
    // }
    getProductedList2(user_id) {
        let url = `${this.gateway}/v1/bias/get_overall_groups`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "priv": [
                "string"
            ],
            "Unpriv": [
                "string"
            ],
            "str_input": "string",
            "prot_feat": "string",
            "approved": "string",
            "score": "string",
            "user_id": user_id
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
}
DatacollectionService.ɵfac = function DatacollectionService_Factory(t) { return new (t || DatacollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DatacollectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatacollectionService, factory: DatacollectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65223:
/*!*************************************************************!*\
  !*** ./src/app/bias/Intersection/Intersection.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionComponent": () => (/* binding */ IntersectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 81516);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);













function IntersectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r3.active)("items", breadscrum_r3.items)("active_item", breadscrum_r3.active);
} }
function IntersectionComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.charAt(0).toUpperCase() + item_r4.slice(1));
} }
function IntersectionComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", item_r5 == null ? null : item_r5.descr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", item_r5);
} }
function IntersectionComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IntersectionComponent_div_31_div_2_Template, 5, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.overallEvalData);
} }
class IntersectionComponent {
    // pridectiveDropdown2: any;
    constructor(DatacollectionService, authService) {
        this.DatacollectionService = DatacollectionService;
        this.authService = authService;
        this.attribute = null;
        this.overallEvalDropDown = [];
        this.overallEvalData = null;
        this.option3 = null;
        this.pridectiveData = [];
        this.currentUser = {};
        // public pridectiveData2: any = [];
        // public pridectiveDat22: any;
        this.graph_line_chart = {
            tooltip: {
                trigger: 'axis'
            },
            // legend: {
            //   data: ['sales', 'purchases'],
            //   textStyle: {
            //     color: '#9aa0ac'
            //   }
            // },
            toolbox: {
                show: !1
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2000', '2001', '2002', '2003', '2004', '2005'],
                    axisLabel: {
                        fontSize: 10,
                        color: '#9aa0ac'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        fontSize: 10,
                        color: '#9aa0ac'
                    }
                }
            ],
            series: [
                {
                    name: 'sales',
                    type: 'bar',
                    data: [0.668],
                    // markPoint: {
                    //   data: [
                    //     {
                    //       type: 'max',
                    //       name: '???'
                    //     },
                    //     {
                    //       type: 'min',
                    //       name: '???'
                    //     }
                    //   ]
                    // },
                    markLine: {
                        data: [
                            {
                                type: 'average'
                            }
                        ]
                    }
                }
                // {
                //   name: 'purchases',
                //   type: 'bar',
                //   data: [35, 45, 47, 10, 35, 70],
                //   markLine: {
                //     data: [
                //       {
                //         type: 'average'
                //       }
                //     ]
                //   }
                // }
            ],
            color: ['#9f78ff', '#32cafe']
        };
        // public premitiveData: any = [];
        // public _premitiveData: any ;
        this.breadscrums = [
            {
                title: 'Bias',
                items: ['Bias'],
                active: 'Feature-wise Analytics'
            }
        ];
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.currentUser = user;
            this.getDropDown();
            this.getDropDown2();
            this.getDropDown3();
        });
    }
    getDropDown3() {
        this.DatacollectionService.getProductedList2(this.currentUser?.email)
            .subscribe(data => {
            console.log(data);
        });
    }
    getDropDown2() {
        this.DatacollectionService.getProductedDataList(this.currentUser?.email)
            .subscribe(data => {
            if (data?.data) {
                console.log(data?.data);
                this.pridectiveData = data?.data;
            }
        });
    }
    ;
    getDropDown() {
        this.DatacollectionService.getOverAllEvalutionDropDown(this.currentUser?.email)
            .subscribe(data => {
            if (data?.data) {
                console.log(data?.data);
                this.overallEvalDropDown = data?.data;
            }
        });
        this.DatacollectionService.getAttribute(this.currentUser?.email)
            .subscribe(data => {
            if (data) {
                this.attribute = data;
            }
        });
    }
    // used in html
    onChange(data) {
        return;
    }
    overallEval() {
        this.overallEvalData = [];
        this.DatacollectionService.getOverAllEvalutionData(this.option3, this.currentUser?.email)
            .subscribe(data => {
            if (data) {
                console.log(data, "overallEvalData");
                this.overallEvalData = data;
            }
        });
    }
}
IntersectionComponent.ɵfac = function IntersectionComponent_Factory(t) { return new (t || IntersectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
IntersectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IntersectionComponent, selectors: [["app-Intersection"]], decls: 32, vars: 6, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", "style", "margin-left: 16px;", 4, "ngFor", "ngForOf"], [2, "width", "100%", "color", "#232424", "font-weight", "400", "margin-left", "16px"], [2, "font-size", "20px", "margin-bottom", "12px"], [2, "color", "#1A73E8"], [2, "font-size", "16px"], [2, "font-size", "16px", "font-weight", "400"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6"], [1, "card"], [1, "body"], ["appearance", "fill", 2, "width", "100%"], ["name", "sel2", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "msr-3", 2, "background-color", "#1A73E8", "color", "white", 3, "click"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "block-header", 2, "margin-left", "16px"], [3, "title", "items", "active_item"], [3, "value"], [1, "body", "row"], ["class", "card col-xl-12 col-lg-12 col-md-12 col-sm-12", 4, "ngIf"], [1, "card", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "header", 2, "padding", "0px"], ["matTooltipPosition", "above", 2, "cursor", "pointer", "float", "right", 3, "matTooltip"], ["echarts", "", 1, "echart-height", 3, "options"]], template: function IntersectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IntersectionComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Privileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Unprivileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "All bias metrics are calculated based on the above protected attributes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "mat-form-field", 12)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Protected Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IntersectionComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.option3 = $event; })("selectionChange", function IntersectionComponent_Template_mat_select_selectionChange_23_listener($event) { return ctx.onChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, IntersectionComponent_mat_option_24_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br")(26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IntersectionComponent_Template_button_click_27_listener() { return ctx.overallEval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Evaluate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8)(30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, IntersectionComponent_div_31_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.privileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.unprivileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overallEvalDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overallEvalData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_11__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJbnRlcnNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7966:
/*!*********************************************!*\
  !*** ./src/app/bias/bias-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiasRoutingModule": () => (/* binding */ BiasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 50141);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 86152);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 65223);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary.component */ 8762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    {
        path: '',
        redirectTo: 'mainRes',
        pathMatch: 'full'
    },
    {
        path: 'Intersectional',
        component: _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_2__.IntersectionComponent
    },
    {
        path: 'summary',
        component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__.SummaryComponent
    },
    {
        path: 'biasSummary',
        component: _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_1__.mainDashboardRes
    },
    {
        path: 'biasAcore',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
    },
    // {
    //   path: 'dashboard2',
    //   component: Dashboard2Component
    // },
    // {
    //   path: 'dashboard3',
    //   component: Dashboard3Component
    // }
];
class BiasRoutingModule {
}
BiasRoutingModule.ɵfac = function BiasRoutingModule_Factory(t) { return new (t || BiasRoutingModule)(); };
BiasRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BiasRoutingModule });
BiasRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BiasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 23039:
/*!*************************************!*\
  !*** ./src/app/bias/bias.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiasModule": () => (/* binding */ BiasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _bias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bias-routing.module */ 7966);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 50141);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 86152);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 42877);
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ 67942);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 65223);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./summary/summary.component */ 8762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);

























class BiasModule {
}
BiasModule.ɵfac = function BiasModule_Factory(t) { return new (t || BiasModule)(); };
BiasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: BiasModule });
BiasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _bias_routing_module__WEBPACK_IMPORTED_MODULE_0__.BiasRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_21__.NgxEchartsModule.forRoot({
            echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 84343))
        }),
        angular_gauge__WEBPACK_IMPORTED_MODULE_22__.GaugeModule.forRoot(),
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BiasModule, { declarations: [_mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__.mainDashboardRes, _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_5__.IntersectionComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__.Dashboard2Component, _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__.Dashboard3Component, _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__.SummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _bias_routing_module__WEBPACK_IMPORTED_MODULE_0__.BiasRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_20__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_21__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_22__.GaugeModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule] }); })();


/***/ }),

/***/ 42877:
/*!*********************************************************!*\
  !*** ./src/app/bias/dashboard2/dashboard2.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard2Component": () => (/* binding */ Dashboard2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);







function Dashboard2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class Dashboard2Component {
    constructor() {
        this.gaugeValues = {
            1: 100
        };
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Home'],
                active: 'Dashboard 2'
            }
        ];
        this.percentageValue = function (value) {
            return `${Math.round(value)} / ${this['max']}`;
        };
    }
    ngOnInit() {
        this.lineChart();
        this.barChart();
        const updateValues = () => {
            this.gaugeValues = {
                1: Math.round(Math.random() * 100)
            };
        };
        const INTERVAL = 3000;
        this.interval = setInterval(updateValues, INTERVAL);
        updateValues();
    }
    // Charts
    lineChart() {
        // line bar chart
        this.lineBarChart = {
            grid: {
                top: '6',
                right: '0',
                bottom: '17',
                left: '25'
            },
            xAxis: {
                data: ['2014', '2015', '2016', '2017', '2018'],
                axisLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                }
            },
            tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: false,
                triggerOn: 'mousemove',
                trigger: 'axis'
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                }
            },
            series: [
                {
                    name: 'sales',
                    type: 'bar',
                    data: [11, 14, 8, 16, 11, 13]
                },
                {
                    name: 'profit',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    },
                    data: [10, 7, 17, 11, 15],
                    symbolSize: 10
                },
                {
                    name: 'growth',
                    type: 'bar',
                    data: [10, 14, 10, 15, 9, 25]
                }
            ],
            color: ['#9f78ff', '#fa626b', '#32cafe']
        };
    }
    barChart() {
        this.ebarChart = {
            grid: { show: false },
            xAxis: {
                data: [
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017',
                    '2018'
                ],
                show: false,
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                }
            },
            tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: false,
                triggerOn: 'mousemove',
                trigger: 'axis'
            },
            yAxis: {
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                },
                show: false,
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'sales',
                    type: 'bar',
                    data: [13, 14, 10, 16, 11, 13, 13, 14, 10, 16, 11, 13],
                    barMaxWidth: 10
                },
                {
                    name: 'growth',
                    type: 'bar',
                    data: [10, 14, 10, 15, 9, 25, 10, 14, 10, 15, 9, 25],
                    barMaxWidth: 10
                }
            ],
            color: ['#A3A09D', '#32cafe']
        };
    }
}
Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
Dashboard2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 369, vars: 10, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], ["echarts", "", 1, "deshboard-echart-height", 3, "options"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-15"], [1, "row", "mb-2"], [1, "col", "col-block"], [1, "font-15"], [1, "material-icons", "col-green"], [1, "material-icons", "col-orange"], [1, "progress", "shadow-style", "mb-2", "mt-3"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-70"], [1, "plain-card", "mt-4"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-50"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "body", "text-center"], [1, "m-b-20"], [1, "d-inline-block"], [3, "max", "dialStartAngle", "dialEndAngle", "label", "value", "animated", "animationDuration"], [1, "displayblock", "m-t-10"], [1, "icon", "m-t-15"], ["echarts", "", 1, "sparkline-echart", 3, "options"], [1, "recent-comment"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], [1, "timeline"], [1, "timeline-badge", "primary"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], ["src", "assets/images/user/user2.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"], [1, "assignment-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "285px", 3, "perfectScrollbar"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3"], [1, "far", "fa-arrow-alt-circle-down"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "d-flex"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dashboard2Component_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Bar chart with line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sales Report Last Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14)(25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "825");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "22,067");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18)(39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20)(42, "div", 11)(43, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Sales Report Current Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13)(46, "div", 14)(47, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "$147");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14)(54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "$968");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14)(61, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "$1,147");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 18)(68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3)(71, "div", 22)(72, "div", 5)(73, "div", 6)(74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 23)(77, "div", 24)(78, "table", 25)(79, "thead")(80, "tr")(81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tbody")(94, "tr")(95, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td")(102, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td")(107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "tr")(110, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td")(117, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td")(122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "tr")(125, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td")(132, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td")(137, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr")(140, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "td")(147, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td")(152, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "tr")(155, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Moto Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "td")(162, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td")(167, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "tr")(170, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Nokia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "td")(177, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "td")(182, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 43)(185, "div", 5)(186, "div", 6)(187, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 7)(190, "div", 44)(191, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Total Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "5,98,345");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "mwl-gauge", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Satisfaction Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "36% Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 3)(204, "div", 43)(205, "div", 5)(206, "div", 6)(207, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Notice Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 7)(210, "div", 51)(211, "div", 52)(212, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 54)(215, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "small", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 52)(222, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 54)(225, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 52)(232, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 54)(235, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 62)(242, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 54)(245, "h5", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 43)(252, "div", 5)(253, "div", 6)(254, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 7)(257, "ul", 65)(258, "li")(259, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 68)(262, "div", 69)(263, "h5", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 71)(266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "5 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "li")(269, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 68)(272, "div", 69)(273, "h5", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 71)(276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li")(279, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 68)(282, "div", 69)(283, "h5", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 71)(286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "20 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "li")(289, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 68)(292, "div", 69)(293, "h5", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 71)(296, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "35 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 43)(299, "div", 5)(300, "div", 6)(301, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 7)(304, "div", 74)(305, "ul", 75)(306, "li", 76)(307, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 79)(310, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Java Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, ".doc, 4.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 81)(315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "i", 82)(317, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "li", 76)(319, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 79)(322, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Angular Theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, ".xls, 2.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 81)(327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "i", 82)(329, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "li", 76)(331, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 79)(334, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Maths Sums Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, ".pdf, 10.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 81)(339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "i", 82)(341, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li", 88)(343, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 79)(346, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Submit Science Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, ".zip, 53.2 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 81)(351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](352, "i", 82)(353, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "li", 76)(355, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 79)(358, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Marketing Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, ".doc, 5.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 81)(363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "i", 82)(365, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 91)(367, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "More Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.lineBarChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 100)("dialStartAngle", -90)("dialEndAngle", -90.001)("label", ctx.percentageValue)("value", ctx.gaugeValues[1])("animated", true)("animationDuration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.ebarChart);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, ngx_echarts__WEBPACK_IMPORTED_MODULE_5__.NgxEchartsDirective, angular_gauge__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 67942:
/*!*********************************************************!*\
  !*** ./src/app/bias/dashboard3/dashboard3.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard3Component": () => (/* binding */ Dashboard3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);







function Dashboard3Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class Dashboard3Component {
    constructor() {
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Home'],
                active: 'Dashboard 3'
            }
        ];
    }
    ngOnInit() {
        this.chart1();
        this.chart2();
    }
    chart1() {
        this.lineChartOptions = {
            series: [
                {
                    name: 'High - 2013',
                    data: [15, 13, 22, 23, 17, 32, 27]
                },
                {
                    name: 'Low - 2013',
                    data: [12, 18, 14, 18, 23, 13, 21]
                }
            ],
            chart: {
                height: 350,
                type: 'line',
                foreColor: '#9aa0ac',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#F45B5B', '#5F98CF'],
            stroke: {
                curve: 'smooth'
            },
            grid: {
                row: {
                    colors: ['transparent', 'transparent'],
                    opacity: 0.5
                }
            },
            markers: {
                size: 3
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: 'Temperature'
                },
                min: 5,
                max: 40
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true
                },
                x: {
                    show: true
                }
            }
        };
    }
    chart2() {
        this.barChartOptions = {
            series: [
                {
                    name: 'Product 1',
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: 'Product 2',
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: 'Product 3',
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: 'Product 4',
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            chart: {
                type: 'bar',
                height: 350,
                foreColor: '#9aa0ac',
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%'
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: 'category',
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 0.8,
                colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F']
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true
                },
                x: {
                    show: true
                }
            }
        };
    }
}
Dashboard3Component.ɵfac = function Dashboard3Component_Factory(t) { return new (t || Dashboard3Component)(); };
Dashboard3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Dashboard3Component, selectors: [["app-dashboard3"]], decls: 528, vars: 59, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "text-muted"], [1, "text-info"], [1, "card-content", "mt-2"], [1, "progress", "skill-progress", "m-b-5", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-45"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "text-muted", "mb-0"], [1, "text-success"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-45"], [1, "text-danger"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-45"], [1, "text-secondary"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-45"], [1, "col-lg-6"], [1, "header"], [1, "body"], [1, "recent-report__chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "tooltip", "markers", "grid", "yaxis", "title", "fill"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "tooltip", "legend", "fill"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], ["mat-icon-button", "", 1, "tbl-action-btn"], [3, "icon"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "label", "bg-red", "shadow-style"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user5.jpg", "alt", ""], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["id", "new-orders", 1, "media-list", "position-relative"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "assign-style"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "label", "l-bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function Dashboard3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Dashboard3Component_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div")(9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Todays Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Income For Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "$170");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "div", 6)(26, "div", 7)(27, "div")(28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "$120");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10)(35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 13)(38, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4)(43, "div", 5)(44, "div", 6)(45, "div", 7)(46, "div")(47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Fresh New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 10)(54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7)(57, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 4)(62, "div", 5)(63, "div", 6)(64, "div", 7)(65, "div")(66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Joined New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 10)(73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 13)(76, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 3)(81, "div", 21)(82, "div", 5)(83, "div", 22)(84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 23)(87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "apx-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 21)(90, "div", 5)(91, "div", 22)(92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "apx-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 27)(97, "div", 28)(98, "div", 5)(99, "div", 22)(100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Clients Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 29)(103, "div", 30)(104, "table", 31)(105, "thead")(106, "tr")(107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "tbody")(120, "tr")(121, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td")(128, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "ERP System");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "td")(133, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "tr")(138, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "td")(145, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Abc Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "td")(150, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "tr")(155, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "td")(162, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Android App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "td")(167, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "tr")(172, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td")(179, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Ios App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "td")(184, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "tr")(189, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "td")(196, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Java Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "td")(201, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "tr")(206, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "xyz@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "td")(213, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Desktop App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "td")(218, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "app-feather-icons", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 43)(223, "div", 5)(224, "div", 22)(225, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 23)(228, "div", 44)(229, "div", 30)(230, "table", 45)(231, "thead")(232, "tr")(233, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "tbody")(240, "tr")(241, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "td", 47)(244, "ul", 48)(245, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "li", 49)(252, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "tr")(257, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "td", 47)(260, "ul", 48)(261, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](262, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "li", 49)(268, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "tr")(273, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "td", 47)(276, "ul", 48)(277, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "li", 49)(284, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "tr")(289, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "td", 47)(292, "ul", 48)(293, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](294, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](296, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "li", 49)(300, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "tr")(305, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "Moto Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "td", 47)(308, "ul", 48)(309, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](314, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "li", 49)(316, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "tr")(321, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "td", 47)(324, "ul", 48)(325, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](328, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](330, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "li", 49)(332, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "tr")(337, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "td", 47)(340, "ul", 48)(341, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](342, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](344, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "li", 49)(348, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "div", 27)(353, "div", 54)(354, "div", 5)(355, "div", 22)(356, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "div", 23)(359, "div", 55)(360, "ul", 56)(361, "li", 57)(362, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](363, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "h6")(365, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](371, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "li", 62)(373, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](374, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "h6")(376, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](382, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "li", 62)(384, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](385, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "h6")(387, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, " Lina Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, " Hey, How are you?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "li", 57)(395, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](396, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "h6")(398, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, " Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, " I am fine. You?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "li", 62)(406, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](407, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "h6")(409, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 54)(417, "div", 5)(418, "div", 22)(419, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](420, "Assign Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](421, "div", 29)(422, "div", 30)(423, "table", 31)(424, "thead")(425, "tr")(426, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](427, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](429, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "tbody")(437, "tr")(438, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](439, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](441, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "td")(443, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](446, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "td")(448, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](449, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "tr")(451, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](452, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](454, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "td")(456, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "td")(461, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](462, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "tr")(464, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](465, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "td")(469, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](470, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](472, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "td")(474, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](475, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "tr")(477, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](478, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "td")(482, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](483, "Wait Approvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](485, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "td")(487, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](488, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "tr")(490, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](491, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](493, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "td")(495, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](496, "Suspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](498, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "td")(500, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](501, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "tr")(503, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](504, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](506, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "td")(508, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](509, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](511, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "td")(513, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](514, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "tr")(516, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](517, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](519, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "td")(521, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](522, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](524, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](525, "td")(526, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](527, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.lineChartOptions.series)("chart", ctx.lineChartOptions.chart)("xaxis", ctx.lineChartOptions.xaxis)("stroke", ctx.lineChartOptions.stroke)("colors", ctx.lineChartOptions.colors)("dataLabels", ctx.lineChartOptions.dataLabels)("legend", ctx.lineChartOptions.legend)("tooltip", ctx.lineChartOptions.tooltip)("markers", ctx.lineChartOptions.markers)("grid", ctx.lineChartOptions.grid)("yaxis", ctx.lineChartOptions.yaxis)("title", ctx.lineChartOptions.title)("fill", ctx.lineChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("responsive", ctx.barChartOptions.responsive)("xaxis", ctx.barChartOptions.xaxis)("tooltip", ctx.barChartOptions.tooltip)("legend", ctx.barChartOptions.legend)("fill", ctx.barChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tbl-fav-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "trash-2");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__.ChartComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50141:
/*!*********************************************!*\
  !*** ./src/app/bias/main/main.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 81516);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);









function MainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.active)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function MainComponent_div_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", item_r3 == null ? null : item_r3.value);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function MainComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "button", 15)(3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " info_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17)(6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MainComponent_div_18_div_7_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 20)(9, "span")(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Normal Range ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b")(14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Impact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 22)(21, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", item_r3.value == null ? null : item_r3.value.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.BiasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((item_r3.value == null ? null : item_r3.value.description.endsWith(".")) ? item_r3.value == null ? null : item_r3.value.description : (item_r3.value == null ? null : item_r3.value.description) + ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.value == null ? null : item_r3.value.normal_range);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, (item_r3.value == null ? null : item_r3.value.impact) == "High" ? "red" : (item_r3.value == null ? null : item_r3.value.impact) == "Low" ? "blue" : "#eec60a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.value == null ? null : item_r3.value.impact);
} }
class MainComponent {
    constructor(DatacollectionService, authService) {
        this.DatacollectionService = DatacollectionService;
        this.authService = authService;
        this.graph_line_chart = {
            tooltip: {
                trigger: 'axis'
            },
            // legend: {
            //   data: ['sales', 'purchases'],
            //   textStyle: {
            //     color: '#9aa0ac'
            //   }
            // },
            toolbox: {
                show: !1
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2000', '2001', '2002', '2003', '2004', '2005'],
                    axisLabel: {
                        fontSize: 10,
                        color: '#9aa0ac'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        fontSize: 10,
                        color: '#9aa0ac'
                    }
                }
            ],
            series: [
                {
                    name: 'sales',
                    type: 'bar',
                    data: [0.668],
                    // markPoint: {
                    //   data: [
                    //     {
                    //       type: 'max',
                    //       name: '???'
                    //     },
                    //     {
                    //       type: 'min',
                    //       name: '???'
                    //     }
                    //   ]
                    // },
                    markLine: {
                        data: [
                            {
                                type: 'average'
                            }
                        ]
                    }
                }
                // {
                //   name: 'purchases',
                //   type: 'bar',
                //   data: [35, 45, 47, 10, 35, 70],
                //   markLine: {
                //     data: [
                //       {
                //         type: 'average'
                //       }
                //     ]
                //   }
                // }
            ],
            color: ['#9f78ff', '#32cafe']
        };
        this.currentUser = {};
        this.BiasData = null;
        this.attribute = null;
        this.breadscrums = [
            {
                title: 'Bias',
                items: ['Bias'],
                active: 'Bias Metrics'
            }
        ];
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.currentUser = user;
            this.getData();
        });
    }
    getData() {
        this.DatacollectionService.getBias(this.currentUser?.email)
            .subscribe((data) => {
            if (data) {
                console.log(data, "asa");
                this.BiasData = data;
            }
        });
        this.DatacollectionService.getAttribute(this.currentUser?.email)
            .subscribe(data => {
            if (data) {
                this.attribute = data;
            }
        });
    }
    ;
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 20, vars: 6, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", "style", "margin-left: 16px;", 4, "ngFor", "ngForOf"], [2, "width", "100%", "color", "#232424", "font-weight", "400", "margin-left", "16px"], [2, "font-size", "20px", "margin-bottom", "12px"], [2, "color", "#1A73E8"], [2, "font-size", "16px"], [2, "font-size", "16px", "font-weight", "400"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "block-header", 2, "margin-left", "16px"], [3, "title", "items", "active_item"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown"], ["matTooltipPosition", "above", 2, "cursor", "pointer", 3, "matTooltip"], [1, "body", "row"], [1, "card", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], [1, "card", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "view-mail", 2, "justify-content", "center", "font-size", "large"], [2, "color", "black", "margin-right", "6px"], [2, "margin-left", "60px", "font-weight", "500", 3, "ngStyle"], ["echarts", "", 1, "echart-height", 3, "options"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Privileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Unprivileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "All bias metrics are calculated based on the above protected attributes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MainComponent_div_18_Template, 24, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.privileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.unprivileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 4, ctx.BiasData));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_8__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86152:
/*!*********************************************************************!*\
  !*** ./src/app/bias/mainDashboardRes/mainDashboardRes.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDashboardRes": () => (/* binding */ mainDashboardRes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 81516);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);










function mainDashboardRes_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r5.active)("items", breadscrum_r5.items)("active_item", breadscrum_r5.active);
} }
function mainDashboardRes_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function mainDashboardRes_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.printPage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Download as PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function mainDashboardRes_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 32);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.pie_chart);
} }
function mainDashboardRes_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8 == null ? null : item_r8.sr_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.risk);
} }
function mainDashboardRes_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((item_r10 == null ? null : item_r10.MetricName.charAt(0).toUpperCase()) + (item_r10 == null ? null : item_r10.MetricName.slice(1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.MetricValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (item_r10 == null ? null : item_r10.Criticality) == "High" ? "badge table-col-red shadow-style" : (item_r10 == null ? null : item_r10.Criticality) == "Low" ? "badge table-col-blue  shadow-style" : "badge table-col-yellow shadow-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.Criticality);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.NormalRange);
} }
class mainDashboardRes {
    constructor(DatacollectionService, renderer, authService) {
        this.DatacollectionService = DatacollectionService;
        this.renderer = renderer;
        this.authService = authService;
        this.currentUser = {};
        this.attribute = null;
        this.metricTableData = [];
        this.riskTable = [];
        this.setDataMetricImpact = null;
        this.line_chart = {
            grid: {
                top: '6',
                right: '0',
                bottom: '35',
                left: '25'
            },
            xAxis: {
                data: ['2014', '2015', '2016', '2017', '2018'],
                axisLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                }
            },
            tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: true,
                triggerOn: 'mousemove',
                // trigger: 'axis'
            },
            legend: {
                data: ['Accuracy', 'Fairness Score'],
                orient: 'horizontal',
                top: 'bottom',
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#eaeaea'
                    }
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#9aa0ac'
                }
            },
            series: [
                {
                    name: 'sales',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    },
                    data: [15, 22, 14, 31, 17, 41],
                    symbolSize: 10
                    // color: ["#FF8D60"]
                },
                {
                    name: 'Profit',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    },
                    symbolSize: 10,
                    // size: 10,
                    data: [8, 12, 28, 10, 10, 12]
                    // color: ["#009DA0"]
                }
            ],
            color: ['#3FA7DC', '#F6A025']
        };
        this.pie_chart2 = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '48%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 15
                    },
                    data: [
                        { value: 40, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' }
                    ]
                }
            ]
        };
        this.pie_chart = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
                textStyle: {
                    color: '#9aa0ac',
                    padding: [0, 5, 0, 5]
                }
            },
            series: [
                {
                    name: 'Chart Data',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '48%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n\n{c}',
                        rich: {
                            b: {
                                color: '#fff',
                                fontSize: 16,
                                lineHeight: 22,
                                padding: [0, 0, 10, 0] // Adjust for better positioning
                            },
                            c: {
                                color: '#fff',
                                fontSize: 14,
                                lineHeight: 22
                            }
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                            formatter: '{b}\n\n{d}%'
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: 'Data 1'
                        },
                        {
                            value: 310,
                            name: 'Data 2'
                        },
                        {
                            value: 234,
                            name: 'Data 3'
                        },
                        {
                            value: 135,
                            name: 'Data 4'
                        },
                        {
                            value: 548,
                            name: 'Data 5'
                        }
                    ]
                }
            ],
            color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8']
        };
        this.breadscrums = [
            {
                title: 'Bias',
                items: ['Bias'],
                active: 'Bias Summary'
            }
        ];
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.currentUser = user;
            this.getData();
        });
    }
    getData() {
        this.DatacollectionService.getBiasSummary(this.currentUser?.email)
            .subscribe(data => {
            console.log(data, "datasummary");
            if (data) {
                this.setDataMetricImpact = data;
                // this.pie_chart['legend']['data'] = Object.keys(data?.metric_impact_data)
                data?.Fairness_and_Accuracy_Over_Time?.series.map(x => {
                    x['lineStyle'] = {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    };
                    x['symbolSize'] = 10;
                    x['smooth'] = true;
                });
                this.line_chart['series'] = data?.Fairness_and_Accuracy_Over_Time?.series;
                this.line_chart['xAxis']['data'] = data?.Fairness_and_Accuracy_Over_Time?.xAxis;
                this.pie_chart['series'][0]['data'] = data?.metric_impact_data;
                this.pie_chart2['series'][0]['data'] = data?.CorrelationPieChart;
                this.riskTable = data?.risk_table;
                this.metricTableData = data?.metric_table.map(item => {
                    return {
                        ...item,
                        MetricName: item.MetricName.toLowerCase()
                            .split(' ')
                            .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.substr(1))
                            .join(' ')
                    };
                });
                console.log(JSON.stringify(this.line_chart), "lidsnfjsldfbsjfnds");
            }
        });
        this.DatacollectionService.getAttribute(this.currentUser?.email)
            .subscribe(data => {
            if (data) {
                this.attribute = data;
            }
        });
    }
    printPage() {
        this.renderer.addClass(document.body, 'ls-closed'); // Add class to close sidebar
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                this.renderer.removeClass(document.body, 'ls-closed'); // Remove class after printing
            }, 500); // Adjust timeout as needed based on your sidebar animation
        }, 500);
    }
}
mainDashboardRes.ɵfac = function mainDashboardRes_Factory(t) { return new (t || mainDashboardRes)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
mainDashboardRes.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: mainDashboardRes, selectors: [["app-mainDashboardRes"]], decls: 71, vars: 7, consts: [[1, "content", "printable"], [1, "container-fluid"], ["class", "block-header", "style", "margin-left: 16px;", 4, "ngFor", "ngForOf"], [2, "width", "100%", "color", "#232424", "font-weight", "400", "margin-left", "16px"], [2, "font-size", "20px", "margin-bottom", "12px"], [2, "color", "#1A73E8"], [2, "font-size", "16px"], [2, "font-size", "16px", "font-weight", "400"], ["class", "msr-3 no-print", "mat-raised-button", "", "style", "background-color: #1A73E8; color: white; position: absolute; right: 13px;", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [2, "font-size", "large", "color", "black", "font-weight", "600"], ["mat-button", "", 1, "header-dropdown"], ["matTooltip", "The pie chart illustrates the distribution of scores into categories of risk levels: Low, Medium, and High. A Low score indicates low risk, while a High score signifies high risk.", "matTooltipPosition", "above", 2, "cursor", "pointer"], [1, "body"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "header", 2, "margin-bottom", "10px"], [2, "font-size", "large", "color", "black"], ["matTooltip", "The table displays bias metrics, their values, normal ranges, and criticality levels (high, medium, low), indicating associated risk levels.", "matTooltipPosition", "above", 2, "cursor", "pointer"], [2, "text-align", "center"], [2, "background", "#F5F6FA", "padding", "10px"], [1, "block-header", 2, "margin-left", "16px"], [3, "title", "items", "active_item"], ["mat-raised-button", "", 1, "msr-3", "no-print", 2, "background-color", "#1A73E8", "color", "white", "position", "absolute", "right", "13px", 3, "click"], ["echarts", "", 1, "echart-height", 3, "options"], [2, "text-align", "center", "min-width", "70px"], [3, "ngClass"]], template: function mainDashboardRes_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, mainDashboardRes_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Privileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Unprivileged Group : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "All bias metrics are calculated based on the above protected attributes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, mainDashboardRes_button_15_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Bias Metric Impact Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 14)(25, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, mainDashboardRes_div_28_Template, 1, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "table", 20)(32, "thead")(33, "tr")(34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "SL. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Bias Risks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, mainDashboardRes_tr_39_Template, 5, 2, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22)(41, "div", 23)(42, "div", 11)(43, "div", 24)(44, "h2", 25)(45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Bias Metrics Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 14)(48, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 18)(51, "div", 19)(52, "table", 20)(53, "thead")(54, "tr")(55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "SL. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Metric Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Metric Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Metric Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Criticality");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Normal Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, mainDashboardRes_tr_68_Template, 14, 7, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Limitation of Liability: IN NO EVENT SIGMARED TECHNOLOGIES INC. OR THE USER HAVE ANY LIABILITY OR RESPONSIBILITY UNDER ANY THEORY OF LIABILITY OR CAUSE OF ACTION FOR ANY INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO DAMAGES ARISING FROM BUSINESS INTERRUPTION OR LOSS OF PROFITS OR DATA). THIS IS A BETA AND LITE VERSION, AND HENCE, THE RESULTS FROM THIS PLATFORM ARE NOT LEGALLY BINDING; NOT ALL FEATURES ARE ENABLED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.privileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == null ? null : ctx.attribute.unprivileged.join(" "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.setDataMetricImpact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.setDataMetricImpact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.riskTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metricTableData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_8__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.table-col-red[_ngcontent-%COMP%] {\n  background-color: red;\n  width: 60px;\n  border: none;\n}\n.table-col-yellow[_ngcontent-%COMP%] {\n  background-color: #f7d020;\n  width: 60px;\n  border: none;\n}\n.table-col-blue[_ngcontent-%COMP%] {\n  background-color: blue;\n  width: 60px;\n  border: none;\n}\n.serial-no[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5EYXNoYm9hcmRSZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRTtJQUNFLHdCQUFBO0VBTkY7QUFDRjtBQVFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5KO0FBUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEo7QUFPQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBLEVBQUEsNERBQUE7QUFIRiIsImZpbGUiOiJtYWluRGFzaGJvYXJkUmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJyZWFkY3J1bWItbWFpbiAucGFnZS10aXRsZSB7XG4vLyAgICAgZm9udC1zaXplOiAzNnB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgbWFyZ2luLWlubGluZTogMjRweDtcbi8vIH1cblxuXG5AbWVkaWEgcHJpbnQge1xuICAubm8tcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnRhYmxlLWNvbC1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4udGFibGUtY29sLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDAyMDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4udGFibGUtY29sLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnNlcmlhbC1ubyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBvcHRpb25hbCwgaWYgeW91IHdhbnQgdG8gc2hvdyAnLi4uJyB3aGVuIHRleHQgb3ZlcmZsb3dzICovXG59Il19 */"] });


/***/ }),

/***/ 50684:
/*!*********************************************!*\
  !*** ./src/app/bias/summary/sample_data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sample_data": () => (/* binding */ sample_data)
/* harmony export */ });
const sample_data = {
    "balanced_accuracy": {
        "description": "Accuracy of model .More the scores better the model is",
        "normal_range": "0.85-1",
        "impact": "Medium",
        "title": {
            "text": "Graph 1"
        },
        "toolbox": {
            "feature": {
                "dataView": {
                    "show": "true",
                    "readOnly": "false"
                },
                "magicType": {
                    "show": "true",
                    "type": [
                        "line",
                        "bar"
                    ]
                },
                "restore": {
                    "show": "true"
                }
            }
        },
        "xAxis": {
            "data": [
                "13/02/2023",
                "04/03/2023",
                "13/02/2023",
                "04/01/2023",
                "27/10/2023",
                "27/10/2023",
                "27/10/2023"
            ]
        },
        "yAxis": {
            "type": "value"
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            }
        },
        "series": [
            {
                "name": "Balanced Accuracy",
                "type": "bar",
                "data": [
                    0.496,
                    0.697,
                    0.496,
                    0.496,
                    0.698,
                    0.697,
                    0.697
                ],
                "markLine": {
                    "data": [
                        {
                            "type": "average"
                        }
                    ]
                },
                "markPoint": {
                    "data": [
                        {
                            "type": "max",
                            "name": "Max"
                        },
                        {
                            "type": "min",
                            "name": "Min"
                        }
                    ]
                }
            }
        ]
    },
    "statistical_parity_difference": {
        "description": "The ideal value of this metric is  0 . A value < 0 implies higher benefit for the privileged group and a value >0 implies a higher benefit for the unprivileged group",
        "normal_range": "-0.10-0.10",
        "impact": "High",
        "title": {
            "text": "Graph 2"
        },
        "toolbox": {
            "feature": {
                "dataView": {
                    "show": "true",
                    "readOnly": "false"
                },
                "magicType": {
                    "show": "true",
                    "type": [
                        "line",
                        "bar"
                    ]
                },
                "restore": {
                    "show": "true"
                }
            }
        },
        "xAxis": {
            "data": [
                "13/02/2023",
                "04/03/2023",
                "13/02/2023",
                "04/01/2023",
                "27/10/2023",
                "27/10/2023",
                "27/10/2023"
            ]
        },
        "yAxis": {
            "type": "value"
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            }
        },
        "series": [
            {
                "name": "Statistical Parity Difference",
                "type": "bar",
                "data": [
                    -0.004,
                    0.423,
                    -0.004,
                    -0.004,
                    0.424,
                    0.418,
                    0.417
                ],
                "markLine": {
                    "data": [
                        {
                            "type": "average"
                        }
                    ]
                },
                "markPoint": {
                    "data": [
                        {
                            "type": "max",
                            "name": "Max"
                        },
                        {
                            "type": "min",
                            "name": "Min"
                        }
                    ]
                }
            }
        ]
    },
    "disparate_impact_ratio": {
        "description": "The ideal value of this metric is 1.0 A value < 1 implies higher benefit for the privileged group and a value >1 implies a higher benefit for the unprivileged group",
        "normal_range": "0.85-1.15",
        "impact": "High",
        "title": {
            "text": "Graph 3"
        },
        "toolbox": {
            "feature": {
                "dataView": {
                    "show": "true",
                    "readOnly": "false"
                },
                "magicType": {
                    "show": "true",
                    "type": [
                        "line",
                        "bar"
                    ]
                },
                "restore": {
                    "show": "true"
                }
            }
        },
        "xAxis": {
            "data": [
                "13/02/2023",
                "04/03/2023",
                "13/02/2023",
                "04/01/2023",
                "27/10/2023",
                "27/10/2023",
                "27/10/2023"
            ]
        },
        "yAxis": {
            "type": "value"
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            }
        },
        "series": [
            {
                "name": "Disparate Impact Ratio",
                "type": "bar",
                "data": [
                    0.977,
                    2.927,
                    0.977,
                    0.977,
                    2.952,
                    2.892,
                    2.882
                ],
                "markLine": {
                    "data": [
                        {
                            "type": "average"
                        }
                    ]
                },
                "markPoint": {
                    "data": [
                        {
                            "type": "max",
                            "name": "Max"
                        },
                        {
                            "type": "min",
                            "name": "Min"
                        }
                    ]
                }
            }
        ]
    },
};


/***/ }),

/***/ 8762:
/*!***************************************************!*\
  !*** ./src/app/bias/summary/summary.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample_data */ 50684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);








function SummaryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.title)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function SummaryComponent_div_5_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", item_r3 == null ? null : item_r3.value);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function SummaryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "button", 10)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-menu", null, 11)(7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13)(14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SummaryComponent_div_5_div_15_Template, 1, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b")(20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Impact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.BiasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.value == null ? null : item_r3.value.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Normal Range ", item_r3.value == null ? null : item_r3.value.normal_range, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, (item_r3.value == null ? null : item_r3.value.impact) == "High" ? "#007500" : (item_r3.value == null ? null : item_r3.value.impact) == "Low" ? "#A52A2A" : "#FFA500"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.value == null ? null : item_r3.value.impact, "");
} }
class SummaryComponent {
    constructor() {
        this.BiasData = _sample_data__WEBPACK_IMPORTED_MODULE_0__.sample_data;
        this.breadscrums = [
            {
                title: 'Bias Summary',
                items: ['Bias'],
                active: 'Summary'
            }
        ];
    }
    ngOnInit() {
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 7, vars: 4, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body", "row"], [1, "card", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], [1, "card", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "view-mail", 2, "justify-content", "center"], [3, "ngStyle"], ["echarts", "", 1, "echart-height", 3, "options"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SummaryComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SummaryComponent_div_5_Template, 26, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx.BiasData));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_bias_bias_module_ts.js.map