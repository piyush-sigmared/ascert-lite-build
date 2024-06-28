"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["main"],{

/***/ 5659:
/*!**************************************************!*\
  !*** ./src/app/Inventory/Inventory.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryComponent": () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-service.service */ 71343);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/copyright-statement/copyright-statement.component */ 15943);











function InventoryComponent_div_9_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InventoryComponent_div_9_form_1_Template_form_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const project_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.setProject(project_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Live ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 18)(9, "button", 19)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "AI Bias Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", project_r5 == null ? null : project_r5.descriptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r5 == null ? null : project_r5.project_name, " ");
} }
function InventoryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InventoryComponent_div_9_form_1_Template, 12, 2, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listOfProjects);
} }
function InventoryComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_10_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.agreed = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " I agree to share the above information in line with SigmaRed's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.agreed);
} }
function InventoryComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23)(1, "button", 24)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Create New AI Bias Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r2.agreed ? "#1A73E8" : "grey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.agreed);
} }
function InventoryComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25)(1, "button", 26)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Create New AI Bias Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function arrayToCSVString(data) {
    if (data.length === 0) {
        // Handle the case when data is empty
        return "";
    }
    return data.join(",");
}
class Option {
    constructor(name, active) {
        this.name = name;
        this.active = active;
        this.subOptions = [];
    }
}
class InventoryComponent {
    constructor(router, AppcollectionService, authService) {
        this.router = router;
        this.AppcollectionService = AppcollectionService;
        this.authService = authService;
        this.listOfModel = null;
        this.clientIdTemp = "coforge";
        this.listOfVendor = null;
        this.currentUser = {};
        this.disableCreate = true;
        this.agreed = false;
        this.listOfProjects = [
        // {
        //   project_name: "Credit Evaluation",
        //   descriptions: "this is a project with very many details. and you can find more details",
        //   module_name:["home", "bias"],
        //   metric_name:["bias/summary", "bias/intersecional", "home/dashboard"]
        // },
        // {
        //   project_name: "Project 3",
        //   descriptions: "this is a project with very many details. and you can find more details",
        //   module_name:["home", "bias", "mlops"],
        //   metric_name:["bias/summary", "bias/acore", "home/dashboard", "mlops/dashboard", "mlops/dataDrift"]
        // },
        // {
        //   project_name: "Project 1",
        //   descriptions: "this is a project with very many details. and you can find more details",
        //   module_name:["tprm", "explainability"],
        //   metric_name:["explainability/summary", "explainability/EDS", "tprm/riskregister", "tprm/report"]
        // }
        ];
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.currentUser = user;
            console.log(this.currentUser.email);
            this.getProjects();
            const params = {
                'client_id': this.clientIdTemp,
                'user_id': this.currentUser.name
            };
            // this.AppcollectionService.getVendor(null, this.clientIdTemp).subscribe((data) => {
            //   if (data) {
            //     this.listOfVendor = data?.data;
            //     console.log("model====>", this.listOfVendor);
            //   }
            // });
            this.AppcollectionService.getModuleOptions(params).subscribe((data) => {
                console.log(data);
                const moduleOptions = this.filterModuleOptions(data);
                const names = moduleOptions.map(option => {
                    return {
                        name: option.name,
                        active: option.active
                    };
                });
                const flattenedSubOptions = data.map(item => {
                    // if(item.active === true) return item.label
                    return item.label;
                }).filter(Boolean);
                console.log(flattenedSubOptions);
                console.log(names);
                sessionStorage.setItem("Modules", JSON.stringify(names));
                sessionStorage.setItem("Metrics", arrayToCSVString(flattenedSubOptions));
            }, (err) => {
                console.error(err);
            });
        });
    }
    getProjects() {
        const params = {
            'client_id': this.clientIdTemp,
            'user_id': this.currentUser.email
        };
        this.AppcollectionService.getProjects(params).subscribe((data) => {
            const newData = data.map((project) => {
                if (project.descriptions.length > 100) {
                    return { ...project, descriptions: project.descriptions.slice(0, 100) + " Read More..." };
                }
                return project;
            });
            this.listOfProjects = newData;
            if (this.listOfProjects.length < 2) {
                this.disableCreate = false;
            }
            else
                this.disableCreate = true;
            console.log("getProjects====>", newData);
        }, err => console.error('Unable to get projects!'));
    }
    setProject(project) {
        // sessionStorage.clear();
        this.AppcollectionService.onProjectSelectMlops(this.clientIdTemp, project?.project_name, this.currentUser.email).subscribe((data) => {
            console.log(data);
        });
        this.AppcollectionService.onProjectSelectBias(this.clientIdTemp, project?.project_name, this.currentUser.email).subscribe({
            complete: () => {
                setTimeout(() => {
                    sessionStorage.setItem("Projectname", project?.project_name);
                    sessionStorage.setItem("Modulename", "Adult_Income_Module");
                    // sessionStorage.setItem("Projectname","Adult_Income");
                    const module = typeof project?.module_name === "string" ? [] : project?.module_name;
                    const metric = typeof project?.metric_name === "string" ? [] : project?.metric_name;
                    //sessionStorage.setItem("Projectname", "adult_income_analysis");
                    sessionStorage.setItem("Client_id", "coforge");
                    this.router.navigate(["/bias/biasSummary"]);
                }, 3000);
            }
        });
    }
    ModelList(vendor) {
        sessionStorage.setItem("vendor", vendor?.name);
        this.listOfVendor = null;
        this.AppcollectionService.getModels(this.clientIdTemp).subscribe((data) => {
            console.log("model====>", data);
            if (data) {
                this.listOfModel = data?.model_inv;
            }
        });
    }
    test(name) {
        console.log(name);
        return name;
    }
    submit(value) {
        console.log(value);
        this.listOfVendor = null;
        sessionStorage.setItem("Modulename", value?.module_name);
        sessionStorage.setItem("Projectname", value?.project_name);
        this.router.navigate(["/dashboard/mainRes"]);
        this.listOfModel = null;
    }
    filterModuleOptions(data) {
        const optionsMap = {};
        data.forEach(path => {
            const parts = path.label.split('/');
            const active = path.active;
            const optionName = parts[0];
            if (!optionsMap[optionName]) {
                optionsMap[optionName] = new Option(optionName, active);
            }
            if (parts.length > 1) {
                optionsMap[optionName].subOptions.push(parts.slice(1).join('/'));
            }
        });
        console.log(optionsMap);
        return Object.values(optionsMap);
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_0__.AppcollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
InventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-Inventory"]], decls: 16, vars: 4, consts: [[1, "inventory-body"], ["routerLink", "/InventoryComponent", 2, "z-index", "1000", "position", "fixed", "width", "100%", "top", "0", "left", "0", "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "20px", "padding-inline", "44px", "background-color", "#fff"], ["src", "assets/images/Sigma-red-Final-logo.png", "alt", "", 2, "height", "60px"], [2, "display", "flex", "justify-content", "center"], ["matTooltip", "SigmaRed's AiSCERT Lite platform identifies AI bias risks and provides comprehensive bias metrics.", 2, "cursor", "pointer", "font-size", "24px"], [1, "wrap-login1102", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "gap", "25px"], [2, "margin-top", "100px", "font-weight", "700", "width", "600px", "font-size", "36px", "text-align", "center"], ["class", "list-projects-container", 4, "ngIf"], ["style", "display: flex; align-items: center; margin-bottom: -20px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/create-project", "style", "cursor: pointer; display: flex; justify-content: center; align-items: center; border-radius: 60px; height: 70px; width: 300px; font-size: 24px; color: white; background-color: #1A73E8;", "class", "create-project", 3, "backgroundColor", "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "style", "cursor: pointer; display: flex; justify-content: center; align-items: center; border-radius: 60px; height: 70px; width: 300px; font-size: 24px; color: white; background-color: gray;", "class", "create-project", "disabled", "", 4, "ngIf"], [2, "background", "#F5F6FA", "padding", "10px"], [1, "list-projects-container"], ["class", "form-content-inventory", 3, "click", 4, "ngFor", "ngForOf"], [1, "form-content-inventory", 3, "click"], ["mat-icon-button", "", "matTooltipPosition", "above", 2, "position", "absolute", "top", "3px", "right", "3px", 3, "matTooltip"], [1, "text-white", 2, "font-size", "14px", "font-weight", "500", "border-radius", "10px", "padding-inline", "14px", "padding-top", "5px", "padding-bottom", "5px", "position", "absolute", "bottom", "5px", "left", "3px", "background-color", "#5cb85c", "margin-top", "15px", "margin-right", "15px"], [1, "error-subheader", "p-b-2", 2, "font-size", "24px", "max-width", "200px"], [1, "container-login100-form-btn", "p-t-15"], ["mat-flat-button", "", 1, "login100-form-btn"], [2, "display", "flex", "align-items", "center", "margin-bottom", "-20px"], ["color", "primary", 2, "margin-right", "5px", 3, "ngModel", "ngModelChange"], ["href", "/assets/data/SigmaRed Website Privacy Policy.pdf", "target", "_blank"], ["mat-raised-button", "", "color", "primary", "routerLink", "/create-project", 1, "create-project", 2, "cursor", "pointer", "display", "flex", "justify-content", "center", "align-items", "center", "border-radius", "60px", "height", "70px", "width", "300px", "font-size", "24px", "color", "white", "background-color", "#1A73E8", 3, "disabled"], ["mat-icon-button", "", "matTooltip", "This button allows you to create a new AI bias assessment. Please note that you can only create one project.", "matTooltipPosition", "after", 2, "position", "absolute", "top", "3px", "right", "3px"], ["mat-raised-button", "", "color", "primary", "disabled", "", 1, "create-project", 2, "cursor", "pointer", "display", "flex", "justify-content", "center", "align-items", "center", "border-radius", "60px", "height", "70px", "width", "300px", "font-size", "24px", "color", "white", "background-color", "gray"], ["mat-icon-button", "", "matTooltip", "You have already created an AI bias assessment project. Creating additional projects is not allowed in AiSCERT LITE.", "matTooltipPosition", "after", 2, "position", "absolute", "top", "3px", "right", "3px"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " AI Bias Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, InventoryComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InventoryComponent_div_10_Template, 7, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InventoryComponent_button_11_Template, 5, 3, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, InventoryComponent_button_12_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Limitation of Liability: IN NO EVENT SIGMARED TECHNOLOGIES INC. OR THE USER HAVE ANY LIABILITY OR RESPONSIBILITY UNDER ANY THEORY OF LIABILITY OR CAUSE OF ACTION FOR ANY INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO DAMAGES ARISING FROM BUSINESS INTERRUPTION OR LOSS OF PROFITS OR DATA). THIS IS A BETA AND LITE VERSION, AND HENCE, THE RESULTS FROM THIS PLATFORM ARE NOT LEGALLY BINDING; NOT ALL FEATURES ARE ENABLED.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-copyright");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listOfProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disableCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disableCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disableCreate);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_1__.CopyrightComponent], styles: [".wrap-login1102[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-inline: 44px;\n}\n\n.inventory-body[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 82vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F5F6FA;\n  position: relative;\n}\n\n.login100-form-btn[_ngcontent-%COMP%] {\n  margin: 5px;\n  background-color: #1A73E8;\n}\n\n.list-projects-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: stretch; \n  margin-bottom: 40px;\n  min-height: 250px;\n  min-width: 400px;\n  justify-content: center;\n}\n\n.form-content-inventory[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #ffffff;\n  padding: 34px 55px;\n  border: 1px solid #cacaca;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.edit-project-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkludmVudG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBLEVBQUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoiSW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtbG9naW4xMTAye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1MnB4O1xyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNDRweDtcclxufVxyXG4uaW52ZW50b3J5LWJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDgydmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2dpbjEwMC1mb3JtLWJ0bntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBNzNFODtcclxufVxyXG4ubGlzdC1wcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDoyMHB4O1xyXG4gICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyAvKiBUd28gY29sdW1ucyB3aXRoIGVxdWFsIHdpZHRoICovXHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgLyogQ2VudGVyIGdyaWQgaXRlbXMgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udGVudC1pbnZlbnRvcnl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMzRweCA1NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZWRpdC1wcm9qZWN0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guard/auth.guard */ 19390);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _Inventory_Inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inventory/Inventory.component */ 5659);
/* harmony import */ var _project_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/create-project/create-project.component */ 6568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [
    { path: 'InventoryComponent', component: _Inventory_Inventory_component__WEBPACK_IMPORTED_MODULE_4__.InventoryComponent, canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: 'create-project', component: _project_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__.CreateProjectComponent, canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
    { path: 'create-project/:projectName', component: _project_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__.CreateProjectComponent },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule)
    },
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            { path: '', redirectTo: '/InventoryComponent', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tabs_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then((m) => m.DashboardModule),
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'bias',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("src_app_bias_bias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bias/bias.module */ 23039)).then((m) => m.BiasModule),
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'tprm',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_card_mjs"), __webpack_require__.e("default-src_app_mlops_Mlops_module_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_radio_mjs-node_modules_angular_material_fesm20-e5c217"), __webpack_require__.e("common"), __webpack_require__.e("src_app_TPRM_tprm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./TPRM/tprm.module */ 57848)).then((m) => m.TprmModule)
            },
            {
                path: 'mlops',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tabs_mjs"), __webpack_require__.e("default-src_app_mlops_Mlops_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mlops/Mlops.module */ 57244)).then((m) => m.MlopsModule)
            },
            {
                path: 'complaince',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_dialog_mjs"), __webpack_require__.e("src_app_complaince_complaince_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./complaince/complaince.module */ 17614)).then((m) => m.ComplianceModule)
            },
            {
                path: 'exp',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tabs_mjs"), __webpack_require__.e("default-node_modules_angular-plotly_js___ivy_ngcc___fesm2015_angular-plotly_js_js-node_module-ffa1b3"), __webpack_require__.e("src_app_Explainability_Explainability_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Explainability/Explainability.module */ 16150)).then((m) => m.ExplainabilitysModule)
            },
            {
                path: 'help',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("default-node_modules_angular-gauge___ivy_ngcc___fesm2015_angular-gauge_js-node_modules_ng2-ch-6b8183"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_card_mjs"), __webpack_require__.e("default-node_modules_angular-plotly_js___ivy_ngcc___fesm2015_angular-plotly_js_js-node_module-ffa1b3"), __webpack_require__.e("src_app_help_Help_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./help/Help.module */ 24657)).then((m) => m.HelpModule)
            },
            //////////////////////////////////////////////////////////////////////////////////////////
            // these modules are not used 
            // please refer to these modules when needed
            // one can directly import these modules and use for convinience
            // calendar,task,contacts,email,apps,widget,ui,forms,tables,media,charts,timeline,icons,
            // extra-pages,maps,multilevel
            // {
            //   path: 'calendar',
            //   loadChildren: () =>
            //     import('./calendar/calendar.module').then((m) => m.CalendarsModule)
            // },
            // {
            //   path: 'task',
            //   loadChildren: () =>
            //     import('./task/task.module').then((m) => m.TaskModule)
            // },
            // {
            //   path: 'contacts',
            //   loadChildren: () =>
            //     import('./contacts/contacts.module').then((m) => m.ContactsModule)
            // },
            // {
            //   path: 'email',
            //   loadChildren: () =>
            //     import('./email/email.module').then((m) => m.EmailModule)
            // },
            // {
            //   path: 'apps',
            //   loadChildren: () =>
            //     import('./additional-modules/apps/apps.module').then((m) => m.AppsModule)
            // },
            // {
            //   path: 'widget',
            //   loadChildren: () =>
            //     import('./additional-modules/widget/widget.module').then((m) => m.WidgetModule)
            // },
            // {
            //   path: 'ui',
            //   loadChildren: () => import('./additional-modules/ui/ui.module').then((m) => m.UiModule)
            // },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_components_module_ts-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_radio_mjs-node_modules_angular_material_fesm20-e5c217"), __webpack_require__.e("src_app_additional-modules_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./additional-modules/forms/forms.module */ 32918)).then((m) => m.FormModule)
            },
            // {
            //   path: 'tables',
            //   loadChildren: () =>
            //     import('./tables/tables.module').then((m) => m.TablesModule)
            // },
            // {
            //   path: 'media',
            //   loadChildren: () =>
            //     import('./media/media.module').then((m) => m.MediaModule)
            // },
            // {
            //   path: 'charts',
            //   loadChildren: () =>
            //     import('./charts/charts.module').then((m) => m.ChartsModule)
            // },
            // {
            //   path: 'timeline',
            //   loadChildren: () =>
            //     import('./additional-modules/timeline/timeline.module').then((m) => m.TimelineModule)
            // },
            // {
            //   path: 'icons',
            //   loadChildren: () =>
            //     import('./icons/icons.module').then((m) => m.IconsModule)
            // },
            // {
            //   path: 'extra-pages',
            //   loadChildren: () =>
            //     import('./additional-modules/extra-pages/extra-pages.module').then(
            //       (m) => m.ExtraPagesModule
            //     )
            // },
            // {
            //   path: 'maps',
            //   loadChildren: () =>
            //     import('./maps/maps.module').then((m) => m.MapsModule)
            // },
            // {
            //   path: 'multilevel',
            //   loadChildren: () =>
            //     import('./additional-modules/multilevel/multilevel.module').then(
            //       (m) => m.MultilevelModule
            //     )
            // }
        ]
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 71343:
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppcollectionService": () => (/* binding */ AppcollectionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);






class AppcollectionService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.clientIdTemp = "coforge";
        this.gateway = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrl;
        this.gatewayApp = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlApp;
        this.gatewayBias = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlBias;
        this.gatewayMlops = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlMlops;
    }
    getQueryString(params) {
        return Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join("&");
    }
    getProjects(params) {
        let url = `${this.gatewayApp}/get_onboarding`;
        return this.http.post(url, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    postData(params, body) {
        const queryString = this.getQueryString(params);
        const fullUrl = `${this.gatewayApp}/create_project?${queryString}`;
        return this.http.post(fullUrl, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getFeatures(params) {
        // const queryString = this.getQueryString(params);
        const fullUrl = `${this.gatewayApp}/get_features`;
        return this.http.post(fullUrl, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    postFeatures(reqbody, clientId = "coforge") {
        // const target = body['target']
        // const protAttr = body['prot_attr']
        // const priv = body['priv']
        // const unpriv = body['Unpriv']
        // const predCol = body['pred_col']
        // let queryParams = new HttpParams();
        // // Append all array values to tjhe query parameters
        // target.forEach(value => queryParams = queryParams.append('target', value));
        // protAttr.forEach(value => queryParams = queryParams.append('prot_attr', value));
        // priv.forEach(value => queryParams = queryParams.append('priv', value));
        // unpriv.forEach(value => queryParams = queryParams.append('unpriv', value));
        // predCol.forEach(value => queryParams = queryParams.append('pred_col', value));
        // queryParams = queryParams.append('project_name', 'project1');
        // const fullUrl = `${url}?${queryParams}`;
        // const queryString = this.getQueryString(params);
        const fullUrl = `${this.gatewayApp}/project_setup`;
        return this.http.post(fullUrl, reqbody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getDatasetFeatures(clientID = "coforge") {
        let url = `${this.gatewayApp}/get_dataset_features/`;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('client_id', clientID);
        return this.http.get(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getModuleOptions(params) {
        let url = `${this.gatewayApp}/get_module`;
        return this.http.post(url, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return JSON.parse(data["body"]);
        }));
    }
    getVendor(path, clientID = "coforge") {
        try {
            let url = `${this.gateway}/v1/homepage/get_vendor_list`;
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('client_id', clientID);
            return this.http.post(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
                return JSON.parse(data["body"]);
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    ;
    getModels(clientID = "coforge") {
        let url = `${this.gateway}/v1/homepage/module.json`;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('client_id', clientID);
        return this.http.get(url, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    onProjectSelectMlops(clientID = "coforge", project_name, user_id) {
        let url = `http://20.6.34.138:8007/mlops/initialize_mlops/`;
        // const params = new HttpParams().set('client_id', clientID);
        return this.http.post(url, { 'client_id': clientID, "project_name": project_name, "user_id": user_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    onProjectSelectBias(clientID = "coforge", project_name, user_id) {
        let url = `https://2w24txr2ecpc36zqwk4v4vdmva0ohppf.lambda-url.eu-north-1.on.aws/bias/initialize_bias/`;
        // const params = new HttpParams().set('client_id', clientID);
        return this.http.post(url, { 'client_id': clientID, "project_name": project_name, "user_id": user_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getPrivUnpriv(body) {
        let url = 'https://2w24txr2ecpc36zqwk4v4vdmva0ohppf.lambda-url.eu-north-1.on.aws/dashboard/get_priv_unpriv/';
        return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    getDashboard(clientID = "coforge") {
        let url = `${this.gateway}/v1/bias/get_homepage`;
        return this.http.post(url, {
            "project_name": "string",
            "module_name": "string",
            "client_id": clientID
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
    getDataDriftResult(path, feat, threshold1, threshold2, clientID = "coforge") {
        let url = `${this.gateway}/v1/mlops/get_data_drift_results`;
        return this.http.post(url, { "project_name": sessionStorage.getItem('Projectname'), "module_name": sessionStorage.getItem('Modulename'), "test_set_path": path, "bins": threshold2, "thresholds": threshold1, "feat_name": feat, "test_name": "All" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            return data;
        }));
    }
    ;
}
AppcollectionService.ɵfac = function AppcollectionService_Factory(t) { return new (t || AppcollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AppcollectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppcollectionService, factory: AppcollectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_azureuser_Responsible_Angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-spa-js */ 19319);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);












class AppComponent {
  constructor(_router, location, auth, http) {
    this._router = _router;
    this.auth = auth;
    this.http = http;
    this.user = null;
    this.verified = false;
    this.verifiedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.showFooter = false;
    this.showSpinner = true;
    this.accessToken = localStorage.getItem("access_token");
    this.auth0 = new _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__.Auth0Client({
      domain: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.domain,
      clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.clientId
    });
    this.token = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.token}`;
    this.refreshedToken$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.auth0.getTokenSilently());
    this._router.events.subscribe(routerEvent => {
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationStart) {
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
      }
      window.scrollTo(0, 0);
    });
  }
  setCurrentRole(value) {
    this.currentRole = value;
    // localStorage.setItem("currentRole", value);
    // console.log("role updated", this.currentRole);
  }
  getRoles(userId) {
    const url = `https://sigmared.us.auth0.com/api/v2/users/${userId}/roles`;
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      this.http.get(url, {
        headers
      }).subscribe(response => {
        const names = response.map(obj => obj.name);
        this.currentRole = names[0];
        observer.next(this.currentRole);
        observer.complete();
        this.setCurrentRole(this.currentRole);
      });
    });
  }
  ngOnInit() {
    var _this = this;
    this.auth.idTokenClaims$.subscribe(idToken => {
      console.log(idToken?.__raw);
      localStorage.setItem("idToken", idToken?.__raw);
      // Use the ID token as needed
    });
    console.log(this._router.url);
    this.auth.isAuthenticated$.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_azureuser_Responsible_Angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isAuthenticated) {
        let isShown = false;
        console.log("The user Exists - ", _this.user);
        if (!isAuthenticated && !isShown) {
          isShown = true;
          console.warn("User not authenticated, redirecting to login page");
          localStorage.clear();
          _this._router.navigate(["/authentication/signin"]);
          localStorage.clear();
        } else {
          _this.auth.user$.subscribe(user => {
            _this.user = user;
            console.log("user", _this.user);
            _this.getRoles(_this.user?.sub).subscribe( /*#__PURE__*/function () {
              var _ref2 = (0,_home_azureuser_Responsible_Angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (currentRole) {
                _this.currentRole = currentRole;
                console.log("currentRole:", currentRole);
                _this.verified = _this.user?.email_verified;
                _this.verifiedSubject.next(_this.verified);
                if (_this._router.url !== "/authentication/signin") {
                  localStorage.setItem("lastVisitedUrl", _this._router.url);
                }
                _this.verifiedSubject.subscribe(verified => {
                  console.log("verified:", verified);
                  const lastVisitedUrl = localStorage.getItem("lastVisitedUrl");
                  if (verified === true && _this._router.url === "/authentication/signin") {
                    if (lastVisitedUrl && lastVisitedUrl !== "/") {
                      _this._router.navigateByUrl(lastVisitedUrl);
                    } else {
                      _this._router.navigate(["/dashboard/mainRes"]);
                    }
                  } else {
                    if (_this._router.url === "/authentication/signin" && !_this.verified) {
                      _this._router.navigate(["/authentication/signin"]);
                    }
                  }
                });
              });
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }(), error => {
              console.error("Failed to get user roles:", error);
            });
          });
          try {
            _this.refreshedToken$.subscribe(refreshedToken => {
              localStorage.setItem("access_token", refreshedToken);
            }, error => {
              console.error("Failed to refresh access token", error);
            });
          } catch (error) {
            console.error("Failed to refresh access token:", error);
          }
        }
        _this.showSpinner = false;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    setTimeout(() => {
      this.showFooter = true;
      0;
    }, 5000);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-page-loader")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_3__.PageLoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _Inventory_Inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Inventory/Inventory.component */ 5659);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 72624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-click-outside */ 53530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_service_window_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/service/window.service */ 31861);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-loading-bar/router */ 41108);
/* harmony import */ var _project_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/create-project/create-project.component */ 6568);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/copyright-statement/copyright-statement.component */ 15943);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);














// import { fakeBackendProvider } from './core/interceptor/fake-backend';



















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_12__.ErrorInterceptor, multi: true },
        // fakeBackendProvider,
        _core_service_window_service__WEBPACK_IMPORTED_MODULE_15__.WINDOW_PROVIDERS
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_14__.ClickOutsideModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_27__.LoadingBarRouterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient]
            }
        }),
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule.forRoot({
            domain: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.domain,
            clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.clientId,
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_7__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.RightSidebarComponent,
        _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_17__.CopyrightComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_11__.MainLayoutComponent,
        _Inventory_Inventory_component__WEBPACK_IMPORTED_MODULE_5__.InventoryComponent,
        _project_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_16__.CreateProjectComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_14__.ClickOutsideModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_27__.LoadingBarRouterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_30__.AuthModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);




class Page404Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    submit() {
        this.router.navigate(['/authentication/signin']);
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 16, vars: 0, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn", 3, "click"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/error-page.jpg')"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Oops, We can't seem to find the page you're looking for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page404Component_Template_button_click_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div")(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".wrap-login1102[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.login100-form-btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtbG9naW4xMTAye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubG9naW4xMDAtZm9ybS1idG57XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ConfigService {
    constructor() {
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadInitialConfig());
        this.config$ = this.configSubject.asObservable();
    }
    loadInitialConfig() {
        const storedConfig = localStorage.getItem('appConfig');
        return storedConfig ? JSON.parse(storedConfig) : this.getDefaultConfig();
    }
    getDefaultConfig() {
        return {
            layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light'
                }
            }
        };
    }
    setConfigData(newConfig) {
        this.configSubject.next(newConfig);
        localStorage.setItem('appConfig', JSON.stringify(newConfig));
    }
    getCurrentConfig() {
        return this.configSubject.getValue();
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 19390);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.RAAuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] }); })();


/***/ }),

/***/ 19390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




// import { AuthService } from '../service/auth.service';
class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        // if (this.authService.currentUserValue) {
        //   return true;
        // }
        if (this.authService.isAuthenticated$) {
            return true;
        }
        else {
            this.router.navigate(['/authentication/signin']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.RAAuthService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 72624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);



class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.RAAuthService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RAAuthService": () => (/* binding */ RAAuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);





class RAAuthService {
    constructor(http) {
        this.http = http;
        this.gateway = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatewayUrlApp;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
        // const params = {
        //   "user_id": username,
        //   "password": password
        // }
        // const query = Object.entries(params)
        // .map(
        //   ([key, value]) =>
        //     `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        // )
        // .join("&");
        // return this.http
        //   .post(`${this.gateway}/get_authenticated`, {
        //     "user_id": username,
        //     "password": password
        //   })
        //   .pipe(
        //     map(authenticated => {
        //       if (JSON.parse(authenticated["body"])) {
        //         const user = { username } as User;
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //       } else {
        //         throw new Error('Authentication failed');
        //       }
        //       return authenticated;
        //     })
        //   );
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ success: false });
    }
}
RAAuthService.ɵfac = function RAAuthService_Factory(t) { return new (t || RAAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
RAAuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RAAuthService, factory: RAAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicScriptLoaderService": () => (/* binding */ DynamicScriptLoaderService),
/* harmony export */   "ScriptStore": () => (/* binding */ ScriptStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac });


/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ['en', 'es', 'de'];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": () => (/* binding */ RightSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });


/***/ }),

/***/ 31861:
/*!************************************************!*\
  !*** ./src/app/core/service/window.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* binding */ BrowserWindowRef),
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* binding */ WINDOW_PROVIDERS),
/* harmony export */   "WindowRef": () => (/* binding */ WindowRef),
/* harmony export */   "browserWindowProvider": () => (/* binding */ browserWindowProvider),
/* harmony export */   "windowFactory": () => (/* binding */ windowFactory),
/* harmony export */   "windowProvider": () => (/* binding */ windowProvider)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../copyright-statement/copyright-statement.component */ 15943);





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 4, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-sidebar")(2, "router-outlet")(3, "app-copyright");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_2__.CopyrightComponent], encapsulation: 2 });


/***/ }),

/***/ 15943:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/copyright-statement/copyright-statement.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyrightComponent": () => (/* binding */ CopyrightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CopyrightComponent {
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 2, vars: 0, consts: [[2, "width", "100%", "background-color", "white", "padding", "16px", "font-size", "large", "display", "flex", "justify-content", "end", "align-items", "flex-end"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SigmaRed Technologies Inc. Copyright 2024. Highly Confidential. All rights reserved.\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3B5cmlnaHQtc3RhdGVtZW50LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_core_service_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/window.service */ 31861);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);














const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    constructor(document, window, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
        super();
        this.document = document;
        this.window = window;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.username = {};
        this.config = {};
        this.isNavbarCollapsed = true;
        this.isNavbarShow = true;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' }
        ];
        this.notifications = [
            {
                userImg: 'assets/images/user/user1.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail'
            },
            {
                userImg: 'assets/images/user/user2.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!'
            },
            {
                userImg: 'assets/images/user/user3.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.'
            },
            {
                userImg: 'assets/images/user/user4.jpg',
                userName: 'Ashton Cox',
                time: '5 hours ago',
                message: 'Lets break for lunch...'
            },
            {
                userImg: 'assets/images/user/user5.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail'
            },
            {
                userImg: 'assets/images/user/user6.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!'
            },
            {
                userImg: 'assets/images/user/user7.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.'
            }
        ];
        this.configSubscription = this.configService.config$.subscribe({
            next: (config) => {
                this.updateImageUrl(config.layout.variant);
            }
        });
        console.log(this.imageUrl);
    }
    onWindowScroll() {
        const offset = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        // if (offset > 50) {
        //   this.isNavbarShow = true;
        // } else {
        //   this.isNavbarShow = false;
        // }
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.username = user.name;
        });
        this.config = this.configService.configData;
        this.langStoreValue = localStorage.getItem('lang');
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ;
    ngOnDestroy() {
        if (this.configSubscription) {
            this.configSubscription.unsubscribe();
        }
    }
    transform(value) {
        if (!value)
            return value;
        // Split the string by common delimiters (underscore, hyphen, space)
        // Then capitalize each word and join them with a space
        return value.split(/[_\- ]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    getProject() {
        // INSURANCE CROSS SELL PREDICTION - Insurance-1
        // Insurance-2 - INSURANCE FRAUD CLAIMS DETECTION
        return sessionStorage.getItem('Projectname');
    }
    ;
    getVendor() {
        return sessionStorage.getItem('vendor');
    }
    ;
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    logout() {
        this.subs.sink = this.authService.logout().subscribe((res) => {
            console.log(res);
            this.router.navigate(['/authentication/signin']);
        });
    }
    updateImageUrl(variant) {
        console.log(variant);
        this.imageUrl = variant === 'light' ? 'assets/images/SigmaRedLight.png' : 'assets/images/SigmaRedDark.png';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_window_service__WEBPACK_IMPORTED_MODULE_0__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 10, consts: [[1, "navbar", 2, "background-color", "white", 3, "ngClass"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], ["routerLink", "/InventoryComponent", 1, "navbar-brand"], ["src", "assets/images/SigmaRedLight.png", "alt", "", 2, "height", "40px", "object-fit", "contain", "margin-top", "-1%", "padding-left", "10px"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "pull-left", "collapse-menu-icon", 2, "margin-top", "23px", "margin-left", "20px"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", 2, "padding-top", "4px"], ["src", "assets/images/user.png", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "notification-dropdown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], [3, "icon"], ["href", "javascript:void(0);", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "ul", 9)(10, "li")(11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Project Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "li", 11)(17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 13)(19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "ul", 18)(24, "li", 19)(25, "ul", 20)(26, "li")(27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "app-feather-icons", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li")(31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "app-feather-icons", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isNavbarShow ? "active" : "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getProject());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("user-menu-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "log-out");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ 30574);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 1, vars: 0, consts: [["color", "#3173D6"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
    } }, dependencies: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__.LoadingBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 72325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);











const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class RightSidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.selectedBgColor = 'white';
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
        if (localStorage.getItem('isRtl')) {
            if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
            }
            else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector('.settingSidebar .choose-theme li.active')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    }
    lightThemeBtnClick() {
        const currentConfig = this.configService.getCurrentConfig();
        const newVariant = currentConfig.layout.variant === 'light' ? 'dark' : 'light';
        const updatedConfig = {
            ...currentConfig,
            layout: {
                ...currentConfig.layout,
                variant: newVariant
            }
        };
        this.configService.setConfigData(updatedConfig);
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'theme-white');
        const theme = 'light';
        const menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    darkThemeBtnClick() {
        const currentConfig = this.configService.getCurrentConfig();
        const newVariant = currentConfig.layout.variant === 'light' ? 'dark' : 'light';
        const updatedConfig = {
            ...currentConfig,
            layout: {
                ...currentConfig.layout,
                variant: newVariant
            }
        };
        this.configService.setConfigData(updatedConfig);
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'theme-black');
        const theme = 'dark';
        const menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === 'false' &&
            document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
        }
        else if (isrtl === 'true' &&
            !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
        }
        localStorage.setItem('isRtl', isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        this.renderer.addClass(this.document.body, 'rtl');
        this.isRtl = true;
        localStorage.setItem('isRtl', 'true');
    }
    setLTRSettings() {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        this.renderer.removeClass(this.document.body, 'rtl');
        this.isRtl = false;
        localStorage.setItem('isRtl', 'false');
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService)); };
RightSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 33, consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 2, "background-color", "#1A73E8", 3, "click"], [3, "icon"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue"], [1, "mt-2", 3, "checked", "change"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_a_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-feather-icons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label")(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_11_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12)(16, "label")(17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_17_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Sidebar Menu Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-button-toggle-group", 16)(25, "mat-button-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_25_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_27_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 5)(30, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Color Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 19)(33, "ul", 20)(34, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_34_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_38_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_40_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_42_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_44_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_46_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 15)(49, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-slide-toggle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_51_listener($event) { return ctx.switchDirection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("setting-sidebar-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isDarTheme == false ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isDarTheme == true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isRtl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterDataById": () => (/* binding */ filterDataById),
/* harmony export */   "getRoutes": () => (/* binding */ getRoutes)
/* harmony export */ });
const filterDataById = (data, idsToKeep1, idsToKeep2) => {
    // return data
    //   .map((item) => {
    //     if (idsToKeep.includes(item.id)) {
    //       if (item.submenu && item.submenu.length > 0) {
    //         item.submenu = filterDataById(item.submenu, idsToKeep);
    //         return item.submenu.length > 0 ? item : null;
    //       }
    //       return item;
    //     }
    //     return null;
    //   })
    //   .filter(Boolean); // Remove null values from the result
    return data.map(route => {
        const names = idsToKeep1.map(item => (item.name));
        if (names.includes(route.id)) {
            const finMenu = idsToKeep1.map(item => {
                if (item.name === route.id) {
                    const menu = {
                        ...route,
                        active: item.active
                    };
                    if (route.submenu && route.submenu.length > 0) {
                        const subs = route.submenu.filter(item => idsToKeep2.includes(item.id));
                        menu.submenu = subs;
                        // return subs.length > 0 ? menu : null;
                    }
                    return menu;
                }
            }).filter(Boolean);
            return finMenu[0];
        }
        return null;
    })
        .filter(Boolean);
};
function csvStringToArray(csvString) {
    if (csvString === "") {
        // Handle the case when csvString is an empty string
        return [];
    }
    return csvString.split(",");
}
const routes_list = [
    {
        path: "",
        title: "MENUITEMS.HOME.TEXT",
        icon: "monitor",
        class: "menu-toggle",
        id: "home",
        groupTitle: false,
        submenu: [
            {
                path: "dashboard/mainRes",
                title: "MENUITEMS.HOME.LIST.DASHBOARDRES",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "home/dashboard",
            },
            // {
            //   path: 'dashboard/main',
            //   title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
            //   icon: '',
            //   class: 'ml-menu',
            //   groupTitle: false,
            //   submenu: []
            // },
            // {
            //   path: 'dashboard/dashboard2',
            //   title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
            //   icon: '',
            //   class: 'ml-menu',
            //   groupTitle: false,
            //   submenu: []
            // },
            // {
            //   path: 'dashboard/dashboard3',
            //   title: 'MENUITEMS.HOME.LIST.DASHBOARD3',
            //   icon: '',
            //   class: 'ml-menu',
            //   groupTitle: false,
            //   submenu: []
            // }
        ],
    },
    {
        path: "",
        title: "MENUITEMS.BIAS.TEXT",
        icon: "monitor",
        class: "menu-toggle",
        groupTitle: false,
        id: "bias",
        submenu: [
            // {
            //   path: "bias/summary",
            //   title: "MENUITEMS.BIAS.LIST.SUMMARY",
            //   icon: "",
            //   class: "ml-menu",
            //   groupTitle: false,
            //   submenu: [],
            //   id: "bias/summary-new",
            // },
            {
                path: "bias/biasSummary",
                title: "MENUITEMS.BIAS.LIST.DASHBOARDRES",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "bias/summary",
            },
            {
                path: "bias/biasAcore",
                title: "MENUITEMS.BIAS.LIST.DASHBOARD1",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "bias/acore",
            },
            {
                path: "bias/Intersectional",
                title: "MENUITEMS.BIAS.LIST.DASHBOARD2",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "bias/intersecional",
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.MLOPS.TEXT",
        icon: "monitor",
        class: "menu-toggle",
        id: "mlops",
        groupTitle: false,
        submenu: [
            {
                path: "mlops/MlOps",
                title: "MENUITEMS.MLOPS.LIST.DASHBOARDRES",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "mlops/dashboard",
            },
            {
                path: "mlops/dataDrift",
                title: "MENUITEMS.MLOPS.LIST.DASHBOARD1",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "mlops/dataDrift",
            },
            {
                path: "mlops/targetDrift",
                title: "MENUITEMS.MLOPS.LIST.DASHBOARD2",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "mlops/targetDrift",
            },
            {
                path: "mlops/outlayer",
                title: "MENUITEMS.MLOPS.LIST.OUTLAYER",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "mlops/outlayer",
            },
            {
                path: "mlops/alert",
                title: "MENUITEMS.MLOPS.LIST.ALERT",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "mlops/alert",
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.EXPLAINABILITY.TEXT",
        icon: "monitor",
        class: "menu-toggle",
        groupTitle: false,
        id: "explainability",
        submenu: [
            {
                path: "exp/summary",
                title: "MENUITEMS.EXPLAINABILITY.LIST.SUMMARY",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "explainability/summary",
            },
            {
                path: "exp/EDS",
                title: "MENUITEMS.EXPLAINABILITY.LIST.EDA",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "explainability/EDS",
            },
            {
                path: "exp/performance",
                id: "explainability/performance",
                title: "MENUITEMS.EXPLAINABILITY.LIST.PERFORMANCE",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "exp/explainability",
                id: "explainability/explainability",
                title: "MENUITEMS.EXPLAINABILITY.LIST.EXPLAINABILITY",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "exp/whatif",
                id: "explainability/whatif",
                title: "MENUITEMS.EXPLAINABILITY.LIST.whatif",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
        ],
    },
    // {
    //   path: 'Robustness',
    //   title: 'MENUITEMS.ROBUSTESS.TEXT',
    //   icon: 'trello',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    // {
    //   path: 'dashboard/MlOps',
    //   title: 'MENUITEMS.MONITORING.TEXT',
    //   icon: 'trello',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    {
        path: "",
        title: "MENUITEMS.COMPLAINCE.TEXT",
        icon: "monitor",
        class: "menu",
        // class: "ml-menu",
        groupTitle: false,
        id: "compliance",
        submenu: [
            {
                path: "compliance/regulation",
                id: "compliance/regulation",
                title: "MENUITEMS.COMPLAINCE.LIST.Regulation",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "compliance/NYC",
                id: "compliance/NYC",
                title: "MENUITEMS.COMPLAINCE.LIST.NYC",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
        ],
    },
    {
        path: "",
        title: "MENUITEMS.HELP.TEXT",
        icon: "monitor",
        class: "menu-toggle",
        id: "Help",
        groupTitle: false,
        submenu: [
            {
                path: "help/usermanual",
                title: "MENUITEMS.HELP.LIST.USERMANUAL",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "Help/UserManual",
            },
            {
                path: "help/faq",
                title: "MENUITEMS.HELP.LIST.FAQ",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "Help/FAQ",
            },
            {
                path: "help/privacy",
                title: "MENUITEMS.HELP.LIST.PRIVACY",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "Help/Privacy",
            },
            {
                path: "help/contact",
                title: "MENUITEMS.HELP.LIST.CONTACT",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
                id: "Help/SupportContactDetails",
            },
        ],
    },
    // {
    //   path: "",
    //   title: "MENUITEMS.TPRM.TEXT",
    //   icon: "trello",
    //   class: "menu-toggle",
    //   groupTitle: false,
    //   id: "tprm",
    //   submenu: [
    //     {
    //       path: "tprm/riskregister",
    //       id: "tprm/riskregister",
    //       title: "MENUITEMS.TPRM.LIST.DASHBOARDRES",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       submenu: [],
    //     },
    //     {
    //       path: "/",
    //       id: "tprm/assessment",
    //       title: "MENUITEMS.TPRM.LIST.DASHBOARD1",
    //       icon: "",
    //       class: "ml-sub-menu",
    //       groupTitle: false,
    //       submenu: [
    //         // {
    //         //   path: 'tprm/Process',
    //         //   title: 'AI Process Risk',
    //         //   icon: '',
    //         //   class: 'ml-menu2',
    //         //   groupTitle: false,
    //         //   submenu: []
    //         // },
    //         {
    //           path: "tprm/AItech",
    //           id: "tprm/AItech",
    //           title: "AI Technology Risk Assmt.",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //         {
    //           path: "tprm/compAssess",
    //           id: "tprm/compAssess",
    //           title: "New AI TPRM Assmt.",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //         {
    //           path: "tprm/casses",
    //           id: "tprm/casses",
    //           title: "Continue AI TPRM Assmt.",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //         {
    //           path: "tprm/passes",
    //           id: "tprm/passes",
    //           title: "Completed AI TPRM Assmt.",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //       ],
    //     },
    //     {
    //       path: "tprm/report",
    //       id: "tprm/report",
    //       title: "MENUITEMS.TPRM.LIST.DASHBOARD2",
    //       icon: "",
    //       class: "ml-menu",
    //       groupTitle: false,
    //       submenu: [],
    //     },
    //     {
    //       path: "/",
    //       title: "MENUITEMS.TPRM.LIST.FormList",
    //       icon: "",
    //       class: "ml-sub-menu",
    //       id: "tprm/scoping",
    //       groupTitle: false,
    //       submenu: [
    //         {
    //           path: "tprm/scoping/assessment",
    //           id: "tprm/scoping/assessment",
    //           title: "Scoping Form",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //         {
    //           path: "tprm/FormList",
    //           id: "tprm/FormList",
    //           title: "Scoping Details",
    //           icon: "",
    //           class: "ml-menu2",
    //           groupTitle: false,
    //           submenu: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   path: 'advance-table',
    //   title: 'MENUITEMS.ADVANCE-TABLE.TEXT',
    //   icon: 'trello',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.APPS.TEXT',
    //   icon: '',
    //   class: '',
    //   groupTitle: true,
    //   submenu: []
    // },
    // {
    //   path: 'calendar',
    //   title: 'MENUITEMS.CALENDAR.TEXT',
    //   icon: 'calendar',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    // {
    //   path: 'task',
    //   title: 'MENUITEMS.TASK.TEXT',
    //   icon: 'check-circle',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    // {
    //   path: 'contacts',
    //   title: 'MENUITEMS.CONTACTS.TEXT',
    //   icon: 'users',
    //   class: '',
    //   groupTitle: false,
    //   submenu: []
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.EMAIL.TEXT',
    //   icon: 'mail',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/email/inbox',
    //       title: 'MENUITEMS.EMAIL.LIST.INBOX',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/email/compose',
    //       title: 'MENUITEMS.EMAIL.LIST.COMPOSE',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/email/read-mail',
    //       title: 'MENUITEMS.EMAIL.LIST.READ',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.MORE-APPS.TEXT',
    //   icon: 'command',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/apps/chat',
    //       title: 'MENUITEMS.MORE-APPS.LIST.CHAT',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/apps/dragdrop',
    //       title: 'MENUITEMS.MORE-APPS.LIST.DRAG-DROP',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/apps/contact-grid',
    //       title: 'MENUITEMS.MORE-APPS.LIST.CONTACT-GRID',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/apps/support',
    //       title: 'MENUITEMS.MORE-APPS.LIST.SUPPORT',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.COMPONENTS.TEXT',
    //   icon: '',
    //   class: '',
    //   groupTitle: true,
    //   submenu: []
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.WIDGETS.TEXT',
    //   icon: 'briefcase',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/widget/chart-widget',
    //       title: 'MENUITEMS.WIDGETS.LIST.CHART-WIDGET',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/widget/data-widget',
    //       title: 'MENUITEMS.WIDGETS.LIST.DATA-WIDGET',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.FORMS.TEXT',
    //   icon: 'layout',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/forms/form-controls',
    //       title: 'MENUITEMS.FORMS.LIST.CONTROLS',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/forms/advance-controls',
    //       title: 'MENUITEMS.FORMS.LIST.ADVANCE',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/forms/form-example',
    //       title: 'MENUITEMS.FORMS.LIST.EXAMPLE',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/forms/form-validation',
    //       title: 'MENUITEMS.FORMS.LIST.VALIDATION',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/forms/wizard',
    //       title: 'MENUITEMS.FORMS.LIST.WIZARD',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/forms/editors',
    //       title: 'MENUITEMS.FORMS.LIST.EDITORS',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'MENUITEMS.TABLES.TEXT',
    //   icon: 'grid',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/tables/basic-tables',
    //       title: 'MENUITEMS.TABLES.LIST.BASIC',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/tables/material-tables',
    //       title: 'MENUITEMS.TABLES.LIST.MATERIAL',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/tables/ngx-datatable',
    //       title: 'MENUITEMS.TABLES.LIST.NGX-DATATABLE',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'User Interface (UI)',
    //   icon: 'copy',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/ui/alerts',
    //       title: 'Alerts',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/badges',
    //       title: 'Badges',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/chips',
    //       title: 'Chips',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/modal',
    //       title: 'Modal',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/buttons',
    //       title: 'Buttons',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/expansion-panel',
    //       title: 'Expansion Panel',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/bottom-sheet',
    //       title: 'Bottom Sheet',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/dialogs',
    //       title: 'Dialogs',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/cards',
    //       title: 'Cards',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/labels',
    //       title: 'Labels',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/list-group',
    //       title: 'List Group',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/snackbar',
    //       title: 'Snackbar',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/preloaders',
    //       title: 'Preloaders',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/progressbars',
    //       title: 'Progress Bars',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/tabs',
    //       title: 'Tabs',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/typography',
    //       title: 'Typography',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/ui/helper-classes',
    //       title: 'Helper Classes',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Medias',
    //   icon: 'image',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/media/gallery',
    //       title: 'Image Gallery',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Charts',
    //   icon: 'pie-chart',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/charts/echart',
    //       title: 'Echart',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/charts/apex',
    //       title: 'Apex',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/charts/chartjs',
    //       title: 'ChartJS',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/charts/ngx-charts',
    //       title: 'Ngx-Charts',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/charts/gauge',
    //       title: 'Gauge',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Timeline',
    //   icon: 'git-pull-request',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/timeline/timeline1',
    //       title: 'Timeline 1',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/timeline/timeline2',
    //       title: 'Timeline 2',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Icons',
    //   icon: 'feather',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/icons/material',
    //       title: 'Material Icons',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/icons/font-awesome',
    //       title: 'Font Awesome',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: '-- Pages',
    //   icon: '',
    //   class: '',
    //   groupTitle: true,
    //   submenu: []
    // },
    // {
    //   path: '',
    //   title: 'Authentication',
    //   icon: 'user-check',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/authentication/signin',
    //       title: 'Sign In',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/authentication/signup',
    //       title: 'Sign Up',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/authentication/forgot-password',
    //       title: 'Forgot Password',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/authentication/locked',
    //       title: 'Locked',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/authentication/page404',
    //       title: '404 - Not Found',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/authentication/page500',
    //       title: '500 - Server Error',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Extra Pages',
    //   icon: 'anchor',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/extra-pages/profile',
    //       title: 'Profile',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/extra-pages/pricing',
    //       title: 'Pricing',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/extra-pages/invoice',
    //       title: 'Invoice',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/extra-pages/faqs',
    //       title: 'Faqs',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/extra-pages/blank',
    //       title: 'Blank Page',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Maps',
    //   icon: 'map-pin',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/maps/google',
    //       title: 'Google Map',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Multi level Menu',
    //   icon: 'chevrons-down',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/multilevel/first1',
    //       title: 'First',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/',
    //       title: 'Second',
    //       icon: '',
    //       class: 'ml-sub-menu',
    //       groupTitle: false,
    //       submenu: [
    //         {
    //           path: '/multilevel/secondlevel/second1',
    //           title: 'Second 1',
    //           icon: '',
    //           class: 'ml-menu2',
    //           groupTitle: false,
    //           submenu: []
    //         },
    //         {
    //           path: '/',
    //           title: 'Second 2',
    //           icon: '',
    //           class: 'ml-sub-menu2',
    //           groupTitle: false,
    //           submenu: [
    //             {
    //               path: '/multilevel/thirdlevel/third1',
    //               title: 'third 1',
    //               icon: '',
    //               class: 'ml-menu3',
    //               groupTitle: false,
    //               submenu: []
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       path: '/multilevel/first3',
    //       title: 'Third',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     }
    //   ]
    // }
];
const getRoutes = () => {
    const idsToKeep1 = JSON.parse(sessionStorage.getItem("Modules"));
    console.log(idsToKeep1);
    const idsToKeep2 = csvStringToArray(sessionStorage.getItem("Metrics"));
    const filteredIds = filterDataById(routes_list, idsToKeep1, idsToKeep2);
    console.log(filteredIds, idsToKeep1, idsToKeep2, "jaa");
    if (idsToKeep1.length > 0)
        return filteredIds;
    else
        return routes_list;
};


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 28211);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function SidebarComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, sidebarItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.callToggleMenu($event, sidebarItem_r1.submenu.length)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarItem_r1.active && sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, sidebarItem_r1.title), " ");
} }
function SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const sidebarSubItem3_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.callToggleMenu($event, sidebarSubItem3_r17.submenu.length)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarSubItem3_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarSubItem3_r17.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem3_r17.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, sidebarSubItem3_r17.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarSubItem3_r17.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, sidebarSubItem3_r17.title), " ");
} }
function SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_ul_4_li_1_Template, 4, 10, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem2_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarSubItem2_r14.submenu);
} }
function SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const sidebarSubItem2_r14 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.callToggleMenu($event, sidebarSubItem2_r14.submenu.length)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_ul_4_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem2_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarSubItem2_r14.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem2_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarSubItem2_r14.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, sidebarSubItem2_r14.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, sidebarSubItem2_r14.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarSubItem2_r14.submenu.length > 0);
} }
function SidebarComponent_li_4_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_3_li_1_ul_4_li_1_Template, 5, 11, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem1_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarSubItem1_r11.submenu);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
function SidebarComponent_li_4_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_4_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const sidebarSubItem1_r11 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.callToggleMenu($event, sidebarSubItem1_r11.submenu.length)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_4_ul_3_li_1_ul_4_Template, 2, 1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem1_r11 = ctx.$implicit;
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, !sidebarItem_r1.active))("routerLinkActive", sidebarSubItem1_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem1_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, sidebarSubItem1_r11.path))("ngClass", sidebarItem_r1.active ? sidebarSubItem1_r11.class : "disabledSubmenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, sidebarSubItem1_r11.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarSubItem1_r11.submenu.length > 0);
} }
function SidebarComponent_li_4_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_ul_3_li_1_Template, 5, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_4_div_1_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_li_4_a_2_Template, 5, 10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_4_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, sidebarItem_r1.id === "compliance" ? !sidebarItem_r1.active : false))("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c2 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, authService, router) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.headerHeight = 60;
        this.routerObj = null;
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, "overlay-open");
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, "overlay-open");
        }
    }
    callToggleMenu(event, length) {
        if (length > 0) {
            const parentElement = event.target.closest("li");
            const activeClass = parentElement.classList.contains("active");
            if (activeClass) {
                this.renderer.removeClass(parentElement, "active");
            }
            else {
                this.renderer.addClass(parentElement, "active");
            }
        }
    }
    setClass(name) {
        return "header";
    }
    extractIds(obj) {
        const result = [];
        function traverse(obj) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (key === "id") {
                        // Assuming ids are numbers, modify accordingly if they are strings or other types
                        result.push(obj[key]);
                    }
                    else if (typeof obj[key] === "object") {
                        traverse(obj[key]);
                    }
                }
            }
        }
        traverse(obj);
        return result;
    }
    csvStringToArray(csvString) {
        if (csvString === "") {
            // Handle the case when csvString is an empty string
            return [];
        }
        return csvString.split(",");
    }
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            if (user) {
                this.ROUTES = (0,_sidebar_items__WEBPACK_IMPORTED_MODULE_1__.getRoutes)();
                console.log(this.ROUTES);
                this.sidebarItems = this.ROUTES;
                // this.sidebarItems.sort((a, b) => {
                //   // Sorting active items first
                //   return (a.active === b.active) ? 0 : a.active ? -1 : 1;
                // });
                console.log("sidebarItems=>>", this.sidebarItems);
            }
            this.initLeftSidebar();
            this.bodyTag = this.document.body;
        });
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + "";
        this.listMaxWidth = "500px";
    }
    isOpen() {
        return this.bodyTag.classList.contains("overlay-open");
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, "ls-closed");
        }
        else {
            this.renderer.removeClass(this.document.body, "ls-closed");
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("submenu-closed")) {
            this.renderer.addClass(this.document.body, "side-closed-hover");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("side-closed-hover")) {
            this.renderer.removeClass(this.document.body, "side-closed-hover");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 5, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], ["id", "sidebarnav", 1, "list", 3, "ngStyle", "perfectScrollbar"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [1, "sidebarIcon", 3, "name"], [1, "hide-menu"], [1, "ml-menu"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"], [3, "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "ml-menu-3", 4, "ngIf"], [1, "ml-menu-3"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 4, 7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c2, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".hiddenicon[_ngcontent-%COMP%] {\n  height: 18px !important;\n  width: 18px !important;\n  color: grey;\n  opacity: 0.7;\n  margin-right: 3px;\n}\n.hidden[_ngcontent-%COMP%] {\n  color: grey;\n  opacity: 0.7;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n  cursor: not-allowed;\n  height: 46px;\n}\n.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: grey;\n  opacity: 0.7;\n}\n.disabledSubmenu[_ngcontent-%COMP%] {\n  color: grey;\n  opacity: 0.7;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNHLFdBQUE7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUVKIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4uaGlkZGVuaWNvbntcclxuICAgIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgIGNvbG9yOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4uZGlzYWJsZWQgYXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uZGlzYWJsZWRTdWJtZW51IHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6568:
/*!********************************************************************!*\
  !*** ./src/app/project/create-project/create-project.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectComponent": () => (/* binding */ CreateProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-service.service */ 71343);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 89226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/copyright-statement/copyright-statement.component */ 15943);


















function CreateProjectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadscrum_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", breadscrum_r4.title)("items", breadscrum_r4.items)("active_item", breadscrum_r4.active);
} }
function CreateProjectComponent_div_9_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Configure Project");
} }
function CreateProjectComponent_div_9_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Project name already exists.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateProjectComponent_div_9_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Upload Data");
} }
function CreateProjectComponent_div_9_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.uploadData.train_data.name);
} }
function CreateProjectComponent_div_9_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateProjectComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-horizontal-stepper", null, 13)(8, "mat-step", 14)(9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CreateProjectComponent_div_9_ng_template_10_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17)(13, "mat-form-field", 18)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CreateProjectComponent_div_9_mat_error_17_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "mat-form-field", 18)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Project Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-step", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateProjectComponent_div_9_ng_template_27_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "div", 23)(30, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Choose data file");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CreateProjectComponent_div_9_span_32_Template, 3, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateProjectComponent_div_9_Template_input_change_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.ontrain_dataDataSelected($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 27)(35, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div")(38, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateProjectComponent_div_9_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CreateProjectComponent_div_9_span_39_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r1.thirdFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.thirdFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.thirdFormGroup.get("projectName").errors == null ? null : ctx_r1.thirdFormGroup.get("projectName").errors.nameExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r1.dataUpload)("completed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.uploadData.train_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isLoadingButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingButton);
} }
function CreateProjectComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateProjectComponent_div_11_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Project Setup");
} }
function CreateProjectComponent_div_11_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r21, " ");
} }
function CreateProjectComponent_div_11_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r22, " ");
} }
function CreateProjectComponent_div_11_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r23, " ");
} }
function CreateProjectComponent_div_11_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateProjectComponent_div_11_form_33_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Feature Selection");
} }
function CreateProjectComponent_div_11_form_33_div_2_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r29, " ");
} }
function CreateProjectComponent_div_11_form_33_div_2_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r30, " ");
} }
function CreateProjectComponent_div_11_form_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17)(7, "mat-form-field", 18)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Privileged");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateProjectComponent_div_11_form_33_div_2_mat_option_11_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 18)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Un-Privileged");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CreateProjectComponent_div_11_form_33_div_2_mat_option_16_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const attribute_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attribute_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", attribute_r26 + "priv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.parsedPrivUnpriv[attribute_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", attribute_r26 + "unpriv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.parsedPrivUnpriv[attribute_r26]);
} }
function CreateProjectComponent_div_11_form_33_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateProjectComponent_div_11_form_33_ng_template_1_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateProjectComponent_div_11_form_33_div_2_Template, 17, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27)(4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateProjectComponent_div_11_form_33_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r20.sixthFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r20.keysPrivUnpriv);
} }
function CreateProjectComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Project Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-horizontal-stepper", null, 13)(8, "mat-step", 14)(9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CreateProjectComponent_div_11_ng_template_10_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17)(13, "mat-form-field", 18)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Actual 'y' column");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CreateProjectComponent_div_11_mat_option_17_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 18)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Protected Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CreateProjectComponent_div_11_mat_option_22_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 18)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Predicted 'y' column");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateProjectComponent_div_11_mat_option_27_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17)(29, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateProjectComponent_div_11_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.nextps()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-step", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CreateProjectComponent_div_11_div_32_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CreateProjectComponent_div_11_form_33_Template, 8, 2, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r3.fifthFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.fifthFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.featureOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.featureOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.featureOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx_r3.sixthFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isLoadingButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.isLoadingButton && ctx_r3.privUnprivRes && ctx_r3.parsedPrivUnpriv && ctx_r3.keysPrivUnpriv);
} }
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}
class Option {
    constructor(name) {
        this.name = name;
        this.subOptions = [];
    }
}
class CreateProjectComponent {
    constructor(_formBuilder, apiService, router, activatedRoute, authService) {
        this._formBuilder = _formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.breadscrums = [
            {
                title: "Create Project",
                items: ["Project"],
                active: "Create New",
            },
        ];
        this.clientProjects = [
            "pj1",
            "pj2",
            "pj3"
        ];
        // featureOptions = [];
        this.isLoadingButton = false;
        this.isLoading = false;
        this.showNewForm = false;
        this.labelPosition = "after";
        this.checked = false;
        this.featureTypes = [
            { value: "target", label: "Target" },
            { value: "protected", label: "Protected" },
            { value: "others", label: "Others" },
        ];
        this.currentUser = {};
        this.moduleOptions = [];
        this.MetricOptions = [];
        this.datasetFeatures = [];
        this.featureOptions = [
        // "DESYNPUF_ID",
        // "CLM_ID",
        // "SEGMENT",
        // "CLM_FROM_DT",
        // "CLM_THRU_DT",
        // "PRVDR_NUM",
        // "CLM_PMT_AMT",
        // "NCH_PRMRY_PYR_CLM_PD_AMT",
        // "AT_PHYSN_NPI",
        // "OP_PHYSN_NPI",
        // "OT_PHYSN_NPI",
        // "CLM_ADMSN_DT",
        // "ADMTNG_ICD9_DGNS_CD",
        // "CLM_PASS_THRU_PER_DIEM_AMT",
        // "NCH_BENE_IP_DDCTBL_AMT",
        // "NCH_BENE_PTA_COINSRNC_LBLTY_AM",
        // "NCH_BENE_BLOOD_DDCTBL_LBLTY_AM",
        // "CLM_UTLZTN_DAY_CNT",
        // "NCH_BENE_DSCHRG_DT",
        // "CLM_DRG_CD",
        // "ICD9_DGNS_CD_1",
        // "ICD9_DGNS_CD_2",
        // "ICD9_DGNS_CD_3",
        // "ICD9_DGNS_CD_4",
        // "ICD9_DGNS_CD_5",
        // "ICD9_DGNS_CD_6",
        // "ICD9_DGNS_CD_7",
        // "ICD9_DGNS_CD_8",
        // "ICD9_DGNS_CD_9",
        // "ICD9_DGNS_CD_10",
        // "ICD9_PRCDR_CD_1",
        // "ICD9_PRCDR_CD_2",
        // "ICD9_PRCDR_CD_3",
        // "ICD9_PRCDR_CD_4",
        // "ICD9_PRCDR_CD_5",
        // "ICD9_PRCDR_CD_6",
        // "HCPCS_CD_1",
        // "HCPCS_CD_2",
        // "HCPCS_CD_3",
        // "HCPCS_CD_4",
        // "HCPCS_CD_5",
        // "HCPCS_CD_6",
        // "HCPCS_CD_7",
        // "HCPCS_CD_8",
        // "HCPCS_CD_9",
        // "HCPCS_CD_10",
        // "HCPCS_CD_11",
        // "HCPCS_CD_12",
        // "HCPCS_CD_13",
        // "HCPCS_CD_14",
        // "HCPCS_CD_15",
        // "HCPCS_CD_16",
        // "HCPCS_CD_17",
        // "HCPCS_CD_18",
        // "HCPCS_CD_19",
        // "HCPCS_CD_20",
        // "HCPCS_CD_21",
        // "HCPCS_CD_22",
        // "HCPCS_CD_23",
        // "HCPCS_CD_24",
        // "HCPCS_CD_25",
        // "HCPCS_CD_26",
        // "HCPCS_CD_27",
        // "HCPCS_CD_28",
        // "HCPCS_CD_29",
        // "HCPCS_CD_30",
        // "HCPCS_CD_31",
        // "HCPCS_CD_32",
        // "HCPCS_CD_33",
        // "HCPCS_CD_34",
        // "HCPCS_CD_35",
        // "HCPCS_CD_36",
        // "HCPCS_CD_37",
        // "HCPCS_CD_38",
        // "HCPCS_CD_39",
        // "HCPCS_CD_40",
        // "HCPCS_CD_41",
        // "HCPCS_CD_42",
        // "HCPCS_CD_43",
        // "HCPCS_CD_44",
        // "HCPCS_CD_45",
        ];
        this.privUnprivRes = null;
        this.parsedPrivUnpriv = null;
        this.keysPrivUnpriv = null;
        this.uploadData = {
            "test_data": null,
            "train_data": null,
            "ref_prod_data": null
        };
        this.uploadFeaturedData = {
            "train_data": null,
            "test_data": null
        };
        this.uploadModel = [];
    }
    // datasetFeatures = [
    //   "DESYNPUF_ID",
    //   "CLM_ID",
    //   "SEGMENT",
    //   "CLM_FROM_DT",
    //   "CLM_THRU_DT",
    //   "PRVDR_NUM",
    //   "CLM_PMT_AMT",
    //   "NCH_PRMRY_PYR_CLM_PD_AMT",
    //   "AT_PHYSN_NPI",
    //   "OP_PHYSN_NPI",
    //   "OT_PHYSN_NPI",
    //   "CLM_ADMSN_DT",
    //   "ADMTNG_ICD9_DGNS_CD",
    //   "CLM_PASS_THRU_PER_DIEM_AMT",
    //   "NCH_BENE_IP_DDCTBL_AMT",
    //   "NCH_BENE_PTA_COINSRNC_LBLTY_AM",
    //   "NCH_BENE_BLOOD_DDCTBL_LBLTY_AM",
    //   "CLM_UTLZTN_DAY_CNT",
    //   "NCH_BENE_DSCHRG_DT",
    //   "CLM_DRG_CD",
    //   "ICD9_DGNS_CD_1",
    //   "ICD9_DGNS_CD_2",
    //   "ICD9_DGNS_CD_3",
    //   "ICD9_DGNS_CD_4",
    //   "ICD9_DGNS_CD_5",
    //   "ICD9_DGNS_CD_6",
    //   "ICD9_DGNS_CD_7",
    //   "ICD9_DGNS_CD_8",
    //   "ICD9_DGNS_CD_9",
    //   "ICD9_DGNS_CD_10",
    //   "ICD9_PRCDR_CD_1",
    //   "ICD9_PRCDR_CD_2",
    //   "ICD9_PRCDR_CD_3",
    //   "ICD9_PRCDR_CD_4",
    //   "ICD9_PRCDR_CD_5",
    //   "ICD9_PRCDR_CD_6",
    //   "HCPCS_CD_1",
    //   "HCPCS_CD_2",
    //   "HCPCS_CD_3",
    //   "HCPCS_CD_4",
    //   "HCPCS_CD_5",
    //   "HCPCS_CD_6",
    //   "HCPCS_CD_7",
    //   "HCPCS_CD_8",
    //   "HCPCS_CD_9",
    //   "HCPCS_CD_10",
    //   "HCPCS_CD_11",
    //   "HCPCS_CD_12",
    //   "HCPCS_CD_13",
    //   "HCPCS_CD_14",
    //   "HCPCS_CD_15",
    //   "HCPCS_CD_16",
    //   "HCPCS_CD_17",
    //   "HCPCS_CD_18",
    //   "HCPCS_CD_19",
    //   "HCPCS_CD_20",
    //   "HCPCS_CD_21",
    //   "HCPCS_CD_22",
    //   "HCPCS_CD_23",
    //   "HCPCS_CD_24",
    //   "HCPCS_CD_25",
    //   "HCPCS_CD_26",
    //   "HCPCS_CD_27",
    //   "HCPCS_CD_28",
    //   "HCPCS_CD_29",
    //   "HCPCS_CD_30",
    //   "HCPCS_CD_31",
    //   "HCPCS_CD_32",
    //   "HCPCS_CD_33",
    //   "HCPCS_CD_34",
    //   "HCPCS_CD_35",
    //   "HCPCS_CD_36",
    //   "HCPCS_CD_37",
    //   "HCPCS_CD_38",
    //   "HCPCS_CD_39",
    //   "HCPCS_CD_40",
    //   "HCPCS_CD_41",
    //   "HCPCS_CD_42",
    //   "HCPCS_CD_43",
    //   "HCPCS_CD_44",
    //   "HCPCS_CD_45",
    // ];
    // temp = [
    //   {
    //     "label": "home",
    //     "active": true
    //   },
    //   {
    //     "label": "home/dashboard",
    //     "active": true
    //   },
    //   {
    //     "label": "bias",
    //     "active": true
    //   },
    //   {
    //     "label": "bias/summary",
    //     "active": true
    //   },
    //   {
    //     "label": "bias/acore",
    //     "active": true
    //   },
    //   {
    //     "label": "bias/intersecional",
    //     "active": true
    //   },
    //   {
    //     "label": "mlops",
    //     "active": true
    //   },
    //   {
    //     "label": "mlops/dashboard",
    //     "active": true
    //   },
    //   {
    //     "label": "mlops/dataDrift",
    //     "active": true
    //   },
    //   {
    //     "label": "mlops/targetDrift",
    //     "active": true
    //   },
    //   {
    //     "label": "mlops/outlayer",
    //     "active": true
    //   },
    //   {
    //     "label": "explainability",
    //     "active": true
    //   },
    //   {
    //     "label": "explainability/EDS",
    //     "active": true
    //   },
    //   {
    //     "label": "explainability/performance",
    //     "active": false
    //   },
    //   {
    //     "label": "explainability/explainability",
    //     "active": false
    //   },
    //   {
    //     "label": "explainability/whatif",
    //     "active": false
    //   },
    //   {
    //     "label": "compliance",
    //     "active": false
    //   },
    //   {
    //     "label": "compliance/regulation",
    //     "active": false
    //   },
    //   {
    //     "label": "compliance/NYC",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/riskregister",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/assessment",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/AItech",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/compAssess",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/cases",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/pass",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/report",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/scoping",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/scoping/assessment",
    //     "active": false
    //   },
    //   {
    //     "label": "tprm/FormList",
    //     "active": false
    //   }
    // ];
    ngOnInit() {
        this.authService.user$.subscribe((user) => {
            this.currentUser = user;
            console.log;
            const params = {
                'client_id': 'coforge',
                'user_id': this.currentUser?.email
            };
            this.apiService.getProjects(params).subscribe((projects) => {
                this.clientProjects = [];
                if (projects.length >= 2)
                    this.router.navigate(["/InventoryComponent"]);
                for (let item of projects) {
                    this.clientProjects.push(item.project_name); // Extract the name and add it to the array
                }
                console.log(this.clientProjects);
            }, (error) => {
                console.error;
            });
            this.activatedRoute.params.subscribe(params => {
                const projectName = params['projectName'];
                if (projectName) {
                    this.isLoading = true;
                    this.thirdFormGroup.patchValue({
                        projectName: projectName,
                        projectDetails: ''
                    });
                    this.loadProjectDetails(projectName);
                }
            });
        });
        this.secondFormGroup = this._formBuilder.group({
            uploadModel: [""],
        });
        this.thirdFormGroup = this._formBuilder.group({
            projectName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, this.validateProjectNameExists()]],
            projectDetails: [""],
            modelType: ["Classification", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            moduleSelection: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            metricsSelection: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            detailsToggle: false,
        });
        this.fourthFormGroup = this._formBuilder.group({
            project_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.fifthFormGroup = this._formBuilder.group({
            targetFeatures: [],
            protectedFeatures: [],
            othersFeatures: [],
            prot_attr: [],
            priv: [],
            unpriv: [],
            pred_col: []
        });
        this.sixthFormGroup = this._formBuilder.group({
            priv: [],
            unpriv: [],
        });
        // this.apiService.getDatasetFeatures().subscribe(
        //   (features) => {
        //     this.datasetFeatures = features?.columns;
        //   },
        //   (err) => {
        //     console.error(err);
        //   }
        // );
        // this.apiService.getModuleOptions().subscribe(
        //   (data) => {
        //     console.log(data)
        //     this.moduleOptions = this.filterModuleOptions(data);
        //   },
        //   (err) => {
        //     console.error(err);
        //   }
        // )
    }
    validateProjectNameExists() {
        return (control) => {
            const nameExists = this.clientProjects.includes(control.value);
            return nameExists ? { nameExists: true } : null;
        };
    }
    loadProjectDetails(projectName) {
        const secondParams = {
            // "project_name":this.thirdFormGroup.get("projectName").value,
            "project_name": this.thirdFormGroup.get("projectName").value,
            "client_id": 'coforge',
            "user_id": this.currentUser?.email
        };
        this.apiService.getFeatures(secondParams).subscribe({
            next: (secondApiResponse) => {
                console.log('Second API call successful:', secondApiResponse);
                // Now you can show the new form.
                this.datasetFeatures = secondApiResponse.features;
                this.featureOptions = this.datasetFeatures;
                this.showNewForm = true;
            },
            error: (error) => {
                console.error('An error occurred:', error);
                this.isLoading = false;
            },
            complete: () => {
                // This will run after the second API call completes.
                this.isLoading = false;
            }
        });
    }
    create() {
        this.isLoadingButton = true;
        const params = {
            project_name: this.thirdFormGroup.get("projectName").value,
            details: this.thirdFormGroup.get("projectDetails").value,
            // metrics: this.thirdFormGroup.get("metricsSelection").value,
            data_type: this.uploadData.train_data.name.split('.').pop().toLowerCase(),
            // model_type: this.thirdFormGroup.get("modelType").value,
            // model_extension: this.uploadModel[0].name.split('.').pop().toLowerCase(),
            // model_framework: "sklearn",
            client_id: 'coforge',
            user_id: this.currentUser?.email
        };
        // Constructing the URL with query parameters
        //let base64Data; let base64model;
        // const promises = [this.uploadData.test_data, this.uploadData.train_data, this.uploadData.ref_prod_data, this.uploadModel[0]].map(file => readFileAsDataURL(file));
        const formData = new FormData();
        // Append files to the FormData
        // formData.append('client_id', 'coforge');
        // formData.append('user_id', this.currentUser?.email);
        // formData.append('project_name', this.thirdFormGroup.get("projectName").value);
        // formData.append('details', this.thirdFormGroup.get("projectDetails").value);
        // formData.append('data_type', this.uploadData.train_data.name.split('.').pop().toLowerCase());
        formData.append('train_test_data', this.uploadData.train_data);
        console.log(this.uploadData.train_data);
        //formData.append('test_data', this.uploadData.test_data);
        //formData.append('ref_prod_data', this.uploadData.ref_prod_data);
        // formData.append('featurised_train_test_data', this.uploadFeaturedData.train_data);
        //formData.append('featurised_test_data', this.uploadFeaturedData.test_data);
        // formData.append('model', this.uploadModel[0]);
        // Append other form values to the FormData
        // formData.append('project_name', this.thirdFormGroup.get("projectName").value);
        // formData.append('details', this.thirdFormGroup.get("projectDetails").value);
        // //formData.append('metrics', this.thirdFormGroup.get("metricsSelection").value);
        // formData.append('model_type', this.thirdFormGroup.get("modelType").value);
        // formData.append('model_extension', this.uploadModel[0].name.split('.').pop().toLowerCase());
        // formData.append('model_framework', "sklearn");
        // formData.append('client_id', 'coforge');
        // formData.append('data_type', 'csv')
        this.apiService.postData(params, formData)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)((data) => {
            // Use the response from the first API call to make a second API call.
            // Example: this.apiService.postData('second/api/url', { data: firstApiResponse })
            // For the sake of the example, let's assume the second API URL and payload are known:
            const secondParams = {
                // "project_name":this.thirdFormGroup.get("projectName").value,
                "project_name": this.thirdFormGroup.get("projectName").value,
                "client_id": 'coforge',
                "user_id": this.currentUser?.email
            };
            return this.apiService.getFeatures(secondParams);
        })).subscribe({
            next: (secondApiResponse) => {
                console.log('Second API call successful:', secondApiResponse);
                // Now you can show the new form.
                this.datasetFeatures = secondApiResponse.features;
                this.featureOptions = this.datasetFeatures;
                this.showNewForm = true;
            },
            error: (error) => {
                console.error('An error occurred:', error);
                this.isLoadingButton = false;
            },
            complete: () => {
                // This will run after the second API call completes.
                this.isLoadingButton = false;
            }
        });
    }
    nextps() {
        this.isLoadingButton = true;
        const reqbody = {
            project_name: this.thirdFormGroup.get("projectName").value,
            client_id: 'coforge',
            user_id: this.currentUser?.email,
            prot_attr: this.arraytoString(this.fifthFormGroup.get("prot_attr").value) || "",
        };
        this.apiService.getPrivUnpriv(reqbody).subscribe({
            next: (data) => {
                console.log(data);
                this.privUnprivRes = JSON.parse(data.body);
                console.log(this.privUnprivRes);
                const resultObject = {};
                this.keysPrivUnpriv = Object.keys(this.privUnprivRes);
                // Iterate over the input array
                this.keysPrivUnpriv.forEach(item => {
                    // Create keys dynamically and assign empty arrays as values
                    resultObject[`${item}priv`] = [];
                    resultObject[`${item}unpriv`] = [];
                });
                this.sixthFormGroup = this._formBuilder.group(resultObject);
                this.parsedPrivUnpriv = this.keysPrivUnpriv.reduce((acc, val) => {
                    // acc[val] = JSON.parse(this.privUnprivRes[val].replace(/nan/g, 'null'));
                    acc[val] = this.privUnprivRes[val].slice(1, -1).replace(/'/g, "").trim().split(', ');
                    return acc;
                }, {});
            }, error: (error) => {
                console.log(error);
                this.isLoadingButton = false;
            }, complete: () => {
                this.isLoadingButton = false;
            }
        });
    }
    submit() {
        let reqbody = {
            target: (this.fifthFormGroup.get("targetFeatures").value) || "",
            prot_attr: this.arraytoString(this.fifthFormGroup.get("prot_attr").value) || "",
            pred_col: (this.fifthFormGroup.get("pred_col").value) || "",
            project_name: this.thirdFormGroup.get("projectName").value,
            client_id: 'coforge',
            phase_2: {},
            user_id: this.currentUser?.email
        };
        this.keysPrivUnpriv.forEach(item => {
            reqbody['phase_2'][item] = {
                "priv": this.arraytoString(this.sixthFormGroup.get(`${item}priv`).value) || "",
                "unpriv": this.arraytoString(this.sixthFormGroup.get(`${item}unpriv`).value) || "",
            };
        });
        console.log(reqbody);
        this.router.navigate(['/InventoryComponent']);
        this.apiService.postFeatures(reqbody).subscribe(data => {
            console.log(data);
        }, (error) => console.log(error));
    }
    filterOptions(filter) {
        this.featureOptions = this.datasetFeatures.filter((x) => x.toLowerCase().includes(filter.toLowerCase()));
    }
    ontest_dataDataSelected(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadData.test_data = e.target.files[i];
        }
    }
    ontrain_dataDataSelected(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadData.train_data = e.target.files[i];
        }
    }
    onref_prod_dataDataSelected(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadData.ref_prod_data = e.target.files[i];
        }
    }
    onFeaturedtest_dataDataSelected(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadFeaturedData.test_data = e.target.files[i];
        }
    }
    onFeaturedtrain_dataDataSelected(e) {
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadFeaturedData.train_data = e.target.files[i];
        }
    }
    onModelSelected(e) {
        this.uploadModel = [];
        for (var i = 0; i < e.target.files.length; i++) {
            this.uploadModel.push(e.target.files[i]);
        }
    }
    filterMetricOption(e) {
        const fils = e.value;
        console.log(fils);
        const filtered = this.moduleOptions.filter(item => {
            const ind = fils.findIndex(x => x === item.name);
            if (ind < 0)
                return false;
            return true;
        });
        let arr = [];
        filtered.forEach(item => {
            item.subOptions.forEach(i => {
                const s = item.name + "/" + i;
                arr.push(s);
            });
        });
        this.MetricOptions = arr;
    }
    arraytoString(item) {
        if (item.length === 0) {
            return "";
        }
        return item.join(",");
    }
    filterModuleOptions(data) {
        const optionsMap = {};
        data.filter(x => x.active === true).forEach(path => {
            const parts = path.label.split('/');
            const optionName = parts[0];
            if (!optionsMap[optionName]) {
                optionsMap[optionName] = new Option(optionName);
            }
            if (parts.length > 1) {
                optionsMap[optionName].subOptions.push(parts.slice(1).join('/'));
            }
        });
        console.log(optionsMap);
        return Object.values(optionsMap);
    }
}
CreateProjectComponent.ɵfac = function CreateProjectComponent_Factory(t) { return new (t || CreateProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_0__.AppcollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService)); };
CreateProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateProjectComponent, selectors: [["app-create-project"]], decls: 13, vars: 4, consts: [[1, "cp", 2, "background-color", "#F5F6FA", "height", "calc(100vh - 60px)"], ["routerLink", "/InventoryComponent", 2, "z-index", "1000", "position", "fixed", "width", "100%", "top", "0", "left", "0", "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "20px", "padding-inline", "44px", "background-color", "#fff"], ["src", "assets/images/Sigma-red-Final-logo.png", "alt", "", 2, "height", "60px"], [2, "display", "flex", "justify-content", "center"], ["matTooltip", "SigmaRed\u2019s AiSCERT Platform identifies and mitigates AI risks related to AI fairness, AI explainability, AI robustness, AI regulatory compliance, and ML monitoring and provides ongoing responsible AI assessment and mitigation.", 2, "cursor", "pointer", "font-size", "24px"], [1, "cp-body", 2, "height", "100vh", "display", "flex", "justify-content", "center", "align-items", "center"], [4, "ngFor", "ngForOf"], [1, "counter-box", 2, "min-width", "500px"], [4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [3, "title", "items", "active_item"], [2, "display", "flex", "justify-content", "space-between"], ["matTooltip", "Add project name and description to create a new project.", "matTooltipPosition", "above", 2, "cursor", "pointer"], ["stepper", "matHorizontalStepper"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "cp-two-field-container"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "formControlName", "projectName"], ["matInput", "", "formControlName", "projectDetails"], ["mat-button", "", "matStepperNext", "", 2, "padding-inline", "6px", "padding-top", "2px", "padding-bottom", "2px", "background-color", "#1A73E8", "color", "white"], [3, "stepControl", "completed"], [1, "file-drop-area"], ["mat-raised-button", "", 2, "background-color", "#1A73E8", "color", "white"], ["class", "file-msg", 4, "ngIf"], ["type", "file", "accept", ".csv,.xlsx", 1, "file-input", 3, "change"], [1, "buttons"], ["mat-button", "", "matStepperPrevious", ""], ["mat-raised-button", "", 2, "background-color", "#1A73E8", "color", "white", 3, "disabled", "click"], [1, "file-msg"], [1, "me-2"], [1, "loading-overlay"], ["mode", "indeterminate"], ["matTooltip", "Select Target, Predicted Column, Protected Attribute, Privileged and Unprivileged for project setup.", "matTooltipPosition", "above", 2, "cursor", "pointer"], ["formControlName", "targetFeatures"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "formControlName", "prot_attr"], ["formControlName", "pred_col"], ["mat-raised-button", "", "matStepperNext", "", 2, "background-color", "#1A73E8", "color", "white", 3, "click"], [3, "formGroup", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", 2, "background-color", "#1A73E8", "color", "white", 3, "click"], ["multiple", "", 3, "formControlName"]], template: function CreateProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreateProjectComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateProjectComponent_div_9_Template, 40, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CreateProjectComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateProjectComponent_div_11_Template, 34, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-copyright");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadscrums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoadingButton && !ctx.showNewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoadingButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showNewForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperPrevious, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _layout_copyright_statement_copyright_statement_component__WEBPACK_IMPORTED_MODULE_1__.CopyrightComponent], styles: [".cp[_ngcontent-%COMP%] {\n  background-color: #F5F6FA;\n}\n\n.cp-body[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.wrap-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr; \n}\n\n.item[_ngcontent-%COMP%] {\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.item[_ngcontent-%COMP%]:nth-child(odd) {\n  margin-right: auto;\n}\n\n.item[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: auto;\n}\n\n.cp-two-field-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  gap: 5px;\n}\n\n.file-drop-area[_ngcontent-%COMP%] {\n  border: 1px dashed #7c7db3;\n  border-radius: 3px;\n  position: relative;\n  max-width: 100%;\n  margin-top: 5px;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n\n.file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.file-msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #5b5bff;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed; \n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000; \n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 10px;\n}\n\n.mat-step-icon-selected[_ngcontent-%COMP%] {\n  background-color: #1A73E8;\n}\n\n[_nghost-%COMP%]     .mat-step-icon-selected {\n  background-color: #007BFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFTQTtFQUNJLFdBQUE7RUFFQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLG1DQUFBLEVBQUEsbUNBQUE7QUFQSjs7QUFVRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVRSxrQ0FBQTs7QUFDQTtFQUNFLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSxpQkFBQTtBQVBKOztBQVVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQVBKOztBQVNFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU5KOztBQVFFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFPRTtFQUNFLGVBQUEsRUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQSxFQUFBLG9DQUFBO0FBSko7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGIiwiZmlsZSI6ImNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGQTtcbn1cblxuLmNwLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxufVxuLy8gLmNwLWhlYWRlciB7XG4vLyAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgfVxuLndyYXAtYm9keXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyOyAvKiBUaHJlZSBjb2x1bW5zIHdpdGggZXF1YWwgd2lkdGggKi9cbiAgfVxuICBcbiAgLml0ZW0ge1xuICAgIC8qIFN0eWxpbmcgZm9yIHRoZSBpdGVtcyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogQXBwbHkgc3BhY2UgYmV0d2VlbiB0aGUgaXRlbXMgKi9cbiAgLml0ZW06bnRoLWNoaWxkKG9kZCkge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICBcbiAgLml0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5jcC10d28tZmllbGQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOjVweDtcbiAgfVxuICAuZmlsZS1kcm9wLWFyZWEge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjN2M3ZGIzO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nOiAyNnB4IDIwcHggMzBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG4gIFxuICAuZmlsZS1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZmlsZS1tc2cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNWI1YmZmO1xuICB9XG4gIC5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogb3IgYWJzb2x1dGUgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBjb250ZW50ICovXG4gIH1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1hdC1zdGVwLWljb24tc2VsZWN0ZWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTczRTg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xufSJdfQ== */"] });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": () => (/* binding */ UnsubscribeOnDestroyAdapter)
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.ɵfac });


/***/ }),

/***/ 61676:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsComponent": () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ 28211);


class FeatherIconsComponent {
    constructor() { }
    ngOnInit() { }
}
FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) { return new (t || FeatherIconsComponent)(); };
FeatherIconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon", class: "class" }, decls: 1, vars: 3, consts: [[3, "name"]], template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon);
    } }, dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 27545:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsModule": () => (/* binding */ FeatherIconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feather-icons.component */ 61676);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 28211);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather/icons */ 91659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);






class FeatherIconsModule {
}
FeatherIconsModule.ɵfac = function FeatherIconsModule_Factory(t) { return new (t || FeatherIconsModule)(); };
FeatherIconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatherIconsModule });
FeatherIconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__.allIcons), angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatherIconsModule, { declarations: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule], exports: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] }); })();


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);















const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [materialModules, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.module */ 27545);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ 41861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);










class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__.CdkStepperModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsModule] }); })();


/***/ }),

/***/ 12822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* binding */ SubSink)
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
    domain: 'sigmared.us.auth0.com',
    clientId: 'VMhpMSbdBMfHfgSHJXvgfJTAbMKBBW7b',
    clientSecret: 'mA2B0vAuJwZxtCuJRkDaJle2XNNIfwmVlNmvlMdocBBLuAxvLoekXm3KOFJNUqif',
    access_token: localStorage.getItem("access_token"),
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZPYjZGZGV1bGlQV1pKQlBPcktRWiJ9.eyJpc3MiOiJodHRwczovL3NpZ21hcmVkLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJ3Mk9XbmFYeTJtZ2FpZTE4T0xrSmFqbklzTzVwaU9aVUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zaWdtYXJlZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcxOTU5MzIwMiwiZXhwIjoxNzIyMTg1MjAyLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIHJlYWQ6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgZGVsZXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6aG9va3MgdXBkYXRlOmhvb2tzIGRlbGV0ZTpob29rcyBjcmVhdGU6aG9va3MgcmVhZDphY3Rpb25zIHVwZGF0ZTphY3Rpb25zIGRlbGV0ZTphY3Rpb25zIGNyZWF0ZTphY3Rpb25zIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6aW5zaWdodHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyB1cGRhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyB1cGRhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6bWZhX3BvbGljaWVzIHVwZGF0ZTptZmFfcG9saWNpZXMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgZGVsZXRlOnJvbGVzIHVwZGF0ZTpyb2xlcyByZWFkOnByb21wdHMgdXBkYXRlOnByb21wdHMgcmVhZDpicmFuZGluZyB1cGRhdGU6YnJhbmRpbmcgZGVsZXRlOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMgY3JlYXRlOnNpZ25pbmdfa2V5cyByZWFkOnNpZ25pbmdfa2V5cyB1cGRhdGU6c2lnbmluZ19rZXlzIHJlYWQ6bGltaXRzIHVwZGF0ZTpsaW1pdHMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIHJlYWQ6ZW50aXRsZW1lbnRzIHJlYWQ6YXR0YWNrX3Byb3RlY3Rpb24gdXBkYXRlOmF0dGFja19wcm90ZWN0aW9uIHJlYWQ6b3JnYW5pemF0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyB1cGRhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIGNyZWF0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSBjcmVhdGU6YWN0aW9uc19sb2dfc2Vzc2lvbnMgY3JlYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDphdXRoZW50aWNhdGlvbl9tZXRob2RzIHVwZGF0ZTphdXRoZW50aWNhdGlvbl9tZXRob2RzIGRlbGV0ZTphdXRoZW50aWNhdGlvbl9tZXRob2RzIHJlYWQ6Y2xpZW50X2NyZWRlbnRpYWxzIGNyZWF0ZTpjbGllbnRfY3JlZGVudGlhbHMgdXBkYXRlOmNsaWVudF9jcmVkZW50aWFscyBkZWxldGU6Y2xpZW50X2NyZWRlbnRpYWxzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXpwIjoidzJPV25hWHkybWdhaWUxOE9Ma0pham5Jc081cGlPWlUifQ.zIqs5Z3XU5CgqaGXnsh41A0Wkn5vmy6kijJAvN2ezaZC0lf6d27eE585LudyY2TCrv-XKF-MCbwjj_6LHPXVkr4hpaA7ObKQQELZzh6n46oHSib8pEoqkCm18rOCFY71tfXYqQO9Xak0TF9nglVxQIk2gRx4Z9r2R38IQEETl4lyDBUz4Gy0NxEiwo6oy70y0yyoBsc4tD4-ccIRa-mRIpJZqjV-zYhe2v1eoGdx2fuCvQsmN6tzlxZQsZdKo5wC2hA1xkBJad0X5AE-Oy_6SpbCmgzJFYRmPSRpJdBLggiYf5NWyzDqW7PR5dGJSkcfrey2zbKbkxoLLrielVKRPg',
    gatewayUrl: 'https://io37mtg5kk.execute-api.ap-southeast-1.amazonaws.com',
    gateway2Url: 'https://9cg6c9fxg9.execute-api.ap-southeast-1.amazonaws.com',
    gateway3Url: 'https://x5br2wqtza.execute-api.ap-southeast-1.amazonaws.com',
    // gatewayUrlApp: 'https://4.233.147.26:8500/dashboard',
    gatewayUrlApp: 'https://2w24txr2ecpc36zqwk4v4vdmva0ohppf.lambda-url.eu-north-1.on.aws/dashboard',
    gatewayUrlBias: 'https://2w24txr2ecpc36zqwk4v4vdmva0ohppf.lambda-url.eu-north-1.on.aws/bias',
    gatewayUrlMlops: 'http://4.233.193.81:8002/mlops',
    gatewayUrlExplainability: 'http://4.233.147.26:8502/ascert/explainability'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map