require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-ui-sidedrawer");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      transition: new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__["SlideInOnTopTransition"]()
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteDiagnosticos.vue");
/* harmony import */ var _ReporteCitas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ReporteCitas.vue");
/* harmony import */ var _Terapias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Terapias.vue");
/* harmony import */ var _Progreso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Progreso.vue");
/* harmony import */ var _Notificaciones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Notificaciones.vue");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_6___default.a.getInstance().selectedPage$.subscribe(selectedPage => this.selectedPage = selectedPage);
    console.log(this.selectedPage);
  },

  data() {
    return {
      ReporteDiagnosticos: _ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_0__["default"],
      ReporteCitas: _ReporteCitas__WEBPACK_IMPORTED_MODULE_1__["default"],
      Terapias: _Terapias__WEBPACK_IMPORTED_MODULE_2__["default"],
      Progreso: _Progreso__WEBPACK_IMPORTED_MODULE_3__["default"],
      Notificaciones: _Notificaciones__WEBPACK_IMPORTED_MODULE_4__["default"],
      selectedPage: "",
      usuarios: [{
        nombre: "Francisco Santiago Morales Roa",
        expediente: "1659-09"
      }]
    };
  },

  components: {
    ReporteDiagnosticos: _ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_0__["default"],
    ReporteCitas: _ReporteCitas__WEBPACK_IMPORTED_MODULE_1__["default"],
    Terapias: _Terapias__WEBPACK_IMPORTED_MODULE_2__["default"],
    Progreso: _Progreso__WEBPACK_IMPORTED_MODULE_3__["default"],
    Notificaciones: _Notificaciones__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      });
      _shared_utils__WEBPACK_IMPORTED_MODULE_5__["closeDrawer"]();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: [{
        title: 'Diagnóstico',
        children: [{
          text: 'Retardo de lenguaje anártico moderado '
        }, {
          text: 'Audición normal'
        }, {
          text: 'Audición bilateral'
        }]
      }, {
        title: '2 Title',
        children: [{
          text: 'Me'
        }, {
          text: 'Stop'
        }]
      }, {
        title: '3 Title',
        footer: '30',
        headerText: 'Third',
        footerText: '6',
        children: [{
          text: 'This'
        }, {
          text: 'Thing'
        }]
      }, {
        title: '4 Title',
        footer: '40',
        headerText: 'Fourth',
        footerText: '7',
        children: [{
          text: 'Now'
        }, {
          text: 'Please'
        }]
      }]
    };
  },

  methods: {
    goBack: function goBack() {
      this.$navigateBack();
    },
    expandAll: function expandAll() {
      this.$refs.accordion.nativeView.expandAll();
    },
    collapseAll: function collapseAll() {
      this.$refs.accordion.nativeView.collapseAll();
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default.a.getInstance().updateSelectedPage("Settings");
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-calendar");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_2___default.a.getInstance().updateSelectedPage("Search");
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    }

  },

  data() {
    return {
      progresos: [{
        bloque: "Bloque 4",
        inicio: "2018/08/30",
        fin: "2019/10/22"
      }, {
        bloque: "Bloque 3",
        inicio: "2019/03/10",
        fin: "2019/08/30"
      }, {
        bloque: "Bloque 2",
        inicio: "2019/01/15",
        fin: "2019/03/10"
      }, {
        bloque: "Bloque 1",
        inicio: "2018/11/15",
        fin: "2018/01/15"
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-calendar");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/vue");
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






nativescript_vue__WEBPACK_IMPORTED_MODULE_4___default.a.use(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_5___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default.a.getInstance().updateSelectedPage("ReporteCitas");
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    },

    indexChange: function indexChange(args) {
      var newIndex = args.value;
      console.log('Current tab index: ' + newIndex);
    },

    onDateSelected(args) {
      console.log("onDateSelected: " + args.date);
    },

    onDateDeselected(args) {
      console.log("onDateDeselected: " + args.date);
    },

    onNavigatedToDate(args) {
      console.log("onNavigatedToDate: " + args.date);
    },

    onNavigatingToDateStarted(args) {
      console.log("onNavigatingToDateStarted: " + args.date);
    },

    onViewModeChanged(args) {
      console.log("onViewModeChanged: " + args.newValue);
    }

  },

  created() {
    // Creating dummy events
    var events = [];
    var now = new Date();
    var startDate;
    var endDate;
    var event;
    var colors = [new color__WEBPACK_IMPORTED_MODULE_3__["Color"](200, 188, 26, 214), new color__WEBPACK_IMPORTED_MODULE_3__["Color"](220, 255, 109, 130), new color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 55, 45, 255), new color__WEBPACK_IMPORTED_MODULE_3__["Color"](199, 17, 227, 10), new color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 255, 54, 3)];

    for (var i = 1; i < 10; i++) {
      startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 14);
      endDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 16);
      event = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEvent"]("Terapia " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
      events.push(event);

      if (i % 3 == 0) {
        event = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEvent"]("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        events.push(event);
      }
    }

    this.calendarEvents = events;
  },

  data() {
    return {
      calendarEvents: [],
      items: [{
        fecha: "14/02/2020",
        idExpediente: "LTF18",
        nombre: "José Carlos Huerta Gonzáles",
        horaInicio: "12:00",
        horaFin: "13:30"
      }, {
        fecha: "21/02/2020",
        idExpediente: "LTF18",
        nombre: "José Carlos Huerta Gonzáles",
        horaInicio: "12:00",
        horaFin: "13:30"
      }, {
        fecha: "28/02/2020",
        idExpediente: "LTF18",
        nombre: "José Carlos Huerta Gonzáles",
        horaInicio: "12:00",
        horaFin: "13:30"
      }],
      citas: [{
        Citas: "Citas de asistencia",
        Cantidad: 3
      }, {
        Citas: "Citas perdidas",
        Cantidad: 1
      }, {
        Citas: "Citas restantes",
        Cantidad: 8
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_accordion_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-accordion/vue/index.js");
/* harmony import */ var nativescript_accordion_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_accordion_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Multi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Multi.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(nativescript_accordion_vue__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default.a.getInstance().updateSelectedPage("Home");
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    },

    goBack: function goBack() {
      this.$navigateBack();
    },
    goToMulti: function goToMulti() {
      this.$navigateTo(_Multi__WEBPACK_IMPORTED_MODULE_4__["default"]);
    },
    goCollapse: function goCollapse(args) {
      if (this.showCollapseBox) this.showCollapseBox = false;else this.showCollapseBox = true;
    },
    goCollapse2: function goCollapse2(args) {
      if (this.showCollapseBox2) this.showCollapseBox2 = false;else this.showCollapseBox2 = true;
    },
    goCollapse3: function goCollapse3(args) {
      if (this.showCollapseBox3) this.showCollapseBox3 = false;else this.showCollapseBox3 = true;
    },
    goCollapse4: function goCollapse4(args) {
      if (this.showCollapseBox4) this.showCollapseBox4 = false;else this.showCollapseBox4 = true;
    }
  },

  data() {
    return {
      diagnosticos: [{
        diagnostico1: 'Retardo de lenguaje anártico moderado',
        diagnostico2: 'Audición normal',
        diagnostico3: 'Audución bilateral'
      }],
      terapias: [{
        terapia1: '1. Ejercicios de respiración y relajación.',
        terapia2: '2. Ejercicios prefonatorios y praxias orofaciales.',
        terapia3: '3. Ejercicios para fonemas /r/, /rr/, /l/, /ch/, /f/, /k/, /s/, intermedia',
        terapia4: '4. Trabajar aumento de vocabulario acorde a la edad y clasificación por campos semánticos. Hacer láminas con figuras de buen tamaño para que las aprenda a escribir',
        terapia5: '5. Trabajar estimulación de aspecto pragmático mediante cantos, juegos y cuentos.'
      }],
      planTrabajo: [{
        plan1: '1. Continuar terapia de lenguaje y aprendizaje semanal',
        plan2: '2. Cita al terminar terapias'
      }],
      showCollapseBox: false,
      showCollapseBox2: false,
      showCollapseBox3: false,
      showCollapseBox4: false
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_1___default.a.getInstance().updateSelectedPage("Featured");
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    onDrawerButtonTap() {
      _shared_utils__WEBPACK_IMPORTED_MODULE_0__["showDrawer"]();
    }

  },

  data() {
    return {
      terapias: [{
        idTerapia: 1,
        terapia: "Respiración y relajación",
        img: "~/images/respiracion.jpg"
      }, {
        idTerapia: 2,
        terapia: "Prefonatorios",
        img: "~/images/prefonatorios.jpg"
      }, {
        idTerapia: 3,
        terapia: "Praxias orofaciales",
        img: "~/images/praxias.jpg"
      }, {
        terapia: "Ejercicios de fonemas",
        img: "~/images/fonemas.jpg"
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-45ba5ed4 {}/* Forms */\n/**\n * Blue variable overrides\n **/\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-38f02606 {}/* Forms */\n/**\n * Blue variable overrides\n **/\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/DrawerContent.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=style&index=0&id=ee8bcd36&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-ee8bcd36 {}/* Forms */\n/**\n * Blue variable overrides\n **/\nActionBar[data-v-ee8bcd36] {\n  background-color: black;\n}\n.titulo[data-v-ee8bcd36] {\n  font-size: 20px;\n}\n.subtitulo[data-v-ee8bcd36] {\n  margin-top: 70px;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Notificaciones.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=style&index=0&id=572c63f8&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-572c63f8 {}/* Forms */\n/**\n * Blue variable overrides\n **/\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Progreso.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=style&index=0&id=c118b4ac&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-c118b4ac {}/* Forms */\n/**\n * Blue variable overrides\n **/\nActionBar[data-v-c118b4ac] {\n  background-color: black;\n}\nTabView[data-v-c118b4ac] {\n  padding-bottom: 20px;\n}\n.lista[data-v-c118b4ac] {\n  color: white;\n  background-color: #48A1CA;\n  font-size: 14px;\n}\n.progressbar[data-v-c118b4ac] {\n  height: 50;\n  margin: 10;\n  border-radius: 10;\n  border-color: black;\n  border-width: 1;\n}\n.progressbar-value[data-v-c118b4ac] {\n  background: #337ab7;\n}\n.progressbar-negative-value[data-v-c118b4ac] {\n  background: red;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/ReporteCitas.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=style&index=0&id=eaac71de&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-eaac71de {}/* Forms */\n/**\n * Blue variable overrides\n **/\n.message[data-v-eaac71de] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.title[data-v-eaac71de] {\n  font-size: 20px;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/ReporteDiagnosticos.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=style&index=0&id=a7a681b4&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes empty-data-v-a7a681b4 {}/* Forms */\n/**\n * Blue variable overrides\n **/\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Terapias.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=style&index=0&id=85618724&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nActionBar[data-v-85618724] {\n\tbackground-color: #53ba82;\n\tcolor: #ffffff;\n}\n.message[data-v-85618724] {\n\tvertical-align: center;\n\ttext-align: center;\n\tfont-size: 20;\n\tcolor: #333333;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Multi.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "RadSideDrawer",
    {
      ref: "drawer",
      attrs: {
        drawerLocation: "Left",
        gesturesEnabled: "true",
        drawerTransition: _vm.transition
      }
    },
    [
      _c(
        "StackLayout",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:drawerContent",
              arg: "drawerContent",
              modifiers: {}
            }
          ],
          attrs: { backgroundColor: "#ffffff" }
        },
        [_vm._t("drawerContent")],
        2
      ),
      _c(
        "Frame",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:mainContent",
              arg: "mainContent",
              modifiers: {}
            }
          ],
          ref: "drawerMainContent"
        },
        [_vm._t("mainContent")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "GridLayout",
    { staticClass: "nt-drawer__content", attrs: { rows: "auto, *" } },
    [
      _c(
        "StackLayout",
        {
          staticClass: "nt-drawer__header",
          attrs: { row: "0", backgroundColor: "black" }
        },
        [
          _c("Image", {
            staticClass: "nt-drawer__header-image fas t-36",
            attrs: { "src.decode": "font://&#xf2bd;" }
          }),
          _c("Label", {
            staticClass: "nt-drawer__header-brand",
            attrs: { text: "Francisco Santiago Morales Roa" }
          }),
          _c("Label", {
            staticClass: "nt-drawer__header-footnote",
            attrs: { text: "Exp: 1659-09" }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        { staticClass: "nt-drawer__body", attrs: { row: "1" } },
        [
          _c(
            "StackLayout",
            [
              _c(
                "GridLayout",
                {
                  class:
                    "nt-drawer__list-item" +
                    (_vm.selectedPage === "ReporteDiagnosticos"
                      ? " -selected"
                      : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.onNavigationItemTap(_vm.ReporteDiagnosticos)
                    }
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "res://reportediagnostico",
                      width: "40",
                      height: "40",
                      verticalAlignment: "center"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-r-10",
                    attrs: { col: "1", text: "Reporte de diagnósticos" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "nt-drawer__list-item" +
                    (_vm.selectedPage === "ReporteCitas" ? " -selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.onNavigationItemTap(_vm.ReporteCitas)
                    }
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "res://reportecitas",
                      width: "40",
                      height: "40",
                      verticalAlignment: "center"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-r-10",
                    attrs: { col: "1", text: "Reporte de citas" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "nt-drawer__list-item" +
                    (_vm.selectedPage === "Progreso" ? " -selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.onNavigationItemTap(_vm.Progreso)
                    }
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "res://progresopaciente",
                      width: "40",
                      height: "40",
                      verticalAlignment: "center"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-r-10",
                    attrs: { col: "1", text: "Progreso del paciente" }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  class:
                    "nt-drawer__list-item" +
                    (_vm.selectedPage === "Terapias" ? " -selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.onNavigationItemTap(_vm.Terapias)
                    }
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "res://terapias",
                      width: "40",
                      height: "40",
                      verticalAlignment: "center"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-r-10",
                    attrs: { col: "1", text: "Terapias" }
                  })
                ],
                1
              ),
              _c("StackLayout", { staticClass: "hr" }),
              _c(
                "GridLayout",
                {
                  class:
                    "nt-drawer__list-item" +
                    (_vm.selectedPage === "Notificaciones" ? " -selected" : ""),
                  attrs: { columns: "auto, *" },
                  on: {
                    tap: function($event) {
                      return _vm.onNavigationItemTap(_vm.Notificaciones)
                    }
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "res://notificaciones",
                      width: "40",
                      height: "40",
                      verticalAlignment: "center"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-r-10",
                    attrs: { col: "1", text: "Notificaciones" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=template&id=85618724&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Multi Templates" } },
        [
          _c("NavigationButton", {
            attrs: { text: "Go back", "android.systemIcon": "ic_menu_back" },
            on: { tap: _vm.goBack }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        { attrs: { columns: "20,*", rows: "auto,auto,*" } },
        [
          _c("Button", {
            attrs: { row: "0", col: "1", text: "Expand All" },
            on: { tap: _vm.expandAll }
          }),
          _c("Button", {
            attrs: { row: "1", col: "1", text: "Collapse All" },
            on: { tap: _vm.collapseAll }
          }),
          _c(
            "Accordion",
            {
              ref: "accordion",
              attrs: {
                row: "2",
                col: "1",
                height: "100%",
                allowMultiple: "true",
                childItems: "children",
                items: _vm.items,
                "+alias": "item"
              }
            },
            [
              _c("v-template", {
                attrs: { if: "$odd", name: "header-odd" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        [
                          _c("Label", {
                            attrs: {
                              backgroundColor: "green",
                              text: item.headerText
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$even", name: "header-even" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        [
                          _c("Label", {
                            attrs: {
                              backgroundColor: "orange",
                              text: item.headerText
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$odd", name: "title-odd" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { backgroundColor: "white" } },
                        [_c("Label", { attrs: { text: item.title } })],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$even", name: "title-even" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { backgroundColor: "white" } },
                        [_c("Label", { attrs: { text: item.title } })],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$odd", name: "content-odd" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        [
                          _c("Label", {
                            attrs: { height: "200", text: item.text }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$even", name: "content-even" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { backgroundColor: "red" } },
                        [
                          _c("Label", {
                            attrs: {
                              backgroundColor: "yellow",
                              text: item.text
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$odd", name: "footer-odd" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { backgroundColor: "yellow" } },
                        [_c("Label", { attrs: { text: item.footerText } })],
                        1
                      )
                    }
                  }
                ])
              }),
              _c("v-template", {
                attrs: { if: "$even", name: "footer-even" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "StackLayout",
                        { attrs: { backgroundColor: "blue" } },
                        [_c("Label", { attrs: { text: item.footerText } })],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar", attrs: { title: "Notificaciones" } },
        [
          _c("NavigationButton", {
            attrs: { "ios:visibility": "collapsed", icon: "res://menu" },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("ActionItem", {
            attrs: {
              icon: "res://menu",
              "android:visibility": "collapsed",
              "ios.position": "left"
            },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: { text: "Notificaciones" }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical" } },
            [
              _c(
                "GridLayout",
                {
                  attrs: {
                    rows: "30, 50,30, 50,30, 50,30, 50,30",
                    columns: "20,280, auto"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "titulo",
                    attrs: {
                      textWrap: "true",
                      row: "1",
                      col: "1",
                      text: "Terapias"
                    }
                  }),
                  _c("Switch", {
                    attrs: {
                      row: "1",
                      col: "2",
                      checked: "false",
                      backgroundColor: "green"
                    }
                  }),
                  _c("Label", {
                    staticClass: "subtitulo",
                    attrs: {
                      row: "1",
                      col: "1",
                      text: "Recibe notificaciones diarias para ver vídeos"
                    }
                  }),
                  _c("Label", {
                    staticClass: "titulo",
                    attrs: {
                      textWrap: "true",
                      row: "3",
                      col: "1",
                      text: "Progreso del paciente"
                    }
                  }),
                  _c("Switch", {
                    attrs: {
                      row: "3",
                      col: "2",
                      checked: "false",
                      backgroundColor: "green"
                    }
                  }),
                  _c("Label", {
                    staticClass: "subtitulo",
                    attrs: {
                      row: "3",
                      col: "1",
                      text: "Recibe notificaciones al recibir el avance"
                    }
                  }),
                  _c("Label", {
                    staticClass: "titulo",
                    attrs: {
                      textWrap: "true",
                      row: "5",
                      col: "1",
                      text: "Citas"
                    }
                  }),
                  _c("Switch", {
                    attrs: {
                      row: "5",
                      col: "2",
                      checked: "false",
                      backgroundColor: "green"
                    }
                  }),
                  _c("Label", {
                    staticClass: "subtitulo",
                    attrs: {
                      row: "5",
                      col: "1",
                      text: "Recibe más de una notificación"
                    }
                  }),
                  _c("Label", {
                    staticClass: "titulo",
                    attrs: {
                      textWrap: "true",
                      row: "7",
                      col: "1",
                      text: "Reportes de progreso"
                    }
                  }),
                  _c("Switch", {
                    attrs: {
                      row: "7",
                      col: "2",
                      checked: "false",
                      backgroundColor: "green"
                    }
                  }),
                  _c("Label", {
                    staticClass: "subtitulo",
                    attrs: {
                      row: "7",
                      col: "1",
                      text: "Recibe notificaciones al llegar el reporte"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar", attrs: { backgroundColor: "black" } },
        [
          _c("NavigationButton", {
            attrs: { "ios:visibility": "collapsed", icon: "res://menu" },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("ActionItem", {
            attrs: {
              icon: "res://menu",
              "android:visibility": "collapsed",
              "ios.position": "left"
            },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: { text: "Progreso del paciente" }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "ListView",
            { attrs: { items: _vm.progresos, "+alias": "progreso" } },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var progreso = ref.progreso
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        { attrs: { rows: "20,25,25" } },
                        [
                          _c(
                            "Label",
                            { attrs: { row: "1", textWrap: "true" } },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    attrs: { text: progreso.bloque }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "Label",
                            { attrs: { row: "2", textWrap: "true" } },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    attrs: { text: "Fecha: Del " }
                                  }),
                                  _c("Span", {
                                    attrs: { text: progreso.inicio }
                                  }),
                                  _c("Span", { attrs: { text: " al " } }),
                                  _c("Span", { attrs: { text: progreso.fin } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar" },
        [
          _c("NavigationButton", {
            attrs: { "ios:visibility": "collapsed", icon: "res://menu" },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("ActionItem", {
            attrs: {
              icon: "res://menu",
              "android:visibility": "collapsed",
              "ios.position": "left"
            },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: { text: "Reporte de citas" }
          })
        ],
        1
      ),
      _c(
        "TabView",
        { on: { selectedIndexChange: _vm.indexChange } },
        [
          _c(
            "TabViewItem",
            { attrs: { title: "Progreso", iconSource: "res://progreso" } },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "30,30,200,20,20", columns: "20, *, 20" } },
                [
                  _c("Label", {
                    attrs: { row: "1", col: "1", text: "Bloque 4" }
                  }),
                  _c(
                    "RadPieChart",
                    { attrs: { allowAnimation: "true", row: "2", col: "1" } },
                    [
                      _c("DonutSeries", {
                        directives: [
                          { name: "tkPieSeries", rawName: "v-tkPieSeries" }
                        ],
                        attrs: {
                          seriesName: "pie",
                          selectionMode: "DataPoint",
                          expandRadius: "0.4",
                          outerRadiusFactor: "0.7",
                          valueProperty: "Cantidad",
                          legendLabel: "Citas",
                          showLabels: "true",
                          items: _vm.citas
                        }
                      }),
                      _c("RadLegendView", {
                        directives: [
                          { name: "tkPieLegend", rawName: "v-tkPieLegend" }
                        ],
                        attrs: {
                          position: "Right",
                          title: "Citas",
                          offsetOrigin: "TopRight",
                          width: "110",
                          enableSelection: "true"
                        }
                      }),
                      _c(
                        "Palette",
                        {
                          directives: [
                            { name: "tkPiePalette", rawName: "v-tkPiePalette" }
                          ],
                          attrs: { seriesName: "pie" }
                        },
                        [
                          _c("PaletteEntry", {
                            attrs: {
                              tkPiePaletteEntry: "",
                              fillColor: "green",
                              strokeColor: "green"
                            }
                          }),
                          _c("PaletteEntry", {
                            attrs: {
                              tkPiePaletteEntry: "",
                              fillColor: "orange",
                              strokeColor: "orange"
                            }
                          }),
                          _c("PaletteEntry", {
                            attrs: {
                              tkPiePaletteEntry: "",
                              fillColor: "gray",
                              strokeColor: "gray"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabViewItem",
            { attrs: { title: "Calendario" } },
            [
              _c("RadCalendar", {
                attrs: {
                  id: "calendar",
                  eventSource: _vm.calendarEvents,
                  eventsViewMode: "Inline",
                  selectionMode: "Single",
                  viewMode: "Month",
                  transitionMode: "Stack",
                  locale: "en-US"
                },
                on: {
                  dateSelected: _vm.onDateSelected,
                  dateDeselected: _vm.onDateDeselected,
                  navigatedToDate: _vm.onNavigatedToDate,
                  navigatingToDateStarted: _vm.onNavigatingToDateStarted,
                  viewModeChanged: _vm.onViewModeChanged
                }
              })
            ],
            1
          ),
          _c(
            "TabViewItem",
            { attrs: { title: "Lista de citas" } },
            [
              _c(
                "ListView",
                { attrs: { items: _vm.items, "+alias": "item" } },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "GridLayout",
                            {
                              attrs: { columns: "80,50,200,50", rows: "28,28" }
                            },
                            [
                              _c("Label", {
                                attrs: { row: "0", col: "0", text: item.fecha }
                              }),
                              _c("Label", {
                                staticClass: "lista",
                                attrs: {
                                  row: "0",
                                  col: "1",
                                  text: item.idExpediente
                                }
                              }),
                              _c("Label", {
                                staticClass: "lista",
                                attrs: { row: "0", col: "2", text: item.nombre }
                              }),
                              _c("Label", {
                                staticClass: "lista",
                                attrs: {
                                  row: "1",
                                  col: "1",
                                  text: item.horaInicio
                                }
                              }),
                              _c("Label", {
                                staticClass: "lista",
                                attrs: {
                                  row: "1",
                                  col: "2",
                                  text: item.horaFin
                                }
                              })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar", attrs: { backgroundColor: "black" } },
        [
          _c("NavigationButton", {
            attrs: { "ios:visibility": "collapsed", icon: "res://menu" },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("ActionItem", {
            attrs: {
              icon: "res://menu",
              "android:visibility": "collapsed",
              "ios.position": "left"
            },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: { text: "Reporte de dianósticos" }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c(
                "GridLayout",
                {
                  staticClass: "nt-drawer__header top",
                  attrs: {
                    rows: "0,20,20,20",
                    columns: "20,40,auto",
                    backgroundColor: "black"
                  }
                },
                [
                  _c("Image", {
                    staticClass: "nt-drawer__header-image fas",
                    attrs: {
                      row: "1",
                      col: "1",
                      "src.decode": "font://&#xf2bd;"
                    }
                  }),
                  _c("Label", {
                    staticClass: "nt-drawer__header-brand",
                    attrs: {
                      row: "1",
                      col: "2",
                      text: "Francisco Santiago Morales Roa"
                    }
                  }),
                  _c("Label", {
                    staticClass: "nt-drawer__header-brand",
                    attrs: { row: "2", col: "2", text: "Exp: 1659-09" }
                  }),
                  _c("Label", {
                    staticClass: "nt-drawer__header-brand",
                    attrs: { row: "3", col: "2", text: "5 años" }
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "m-t-20 m-l-30",
                  attrs: {
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "title",
                    attrs: { text: "Diagnóstico" },
                    on: {
                      tap: function($event) {
                        return _vm.goCollapse($event)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "ListView",
                {
                  attrs: {
                    visibility: _vm.showCollapseBox ? "visible" : "collapse",
                    items: _vm.diagnosticos,
                    "+alias": "diag"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var diag = ref.diag
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "StackLayout",
                            { attrs: { borderWidth: "1" } },
                            [
                              _c("Label", {
                                attrs: {
                                  textWrap: "true",
                                  text: diag.diagnostico1
                                }
                              }),
                              _c("Label", {
                                attrs: {
                                  textWrap: "true",
                                  text: diag.diagnostico2
                                }
                              }),
                              _c("Label", {
                                attrs: {
                                  textWrap: "true",
                                  text: diag.diagnostico3
                                }
                              })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "m-t-20 m-l-30",
                  attrs: {
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "title",
                    attrs: { text: "Terapia de lenguaje" },
                    on: {
                      tap: function($event) {
                        return _vm.goCollapse2($event)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "ListView",
                {
                  attrs: {
                    visibility: _vm.showCollapseBox2 ? "visible" : "collapse",
                    items: _vm.terapias,
                    "+alias": "ter"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var ter = ref.ter
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "StackLayout",
                            { attrs: { borderWidth: "1" } },
                            [
                              _c("Label", {
                                attrs: { textWrap: "true", text: ter.terapia1 }
                              }),
                              _c("Label", {
                                attrs: { textWrap: "true", text: ter.terapia2 }
                              }),
                              _c("Label", {
                                attrs: { textWrap: "true", text: ter.terapia3 }
                              }),
                              _c("Label", {
                                attrs: { textWrap: "true", text: ter.terapia4 }
                              }),
                              _c("Label", {
                                attrs: { textWrap: "true", text: ter.terapia5 }
                              })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "m-t-20 m-l-30",
                  attrs: {
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "title",
                    attrs: { text: "Educación especial" },
                    on: {
                      tap: function($event) {
                        return _vm.goCollapse3($event)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { borderWidth: "1" } },
                [
                  _c("Label", {
                    staticClass: "box pull-left",
                    attrs: {
                      text: "Prueba",
                      visibility: _vm.showCollapseBox3 ? "visible" : "collapse"
                    }
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "m-t-20 m-l-30",
                  attrs: {
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "title",
                    attrs: { text: "Plan de trabajo" },
                    on: {
                      tap: function($event) {
                        return _vm.goCollapse4($event)
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "ListView",
                {
                  attrs: {
                    visibility: _vm.showCollapseBox4 ? "visible" : "collapse",
                    items: _vm.planTrabajo,
                    "+alias": "plan"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var plan = ref.plan
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "StackLayout",
                            { attrs: { borderWidth: "1" } },
                            [
                              _c("Label", {
                                attrs: { textWrap: "true", text: plan.plan1 }
                              }),
                              _c("Label", {
                                attrs: { textWrap: "true", text: plan.plan2 }
                              })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar", attrs: { backgroundColor: "black" } },
        [
          _c("NavigationButton", {
            attrs: { "ios:visibility": "collapsed", icon: "res://menu" },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("ActionItem", {
            attrs: {
              icon: "res://menu",
              "android:visibility": "collapsed",
              "ios.position": "left"
            },
            on: { tap: _vm.onDrawerButtonTap }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: { text: "Terapias" }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "ListView",
            { attrs: { items: _vm.terapias, "+alias": "terapia" } },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var terapia = ref.terapia
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "FlexboxLayout",
                        { attrs: { flexDirection: "row" } },
                        [
                          _c("Image", {
                            staticClass: "thumb",
                            attrs: {
                              src: terapia.img,
                              width: "50",
                              height: "50"
                            }
                          }),
                          _c("Label", { attrs: { text: terapia.terapia } })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.js": "./app.js",
	"./app.scss": "./app.scss",
	"./shared/selected-page-service.js": "./shared/selected-page-service.js",
	"./shared/utils.js": "./shared/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");
/* harmony import */ var _components_ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ReporteDiagnosticos.vue");
/* harmony import */ var _components_DrawerContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/DrawerContent.vue");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-sidedrawer/vue");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-calendar/vue");
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        





nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5___default.a);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4___default.a); //Vue.config.silent = (TNS_ENV === 'production');

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render(h) {
    return h(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], [h(_components_DrawerContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      slot: 'drawerContent'
    }), h(_components_ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_2__["default"], {
      slot: 'mainContent'
    })]);
  }

}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"!\n * NativeScript Theme __VERSION__ (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2019 Progress Software\n * Licensed under Apache 2.0 (https://github.com/NativeScript/theme/blob/master/LICENSE)\n "},{"type":"keyframes","name":"empty","keyframes":[]},{"type":"comment","comment":" Forms "},{"type":"comment","comment":"*\n * Color classes\n * The following creates this pattern:\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\n*"},{"type":"rule","selectors":[".c-black"],"declarations":[{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".c-bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"#000"}]},{"type":"rule","selectors":[".c-white"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".c-bg-white"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".c-grey"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-bg-grey"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-grey-light"],"declarations":[{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":[".c-bg-grey-light"],"declarations":[{"type":"declaration","property":"background-color","value":"#bababa"}]},{"type":"rule","selectors":[".c-charcoal"],"declarations":[{"type":"declaration","property":"color","value":"#303030"}]},{"type":"rule","selectors":[".c-bg-charcoal"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":[".c-transparent"],"declarations":[{"type":"declaration","property":"color","value":"transparent"}]},{"type":"rule","selectors":[".c-bg-transparent"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".c-aqua"],"declarations":[{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".c-bg-aqua"],"declarations":[{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".c-blue"],"declarations":[{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".c-bg-blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".c-brown"],"declarations":[{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".c-bg-brown"],"declarations":[{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".c-forest"],"declarations":[{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".c-bg-forest"],"declarations":[{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".c-grey-dark"],"declarations":[{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-bg-grey-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-purple"],"declarations":[{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-bg-purple"],"declarations":[{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-lemon"],"declarations":[{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-bg-lemon"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-lime"],"declarations":[{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".c-bg-lime"],"declarations":[{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".c-orange"],"declarations":[{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-bg-orange"],"declarations":[{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-ruby"],"declarations":[{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-bg-ruby"],"declarations":[{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-sky"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".c-bg-sky"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".c-error"],"declarations":[{"type":"declaration","property":"color","value":"#d50000"}]},{"type":"rule","selectors":[".c-bg-error"],"declarations":[{"type":"declaration","property":"background-color","value":"#d50000"}]},{"type":"comment","comment":" Width/Height "},{"type":"rule","selectors":[".w-full"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".w-100"],"declarations":[{"type":"declaration","property":"width","value":"100"}]},{"type":"rule","selectors":[".h-full"],"declarations":[{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":[".h-100"],"declarations":[{"type":"declaration","property":"height","value":"100"}]},{"type":"comment","comment":"*\n * Margin and Padding\n * The following creates this pattern:\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\n * Same for Padding (using the 'p' abbreviation)\n * From 0, 2, 5, 10, 15, 20, 25, 30\n*"},{"type":"rule","selectors":[".m-0"],"declarations":[{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".m-t-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".m-r-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":[".m-b-0"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-l-0"],"declarations":[{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-x-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-y-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"},{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"2"}]},{"type":"rule","selectors":[".m-t-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"}]},{"type":"rule","selectors":[".m-r-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"}]},{"type":"rule","selectors":[".m-b-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-l-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-x-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"},{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-y-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"},{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-t-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"}]},{"type":"rule","selectors":[".m-r-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"}]},{"type":"rule","selectors":[".m-b-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-l-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-x-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"},{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-y-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"},{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-5"],"declarations":[{"type":"declaration","property":"margin","value":"5"}]},{"type":"rule","selectors":[".m-t-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".m-r-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"}]},{"type":"rule","selectors":[".m-b-5"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-l-5"],"declarations":[{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-x-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"},{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-y-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"},{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-8"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-t-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".m-r-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".m-b-8"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-l-8"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-x-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"},{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-y-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"},{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-10"],"declarations":[{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".m-t-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".m-r-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".m-b-10"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-l-10"],"declarations":[{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-x-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-y-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-12"],"declarations":[{"type":"declaration","property":"margin","value":"12"}]},{"type":"rule","selectors":[".m-t-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"}]},{"type":"rule","selectors":[".m-r-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"}]},{"type":"rule","selectors":[".m-b-12"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-l-12"],"declarations":[{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-x-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"},{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-y-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"},{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-15"],"declarations":[{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".m-t-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"}]},{"type":"rule","selectors":[".m-r-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"}]},{"type":"rule","selectors":[".m-b-15"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-l-15"],"declarations":[{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-x-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-y-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"},{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-16"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".m-t-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".m-r-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".m-b-16"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-l-16"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-x-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"},{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-y-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"},{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-20"],"declarations":[{"type":"declaration","property":"margin","value":"20"}]},{"type":"rule","selectors":[".m-t-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".m-r-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"}]},{"type":"rule","selectors":[".m-b-20"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-l-20"],"declarations":[{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-x-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-y-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-24"],"declarations":[{"type":"declaration","property":"margin","value":"24"}]},{"type":"rule","selectors":[".m-t-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"}]},{"type":"rule","selectors":[".m-r-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"}]},{"type":"rule","selectors":[".m-b-24"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-l-24"],"declarations":[{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-x-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"},{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-y-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"},{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-25"],"declarations":[{"type":"declaration","property":"margin","value":"25"}]},{"type":"rule","selectors":[".m-t-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"}]},{"type":"rule","selectors":[".m-r-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"}]},{"type":"rule","selectors":[".m-b-25"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-l-25"],"declarations":[{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-x-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"},{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-y-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"},{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-28"],"declarations":[{"type":"declaration","property":"margin","value":"28"}]},{"type":"rule","selectors":[".m-t-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"}]},{"type":"rule","selectors":[".m-r-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"}]},{"type":"rule","selectors":[".m-b-28"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-l-28"],"declarations":[{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-x-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"},{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-y-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"},{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-30"],"declarations":[{"type":"declaration","property":"margin","value":"30"}]},{"type":"rule","selectors":[".m-t-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"}]},{"type":"rule","selectors":[".m-r-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"}]},{"type":"rule","selectors":[".m-b-30"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".m-l-30"],"declarations":[{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-x-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"},{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-y-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"},{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".p-0"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".p-t-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".p-r-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"}]},{"type":"rule","selectors":[".p-b-0"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-l-0"],"declarations":[{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-x-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"},{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-y-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"},{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".p-t-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"}]},{"type":"rule","selectors":[".p-r-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"}]},{"type":"rule","selectors":[".p-b-2"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-l-2"],"declarations":[{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-x-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"},{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-y-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"},{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"4"}]},{"type":"rule","selectors":[".p-t-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"}]},{"type":"rule","selectors":[".p-r-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"}]},{"type":"rule","selectors":[".p-b-4"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-l-4"],"declarations":[{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-x-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"},{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-y-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"},{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-5"],"declarations":[{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".p-t-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".p-r-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"}]},{"type":"rule","selectors":[".p-b-5"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-l-5"],"declarations":[{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-x-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"},{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-y-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"},{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-8"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-t-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".p-r-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"}]},{"type":"rule","selectors":[".p-b-8"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-l-8"],"declarations":[{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-x-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"},{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-y-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-10"],"declarations":[{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".p-t-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"}]},{"type":"rule","selectors":[".p-r-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".p-b-10"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-l-10"],"declarations":[{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-x-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-y-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-12"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-t-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"}]},{"type":"rule","selectors":[".p-r-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"}]},{"type":"rule","selectors":[".p-b-12"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-l-12"],"declarations":[{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-x-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"},{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-y-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"},{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-15"],"declarations":[{"type":"declaration","property":"padding","value":"15"}]},{"type":"rule","selectors":[".p-t-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"}]},{"type":"rule","selectors":[".p-r-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"}]},{"type":"rule","selectors":[".p-b-15"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-l-15"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-x-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"},{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-y-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"},{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-16"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-t-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"}]},{"type":"rule","selectors":[".p-r-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"}]},{"type":"rule","selectors":[".p-b-16"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-l-16"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-x-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"},{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-y-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"},{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-20"],"declarations":[{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".p-t-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"}]},{"type":"rule","selectors":[".p-r-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"}]},{"type":"rule","selectors":[".p-b-20"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-l-20"],"declarations":[{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-x-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-y-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"},{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-24"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".p-t-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"}]},{"type":"rule","selectors":[".p-r-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"}]},{"type":"rule","selectors":[".p-b-24"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-l-24"],"declarations":[{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-x-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"},{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-y-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"},{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-25"],"declarations":[{"type":"declaration","property":"padding","value":"25"}]},{"type":"rule","selectors":[".p-t-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"}]},{"type":"rule","selectors":[".p-r-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"}]},{"type":"rule","selectors":[".p-b-25"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-l-25"],"declarations":[{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-x-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"},{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-y-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"},{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-28"],"declarations":[{"type":"declaration","property":"padding","value":"28"}]},{"type":"rule","selectors":[".p-t-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"}]},{"type":"rule","selectors":[".p-r-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"}]},{"type":"rule","selectors":[".p-b-28"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-l-28"],"declarations":[{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-x-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"},{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-y-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"},{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-30"],"declarations":[{"type":"declaration","property":"padding","value":"30"}]},{"type":"rule","selectors":[".p-t-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"}]},{"type":"rule","selectors":[".p-r-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"}]},{"type":"rule","selectors":[".p-b-30"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"rule","selectors":[".p-l-30"],"declarations":[{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-x-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"},{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-y-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"},{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"comment","comment":" Alignment "},{"type":"rule","selectors":[".text-left"],"declarations":[{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-lowercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"lowercase"}]},{"type":"rule","selectors":[".text-uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-capitalize"],"declarations":[{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":[".font-weight-normal"],"declarations":[{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".font-weight-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".font-italic"],"declarations":[{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"comment","comment":"*\n * Font size\n * The following creates this pattern:\n * .t-10{font-size:10}\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\n*"},{"type":"rule","selectors":[".t-10"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".t-12"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".t-14"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".t-15"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".t-16"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".t-17"],"declarations":[{"type":"declaration","property":"font-size","value":"19"}]},{"type":"rule","selectors":[".t-18"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".t-19"],"declarations":[{"type":"declaration","property":"font-size","value":"21"}]},{"type":"rule","selectors":[".t-20"],"declarations":[{"type":"declaration","property":"font-size","value":"22"}]},{"type":"rule","selectors":[".t-25"],"declarations":[{"type":"declaration","property":"font-size","value":"27"}]},{"type":"rule","selectors":[".t-30"],"declarations":[{"type":"declaration","property":"font-size","value":"32"}]},{"type":"rule","selectors":[".t-36"],"declarations":[{"type":"declaration","property":"font-size","value":"38"}]},{"type":"rule","selectors":[".h1",".h2",".h3",".h4",".h5",".h6"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"color","value":"#262626"}]},{"type":"rule","selectors":[".ns-dark .h1",".ns-dark .h2",".ns-dark .h3",".ns-dark .h4",".ns-dark .h5",".ns-dark .h6"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".body",".body2",".footnote"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".ns-dark .body",".ns-dark .body2",".ns-dark .footnote"],"declarations":[{"type":"declaration","property":"color","value":"#b3b3b3"}]},{"type":"rule","selectors":[".h1"],"declarations":[{"type":"declaration","property":"font-size","value":"32"}]},{"type":"rule","selectors":[".h2"],"declarations":[{"type":"declaration","property":"font-size","value":"22"}]},{"type":"rule","selectors":[".h3"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".h4"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".h5"],"declarations":[{"type":"declaration","property":"font-size","value":"11"}]},{"type":"rule","selectors":[".h6"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":[".body"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".body2"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".footnote"],"declarations":[{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".ns-android .h1"],"declarations":[{"type":"declaration","property":"font-size","value":"34"}]},{"type":"rule","selectors":[".ns-android .h2"],"declarations":[{"type":"declaration","property":"font-size","value":"24"}]},{"type":"rule","selectors":[".ns-android .h3"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".ns-android .h5"],"declarations":[{"type":"declaration","property":"font-size","value":"11"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".ns-android .body2"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".img-rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".img-circle"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":[".img-thumbnail"],"declarations":[{"type":"declaration","property":"border-radius","value":"0"}]},{"type":"rule","selectors":[".invisible"],"declarations":[{"type":"declaration","property":"visibility","value":"collapse"}]},{"type":"rule","selectors":[".pull-left"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":[".pull-right"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"}]},{"type":"rule","selectors":[".m-x-auto"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".m-y-auto"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".text-primary"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".text-danger"],"declarations":[{"type":"declaration","property":"color","value":"#d50000"}]},{"type":"rule","selectors":[".bg-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".bg-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#d50000"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".ns-modal",".ns-root"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"font-family","value":"sans-serif"},{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".ns-dark.ns-modal",".ns-dark.ns-root"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".-hidden",".hidden"],"declarations":[{"type":"declaration","property":"visibility","value":"collapsed"}]},{"type":"rule","selectors":[".-rounded",".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".-circle"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"comment","comment":" Dividers "},{"type":"rule","selectors":[".hr"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"margin","value":"9 0 10"},{"type":"declaration","property":"border-width","value":"0 0 1"},{"type":"declaration","property":"border-style","value":"solid"}]},{"type":"rule","selectors":[".text-muted"],"declarations":[{"type":"declaration","property":"color","value":"#ace4ff"}]},{"type":"rule","selectors":[".ns-dark .text-muted"],"declarations":[{"type":"declaration","property":"color","value":"#446f83"}]},{"type":"rule","selectors":["Label > *","Label > * > *","Button > *","Button > * > *","TextField > *","TextField > * > *","TextView > *","TextView > * > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["ListView","RadListView"],"declarations":[{"type":"declaration","property":"min-height","value":"100"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"min-height","value":"20"}]},{"type":"rule","selectors":[".nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":["Button",".nt-button"],"declarations":[{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"border-color","value":"transparent"},{"type":"declaration","property":"min-width","value":"64"},{"type":"declaration","property":"height","value":"52"},{"type":"declaration","property":"padding","value":"0 5 0 5"},{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin","value":"8 16 8 16"}]},{"type":"rule","selectors":[".ns-ios Button",".ns-ios .nt-button"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-width","value":"0"}]},{"type":"rule","selectors":[".ns-android Button",".ns-android .nt-button"],"declarations":[{"type":"declaration","property":"margin","value":"4 12"}]},{"type":"rule","selectors":["Button.-outline",".nt-button.-outline"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-width","value":"1"}]},{"type":"rule","selectors":[".ns-android Button.-outline",".ns-android .nt-button.-outline"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"}]},{"type":"rule","selectors":["Button.-rounded-sm","Button.-rounded-lg",".nt-button.-rounded-sm",".nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".ns-android Button.-rounded-sm",".ns-android Button.-rounded-lg",".ns-android .nt-button.-rounded-sm",".ns-android .nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"margin","value":"8 16"}]},{"type":"rule","selectors":["Button.-rounded-lg",".nt-button.-rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["Button[isEnabled=false]",".nt-button[isEnabled=false]"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":["Button.-simple",".nt-button.-simple"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"android-dynamic-elevation-offset","value":"0"}]},{"type":"rule","selectors":[".ns-root Button.-aqua",".ns-root .nt-button.-aqua"],"declarations":[{"type":"declaration","property":"border-color","value":"#00caab"},{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-aqua",".ns-dark.ns-root .nt-button.-aqua"],"declarations":[{"type":"declaration","property":"border-color","value":"#00caab"},{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-root Button.-aqua.-primary",".ns-root .nt-button.-aqua.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fdffff"},{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-aqua.-primary",".ns-dark.ns-root .nt-button.-aqua.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fdffff"},{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".ns-root Button.-blue",".ns-root .nt-button.-blue"],"declarations":[{"type":"declaration","property":"border-color","value":"#3a53ff"},{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-blue",".ns-dark.ns-root .nt-button.-blue"],"declarations":[{"type":"declaration","property":"border-color","value":"#3a53ff"},{"type":"declaration","property":"color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-root Button.-blue.-primary",".ns-root .nt-button.-blue.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-blue.-primary",".ns-dark.ns-root .nt-button.-blue.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-root Button.-brown",".ns-root .nt-button.-brown"],"declarations":[{"type":"declaration","property":"border-color","value":"#795548"},{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-brown",".ns-dark.ns-root .nt-button.-brown"],"declarations":[{"type":"declaration","property":"border-color","value":"#795548"},{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".ns-root Button.-brown.-primary",".ns-root .nt-button.-brown.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fbf9f8"},{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-brown.-primary",".ns-dark.ns-root .nt-button.-brown.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#fbf9f8"},{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".ns-root Button.-forest",".ns-root .nt-button.-forest"],"declarations":[{"type":"declaration","property":"border-color","value":"#006968"},{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-forest",".ns-dark.ns-root .nt-button.-forest"],"declarations":[{"type":"declaration","property":"border-color","value":"#006968"},{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".ns-root Button.-forest.-primary",".ns-root .nt-button.-forest.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#9cfffe"},{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-forest.-primary",".ns-dark.ns-root .nt-button.-forest.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#9cfffe"},{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".ns-root Button.-grey",".ns-root .nt-button.-grey"],"declarations":[{"type":"declaration","property":"border-color","value":"#5c687c"},{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-grey",".ns-dark.ns-root .nt-button.-grey"],"declarations":[{"type":"declaration","property":"border-color","value":"#5c687c"},{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-root Button.-grey.-primary",".ns-root .nt-button.-grey.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-grey.-primary",".ns-dark.ns-root .nt-button.-grey.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".ns-root Button.-lemon",".ns-root .nt-button.-lemon"],"declarations":[{"type":"declaration","property":"border-color","value":"#ffea00"},{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lemon",".ns-dark.ns-root .nt-button.-lemon"],"declarations":[{"type":"declaration","property":"border-color","value":"#ffea00"},{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-root Button.-lemon.-primary",".ns-root .nt-button.-lemon.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lemon.-primary",".ns-dark.ns-root .nt-button.-lemon.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".ns-root Button.-lime",".ns-root .nt-button.-lime"],"declarations":[{"type":"declaration","property":"border-color","value":"#aee406"},{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lime",".ns-dark.ns-root .nt-button.-lime"],"declarations":[{"type":"declaration","property":"border-color","value":"#aee406"},{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-root Button.-lime.-primary",".ns-root .nt-button.-lime.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-lime.-primary",".ns-dark.ns-root .nt-button.-lime.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".ns-root Button.-orange",".ns-root .nt-button.-orange"],"declarations":[{"type":"declaration","property":"border-color","value":"#f57c00"},{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-orange",".ns-dark.ns-root .nt-button.-orange"],"declarations":[{"type":"declaration","property":"border-color","value":"#f57c00"},{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-root Button.-orange.-primary",".ns-root .nt-button.-orange.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-orange.-primary",".ns-dark.ns-root .nt-button.-orange.-primary"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".ns-root Button.-purple",".ns-root .nt-button.-purple"],"declarations":[{"type":"declaration","property":"border-color","value":"#8130ff"},{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-purple",".ns-dark.ns-root .nt-button.-purple"],"declarations":[{"type":"declaration","property":"border-color","value":"#8130ff"},{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-root Button.-purple.-primary",".ns-root .nt-button.-purple.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-purple.-primary",".ns-dark.ns-root .nt-button.-purple.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".ns-root Button.-ruby",".ns-root .nt-button.-ruby"],"declarations":[{"type":"declaration","property":"border-color","value":"#ff1744"},{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-ruby",".ns-dark.ns-root .nt-button.-ruby"],"declarations":[{"type":"declaration","property":"border-color","value":"#ff1744"},{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-root Button.-ruby.-primary",".ns-root .nt-button.-ruby.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-ruby.-primary",".ns-dark.ns-root .nt-button.-ruby.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".ns-root Button.-sky",".ns-root .nt-button.-sky"],"declarations":[{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-sky",".ns-dark.ns-root .nt-button.-sky"],"declarations":[{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-root Button.-sky.-primary",".ns-root .nt-button.-sky.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark.ns-root Button.-sky.-primary",".ns-dark.ns-root .nt-button.-sky.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":["Frame",".nt-frame"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark Frame",".ns-dark .nt-frame"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":["Page",".nt-page"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark Page",".ns-dark .nt-page"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":["ActivityIndicator",".nt-activity-indicator"],"declarations":[{"type":"declaration","property":"width","value":"30"},{"type":"declaration","property":"height","value":"30"}]},{"type":"rule","selectors":["Slider",".nt-slider"],"declarations":[{"type":"declaration","property":"margin","value":"20 16"}]},{"type":"rule","selectors":[".ns-ios Slider",".ns-ios .nt-slider"],"declarations":[{"type":"declaration","property":"margin","value":"10 15"}]},{"type":"rule","selectors":["Slider[isEnabled=false]",".nt-slider[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".ns-android Switch",".ns-android .nt-switch"],"declarations":[{"type":"declaration","property":"margin","value":"14 16"}]},{"type":"rule","selectors":[".ns-android Switch[isEnabled=false]",".ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e6e6e6"}]},{"type":"rule","selectors":[".ns-dark.ns-android Switch[isEnabled=false]",".ns-dark.ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#4a4a4a"}]},{"type":"rule","selectors":[".ns-ios Switch",".ns-ios .nt-switch"],"declarations":[{"type":"declaration","property":"margin","value":"8 15"}]},{"type":"rule","selectors":[".ns-ios Switch[isEnabled=false]",".ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.4)"}]},{"type":"rule","selectors":[".ns-dark.ns-ios Switch[isEnabled=false]",".ns-dark.ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.4)"}]},{"type":"rule","selectors":["TabView",".nt-tab-view"],"declarations":[{"type":"declaration","property":"tab-text-font-size","value":"14"},{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":["BottomNavigation",".nt-bottom-navigation"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":["ListView","RadListView",".nt-list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["ListView StackLayout","RadListView StackLayout",".nt-list-view StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":["ListView > *","RadListView > *",".nt-list-view > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["ListView > * Label","RadListView > * Label",".nt-list-view > * Label"],"declarations":[{"type":"declaration","property":"padding","value":"5"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":["ListView > * Image","RadListView > * Image",".nt-list-view > * Image"],"declarations":[{"type":"declaration","property":"stretch","value":"aspectFit"}]},{"type":"rule","selectors":["ListView .thumb","ListView .-thumb","RadListView .thumb","RadListView .-thumb",".nt-list-view .thumb",".nt-list-view .-thumb"],"declarations":[{"type":"declaration","property":"stretch","value":"fill"},{"type":"declaration","property":"width","value":"40"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"min-height","value":"0"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":["ListView.-single-col-cards Image","RadListView.-single-col-cards Image",".nt-list-view.-single-col-cards Image"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"200"}]},{"type":"rule","selectors":["ListView.-two-col-cards Image","RadListView.-two-col-cards Image",".nt-list-view.-two-col-cards Image"],"declarations":[{"type":"declaration","property":"height","value":"100"}]},{"type":"rule","selectors":[".ns-ios ListView.-two-col-cards > StackLayout",".ns-ios RadListView.-two-col-cards > StackLayout",".ns-ios .nt-list-view.-two-col-cards > StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"50%"}]},{"type":"rule","selectors":[".ns-ios ListView.-two-col-cards > StackLayout Image",".ns-ios RadListView.-two-col-cards > StackLayout Image",".ns-ios .nt-list-view.-two-col-cards > StackLayout Image"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":["ListView.-two-lines-image Image","ListView.-single-line-image Image","RadListView.-two-lines-image Image","RadListView.-single-line-image Image",".nt-list-view.-two-lines-image Image",".nt-list-view.-single-line-image Image"],"declarations":[{"type":"declaration","property":"width","value":"60"},{"type":"declaration","property":"height","value":"60"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":["ListView .-separator","RadListView .-separator",".nt-list-view .-separator"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete","RadListView .nt-list-view__delete",".nt-list-view .nt-list-view__delete"],"declarations":[{"type":"declaration","property":"padding","value":"0 10"}]},{"type":"rule","selectors":[".ns-ios ListView .nt-list-view__delete",".ns-ios RadListView .nt-list-view__delete",".ns-ios .nt-list-view .nt-list-view__delete"],"declarations":[{"type":"declaration","property":"padding","value":"0 10 0 25"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete > Label","RadListView .nt-list-view__delete > Label",".nt-list-view .nt-list-view__delete > Label"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":["ListView .nt-icon","RadListView .nt-icon",".nt-list-view .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"width","value":"56"},{"type":"declaration","property":"height","value":"100%"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["RadListView > StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":["RadListView > * > *"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header",".nt-drawer .nt-drawer__header"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"padding","value":"35 0"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header Label",".nt-drawer .nt-drawer__header Label"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header > Label",".nt-drawer .nt-drawer__header > Label"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header-image",".nt-drawer .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"height","value":"74"},{"type":"declaration","property":"width","value":"74"},{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header-footnote",".nt-drawer .nt-drawer__header-footnote"],"declarations":[{"type":"declaration","property":"opacity","value":".5"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header > Label","RadSideDrawer .nt-drawer__header-image",".nt-drawer .nt-drawer__header > Label",".nt-drawer .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"margin-left","value":"15"},{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header.-left > Label","RadSideDrawer .nt-drawer__header.-left .nt-drawer__header-image",".nt-drawer .nt-drawer__header.-left > Label",".nt-drawer .nt-drawer__header.-left .nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item",".nt-drawer .nt-drawer__list-item"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"},{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"orientation","value":"horizontal"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item Label",".nt-drawer .nt-drawer__list-item Label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item .nt-icon",".nt-drawer .nt-drawer__list-item .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"width","value":"30"}]},{"type":"rule","selectors":["RadSideDrawer.ns-dark .nt-drawer__header",".nt-drawer.ns-dark .nt-drawer__header"],"declarations":[{"type":"declaration","property":"background-color","value":"#1e1e1e"}]},{"type":"rule","selectors":["RadSideDrawer.ns-dark .nt-drawer__header Label",".nt-drawer.ns-dark .nt-drawer__header Label"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["Form",".nt-form"],"declarations":[{"type":"declaration","property":"font-family","value":"'Roboto Regular'"},{"type":"declaration","property":"padding","value":"16 0 10"}]},{"type":"rule","selectors":[".ns-ios Form",".ns-ios .nt-form"],"declarations":[{"type":"declaration","property":"font-family","value":"'SF UI Text Regular', system"}]},{"type":"rule","selectors":["Form .-center",".nt-form .-center"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":["Form .nt-form__or-separator",".nt-form .nt-form__or-separator"],"declarations":[{"type":"declaration","property":"margin","value":"20 0"}]},{"type":"rule","selectors":["Form .nt-form__link",".nt-form .nt-form__link"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark Form .nt-form__link",".ns-dark .nt-form .nt-form__link"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":["Form .nt-form__title",".nt-form .nt-form__title"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":["Form .nt-form__logo",".nt-form .nt-form__logo"],"declarations":[{"type":"declaration","property":"margin","value":"20 0"},{"type":"declaration","property":"width","value":"50%"}]},{"type":"rule","selectors":["Form .nt-form__validation-message",".nt-form .nt-form__validation-message"],"declarations":[{"type":"declaration","property":"color","value":"#d50000"},{"type":"declaration","property":"margin","value":"1 0 0"},{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"height","value":"19"}]},{"type":"rule","selectors":["Form .nt-form__footer",".nt-form .nt-form__footer"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":["Form .nt-form__footer Button",".nt-form .nt-form__footer Button"],"declarations":[{"type":"declaration","property":"width","value":"50%"},{"type":"declaration","property":"margin","value":"5"}]},{"type":"rule","selectors":["Form[isEnabled=false] *",".nt-form[isEnabled=false] *"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"comment","comment":" Form Validation styling "},{"type":"rule","selectors":["TextView.ng-valid","TextField.ng-valid","PickerField.ng-valid","DatePickerField.ng-valid","TimePickerField.ng-valid","RadAutoCompleteTextView.ng-valid"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":["TextView.ng-invalid.ng-dirty","TextField.ng-invalid.ng-dirty","PickerField.ng-invalid.ng-dirty","DatePickerField.ng-invalid.ng-dirty","TimePickerField.ng-invalid.ng-dirty","RadAutoCompleteTextView.ng-invalid.ng-dirty"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"},{"type":"declaration","property":"border-color","value":"#d50000"}]},{"type":"comment","comment":" Form fields "},{"type":"rule","selectors":["TextView","TextField","PickerField","DatePickerField","TimePickerField","DateTimePickerFields","DataFormEditorCore","RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"border-width","value":"0 0 1"},{"type":"declaration","property":"border-radius","value":"0"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"8 0 4"},{"type":"declaration","property":"margin","value":"5 16"}]},{"type":"rule","selectors":["TextView.-rounded","TextView.-border","TextField.-rounded","TextField.-border","PickerField.-rounded","PickerField.-border","DatePickerField.-rounded","DatePickerField.-border","TimePickerField.-rounded","TimePickerField.-border","DateTimePickerFields.-rounded","DateTimePickerFields.-border","DataFormEditorCore.-rounded","DataFormEditorCore.-border","RadAutoCompleteTextView.-rounded","RadAutoCompleteTextView.-border"],"declarations":[{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-radius","value":"4"},{"type":"declaration","property":"padding","value":"12 14"}]},{"type":"rule","selectors":["TextView.-rounded","TextField.-rounded","PickerField.-rounded","DatePickerField.-rounded","TimePickerField.-rounded","DateTimePickerFields.-rounded","DataFormEditorCore.-rounded","RadAutoCompleteTextView.-rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":["TextView[isEnabled=false]","TextField[isEnabled=false]","PickerField[isEnabled=false]","DatePickerField[isEnabled=false]","TimePickerField[isEnabled=false]","DateTimePickerFields[isEnabled=false]","DataFormEditorCore[isEnabled=false]","RadAutoCompleteTextView[isEnabled=false]"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":["Label","DataFormEditorLabel"],"declarations":[{"type":"declaration","property":"padding","value":"2 0"}]},{"type":"rule","selectors":["TextView"],"declarations":[{"type":"declaration","property":"min-height","value":"100"}]},{"type":"rule","selectors":["RadAutoCompleteTextView[displayMode=Tokens]"],"declarations":[{"type":"declaration","property":"padding","value":"4 0 8"}]},{"type":"rule","selectors":["RadAutoCompleteTextView Token"],"declarations":[{"type":"declaration","property":"border-radius","value":"50%"}]},{"type":"rule","selectors":[".ns-android TokenClearButton"],"declarations":[{"type":"declaration","property":"width","value":"18"},{"type":"declaration","property":"height","value":"18"},{"type":"declaration","property":"border-radius","value":"50%"},{"type":"declaration","property":"opacity","value":".6"}]},{"type":"comment","comment":" Date Picker "},{"type":"rule","selectors":["PickerField","DatePickerField","TimePickerField","DateTimePickerFields","DataFormEditorCore","RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"background-repeat","value":"no-repeat"},{"type":"declaration","property":"background-position","value":"right center"}]},{"type":"rule","selectors":[".ns-ios PickerField",".ns-ios\n  DatePickerField",".ns-ios\n  TimePickerField",".ns-ios\n  DateTimePickerFields",".ns-ios\n  DataFormEditorCore",".ns-ios\n  RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"background-size","value":"28 16"}]},{"type":"rule","selectors":["PropertyEditor[type='Date'] DataFormEditorCore","DatePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAAD1BMVEVHcEwAAAAAAAAAAAAAAADTrAj/AAAABHRSTlMAwBAgU5DCQwAAAFdJREFUSMdjYCAVuLi4oDHop5RJxAUDOCpgVcroggUIYFXKgk2pMw6lChhudXHAoZSBVkrRw26EKcUC6Kt0NAoGkVIWaFSNKh25Sgd7QURCZURCFUcLAAC2I2hEECBYPgAAAABJRU5ErkJggg==\")"}]},{"type":"comment","comment":" Time Picker "},{"type":"rule","selectors":["PropertyEditor[type='Time'] DataFormEditorCore","TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAYOBAwCAQ0FCAcPCwoEZwdhsAAAE2SURBVEjHY2AYLIB1Td27d89PBRBWyQhUCALPBQiq1HsHBY8IqGX1e/fuyWRjY0sQjd8N3e/eKSaAGGxC797twGs9UCWMDVSLzwly794mwNhs9949xK2SA8UgoBUNOJVGo5oj924rTqV+EEP53sGMfYLbU28ZkJUy3MPpMaZ3aqhKk94p4PS/AKpSRpxhUPeIAVUpg95zHJEKMwOhVO4d9sjlevcMXWneuwVYlfK8c0BXyvLuAI4AmICulPNdAValfO8M0JVyvHtArFJmqiqFACopbSBWKTsssBAAV2DBowABcEUBPGIRAFfEsmImOVzJBZ4IEQBXIoQnbaQc9JBAhoED3BkGlg3hAHc2hGVuhNYn1CgySCiISCjeSCk0SSiKIQX8DGPjTsIFPAnVBimVESlV3IABAKDkz5jHIcToAAAAAElFTkSuQmCC\")"}]},{"type":"comment","comment":" Date/Time Picker "},{"type":"rule","selectors":["DateTimePickerFields"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAwBAMAAAB3UCypAAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAQGDgwBAg0FCAcPCwoM9Ie+kAAAGcSURBVEjH5Ze/TsMwEMZD2pQWVRUZu0VijxASa8UTVJXYUXYWniDqilhgY+QBmBEjMw9RtTQlU79nICRyrDjxxYkdqYhviYe7X87/7s6WlQqAMDCgPwF15igpWhAOg9cQiD8DCtpHha7k9naYmcQeAZ1UQb/lzBmz2XoUdFFaU2ykc08WK3py3envNyCgVgPoA3CRLrhzBrybgdoJk40TqkdCxRMmg/rY5wfDWeHLBHRYCC4Je2kAeluMzcebAeg8C5S52Ij0oTb2RZeVbKsaQHu4LLpc47zBjdpI9t4rQm3Z/jeAhltxcrNYFzpgcXGoj0BzTU+wE11u8KIJHbOMyF36+NCE9vAouowk268OneBUdBlibR56dPDQTAcMXbaBZtZrCfSYHSmuEe40oeNyO6By+Glofk25VK4pDR2UE51KQqGheerjkqc+ZagvVg8iSStDWTnJRZQTZSgrfLmUCl8NlJVo/hOVEl0HbdVM1EFbtT110E4atG5ayUZNrzI0bc+fXfe+rj2v0E7zIdHJk6eTx5nluCUF1j/RDxQQPw3i9N+zAAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":[".ns-ios DateTimePickerFields"],"declarations":[{"type":"declaration","property":"background-size","value":"56 16"}]},{"type":"rule","selectors":["DateTimePickerFields .input","DateTimePickerFields DatePickerField","DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"none"},{"type":"declaration","property":"border-width","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".ns-dark DateTimePickerFields .input",".ns-dark\n    DateTimePickerFields DatePickerField",".ns-dark\n    DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"none"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["DateTimePickerFields TimePickerField"],"declarations":[{"type":"declaration","property":"margin-left","value":"-30"}]},{"type":"comment","comment":" Picker "},{"type":"rule","selectors":["PickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAAGFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAABoAtTLAAAAB3RSTlMAoPAw0BAgCEJU4wAAAEpJREFUSMdjYBgFgwUwChCtVLyQaEPLy4k1Nqm8nFhjmdWJN9Zo1NghZiwJSol3wKihA2ooCZk7hPj0x+pOdEHEEEJ88TYKBgoAAAC5JRg49rIWAAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":["PickerPage.input"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":["PickerPage ListView"],"declarations":[{"type":"declaration","property":"separator-color","value":"transparent"}]},{"type":"rule","selectors":["PickerPage ListView > *"],"declarations":[{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"margin-top","value":"0"},{"type":"declaration","property":"padding","value":"10 12"},{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".ns-dark PickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTP///////////////////////////x1LVb4AAAAHdFJOUwCg8DDQECAIQlTjAAAASklEQVRIx2NgGAWDBTAKEK1UvJBoQ8vLiTU2qbycWGOZ1Yk31mjU2CFmLAlKiXfAqKEDaigJmTuE+PTH6k50QcQQQnzxNgoGCgAAALklGDj2shYAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark DatePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwDAECBTkMJDAAAAV0lEQVRIx2NgIBW4uLigMeinlEnEBQM4KmBVyuiCBQhgVcqCTakzDqUKGG51ccChlIFWStHDboQpxQLoq3Q0CgaRUhZoVI0qHblKB3tBREJlREIVRwsAALYjaEQQIFg+AAAAAElFTkSuQmCC\")"}]},{"type":"rule","selectors":[".ns-dark TimePickerField"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwBAMAAAB9IEC+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBg4EDAIBDQUHDwsKCA4isvJAAAATZJREFUSMdjYBgsgHV23bt3z3cGEFbJCFQIAs8FCKrUewcFjwioZfV79+7JZWNjWxCN3w1d794pJoAYbELv3q3Aaz1QJYwNVIvPCXLv3iTA2Gzn3j3ErZIDxSCgFQ04lUahmiP3bilOpX4QQ/newYx9gttTbxiQlTKcw+kxpndqqEqT3ing9L8AqlJGnGFQ94gBVSmD3nMckQozA6FU7h32yOV89wxdad67CViVcr9zQFfK8m4DjgC4gK6U910BVqV87wzQlXK8e0CsUmaqKoUAKiltIFYpOyywEABXYMGjAAFwRQE8YhEAV8SyYiY5XMkFnggRAFcihCdtpBz0kECGgQPcGQaWDeEAdzaEZW6E1ifUKDJIKIhIKN5IKTRJKIohBfwNY+NewgU8CdUGKZURKVXcgAEAq1LPmF1qDewAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark DateTimePickerFields"],"declarations":[{"type":"declaration","property":"background-image","value":"url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAwBAMAAAB3UCypAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBAYODAECDQUHDwsKCAaxMi1gAAAZxJREFUSMfll89Kw0AQxmPa1EppMQ9QCHgPIngtPkEpeJecPfkEoWdB8O5dPHr1JYrePLY2NZfyPYMxYbNkk51sshuo+F2yh5lfZv/NzFpWKgDCwID+BNSZo6RoQTgMnkIgfgsoaB8VupLb22FmEnsEdFIF/ZYzZ8xm61HQRWlNsZHOPVms6MN1p7/fgIBaDaD3wEW64M4Z8GIGaidMNk6oHgkVT5gM6mOfHwxnhS8T0GEhuCTspQHobTE2H88GoPMsUOZiI9KH2tgXXVayrWoA7eGy6HKN8wY3aiPZe68ItWX73wAabsXJzWJd6IDFxaE+As01PcFOdLnBoyZ0xDIid+njVRPaw7voMpZsvzp0glPRZYi1eejRwUMzHTB02QaaWa8l0GN2pLjGuNOEjsrtgMrhp6H5NeVSuaY0dFBOdCoJhYbmqY9LnvqUob5YPYgkrQxl5SQXUU6Uoazw5VIqfDVQVqL5T1RKdB20VTNRB23V9tRBO2nQumklGzW9ytC0Pf903Ye69rxCO82HRCdPnk4eZ5bjlhRY/0Q/Hn4/DfXSncYAAAAASUVORK5CYII=\")"}]},{"type":"rule","selectors":[".ns-dark PickerField",".ns-dark DatePickerField",".ns-dark TimePickerField",".ns-dark DateTimePickerFields",".ns-dark RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"class","value":"ns-dark"}]},{"type":"rule","selectors":["RadDataForm PropertyEditor"],"declarations":[{"type":"declaration","property":"padding","value":"5 0 0"}]},{"type":"rule","selectors":[".nt-input"],"declarations":[{"type":"declaration","property":"margin","value":"10 0"}]},{"type":"rule","selectors":["DataFormEditorLabel",".nt-input > Label"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":["DataFormEditorLabel",".nt-input > Label",".nt-input > TextView","> TextField","> PickerField","> DatePickerField","> TimePickerField","> DateTimePickerFields","> RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"margin","value":"0 16"}]},{"type":"rule","selectors":[".nt-input.-sides"],"declarations":[{"type":"declaration","property":"margin","value":"0 0 10"}]},{"type":"rule","selectors":[".nt-input.-sides > Label"],"declarations":[{"type":"declaration","property":"margin","value":"5 16"}]},{"type":"rule","selectors":[".nt-input > .nt-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"right"},{"type":"declaration","property":"margin","value":"-15 10 0 0"}]},{"type":"rule","selectors":["ActionBar",".nt-action-bar"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ns-ios ActionBar",".ns-ios .nt-action-bar"],"declarations":[{"type":"declaration","property":"margin-left","value":"20"},{"type":"declaration","property":"vertical-align","value":"stretch"},{"type":"declaration","property":"horizontal-align","value":"stretch"}]},{"type":"rule","selectors":[".ns-landscape.ns-ios ActionBar",".ns-landscape.ns-ios .nt-action-bar"],"declarations":[{"type":"declaration","property":"margin-left","value":"100"},{"type":"declaration","property":"padding","value":"0 5"}]},{"type":"rule","selectors":["ActionBar Label","ActionBar Button","ActionBar .nt-action-bar__item",".nt-action-bar Label",".nt-action-bar Button",".nt-action-bar .nt-action-bar__item"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"12 10 12 0"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"min-width","value":"0"},{"type":"declaration","property":"width","value":"auto"},{"type":"declaration","property":"border-width","value":"0"},{"type":"declaration","property":"text-transform","value":"none"},{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":["ActionBar Label:active","ActionBar Button:active","ActionBar .nt-action-bar__item:active",".nt-action-bar Label:active",".nt-action-bar Button:active",".nt-action-bar .nt-action-bar__item:active"],"declarations":[{"type":"declaration","property":"opacity","value":".7"}]},{"type":"rule","selectors":["ActionBar > Label",".nt-action-bar > Label"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".ns-statusbar-transparent Page > ActionBar",".ns-statusbar-transparent Page > .nt-action-bar"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"}]},{"type":"rule","selectors":[".ns-android__19.ns-statusbar-transparent Page > ActionBar",".ns-modal.ns-statusbar-transparent Page > ActionBar",".ns-android__19.ns-statusbar-transparent Page > .nt-action-bar",".ns-modal.ns-statusbar-transparent Page > .nt-action-bar"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".ns-android ActionBar Button",".ns-android ActionBar .nt-button",".ns-android .nt-action-bar Button",".ns-android .nt-action-bar .nt-button"],"declarations":[{"type":"declaration","property":"padding","value":"0 6"}]},{"type":"rule","selectors":[".ns-android ActionBar > Label",".ns-android .nt-action-bar > Label"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":["ActionBar > Label","ActionBar > GridLayout Label",".nt-action-bar > Label",".nt-action-bar > GridLayout Label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["ActionBar > GridLayout",".nt-action-bar > GridLayout"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":["ActionBar > GridLayout > StackLayout",".nt-action-bar > GridLayout > StackLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["ActionBar > GridLayout Button",".nt-action-bar > GridLayout Button"],"declarations":[{"type":"declaration","property":"padding","value":"12 10"},{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":["ActionBar > GridLayout [col=\"2\"]",".nt-action-bar > GridLayout [col=\"2\"]"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"}]},{"type":"rule","selectors":[".ns-android ActionBar > GridLayout",".ns-android .nt-action-bar > GridLayout"],"declarations":[{"type":"declaration","property":"padding","value":"0 4"}]},{"type":"rule","selectors":[".ns-android ActionBar > GridLayout Button",".ns-android .nt-action-bar > GridLayout Button"],"declarations":[{"type":"declaration","property":"padding","value":"12 16"},{"type":"declaration","property":"margin","value":"0"}]},{"type":"comment","comment":"!\n * NativeScript Theme __VERSION__ (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2019 Progress Software\n * Licensed under Apache 2.0 (https://github.com/NativeScript/theme/blob/master/LICENSE)\n "},{"type":"keyframes","name":"empty","keyframes":[]},{"type":"comment","comment":" Forms "},{"type":"comment","comment":"*\n * Blue variable overrides\n *"},{"type":"rule","selectors":["Button",".nt-button"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"color","value":"#004363"}]},{"type":"rule","selectors":[".ns-dark Button",".ns-dark .nt-button"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["Button:active","Button.-active",".nt-button:active",".nt-button.-active"],"declarations":[{"type":"declaration","property":"color","value":"#004363"}]},{"type":"rule","selectors":[".ns-dark Button:active",".ns-dark Button.-active",".ns-dark .nt-button:active",".ns-dark .nt-button.-active"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["Button.-outline",".nt-button.-outline"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"border-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark Button.-outline",".ns-dark .nt-button.-outline"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"border-color","value":"#63cdff"}]},{"type":"keyframes","name":"-hightlight-light","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"background-color","value":"#f2f2f2"}]}]},{"type":"keyframes","name":"-hightlight-dark","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"background-color","value":"#232323"}]}]},{"type":"rule","selectors":["Button.-outline:active","Button.-outline.-active",".nt-button.-outline:active",".nt-button.-outline.-active"],"declarations":[{"type":"declaration","property":"animation","value":"-hightlight-light 0.3s ease-out forwards"},{"type":"declaration","property":"background-color","value":"#f2f2f2"}]},{"type":"rule","selectors":[".ns-dark Button.-outline:active",".ns-dark Button.-outline.-active",".ns-dark .nt-button.-outline:active",".ns-dark .nt-button.-outline.-active"],"declarations":[{"type":"declaration","property":"animation","value":"-hightlight-dark 0.3s ease-out forwards"},{"type":"declaration","property":"background-color","value":"#232323"}]},{"type":"rule","selectors":["Button.-primary",".nt-button.-primary"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"border-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark Button.-primary",".ns-dark .nt-button.-primary"],"declarations":[{"type":"declaration","property":"color","value":"#002030"},{"type":"declaration","property":"background-color","value":"#63cdff"},{"type":"declaration","property":"border-color","value":"#63cdff"}]},{"type":"rule","selectors":["Button.-primary:active","Button.-primary.-active",".nt-button.-primary:active",".nt-button.-primary.-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#00aafc"}]},{"type":"rule","selectors":[".ns-dark Button.-primary:active",".ns-dark Button.-primary.-active",".ns-dark .nt-button.-primary:active",".ns-dark .nt-button.-primary.-active"],"declarations":[{"type":"declaration","property":"background-color","value":"#96ddff"}]},{"type":"rule","selectors":["ActivityIndicator",".nt-activity-indicator"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark ActivityIndicator",".ns-dark .nt-activity-indicator"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":["SegmentedBar",".nt-segmented-bar"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"selected-background-color","value":"#96ddff"}]},{"type":"rule","selectors":[".ns-dark SegmentedBar",".ns-dark .nt-segmented-bar"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"selected-background-color","value":"#00aafc"}]},{"type":"rule","selectors":[".ns-ios SegmentedBar",".ns-ios .nt-segmented-bar"],"declarations":[{"type":"declaration","property":"margin","value":"0 15"}]},{"type":"rule","selectors":["Progress",".nt-progress"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.1)"}]},{"type":"rule","selectors":[".ns-dark Progress",".ns-dark .nt-progress"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"},{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.1)"}]},{"type":"rule","selectors":["Slider",".nt-slider"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark Slider",".ns-dark .nt-slider"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"},{"type":"declaration","property":"background-color","value":"#63cdff"}]},{"type":"rule","selectors":["Slider[isEnabled=false]",".ns-android Slider[isEnabled=false]",".nt-slider[isEnabled=false]",".ns-android .nt-slider[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"},{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":["SearchBar",".nt-search-bar"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"text-field-hint-color","value":"black"},{"type":"declaration","property":"text-field-background-color","value":"transparent"}]},{"type":"rule","selectors":[".ns-dark SearchBar",".ns-dark .nt-search-bar"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"text-field-hint-color","value":"#b3b3b3"},{"type":"declaration","property":"text-field-background-color","value":"transparent"}]},{"type":"rule","selectors":[".ns-android Switch",".ns-android .nt-switch"],"declarations":[{"type":"declaration","property":"color","value":"#cccccc"},{"type":"declaration","property":"background-color","value":"#cccccc"}]},{"type":"rule","selectors":[".ns-dark.ns-android Switch",".ns-dark.ns-android .nt-switch"],"declarations":[{"type":"declaration","property":"color","value":"#636363"},{"type":"declaration","property":"background-color","value":"#636363"}]},{"type":"rule","selectors":[".ns-android Switch[checked=true]",".ns-android .nt-switch[checked=true]"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark.ns-android Switch[checked=true]",".ns-dark.ns-android .nt-switch[checked=true]"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":[".ns-android Switch[isEnabled=false]",".ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e6e6e6"}]},{"type":"rule","selectors":[".ns-dark.ns-android Switch[isEnabled=false]",".ns-dark.ns-android .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#4a4a4a"}]},{"type":"rule","selectors":[".ns-ios Switch",".ns-ios .nt-switch"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"off-background-color","value":"#e6e6e6"}]},{"type":"rule","selectors":[".ns-dark.ns-ios Switch",".ns-dark.ns-ios .nt-switch"],"declarations":[{"type":"declaration","property":"color","value":"#303030"},{"type":"declaration","property":"background-color","value":"#63cdff"},{"type":"declaration","property":"off-background-color","value":"#4a4a4a"}]},{"type":"rule","selectors":[".ns-ios Switch[isEnabled=false]",".ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.4)"}]},{"type":"rule","selectors":[".ns-dark.ns-ios Switch[isEnabled=false]",".ns-dark.ns-ios .nt-switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.4)"}]},{"type":"rule","selectors":["TabView",".nt-tab-view"],"declarations":[{"type":"declaration","property":"selected-tab-text-color","value":"#30bcff"},{"type":"declaration","property":"tab-background-color","value":"#fff"},{"type":"declaration","property":"tab-text-color","value":"#abd5e9"},{"type":"declaration","property":"android-selected-tab-highlight-color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark TabView",".ns-dark .nt-tab-view"],"declarations":[{"type":"declaration","property":"selected-tab-text-color","value":"#63cdff"},{"type":"declaration","property":"tab-background-color","value":"#303030"},{"type":"declaration","property":"tab-text-color","value":"#bbdae9"},{"type":"declaration","property":"android-selected-tab-highlight-color","value":"#63cdff"}]},{"type":"rule","selectors":["TabView.ns-dark",".nt-tab-view.ns-dark"],"declarations":[{"type":"declaration","property":"selected-tab-text-color","value":"#63cdff"},{"type":"declaration","property":"tab-background-color","value":"#303030"},{"type":"declaration","property":"tab-text-color","value":"#bbdae9"},{"type":"declaration","property":"android-selected-tab-highlight-color","value":"#63cdff"}]},{"type":"rule","selectors":["TabStrip",".nt-tab-strip"],"declarations":[{"type":"declaration","property":"highlight-color","value":"#30bcff"},{"type":"declaration","property":"background","value":"#f2f2f2"}]},{"type":"rule","selectors":[".ns-dark TabStrip",".ns-dark .nt-tab-strip"],"declarations":[{"type":"declaration","property":"highlight-color","value":"#63cdff"},{"type":"declaration","property":"background","value":"#3a3a3a"}]},{"type":"rule","selectors":["TabStripItem",".nt-tab-strip__item"],"declarations":[{"type":"declaration","property":"color","value":"#262626"}]},{"type":"rule","selectors":[".ns-dark TabStripItem",".ns-dark .nt-tab-strip__item"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["TabStripItem:active","TabStripItem:active Label",".nt-tab-strip__item:active",".nt-tab-strip__item:active Label"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark TabStripItem:active",".ns-dark TabStripItem:active Label",".ns-dark .nt-tab-strip__item:active",".ns-dark .nt-tab-strip__item:active Label"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":["TabContentItem",".nt-tab-content__item"],"declarations":[{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark TabContentItem",".ns-dark .nt-tab-content__item"],"declarations":[{"type":"declaration","property":"background","value":"#303030"}]},{"type":"rule","selectors":["ListView","RadListView",".nt-list-view"],"declarations":[{"type":"declaration","property":"item-selected-background-color","value":"rgba(48, 188, 255, 0.15)"},{"type":"declaration","property":"separator-color","value":"#cccccc"}]},{"type":"rule","selectors":[".ns-dark ListView",".ns-dark RadListView",".ns-dark .nt-list-view"],"declarations":[{"type":"declaration","property":"item-selected-background-color","value":"rgba(99, 205, 255, 0.15)"}]},{"type":"rule","selectors":["ListView > *.active","ListView > *:highlighted","RadListView > *.active","RadListView > *:highlighted",".nt-list-view > *.active",".nt-list-view > *:highlighted"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.15)"}]},{"type":"rule","selectors":[".ns-dark ListView > *.active",".ns-dark ListView > *:highlighted",".ns-dark RadListView > *.active",".ns-dark RadListView > *:highlighted",".ns-dark .nt-list-view > *.active",".ns-dark .nt-list-view > *:highlighted"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.15)"}]},{"type":"rule","selectors":["ListView .-separator","RadListView .-separator",".nt-list-view .-separator"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#cccccc"}]},{"type":"rule","selectors":[".ns-dark ListView .-separator",".ns-dark RadListView .-separator",".ns-dark .nt-list-view .-separator"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"#636363"}]},{"type":"rule","selectors":[".ns-dark ListView",".ns-dark RadListView",".ns-dark .nt-list-view"],"declarations":[{"type":"declaration","property":"separator-color","value":"#636363"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete","RadListView .nt-list-view__delete",".nt-list-view .nt-list-view__delete"],"declarations":[{"type":"declaration","property":"background-color","value":"#d50000"}]},{"type":"rule","selectors":["ListView .nt-list-view__delete > Label","RadListView .nt-list-view__delete > Label",".nt-list-view .nt-list-view__delete > Label"],"declarations":[{"type":"declaration","property":"color","value":"#262626"}]},{"type":"rule","selectors":[".ns-dark ListView .nt-list-view__delete > Label",".ns-dark RadListView .nt-list-view__delete > Label",".ns-dark .nt-list-view .nt-list-view__delete > Label"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["ListView .nt-icon","RadListView .nt-icon",".nt-list-view .nt-icon"],"declarations":[{"type":"declaration","property":"color","value":"#006698"}]},{"type":"rule","selectors":[".ns-dark ListView .nt-icon",".ns-dark RadListView .nt-icon",".ns-dark .nt-list-view .nt-icon"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__header",".nt-drawer .nt-drawer__header"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"background-color","value":"#213dff"}]},{"type":"rule","selectors":["RadSideDrawer > *","RadSideDrawer .nt-drawer__content",".nt-drawer > *",".nt-drawer .nt-drawer__content"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item.-selected",".nt-drawer .nt-drawer__list-item.-selected"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(48, 188, 255, 0.15)"}]},{"type":"rule","selectors":["RadSideDrawer .nt-drawer__list-item.-selected Label",".nt-drawer .nt-drawer__list-item.-selected Label"],"declarations":[{"type":"declaration","property":"color","value":"#0088c9"}]},{"type":"rule","selectors":[".ns-dark RadSideDrawer .nt-drawer__header","RadSideDrawer.ns-dark .nt-drawer__header",".ns-dark .nt-drawer .nt-drawer__header",".nt-drawer.ns-dark .nt-drawer__header"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#1d37e3"}]},{"type":"rule","selectors":[".ns-dark RadSideDrawer > *",".ns-dark RadSideDrawer .nt-drawer__content","RadSideDrawer.ns-dark > *","RadSideDrawer.ns-dark .nt-drawer__content",".ns-dark .nt-drawer > *",".ns-dark .nt-drawer .nt-drawer__content",".nt-drawer.ns-dark > *",".nt-drawer.ns-dark .nt-drawer__content"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":[".ns-dark RadSideDrawer .nt-drawer__list-item.-selected","RadSideDrawer.ns-dark .nt-drawer__list-item.-selected",".ns-dark .nt-drawer .nt-drawer__list-item.-selected",".nt-drawer.ns-dark .nt-drawer__list-item.-selected"],"declarations":[{"type":"declaration","property":"background-color","value":"rgba(99, 205, 255, 0.15)"}]},{"type":"rule","selectors":[".ns-dark RadSideDrawer .nt-drawer__list-item.-selected Label","RadSideDrawer.ns-dark .nt-drawer__list-item.-selected Label",".ns-dark .nt-drawer .nt-drawer__list-item.-selected Label",".nt-drawer.ns-dark .nt-drawer__list-item.-selected Label"],"declarations":[{"type":"declaration","property":"color","value":"#c9eeff"}]},{"type":"comment","comment":" Form fields "},{"type":"rule","selectors":["TextView","TextField","PickerField","DatePickerField","TimePickerField","DateTimePickerFields","DataFormEditorCore","RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"placeholder-color","value":"black"},{"type":"declaration","property":"border-color","value":"#c7c7c7"}]},{"type":"rule","selectors":[".ns-dark TextView",".ns-dark TextField",".ns-dark PickerField",".ns-dark DatePickerField",".ns-dark TimePickerField",".ns-dark DateTimePickerFields",".ns-dark DataFormEditorCore",".ns-dark RadAutoCompleteTextView"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"placeholder-color","value":"#b3b3b3"},{"type":"declaration","property":"border-color","value":"#fafafa"}]},{"type":"rule","selectors":["TextView:focus","TextField:focus","PickerField:focus","DatePickerField:focus","TimePickerField:focus","DateTimePickerFields:focus","DataFormEditorCore:focus","RadAutoCompleteTextView:focus"],"declarations":[{"type":"declaration","property":"border-color","value":"#0088c9"}]},{"type":"rule","selectors":[".ns-dark TextView:focus",".ns-dark TextField:focus",".ns-dark PickerField:focus",".ns-dark DatePickerField:focus",".ns-dark TimePickerField:focus",".ns-dark DateTimePickerFields:focus",".ns-dark DataFormEditorCore:focus",".ns-dark RadAutoCompleteTextView:focus"],"declarations":[{"type":"declaration","property":"border-color","value":"#c9eeff"}]},{"type":"rule","selectors":["TextView[isEnabled=false]","TextField[isEnabled=false]","PickerField[isEnabled=false]","DatePickerField[isEnabled=false]","TimePickerField[isEnabled=false]","DateTimePickerFields[isEnabled=false]","DataFormEditorCore[isEnabled=false]","RadAutoCompleteTextView[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"},{"type":"declaration","property":"background-color","value":"#f2f2f2"}]},{"type":"rule","selectors":[".ns-dark TextView[isEnabled=false]",".ns-dark TextField[isEnabled=false]",".ns-dark PickerField[isEnabled=false]",".ns-dark DatePickerField[isEnabled=false]",".ns-dark TimePickerField[isEnabled=false]",".ns-dark DateTimePickerFields[isEnabled=false]",".ns-dark DataFormEditorCore[isEnabled=false]",".ns-dark RadAutoCompleteTextView[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"},{"type":"declaration","property":"background-color","value":"#3d3d3d"}]},{"type":"rule","selectors":["HtmlView"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":["PropertyEditor:focus DataFormEditorCore"],"declarations":[{"type":"declaration","property":"border-color","value":"#0088c9"}]},{"type":"rule","selectors":[".ns-dark PropertyEditor:focus DataFormEditorCore"],"declarations":[{"type":"declaration","property":"border-color","value":"#c9eeff"}]},{"type":"rule","selectors":["RadAutoCompleteTextView Token"],"declarations":[{"type":"declaration","property":"background-color","value":"#96ddff"}]},{"type":"rule","selectors":[".ns-dark RadAutoCompleteTextView Token"],"declarations":[{"type":"declaration","property":"background-color","value":"#00aafc"}]},{"type":"rule","selectors":["RadAutoCompleteTextView Token:selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#63cdff"}]},{"type":"rule","selectors":[".ns-dark RadAutoCompleteTextView Token:selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":["RadAutoCompleteTextView ClearButton"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".ns-dark RadAutoCompleteTextView ClearButton"],"declarations":[{"type":"declaration","property":"color","value":"#63cdff"}]},{"type":"rule","selectors":["RadAutoCompleteTextView SuggestionView"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark RadAutoCompleteTextView SuggestionView"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":["RadDataForm"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"placeholder-color","value":"black"}]},{"type":"rule","selectors":[".ns-dark RadDataForm"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"placeholder-color","value":"#b3b3b3"}]},{"type":"rule","selectors":["RadDataForm PropertyEditor"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark RadDataForm PropertyEditor"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"comment","comment":" NativeScript UI AutoComplete "},{"type":"rule","selectors":["PickerPage ListView"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark PickerPage ListView"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background","value":"#303030"}]},{"type":"rule","selectors":["PickerPage ListView > *"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"rgba(48, 188, 255, 0.4)"}]},{"type":"rule","selectors":[".ns-dark PickerPage ListView > *"],"declarations":[{"type":"declaration","property":"border-bottom-color","value":"rgba(99, 205, 255, 0.4)"}]},{"type":"rule","selectors":["PickerPage.ns-dark ListView",".ns-dark SuggestionView"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background","value":"#303030"}]},{"type":"comment","comment":" DateTime Picker "},{"type":"rule","selectors":[".date-time-picker"],"declarations":[{"type":"declaration","property":"color","value":"#262626"},{"type":"declaration","property":"background","value":"#fff"}]},{"type":"rule","selectors":[".date-time-picker.ns-dark"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background","value":"#303030"}]},{"type":"rule","selectors":[".date-time-picker-buttons"],"declarations":[{"type":"declaration","property":"color","value":"#004363"}]},{"type":"rule","selectors":[".date-time-picker-buttons.ns-dark"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".ns-dark.date-time-picker-button-cancel"],"declarations":[{"type":"declaration","property":"background","value":"#303030"}]},{"type":"rule","selectors":[".date-time-picker-spinners"],"declarations":[{"type":"declaration","property":"color","value":"#006596"}]},{"type":"rule","selectors":[".date-time-picker-spinners.ns-dark"],"declarations":[{"type":"declaration","property":"color","value":"#fcfeff"}]},{"type":"rule","selectors":["DataFormEditorLabel",".nt-input > Label"],"declarations":[{"type":"declaration","property":"color","value":"#006596"}]},{"type":"rule","selectors":[".ns-dark DataFormEditorLabel",".ns-dark .nt-input > Label"],"declarations":[{"type":"declaration","property":"color","value":"#fcfeff"}]},{"type":"rule","selectors":["ActionBar",".nt-action-bar"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark ActionBar",".ns-dark .nt-action-bar"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#344be6"}]},{"type":"rule","selectors":["ActionBar Label","ActionBar Button","ActionBar .nt-action-bar__item",".nt-action-bar Label",".nt-action-bar Button",".nt-action-bar .nt-action-bar__item"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark ActionBar Label",".ns-dark ActionBar Button",".ns-dark ActionBar .nt-action-bar__item",".ns-dark .nt-action-bar Label",".ns-dark .nt-action-bar Button",".ns-dark .nt-action-bar .nt-action-bar__item"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["ActionBar Label:active","ActionBar Label.-active","ActionBar Button:active","ActionBar Button.-active","ActionBar .nt-action-bar__item:active","ActionBar .nt-action-bar__item.-active",".nt-action-bar Label:active",".nt-action-bar Label.-active",".nt-action-bar Button:active",".nt-action-bar Button.-active",".nt-action-bar .nt-action-bar__item:active",".nt-action-bar .nt-action-bar__item.-active"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".ns-dark ActionBar Label:active",".ns-dark ActionBar Label.-active",".ns-dark ActionBar Button:active",".ns-dark ActionBar Button.-active",".ns-dark ActionBar .nt-action-bar__item:active",".ns-dark ActionBar .nt-action-bar__item.-active",".ns-dark .nt-action-bar Label:active",".ns-dark .nt-action-bar Label.-active",".ns-dark .nt-action-bar Button:active",".ns-dark .nt-action-bar Button.-active",".ns-dark .nt-action-bar .nt-action-bar__item:active",".ns-dark .nt-action-bar .nt-action-bar__item.-active"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".ns-ios ActionBar Label",".ns-ios ActionBar Label:active",".ns-ios ActionBar Button",".ns-ios ActionBar Button:active",".ns-ios ActionBar .nt-action-bar__item",".ns-ios ActionBar .nt-action-bar__item:active",".ns-ios .nt-action-bar Label",".ns-ios .nt-action-bar Label:active",".ns-ios .nt-action-bar Button",".ns-ios .nt-action-bar Button:active",".ns-ios .nt-action-bar .nt-action-bar__item",".ns-ios .nt-action-bar .nt-action-bar__item:active"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".ns-dark.ns-ios ActionBar Label",".ns-dark.ns-ios ActionBar Label:active",".ns-dark.ns-ios ActionBar Button",".ns-dark.ns-ios ActionBar Button:active",".ns-dark.ns-ios ActionBar .nt-action-bar__item",".ns-dark.ns-ios ActionBar .nt-action-bar__item:active",".ns-dark.ns-ios .nt-action-bar Label",".ns-dark.ns-ios .nt-action-bar Label:active",".ns-dark.ns-ios .nt-action-bar Button",".ns-dark.ns-ios .nt-action-bar Button:active",".ns-dark.ns-ios .nt-action-bar .nt-action-bar__item",".ns-dark.ns-ios .nt-action-bar .nt-action-bar__item:active"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".ns-android ActionBar Button",".ns-android ActionBar .nt-button",".ns-android .nt-action-bar Button",".ns-android .nt-action-bar .nt-button"],"declarations":[{"type":"declaration","property":"background-color","value":"#3a53ff"}]},{"type":"rule","selectors":[".ns-dark.ns-android ActionBar Button",".ns-dark.ns-android ActionBar .nt-button",".ns-dark.ns-android .nt-action-bar Button",".ns-dark.ns-android .nt-action-bar .nt-button"],"declarations":[{"type":"declaration","property":"background-color","value":"#344be6"}]},{"type":"comment","comment":" Dividers "},{"type":"rule","selectors":[".hr"],"declarations":[{"type":"declaration","property":"border-color","value":"#d9d9d9"}]},{"type":"rule","selectors":[".ns-dark .hr"],"declarations":[{"type":"declaration","property":"border-color","value":"#4d4d4d"}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"border-color","value":"#96ddff"}]},{"type":"rule","selectors":[".ns-dark .hr-light"],"declarations":[{"type":"declaration","property":"border-color","value":"white"}]},{"type":"rule","selectors":[".hr-dark"],"declarations":[{"type":"declaration","property":"border-color","value":"#0088c9"}]},{"type":"rule","selectors":[".ns-dark .hr-dark"],"declarations":[{"type":"declaration","property":"border-color","value":"#c9eeff"}]},{"type":"rule","selectors":[".ns-root",".ns-modal"],"declarations":[{"type":"declaration","property":"--color-black","value":"#000"},{"type":"declaration","property":"--color-white","value":"#fff"},{"type":"declaration","property":"--color-grey","value":"#e0e0e0"},{"type":"declaration","property":"--color-grey-light","value":"#bababa"},{"type":"declaration","property":"--color-charcoal","value":"#303030"},{"type":"declaration","property":"--color-transparent","value":"transparent"},{"type":"declaration","property":"--color-aqua","value":"#00caab"},{"type":"declaration","property":"--color-blue","value":"#3a53ff"},{"type":"declaration","property":"--color-brown","value":"#795548"},{"type":"declaration","property":"--color-forest","value":"#006968"},{"type":"declaration","property":"--color-grey-dark","value":"#5c687c"},{"type":"declaration","property":"--color-purple","value":"#8130ff"},{"type":"declaration","property":"--color-lemon","value":"#ffea00"},{"type":"declaration","property":"--color-lime","value":"#aee406"},{"type":"declaration","property":"--color-orange","value":"#f57c00"},{"type":"declaration","property":"--color-ruby","value":"#ff1744"},{"type":"declaration","property":"--color-sky","value":"#30bcff"},{"type":"declaration","property":"--color-error","value":"#d50000"},{"type":"declaration","property":"--const-font-size","value":"12"},{"type":"declaration","property":"--const-background-alt-10","value":"#c0ebff"},{"type":"declaration","property":"--const-btn-color-secondary","value":"#01a0ec"},{"type":"declaration","property":"--const-btn-color-disabled","value":"#a4a4a4"},{"type":"declaration","property":"--const-btn-font-size","value":"14"},{"type":"declaration","property":"--const-btn-min-width","value":"64"},{"type":"declaration","property":"--const-btn-height","value":"52"},{"type":"declaration","property":"--const-btn-padding-x","value":"5"},{"type":"declaration","property":"--const-btn-padding-y","value":"0"},{"type":"declaration","property":"--const-btn-margin-x","value":"16"},{"type":"declaration","property":"--const-btn-margin-y","value":"8"},{"type":"declaration","property":"--const-btn-radius","value":"0"},{"type":"declaration","property":"--const-headings-margin-bottom","value":"4"},{"type":"declaration","property":"--const-headings-font-weight","value":"normal"},{"type":"declaration","property":"--const-border-width","value":"1"},{"type":"declaration","property":"--const-border-radius","value":""},{"type":"declaration","property":"--const-border-radius-sm","value":"4"},{"type":"declaration","property":"--const-border-radius-lg","value":"50%"},{"type":"declaration","property":"--const-icon-font-size","value":"12"},{"type":"declaration","property":"--const-icon-font-size-lg","value":"16"},{"type":"declaration","property":"--const-disabled-opacity","value":"0.5"},{"type":"declaration","property":"--light-primary","value":"#262626"},{"type":"declaration","property":"--light-background","value":"#fff"},{"type":"declaration","property":"--light-secondary","value":"black"},{"type":"declaration","property":"--light-accent","value":"#30bcff"},{"type":"declaration","property":"--light-complementary","value":"#3a53ff"},{"type":"declaration","property":"--light-complementary-color","value":"#fff"},{"type":"declaration","property":"--light-btn-color","value":"#262626"},{"type":"declaration","property":"--light-border-color","value":"#30bcff"},{"type":"declaration","property":"--light-background-alt-5","value":"#f2f2f2"},{"type":"declaration","property":"--light-background-alt-10","value":"#e6e6e6"},{"type":"declaration","property":"--light-background-alt-20","value":"#cccccc"},{"type":"declaration","property":"--light-disabled","value":"#ace4ff"},{"type":"declaration","property":"--light-text-color","value":"#262626"},{"type":"declaration","property":"--light-headings-color","value":"#262626"},{"type":"declaration","property":"--light-tab-text-color","value":"#abd5e9"},{"type":"declaration","property":"--light-accent-dark","value":"#0088c9"},{"type":"declaration","property":"--light-accent-light","value":"#96ddff"},{"type":"declaration","property":"--light-accent-transparent","value":"rgba(48, 188, 255, 0.8)"},{"type":"declaration","property":"--light-primary-accent","value":"rgba(48, 188, 255, 0.4)"},{"type":"declaration","property":"--light-background-accent","value":"rgba(48, 188, 255, 0.1)"},{"type":"declaration","property":"--light-background-dark-accent","value":"rgba(48, 188, 255, 0.15)"},{"type":"declaration","property":"--light-item-active-color","value":"#676767"},{"type":"declaration","property":"--light-item-active-background","value":"rgba(48, 188, 255, 0.15)"},{"type":"declaration","property":"--light-complementary-dark","value":"#213dff"},{"type":"declaration","property":"--light-item-active-icon-color","value":"#676767"},{"type":"declaration","property":"--light-btn-color-inverse","value":"white"},{"type":"declaration","property":"--light-btn-color-secondary","value":"#0d0d0d"},{"type":"declaration","property":"--dark-primary","value":"white"},{"type":"declaration","property":"--dark-background","value":"#303030"},{"type":"declaration","property":"--dark-secondary","value":"#b3b3b3"},{"type":"declaration","property":"--dark-accent","value":"#63cdff"},{"type":"declaration","property":"--dark-complementary","value":"#344be6"},{"type":"declaration","property":"--dark-btn-color","value":"#fff"},{"type":"declaration","property":"--dark-border-color","value":"#63cdff"},{"type":"declaration","property":"--dark-background-alt-5","value":"#3d3d3d"},{"type":"declaration","property":"--dark-background-alt-10","value":"#4a4a4a"},{"type":"declaration","property":"--dark-background-alt-20","value":"#636363"},{"type":"declaration","property":"--dark-disabled","value":"#446f83"},{"type":"declaration","property":"--dark-text-color","value":"white"},{"type":"declaration","property":"--dark-headings-color","value":"white"},{"type":"declaration","property":"--dark-tab-text-color","value":"#bbdae9"},{"type":"declaration","property":"--dark-accent-dark","value":"#c9eeff"},{"type":"declaration","property":"--dark-accent-light","value":"white"},{"type":"declaration","property":"--dark-accent-transparent","value":"rgba(99, 205, 255, 0.8)"},{"type":"declaration","property":"--dark-primary-accent","value":"rgba(99, 205, 255, 0.4)"},{"type":"declaration","property":"--dark-background-accent","value":"rgba(99, 205, 255, 0.1)"},{"type":"declaration","property":"--dark-background-dark-accent","value":"rgba(99, 205, 255, 0.15)"},{"type":"declaration","property":"--dark-item-active-color","value":"#c1c1c1"},{"type":"declaration","property":"--dark-item-active-background","value":"rgba(99, 205, 255, 0.15)"},{"type":"declaration","property":"--dark-complementary-color","value":"white"},{"type":"declaration","property":"--dark-complementary-dark","value":"#1d37e3"},{"type":"declaration","property":"--dark-item-active-icon-color","value":"#c1c1c1"},{"type":"declaration","property":"--dark-btn-color-inverse","value":"#002030"},{"type":"declaration","property":"--dark-btn-color-secondary","value":"#e6e6e6"}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Brands\", \"fa-brands-400\""},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-solid-900\""},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-regular-400\""},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".page__content-icon",".page__content-placeholder"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".page__content-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"72"},{"type":"declaration","property":"vertical-align","value":"top"},{"type":"declaration","property":"margin-top","value":"20%"}]},{"type":"rule","selectors":[".nt-drawer__header-image"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45ba5ed4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/DrawerContent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&");
/* harmony import */ var _DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/DrawerContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38f02606",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('38f02606')) {
      api.createRecord('38f02606', component.options)
    } else {
      api.reload('38f02606', component.options)
    }
    module.hot.accept("./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&");
(function () {
      api.rerender('38f02606', {
        render: _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/DrawerContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=style&index=0&id=38f02606&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_style_index_0_id_38f02606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DrawerContent.vue?vue&type=template&id=38f02606&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerContent_vue_vue_type_template_id_38f02606_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Multi.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Multi.vue?vue&type=template&id=85618724&scoped=true&");
/* harmony import */ var _Multi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Multi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Multi.vue?vue&type=style&index=0&id=85618724&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Multi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "85618724",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('85618724')) {
      api.createRecord('85618724', component.options)
    } else {
      api.reload('85618724', component.options)
    }
    module.hot.accept("./components/Multi.vue?vue&type=template&id=85618724&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Multi.vue?vue&type=template&id=85618724&scoped=true&");
(function () {
      api.rerender('85618724', {
        render: _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Multi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Multi.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Multi.vue?vue&type=style&index=0&id=85618724&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=style&index=0&id=85618724&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_style_index_0_id_85618724_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Multi.vue?vue&type=template&id=85618724&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Multi.vue?vue&type=template&id=85618724&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multi_vue_vue_type_template_id_85618724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Notificaciones.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&");
/* harmony import */ var _Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Notificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Notificaciones.vue?vue&type=style&index=0&id=ee8bcd36&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee8bcd36",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ee8bcd36')) {
      api.createRecord('ee8bcd36', component.options)
    } else {
      api.reload('ee8bcd36', component.options)
    }
    module.hot.accept("./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&");
(function () {
      api.rerender('ee8bcd36', {
        render: _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Notificaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Notificaciones.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Notificaciones.vue?vue&type=style&index=0&id=ee8bcd36&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=style&index=0&id=ee8bcd36&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_style_index_0_id_ee8bcd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Notificaciones.vue?vue&type=template&id=ee8bcd36&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notificaciones_vue_vue_type_template_id_ee8bcd36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Progreso.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&");
/* harmony import */ var _Progreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Progreso.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Progreso.vue?vue&type=style&index=0&id=572c63f8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Progreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "572c63f8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('572c63f8')) {
      api.createRecord('572c63f8', component.options)
    } else {
      api.reload('572c63f8', component.options)
    }
    module.hot.accept("./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&");
(function () {
      api.rerender('572c63f8', {
        render: _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Progreso.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Progreso.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Progreso.vue?vue&type=style&index=0&id=572c63f8&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=style&index=0&id=572c63f8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_style_index_0_id_572c63f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Progreso.vue?vue&type=template&id=572c63f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progreso_vue_vue_type_template_id_572c63f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ReporteCitas.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&");
/* harmony import */ var _ReporteCitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ReporteCitas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ReporteCitas.vue?vue&type=style&index=0&id=c118b4ac&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReporteCitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c118b4ac",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c118b4ac')) {
      api.createRecord('c118b4ac', component.options)
    } else {
      api.reload('c118b4ac', component.options)
    }
    module.hot.accept("./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&");
(function () {
      api.rerender('c118b4ac', {
        render: _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ReporteCitas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ReporteCitas.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ReporteCitas.vue?vue&type=style&index=0&id=c118b4ac&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=style&index=0&id=c118b4ac&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_style_index_0_id_c118b4ac_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ReporteCitas.vue?vue&type=template&id=c118b4ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteCitas_vue_vue_type_template_id_c118b4ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ReporteDiagnosticos.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&");
/* harmony import */ var _ReporteDiagnosticos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ReporteDiagnosticos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ReporteDiagnosticos.vue?vue&type=style&index=0&id=eaac71de&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReporteDiagnosticos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eaac71de",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('eaac71de')) {
      api.createRecord('eaac71de', component.options)
    } else {
      api.reload('eaac71de', component.options)
    }
    module.hot.accept("./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&");
(function () {
      api.rerender('eaac71de', {
        render: _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ReporteDiagnosticos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ReporteDiagnosticos.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ReporteDiagnosticos.vue?vue&type=style&index=0&id=eaac71de&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=style&index=0&id=eaac71de&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_style_index_0_id_eaac71de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ReporteDiagnosticos.vue?vue&type=template&id=eaac71de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReporteDiagnosticos_vue_vue_type_template_id_eaac71de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Terapias.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&");
/* harmony import */ var _Terapias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Terapias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Terapias.vue?vue&type=style&index=0&id=a7a681b4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Terapias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7a681b4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('a7a681b4')) {
      api.createRecord('a7a681b4', component.options)
    } else {
      api.reload('a7a681b4', component.options)
    }
    module.hot.accept("./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&");
(function () {
      api.rerender('a7a681b4', {
        render: _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Terapias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Terapias.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Terapias.vue?vue&type=style&index=0&id=a7a681b4&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=style&index=0&id=a7a681b4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_4_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_style_index_0_id_a7a681b4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Terapias.vue?vue&type=template&id=a7a681b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Terapias_vue_vue_type_template_id_a7a681b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./shared/selected-page-service.js":
/***/ (function(module, exports, __webpack_require__) {

var {
  BehaviorSubject
} = __webpack_require__("rxjs");

function SelectedPageService() {
  if (SelectedPageService._instance) {
    throw new Error("Use SelectedPageService.getInstance() instead of new.");
  } // Observable selectedPage source


  this._selectedPageSource = new BehaviorSubject(""); // Observable selectedPage stream

  this.selectedPage$ = this._selectedPageSource.asObservable();

  this.updateSelectedPage = function (selectedPage) {
    this._selectedPageSource.next(selectedPage);
  };
}

SelectedPageService.getInstance = function () {
  return SelectedPageService._instance;
};

SelectedPageService._instance = new SelectedPageService();
module.exports = SelectedPageService;

/***/ }),

/***/ "./shared/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDrawer", function() { return closeDrawer; });
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

var showDrawer = () => {
  var drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.showDrawer();
  }
};
var closeDrawer = () => {
  var drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.closeDrawer();
  }
};

/***/ }),

/***/ "nativescript-ui-calendar":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar");

/***/ }),

/***/ "nativescript-ui-calendar/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/vue");

/***/ }),

/***/ "nativescript-ui-chart/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/vue");

/***/ }),

/***/ "nativescript-ui-sidedrawer":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer");

/***/ }),

/***/ "nativescript-ui-sidedrawer/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/vue");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/profiling":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/profiling");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/builder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/builder");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/core/weak-event-listener":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/weak-event-listener");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL011bHRpLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT81Nzk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWU/MjQwMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT84ZGJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlPzBiOGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlPzQ1ZDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT85OWJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzUxYzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/YmI3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ZDAzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzAwNDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/MGIzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT82ZTMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlP2M5MTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2JlMGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT82MDIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzljMDgiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzllMjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlP2M4NDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzQ4YzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzkyNWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZT8yNjEyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWU/MGJjYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZT8zZmM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXVsdGkudnVlPzBhNjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/MzA0ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT9iYmJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlP2ViMzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWU/ODdkMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZT8xN2RmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlPzgzMDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzby52dWU/M2U5MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlPzM4NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2I3MDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2NlNDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP2FhZTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/ZTFmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZT85ZmYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzlkNDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXJhcGlhcy52dWU/MTVhYyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcHJvZmlsaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvc3BhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3dlYWstZXZlbnQtbGlzdGVuZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3R5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMveG1sXCIiXSwibmFtZXMiOlsiQXBwIiwiUmVwb3J0ZURpYWdub3N0aWNvcyIsIkRyYXdlckNvbnRlbnQiLCJSYWRTaWRlRHJhd2VyIiwiQ2FsZW5kYXJWaWV3IiwiVnVlIiwidXNlIiwiY29uZmlnIiwic2lsZW50IiwicmVuZGVyIiwiaCIsInNsb3QiLCJCZWhhdmlvclN1YmplY3QiLCJyZXF1aXJlIiwiU2VsZWN0ZWRQYWdlU2VydmljZSIsIl9pbnN0YW5jZSIsIkVycm9yIiwiX3NlbGVjdGVkUGFnZVNvdXJjZSIsInNlbGVjdGVkUGFnZSQiLCJhc09ic2VydmFibGUiLCJ1cGRhdGVTZWxlY3RlZFBhZ2UiLCJzZWxlY3RlZFBhZ2UiLCJuZXh0IiwiZ2V0SW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic2hvd0RyYXdlciIsImRyYXdlck5hdGl2ZVZpZXciLCJnZXRSb290VmlldyIsImNsb3NlRHJhd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFMQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLHFHQUNBLFNBREEsQ0FDQSxnREFEQTtBQUVBO0FBQ0EsR0FMQTs7QUFNQTtBQUNBO0FBQ0EsdUZBREE7QUFFQSx5RUFGQTtBQUdBLGlFQUhBO0FBSUEsaUVBSkE7QUFLQSw2RUFMQTtBQU1BLHNCQU5BO0FBT0EsaUJBQ0E7QUFBQTtBQUNBO0FBREEsT0FEQTtBQVBBO0FBWUEsR0FuQkE7O0FBb0JBO0FBQ0EscUZBREE7QUFFQSx1RUFGQTtBQUdBLCtEQUhBO0FBSUEsK0RBSkE7QUFLQTtBQUxBLEdBcEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQU5BO0FB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RCx5REFBeUQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLG9EQUFvRCxxREFBcUQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLG9EQUFvRCxxREFBcUQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLG9EQUFvRCxxREFBcUQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCx5REFBeUQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCw2REFBNkQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCw2REFBNkQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCw2REFBNkQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCw2REFBNkQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSxFQUFFLHNEQUFzRCw2REFBNkQsRUFBRSxFQUFFLHNEQUFzRCwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCw0REFBNEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLHNEQUFzRCwwREFBMEQsRUFBRSw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHFEQUFxRCx1REFBdUQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSxFQUFFLHVEQUF1RCw4REFBOEQsRUFBRSxFQUFFLHVEQUF1RCw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCw2REFBNkQsRUFBRSw0REFBNEQsRUFBRSxFQUFFLHVEQUF1RCwyREFBMkQsRUFBRSw4REFBOEQsRUFBRSxFQUFFLHlDQUF5QyxFQUFFLDBEQUEwRCw0REFBNEQsRUFBRSxFQUFFLDJEQUEyRCw2REFBNkQsRUFBRSxFQUFFLDREQUE0RCw4REFBOEQsRUFBRSxFQUFFLCtEQUErRCxxRUFBcUUsRUFBRSxFQUFFLCtEQUErRCxxRUFBcUUsRUFBRSxFQUFFLGdFQUFnRSxzRUFBc0UsRUFBRSxFQUFFLG1FQUFtRSwrREFBK0QsRUFBRSxFQUFFLGlFQUFpRSw2REFBNkQsRUFBRSxFQUFFLDREQUE0RCw4REFBOEQsRUFBRSxFQUFFLDhGQUE4RixhQUFhLGlEQUFp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Ryx3REFBd0QsRUFBRSxFQUFFLG1GQUFtRixnRUFBZ0UsRUFBRSwrRUFBK0UsRUFBRSxFQUFFLGlHQUFpRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1JQUFtSSwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlHQUFpRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1JQUFtSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1HQUFtRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFIQUFxSCwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHFJQUFxSSwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHFHQUFxRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFIQUFxSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHVIQUF1SCwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHVJQUF1SSwwREFBMEQsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlHQUFpRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1JQUFtSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1HQUFtRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFIQUFxSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHFJQUFxSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlHQUFpRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1JQUFtSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHFHQUFxRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFIQUFxSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHVIQUF1SCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHVJQUF1SSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHFHQUFxRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHFIQUFxSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLHVIQUF1SCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLHVJQUF1SSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlHQUFpRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLG1IQUFtSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLG1JQUFtSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLCtGQUErRixpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLCtHQUErRyxpRUFBaUUsRUFBRSwwREFBMEQsRUFBRSxFQUFFLGlIQUFpSCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlJQUFpSSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLGlFQUFpRSxrRUFBa0UsRUFBRSxFQUFFLG1GQUFtRixxRUFBcUUsRUFBRSxFQUFFLCtEQUErRCwwREFBMEQsRUFBRSxrRUFBa0UsRUFBRSxFQUFFLGlGQUFpRix3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSxFQUFFLDBGQUEwRixxREFBcUQsRUFBRSxzREFBc0QsRUFBRSxFQUFFLG1FQUFt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Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEseUU7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsd0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxxRjs7Ozs7OztBQ0FBLDhFOzs7Ozs7O0FDQUEsbUY7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gPFJhZFNpZGVEcmF3ZXIgcmVmPVwiZHJhd2VyXCIgZHJhd2VyTG9jYXRpb249XCJMZWZ0XCIgZ2VzdHVyZXNFbmFibGVkPVwidHJ1ZVwiIDpkcmF3ZXJUcmFuc2l0aW9uPVwidHJhbnNpdGlvblwiPlxuICAgIDxTdGFja0xheW91dCB+ZHJhd2VyQ29udGVudCBiYWNrZ3JvdW5kQ29sb3I9XCIjZmZmZmZmXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZHJhd2VyQ29udGVudFwiPjwvc2xvdD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxGcmFtZSB+bWFpbkNvbnRlbnQgcmVmPVwiZHJhd2VyTWFpbkNvbnRlbnRcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJtYWluQ29udGVudFwiPjwvc2xvdD5cbiAgICA8L0ZyYW1lPlxuIDwvUmFkU2lkZURyYXdlcj4gXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZSc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cbiAgICAvLyBDdXN0b20gc3R5bGVzXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG48R3JpZExheW91dCByb3dzPVwiYXV0bywgKlwiIGNsYXNzPVwibnQtZHJhd2VyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhcyB0LTM2XCIgc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMmJkO1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIiB0ZXh0PVwiRnJhbmNpc2NvIFNhbnRpYWdvIE1vcmFsZXMgUm9hXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1mb290bm90ZVwiIHRleHQ9XCJFeHA6IDE2NTktMDlcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgXG4gICAgICAgICAgICA8U2Nyb2xsVmlldyByb3c9XCIxXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdSZXBvcnRlRGlhZ25vc3RpY29zJyA/ICcgLXNlbGVjdGVkJzogJycpXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkl0ZW1UYXAoUmVwb3J0ZURpYWdub3N0aWNvcylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9yZXBvcnRlZGlhZ25vc3RpY29cIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJSZXBvcnRlIGRlIGRpYWduw7NzdGljb3NcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiIDpjbGFzcz1cIidudC1kcmF3ZXJfX2xpc3QtaXRlbScgKyAoc2VsZWN0ZWRQYWdlID09PSAnUmVwb3J0ZUNpdGFzJyA/ICcgLXNlbGVjdGVkJzogJycpXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkl0ZW1UYXAoUmVwb3J0ZUNpdGFzKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3JlcG9ydGVjaXRhc1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIlJlcG9ydGUgZGUgY2l0YXNcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiIDpjbGFzcz1cIidudC1kcmF3ZXJfX2xpc3QtaXRlbScgKyAoc2VsZWN0ZWRQYWdlID09PSAnUHJvZ3Jlc28nID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChQcm9ncmVzbylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9wcm9ncmVzb3BhY2llbnRlXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXCIgY2xhc3M9XCJwLXItMTBcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiA6Y2xhc3M9XCInbnQtZHJhd2VyX19saXN0LWl0ZW0nICsgKHNlbGVjdGVkUGFnZSA9PT0gJ1RlcmFwaWFzJyA/ICcgLXNlbGVjdGVkJzogJycpXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkl0ZW1UYXAoVGVyYXBpYXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vdGVyYXBpYXNcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJUZXJhcGlhc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHJcIj48L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdOb3RpZmljYWNpb25lcycgPyAnIC1zZWxlY3RlZCc6ICcnKVwiIEB0YXA9XCJvbk5hdmlnYXRpb25JdGVtVGFwKE5vdGlmaWNhY2lvbmVzKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL25vdGlmaWNhY2lvbmVzXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiTm90aWZpY2FjaW9uZXNcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBSZXBvcnRlRGlhZ25vc3RpY29zIGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3NcIjtcbiAgICBpbXBvcnQgUmVwb3J0ZUNpdGFzIGZyb20gXCIuL1JlcG9ydGVDaXRhc1wiO1xuICAgIGltcG9ydCBUZXJhcGlhcyBmcm9tIFwiLi9UZXJhcGlhc1wiO1xuICAgIGltcG9ydCBQcm9ncmVzbyBmcm9tIFwiLi9Qcm9ncmVzb1wiO1xuICAgIGltcG9ydCBOb3RpZmljYWNpb25lcyBmcm9tIFwiLi9Ob3RpZmljYWNpb25lc1wiO1xuICAgIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICAgIGltcG9ydCBTZWxlY3RlZFBhZ2VTZXJ2aWNlIGZyb20gXCJ+L3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjsgICAgXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnNlbGVjdGVkUGFnZSRcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZFBhZ2UpID0+IHRoaXMuc2VsZWN0ZWRQYWdlID0gc2VsZWN0ZWRQYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUGFnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBSZXBvcnRlRGlhZ25vc3RpY29zOiBSZXBvcnRlRGlhZ25vc3RpY29zLFxuICAgICAgICAgICAgICAgIFJlcG9ydGVDaXRhczogUmVwb3J0ZUNpdGFzLFxuICAgICAgICAgICAgICAgIFRlcmFwaWFzOiBUZXJhcGlhcyxcbiAgICAgICAgICAgICAgICBQcm9ncmVzbzogUHJvZ3Jlc28sXG4gICAgICAgICAgICAgICAgTm90aWZpY2FjaW9uZXM6IE5vdGlmaWNhY2lvbmVzLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFnZTogXCJcIixcbiAgICAgICAgICAgICAgICB1c3VhcmlvczogW1xuICAgICAgICAgICAgICAgICAgICB7IG5vbWJyZTogXCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIixcbiAgICAgICAgICAgICAgICAgICAgIGV4cGVkaWVudGU6IFwiMTY1OS0wOVwifSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgUmVwb3J0ZURpYWdub3N0aWNvcyxcbiAgICAgICAgICAgIFJlcG9ydGVDaXRhcyxcbiAgICAgICAgICAgIFRlcmFwaWFzLFxuICAgICAgICAgICAgUHJvZ3Jlc28sXG4gICAgICAgICAgICBOb3RpZmljYWNpb25lc1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbk5hdmlnYXRpb25JdGVtVGFwKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHV0aWxzLmNsb3NlRHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJ35AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL2JsdWUnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8UGFnZT5cclxuXHRcdDxBY3Rpb25CYXIgdGl0bGU9XCJNdWx0aSBUZW1wbGF0ZXNcIj5cclxuXHRcdFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIGJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiBAdGFwPVwiZ29CYWNrXCIvPlxyXG5cdFx0PC9BY3Rpb25CYXI+XHJcblx0XHQ8R3JpZExheW91dCBjb2x1bW5zPVwiMjAsKlwiIHJvd3M9XCJhdXRvLGF1dG8sKlwiPlxyXG5cdFx0XHQ8QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dD1cIkV4cGFuZCBBbGxcIiBAdGFwPVwiZXhwYW5kQWxsXCI+PC9CdXR0b24+XHJcblx0XHRcdDxCdXR0b24gcm93PVwiMVwiIGNvbD1cIjFcIiB0ZXh0PVwiQ29sbGFwc2UgQWxsXCIgQHRhcD1cImNvbGxhcHNlQWxsXCI+PC9CdXR0b24+XHJcblx0XHRcdDxBY2NvcmRpb24gcm93PVwiMlwiIGNvbD1cIjFcIiBoZWlnaHQ9XCIxMDAlXCIgcmVmPVwiYWNjb3JkaW9uXCIgYWxsb3dNdWx0aXBsZT1cInRydWVcIiBjaGlsZEl0ZW1zPVwiY2hpbGRyZW5cIiBmb3I9XCJpdGVtIG9mIGl0ZW1zXCI+XHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkb2RkXCIgbmFtZT1cImhlYWRlci1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgOnRleHQ9XCJpdGVtLmhlYWRlclRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJGV2ZW5cIiBuYW1lPVwiaGVhZGVyLWV2ZW5cIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGJhY2tncm91bmRDb2xvcj1cIm9yYW5nZVwiIDp0ZXh0PVwiaXRlbS5oZWFkZXJUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRvZGRcIiBuYW1lPVwidGl0bGUtb2RkXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkZXZlblwiIG5hbWU9XCJ0aXRsZS1ldmVuXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRvZGRcIiBuYW1lPVwiY29udGVudC1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGhlaWdodD1cIjIwMFwiIDp0ZXh0PVwiaXRlbS50ZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRldmVuXCIgbmFtZT1cImNvbnRlbnQtZXZlblwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cInJlZFwiPlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgYmFja2dyb3VuZENvbG9yPVwieWVsbG93XCIgOnRleHQ9XCJpdGVtLnRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJG9kZFwiIG5hbWU9XCJmb290ZXItb2RkXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwieWVsbG93XCI+XHJcblx0XHRcdFx0XHRcdDxMYWJlbCA6dGV4dD1cIml0ZW0uZm9vdGVyVGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkZXZlblwiIG5hbWU9XCJmb290ZXItZXZlblwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cImJsdWVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsICA6dGV4dD1cIml0ZW0uZm9vdGVyVGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0PC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAnRGlhZ27Ds3N0aWNvJyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAnUmV0YXJkbyBkZSBsZW5ndWFqZSBhbsOhcnRpY28gbW9kZXJhZG8gJyB9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6ICdBdWRpY2nDs24gbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1ZGljacOzbiBiaWxhdGVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzIgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogWyB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ01lJyxcclxuXHRcdFx0XHRcdFx0fSwgeyB0ZXh0OiAnU3RvcCcgfSBdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzMgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXI6ICczMCcsXHJcblx0XHRcdFx0XHRcdGhlYWRlclRleHQ6ICdUaGlyZCcsXHJcblx0XHRcdFx0XHRcdGZvb3RlclRleHQ6ICc2JyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFsgeyB0ZXh0OiAnVGhpcyd9LCB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ1RoaW5nJyxcclxuXHRcdFx0XHRcdFx0fSBdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzQgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXI6ICc0MCcsXHJcblx0XHRcdFx0XHRcdGhlYWRlclRleHQ6ICdGb3VydGgnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXJUZXh0OiAnNycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbIHsgdGV4dDogJ05vdyd9LCB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ1BsZWFzZScsXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRleHBhbmRBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmFjY29yZGlvbi5uYXRpdmVWaWV3LmV4cGFuZEFsbCgpO1xyXG5cdFx0XHR9LCBjb2xsYXBzZUFsbDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuYWNjb3JkaW9uLm5hdGl2ZVZpZXcuY29sbGFwc2VBbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdEFjdGlvbkJhciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiYTgyO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cdC5tZXNzYWdlIHtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0fVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIk5vdGlmaWNhY2lvbmVzXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiTm90aWZpY2FjaW9uZXNcIj48L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbjxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj4gXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIzMCwgNTAsMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzBcIiBjb2x1bW5zPVwiMjAsMjgwLCBhdXRvXCI+XG5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIxXCIgIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJUZXJhcGlhc1wiPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCIxXCIgY29sPVwiMlwiICBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiICAvPlxuICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cInN1YnRpdHVsb1wiIHRleHQ9XCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgZGlhcmlhcyBwYXJhIHZlciB2w61kZW9zXCIgPiA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiM1wiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIj4gPC9MYWJlbD5cbiAgICAgICAgICAgIDxTd2l0Y2ggcm93PVwiM1wiIGNvbD1cIjJcIiBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInN1YnRpdHVsb1wiIHJvdz1cIjNcIiBjb2w9XCIxXCIgdGV4dD1cIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCByZWNpYmlyIGVsIGF2YW5jZVwiPiA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiNVwiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJDaXRhc1wiID4gPC9MYWJlbD5cbiAgICAgICAgICAgIDxTd2l0Y2ggcm93PVwiNVwiIGNvbD1cIjJcIiBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgICA8TGFiZWwgIHJvdz1cIjVcIiBjb2w9XCIxXCIgY2xhc3M9XCJzdWJ0aXR1bG9cIiB0ZXh0PVwiUmVjaWJlIG3DoXMgZGUgdW5hIG5vdGlmaWNhY2nDs25cIj4gPC9MYWJlbD5cblxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiN1wiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJSZXBvcnRlcyBkZSBwcm9ncmVzb1wiPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCI3XCIgY29sPVwiMlwiIGNoZWNrZWQ9XCJmYWxzZVwiIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCI3XCIgY29sPVwiMVwiIGNsYXNzPVwic3VidGl0dWxvXCIgIHRleHQ9XCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgbGxlZ2FyIGVsIHJlcG9ydGVcIj4gPC9MYWJlbD5cblxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICAgIGltcG9ydCBTZWxlY3RlZFBhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiU2V0dGluZ3NcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0RyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBBY3Rpb25CYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXG4gICAgICAgICAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgaWNvbj1cInJlczovL21lbnVcIiBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXG4gICAgICAgICAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXG4gICAgICAgICAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGljb249XCJyZXM6Ly9tZW51XCIgXG4gICAgICAgICAgICAgICAgYW5kcm9pZDp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgXG4gICAgICAgICAgICAgICAgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCJcbiAgICAgICAgICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgdGV4dD1cIlByb2dyZXNvIGRlbCBwYWNpZW50ZVwiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cbiAgICAgICAgPFNjcm9sbFZpZXc+XG5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9ncmVzbyBpbiBwcm9ncmVzb3NcIj5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjIwLDI1LDI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInByb2dyZXNvLmJsb3F1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkZlY2hhOiBEZWwgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJwcm9ncmVzby5pbmljaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiIGFsIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicHJvZ3Jlc28uZmluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwifi9zaGFyZWQvdXRpbHNcIjtcbiAgICAgICAgaW1wb3J0ICogYXMgY2FsZW5kYXJNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyJztcbiAgICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIlNlYXJjaFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzb3M6IFsgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTgvMDgvMzBcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMTAvMjJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDNcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDMvMTBcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMDgvMzBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDJcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDEvMTVcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMDMvMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDFcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTgvMTEvMTVcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTgvMDEvMTVcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiUmVwb3J0ZSBkZSBjaXRhc1wiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIFxuICAgIDxUYWJWaWV3ICBAc2VsZWN0ZWRJbmRleENoYW5nZT1cImluZGV4Q2hhbmdlXCI+XG4gICAgICAgICAgIDwhLS0gUGVzdGHDsWEgMS4gLS0+XG4gICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJQcm9ncmVzb1wiIGljb25Tb3VyY2U9XCJyZXM6Ly9wcm9ncmVzb1wiPlxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjMwLDMwLDIwMCwyMCwyMFwiIGNvbHVtbnM9XCIyMCwgKiwgMjBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIHRleHQ9XCJCbG9xdWUgNFwiIC8+XG4gICAgICBcbiAgICAgICAgPCEtLSAgR3LDoWZpY2EgZGUgZG9uYSAtLT5cbiAgICAgIDxSYWRQaWVDaGFydCBhbGxvd0FuaW1hdGlvbj1cInRydWVcIiByb3c9XCIyXCIgY29sPVwiMVwiPlxuICAgICAgICA8RG9udXRTZXJpZXMgdi10a1BpZVNlcmllcyBzZXJpZXNOYW1lPVwicGllXCJcbiAgICAgICAgICBzZWxlY3Rpb25Nb2RlPVwiRGF0YVBvaW50XCJcbiAgICAgICAgICBleHBhbmRSYWRpdXM9XCIwLjRcIlxuICAgICAgICAgIG91dGVyUmFkaXVzRmFjdG9yPVwiMC43XCJcbiAgICAgICAgICB2YWx1ZVByb3BlcnR5PVwiQ2FudGlkYWRcIlxuICAgICAgICAgIGxlZ2VuZExhYmVsPVwiQ2l0YXNcIlxuICAgICAgICAgIHNob3dMYWJlbHM9XCJ0cnVlXCJcbiAgICAgICAgICA6aXRlbXM9XCJjaXRhc1wiIC8+XG4gICAgICAgIDxSYWRMZWdlbmRWaWV3IHYtdGtQaWVMZWdlbmQgcG9zaXRpb249XCJSaWdodFwiIHRpdGxlPVwiQ2l0YXNcIiBvZmZzZXRPcmlnaW49XCJUb3BSaWdodFwiIHdpZHRoPVwiMTEwXCIgZW5hYmxlU2VsZWN0aW9uPVwidHJ1ZVwiPjwvUmFkTGVnZW5kVmlldz5cbiAgICBcbiAgICAgICAgPFBhbGV0dGUgdi10a1BpZVBhbGV0dGUgc2VyaWVzTmFtZT1cInBpZVwiPlxuICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiZ3JlZW5cIiBzdHJva2VDb2xvcj1cImdyZWVuXCI+PC9QYWxldHRlRW50cnk+XG4gICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwib3JhbmdlXCIgc3Ryb2tlQ29sb3I9XCJvcmFuZ2VcIj48L1BhbGV0dGVFbnRyeT5cbiAgICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiZ3JheVwiIHN0cm9rZUNvbG9yPVwiZ3JheVwiPjwvUGFsZXR0ZUVudHJ5PlxuICAgICAgPC9QYWxldHRlPiBcblxuXG4gICAgICA8L1JhZFBpZUNoYXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgPC9UYWJWaWV3SXRlbT5cblxuICAgICAgICA8IS0tUGVzdGHDsWEgMi4gQ2FsZW5kYXJpby0tPlxuICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJDYWxlbmRhcmlvXCI+XG4gICAgICAgICAgICA8UmFkQ2FsZW5kYXIgIGlkPVwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgOmV2ZW50U291cmNlPVwiY2FsZW5kYXJFdmVudHNcIiBcblxuICAgICAgICAgIGV2ZW50c1ZpZXdNb2RlPVwiSW5saW5lXCIgXG4gICAgICAgICAgc2VsZWN0aW9uTW9kZT1cIlNpbmdsZVwiIFxuICAgICAgICAgIHZpZXdNb2RlPVwiTW9udGhcIlxuICAgICAgICAgIHRyYW5zaXRpb25Nb2RlPVwiU3RhY2tcIiBcbiAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiIFxuICAgICAgICAgIFxuICAgICAgICAgIEBkYXRlU2VsZWN0ZWQ9XCJvbkRhdGVTZWxlY3RlZFwiIFxuICAgICAgICAgIEBkYXRlRGVzZWxlY3RlZD1cIm9uRGF0ZURlc2VsZWN0ZWRcIiBcbiAgICAgICAgICBAbmF2aWdhdGVkVG9EYXRlPVwib25OYXZpZ2F0ZWRUb0RhdGVcIlxuICAgICAgICAgIEBuYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZD1cIm9uTmF2aWdhdGluZ1RvRGF0ZVN0YXJ0ZWRcIiBcbiAgICAgICAgICBAdmlld01vZGVDaGFuZ2VkPVwib25WaWV3TW9kZUNoYW5nZWRcIiAvPlxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICA8IS0tIFBlc3Rhw7FhIDMuIExpc3RhIGRlIGNpdGFzIC0tPlxuICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkxpc3RhIGRlIGNpdGFzXCI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gaXRlbXNcIj4gICAgICAgICBcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICA8IS0tIFNob3dzIHRoZSBsaXN0IGl0ZW0gbGFiZWwgaW4gdGhlIGRlZmF1bHQgY29sb3IgYW5kIHN0eWxlLiAtLT5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjgwLDUwLDIwMCw1MFwiIHJvd3M9XCIyOCwyOFwiPlxuICAgICAgICAgICAgPExhYmVsICByb3c9XCIwXCIgY29sPVwiMFwiIDp0ZXh0PVwiaXRlbS5mZWNoYVwiICAvPlxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjbGFzcz1cImxpc3RhXCIgY29sPVwiMVwiIDp0ZXh0PVwiaXRlbS5pZEV4cGVkaWVudGVcIiAvPlxuICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY2xhc3M9XCJsaXN0YVwiIGNvbD1cIjJcIiA6dGV4dD1cIml0ZW0ubm9tYnJlXCIgLz5cblxuICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJsaXN0YVwiIGNvbD1cIjFcIiA6dGV4dD1cIml0ZW0uaG9yYUluaWNpb1wiID4gPC9MYWJlbD5cbiAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwibGlzdGFcIiBjb2w9XCIyXCIgOnRleHQ9XCJpdGVtLmhvcmFGaW5cIiAvPlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJWaWV3SXRlbT5cbiAgICA8L1RhYlZpZXc+XG5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcbiAgICBpbXBvcnQgKiBhcyBjYWxlbmRhck1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtdWktY2FsZW5kYXInO1xuICAgIGltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcbiAgICBWdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIlJlcG9ydGVDaXRhc1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gYXJncy52YWx1ZVxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCB0YWIgaW5kZXg6ICcgKyBuZXdJbmRleClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRhdGVTZWxlY3RlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25EYXRlU2VsZWN0ZWQ6IFwiICsgYXJncy5kYXRlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uRGF0ZURlc2VsZWN0ZWQoYXJncykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRGF0ZURlc2VsZWN0ZWQ6IFwiICsgYXJncy5kYXRlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uTmF2aWdhdGVkVG9EYXRlKGFyZ3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRlZFRvRGF0ZTogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZDogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25WaWV3TW9kZUNoYW5nZWQoYXJncykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uVmlld01vZGVDaGFuZ2VkOiBcIiArIGFyZ3MubmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGR1bW15IGV2ZW50c1xuICAgICAgICAgICAgbGV0IGV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnREYXRlO1xuICAgICAgICAgICAgbGV0IGVuZERhdGU7XG4gICAgICAgICAgICBsZXQgZXZlbnQ7XG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgaSAqIDIsIDE0KTtcbiAgICAgICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgKGkgKiAyKSwgMTYpO1xuICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwiVGVyYXBpYSBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgZmFsc2UsIGNvbG9yc1tpICogMTAgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgaWYgKGkgJSAzID09IDApIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwic2Vjb25kIFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCB0cnVlLCBjb2xvcnNbaSAqIDUgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHsgZmVjaGE6IFwiMTQvMDIvMjAyMFwiLCBpZEV4cGVkaWVudGU6IFwiTFRGMThcIiAsIG5vbWJyZTogXCJKb3PDqSBDYXJsb3MgSHVlcnRhIEdvbnrDoWxlc1wiLCBob3JhSW5pY2lvOiBcIjEyOjAwXCIsIGhvcmFGaW46IFwiMTM6MzBcIiB9LFxuICAgICAgICAgICAgICAgICAgeyBmZWNoYTogXCIyMS8wMi8yMDIwXCIsIGlkRXhwZWRpZW50ZTogXCJMVEYxOFwiICwgbm9tYnJlOiBcIkpvc8OpIENhcmxvcyBIdWVydGEgR29uesOhbGVzXCIsIGhvcmFJbmljaW86IFwiMTI6MDBcIiwgaG9yYUZpbjogXCIxMzozMFwiIH0sXG4gICAgICAgICAgICAgICAgICB7IGZlY2hhOiBcIjI4LzAyLzIwMjBcIiwgaWRFeHBlZGllbnRlOiBcIkxURjE4XCIgLCBub21icmU6IFwiSm9zw6kgQ2FybG9zIEh1ZXJ0YSBHb256w6FsZXNcIiwgaG9yYUluaWNpbzogXCIxMjowMFwiLCBob3JhRmluOiBcIjEzOjMwXCIgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY2l0YXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaXRhczogXCJDaXRhcyBkZSBhc2lzdGVuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkOiAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdGFzOiBcIkNpdGFzIHBlcmRpZGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdGFzOiBcIkNpdGFzIHJlc3RhbnRlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW50aWRhZDogOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuQWN0aW9uQmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuVGFiVmlld3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5saXN0YXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4QTFDQTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZ3Jlc3NiYXIge1xuICAgIGhlaWdodDogNTA7XG4gICAgbWFyZ2luOiAxMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMTtcbn1cbi5wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcbn1cbi5wcm9ncmVzc2Jhci1uZWdhdGl2ZS12YWx1ZXtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgYmFja2dyb3VuZENvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxuICAgICAgICAgICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIGljb249XCJyZXM6Ly9tZW51XCIgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxuICAgICAgICAgICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxuICAgICAgICAgICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8QWN0aW9uSXRlbSBpY29uPVwicmVzOi8vbWVudVwiIFxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIFxuICAgICAgICAgICAgICAgIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiXG4gICAgICAgICAgICAgICAgaW9zLnBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgPC9BY3Rpb25JdGVtPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiUmVwb3J0ZSBkZSBkaWFuw7NzdGljb3NcIj48L0xhYmVsPlxuICAgICAgICAgICAgICA8IS0tICA8SW1hZ2Ugc3JjPVwicmVzOi8vaWNvblwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz4tLT5cbiAgICAgICAgICAgICA8IS0tICAgPExhYmVsIHRleHQ9XCJOYXRpdmVTY3JpcHRcIiBmb250U2l6ZT1cIjI0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPiAtLT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgXG5cbjxTY3JvbGxWaWV3PlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjAsMjAsMjAsMjBcIiBjb2x1bW5zPVwiMjAsNDAsYXV0b1wiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXIgdG9wXCIgYmFja2dyb3VuZENvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhc1wiIHNyYy5kZWNvZGU9XCJmb250Oi8vJiN4ZjJiZDtcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMlwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIiB0ZXh0PVwiRnJhbmNpc2NvIFNhbnRpYWdvIE1vcmFsZXMgUm9hXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMlwiIGNvbD1cIjJcIiBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIgdGV4dD1cIkV4cDogMTY1OS0wOVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjNcIiBjb2w9XCIyXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiIHRleHQ9XCI1IGHDsW9zXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwhLS0gRGlhZ25vc3RpY28gLyBDb2xsYXBzZS0tPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cIm0tdC0yMCBtLWwtMzBcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGFsaWduQ29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJEaWFnbsOzc3RpY29cIiBAdGFwPVwiZ29Db2xsYXBzZSgkZXZlbnQpXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cImRpYWcgaW4gZGlhZ25vc3RpY29zXCJcbiAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIj4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT4gXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cIjFcIj4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwiZGlhZy5kaWFnbm9zdGljbzFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJkaWFnLmRpYWdub3N0aWNvMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cImRpYWcuZGlhZ25vc3RpY28zXCIvPiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9MaXN0Vmlldz4gXG4gICAgICAgICAgICAgICAgPCEtLSBUZXJhcGlhIGRlbCBsZW5ndWFqZSAvQ29sbGFwc2UgLS0+XG4gICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cIm0tdC0yMCBtLWwtMzBcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlRlcmFwaWEgZGUgbGVuZ3VhamVcIiBAdGFwPVwiZ29Db2xsYXBzZTIoJGV2ZW50KVwiIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwidGVyIGluIHRlcmFwaWFzXCJcbiAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveDIgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCI+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+IFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJ0ZXIudGVyYXBpYTFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJ0ZXIudGVyYXBpYTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJ0ZXIudGVyYXBpYTNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJ0ZXIudGVyYXBpYTRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJ0ZXIudGVyYXBpYTVcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRWR1Y2FjacOzbiBlc3BlY2lhbCAvQ29sbGFwc2UgLS0+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS10LTIwIG0tbC0zMFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYWxpZ25Db250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkVkdWNhY2nDs24gZXNwZWNpYWxcIiBAdGFwPVwiZ29Db2xsYXBzZTMoJGV2ZW50KVwiIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cIjFcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUHJ1ZWJhXCIgY2xhc3M9XCJib3ggcHVsbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICA6dmlzaWJpbGl0eT0gXCJzaG93Q29sbGFwc2VCb3gzID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUGxhbiBkZSB0cmFiYWpvIC9Db2xsYXBzZSAtLT5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJtLXQtMjAgbS1sLTMwXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGxhbiBkZSB0cmFiYWpvXCIgQHRhcD1cImdvQ29sbGFwc2U0KCRldmVudClcIiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicGxhbiBpbiBwbGFuVHJhYmFqb1wiXG4gICAgICAgICAgICAgICA6dmlzaWJpbGl0eT0gXCJzaG93Q29sbGFwc2VCb3g0ID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiPiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPiBcbiAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwicGxhbi5wbGFuMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInBsYW4ucGxhbjJcIi8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9MaXN0Vmlldz4gXG4gICAgICAgIFxuXG4gICAgPC9TdGFja0xheW91dD5cbjwvU2Nyb2xsVmlldz5cblxuXHRcblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcbiAgICBpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG4gICAgaW1wb3J0IFBhZ2VyIGZyb20gJ25hdGl2ZXNjcmlwdC1hY2NvcmRpb24vdnVlJ1xuXHRpbXBvcnQgTXVsdGkgZnJvbSAnLi9NdWx0aSdcblxuICAgIFZ1ZS51c2UoUGFnZXIpXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiSG9tZVwiKTtcbiAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb0JhY2s6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy4kbmF2aWdhdGVCYWNrKCk7XG5cdFx0XHR9LFxuXHRcdFx0Z29Ub011bHRpOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMuJG5hdmlnYXRlVG8oTXVsdGkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Db2xsYXBzZTogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb0NvbGxhcHNlMjogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveDIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgIGdvQ29sbGFwc2UzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94MylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvQ29sbGFwc2U0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94NClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3g0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaWFnbm9zdGljb3MgOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvMTogJ1JldGFyZG8gZGUgbGVuZ3VhamUgYW7DoXJ0aWNvIG1vZGVyYWRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvMjogJ0F1ZGljacOzbiBub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY28zOiAnQXVkdWNpw7NuIGJpbGF0ZXJhbCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdGVyYXBpYXMgOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWExOiAnMS4gRWplcmNpY2lvcyBkZSByZXNwaXJhY2nDs24geSByZWxhamFjacOzbi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTI6ICcyLiBFamVyY2ljaW9zIHByZWZvbmF0b3Jpb3MgeSBwcmF4aWFzIG9yb2ZhY2lhbGVzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhMzogJzMuIEVqZXJjaWNpb3MgcGFyYSBmb25lbWFzIC9yLywgL3JyLywgL2wvLCAvY2gvLCAvZi8sIC9rLywgL3MvLCBpbnRlcm1lZGlhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWE0OiAnNC4gVHJhYmFqYXIgYXVtZW50byBkZSB2b2NhYnVsYXJpbyBhY29yZGUgYSBsYSBlZGFkIHkgY2xhc2lmaWNhY2nDs24gcG9yIGNhbXBvcyBzZW3DoW50aWNvcy4gSGFjZXIgbMOhbWluYXMgY29uIGZpZ3VyYXMgZGUgYnVlbiB0YW1hw7FvIHBhcmEgcXVlIGxhcyBhcHJlbmRhIGEgZXNjcmliaXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTU6ICc1LiBUcmFiYWphciBlc3RpbXVsYWNpw7NuIGRlIGFzcGVjdG8gcHJhZ23DoXRpY28gbWVkaWFudGUgY2FudG9zLCBqdWVnb3MgeSBjdWVudG9zLidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcGxhblRyYWJham86IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbjE6ICcxLiBDb250aW51YXIgdGVyYXBpYSBkZSBsZW5ndWFqZSB5IGFwcmVuZGl6YWplIHNlbWFuYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbjI6ICcyLiBDaXRhIGFsIHRlcm1pbmFyIHRlcmFwaWFzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXBzZUJveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGFwc2VCb3gyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXBzZUJveDM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbGxhcHNlQm94NDogZmFsc2Vcblx0XHRcdH1cbiAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZSc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cblx0Lm1lc3NhZ2Uge1xuXHRcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMjA7XG5cdFx0Y29sb3I6ICMzMzMzMzM7XG5cdH1cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXG4gICAgICAgICAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgaWNvbj1cInJlczovL21lbnVcIiBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXG4gICAgICAgICAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXG4gICAgICAgICAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGljb249XCJyZXM6Ly9tZW51XCIgXG4gICAgICAgICAgICAgICAgYW5kcm9pZDp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgXG4gICAgICAgICAgICAgICAgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCJcbiAgICAgICAgICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgdGV4dD1cIlRlcmFwaWFzXCI+PC9MYWJlbD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cbiAgICAgICAgPFNjcm9sbFZpZXcgPlxuICAgICAgICA8TGlzdFZpZXcgZm9yPVwidGVyYXBpYSBpbiB0ZXJhcGlhc1wiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInRlcmFwaWEuaW1nXCIgY2xhc3M9XCJ0aHVtYlwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInRlcmFwaWEudGVyYXBpYVwiIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cblxuICAgICAgICA8L1Njcm9sbFZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICAgIGltcG9ydCBTZWxlY3RlZFBhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiRmVhdHVyZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0RyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXJhcGlhczogW1xuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUZXJhcGlhOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTogXCJSZXNwaXJhY2nDs24geSByZWxhamFjacOzblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL3Jlc3BpcmFjaW9uLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVGVyYXBpYTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWE6IFwiUHJlZm9uYXRvcmlvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL3ByZWZvbmF0b3Jpb3MuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUZXJhcGlhOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTogXCJQcmF4aWFzIG9yb2ZhY2lhbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcHJheGlhcy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhOiBcIkVqZXJjaWNpb3MgZGUgZm9uZW1hc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL2ZvbmVtYXMuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZSc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cbiAgICAvLyBDdXN0b20gc3R5bGVzXG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi00NWJhNWVkNCB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0FwcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBlbXB0eS1kYXRhLXYtMzhmMDI2MDYge30vKiBGb3JtcyAqL1xcbi8qKlxcbiAqIEJsdWUgdmFyaWFibGUgb3ZlcnJpZGVzXFxuICoqL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1lZThiY2QzNiB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuQWN0aW9uQmFyW2RhdGEtdi1lZThiY2QzNl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi50aXR1bG9bZGF0YS12LWVlOGJjZDM2XSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5zdWJ0aXR1bG9bZGF0YS12LWVlOGJjZDM2XSB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LTU3MmM2M2Y4IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LWMxMThiNGFjIHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5BY3Rpb25CYXJbZGF0YS12LWMxMThiNGFjXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuVGFiVmlld1tkYXRhLXYtYzExOGI0YWNdIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ubGlzdGFbZGF0YS12LWMxMThiNGFjXSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhBMUNBO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ucHJvZ3Jlc3NiYXJbZGF0YS12LWMxMThiNGFjXSB7XFxuICBoZWlnaHQ6IDUwO1xcbiAgbWFyZ2luOiAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMTtcXG59XFxuLnByb2dyZXNzYmFyLXZhbHVlW2RhdGEtdi1jMTE4YjRhY10ge1xcbiAgYmFja2dyb3VuZDogIzMzN2FiNztcXG59XFxuLnByb2dyZXNzYmFyLW5lZ2F0aXZlLXZhbHVlW2RhdGEtdi1jMTE4YjRhY10ge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUmVwb3J0ZUNpdGFzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1lYWFjNzFkZSB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuLm1lc3NhZ2VbZGF0YS12LWVhYWM3MWRlXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGl0bGVbZGF0YS12LWVhYWM3MWRlXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1hN2E2ODFiNCB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5BY3Rpb25CYXJbZGF0YS12LTg1NjE4NzI0XSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTg1NjE4NzI0XSB7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRjb2xvcjogIzMzMzMzMztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL011bHRpLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlJhZFNpZGVEcmF3ZXJcIixcbiAgICB7XG4gICAgICByZWY6IFwiZHJhd2VyXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBkcmF3ZXJMb2NhdGlvbjogXCJMZWZ0XCIsXG4gICAgICAgIGdlc3R1cmVzRW5hYmxlZDogXCJ0cnVlXCIsXG4gICAgICAgIGRyYXdlclRyYW5zaXRpb246IF92bS50cmFuc2l0aW9uXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZpZXc6ZHJhd2VyQ29udGVudFwiLFxuICAgICAgICAgICAgICBhcmc6IFwiZHJhd2VyQ29udGVudFwiLFxuICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRyYXdlckNvbnRlbnRcIildLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiRnJhbWVcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3Om1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgIGFyZzogXCJtYWluQ29udGVudFwiLFxuICAgICAgICAgICAgICBtb2RpZmllcnM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWY6IFwiZHJhd2VyTWFpbkNvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwibWFpbkNvbnRlbnRcIildLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiR3JpZExheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19jb250ZW50XCIsIGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgKlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXJcIixcbiAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhcyB0LTM2XCIsXG4gICAgICAgICAgICBhdHRyczogeyBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjJiZDtcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1mb290bm90ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJFeHA6IDE2NTktMDlcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2JvZHlcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgIChfdm0uc2VsZWN0ZWRQYWdlID09PSBcIlJlcG9ydGVEaWFnbm9zdGljb3NcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCIgLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbk5hdmlnYXRpb25JdGVtVGFwKF92bS5SZXBvcnRlRGlhZ25vc3RpY29zKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwicmVzOi8vcmVwb3J0ZWRpYWdub3N0aWNvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJSZXBvcnRlIGRlIGRpYWduw7NzdGljb3NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgKF92bS5zZWxlY3RlZFBhZ2UgPT09IFwiUmVwb3J0ZUNpdGFzXCIgPyBcIiAtc2VsZWN0ZWRcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbk5hdmlnYXRpb25JdGVtVGFwKF92bS5SZXBvcnRlQ2l0YXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJyZXM6Ly9yZXBvcnRlY2l0YXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIlJlcG9ydGUgZGUgY2l0YXNcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgKF92bS5zZWxlY3RlZFBhZ2UgPT09IFwiUHJvZ3Jlc29cIiA/IFwiIC1zZWxlY3RlZFwiIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTmF2aWdhdGlvbkl0ZW1UYXAoX3ZtLlByb2dyZXNvKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwicmVzOi8vcHJvZ3Jlc29wYWNpZW50ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgIChfdm0uc2VsZWN0ZWRQYWdlID09PSBcIlRlcmFwaWFzXCIgPyBcIiAtc2VsZWN0ZWRcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbk5hdmlnYXRpb25JdGVtVGFwKF92bS5UZXJhcGlhcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcInJlczovL3RlcmFwaWFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJUZXJhcGlhc1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoclwiIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgKF92bS5zZWxlY3RlZFBhZ2UgPT09IFwiTm90aWZpY2FjaW9uZXNcIiA/IFwiIC1zZWxlY3RlZFwiIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTmF2aWdhdGlvbkl0ZW1UYXAoX3ZtLk5vdGlmaWNhY2lvbmVzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwicmVzOi8vbm90aWZpY2FjaW9uZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIk5vdGlmaWNhY2lvbmVzXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiTXVsdGkgVGVtcGxhdGVzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiR28gYmFja1wiLCBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb0JhY2sgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIyMCwqXCIsIHJvd3M6IFwiYXV0byxhdXRvLCpcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBcIkV4cGFuZCBBbGxcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZXhwYW5kQWxsIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBcIkNvbGxhcHNlIEFsbFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jb2xsYXBzZUFsbCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkFjY29yZGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiYWNjb3JkaW9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRJdGVtczogXCJjaGlsZHJlblwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiaGVhZGVyLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmhlYWRlclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRldmVuXCIsIG5hbWU6IFwiaGVhZGVyLWV2ZW5cIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaGVhZGVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJG9kZFwiLCBuYW1lOiBcInRpdGxlLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IGl0ZW0udGl0bGUgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJGV2ZW5cIiwgbmFtZTogXCJ0aXRsZS1ldmVuXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogaXRlbS50aXRsZSB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiY29udGVudC1vZGRcIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjIwMFwiLCB0ZXh0OiBpdGVtLnRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkZXZlblwiLCBuYW1lOiBcImNvbnRlbnQtZXZlblwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiZm9vdGVyLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLmZvb3RlclRleHQgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJGV2ZW5cIiwgbmFtZTogXCJmb290ZXItZXZlblwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogaXRlbS5mb290ZXJUZXh0IH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgdGl0bGU6IFwiTm90aWZpY2FjaW9uZXNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk5vdGlmaWNhY2lvbmVzXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzAsIDUwLDMwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMjAsMjgwLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGVyYXBpYXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBub3RpZmljYWNpb25lcyBkaWFyaWFzIHBhcmEgdmVyIHbDrWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgcmVjaWJpciBlbCBhdmFuY2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2l0YXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBtw6FzIGRlIHVuYSBub3RpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0dWxvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlcG9ydGVzIGRlIHByb2dyZXNvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgbGxlZ2FyIGVsIHJlcG9ydGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpdGVtczogX3ZtLnByb2dyZXNvcywgXCIrYWxpYXNcIjogXCJwcm9ncmVzb1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzbyA9IHJlZi5wcm9ncmVzb1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIjIwLDI1LDI1XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2dyZXNvLmJsb3F1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMlwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRmVjaGE6IERlbCBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2dyZXNvLmluaWNpbyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIgYWwgXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBwcm9ncmVzby5maW4gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlcG9ydGUgZGUgY2l0YXNcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAgeyBvbjogeyBzZWxlY3RlZEluZGV4Q2hhbmdlOiBfdm0uaW5kZXhDaGFuZ2UgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIlByb2dyZXNvXCIsIGljb25Tb3VyY2U6IFwicmVzOi8vcHJvZ3Jlc29cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIzMCwzMCwyMDAsMjAsMjBcIiwgY29sdW1uczogXCIyMCwgKiwgMjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbDogXCIxXCIsIHRleHQ6IFwiQmxvcXVlIDRcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZFBpZUNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxsb3dBbmltYXRpb246IFwidHJ1ZVwiLCByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRG9udXRTZXJpZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVTZXJpZXNcIiwgcmF3TmFtZTogXCJ2LXRrUGllU2VyaWVzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc05hbWU6IFwicGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IFwiRGF0YVBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFJhZGl1czogXCIwLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXNGYWN0b3I6IFwiMC43XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk6IFwiQ2FudGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kTGFiZWw6IFwiQ2l0YXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsczogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2l0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlJhZExlZ2VuZFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVMZWdlbmRcIiwgcmF3TmFtZTogXCJ2LXRrUGllTGVnZW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNpdGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldE9yaWdpbjogXCJUb3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2VsZWN0aW9uOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYWxldHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVQYWxldHRlXCIsIHJhd05hbWU6IFwidi10a1BpZVBhbGV0dGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlcmllc05hbWU6IFwicGllXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJQYWxldHRlRW50cnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0a1BpZVBhbGV0dGVFbnRyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGFsZXR0ZUVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGtQaWVQYWxldHRlRW50cnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGFsZXR0ZUVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGtQaWVQYWxldHRlRW50cnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiZ3JheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJDYWxlbmRhcmlvXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlJhZENhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiY2FsZW5kYXJcIixcbiAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlOiBfdm0uY2FsZW5kYXJFdmVudHMsXG4gICAgICAgICAgICAgICAgICBldmVudHNWaWV3TW9kZTogXCJJbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IFwiU2luZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB2aWV3TW9kZTogXCJNb250aFwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk1vZGU6IFwiU3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZGF0ZVNlbGVjdGVkOiBfdm0ub25EYXRlU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkYXRlRGVzZWxlY3RlZDogX3ZtLm9uRGF0ZURlc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZWRUb0RhdGU6IF92bS5vbk5hdmlnYXRlZFRvRGF0ZSxcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRpbmdUb0RhdGVTdGFydGVkOiBfdm0ub25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXdNb2RlQ2hhbmdlZDogX3ZtLm9uVmlld01vZGVDaGFuZ2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJMaXN0YSBkZSBjaXRhc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaXRlbXM6IF92bS5pdGVtcywgXCIrYWxpYXNcIjogXCJpdGVtXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiODAsNTAsMjAwLDUwXCIsIHJvd3M6IFwiMjgsMjhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjBcIiwgdGV4dDogaXRlbS5mZWNoYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmlkRXhwZWRpZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMlwiLCB0ZXh0OiBpdGVtLm5vbWJyZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmhvcmFJbmljaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5ob3JhRmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZXBvcnRlIGRlIGRpYW7Ds3N0aWNvc1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyIHRvcFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIwLDIwLDIwLDIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMjAsNDAsYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjJiZDtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIyXCIsIHRleHQ6IFwiRXhwOiAxNjU5LTA5XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjJcIiwgdGV4dDogXCI1IGHDsW9zXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkRpYWduw7NzdGljb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLnNob3dDb2xsYXBzZUJveCA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRpYWdub3N0aWNvcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJkaWFnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFnID0gcmVmLmRpYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjAgbS1sLTMwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiVGVyYXBpYSBkZSBsZW5ndWFqZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZTIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3gyID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGVyYXBpYXMsXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwidGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXIgPSByZWYudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBib3JkZXJXaWR0aDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhNCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhNSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVkdWNhY2nDs24gZXNwZWNpYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvQ29sbGFwc2UzKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJveCBwdWxsLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBydWViYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3gzID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlBsYW4gZGUgdHJhYmFqb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZTQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3g0ID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucGxhblRyYWJham8sXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwicGxhblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbiA9IHJlZi5wbGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBib3JkZXJXaWR0aDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHBsYW4ucGxhbjEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiLCB0ZXh0OiBwbGFuLnBsYW4yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJUZXJhcGlhc1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0udGVyYXBpYXMsIFwiK2FsaWFzXCI6IFwidGVyYXBpYVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJhcGlhID0gcmVmLnRlcmFwaWFcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGVyYXBpYS5pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogdGVyYXBpYS50ZXJhcGlhIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCI6IFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zaGFyZWQvdXRpbHMuanNcIjogXCIuL3NoYXJlZC91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgUmVwb3J0ZURpYWdub3N0aWNvcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3NcIjtcbmltcG9ydCBEcmF3ZXJDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudFwiO1xuaW1wb3J0IFJhZFNpZGVEcmF3ZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL3Z1ZVwiO1xuaW1wb3J0IENhbGVuZGFyVmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvdnVlJztcblZ1ZS51c2UoQ2FsZW5kYXJWaWV3KTtcblZ1ZS51c2UoUmFkU2lkZURyYXdlcik7XG5cbi8vVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKTtcbiBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xubmV3IFZ1ZSh7XG4gICAgcmVuZGVyIChoKSB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIEFwcCxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBoKERyYXdlckNvbnRlbnQsIHsgc2xvdDogJ2RyYXdlckNvbnRlbnQnIH0pLFxuICAgICAgICAgICAgaChSZXBvcnRlRGlhZ25vc3RpY29zLCB7IHNsb3Q6ICdtYWluQ29udGVudCcgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH1cbiAgfSkuJHN0YXJ0KCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIhXFxuICogTmF0aXZlU2NyaXB0IFRoZW1lIF9fVkVSU0lPTl9fIChodHRwczovL25hdGl2ZXNjcmlwdC5vcmcpXFxuICogQ29weXJpZ2h0IDIwMTYtMjAxNiBUaGUgVGhlbWUgQXV0aG9yc1xcbiAqIENvcHlyaWdodCAyMDE2LTIwMTkgUHJvZ3Jlc3MgU29mdHdhcmVcXG4gKiBMaWNlbnNlZCB1bmRlciBBcGFjaGUgMi4wIChodHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L3RoZW1lL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXFxuIFwifSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImVtcHR5XCIsXCJrZXlmcmFtZXNcIjpbXX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEZvcm1zIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogQ29sb3IgY2xhc3Nlc1xcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcbipcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtZ3JleVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWdyZXlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWdyZXktbGlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNiYWJhYmFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ncmV5LWxpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNiYWJhYmFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1jaGFyY29hbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWNoYXJjb2FsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy10cmFuc3BhcmVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy10cmFuc3BhcmVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWFxdWFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1hcXVhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ibHVlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctYmx1ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYnJvd25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1icm93blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtZm9yZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctZm9yZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ncmV5LWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ncmV5LWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLXB1cnBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLXB1cnBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtbGVtb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1sZW1vblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtbGltZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWxpbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLW9yYW5nZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLW9yYW5nZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtcnVieVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLXJ1YnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLXNreVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLXNreVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtZXJyb3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1lcnJvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFdpZHRoL0hlaWdodCBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnctZnVsbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53LTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgtZnVsbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaC0xMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXG4qXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBBbGlnbm1lbnQgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtY2VudGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWxvd2VyY2FzZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwibG93ZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtdXBwZXJjYXNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jYXBpdGFsaXplXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJjYXBpdGFsaXplXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtd2VpZ2h0LW5vcm1hbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtd2VpZ2h0LWJvbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1pdGFsaWNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXN0eWxlXCIsXCJ2YWx1ZVwiOlwiaXRhbGljXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiKlxcbiAqIEZvbnQgc2l6ZVxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcbipcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xN1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0zNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjM4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgxXCIsXCIuaDJcIixcIi5oM1wiLFwiLmg0XCIsXCIuaDVcIixcIi5oNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuaDFcIixcIi5ucy1kYXJrIC5oMlwiLFwiLm5zLWRhcmsgLmgzXCIsXCIubnMtZGFyayAuaDRcIixcIi5ucy1kYXJrIC5oNVwiLFwiLm5zLWRhcmsgLmg2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib2R5XCIsXCIuYm9keTJcIixcIi5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5ib2R5XCIsXCIubnMtZGFyayAuYm9keTJcIixcIi5ucy1kYXJrIC5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2IzYjNiM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmg1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib2R5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9keTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgLmgxXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCAuaDJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIC5oM1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgLmg1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCAuYm9keTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmltZy1yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW1nLWNpcmNsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW1nLXRodW1ibmFpbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmludmlzaWJsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZpc2liaWxpdHlcIixcInZhbHVlXCI6XCJjb2xsYXBzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wdWxsLWxlZnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wdWxsLXJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC1hdXRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktYXV0b1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWRhbmdlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctZGFuZ2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtbW9kYWxcIixcIi5ucy1yb290XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcInNhbnMtc2VyaWZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLW1vZGFsXCIsXCIubnMtZGFyay5ucy1yb290XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLi1oaWRkZW5cIixcIi5oaWRkZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2aXNpYmlsaXR5XCIsXCJ2YWx1ZVwiOlwiY29sbGFwc2VkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLi1yb3VuZGVkXCIsXCIucm91bmRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLi1jaXJjbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIERpdmlkZXJzIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaHJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOSAwIDEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMCAwIDFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItc3R5bGVcIixcInZhbHVlXCI6XCJzb2xpZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LW11dGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYWNlNGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLnRleHQtbXV0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0NDZmODNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMYWJlbCA+ICpcIixcIkxhYmVsID4gKiA+ICpcIixcIkJ1dHRvbiA+ICpcIixcIkJ1dHRvbiA+ICogPiAqXCIsXCJUZXh0RmllbGQgPiAqXCIsXCJUZXh0RmllbGQgPiAqID4gKlwiLFwiVGV4dFZpZXcgPiAqXCIsXCJUZXh0VmlldyA+ICogPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXdcIixcIlJhZExpc3RWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLWhlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLWhlaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiLFwiLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwibm9uZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDUgMCA1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDE2IDggMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIEJ1dHRvblwiLFwiLm5zLWlvcyAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNCAxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tb3V0bGluZVwiLFwiLm50LWJ1dHRvbi4tb3V0bGluZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEJ1dHRvbi4tb3V0bGluZVwiLFwiLm5zLWFuZHJvaWQgLm50LWJ1dHRvbi4tb3V0bGluZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXJvdW5kZWQtc21cIixcIkJ1dHRvbi4tcm91bmRlZC1sZ1wiLFwiLm50LWJ1dHRvbi4tcm91bmRlZC1zbVwiLFwiLm50LWJ1dHRvbi4tcm91bmRlZC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBCdXR0b24uLXJvdW5kZWQtc21cIixcIi5ucy1hbmRyb2lkIEJ1dHRvbi4tcm91bmRlZC1sZ1wiLFwiLm5zLWFuZHJvaWQgLm50LWJ1dHRvbi4tcm91bmRlZC1zbVwiLFwiLm5zLWFuZHJvaWQgLm50LWJ1dHRvbi4tcm91bmRlZC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXJvdW5kZWQtbGdcIixcIi5udC1idXR0b24uLXJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5udC1idXR0b25baXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXNpbXBsZVwiLFwiLm50LWJ1dHRvbi4tc2ltcGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1lbGV2YXRpb25cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1keW5hbWljLWVsZXZhdGlvbi1vZmZzZXRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1hcXVhXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1hcXVhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1hcXVhXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWFxdWFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1hcXVhLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1hcXVhLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmRmZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYXF1YS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1hcXVhLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmRmZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWJsdWVcIixcIi5ucy1yb290IC5udC1idXR0b24uLWJsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWJsdWVcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYmx1ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWJsdWUuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWJsdWUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYmx1ZS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ibHVlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1icm93blwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYnJvd25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWJyb3duXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWJyb3duXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYnJvd24uLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWJyb3duLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmJmOWY4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYnJvd24uLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYnJvd24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmYmY5ZjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tZm9yZXN0XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1mb3Jlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWZvcmVzdFwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1mb3Jlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1mb3Jlc3QuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWZvcmVzdC4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzljZmZmZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWZvcmVzdC4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1mb3Jlc3QuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM5Y2ZmZmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tZ3JleVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tZ3JleVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tZ3JleVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ncmV5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tZ3JleS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tZ3JleS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ncmV5Li1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWdyZXkuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWxlbW9uXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1sZW1vblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tbGVtb25cIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGVtb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1sZW1vbi4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGVtb24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tbGVtb24uLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGVtb24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWxpbWVcIixcIi5ucy1yb290IC5udC1idXR0b24uLWxpbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWxpbWVcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGltZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWxpbWUuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWxpbWUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tbGltZS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1saW1lLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1vcmFuZ2VcIixcIi5ucy1yb290IC5udC1idXR0b24uLW9yYW5nZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tb3JhbmdlXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLW9yYW5nZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLW9yYW5nZS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tb3JhbmdlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLW9yYW5nZS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1vcmFuZ2UuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXB1cnBsZVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tcHVycGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1wdXJwbGVcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tcHVycGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tcHVycGxlLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1wdXJwbGUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tcHVycGxlLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXB1cnBsZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tcnVieVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tcnVieVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tcnVieVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ydWJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tcnVieS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tcnVieS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ydWJ5Li1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXJ1YnkuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXNreVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tc2t5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1za3lcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tc2t5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tc2t5Li1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1za3kuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tc2t5Li1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXNreS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZyYW1lXCIsXCIubnQtZnJhbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEZyYW1lXCIsXCIubnMtZGFyayAubnQtZnJhbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBhZ2VcIixcIi5udC1wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQYWdlXCIsXCIubnMtZGFyayAubnQtcGFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGl2aXR5SW5kaWNhdG9yXCIsXCIubnQtYWN0aXZpdHktaW5kaWNhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2xpZGVyXCIsXCIubnQtc2xpZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjAgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFNsaWRlclwiLFwiLm5zLWlvcyAubnQtc2xpZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTAgMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm50LXNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBTd2l0Y2hcIixcIi5ucy1hbmRyb2lkIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtYW5kcm9pZCAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlNmU2ZTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1hbmRyb2lkIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRhNGE0YVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU3dpdGNoXCIsXCIubnMtaW9zIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWlvcyAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1pb3MgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJWaWV3XCIsXCIubnQtdGFiLXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItdGV4dC1mb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwiY2FwaXRhbGl6ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJvdHRvbU5hdmlnYXRpb25cIixcIi5udC1ib3R0b20tbmF2aWdhdGlvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXdcIixcIlJhZExpc3RWaWV3XCIsXCIubnQtbGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgU3RhY2tMYXlvdXRcIixcIlJhZExpc3RWaWV3IFN0YWNrTGF5b3V0XCIsXCIubnQtbGlzdC12aWV3IFN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyA+ICpcIixcIlJhZExpc3RWaWV3ID4gKlwiLFwiLm50LWxpc3QtdmlldyA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyA+ICogTGFiZWxcIixcIlJhZExpc3RWaWV3ID4gKiBMYWJlbFwiLFwiLm50LWxpc3QtdmlldyA+ICogTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgPiAqIEltYWdlXCIsXCJSYWRMaXN0VmlldyA+ICogSW1hZ2VcIixcIi5udC1saXN0LXZpZXcgPiAqIEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic3RyZXRjaFwiLFwidmFsdWVcIjpcImFzcGVjdEZpdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC50aHVtYlwiLFwiTGlzdFZpZXcgLi10aHVtYlwiLFwiUmFkTGlzdFZpZXcgLnRodW1iXCIsXCJSYWRMaXN0VmlldyAuLXRodW1iXCIsXCIubnQtbGlzdC12aWV3IC50aHVtYlwiLFwiLm50LWxpc3QtdmlldyAuLXRodW1iXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic3RyZXRjaFwiLFwidmFsdWVcIjpcImZpbGxcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4taGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcuLXNpbmdsZS1jb2wtY2FyZHMgSW1hZ2VcIixcIlJhZExpc3RWaWV3Li1zaW5nbGUtY29sLWNhcmRzIEltYWdlXCIsXCIubnQtbGlzdC12aWV3Li1zaW5nbGUtY29sLWNhcmRzIEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgSW1hZ2VcIixcIlJhZExpc3RWaWV3Li10d28tY29sLWNhcmRzIEltYWdlXCIsXCIubnQtbGlzdC12aWV3Li10d28tY29sLWNhcmRzIEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0XCIsXCIubnMtaW9zIFJhZExpc3RWaWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXRcIixcIi5ucy1pb3MgLm50LWxpc3Qtdmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIExpc3RWaWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXQgSW1hZ2VcIixcIi5ucy1pb3MgUmFkTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dCBJbWFnZVwiLFwiLm5zLWlvcyAubnQtbGlzdC12aWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXQgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3Li10d28tbGluZXMtaW1hZ2UgSW1hZ2VcIixcIkxpc3RWaWV3Li1zaW5nbGUtbGluZS1pbWFnZSBJbWFnZVwiLFwiUmFkTGlzdFZpZXcuLXR3by1saW5lcy1pbWFnZSBJbWFnZVwiLFwiUmFkTGlzdFZpZXcuLXNpbmdsZS1saW5lLWltYWdlIEltYWdlXCIsXCIubnQtbGlzdC12aWV3Li10d28tbGluZXMtaW1hZ2UgSW1hZ2VcIixcIi5udC1saXN0LXZpZXcuLXNpbmdsZS1saW5lLWltYWdlIEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCJSYWRMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiLm50LWxpc3QtdmlldyAuLXNlcGFyYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20td2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCJSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIi5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiLm5zLWlvcyBSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIi5ucy1pb3MgLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCAxMCAwIDI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIlJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCIubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJjYXBpdGFsaXplXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWljb25cIixcIlJhZExpc3RWaWV3IC5udC1pY29uXCIsXCIubnQtbGlzdC12aWV3IC5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjU2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRMaXN0VmlldyA+IFN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRMaXN0VmlldyA+ICogPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJ0b3BcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMzUgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyIExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgPiBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjc0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1mb290bm90ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyID4gTGFiZWxcIixcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciA+IExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXIuLWxlZnQgPiBMYWJlbFwiLFwiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXIuLWxlZnQgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci4tbGVmdCA+IExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci4tbGVmdCAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9yaWVudGF0aW9uXCIsXCJ2YWx1ZVwiOlwiaG9yaXpvbnRhbFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtIExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbSBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0gLm50LWljb25cIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtIC5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMWUxZTFlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlciBMYWJlbFwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlciBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtXCIsXCIubnQtZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ1JvYm90byBSZWd1bGFyJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNiAwIDEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBGb3JtXCIsXCIubnMtaW9zIC5udC1mb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInU0YgVUkgVGV4dCBSZWd1bGFyJywgc3lzdGVtXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAuLWNlbnRlclwiLFwiLm50LWZvcm0gLi1jZW50ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fb3Itc2VwYXJhdG9yXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fb3Itc2VwYXJhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjAgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX2xpbmtcIixcIi5udC1mb3JtIC5udC1mb3JtX19saW5rXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRm9ybSAubnQtZm9ybV9fbGlua1wiLFwiLm5zLWRhcmsgLm50LWZvcm0gLm50LWZvcm1fX2xpbmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX190aXRsZVwiLFwiLm50LWZvcm0gLm50LWZvcm1fX3RpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX19sb2dvXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fbG9nb1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwIDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX3ZhbGlkYXRpb24tbWVzc2FnZVwiLFwiLm50LWZvcm0gLm50LWZvcm1fX3ZhbGlkYXRpb24tbWVzc2FnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEgMCAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX2Zvb3RlclwiLFwiLm50LWZvcm0gLm50LWZvcm1fX2Zvb3RlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX2Zvb3RlciBCdXR0b25cIixcIi5udC1mb3JtIC5udC1mb3JtX19mb290ZXIgQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI1MCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybVtpc0VuYWJsZWQ9ZmFsc2VdICpcIixcIi5udC1mb3JtW2lzRW5hYmxlZD1mYWxzZV0gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRm9ybSBWYWxpZGF0aW9uIHN0eWxpbmcgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3Lm5nLXZhbGlkXCIsXCJUZXh0RmllbGQubmctdmFsaWRcIixcIlBpY2tlckZpZWxkLm5nLXZhbGlkXCIsXCJEYXRlUGlja2VyRmllbGQubmctdmFsaWRcIixcIlRpbWVQaWNrZXJGaWVsZC5uZy12YWxpZFwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcubmctdmFsaWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlldy5uZy1pbnZhbGlkLm5nLWRpcnR5XCIsXCJUZXh0RmllbGQubmctaW52YWxpZC5uZy1kaXJ0eVwiLFwiUGlja2VyRmllbGQubmctaW52YWxpZC5uZy1kaXJ0eVwiLFwiRGF0ZVBpY2tlckZpZWxkLm5nLWludmFsaWQubmctZGlydHlcIixcIlRpbWVQaWNrZXJGaWVsZC5uZy1pbnZhbGlkLm5nLWRpcnR5XCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldy5uZy1pbnZhbGlkLm5nLWRpcnR5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEZvcm0gZmllbGRzIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlld1wiLFwiVGV4dEZpZWxkXCIsXCJQaWNrZXJGaWVsZFwiLFwiRGF0ZVBpY2tlckZpZWxkXCIsXCJUaW1lUGlja2VyRmllbGRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzXCIsXCJEYXRhRm9ybUVkaXRvckNvcmVcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMCAwIDFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjggMCA0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNSAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3Li1yb3VuZGVkXCIsXCJUZXh0Vmlldy4tYm9yZGVyXCIsXCJUZXh0RmllbGQuLXJvdW5kZWRcIixcIlRleHRGaWVsZC4tYm9yZGVyXCIsXCJQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiUGlja2VyRmllbGQuLWJvcmRlclwiLFwiRGF0ZVBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJEYXRlUGlja2VyRmllbGQuLWJvcmRlclwiLFwiVGltZVBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJUaW1lUGlja2VyRmllbGQuLWJvcmRlclwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHMuLXJvdW5kZWRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzLi1ib3JkZXJcIixcIkRhdGFGb3JtRWRpdG9yQ29yZS4tcm91bmRlZFwiLFwiRGF0YUZvcm1FZGl0b3JDb3JlLi1ib3JkZXJcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Li1yb3VuZGVkXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldy4tYm9yZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyIDE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXcuLXJvdW5kZWRcIixcIlRleHRGaWVsZC4tcm91bmRlZFwiLFwiUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIkRhdGVQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiVGltZVBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkcy4tcm91bmRlZFwiLFwiRGF0YUZvcm1FZGl0b3JDb3JlLi1yb3VuZGVkXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldy4tcm91bmRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJUZXh0RmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0ZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIlRpbWVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkc1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRhRm9ybUVkaXRvckNvcmVbaXNFbmFibGVkPWZhbHNlXVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMYWJlbFwiLFwiRGF0YUZvcm1FZGl0b3JMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyIDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi1oZWlnaHRcIixcInZhbHVlXCI6XCIxMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1tkaXNwbGF5TW9kZT1Ub2tlbnNdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjQgMCA4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgVG9rZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgVG9rZW5DbGVhckJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiLjZcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRGF0ZSBQaWNrZXIgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlckZpZWxkXCIsXCJEYXRlUGlja2VyRmllbGRcIixcIlRpbWVQaWNrZXJGaWVsZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIkRhdGFGb3JtRWRpdG9yQ29yZVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXJlcGVhdFwiLFwidmFsdWVcIjpcIm5vLXJlcGVhdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtcG9zaXRpb25cIixcInZhbHVlXCI6XCJyaWdodCBjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFBpY2tlckZpZWxkXCIsXCIubnMtaW9zXFxuICBEYXRlUGlja2VyRmllbGRcIixcIi5ucy1pb3NcXG4gIFRpbWVQaWNrZXJGaWVsZFwiLFwiLm5zLWlvc1xcbiAgRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIi5ucy1pb3NcXG4gIERhdGFGb3JtRWRpdG9yQ29yZVwiLFwiLm5zLWlvc1xcbiAgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCIyOCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlByb3BlcnR5RWRpdG9yW3R5cGU9J0RhdGUnXSBEYXRhRm9ybUVkaXRvckNvcmVcIixcIkRhdGVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFEMUJNVkVWSGNFd0FBQUFBQUFBQUFBQUFBQURUckFqL0FBQUFCSFJTVGxNQXdCQWdVNURDUXdBQUFGZEpSRUZVU01kallDQVZ1TGk0b0RIb3A1Ukp4QVVET0NwZ1Zjcm9nZ1VJWUZYS2drMnBNdzZsQ2hodWRYSEFvWlNCVmtyUncyNkVLY1VDNkt0ME5Bb0drVklXYUZTTktoMjVTZ2Q3UVVSQ1pVUkNGVWNMQUFDMkkyaEVFQ0JZUGdBQUFBQkpSVTVFcmtKZ2dnPT1cXFwiKVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBUaW1lIFBpY2tlciBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvcGVydHlFZGl0b3JbdHlwZT0nVGltZSddIERhdGFGb3JtRWRpdG9yQ29yZVwiLFwiVGltZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUxWQk1WRVZIY0V3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN0dGw2bkFBQUFEblJTVGxNQVlPQkF3Q0FRMEZDQWNQQ3dvRVp3ZGhzQUFBRTJTVVJCVkVqSFkyQVlMSUIxVGQyN2Q4OVBCUkJXeVFoVUNBTFBCUWlxMUhzSEJZOElxR1gxZS9mdXlXUmpZMHNRamQ4TjNlL2VLU2FBR0d4Qzc5N3R3R3M5VUNXTURWU0x6d2x5Nzk0bXdOaHM5OTQ5eEsyU0E4VWdvQlVOT0pWR281b2o5MjRyVHFWK0VFUDUzc0dNZllMYlUyOFprSlV5M01QcE1hWjNhcWhLazk0cDRQUy9BS3BTUnB4aFVQZUlBVlVwZzk1ekhKRUtNd09oVk80ZDlzamxldmNNWFduZXV3VllsZks4YzBCWHl2THVBSTRBbUlDdWxQTmRBVmFsZk84TTBKVnl2SHRBckZKbXFpcUZBQ29wYlNCV0tUc3NzQkFBVjJEQm93QUJjRVVCUEdJUkFGZkVzbUltT1Z6SkJaNElFUUJYSW9RbmJhUWM5SkJBaG9FRDNCa0dsZzNoQUhjMmhHVnVoTlluMUNneVNDaUlTQ2plU0NrMFNTaUtJUVg4REdQalRzSUZQQW5WQmltVkVTbFYzSUFCQUtEa3o1akhJY1RvQUFBQUFFbEZUa1N1UW1DQ1xcXCIpXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIERhdGUvVGltZSBQaWNrZXIgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGVUaW1lUGlja2VyRmllbGRzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtnQUFBQXdCQU1BQUFCM1VDeXBBQUFBTFZCTVZFVkhjRXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3R0bDZuQUFBQURuUlNUbE1BUUdEZ3dCQWcwRkNBY1BDd29NOUllK2tBQUFHY1NVUkJWRWpINVplL1RzTXdFTVpEMnBRV1ZSVVp1MFZpanhBU2E4VVRWSlhZVVhZV25pRHFpbGhnWStRQm1CRWpNdzlSdFRRbFU3OW5JQ1J5ckRqeHhZa2RxWWh2aVllN1g4Ny83czZXbFFxQU1EQ2dQd0YxNWlncFdoQU9nOWNRaUQ4REN0cEhoYTdrOW5hWW1jUWVBWjFVUWIvbHpCbXoyWG9VZEZGYVUyeWtjMDhXSzNweTNlbnZOeUNnVmdQb0EzQ1JMcmh6QnJ5Ymdkb0prNDBUcWtkQ3hSTW1nL3JZNXdmRFdlSExCSFJZQ0M0SmUya0FlbHVNemNlYkFlZzhDNVM1MklqMG9UYjJSWmVWYktzYVFIdTRMTHBjNDd6QmpkcEk5dDRyUW0zWi9qZUFobHR4Y3JOWUZ6cGdjWEdvajBCelRVK3dFMTF1OEtJSkhiT015RjM2K05DRTl2QW91b3drMjY4T25lQlVkQmxpYlI1NmRQRFFUQWNNWGJhQlp0WnJDZlNZSFNtdUVlNDBvZU55TzZCeStHbG9mazI1Vks0cERSMlVFNTFLUXFHaGVlcmprcWMrWmFndlZnOGlTU3REV1RuSlJaUVRaU2dyZkxtVUNsOE5sSlZvL2hPVkVsMEhiZFZNMUVGYnRUMTEwRTRhdEc1YXlVWk5yekkwYmMrZlhmZStyajJ2MEU3eklkSEprNmVUeDVubHVDVUYxai9SRHhRUVB3M2k5Tit6QUFBQUFFbEZUa1N1UW1DQ1xcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBEYXRlVGltZVBpY2tlckZpZWxkc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcIjU2IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0ZVRpbWVQaWNrZXJGaWVsZHMgLmlucHV0XCIsXCJEYXRlVGltZVBpY2tlckZpZWxkcyBEYXRlUGlja2VyRmllbGRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzIFRpbWVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJub25lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkcyAuaW5wdXRcIixcIi5ucy1kYXJrXFxuICAgIERhdGVUaW1lUGlja2VyRmllbGRzIERhdGVQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmtcXG4gICAgRGF0ZVRpbWVQaWNrZXJGaWVsZHMgVGltZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcIm5vbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRlVGltZVBpY2tlckZpZWxkcyBUaW1lUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIi0zMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQaWNrZXIgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUdGQk1WRVZIY0V3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQm9BdFRMQUFBQUIzUlNUbE1Bb1BBdzBCQWdDRUpVNHdBQUFFcEpSRUZVU01kallCZ0Znd1V3Q2hDdFZMeVFhRVBMeTRrMU5xbThuRmhqbWRXSk45Wm8xTmdoWml3SlNvbDN3S2loQTJvb0NaazdoUGoweCtwT2RFSEVFRUo4OFRZS0Jnb0FBQUM1SlJnNDlySVdBQUFBQUVsRlRrU3VRbUNDXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZSBMaXN0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlcGFyYXRvci1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZSBMaXN0VmlldyA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEwIDEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQVlVRXhVUlVkd1RQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8veDFMVmI0QUFBQUhkRkpPVXdDZzhERFFFQ0FJUWxUakFBQUFTa2xFUVZSSXgyTmdHQVdEQlRBS0VLMVV2SkJvUTh2TGlUVTJxYnljV0dPWjFZazMxbWpVMkNGbUxBbEtpWGZBcUtFRGFpZ0ptVHVFK1BUSDZrNTBRY1FRUW56eE5nb0dDZ0FBQUxrbEdEajJzaFlBQUFBQVNVVk9SSzVDWUlJPVxcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRGF0ZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQVBVRXhVUlVkd1RQLy8vLy8vLy8vLy8vLy8veFBnTVJvQUFBQUVkRkpPVXdEQUVDQlRrTUpEQUFBQVYwbEVRVlJJeDJOZ0lCVzR1TGlnTWVpbmxFbkVCUU00S21CVnl1aUNCUWhnVmNxQ1Rha3pEcVVLR0c1MWNjQ2hsSUZXU3RIRGJvUXB4UUxvcTNRMENnYVJVaFpvVkkwcUhibEtCM3RCUkVKbFJFSVZSd3NBQUxZamFFUVFJRmcrQUFBQUFFbEZUa1N1UW1DQ1xcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGltZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQXRVRXhVUlVkd1RQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzgxZTNRSUFBQUFPZEZKT1V3Qmc0RURBSUJEUVVIRHdzS0NBNGlzdkpBQUFBVFpKUkVGVVNNZGpZQmdzZ0hWMjNidDN6M2NHRUZiSkNGUUlBczhGQ0tyVWV3Y0Zqd2lvWmZWNzkrN0paV05qV3hDTjN3MWQ3OTRwSm9BWWJFTHYzcTNBYXoxUUpZd05WSXZQQ1hMdjNpVEEyR3puM2ozRXJaSUR4U0NnRlEwNGxVYWhtaVAzYmlsT3BYNFFRL25ld1l4OWd0dFRieGlRbFRLY3cra3hwbmRxcUVxVDNpbmc5TDhBcWxKR25HRlE5NGdCVlNtRDNuTWNrUW96QTZGVTdoMzJ5T1Y4OXd4ZGFkNjdDVmlWY3I5elFGZks4bTREamdDNGdLNlU5MTBCVnFWODd3elFsWEs4ZTBDc1VtYXFLb1VBS2lsdElGWXBPeXl3RUFCWFlNR2pBQUZ3UlFFOFloRUFWOFN5WWlZNVhNa0ZuZ2dSQUZjaWhDZHRwQnowa0VDR2dRUGNHUWFXRGVFQWR6YUVaVzZFMWlmVUtESklLSWhJS041SUtUUkpLSW9oQmZ3TlkrTmV3Z1U4Q2RVR0taVVJLVlhjZ0FFQXExTFBtRjFxRGV3QUFBQUFTVVZPUks1Q1lJST1cXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLZ0FBQUF3QkFNQUFBQjNVQ3lwQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBQXRVRXhVUlVkd1RQLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzgxZTNRSUFBQUFPZEZKT1V3QkFZT0RBRUNEUVVIRHdzS0NBYXhNaTFnQUFBWnhKUkVGVVNNZmxsODlLdzBBUXhtUGExRXBwTVE5UUNIZ1BJbmd0UGtFcGVKZWNQZmtFb1dkQjhPNWRQSHIxSllyZVBMWTJOWmZ5UFlNeFliTmtrNTFzc2h1bytGMnloNWxmWnYvTnpGcFdLZ0RDd0lEK0JOU1pvNlJvUVRnTW5rSWdmZ3NvYUI4VnVwTGIyMkZtRW5zRWRGSUYvWll6Wjh4bTYxSFFSV2xOc1pIT1BWbXM2TU4xcDcvZmdJQmFEYUQzd0VXNjRNNFo4R0lHYWlkTU5rNm9IZ2tWVDVnTTZtT2ZId3huaFM4VDBHRWh1Q1RzcFFIb2JURTJIODhHb1BNc1VPWmlJOUtIMnRnWFhWYXlyV29BN2VHeTZIS044d1kzYWlQWmU2OEl0V1g3M3dBYWJzWEp6V0pkNklERnhhRStBczAxUGNGT2RMbkJveVoweERJaWQrbmpWUlBhdzd2b01wWnN2enAwZ2xQUlpZaTFlZWpSd1VNekhUQjAyUWFhV2E4bDBHTjJwTGpHdU5PRWpzcnRnTXJocDZINU5lVlN1YVkwZEZCT2RDb0poWWJtcVk5TG52cVVvYjVZUFlna3JReGw1U1FYVVU2VW9henc1VklxZkRWUVZxTDVUMVJLZEIyMFZUTlJCMjNWOXRSQk8yblF1bWtsR3pXOXl0QzBQZjkwM1llNjlyeENPODJIUkNkUG5rNGVaNWJqbGhSWS8wUS9IbjQvRGZYU25jWUFBQUFBU1VWT1JLNUNZSUk9XFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgRGF0ZVBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBUaW1lUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzXCIsXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNsYXNzXCIsXCJ2YWx1ZVwiOlwibnMtZGFya1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZERhdGFGb3JtIFByb3BlcnR5RWRpdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjUgMCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTAgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGFGb3JtRWRpdG9yTGFiZWxcIixcIi5udC1pbnB1dCA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNiYWJhYmFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRhRm9ybUVkaXRvckxhYmVsXCIsXCIubnQtaW5wdXQgPiBMYWJlbFwiLFwiLm50LWlucHV0ID4gVGV4dFZpZXdcIixcIj4gVGV4dEZpZWxkXCIsXCI+IFBpY2tlckZpZWxkXCIsXCI+IERhdGVQaWNrZXJGaWVsZFwiLFwiPiBUaW1lUGlja2VyRmllbGRcIixcIj4gRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIj4gUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwIDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWlucHV0Li1zaWRlc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjAgMCAxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1pbnB1dC4tc2lkZXMgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjUgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtaW5wdXQgPiAubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwicmlnaHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCItMTUgMTAgMCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCIsXCIubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBBY3Rpb25CYXJcIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJzdHJldGNoXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInN0cmV0Y2hcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtbGFuZHNjYXBlLm5zLWlvcyBBY3Rpb25CYXJcIixcIi5ucy1sYW5kc2NhcGUubnMtaW9zIC5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCA1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyIExhYmVsXCIsXCJBY3Rpb25CYXIgQnV0dG9uXCIsXCJBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5udC1hY3Rpb24tYmFyIExhYmVsXCIsXCIubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1lbGV2YXRpb25cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTIgMTAgMTIgMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4td2lkdGhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCJhdXRvXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwibm9uZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyIExhYmVsOmFjdGl2ZVwiLFwiQWN0aW9uQmFyIEJ1dHRvbjphY3RpdmVcIixcIkFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIExhYmVsOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIi43XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gTGFiZWxcIixcIi5udC1hY3Rpb24tYmFyID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IEFjdGlvbkJhclwiLFwiLm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWRfXzE5Lm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gQWN0aW9uQmFyXCIsXCIubnMtbW9kYWwubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiBBY3Rpb25CYXJcIixcIi5ucy1hbmRyb2lkX18xOS5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IC5udC1hY3Rpb24tYmFyXCIsXCIubnMtbW9kYWwubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiAubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciAubnQtYnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQWN0aW9uQmFyID4gTGFiZWxcIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBMYWJlbFwiLFwiQWN0aW9uQmFyID4gR3JpZExheW91dCBMYWJlbFwiLFwiLm50LWFjdGlvbi1iYXIgPiBMYWJlbFwiLFwiLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBHcmlkTGF5b3V0XCIsXCIubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gR3JpZExheW91dCA+IFN0YWNrTGF5b3V0XCIsXCIubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXQgPiBTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBHcmlkTGF5b3V0IEJ1dHRvblwiLFwiLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0IEJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMiAxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gR3JpZExheW91dCBbY29sPVxcXCIyXFxcIl1cIixcIi5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dCBbY29sPVxcXCIyXFxcIl1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwicmlnaHRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgPiBHcmlkTGF5b3V0XCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCA0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQWN0aW9uQmFyID4gR3JpZExheW91dCBCdXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dCBCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTIgMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIVxcbiAqIE5hdGl2ZVNjcmlwdCBUaGVtZSBfX1ZFUlNJT05fXyAoaHR0cHM6Ly9uYXRpdmVzY3JpcHQub3JnKVxcbiAqIENvcHlyaWdodCAyMDE2LTIwMTYgVGhlIFRoZW1lIEF1dGhvcnNcXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE5IFByb2dyZXNzIFNvZnR3YXJlXFxuICogTGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMCAoaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC90aGVtZS9ibG9iL21hc3Rlci9MSUNFTlNFKVxcbiBcIn0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCJlbXB0eVwiLFwia2V5ZnJhbWVzXCI6W119LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBGb3JtcyBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiKlxcbiAqIEJsdWUgdmFyaWFibGUgb3ZlcnJpZGVzXFxuICpcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCIubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDQzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b25cIixcIi5ucy1kYXJrIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b246YWN0aXZlXCIsXCJCdXR0b24uLWFjdGl2ZVwiLFwiLm50LWJ1dHRvbjphY3RpdmVcIixcIi5udC1idXR0b24uLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNDM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrIEJ1dHRvbi4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tb3V0bGluZVwiLFwiLm50LWJ1dHRvbi4tb3V0bGluZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvbi4tb3V0bGluZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tb3V0bGluZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiLWhpZ2h0bGlnaHQtbGlnaHRcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIxMDAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMmYyZjJcIn1dfV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiLWhpZ2h0bGlnaHQtZGFya1wiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjEwMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIzMjMyM1wifV19XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1vdXRsaW5lOmFjdGl2ZVwiLFwiQnV0dG9uLi1vdXRsaW5lLi1hY3RpdmVcIixcIi5udC1idXR0b24uLW91dGxpbmU6YWN0aXZlXCIsXCIubnQtYnV0dG9uLi1vdXRsaW5lLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb25cIixcInZhbHVlXCI6XCItaGlnaHRsaWdodC1saWdodCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMmYyZjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b24uLW91dGxpbmU6YWN0aXZlXCIsXCIubnMtZGFyayBCdXR0b24uLW91dGxpbmUuLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tb3V0bGluZTphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLW91dGxpbmUuLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvblwiLFwidmFsdWVcIjpcIi1oaWdodGxpZ2h0LWRhcmsgMC4zcyBlYXNlLW91dCBmb3J3YXJkc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMjMyMzIzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCIsXCIubnQtYnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvbi4tcHJpbWFyeVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMjAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeTphY3RpdmVcIixcIkJ1dHRvbi4tcHJpbWFyeS4tYWN0aXZlXCIsXCIubnQtYnV0dG9uLi1wcmltYXJ5OmFjdGl2ZVwiLFwiLm50LWJ1dHRvbi4tcHJpbWFyeS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGFhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b24uLXByaW1hcnk6YWN0aXZlXCIsXCIubnMtZGFyayBCdXR0b24uLXByaW1hcnkuLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tcHJpbWFyeTphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLXByaW1hcnkuLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjOTZkZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aXZpdHlJbmRpY2F0b3JcIixcIi5udC1hY3Rpdml0eS1pbmRpY2F0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBBY3Rpdml0eUluZGljYXRvclwiLFwiLm5zLWRhcmsgLm50LWFjdGl2aXR5LWluZGljYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNlZ21lbnRlZEJhclwiLFwiLm50LXNlZ21lbnRlZC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlbGVjdGVkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjOTZkZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgU2VnbWVudGVkQmFyXCIsXCIubnMtZGFyayAubnQtc2VnbWVudGVkLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlbGVjdGVkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBhYWZjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTZWdtZW50ZWRCYXJcIixcIi5ucy1pb3MgLm50LXNlZ21lbnRlZC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwIDE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvZ3Jlc3NcIixcIi5udC1wcm9ncmVzc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFByb2dyZXNzXCIsXCIubnMtZGFyayAubnQtcHJvZ3Jlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTbGlkZXJcIixcIi5udC1zbGlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFNsaWRlclwiLFwiLm5zLWRhcmsgLm50LXNsaWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1hbmRyb2lkIFNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnQtc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1hbmRyb2lkIC5udC1zbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2VhcmNoQmFyXCIsXCIubnQtc2VhcmNoLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1maWVsZC1oaW50LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWZpZWxkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFNlYXJjaEJhclwiLFwiLm5zLWRhcmsgLm50LXNlYXJjaC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWZpZWxkLWhpbnQtY29sb3JcIixcInZhbHVlXCI6XCIjYjNiM2IzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1maWVsZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBTd2l0Y2hcIixcIi5ucy1hbmRyb2lkIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNjY2NjY2NcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2NjY2NjY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWFuZHJvaWQgU3dpdGNoXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2MzYzNjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzNjM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFN3aXRjaFtjaGVja2VkPXRydWVdXCIsXCIubnMtYW5kcm9pZCAubnQtc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1hbmRyb2lkIFN3aXRjaFtjaGVja2VkPXRydWVdXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbY2hlY2tlZD10cnVlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtYW5kcm9pZCAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlNmU2ZTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1hbmRyb2lkIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRhNGE0YVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU3dpdGNoXCIsXCIubnMtaW9zIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9mZi1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U2ZTZlNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWlvcyBTd2l0Y2hcIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvZmYtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM0YTRhNGFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtaW9zIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWlvcyBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlZpZXdcIixcIi5udC10YWItdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlbGVjdGVkLXRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FiZDVlOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUYWJWaWV3XCIsXCIubnMtZGFyayAubnQtdGFiLXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZWxlY3RlZC10YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiNiYmRhZTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLXNlbGVjdGVkLXRhYi1oaWdobGlnaHQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiVmlldy5ucy1kYXJrXCIsXCIubnQtdGFiLXZpZXcubnMtZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlbGVjdGVkLXRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JiZGFlOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJTdHJpcFwiLFwiLm50LXRhYi1zdHJpcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhpZ2hsaWdodC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2YyZjJmMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRhYlN0cmlwXCIsXCIubnMtZGFyayAubnQtdGFiLXN0cmlwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGlnaGxpZ2h0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjM2EzYTNhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiU3RyaXBJdGVtXCIsXCIubnQtdGFiLXN0cmlwX19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGFiU3RyaXBJdGVtXCIsXCIubnMtZGFyayAubnQtdGFiLXN0cmlwX19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlN0cmlwSXRlbTphY3RpdmVcIixcIlRhYlN0cmlwSXRlbTphY3RpdmUgTGFiZWxcIixcIi5udC10YWItc3RyaXBfX2l0ZW06YWN0aXZlXCIsXCIubnQtdGFiLXN0cmlwX19pdGVtOmFjdGl2ZSBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRhYlN0cmlwSXRlbTphY3RpdmVcIixcIi5ucy1kYXJrIFRhYlN0cmlwSXRlbTphY3RpdmUgTGFiZWxcIixcIi5ucy1kYXJrIC5udC10YWItc3RyaXBfX2l0ZW06YWN0aXZlXCIsXCIubnMtZGFyayAubnQtdGFiLXN0cmlwX19pdGVtOmFjdGl2ZSBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYkNvbnRlbnRJdGVtXCIsXCIubnQtdGFiLWNvbnRlbnRfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRhYkNvbnRlbnRJdGVtXCIsXCIubnMtZGFyayAubnQtdGFiLWNvbnRlbnRfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3XCIsXCJSYWRMaXN0Vmlld1wiLFwiLm50LWxpc3Qtdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIml0ZW0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjE1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlcGFyYXRvci1jb2xvclwiLFwidmFsdWVcIjpcIiNjY2NjY2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0Vmlld1wiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXdcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJpdGVtLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xNSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyA+ICouYWN0aXZlXCIsXCJMaXN0VmlldyA+ICo6aGlnaGxpZ2h0ZWRcIixcIlJhZExpc3RWaWV3ID4gKi5hY3RpdmVcIixcIlJhZExpc3RWaWV3ID4gKjpoaWdobGlnaHRlZFwiLFwiLm50LWxpc3QtdmlldyA+ICouYWN0aXZlXCIsXCIubnQtbGlzdC12aWV3ID4gKjpoaWdobGlnaHRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xNSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0VmlldyA+ICouYWN0aXZlXCIsXCIubnMtZGFyayBMaXN0VmlldyA+ICo6aGlnaGxpZ2h0ZWRcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3ID4gKi5hY3RpdmVcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3ID4gKjpoaWdobGlnaHRlZFwiLFwiLm5zLWRhcmsgLm50LWxpc3QtdmlldyA+ICouYWN0aXZlXCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3ID4gKjpoaWdobGlnaHRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xNSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiUmFkTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIi5udC1saXN0LXZpZXcgLi1zZXBhcmF0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2NjY2NjY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCIubnMtZGFyayBSYWRMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiLm5zLWRhcmsgLm50LWxpc3QtdmlldyAuLXNlcGFyYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCIjNjM2MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXdcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3XCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VwYXJhdG9yLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzNjM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCIubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIlJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCIubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1pY29uXCIsXCJSYWRMaXN0VmlldyAubnQtaWNvblwiLFwiLm50LWxpc3QtdmlldyAubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjY5OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3IC5udC1pY29uXCIsXCIubnMtZGFyayBSYWRMaXN0VmlldyAubnQtaWNvblwiLFwiLm5zLWRhcmsgLm50LWxpc3QtdmlldyAubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMjEzZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciA+ICpcIixcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fY29udGVudFwiLFwiLm50LWRyYXdlciA+ICpcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMTUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDg4YzlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiLm5zLWRhcmsgLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZDM3ZTNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRTaWRlRHJhd2VyID4gKlwiLFwiLm5zLWRhcmsgUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19jb250ZW50XCIsXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgPiAqXCIsXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fY29udGVudFwiLFwiLm5zLWRhcmsgLm50LWRyYXdlciA+ICpcIixcIi5ucy1kYXJrIC5udC1kcmF3ZXIgLm50LWRyYXdlcl9fY29udGVudFwiLFwiLm50LWRyYXdlci5ucy1kYXJrID4gKlwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2NvbnRlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiLFwiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIixcIi5ucy1kYXJrIC5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMTUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCIsXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiLFwiLm5zLWRhcmsgLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M5ZWVmZlwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBGb3JtIGZpZWxkcyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXdcIixcIlRleHRGaWVsZFwiLFwiUGlja2VyRmllbGRcIixcIkRhdGVQaWNrZXJGaWVsZFwiLFwiVGltZVBpY2tlckZpZWxkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYzdjN2M3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGV4dFZpZXdcIixcIi5ucy1kYXJrIFRleHRGaWVsZFwiLFwiLm5zLWRhcmsgUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIERhdGVQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgVGltZVBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiLm5zLWRhcmsgRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNiM2IzYjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmFmYWZhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXc6Zm9jdXNcIixcIlRleHRGaWVsZDpmb2N1c1wiLFwiUGlja2VyRmllbGQ6Zm9jdXNcIixcIkRhdGVQaWNrZXJGaWVsZDpmb2N1c1wiLFwiVGltZVBpY2tlckZpZWxkOmZvY3VzXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkczpmb2N1c1wiLFwiRGF0YUZvcm1FZGl0b3JDb3JlOmZvY3VzXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldzpmb2N1c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDg4YzlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUZXh0Vmlldzpmb2N1c1wiLFwiLm5zLWRhcmsgVGV4dEZpZWxkOmZvY3VzXCIsXCIubnMtZGFyayBQaWNrZXJGaWVsZDpmb2N1c1wiLFwiLm5zLWRhcmsgRGF0ZVBpY2tlckZpZWxkOmZvY3VzXCIsXCIubnMtZGFyayBUaW1lUGlja2VyRmllbGQ6Zm9jdXNcIixcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzOmZvY3VzXCIsXCIubnMtZGFyayBEYXRhRm9ybUVkaXRvckNvcmU6Zm9jdXNcIixcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3OmZvY3VzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M5ZWVmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIixcIlRleHRGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRlUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiVGltZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGVUaW1lUGlja2VyRmllbGRzW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGFGb3JtRWRpdG9yQ29yZVtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMmYyZjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBUZXh0RmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgRGF0ZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIFRpbWVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkc1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBEYXRhRm9ybUVkaXRvckNvcmVbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2QzZDNkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSHRtbFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlByb3BlcnR5RWRpdG9yOmZvY3VzIERhdGFGb3JtRWRpdG9yQ29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDg4YzlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQcm9wZXJ0eUVkaXRvcjpmb2N1cyBEYXRhRm9ybUVkaXRvckNvcmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYzllZWZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgVG9rZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzk2ZGRmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFRva2VuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGFhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBUb2tlbjpzZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgVG9rZW46c2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IENsZWFyQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgQ2xlYXJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBTdWdnZXN0aW9uVmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgU3VnZ2VzdGlvblZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWREYXRhRm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWREYXRhRm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNiM2IzYjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWREYXRhRm9ybSBQcm9wZXJ0eUVkaXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkRGF0YUZvcm0gUHJvcGVydHlFZGl0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgTmF0aXZlU2NyaXB0IFVJIEF1dG9Db21wbGV0ZSBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZSBMaXN0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUGlja2VyUGFnZSBMaXN0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UgTGlzdFZpZXcgPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUGlja2VyUGFnZSBMaXN0VmlldyA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlLm5zLWRhcmsgTGlzdFZpZXdcIixcIi5ucy1kYXJrIFN1Z2dlc3Rpb25WaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIERhdGVUaW1lIFBpY2tlciBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyLm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlci1idXR0b25zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA0MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXItYnV0dG9ucy5ucy1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLmRhdGUtdGltZS1waWNrZXItYnV0dG9uLWNhbmNlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXItc3Bpbm5lcnNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY1OTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlci1zcGlubmVycy5ucy1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmNmZWZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0YUZvcm1FZGl0b3JMYWJlbFwiLFwiLm50LWlucHV0ID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY1OTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBEYXRhRm9ybUVkaXRvckxhYmVsXCIsXCIubnMtZGFyayAubnQtaW5wdXQgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZjZmVmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiLFwiLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEFjdGlvbkJhclwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNDRiZTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgTGFiZWxcIixcIkFjdGlvbkJhciBCdXR0b25cIixcIkFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm50LWFjdGlvbi1iYXIgTGFiZWxcIixcIi5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBBY3Rpb25CYXIgTGFiZWxcIixcIi5ucy1kYXJrIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1kYXJrIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgTGFiZWxcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyIExhYmVsOmFjdGl2ZVwiLFwiQWN0aW9uQmFyIExhYmVsLi1hY3RpdmVcIixcIkFjdGlvbkJhciBCdXR0b246YWN0aXZlXCIsXCJBY3Rpb25CYXIgQnV0dG9uLi1hY3RpdmVcIixcIkFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIkFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbS4tYWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBMYWJlbDphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIExhYmVsLi1hY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIEJ1dHRvbjphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIEJ1dHRvbi4tYWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBBY3Rpb25CYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgTGFiZWwuLWFjdGl2ZVwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrIEFjdGlvbkJhciBCdXR0b24uLWFjdGl2ZVwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtLi1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgTGFiZWwuLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgQnV0dG9uLi1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW0uLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIEFjdGlvbkJhciBMYWJlbFwiLFwiLm5zLWlvcyBBY3Rpb25CYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtaW9zIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1pb3MgQWN0aW9uQmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1pb3MgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnMtaW9zIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgTGFiZWxcIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgTGFiZWxcIixcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIExhYmVsXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgQWN0aW9uQmFyIC5udC1idXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtYW5kcm9pZCBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIEFjdGlvbkJhciAubnQtYnV0dG9uXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzNDRiZTZcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRGl2aWRlcnMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNkOWQ5ZDlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuaHJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNGQ0ZDRkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhyLWxpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzk2ZGRmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5oci1saWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhyLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDA4OGM5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmhyLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYzllZWZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3RcIixcIi5ucy1tb2RhbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItYmxhY2tcIixcInZhbHVlXCI6XCIjMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci13aGl0ZVwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWdyZXlcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ncmV5LWxpZ2h0XCIsXCJ2YWx1ZVwiOlwiI2JhYmFiYVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItY2hhcmNvYWxcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci10cmFuc3BhcmVudFwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1hcXVhXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItYmx1ZVwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWJyb3duXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItZm9yZXN0XCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItZ3JleS1kYXJrXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItcHVycGxlXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItbGVtb25cIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1saW1lXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3Itb3JhbmdlXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItcnVieVwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLXNreVwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWVycm9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJhY2tncm91bmQtYWx0LTEwXCIsXCJ2YWx1ZVwiOlwiI2MwZWJmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLWNvbG9yLXNlY29uZGFyeVwiLFwidmFsdWVcIjpcIiMwMWEwZWNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1jb2xvci1kaXNhYmxlZFwiLFwidmFsdWVcIjpcIiNhNGE0YTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1mb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLW1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjY0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4taGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1wYWRkaW5nLXhcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tcGFkZGluZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLW1hcmdpbi14XCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1tYXJnaW4teVwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1yYWRpdXNcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1oZWFkaW5ncy1tYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtaGVhZGluZ3MtZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJvcmRlci1yYWRpdXMtc21cIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1ib3JkZXItcmFkaXVzLWxnXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1pY29uLWZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1pY29uLWZvbnQtc2l6ZS1sZ1wiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1kaXNhYmxlZC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1wcmltYXJ5XCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LXNlY29uZGFyeVwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1hY2NlbnRcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1jb21wbGVtZW50YXJ5XCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtY29tcGxlbWVudGFyeS1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJ0bi1jb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmQtYWx0LTVcIixcInZhbHVlXCI6XCIjZjJmMmYyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kLWFsdC0xMFwiLFwidmFsdWVcIjpcIiNlNmU2ZTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmQtYWx0LTIwXCIsXCJ2YWx1ZVwiOlwiI2NjY2NjY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtZGlzYWJsZWRcIixcInZhbHVlXCI6XCIjYWNlNGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtaGVhZGluZ3MtY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC10YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiNhYmQ1ZTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWFjY2VudC1kYXJrXCIsXCJ2YWx1ZVwiOlwiIzAwODhjOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYWNjZW50LWxpZ2h0XCIsXCJ2YWx1ZVwiOlwiIzk2ZGRmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYWNjZW50LXRyYW5zcGFyZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuOClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LXByaW1hcnktYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuNClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmQtYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmQtZGFyay1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xNSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWl0ZW0tYWN0aXZlLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzY3Njc2N1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtaXRlbS1hY3RpdmUtYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjE1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtY29tcGxlbWVudGFyeS1kYXJrXCIsXCJ2YWx1ZVwiOlwiIzIxM2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtaXRlbS1hY3RpdmUtaWNvbi1jb2xvclwiLFwidmFsdWVcIjpcIiM2NzY3NjdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJ0bi1jb2xvci1pbnZlcnNlXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJ0bi1jb2xvci1zZWNvbmRhcnlcIixcInZhbHVlXCI6XCIjMGQwZDBkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLXByaW1hcnlcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1zZWNvbmRhcnlcIixcInZhbHVlXCI6XCIjYjNiM2IzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWFjY2VudFwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstY29tcGxlbWVudGFyeVwiLFwidmFsdWVcIjpcIiMzNDRiZTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYnRuLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1ib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmQtYWx0LTVcIixcInZhbHVlXCI6XCIjM2QzZDNkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmQtYWx0LTEwXCIsXCJ2YWx1ZVwiOlwiIzRhNGE0YVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kLWFsdC0yMFwiLFwidmFsdWVcIjpcIiM2MzYzNjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstZGlzYWJsZWRcIixcInZhbHVlXCI6XCIjNDQ2ZjgzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1oZWFkaW5ncy1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLXRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JiZGFlOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1hY2NlbnQtZGFya1wiLFwidmFsdWVcIjpcIiNjOWVlZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYWNjZW50LWxpZ2h0XCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYWNjZW50LXRyYW5zcGFyZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuOClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstcHJpbWFyeS1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC40KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kLWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjEpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmQtZGFyay1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xNSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstaXRlbS1hY3RpdmUtY29sb3JcIixcInZhbHVlXCI6XCIjYzFjMWMxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWl0ZW0tYWN0aXZlLWJhY2tncm91bmRcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xNSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstY29tcGxlbWVudGFyeS1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWNvbXBsZW1lbnRhcnktZGFya1wiLFwidmFsdWVcIjpcIiMxZDM3ZTNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstaXRlbS1hY3RpdmUtaWNvbi1jb2xvclwiLFwidmFsdWVcIjpcIiNjMWMxYzFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYnRuLWNvbG9yLWludmVyc2VcIixcInZhbHVlXCI6XCIjMDAyMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJ0bi1jb2xvci1zZWNvbmRhcnlcIixcInZhbHVlXCI6XCIjZTZlNmU2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1xcXCIsIFxcXCJmYS1icmFuZHMtNDAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtcmVndWxhci00MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGFnZV9fY29udGVudC1pY29uXCIsXCIucGFnZV9fY29udGVudC1wbGFjZWhvbGRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VfX2NvbnRlbnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjcyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJ0b3BcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDViYTVlZDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDViYTVlZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM4ZjAyNjA2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSmVzdXNcXFxcRG9jdW1lbnRzXFxcXExBTklBMjAyMFxcXFxOYXRpdmVTY3JpcHRcXFxcbXlBcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzhmMDI2MDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzhmMDI2MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzhmMDI2MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOGYwMjYwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL011bHRpLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NTYxODcyNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg1NjE4NzI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg1NjE4NzI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg1NjE4NzI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdWx0aS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODU2MTg3MjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTXVsdGkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlZThiY2QzNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VlOGJjZDM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VlOGJjZDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VlOGJjZDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWU4YmNkMzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlOGJjZDM2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTcyYzYzZjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NzJjNjNmOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NzJjNjNmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NzJjNjNmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3MmM2M2Y4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1Byb2dyZXNvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzJjNjNmOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMTE4YjRhY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MxMThiNGFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MxMThiNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MxMThiNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxMThiNGFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MxMThiNGFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWFhYzcxZGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYWFjNzFkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYWFjNzFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYWFjNzFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWFhYzcxZGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYWFjNzFkZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTdhNjgxYjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhN2E2ODFiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhN2E2ODFiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhN2E2ODFiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3YTY4MWI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1RlcmFwaWFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2E2ODFiNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmXCIiLCJjb25zdCB7IEJlaGF2aW9yU3ViamVjdCB9ID0gcmVxdWlyZShcInJ4anNcIik7XG5cbmZ1bmN0aW9uIFNlbGVjdGVkUGFnZVNlcnZpY2UoKSB7XG4gICAgaWYgKFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZSBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuXCIpO1xuICAgIH1cblxuICAgIC8vIE9ic2VydmFibGUgc2VsZWN0ZWRQYWdlIHNvdXJjZVxuICAgIHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoXCJcIik7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzdHJlYW1cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSQgPSB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uKHNlbGVjdGVkUGFnZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UubmV4dChzZWxlY3RlZFBhZ2UpO1xuICAgIH07XG59XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlO1xufTtcblxuU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UgPSBuZXcgU2VsZWN0ZWRQYWdlU2VydmljZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGVkUGFnZVNlcnZpY2U7XG4iLCJcbmltcG9ydCB7IGdldFJvb3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIlxuXG5leHBvcnQgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcbiAgICBsZXQgZHJhd2VyTmF0aXZlVmlldyA9IGdldFJvb3RWaWV3KCk7XG4gICAgaWYgKGRyYXdlck5hdGl2ZVZpZXcgJiYgZHJhd2VyTmF0aXZlVmlldy5zaG93RHJhd2VyKSB7XG4gICAgICAgIGRyYXdlck5hdGl2ZVZpZXcuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xuICAgIGxldCBkcmF3ZXJOYXRpdmVWaWV3ID0gZ2V0Um9vdFZpZXcoKTtcbiAgICBpZiAoZHJhd2VyTmF0aXZlVmlldyAmJiBkcmF3ZXJOYXRpdmVWaWV3LnNob3dEcmF3ZXIpIHtcbiAgICAgICAgZHJhd2VyTmF0aXZlVmlldy5jbG9zZURyYXdlcigpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL3Z1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL3Z1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wcm9maWxpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idWlsZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS93ZWFrLWV2ZW50LWxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9