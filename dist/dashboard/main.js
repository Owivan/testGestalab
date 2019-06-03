(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"logo\"><img src=\"assets/img/white-logo.png\" alt=\"logo\" width=\"150\"></div>\n  <div class=\"search\">\n    <div class=\"form-group\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Busca por máquina, fecha o variable</small>\n      <div class=\"contentSearch\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n          <div class=\"iconSearch\"></div>\n      </div>\n    </div>\n  </div>\n  <ul>\n    <li>Inicio</li>\n    <li>Salud</li>\n    <li>Historial de alertas</li>\n    <li>Causa y efecto</li>\n    <li>Tiempo real</li>\n    <li>Reportes</li>\n    <li>Configuración</li>\n    <li>Cerrar sesión</li>\n    <hr>\n    <li>Ayuda</li>\n    <li>Términos y condiciones</li>\n    <li>Legales</li>\n  </ul>\n  <div class=\"back\"></div>\n</div>\n<div class=\"main-content\">\n  <div class=\"navbar\">\n    <div class=\"alerts\">\n        <div class=\"bell\">\n          <img src=\"assets/img/bell.svg\" alt=\"notification\" width=\"20\">\n          <div class=\"badge\">4</div>\n        </div>\n        <div class=\"pl10\">Ver Alertas</div>\n      </div>\n      <div class=\"date\">\n        <div class=\"today\"><span>{{ today | date }} {{ today | date:'shortTime' }}</span>   </div>\n        <div class=\"updateLast\">Ultima actualización {{ update | date :'shortTime'}}\n          <button class=\"reload\" (click)=\"updateData()\"><img src=\"assets/img/reload.svg\" alt=\"reload\" width=\"15\"></button>\n        </div> \n      </div>\n  </div>\n  <ngb-tabset (tabChange)=\"onTabChange($event)\">\n    <ngb-tab title=\"{{item.nombre}}\" *ngFor=\" let item of plantas\">\n      <ng-template ngbTabContent *ngIf=\"item.nombre == 'Planta 1'\" >\n       <div class=\"container\">\n         <div class=\"row\">\n            <div class=\"pl20\"><h3>Inicio</h3> </div>\n         </div>\n         <div class=\"row\">\n            <div class=\"col card indicate m20\" *ngFor=\"let maquina of data\">\n              <div class=\"target\">\n                <div class=\"icon\">\n                  <img src=\"assets/img/chart.svg\" alt=\"icono-chart\" width=\"40\">\n                </div>\n                <div class=\"indicator\">\n                  <span class=\"name\">{{maquina.name}}</span>\n                  <span class=\"unity\">{{maquina.total}}</span>\n                </div>\n              </div>\n            </div>\n         </div>\n         <div class=\"row\">\n           <div class=\"col card\">\n             <div class=\"mt10\"><h3>Tendencias</h3></div>\n            <div class=\"h400\">\n              <ngx-charts-line-chart\n                [results]=\"data\"\n                [view] = \"\"\n                [scheme]=\"colorScheme\"\n                [gradient]=\"false\"\n                [xAxis]=\"true\"\n                [yAxis]=\"true\"\n                [legend]=\"true\"\n                [showXAxisLabel]=\"true\"\n                [showYAxisLabel]=\"true\"\n                [xAxisLabel]=\"''\"\n                [yAxisLabel]=\"'Producción'\"\n                [autoScale]=\"true\"\n                [timeline]=\"true\"\n                (select)=\"onSelect($event)\">\n              </ngx-charts-line-chart>\n            </div>\n           </div>\n         </div>\n       </div>\n      </ng-template>\n      <ng-template ngbTabContent *ngIf=\"item.nombre == 'Planta 2'\">\n          <div class=\"container\">\n            <div class=\"row\">\n               <div class=\"pl20\"><h3>Inicio</h3> </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col card indicate m20\" *ngFor=\"let maquina of data2\">\n                 <div class=\"target\">\n                   <div class=\"icon\">\n                     <img src=\"assets/img/chart.svg\" alt=\"icono-chart\" width=\"40\">\n                   </div>\n                   <div class=\"indicator\">\n                     <span class=\"name\">{{maquina.name}}</span>\n                     <span class=\"unity\">{{maquina.total}}</span>\n                   </div>\n                 </div>\n               </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col card\">\n                <div class=\"mt25\"><h3>Tendencias</h3></div>\n               <div class=\"h400\">\n                 <ngx-charts-line-chart\n                   [results]=\"data2\"\n                   [view] = \"\"\n                   [scheme]=\"colorScheme\"\n                   [gradient]=\"false\"\n                   [xAxis]=\"true\"\n                   [yAxis]=\"true\"\n                   [legend]=\"true\"\n                   [showXAxisLabel]=\"true\"\n                   [showYAxisLabel]=\"true\"\n                   [xAxisLabel]=\"''\"\n                   [yAxisLabel]=\"'Producción'\"\n                   [autoScale]=\"true\"\n                   [timeline]=\"true\"\n                   (select)=\"onSelect($event)\">\n                 </ngx-charts-line-chart>\n               </div>\n              </div>\n            </div>\n          </div>\n      </ng-template>\n      <ng-template ngbTabContent *ngIf=\"item.nombre == 'Planta 3'\">\n          <div class=\"container\">\n            <div class=\"row\">\n               <div class=\"pl20\"><h3>Inicio</h3> </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col card indicate m20\" *ngFor=\"let maquina of data3\">\n                 <div class=\"target\">\n                   <div class=\"icon\">\n                     <img src=\"assets/img/chart.svg\" alt=\"icono-chart\" width=\"40\">\n                   </div>\n                   <div class=\"indicator\">\n                     <span class=\"name\">{{maquina.name}}</span>\n                     <span class=\"unity\">{{maquina.total}}</span>\n                   </div>\n                 </div>\n               </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col card\">\n                <div class=\"mt25\"><h3>Tendencias</h3></div>\n               <div class=\"h400\">\n                 <ngx-charts-line-chart\n                   [results]=\"data3\"\n                   [view] = \"\"\n                   [scheme]=\"colorScheme\"\n                   [gradient]=\"false\"\n                   [xAxis]=\"true\"\n                   [yAxis]=\"true\"\n                   [legend]=\"true\"\n                   [showXAxisLabel]=\"true\"\n                   [showYAxisLabel]=\"true\"\n                   [xAxisLabel]=\"''\"\n                   [yAxisLabel]=\"'Producción'\"\n                   [autoScale]=\"true\"\n                   [timeline]=\"true\"\n                   (select)=\"onSelect($event)\">\n                 </ngx-charts-line-chart>\n               </div>\n              </div>\n            </div>\n          </div>\n         </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\" justify-content-right\">\n          <small id=\"emailHelp\" class=\"form-text text-muted mr10\">by Iván Díaz   </small>\n          <a href=\"https://github.com/Owivan/testGestalab\" target=\"_blank\" ><img src=\"assets/img/logo-github.svg\" alt=\"logogit\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  position: relative;\n  z-index: 2;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  max-height: 100%;\n  height: calc(100% - 85px);\n  min-height: calc(100% - 85px);\n  padding: 20px;\n  margin-left: 250px; }\n\n.back {\n  background-color: #021c33f0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  top: 0; }\n\n.logo {\n  text-align: center;\n  padding: 10px; }\n\n.card {\n  border: 0;\n  margin: 18px 0;\n  box-shadow: 0 6px 0 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06);\n  border-radius: 4px; }\n\n.h400 {\n  height: 310px;\n  padding-top: 20px; }\n\n.m20 {\n  margin: 20px; }\n\n.mr10 {\n  margin-right: 10px; }\n\n.mt10 {\n  margin-top: 10px; }\n\n.mt20 {\n  margin-top: 20px; }\n\n.mt25 {\n  margin-top: 25px; }\n\n.pl10 {\n  padding-left: 10px; }\n\n.pl20 {\n  padding-left: 20px; }\n\n.indicate {\n  background: #fbbb21cf; }\n\n.target {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px; }\n\n.target .icon {\n    display: flex;\n    align-items: center; }\n\n.indicator {\n  display: inline-grid; }\n\n.indicator .unity {\n    font-size: 22px;\n    color: #856404;\n    line-height: 25px;\n    font-weight: 700; }\n\n.indicator .name {\n    color: #856404;\n    font-size: 23px; }\n\n.badge {\n  background: #ff4b5d;\n  position: absolute;\n  left: 25px;\n  color: #fff;\n  border-radius: 100%; }\n\n.alerts {\n  display: flex; }\n\n.date .today {\n  font-weight: 600;\n  color: #4f6e8d; }\n\n.date .updateLast {\n  font-size: 13px;\n  display: flex;\n  align-items: center; }\n\n.reload {\n  background: none;\n  border: none; }\n\n.search {\n  padding: 0 20px; }\n\n.search .form-group .text-muted {\n    color: #b5bcc1 !important; }\n\n.search .form-group .form-control {\n    background-color: #ffffff7a !important;\n    color: #021c33f0 !important;\n    padding-left: 30px; }\n\n.contentSearch {\n  position: relative; }\n\n.justify-content-right {\n  display: flex;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvcHJhY3RpY2FzL3Rlc3RHZXN0YWxhYi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFFVixnQkFBZ0I7RUFDaEIsdUNBQXFDO0VBQ3JDLCtCQUE2QjtFQUM3QiwyREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUt0QjtFQUNJLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsTUFBTSxFQUFBOztBQUdWO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxTQUFTO0VBQ1QsY0FBYztFQUNkLDRFQUFvRTtFQUNwRSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CLEVBQUE7O0FBSHhCO0lBTVEsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLG9CQUFvQixFQUFBOztBQUR4QjtJQUlRLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQVB4QjtJQVdRLGNBQWU7SUFDZixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFFUSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUh0QjtFQU1RLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBS1kseUJBQXdCLEVBQUE7O0FBTHBDO0lBUVksc0NBQXFDO0lBQ3JDLDJCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTs7QUFNOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjMzcyBjdWJpYy1iZXppZXIoLjY4NSwuMDQ3MywuMzQ2LDEpO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xuXG59XG5cbi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxYzMzZjA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG59XG5cbi5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDE4cHggMDtcbiAgICBib3gtc2hhZG93OiAwIDZweCAwIDAgcmdiYSgwLDAsMCwuMDEpLCAwIDE1cHggMzJweCAwIHJnYmEoMCwwLDAsLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5oNDAwIHtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLm0yMCB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuLm1yMTAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tdDEwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm10MjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXQyNSB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5wbDEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucGwyMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmluZGljYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmJiYjIxY2Y7XG59XG5cbi50YXJnZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmluZGljYXRvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cbiAgICAudW5pdHkge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIGNvbG9yIDogIzg1NjQwNDtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbn1cblxuLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0YjVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uYWxlcnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRhdGUge1xuICAgIC50b2RheSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNGY2ZThkO1xuICAgIH1cbiAgICAudXBkYXRlTGFzdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG4ucmVsb2FkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5zZWFyY2gge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAuZm9ybS1ncm91cCB7XG5cbiAgICAgICAgLnRleHQtbXV0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICNiNWJjYzEhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjdhIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDIxYzMzZjAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxufVxuLmNvbnRlbnRTZWFyY2h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uanVzdGlmeS1jb250ZW50LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(config) {
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ffc107']
        };
        this.today = Date.now();
        this.view = [700, 400];
        this.data = [
            {
                "name": " V1",
                "series": [
                    {
                        "value": 6969,
                        "name": "Lunes"
                    },
                    {
                        "value": 5177,
                        "name": "Martes"
                    },
                    {
                        "value": 5626,
                        "name": "Miércoles"
                    },
                    {
                        "value": 2743,
                        "name": "Jueves"
                    },
                    {
                        "value": 2694,
                        "name": "Viernes"
                    }
                ],
                "total": 23209
            },
            {
                "name": "V2",
                "series": [
                    {
                        "value": 3748,
                        "name": "Lunes"
                    },
                    {
                        "value": 3105,
                        "name": "Martes"
                    },
                    {
                        "value": 4032,
                        "name": "Miércoles"
                    },
                    {
                        "value": 6899,
                        "name": "Jueves"
                    },
                    {
                        "value": 2793,
                        "name": "Viernes"
                    }
                ],
                "total": 20577
            },
            {
                "name": "V3",
                "series": [
                    {
                        "value": 6040,
                        "name": "Lunes"
                    },
                    {
                        "value": 2757,
                        "name": "Martes"
                    },
                    {
                        "value": 5341,
                        "name": "Miércoles"
                    },
                    {
                        "value": 5273,
                        "name": "Jueves"
                    },
                    {
                        "value": 6242,
                        "name": "Viernes"
                    }
                ],
                "total": 25653
            },
            {
                "name": "V4",
                "series": [
                    {
                        "value": 4236,
                        "name": "Lunes"
                    },
                    {
                        "value": 2262,
                        "name": "Martes"
                    },
                    {
                        "value": 3252,
                        "name": "Miércoles"
                    },
                    {
                        "value": 5489,
                        "name": "Jueves"
                    },
                    {
                        "value": 6819,
                        "name": "Viernes"
                    }
                ],
                "total": 22058
            },
            {
                "name": "V5",
                "series": [
                    {
                        "value": 2119,
                        "name": "Lunes"
                    },
                    {
                        "value": 5393,
                        "name": "Martes"
                    },
                    {
                        "value": 5113,
                        "name": "Miércoles"
                    },
                    {
                        "value": 5993,
                        "name": "Jueves"
                    },
                    {
                        "value": 4123,
                        "name": "Viernes"
                    }
                ],
                "total": 22741
            }
        ];
        this.data2 = [
            {
                "name": " V1",
                "series": [
                    {
                        "value": 3761,
                        "name": "Lunes"
                    },
                    {
                        "value": 2081,
                        "name": "Martes"
                    },
                    {
                        "value": 4425,
                        "name": "Miércoles"
                    },
                    {
                        "value": 6590,
                        "name": "Jueves"
                    },
                    {
                        "value": 3441,
                        "name": "Viernes"
                    }
                ],
                "total": 20298
            },
            {
                "name": "V2",
                "series": [
                    {
                        "value": 5899,
                        "name": "Lunes"
                    },
                    {
                        "value": 3042,
                        "name": "Martes"
                    },
                    {
                        "value": 3127,
                        "name": "Miércoles"
                    },
                    {
                        "value": 3552,
                        "name": "Jueves"
                    },
                    {
                        "value": 3552,
                        "name": "Viernes"
                    }
                ],
                "total": 19172
            },
            {
                "name": "V3",
                "series": [
                    {
                        "value": 3531,
                        "name": "Lunes"
                    },
                    {
                        "value": 2602,
                        "name": "Martes"
                    },
                    {
                        "value": 3100,
                        "name": "Miércoles"
                    },
                    {
                        "value": 2998,
                        "name": "Jueves"
                    },
                    {
                        "value": 3500,
                        "name": "Viernes"
                    }
                ],
                "total": 15731
            },
            {
                "name": "V4",
                "series": [
                    {
                        "value": 2817,
                        "name": "Lunes"
                    },
                    {
                        "value": 2562,
                        "name": "Martes"
                    },
                    {
                        "value": 3220,
                        "name": "Miércoles"
                    },
                    {
                        "value": 5528,
                        "name": "Jueves"
                    },
                    {
                        "value": 4428,
                        "name": "Viernes"
                    }
                ],
                "total": 18555
            },
            {
                "name": "V5",
                "series": [
                    {
                        "value": 5763,
                        "name": "Lunes"
                    },
                    {
                        "value": 6391,
                        "name": "Martes"
                    },
                    {
                        "value": 3249,
                        "name": "Miércoles"
                    },
                    {
                        "value": 3982,
                        "name": "Jueves"
                    },
                    {
                        "value": 6982,
                        "name": "Viernes"
                    }
                ],
                "total": 26367
            }
        ];
        this.data3 = [
            {
                "name": " V1",
                "series": [
                    {
                        "value": 3468,
                        "name": "Lunes"
                    },
                    {
                        "value": 2126,
                        "name": "Martes"
                    },
                    {
                        "value": 2126,
                        "name": "Miércoles"
                    },
                    {
                        "value": 4829,
                        "name": "Jueves"
                    },
                    {
                        "value": 4568,
                        "name": "Viernes"
                    }
                ],
                "total": 17117
            },
            {
                "name": "V2",
                "series": [
                    {
                        "value": 5899,
                        "name": "Lunes"
                    },
                    {
                        "value": 5792,
                        "name": "Martes"
                    },
                    {
                        "value": 4525,
                        "name": "Miércoles"
                    },
                    {
                        "value": 3123,
                        "name": "Jueves"
                    },
                    {
                        "value": 2944,
                        "name": "Viernes"
                    }
                ],
                "total": 22283
            },
            {
                "name": "V3",
                "series": [
                    {
                        "value": 6258,
                        "name": "Lunes"
                    },
                    {
                        "value": 2322,
                        "name": "Martes"
                    },
                    {
                        "value": 4145,
                        "name": "Miércoles"
                    },
                    {
                        "value": 3507,
                        "name": "Jueves"
                    },
                    {
                        "value": 3149,
                        "name": "Viernes"
                    }
                ],
                "total": 19381
            },
            {
                "name": "V4",
                "series": [
                    {
                        "value": 6989,
                        "name": "Lunes"
                    },
                    {
                        "value": 4984,
                        "name": "Martes"
                    },
                    {
                        "value": 2903,
                        "name": "Miércoles"
                    },
                    {
                        "value": 4076,
                        "name": "Jueves"
                    },
                    {
                        "value": 5539,
                        "name": "Viernes"
                    }
                ],
                "total": 24491
            },
            {
                "name": "V5",
                "series": [
                    {
                        "value": 4945,
                        "name": "Lunes"
                    },
                    {
                        "value": 6076,
                        "name": "Martes"
                    },
                    {
                        "value": 3006,
                        "name": "Miércoles"
                    },
                    {
                        "value": 2120,
                        "name": "Jueves"
                    },
                    {
                        "value": 4176,
                        "name": "Viernes"
                    }
                ],
                "total": 20323
            }
        ];
        config.justify = 'center';
        config.type = 'pills';
    }
    Object.defineProperty(HomeComponent.prototype, "content", {
        set: function (content) {
            this.tabSet = content;
        },
        enumerable: true,
        configurable: true
    });
    ;
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log(this.tabSet.activeId);
    };
    HomeComponent.prototype.deleteTab = function () {
        // currently selected tab id
        console.log(this.tabSet.activeId);
    };
    HomeComponent.prototype.onTabChange = function ($event) {
        console.log($event);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.plantas = [
            {
                nombre: 'Planta 1',
                id: 1
            },
            {
                nombre: 'Planta 2',
                id: 2
            },
            {
                nombre: 'Planta 3',
                id: 3
            }
        ];
    };
    ;
    HomeComponent.prototype.onSelect = function (id) {
    };
    HomeComponent.prototype.updateData = function () {
        this.update = this.today;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HomeComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [HomeComponent])
    ], HomeComponent.prototype, "content", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabsetConfig"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/practicas/testGestalab/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map