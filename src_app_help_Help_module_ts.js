"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_help_Help_module_ts"],{

/***/ 76574:
/*!*********************************************!*\
  !*** ./src/app/help/Help-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpsRoutingModule": () => (/* binding */ HelpsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 3068);
/* harmony import */ var _userManual_usermanual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userManual/usermanual.component */ 44304);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ 9353);
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbot/chatbot.component */ 25429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.Contact
    },
    {
        path: 'usermanual',
        component: _userManual_usermanual_component__WEBPACK_IMPORTED_MODULE_1__.Usermanual
    },
    {
        path: 'faq',
        component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__.Faq
    },
    {
        path: 'privacy',
        component: _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__.Chatbot
    },
];
class HelpsRoutingModule {
}
HelpsRoutingModule.ɵfac = function HelpsRoutingModule_Factory(t) { return new (t || HelpsRoutingModule)(); };
HelpsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HelpsRoutingModule });
HelpsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HelpsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 24657:
/*!*************************************!*\
  !*** ./src/app/help/Help.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpModule": () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js-dist-min */ 79423);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _Help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Help-routing.module */ 76574);
/* harmony import */ var _userManual_usermanual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userManual/usermanual.component */ 44304);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ 9353);
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatbot/chatbot.component */ 25429);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);




























angular_plotly_js__WEBPACK_IMPORTED_MODULE_8__.PlotlyModule.plotlyjs = plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__;
class HelpModule {
}
HelpModule.ɵfac = function HelpModule_Factory(t) { return new (t || HelpModule)(); };
HelpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HelpModule });
HelpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_Help_routing_module__WEBPACK_IMPORTED_MODULE_3__.HelpsRoutingModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_8__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__.NgApexchartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_24__.NgxEchartsModule.forRoot({
            echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 84343))
        }),
        angular_gauge__WEBPACK_IMPORTED_MODULE_25__.GaugeModule.forRoot(),
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HelpModule, { declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.Contact, _userManual_usermanual_component__WEBPACK_IMPORTED_MODULE_4__.Usermanual, _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.Faq, _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__.Chatbot], imports: [_Help_routing_module__WEBPACK_IMPORTED_MODULE_3__.HelpsRoutingModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_8__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_24__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_25__.GaugeModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 25429:
/*!***************************************************!*\
  !*** ./src/app/help/chatbot/chatbot.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chatbot": () => (/* binding */ Chatbot)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class Chatbot {
    ngOnInit() {
        console.log("chatbot");
    }
}
Chatbot.ɵfac = function Chatbot_Factory(t) { return new (t || Chatbot)(); };
Chatbot.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Chatbot, selectors: [["app-chatbot"]], decls: 2, vars: 0, consts: [[1, "content"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"] `/assets/data/SigmaRed Website Privacy Policy.pdf#toolbar=0`, "height", "800px", "width", "100%", "type", "application/pdf", "frameborder", "0"]], template: function Chatbot_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "embed", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pdf-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  pointer-events: none; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRib3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBLEVBQUEseUJBQUE7QUFDSiIsImZpbGUiOiJjaGF0Ym90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkZi1jb250YWluZXIgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEaXNhYmxlcyBpbnRlcmFjdGlvbiAqL1xufVxuIl19 */"] });


/***/ }),

/***/ 3068:
/*!***************************************************!*\
  !*** ./src/app/help/contact/contact.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 82156);


class Contact {
    ngOnInit() {
        console.log("contact");
    }
}
Contact.ɵfac = function Contact_Factory(t) { return new (t || Contact)(); };
Contact.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Contact, selectors: [["app-contact"]], decls: 37, vars: 0, consts: [[1, "content"], [2, "padding", "10px"], [1, "contact-section"], [1, "contact-detail"], ["href", "mailto:murali@sigmared.ai"], ["href", "mailto:contact@sigmared.ai"], ["href", "mailto:info@greymattermatters.nl"], ["href", "mailto:vijaya@sigmared.ai"]], template: function Contact_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content")(4, "div", 2)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "murali@sigmared.ai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Phone: +1 (646) 670-1262");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "contact@sigmared.ai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "info@greymattermatters.nl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phone: 070\u20132173062");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "vijaya@sigmared.ai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone: +91 78993 49778");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.contact-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.contact-detail[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 15px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.contact-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIFxuICBtYXQtY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY29udGFjdC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmNvbnRhY3QtZGV0YWlsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5jb250YWN0LWRldGFpbCBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgYSB7XG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ 9353:
/*!*******************************************!*\
  !*** ./src/app/help/faq/faq.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Faq": () => (/* binding */ Faq)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class Faq {
    ngOnInit() {
        console.log("faq");
    }
}
Faq.ɵfac = function Faq_Factory(t) { return new (t || Faq)(); };
Faq.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Faq, selectors: [["app-faq"]], decls: 2, vars: 0, consts: [[1, "content"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"] `/assets/data/AiscertLite FAQ.pdf#toolbar=0`, "height", "800px", "width", "100%", "type", "application/pdf", "frameborder", "0"]], template: function Faq_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "embed", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 44304:
/*!*********************************************************!*\
  !*** ./src/app/help/userManual/usermanual.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usermanual": () => (/* binding */ Usermanual)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class Usermanual {
    ngOnInit() {
        console.log("usermanual");
    }
}
Usermanual.ɵfac = function Usermanual_Factory(t) { return new (t || Usermanual)(); };
Usermanual.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Usermanual, selectors: [["app-usermanual"]], decls: 2, vars: 0, consts: [[1, "content"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"] `/assets/data/AiscertLite.pdf#toolbar=0`, "height", "800px", "width", "100%", "type", "application/pdf", "frameborder", "0"]], template: function Usermanual_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "embed", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pdf-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  pointer-events: none; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJtYW51YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBLEVBQUEseUJBQUE7QUFDSiIsImZpbGUiOiJ1c2VybWFudWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkZi1jb250YWluZXIgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBEaXNhYmxlcyBpbnRlcmFjdGlvbiAqL1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_help_Help_module_ts.js.map