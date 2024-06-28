"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["default-src_app_mlops_Mlops_module_ts"],{

/***/ 31544:
/*!*********************************************************!*\
  !*** ./src/app/mlops/Datacollection-service.service.ts ***!
  \*********************************************************/
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
        this.gatewayMlops = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlMlops;
    }
    // getFolderList(): Observable<any> {
    //   let url = `${this.gatewayMlops}/v1/mlops/get_alldata`;
    //   return this.http.post(url, {
    //     "project_name": sessionStorage.getItem('Projectname'),
    //     "module_name": sessionStorage.getItem('Modulename'),
    //     "test_set_path": "string"
    //   }).pipe(map(data => {
    //     return data;
    //   }))
    // }
    getDataQuality() {
        let url = `${this.gatewayMlops}/get_dataquality/`;
        return this.http.post(url, {
            "project_name": "project1",
            "client_name": "client"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    dropDown1() {
        let url = `${this.gatewayMlops}/get_features/`;
        return this.http.post(url, {
            "project_name": "project1",
            "client_name": "client"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    thrshold2() {
        const lstBins = [];
        for (let i = 10; i <= 100; i += 10) {
            lstBins.push(i);
        }
        return lstBins;
    }
    ;
    thrshold1() {
        const lstThresholds = [];
        for (let i = 0.1; i < 1; i += 0.1) {
            lstThresholds.push(parseFloat(i.toFixed(2)));
        }
        return lstThresholds;
    }
    ;
    dropDown2Feature(path) {
        let url = `${this.gatewayMlops}/get_tests/`;
        return this.http.post(url, {
            "project_name": "project1",
            "client_name": "client",
            "feat_name": path
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getDataDriftResult(feat, algo, threshold1, threshold2) {
        let url = `${this.gatewayMlops}/get_data_drift_results/`;
        return this.http.post(url, {
            "project_name": "Project-1",
            "client_name": "coforge",
            "bins": 10,
            "thresholds": 0.10,
            "feat_name": "age",
            "test_name": "All",
            "module_name": "mlops",
            "test_set_path": "All",
            "dataset_name": "test",
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getOverAllEvalutionDropDown() {
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
            "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getIntersectionEvalutionDropDown() {
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
            "score": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getOutlierJson() {
        let url = `${this.gatewayMlops}/get_outlierJson/`;
        return this.http.post(url, {
            "project_name": "project1",
            "client_name": "client",
            "module_name": "Adult_Income_Module",
            "test_set_path": "string",
            "dataset_name": "test"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getOutlierTable(data) {
        let url = `${this.gatewayMlops}/get_outlier_table`;
        return this.http.post(url, {
            "project_name": "project1",
            "client_name": "client",
            "module_name": sessionStorage.getItem('Modulename'),
            "test_set_path": "string",
            "dataset_name": data,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getModelList() {
        let url = `http://20.6.34.138:8001/mlops/get_metricnames`;
        // let url = `${this.gateway}/v1/mlops/get_metricnames`;
        return this.http.post(url, {
            "project_name": "Adult_Income",
            "module_name": "Adult_Income_Module",
            "test_set_path": "folder1/subfolder1/test_set.csv",
            "dataset_name": "test"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getTargetDrift() {
        let url = `http://20.6.34.138:8001/mlops/get_targetdrift`;
        return this.http.post(url, {
            "project_name": "Adult_Income",
            "module_name": "Adult_Income_Module",
            "test_set_path": "folder1/subfolder1/test_set.csv",
            "dataset_name": "test"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
}
DatacollectionService.ɵfac = function DatacollectionService_Factory(t) { return new (t || DatacollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DatacollectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatacollectionService, factory: DatacollectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90922:
/*!**************************************************************!*\
  !*** ./src/app/mlops/Intersection/Intersection.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionComponent": () => (/* binding */ IntersectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 31544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);













function IntersectionComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r6.title)("items", breadscrum_r6.items)("active_item", breadscrum_r6.active);
} }
function IntersectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IntersectionComponent_div_2_div_1_Template, 2, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.breadscrums);
} }
function IntersectionComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r7 == null ? null : _option_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r7 == null ? null : _option_r7.value);
} }
function IntersectionComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3._selectedModel);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function IntersectionComponent_div_28_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data2_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data2_r10 == null ? null : data2_r10.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r10 == null ? null : data2_r10.MetricName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r10 == null ? null : data2_r10.MetricValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, (data2_r10 == null ? null : data2_r10.DriftResult) == "Drift Detected" ? "#007500" : "#A52A2A"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r10 == null ? null : data2_r10.DriftResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r10 == null ? null : data2_r10.NormalRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r10 == null ? null : data2_r10.Description);
} }
function IntersectionComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 10)(3, "div", 11)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Drift Metrics Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 12)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-menu", null, 13)(11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 26)(18, "div", 27)(19, "table", 28)(20, "thead")(21, "tr")(22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Metric Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Metric Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Drift Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Normal Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, IntersectionComponent_div_28_tr_35_Template, 13, 9, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.table);
} }
class IntersectionComponent {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
        this.item = true;
        this.overallEvalDropDown = [];
        this.overallEvalData = [];
        this.BiasData = null;
        this.table = [];
        this.graph_line_chart = {
            tooltip: {
                trigger: 'axis'
            },
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
                    markLine: {
                        data: [
                            {
                                type: 'average'
                            }
                        ]
                    }
                }
            ],
            color: ['#9f78ff', '#32cafe']
        };
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ],
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ],
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ],
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ],
            },
        ];
        this.sampleData = [
            31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
        ];
        this.option3 = null;
        this._selectedModel = null;
        this.breadscrums = [
            {
                title: 'Target Drift',
                items: ['MlOps'],
                active: 'Target Drift'
            }
        ];
    }
    ngOnInit() {
        this.getDropDown();
    }
    ;
    getData() {
        this.DatacollectionService.getTargetDrift()
            .subscribe(data => {
            if (data?.line_plot) {
                this.BiasData = data?.line_plot;
                this.table = data?.metrics_table;
                console.log(this.option3, this.BiasData[this.option3?.key], "this.BiasData[this.option3]", this.BiasData);
                this._selectedModel = this.BiasData[this.option3];
            }
        });
    }
    ;
    getDropDown() {
        this.getData();
        this.DatacollectionService.getModelList()
            .subscribe(data => {
            if (data) {
                console.log(data);
                this.overallEvalDropDown = data;
                this.option3 = data[0]['key'];
                this.getData();
            }
        });
    }
    onChange(data) {
        console.log(data, "onchange", this.BiasData[data]);
        this.option3 = data;
        this._selectedModel = this.BiasData[data];
    }
    GetModel() {
    }
    ;
    addGraph(item) {
        this.graph_line_chart['xAxis'] = item?.xAxis;
        this.graph_line_chart['yAxis'] = item?.yAxis;
        this.graph_line_chart['series'] = item?.xAxis;
        // console.log(this.graph_line_chart,"graph")
        return this.graph_line_chart;
    }
    overallEval() {
    }
}
IntersectionComponent.ɵfac = function IntersectionComponent_Factory(t) { return new (t || IntersectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
IntersectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IntersectionComponent, selectors: [["app-Intersection"]], inputs: { item: "item" }, decls: 29, vars: 6, consts: [[1, "content"], [1, "container-fluid"], [4, "ngIf"], [1, "row", 2, "display", "flex", "width", "100%"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], ["appearance", "fill", 2, "width", "90%"], ["name", "sel2", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body", "row"], [1, "card", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], ["class", "row clearfix", 4, "ngIf"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], [3, "value"], ["echarts", "", 1, "echart-height", 3, "options"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"], [1, "table-img"], [3, "ngStyle"]], template: function IntersectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IntersectionComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Select Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IntersectionComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.option3 = $event; })("selectionChange", function IntersectionComponent_Template_mat_select_selectionChange_8_listener($event) { return ctx.onChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, IntersectionComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "button", 12)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", null, 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, IntersectionComponent_div_27_Template, 1, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, IntersectionComponent_div_28_Template, 36, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overallEvalDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.table);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_11__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJbnRlcnNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 95165:
/*!************************************************!*\
  !*** ./src/app/mlops/MlOps/MlOps.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MlOps": () => (/* binding */ MlOps)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 31544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);











function MlOps_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r8.title)("items", breadscrum_r8.items)("active_item", breadscrum_r8.active);
} }
function MlOps_div_18_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r10 == null ? null : data_r10.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (data_r10 == null ? null : data_r10.status) == "True" ? "badge col-green shadow-style" : "badge col-red shadow-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.description);
} }
function MlOps_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MlOps_div_18_tr_13_Template, 10, 5, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.liveData == null ? null : ctx_r1.liveData.overall_table);
} }
function MlOps_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.pie_chart);
} }
function MlOps_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 50);
} }
function MlOps_div_43_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data2_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data2_r12 == null ? null : data2_r12.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r12 == null ? null : data2_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r12 == null ? null : data2_r12.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r12 == null ? null : data2_r12.incoming);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r12 == null ? null : data2_r12.description);
} }
function MlOps_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 23)(2, "table", 24)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MlOps_div_43_tr_16_Template, 11, 5, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.liveData == null ? null : ctx_r5.liveData.comp_table);
} }
function MlOps_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r7.barchart1);
} }
class MlOps {
    constructor(DashboardService) {
        this.DashboardService = DashboardService;
        this.setDataMetricImpact = false;
        this.sampleData = [
            31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
        ];
        this.liveData = null;
        this.barchart1 = {};
        this.pie_chart = {};
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Home'],
                active: 'Monitoring'
            }
        ];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(0);
        this.tabs = ['Live', 'Historic'];
        this.loading = false;
        this._ngform = {};
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    ngOnInit() {
        this.loading = true;
        this.getListOfdata();
    }
    getListOfdata() {
        this.DashboardService.getDataQuality()
            .subscribe(data => {
            if (data) {
                console.log(data, "aksnkn");
                this.liveData = data;
                this.barchart1 = {
                    ...data?.comp_barchart?.incoming,
                    legend: {
                        textStyle: {
                            color: "#777"
                        }
                    }
                };
                const temp = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8'],
                    label: data?.stats_pie_chart.label,
                    series: [
                        {
                            name: 'Chart Data',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '48%'],
                            data: data?.stats_pie_chart.data,
                            label: {
                                color: "#777"
                            }
                        }
                    ],
                };
                this.pie_chart = temp;
                this.setDataMetricImpact = true;
                this.loading = false;
            }
        });
    }
    cardChart1() {
        this.smallBarChart = {
            chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            series: [
                {
                    name: 'income',
                    data: this.sampleData
                }
            ],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {},
                marker: {
                    show: false
                }
            }
        };
    }
    cardChart2() {
        this.smallAreaChart = {
            series: [
                {
                    name: 'order',
                    data: this.sampleData
                }
            ],
            chart: {
                type: 'area',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight'
            },
            colors: ['#00E396'],
            xaxis: {
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            }
        };
    }
    cardChart3() {
        this.smallColumnChart = {
            chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            series: [
                {
                    name: 'income',
                    data: this.sampleData
                }
            ],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {},
                marker: {
                    show: false
                }
            }
        };
    }
    cardChart4() {
        this.smallLineChart = {
            series: [
                {
                    name: 'Users',
                    data: this.sampleData
                }
            ],
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight',
                colors: ['#FEB019'],
                width: 4
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                marker: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            }
        };
    }
    chart1() {
        this.areaChartOptions = {
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5
                }
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                },
                position: 'top'
            },
            scales: {
                xAxes: [
                    {
                        display: false
                    }
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        };
        this.areaChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, '#5555FF');
                    gradientStroke.addColorStop(1, '#9787FF');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.lineTension = '0.4';
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, '#FF55B8');
                    gradientStroke2.addColorStop(1, '#FF8787');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.lineTension = '0.4';
                }
            }
        ];
        this.areaChartData = [
            {
                label: 'Foods',
                data: [24, 18, 16, 18, 24, 36, 28]
            },
            {
                label: 'Electronics',
                data: [20, 22, 30, 22, 18, 22, 30]
            }
        ];
        this.areaChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        // area chart end
    }
    chart2() {
        this.radarChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
                    gradientStroke.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointHoverBackgroundColor = 'transparent';
                    dataset.pointHoverBorderColor = 'transparent';
                    dataset.pointHitRadius = 50;
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
                    gradientStroke2.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointHoverBackgroundColor = 'transparent';
                    dataset2.pointHoverBorderColor = 'transparent';
                    dataset2.pointHitRadius = 50;
                },
                beforeDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                    chart.ctx.shadowBlur = 40;
                },
                afterDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                    chart.ctx.shadowBlur = 0;
                }
            }
        ];
        this.radarChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        this.radarChartData = [
            { data: [25, 59, 90, 81, 60, 82, 52], label: 'Product', fill: true },
            { data: [40, 100, 40, 90, 40, 90, 84], label: 'Services', fill: true }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: ['rgba(109, 144, 232,0.8)']
            },
            {
                backgroundColor: ['rgba(255, 140, 96,0.8)']
            }
        ];
        this.radarChartOptions = {
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                },
                position: 'top'
            },
            gridLines: {
                display: false
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1,
                    display: false
                }
            }
        };
        // end radar chart
    }
}
MlOps.ɵfac = function MlOps_Factory(t) { return new (t || MlOps)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
MlOps.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MlOps, selectors: [["app-MlOps"]], decls: 61, vars: 8, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], ["selectedIndex", "0"], ["label", "Live"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "header"], [1, "tableBody"], ["class", "table-responsive", 4, "ngIf"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], ["style", "display: flex;justify-content: center;align-items: center; width: 100%; margin: 5px;", 4, "ngIf"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["class", "tableBody", 4, "ngIf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"], [1, "table-img"], [3, "ngClass"], ["echarts", "", 1, "echart-height", 3, "options"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "width", "100%", "margin", "5px"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function MlOps_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MlOps_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "mat-tab-group", 7)(8, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Overall Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MlOps_div_18_Template, 14, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "div", 12)(21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Missing Column Values(%) From Reference and Incoming Datasets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MlOps_div_24_Template, 1, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, MlOps_div_25_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "div", 5)(29, "div", 12)(30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Data Quality Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17)(33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-menu", null, 18)(37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, MlOps_div_43_Template, 17, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10)(45, "div", 11)(46, "div", 5)(47, "div", 12)(48, "button", 17)(49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-menu", null, 18)(53, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, MlOps_div_60_Template, 1, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.liveData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.setDataMetricImpact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.liveData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.setDataMetricImpact);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: [".echart-height[_ngcontent-%COMP%]   .echart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  background-color: #f5f5f5;\n  border: 1px solid #dcdcdc;\n  padding: 10px;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .echart-height[_ngcontent-%COMP%]   .echart-container[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%] {\n  background-color: #333;\n  border-color: #444;\n  color: red;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%]   .echart-title[_ngcontent-%COMP%], .echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%]   .echart-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: red;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #555;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.dark-mode[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #666;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #dcdcdc;\n  color: #333;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%]   .echart-title[_ngcontent-%COMP%], .echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%]   .echart-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #333;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-container.menu-light[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: inherit;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-legend[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  cursor: pointer;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 5px;\n}\n.echart-height[_ngcontent-%COMP%]   .echart-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  margin-left: 5px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1sT3BzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFEUjtBQUlRO0VBVEo7SUFVTSxhQUFBO0VBRFI7QUFDRjtBQUlRO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGVjtBQUlVO0VBQ0UsVUFBQTtBQUZaO0FBS1U7RUFDRSxzQkFBQTtBQUhaO0FBS1k7RUFDRSxzQkFBQTtBQUhkO0FBU1E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVBWO0FBU1U7RUFDRSxXQUFBO0FBUFo7QUFVVTtFQUNFLHNCQUFBO0FBUlo7QUFVWTtFQUNFLHNCQUFBO0FBUmQ7QUFlTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBYlY7QUFrQk07RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFoQlI7QUFrQlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWhCVjtBQWtCVTtFQUNFLDBCQUFBO0FBaEJaO0FBc0JNO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBcEJSO0FBc0JRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQXBCViIsImZpbGUiOiJNbE9wcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJhc2UgU3R5bGVzIGZvciBFQ2hhcnRzIENvbnRhaW5lclxuLmVjaGFydC1oZWlnaHQge1xuICAgIC5lY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzOyAvLyBEZWZhdWx0IHRleHQgY29sb3JcbiAgICAgIFxuICAgICAgICAvLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBEYXJrIFRoZW1lIE1vZGlmaWVyc1xuICAgICAgICAmLmRhcmstbW9kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM0NDQ7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIFxuICAgICAgICAgIC5lY2hhcnQtdGl0bGUsIC5lY2hhcnQtbGVnZW5kIGxpLCAuZWNoYXJ0LWNvbnRyb2xzIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5lY2hhcnQtY29udHJvbHMgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIExpZ2h0IFRoZW1lIE1vZGlmaWVyc1xuICAgICAgICAmLm1lbnUtbGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGNkY2RjO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgXG4gICAgICAgICAgLmVjaGFydC10aXRsZSwgLmVjaGFydC1sZWdlbmQgbGksIC5lY2hhcnQtY29udHJvbHMgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5lY2hhcnQtY29udHJvbHMgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBFQ2hhcnQgVGl0bGUgU3R5bGluZ1xuICAgICAgLmVjaGFydC10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgXG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0OyAvLyBJbmhlcml0cyBjb2xvciBmcm9tIHBhcmVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEVDaGFydCBMZWdlbmQgU3R5bGluZ1xuICAgICAgLmVjaGFydC1sZWdlbmQge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEVDaGFydCBDb250cm9scyBTdHlsaW5nXG4gICAgICAuZWNoYXJ0LWNvbnRyb2xzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbn0iXX0= */"] });


/***/ }),

/***/ 40857:
/*!***********************************************!*\
  !*** ./src/app/mlops/Mlops-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MlopsRoutingModule": () => (/* binding */ MlopsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 16947);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 47651);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts/alerts.component */ 48399);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 90922);
/* harmony import */ var _MlOps_MlOps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MlOps/MlOps.component */ 95165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: '',
        redirectTo: 'mainRes',
        pathMatch: 'full'
    },
    {
        path: 'MlOps',
        component: _MlOps_MlOps_component__WEBPACK_IMPORTED_MODULE_4__.MlOps
    },
    {
        path: 'outlayer',
        component: _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_1__.mainDashboardRes
    },
    {
        path: 'dataDrift',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
    },
    {
        path: 'targetDrift',
        component: _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_3__.IntersectionComponent
    },
    {
        path: 'alert',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent
    },
    // {
    //   path: 'dashboard3',
    //   component: Dashboard3Component
    // }
];
class MlopsRoutingModule {
}
MlopsRoutingModule.ɵfac = function MlopsRoutingModule_Factory(t) { return new (t || MlopsRoutingModule)(); };
MlopsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MlopsRoutingModule });
MlopsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MlopsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 57244:
/*!***************************************!*\
  !*** ./src/app/mlops/Mlops.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MlopsModule": () => (/* binding */ MlopsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _Mlops_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mlops-routing.module */ 40857);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 16947);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 47651);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts/alerts.component */ 48399);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 76812);
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ 54202);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 90922);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _MlOps_MlOps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MlOps/MlOps.component */ 95165);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);



























class MlopsModule {
}
MlopsModule.ɵfac = function MlopsModule_Factory(t) { return new (t || MlopsModule)(); };
MlopsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MlopsModule });
MlopsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _Mlops_routing_module__WEBPACK_IMPORTED_MODULE_0__.MlopsRoutingModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_23__.NgxEchartsModule.forRoot({
            echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 84343))
        }),
        angular_gauge__WEBPACK_IMPORTED_MODULE_24__.GaugeModule.forRoot(),
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MlopsModule, { declarations: [_MlOps_MlOps_component__WEBPACK_IMPORTED_MODULE_9__.MlOps, _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__.mainDashboardRes, _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_6__.IntersectionComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__.Dashboard2Component, _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__.Dashboard3Component, _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _Mlops_routing_module__WEBPACK_IMPORTED_MODULE_0__.MlopsRoutingModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_23__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_24__.GaugeModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule], exports: [_Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_6__.IntersectionComponent] }); })();


/***/ }),

/***/ 48399:
/*!**************************************************!*\
  !*** ./src/app/mlops/alerts/alerts.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);




function AlertComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class AlertComponent {
    constructor() {
        this.gaugeValues = {
            1: 100
        };
        this.breadscrums = [
            {
                title: 'Alert',
                items: ['Home'],
                active: 'Alert'
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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-mlopsAlert"]], decls: 24, vars: 2, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row", "clearfix"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], ["echarts", "", 1, "deshboard-echart-height", 3, "options"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Bar chart with line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "div", 9)(13, "div", 5)(14, "div", 6)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "table", 12)(20, "tbody")(21, "tr")(22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Metric 1 is out of threshold. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.lineBarChart);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76812:
/*!**********************************************************!*\
  !*** ./src/app/mlops/dashboard2/dashboard2.component.ts ***!
  \**********************************************************/
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

/***/ 54202:
/*!**********************************************************!*\
  !*** ./src/app/mlops/dashboard3/dashboard3.component.ts ***!
  \**********************************************************/
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

/***/ 16947:
/*!**********************************************!*\
  !*** ./src/app/mlops/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 31544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);












function MainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r7.title)("items", breadscrum_r7.items)("active_item", breadscrum_r7.active);
} }
function MainComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r8);
} }
function MainComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r9);
} }
function MainComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r10);
} }
function MainComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r11);
} }
function MainComponent_div_35_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 26);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r13.dataDriftResult);
} }
function MainComponent_div_35_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 26);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r14.dataDriftResult2);
} }
function MainComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 3)(3, "div", 21)(4, "button", 22)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-menu", null, 23)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MainComponent_div_35_div_16_Template, 1, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MainComponent_div_35_div_17_Template, 1, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.dataDriftResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.dataDriftResult2);
} }
function MainComponent_div_36_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data2_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r18 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r17 == null ? null : data2_r17.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r17 == null ? null : data2_r17.drift_detected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r17 == null ? null : data2_r17.pvalue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r17 == null ? null : data2_r17.Description);
} }
function MainComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 3)(3, "div", 21)(4, "button", 22)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-menu", null, 23)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 27)(16, "div", 28)(17, "table", 29)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Drift Detected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "P value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MainComponent_div_36_tr_31_Template, 11, 5, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.dataDriftTable);
} }
class MainComponent {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
        // Echarts bar graph line chart config ///////////////
        this.graph_line_chart = {
            tooltip: {
                trigger: "axis",
            },
            toolbox: {
                show: !1,
            },
            xAxis: [
                {
                    type: "category",
                    data: ["2000", "2001", "2002", "2003", "2004", "2005"],
                    axisLabel: {
                        fontSize: 10,
                        color: "#9aa0ac",
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    axisLabel: {
                        fontSize: 10,
                        color: "#9aa0ac",
                    },
                },
            ],
            series: [
                {
                    name: "sales",
                    type: "bar",
                    data: [0.668],
                    markLine: {
                        data: [
                            {
                                type: "average",
                            },
                        ],
                    },
                },
            ],
            color: ["#9f78ff", "#32cafe"],
        };
        // breadscrum //////////////////////////////////
        this.breadscrums = [
            {
                title: "Data Drift",
                items: ["MlOps"],
                active: "Data Drift",
            },
        ];
        this.dataList2 = null;
        this.option1 = "null";
        this.option2 = "null";
        this.option3 = "null";
        this.option4 = "null";
        this.dataDriftResult = null;
        this.dataDriftResult2 = null;
    }
    ngOnInit() {
        this.getData();
        this.getData2();
        this.getData3();
    }
    // options dropdown
    getData() {
        this.DatacollectionService.dropDown1().subscribe((data) => {
            if (data) {
                console.log(data, "asa");
                if (data?.feat_list) {
                    this.dataList = data?.feat_list;
                }
            }
        });
    }
    // thresholds dropdown
    getData2() {
        this.threshold1 = this.DatacollectionService.thrshold1();
    }
    // Bin dropdown
    getData3() {
        this.threshold2 = this.DatacollectionService.thrshold2();
    }
    // Drift data
    submitDrift() {
        console.log(this.option1, this.option2, this.option3, this.option4);
        this.DatacollectionService.getDataDriftResult(this.option1, this.option2, this.option3, this.option4).subscribe((data) => {
            if (data) {
                if (data?.ref_hist) {
                    console.log(data, "data?.ref_hist");
                    // chart1
                    this.dataDriftResult = data?.ref_hist;
                    // chart2
                    this.dataDriftResult2 = data?.inc_hist;
                    this.dataDriftTable = data?.test_table;
                }
            }
        });
    }
    onChange2(data) {
        // console.log(data,"option")
        this.option1 = data;
        this.DatacollectionService.dropDown2Feature(data).subscribe((data) => {
            if (data) {
                if (data?.length) {
                    console.log(data, "data?.feat_list");
                    this.dataList2 = [...data];
                }
            }
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 37, vars: 11, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "card"], [1, "body", 2, "padding", "20px"], [1, "form-row"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "form-field"], ["appearance", "fill", 2, "width", "100%"], ["name", "sel2", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sel3", 3, "disabled", "ngModel", "ngModelChange"], ["name", "sel2", 3, "ngModel", "ngModelChange"], ["name", "sel3", 3, "ngModel", "ngModelChange"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], ["mat-raised-button", "", "color", "primary", 1, "msr-3", 3, "click"], ["class", "row clearfix", 4, "ngIf"], [1, "block-header"], [3, "title", "items", "active_item"], [3, "value"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], ["echarts", "", 1, "echart-height", 3, "options"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"], [1, "table-img"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Select Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function MainComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.onChange2($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MainComponent_mat_option_11_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Select Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.option2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MainComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5)(19, "div", 6)(20, "mat-form-field", 7)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Select Thresholds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.option3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MainComponent_mat_option_24_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6)(26, "mat-form-field", 7)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.option4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MainComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 5)(32, "div", 13)(33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_button_click_33_listener() { return ctx.submitDrift(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MainComponent_div_35_Template, 18, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MainComponent_div_36_Template, 32, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.dataList2)("ngModel", ctx.option2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataList2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.threshold1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.option4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.threshold2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dataDriftResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dataDriftTable);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], styles: [".form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr); \n  gap: 20px; \n  padding: 10px; \n}\n\n.form-field[_ngcontent-%COMP%] {\n  width: 100%; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUNBQUEsRUFBQSx1Q0FBQTtFQUNBLFNBQUEsRUFBQSwrQkFBQTtFQUNBLGFBQUEsRUFBQSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQSxFQUFBLCtCQUFBO0FBQ0oiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyAvKiBDcmVhdGVzIHR3byBjb2x1bW5zIG9mIGVxdWFsIHdpZHRoICovXG4gICAgZ2FwOiAyMHB4OyAvKiBTcGFjaW5nIGJldHdlZW4gZ3JpZCBpdGVtcyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgYXJvdW5kIHRoZSBncmlkIGNvbnRhaW5lciAqLyBcbn1cblxuLmZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBBZGp1c3QgYmFzZWQgb24gcHJlZmVyZW5jZSAqL1xufSJdfQ== */"] });


/***/ }),

/***/ 47651:
/*!**********************************************************************!*\
  !*** ./src/app/mlops/mainDashboardRes/mainDashboardRes.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDashboardRes": () => (/* binding */ mainDashboardRes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 31544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);













function mainDashboardRes_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r5.title)("items", breadscrum_r5.items)("active_item", breadscrum_r5.active);
} }
function mainDashboardRes_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.outliarJson == null ? null : ctx_r2.outliarJson.trainResults);
} }
function mainDashboardRes_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.outliarJson == null ? null : ctx_r3.outliarJson.trainResults);
} }
function mainDashboardRes_div_33_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data2_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data2_r9);
} }
function mainDashboardRes_div_33_tr_24_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colt_r14 = ctx.$implicit;
    const data2_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data2_r11[colt_r14], " ");
} }
function mainDashboardRes_div_33_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, mainDashboardRes_div_33_tr_24_td_1_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.table == null ? null : ctx_r8.table.coloumn);
} }
function mainDashboardRes_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 5)(3, "div", 6)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Table Of Outlier Data Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 7)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-menu", null, 8)(11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 25)(18, "div", 26)(19, "table", 27)(20, "thead")(21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, mainDashboardRes_div_33_th_22_Template, 2, 1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, mainDashboardRes_div_33_tr_24_Template, 2, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.table == null ? null : ctx_r4.table.coloumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.table == null ? null : ctx_r4.table.table);
} }
class mainDashboardRes {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
        this.setDataMetricImpact = null;
        this.Fairness_Accuracy = null;
        this.metricTableData = [];
        this.option3 = "test";
        this.line_chart = {
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
        this.sampleData = [
            31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
        ];
        this.breadscrums = [
            {
                title: 'Outlier',
                items: ['MlOps'],
                active: 'Outlier Drift'
            }
        ];
        this.table = null;
        this.outliarJson = null;
    }
    ngOnInit() {
        this.cardChart1();
        this.cardChart2();
        this.cardChart3();
        this.cardChart4();
        this.chart1();
        this.chart2();
        this.getData();
        this.onChange('test');
    }
    getData() {
        this.DatacollectionService.getOutlierJson()
            .subscribe(data => {
            if (data) {
                this.outliarJson = data;
            }
        });
    }
    ;
    onChange(data) {
        this.table = [];
        this.DatacollectionService.getOutlierTable(data)
            .subscribe(data => {
            this.table = data;
        });
    }
    cardChart1() {
        this.smallBarChart = {
            chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            series: [
                {
                    name: 'income',
                    data: this.sampleData
                }
            ],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {},
                marker: {
                    show: false
                }
            }
        };
    }
    cardChart2() {
        this.smallAreaChart = {
            series: [
                {
                    name: 'order',
                    data: this.sampleData
                }
            ],
            chart: {
                type: 'area',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight'
            },
            colors: ['#00E396'],
            xaxis: {
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            }
        };
    }
    cardChart3() {
        this.smallColumnChart = {
            chart: {
                type: 'bar',
                width: 200,
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '40%'
                }
            },
            series: [
                {
                    name: 'income',
                    data: this.sampleData
                }
            ],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {},
                marker: {
                    show: false
                }
            }
        };
    }
    cardChart4() {
        this.smallLineChart = {
            series: [
                {
                    name: 'Users',
                    data: this.sampleData
                }
            ],
            chart: {
                type: 'line',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight',
                colors: ['#FEB019'],
                width: 4
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                marker: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            }
        };
    }
    chart1() {
        this.areaChartOptions = {
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5
                }
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                },
                position: 'top'
            },
            scales: {
                xAxes: [
                    {
                        display: false
                    }
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        };
        this.areaChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, '#5555FF');
                    gradientStroke.addColorStop(1, '#9787FF');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.lineTension = '0.4';
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, '#FF55B8');
                    gradientStroke2.addColorStop(1, '#FF8787');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.lineTension = '0.4';
                }
            }
        ];
        this.areaChartData = [
            {
                label: 'Foods',
                data: [24, 18, 16, 18, 24, 36, 28]
            },
            {
                label: 'Electronics',
                data: [20, 22, 30, 22, 18, 22, 30]
            }
        ];
        this.areaChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        // area chart end
    }
    chart2() {
        this.radarChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
                    gradientStroke.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = 'transparent';
                    dataset.pointBackgroundColor = 'transparent';
                    dataset.pointBorderColor = 'transparent';
                    dataset.pointHoverBackgroundColor = 'transparent';
                    dataset.pointHoverBorderColor = 'transparent';
                    dataset.pointHitRadius = 50;
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
                    gradientStroke2.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = 'transparent';
                    dataset2.pointBackgroundColor = 'transparent';
                    dataset2.pointBorderColor = 'transparent';
                    dataset2.pointHoverBackgroundColor = 'transparent';
                    dataset2.pointHoverBorderColor = 'transparent';
                    dataset2.pointHitRadius = 50;
                },
                beforeDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                    chart.ctx.shadowBlur = 40;
                },
                afterDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                    chart.ctx.shadowBlur = 0;
                }
            }
        ];
        this.radarChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        this.radarChartData = [
            { data: [25, 59, 90, 81, 60, 82, 52], label: 'Product', fill: true },
            { data: [40, 100, 40, 90, 40, 90, 84], label: 'Services', fill: true }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: ['rgba(109, 144, 232,0.8)']
            },
            {
                backgroundColor: ['rgba(255, 140, 96,0.8)']
            }
        ];
        this.radarChartOptions = {
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                },
                position: 'top'
            },
            gridLines: {
                display: false
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1,
                    display: false
                }
            }
        };
        // end radar chart
    }
}
mainDashboardRes.ɵfac = function mainDashboardRes_Factory(t) { return new (t || mainDashboardRes)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
mainDashboardRes.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: mainDashboardRes, selectors: [["app-mainDashboardRes"]], decls: 34, vars: 6, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body", "row"], [1, "card", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], [1, "row", 2, "display", "flex", "width", "100%"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], ["appearance", "fill", 2, "width", "90%"], ["name", "sel2", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "train"], ["value", "test"], ["class", "row clearfix", 4, "ngIf"], [1, "block-header"], [3, "title", "items", "active_item"], ["echarts", "", 1, "echart-height", 3, "options"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "tableBody"], [1, "table-responsive", 2, "text-align", "center"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"]], template: function mainDashboardRes_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, mainDashboardRes_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "button", 7)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-menu", null, 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, mainDashboardRes_div_20_Template, 1, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, mainDashboardRes_div_22_Template, 1, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "mat-form-field", 15)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Select Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function mainDashboardRes_Template_mat_select_ngModelChange_28_listener($event) { return ctx.option3 = $event; })("selectionChange", function mainDashboardRes_Template_mat_select_selectionChange_28_listener($event) { return ctx.onChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Train Outlier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Test Outlier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, mainDashboardRes_div_33_Template, 25, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.outliarJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.outliarJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.table);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluRGFzaGJvYXJkUmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_mlops_Mlops_module_ts.js.map