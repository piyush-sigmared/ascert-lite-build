"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_Explainability_Explainability_module_ts"],{

/***/ 61945:
/*!******************************************************************!*\
  !*** ./src/app/Explainability/Datacollection-service.service.ts ***!
  \******************************************************************/
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
        this.gatewayExplainability = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlExplainability;
    }
    getFeature(data) {
        let url = `${this.gateway}/v1/features/?project_name=${sessionStorage.getItem('Projectname')}&module_name=${sessionStorage.getItem('Modulename')}&metric_name=${['EDS']}&client_id=${'coforge'}`;
        return this.http.post(url, {
            "point_index": data
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getEda(path) {
        let url = `${this.gatewayExplainability}?project_name=${sessionStorage.getItem('Projectname')}&metric_name=eda&client_id=${sessionStorage.getItem('Client_id')}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getSummary(path) {
        let url = `${this.gatewayExplainability}?project_name=${sessionStorage.getItem('Projectname')}&metric_name=summary&client_id=${sessionStorage.getItem('Client_id')}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getExplanability(path) {
        let url = `${this.gatewayExplainability}?project_name=${sessionStorage.getItem('Projectname')}&metric_name=explainability&client_id=${sessionStorage.getItem('Client_id')}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getPerfomance(path) {
        let url = `${this.gatewayExplainability}?project_name=${sessionStorage.getItem('Projectname')}&metric_name=performance&client_id=${sessionStorage.getItem('Client_id')}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    // getExplainAbility(path:string): Observable<any> {  
    //   let url = `${this.gateway}/v1/transparency/performance/?project_name=${sessionStorage.getItem('Projectname')}&module_name=${sessionStorage.getItem('Modulename')}&metric_name=${['EDS']}&client_id=${'coforge'}`;
    //   return this.http.get(url).pipe(map(data => {
    //     return data;
    //   }))
    // };
    dropDown1() {
        let url = `${this.gateway}/v1/mlops/get_alldata/`;
        return this.http.post(url, {
            "project_name": sessionStorage.getItem('Projectname'),
            "module_name": sessionStorage.getItem('Modulename'),
            "metric_name": sessionStorage.getItem('Metrics'),
            "client_id": "coforge"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    thrshold1() {
        let url = `${this.gateway}/v1/mlops/get_thresholds/`;
        return this.http.post(url, {
            "project_name": "string",
            "module_name": "string",
            "metric_name": sessionStorage.getItem('Metrics'),
            "client_id": "coforge",
            "test_set_path": "string",
            "bins": 0,
            "thresholds": 0,
            "feat_name": "string",
            "test_name": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    thrshold2() {
        let url = `${this.gateway}/v1/mlops/get_bins`;
        return this.http.post(url, {
            "project_name": "string",
            "module_name": "string",
            "metric_name": sessionStorage.getItem('Metrics'),
            "client_id": "coforge",
            "test_set_path": "string",
            "bins": 0,
            "thresholds": 0,
            "feat_name": "string",
            "test_name": "string"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    dropDown2Feature(path) {
        let url = `${this.gateway}/v1/mlops/get_features`;
        return this.http.post(url, {
            "project_name": "string",
            "module_name": "string",
            "metric_name": sessionStorage.getItem('Metrics'),
            "client_id": "coforge",
            "test_set_path": path
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getDataDriftResult(path, feat, threshold1, threshold2) {
        let url = `${this.gateway}/v1/mlops/get_data_drift_results`;
        return this.http.post(url, {
            "project_name": "string",
            "module_name": "string",
            "metric_name": sessionStorage.getItem('Metrics'),
            "client_id": "coforge",
            "test_set_path": path, "bins": threshold2, "thresholds": threshold1, "feat_name": feat, "test_name": "All"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
}
DatacollectionService.ɵfac = function DatacollectionService_Factory(t) { return new (t || DatacollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DatacollectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatacollectionService, factory: DatacollectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94627:
/*!*****************************************************!*\
  !*** ./src/app/Explainability/EDA/EDA.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDA": () => (/* binding */ EDA)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);






function EDA_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.title)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function EDA_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "plotly-plot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _EDAdata_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_EDAdata_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_EDAdata_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _EDAdata_r4.data)("layout", _EDAdata_r4.layout);
} }
function EDA_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EDA_div_3_div_1_Template, 11, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.chartArrayOptions);
} }
class EDA {
    constructor(DashboardService) {
        this.DashboardService = DashboardService;
        this.tmp = {
            data: [
                { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
                { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
            ],
            layout: { width: 320, height: 240, title: 'A Fancy Plot' }
        };
        this.setDataMetricImpact = false;
        this.sampleData = [
            31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
        ];
        this.liveData = null;
        this.barchart1 = {
            "legend": {},
            "tooltip": {},
            "dataset": {
                "source": [
                    [
                        "Data Source",
                        "Reference",
                        "Incoming"
                    ],
                    [
                        "workclass",
                        5.72,
                        5.92
                    ],
                    [
                        "native-country",
                        1.75,
                        1.68
                    ],
                    [
                        "occupation",
                        5.73,
                        5.94
                    ]
                ]
            },
            "xAxis": {
                "type": "category"
            },
            "yAxis": {},
            "series": [
                {
                    "type": "bar"
                },
                {
                    "type": "bar"
                }
            ]
        };
        this.pie_chart = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                data: ['Incoming', 'Reference', 'Data 3', 'Data 4', 'Data 5'],
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
                            "value": 10257,
                            "name": "Incoming"
                        },
                        {
                            "value": 23932,
                            "name": "Reference"
                        }
                    ]
                }
            ],
            color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8']
        };
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Explainability'],
                active: 'EDA'
            }
        ];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(0);
        this.EDAdata = [];
        this.loading = true;
        this.tabs = ['Live', 'Historic'];
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
        this.cardChart1();
        this.cardChart2();
        this.cardChart3();
        this.cardChart4();
        this.chart1();
        this.chart2();
        this.getData();
    }
    getData() {
        this.DashboardService.getEda("null")
            .subscribe(data => {
            console.log(data, ":datatdat =>");
            if (data) {
                this.createPlotly(data);
            }
        }, (err) => { alert("EDA Data not found!"); }, () => this.loading = false);
    }
    createPlotly(data) {
        this.chartArrayOptions = [...data];
        console.log(this.chartArrayOptions);
    }
    createCharts(data) {
        this.chartArrayOptions = data.map(chart => {
            console.log(chart);
            let chartType = (chart.data[0].type === 'box' || chart.data[0].type === 'violin') ? 'boxplot' : chart.data[0].type === 'histogram' ? 'bar' : chart.data[0].type || 'line'; // Default chart type
            const seriesData = chart.data.map(s => {
                return {
                    type: chartType,
                    data: s.x && s.y ? s.x.map((x, index) => [x, s.y[index]]) : s.y || s.x
                };
            });
            const xAxisType = seriesData[0].data[0].length === 2 ? typeof seriesData[0].data[0][0] === 'number' ? 'value' : 'category' : 'value';
            //const xAxisType = typeof chart.data[0]?.x[0] === 'number' ? 'value' : 'category';
            return {
                title: {
                    text: chart.name,
                    subtext: chart.text,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: xAxisType // Changed from 'category' to 'value'
                    // Optionally, you can specify additional properties like min, max, interval, etc.
                },
                yAxis: {
                    type: 'value'
                },
                series: seriesData
            };
        });
        console.log(this.chartArrayOptions);
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
EDA.ɵfac = function EDA_Factory(t) { return new (t || EDA)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
EDA.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EDA, selectors: [["app-EDA"]], decls: 4, vars: 2, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "row"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [2, "min-height", "15px", "max-height", "15px"], [1, "body"], [1, "card", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "data", "layout"]], template: function EDA_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EDA_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EDA_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chartArrayOptions);
    } }, dependencies: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__.PlotlyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJFREEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11197:
/*!*****************************************************************!*\
  !*** ./src/app/Explainability/Explainability-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplainabilitysRoutingModule": () => (/* binding */ ExplainabilitysRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 77594);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 97816);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 25230);
/* harmony import */ var _EDA_EDA_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EDA/EDA.component */ 94627);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary/summary.component */ 97182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: '',
        redirectTo: 'mainRes',
        pathMatch: 'full'
    },
    {
        path: 'EDS',
        component: _EDA_EDA_component__WEBPACK_IMPORTED_MODULE_3__.EDA
    },
    {
        path: 'performance',
        component: _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_0__.mainDashboardRes
    },
    // {
    //   path: 'dataDrift',
    //   component: MainComponent
    // },
    {
        path: 'explainability',
        component: _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_2__.IntersectionComponent
    },
    {
        path: 'whatif',
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__.Dashboard2Component
    },
    {
        path: 'summary',
        component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent
    },
    // {
    //   path: 'dashboard3',
    //   component: Dashboard3Component
    // }
];
class ExplainabilitysRoutingModule {
}
ExplainabilitysRoutingModule.ɵfac = function ExplainabilitysRoutingModule_Factory(t) { return new (t || ExplainabilitysRoutingModule)(); };
ExplainabilitysRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExplainabilitysRoutingModule });
ExplainabilitysRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExplainabilitysRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 16150:
/*!*********************************************************!*\
  !*** ./src/app/Explainability/Explainability.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplainabilitysModule": () => (/* binding */ ExplainabilitysModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _Explainability_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Explainability-routing.module */ 11197);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 44393);
/* harmony import */ var _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainDashboardRes/mainDashboardRes.component */ 77594);
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ 97816);
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ 68673);
/* harmony import */ var _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intersection/Intersection.component */ 25230);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _EDA_EDA_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EDA/EDA.component */ 94627);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! plotly.js-dist-min */ 79423);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./summary/summary.component */ 97182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);





























angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__.PlotlyModule.plotlyjs = plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_9__;
class ExplainabilitysModule {
}
ExplainabilitysModule.ɵfac = function ExplainabilitysModule_Factory(t) { return new (t || ExplainabilitysModule)(); };
ExplainabilitysModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ExplainabilitysModule });
ExplainabilitysModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _Explainability_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExplainabilitysRoutingModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_18__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_24__.NgApexchartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_25__.NgxEchartsModule.forRoot({
            echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 84343))
        }),
        angular_gauge__WEBPACK_IMPORTED_MODULE_26__.GaugeModule.forRoot(),
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ExplainabilitysModule, { declarations: [_EDA_EDA_component__WEBPACK_IMPORTED_MODULE_8__.EDA, _mainDashboardRes_mainDashboardRes_component__WEBPACK_IMPORTED_MODULE_2__.mainDashboardRes, _Intersection_Intersection_component__WEBPACK_IMPORTED_MODULE_5__.IntersectionComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__.Dashboard2Component, _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__.Dashboard3Component, _summary_summary_component__WEBPACK_IMPORTED_MODULE_10__.SummaryComponent], imports: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _Explainability_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExplainabilitysRoutingModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_18__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_24__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_25__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_26__.GaugeModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule] }); })();


/***/ }),

/***/ 25230:
/*!***********************************************************************!*\
  !*** ./src/app/Explainability/Intersection/Intersection.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionComponent": () => (/* binding */ IntersectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);





function IntersectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.title)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function IntersectionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "plotly-plot", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _perfomacedata_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_perfomacedata_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_perfomacedata_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _perfomacedata_r3.data)("layout", _perfomacedata_r3.layout);
} }
class IntersectionComponent {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
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
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Explainability'],
                active: 'Explainability'
            }
        ];
        this.getExplainData = null;
    }
    ngOnInit() {
        // if(false) this.getData()
        // else{
        //   alert("Please reach out to contact@sigmared.ai")
        //   const targetUrl = `${window.location.origin}/#/exp/EDS`;
        //   window.location.href = targetUrl;
        // }
        this.getData();
    }
    getData() {
        this.DatacollectionService.getExplanability("null")
            .subscribe(data => {
            console.log(data, ":datatdat =>");
            if (data) {
                this.getExplainData = data;
            }
        });
    }
}
IntersectionComponent.ɵfac = function IntersectionComponent_Factory(t) { return new (t || IntersectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
IntersectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IntersectionComponent, selectors: [["app-Intersection"]], decls: 5, vars: 2, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-lg-6 col-md-6 col-sm-6 col-xs-6", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], [1, "card"], [1, "header"], [2, "min-height", "15px", "max-height", "15px"], [1, "body"], [3, "data", "layout"]], template: function IntersectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IntersectionComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, IntersectionComponent_div_4_Template, 10, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getExplainData);
    } }, dependencies: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__.PlotlyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJbnRlcnNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 97816:
/*!*******************************************************************!*\
  !*** ./src/app/Explainability/dashboard2/dashboard2.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard2Component": () => (/* binding */ Dashboard2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);




function Dashboard2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r1.title)("items", breadscrum_r1.items)("active_item", breadscrum_r1.active);
} }
class Dashboard2Component {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
        this.model = {};
        this.panelOpenState = false;
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
        if (false) {}
        else {
            alert("Please reach out to contact@sigmared.ai");
            const targetUrl = `${window.location.origin}/#/exp/EDS`;
            window.location.href = targetUrl;
        }
    }
    ;
    submit() {
        if (isNaN(this.option3) || (Number(this.option3) > 100)) {
            alert("Invalid Input it must be below 100");
        }
        else {
            this.DatacollectionService.getFeature(this.option3)
                .subscribe((data) => {
                if (data) {
                }
                else {
                    alert("Invalid");
                }
                console.log(data, "asas");
            });
        }
    }
    ;
    submitFeature() { }
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
Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
Dashboard2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 6, vars: 1, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [2, "margin-top", "30px", "display", "flex", "justify-content", "center"], ["src", "http://98.70.127.19:8501", "width", "90%", "height", "600", "title", "External Content", 2, "border", "none", "border-radius", "12px"], [1, "block-header"], [3, "title", "items", "active_item"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Dashboard2Component_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 68673:
/*!*******************************************************************!*\
  !*** ./src/app/Explainability/dashboard3/dashboard3.component.ts ***!
  \*******************************************************************/
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

/***/ 44393:
/*!*******************************************************!*\
  !*** ./src/app/Explainability/main/main.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r7.title)("items", breadscrum_r7.items)("active_item", breadscrum_r7.active);
} }
function MainComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r8);
} }
function MainComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r9);
} }
function MainComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r10);
} }
function MainComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_option_r11);
} }
function MainComponent_div_35_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 25);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r13.dataDriftResult);
} }
function MainComponent_div_35_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 25);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r14.dataDriftResult2);
} }
function MainComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 3)(3, "div", 20)(4, "button", 21)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-menu", null, 22)(9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MainComponent_div_35_div_16_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MainComponent_div_35_div_17_Template, 1, 1, "div", 24);
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
function MainComponent_div_36_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 30);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", 1 + 1, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 3)(3, "div", 20)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sample Welfare Benefit Frauds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 21)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-menu", null, 22)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 26)(18, "div", 27)(19, "table", 28)(20, "thead")(21, "tr")(22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "drift_detected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "pvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, MainComponent_div_36_tr_33_Template, 11, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.dataDriftTable);
} }
class MainComponent {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
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
        this.BiasData = null;
        this.objectKeys = Object.keys;
        this.dataList2 = null;
        this.option1 = "null";
        this.option2 = "null";
        this.option3 = "null";
        this.option4 = "null";
        this.sampleData = [
            31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
        ];
        this.breadscrums = [
            {
                title: 'Data Drift',
                items: ['Mlops'],
                active: 'Data Drift'
            }
        ];
        this.dataDriftResult = null;
        this.dataDriftResult2 = null;
    }
    ngOnInit() {
        this.getData();
        this.getData2();
        this.getData3();
        // this.cardChart1();
        // this.cardChart2();
        // this.cardChart3();
        // this.cardChart4();
        // this.chart1();
        // this.chart2();
    }
    getData() {
        this.DatacollectionService.dropDown1()
            .subscribe((data) => {
            if (data) {
                console.log(data, "asa");
                if (data?.data_list) {
                    this.dataList = data?.data_list;
                }
            }
        });
    }
    getData2() {
        this.DatacollectionService.thrshold1()
            .subscribe((data) => {
            if (data) {
                console.log(data, "asa1");
                // if(data?.data_list){
                this.threshold1 = data;
                // }
            }
        });
    }
    getData3() {
        this.DatacollectionService.thrshold2()
            .subscribe((data) => {
            if (data) {
                console.log(data, "asa2");
                // if(data?.data_list){
                this.threshold2 = data;
                // }
            }
        });
    }
    ;
    submitDrift() {
        console.log(this.option1, this.option2, this.option3, this.option4);
        this.DatacollectionService.getDataDriftResult(this.option1, this.option2, this.option3, this.option4)
            .subscribe((data) => {
            if (data) {
                if (data?.ref_hist) {
                    console.log(data?.ref_hist, "data?.ref_hist");
                    this.dataDriftResult = data?.ref_hist;
                    this.dataDriftResult2 = data?.inc_hist;
                    this.dataDriftTable = data?.test_table;
                }
            }
        });
    }
    onChange2(data) {
        // console.log(data,"option")
        this.option1 = data;
        this.DatacollectionService.dropDown2Feature(data)
            .subscribe((data) => {
            if (data) {
                if (data?.feat_list) {
                    console.log(data?.feat_list, "data?.feat_list");
                    this.dataList2 = data?.feat_list;
                }
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
    addGraph(impact, range, series, xAxis) {
        // console.log(impact,series,xAxis)
        this.graph_line_chart['xAxis'][0]['data'] = xAxis;
        series[0]['type'] = "bar";
        this.graph_line_chart['series'] = series;
        // console.log(this.graph_line_chart,"graph")
        return this.graph_line_chart;
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 37, vars: 11, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "card"], [1, "body"], [1, "row", 2, "display", "flex", "width", "100%"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], ["appearance", "fill", 2, "width", "90%"], ["name", "sel2", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sel3", 3, "disabled", "ngModel", "ngModelChange"], ["name", "sel2", 3, "ngModel", "ngModelChange"], ["name", "sel3", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "msr-3", 3, "click"], ["class", "row clearfix", 4, "ngIf"], [1, "block-header"], [3, "title", "items", "active_item"], [3, "value"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["echarts", "", "class", "echart-height", 3, "options", 4, "ngIf"], ["echarts", "", 1, "echart-height", 3, "options"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [4, "ngFor", "ngForOf"], [1, "table-img"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Select Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function MainComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.onChange2($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MainComponent_mat_option_11_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Select Options");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select Thresholds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.option4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MainComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 5)(32, "div", 6)(33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_button_click_33_listener() { return ctx.submitDrift(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MainComponent_div_35_Template, 18, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, MainComponent_div_36_Template, 34, 2, "div", 14);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 77594:
/*!*******************************************************************************!*\
  !*** ./src/app/Explainability/mainDashboardRes/mainDashboardRes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDashboardRes": () => (/* binding */ mainDashboardRes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);





function mainDashboardRes_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.title)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function mainDashboardRes_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "plotly-plot", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _perfomacedata_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_perfomacedata_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_perfomacedata_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _perfomacedata_r3.data)("layout", _perfomacedata_r3.layout);
} }
class mainDashboardRes {
    constructor(DatacollectionService) {
        this.DatacollectionService = DatacollectionService;
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
        this.breadscrums = [
            {
                title: 'Dashboard',
                items: ['Explainability'],
                active: 'Performance'
            }
        ];
        this.performanceData = null;
    }
    ngOnInit() {
        // if(false) this.getData()
        // else{
        //   alert("Please reach out to contact@sigmared.ai")
        //   const targetUrl = `${window.location.origin}/#/exp/EDS`;
        //   window.location.href = targetUrl;
        // }
        this.getData();
    }
    ;
    getData() {
        this.DatacollectionService.getPerfomance("null")
            .subscribe(data => {
            console.log(data, ":datatdat =>");
            if (data) {
                this.performanceData = data;
            }
        }, err => alert("Performance data not found"));
    }
}
mainDashboardRes.ɵfac = function mainDashboardRes_Factory(t) { return new (t || mainDashboardRes)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
mainDashboardRes.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: mainDashboardRes, selectors: [["app-mainDashboardRes"]], decls: 5, vars: 2, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [2, "min-height", "15px", "max-height", "15px"], [1, "body"], [3, "data", "layout"]], template: function mainDashboardRes_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, mainDashboardRes_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, mainDashboardRes_div_4_Template, 10, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.performanceData);
    } }, dependencies: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__.PlotlyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluRGFzaGJvYXJkUmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 97182:
/*!*************************************************************!*\
  !*** ./src/app/Explainability/summary/summary.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Datacollection-service.service */ 61945);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 41299);





function SummaryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r2.title)("items", breadscrum_r2.items)("active_item", breadscrum_r2.active);
} }
function SummaryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "plotly-plot", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _summaryCharts_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_summaryCharts_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_summaryCharts_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _summaryCharts_r3.data)("layout", _summaryCharts_r3.layout);
} }
class SummaryComponent {
    constructor(DashboardService) {
        this.DashboardService = DashboardService;
        this.breadscrums = [
            {
                title: 'Summary',
                items: ['Explainability'],
                active: 'Summary'
            }
        ];
    }
    ngOnInit() {
        if (false)
            {}
        else {
            alert("Please reach out to contact@sigmared.ai");
            const targetUrl = `${window.location.origin}/#/exp/EDS`;
            window.location.href = targetUrl;
        }
    }
    getData() {
        this.DashboardService.getSummary("null")
            .subscribe(data => {
            console.log(data, ":datatdat =>");
            if (data) {
                this.summaryCharts = data;
            }
        }, (err) => { alert("EDA Data not found!"); });
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Datacollection_service_service__WEBPACK_IMPORTED_MODULE_0__.DatacollectionService)); };
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 5, vars: 2, consts: [[1, "content"], [1, "container-fluid"], ["class", "block-header", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "block-header"], [3, "title", "items", "active_item"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [2, "min-height", "15px", "max-height", "15px"], [1, "body"], [3, "data", "layout"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SummaryComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SummaryComponent_div_4_Template, 10, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.summaryCharts);
    } }, dependencies: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_3__.PlotlyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_Explainability_Explainability_module_ts.js.map