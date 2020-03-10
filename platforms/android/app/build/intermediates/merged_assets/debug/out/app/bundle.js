require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
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
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-calendar/ui-calendar.js");
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
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-calendar/ui-calendar.js");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/vue/index.js");
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
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");
/* harmony import */ var _components_ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ReporteDiagnosticos.vue");
/* harmony import */ var _components_DrawerContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/DrawerContent.vue");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/vue/index.js");
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-calendar/vue/index.js");
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_5__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
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
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        





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

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"app.js\",\"android\":{\"v8Flags\":\"--expose_gc\",\"markingMode\":\"none\"}}");

/***/ }),

/***/ "./shared/selected-page-service.js":
/***/ (function(module, exports, __webpack_require__) {

var {
  BehaviorSubject
} = __webpack_require__("../node_modules/rxjs/_esm5/index.js");

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
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
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

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL011bHRpLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT81Nzk0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWU/MjQwMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT84ZGJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlPzBiOGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlPzQ1ZDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT85OWJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzUxYzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/YmI3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ZDAzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzAwNDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/MGIzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT82ZTMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlP2M5MTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2JlMGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT82MDIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzljMDgiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzllMjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlP2M4NDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzQ4YzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzkyNWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZT8yNjEyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWU/MGJjYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZT8zZmM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXVsdGkudnVlPzBhNjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/MzA0ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT9iYmJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlP2ViMzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWU/ODdkMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZT8xN2RmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlPzgzMDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzby52dWU/M2U5MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlPzM4NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2I3MDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlP2NlNDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP2FhZTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT81NjI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/ZTFmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZT85ZmYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzlkNDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXJhcGlhcy52dWU/MTVhYyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC91dGlscy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJSZXBvcnRlRGlhZ25vc3RpY29zIiwiRHJhd2VyQ29udGVudCIsIlJhZFNpZGVEcmF3ZXIiLCJDYWxlbmRhclZpZXciLCJWdWUiLCJ1c2UiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwic2xvdCIsIkJlaGF2aW9yU3ViamVjdCIsInJlcXVpcmUiLCJTZWxlY3RlZFBhZ2VTZXJ2aWNlIiwiX2luc3RhbmNlIiwiRXJyb3IiLCJfc2VsZWN0ZWRQYWdlU291cmNlIiwic2VsZWN0ZWRQYWdlJCIsImFzT2JzZXJ2YWJsZSIsInVwZGF0ZVNlbGVjdGVkUGFnZSIsInNlbGVjdGVkUGFnZSIsIm5leHQiLCJnZXRJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93RHJhd2VyIiwiZHJhd2VyTmF0aXZlVmlldyIsImdldFJvb3RWaWV3IiwiY2xvc2VEcmF3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUxBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EscUdBQ0EsU0FEQSxDQUNBLGdEQURBO0FBRUE7QUFDQSxHQUxBOztBQU1BO0FBQ0E7QUFDQSx1RkFEQTtBQUVBLHlFQUZBO0FBR0EsaUVBSEE7QUFJQSxpRUFKQTtBQUtBLDZFQUxBO0FBTUEsc0JBTkE7QUFPQSxpQkFDQTtBQUFBO0FBQ0E7QUFEQSxPQURBO0FBUEE7QUFZQSxHQW5CQTs7QUFvQkE7QUFDQSxxRkFEQTtBQUVBLHVFQUZBO0FBR0EsK0RBSEE7QUFJQSwrREFKQTtBQUtBO0FBTEEsR0FwQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBTkE7QUEzQkEs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QXFELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsMERBQTBELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsMERBQTBELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsMERBQTBELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsMERBQTBELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsRUFBRSxzREFBc0QsNkRBQTZELEVBQUUsRUFBRSxzREFBc0QsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsNERBQTRELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxzREFBc0QsMERBQTBELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSxxREFBcUQsdURBQXVELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsOERBQThELEVBQUUsRUFBRSx1REFBdUQsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQsMkRBQTJELEVBQUUsOERBQThELEVBQUUsRUFBRSx5Q0FBeUMsRUFBRSwwREFBMEQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsRUFBRSwrREFBK0QscUVBQXFFLEVBQUUsRUFBRSwrREFBK0QscUVBQXFFLEVBQUUsRUFBRSxnRUFBZ0Usc0VBQXNFLEVBQUUsRUFBRSxtRUFBbUUsK0RBQStELEVBQUUsRUFBRSxpRUFBaUUsNkRBQTZELEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsRUFBRSw4RkFBOEYsYUFBYSxpREFBaUQsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxpRkFBaUYsNERBQTRELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsRUFBRSx1SUFBdUksd0RBQXdELEVBQUUsRUFBRSwwRUFBMEUsd0RBQXdELEVBQUUsK0RBQStELEVBQUUsRUFBRSxxR0FBcUcsMERBQTBELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxtREFBbUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxzREFBc0QseURBQXlELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsRUFBRSwrREFBK0QseURBQXlELEVBQUUsRUFBRSwrREFBK0QseURBQXlELEVBQUUsRUFBRSwrREFBK0QseURBQXlELEVBQUUsRUFBRSwrREFBK0QseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxrRUFBa0UseURBQXlELEVBQUUsNERBQTRELEVBQUUsRUFBRSw0REFBNEQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsOERBQThELEVBQUUsRUFBRSw4REFBOEQsNERBQTRELEVBQUUsRUFBRSwwREFBMEQsZ0VBQWdFLEVBQUUsRUFBRSwwREFBMEQsa0VBQWtFLEVBQUUsRUFBRSwyREFBMkQsbUVBQW1FLEVBQUUsRUFBRSx5REFBeUQsb0VBQW9FLEVBQUUsRUFBRSx5REFBeUQsa0VBQWtFLEVBQUUsRUFBRSw2REFBNkQsMERBQTBELEVBQUUsRUFBRSw0REFBNEQsMERBQTBELEVBQUUsRUFBRSwyREFBMkQscUVBQXFFLEVBQUUsdURBQXVELEVBQUUsRUFBRSwwREFBMEQscUVBQXFFLEVBQUUsdURBQXVELEVBQUUsRUFBRSxvRUFBb0Usa0VBQWtFLEVBQUUsMERBQTBELEVBQUUsbUVBQW1FLEVBQUUseURBQXlELEVBQUUsRUFBRSxvRkFBb0YscUVBQXFFLEVBQUUsd0RBQXdELEVBQUUsRUFBRSxrRUFBa0UsaUVBQWlFLEVBQUUsRUFBRSxvRUFBb0UsNERBQTRELEVBQUUsRUFBRSx3REFBd0QsOERBQThELEVBQUUsRUFBRSx3Q0FBd0MsRUFBRSxtREFBbUQscURBQXFELEVBQUUsdURBQXVELEVBQUUsMERBQTBELEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsRUFBRSwyREFBMkQsMERBQTBELEVBQUUsRUFBRSxvRUFBb0UsMERBQTBELEVBQUUsRUFBRSw2S0FBNksseUVBQXlFLEVBQUUsRUFBRSxzRUFBc0UsMkRBQTJELEVBQUUsRUFBRSxxREFBcUQsMERBQTBELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsRUFBRSxtRUFBbUUsZ0VBQWdFLEVBQUUscUVBQXFFLEVBQUUseURBQXlELEVBQUUsc0RBQXNELEVBQUUsNERBQTRELEVBQUUseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxtRkFBbUYsc0RBQXNELEVBQUUsMkRBQTJELEVBQUUsRUFBRSwyRkFBMkYsd0RBQXdELEVBQUUsRUFBRSxxRkFBcUYsc0RBQXNELEVBQUUsMkRBQTJELEVBQUUsRUFBRSw2R0FBNkcsd0RBQXdELEVBQUUsRUFBRSx5SUFBeUksc0RBQXNELEVBQUUsNERBQTRELEVBQUUsRUFBRSx5TEFBeUwsd0RBQXdELEVBQUUsRUFBRSwyRkFBMkYsOERBQThELEVBQUUsRUFBRSxxR0FBcUcsd0RBQXdELEVBQUUsRUFBRSxtRkFBbUYsZ0VBQWdFLEVBQUUsK0VBQStFLEVBQUUsRUFBRSxpR0FBaUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtSUFBbUksMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpR0FBaUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtSUFBbUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtR0FBbUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxxSEFBcUgsMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxSUFBcUksMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxR0FBcUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxxSEFBcUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSx1SEFBdUgsMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSx1SUFBdUksMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpR0FBaUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtSUFBbUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtR0FBbUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxxSEFBcUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxSUFBcUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpR0FBaUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtSUFBbUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxR0FBcUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxxSEFBcUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSx1SEFBdUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSx1SUFBdUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxR0FBcUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxxSEFBcUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSx1SEFBdUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSx1SUFBdUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpR0FBaUcsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxtSEFBbUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxtSUFBbUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSwrRkFBK0YsaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSwrR0FBK0csaUVBQWlFLEVBQUUsMERBQTBELEVBQUUsRUFBRSxpSEFBaUgsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpSUFBaUksd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxpRUFBaUUsa0VBQWtFLEVBQUUsRUFBRSxtRkFBbUYscUVBQXFFLEVBQUUsRUFBRSwrREFBK0QsMERBQTBELEVBQUUsa0VBQWtFLEVBQUUsRUFBRSxpRkFBaUYsd0RBQXdELEVBQUUscUVBQXFFLEVBQUUsRUFBRSwwRkFBMEYscURBQXFELEVBQUUsc0RB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S0Msa0JBQUwsR0FBMEIsVUFBU0MsWUFBVCxFQUF1QjtBQUM3QyxTQUFLSixtQkFBTCxDQUF5QkssSUFBekIsQ0FBOEJELFlBQTlCO0FBQ0gsR0FGRDtBQUdIOztBQUVEUCxtQkFBbUIsQ0FBQ1MsV0FBcEIsR0FBa0MsWUFBWTtBQUMxQyxTQUFPVCxtQkFBbUIsQ0FBQ0MsU0FBM0I7QUFDSCxDQUZEOztBQUlBRCxtQkFBbUIsQ0FBQ0MsU0FBcEIsR0FBZ0MsSUFBSUQsbUJBQUosRUFBaEM7QUFFQVUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxtQkFBakIsQzs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVksVUFBVSxHQUFHLE1BQU07QUFDNUIsTUFBSUMsZ0JBQWdCLEdBQUdDLGdGQUFXLEVBQWxDOztBQUNBLE1BQUlELGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQ0QsVUFBekMsRUFBcUQ7QUFDakRDLG9CQUFnQixDQUFDRCxVQUFqQjtBQUNIO0FBQ0osQ0FMTTtBQU9BLElBQU1HLFdBQVcsR0FBRyxNQUFNO0FBQzdCLE1BQUlGLGdCQUFnQixHQUFHQyxnRkFBVyxFQUFsQzs7QUFDQSxNQUFJRCxnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUNELFVBQXpDLEVBQXFEO0FBQ2pEQyxvQkFBZ0IsQ0FBQ0UsV0FBakI7QUFDSDtBQUNKLENBTE0sQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIiBkcmF3ZXJMb2NhdGlvbj1cIkxlZnRcIiBnZXN0dXJlc0VuYWJsZWQ9XCJ0cnVlXCIgOmRyYXdlclRyYW5zaXRpb249XCJ0cmFuc2l0aW9uXCI+XG4gICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cIiNmZmZmZmZcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJkcmF3ZXJDb250ZW50XCI+PC9zbG90PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPEZyYW1lIH5tYWluQ29udGVudCByZWY9XCJkcmF3ZXJNYWluQ29udGVudFwiPlxuICAgICAgPHNsb3QgbmFtZT1cIm1haW5Db250ZW50XCI+PC9zbG90PlxuICAgIDwvRnJhbWU+XG4gPC9SYWRTaWRlRHJhd2VyPiBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbjxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCAqXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlclwiIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzIHQtMzZcIiBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYyYmQ7XCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiIHRleHQ9XCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCIgdGV4dD1cIkV4cDogMTY1OS0wOVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cIjFcIiBjbGFzcz1cIm50LWRyYXdlcl9fYm9keVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiA6Y2xhc3M9XCInbnQtZHJhd2VyX19saXN0LWl0ZW0nICsgKHNlbGVjdGVkUGFnZSA9PT0gJ1JlcG9ydGVEaWFnbm9zdGljb3MnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChSZXBvcnRlRGlhZ25vc3RpY29zKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3JlcG9ydGVkaWFnbm9zdGljb1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIlJlcG9ydGUgZGUgZGlhZ27Ds3N0aWNvc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdSZXBvcnRlQ2l0YXMnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChSZXBvcnRlQ2l0YXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vcmVwb3J0ZWNpdGFzXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiUmVwb3J0ZSBkZSBjaXRhc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdQcm9ncmVzbycgPyAnIC1zZWxlY3RlZCc6ICcnKVwiIEB0YXA9XCJvbk5hdmlnYXRpb25JdGVtVGFwKFByb2dyZXNvKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3Byb2dyZXNvcGFjaWVudGVcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiIDpjbGFzcz1cIidudC1kcmF3ZXJfX2xpc3QtaXRlbScgKyAoc2VsZWN0ZWRQYWdlID09PSAnVGVyYXBpYXMnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChUZXJhcGlhcylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly90ZXJhcGlhc1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIlRlcmFwaWFzXCIgY2xhc3M9XCJwLXItMTBcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoclwiPjwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiA6Y2xhc3M9XCInbnQtZHJhd2VyX19saXN0LWl0ZW0nICsgKHNlbGVjdGVkUGFnZSA9PT0gJ05vdGlmaWNhY2lvbmVzJyA/ICcgLXNlbGVjdGVkJzogJycpXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkl0ZW1UYXAoTm90aWZpY2FjaW9uZXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbm90aWZpY2FjaW9uZXNcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJOb3RpZmljYWNpb25lc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgIDwvR3JpZExheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFJlcG9ydGVEaWFnbm9zdGljb3MgZnJvbSBcIi4vUmVwb3J0ZURpYWdub3N0aWNvc1wiO1xuICAgIGltcG9ydCBSZXBvcnRlQ2l0YXMgZnJvbSBcIi4vUmVwb3J0ZUNpdGFzXCI7XG4gICAgaW1wb3J0IFRlcmFwaWFzIGZyb20gXCIuL1RlcmFwaWFzXCI7XG4gICAgaW1wb3J0IFByb2dyZXNvIGZyb20gXCIuL1Byb2dyZXNvXCI7XG4gICAgaW1wb3J0IE5vdGlmaWNhY2lvbmVzIGZyb20gXCIuL05vdGlmaWNhY2lvbmVzXCI7XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIn4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiOyAgICBcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkuc2VsZWN0ZWRQYWdlJFxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNlbGVjdGVkUGFnZSkgPT4gdGhpcy5zZWxlY3RlZFBhZ2UgPSBzZWxlY3RlZFBhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRQYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFJlcG9ydGVEaWFnbm9zdGljb3M6IFJlcG9ydGVEaWFnbm9zdGljb3MsXG4gICAgICAgICAgICAgICAgUmVwb3J0ZUNpdGFzOiBSZXBvcnRlQ2l0YXMsXG4gICAgICAgICAgICAgICAgVGVyYXBpYXM6IFRlcmFwaWFzLFxuICAgICAgICAgICAgICAgIFByb2dyZXNvOiBQcm9ncmVzbyxcbiAgICAgICAgICAgICAgICBOb3RpZmljYWNpb25lczogTm90aWZpY2FjaW9uZXMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYWdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbm9tYnJlOiBcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVwiLFxuICAgICAgICAgICAgICAgICAgICAgZXhwZWRpZW50ZTogXCIxNjU5LTA5XCJ9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBSZXBvcnRlRGlhZ25vc3RpY29zLFxuICAgICAgICAgICAgUmVwb3J0ZUNpdGFzLFxuICAgICAgICAgICAgVGVyYXBpYXMsXG4gICAgICAgICAgICBQcm9ncmVzbyxcbiAgICAgICAgICAgIE5vdGlmaWNhY2lvbmVzXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uTmF2aWdhdGlvbkl0ZW1UYXAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhjb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdXRpbHMuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZSc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cbiAgICAvLyBDdXN0b20gc3R5bGVzXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxyXG5cdDxQYWdlPlxyXG5cdFx0PEFjdGlvbkJhciB0aXRsZT1cIk11bHRpIFRlbXBsYXRlc1wiPlxyXG5cdFx0XHQ8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gYmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIEB0YXA9XCJnb0JhY2tcIi8+XHJcblx0XHQ8L0FjdGlvbkJhcj5cclxuXHRcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyMCwqXCIgcm93cz1cImF1dG8sYXV0bywqXCI+XHJcblx0XHRcdDxCdXR0b24gcm93PVwiMFwiIGNvbD1cIjFcIiB0ZXh0PVwiRXhwYW5kIEFsbFwiIEB0YXA9XCJleHBhbmRBbGxcIj48L0J1dHRvbj5cclxuXHRcdFx0PEJ1dHRvbiByb3c9XCIxXCIgY29sPVwiMVwiIHRleHQ9XCJDb2xsYXBzZSBBbGxcIiBAdGFwPVwiY29sbGFwc2VBbGxcIj48L0J1dHRvbj5cclxuXHRcdFx0PEFjY29yZGlvbiByb3c9XCIyXCIgY29sPVwiMVwiIGhlaWdodD1cIjEwMCVcIiByZWY9XCJhY2NvcmRpb25cIiBhbGxvd011bHRpcGxlPVwidHJ1ZVwiIGNoaWxkSXRlbXM9XCJjaGlsZHJlblwiIGZvcj1cIml0ZW0gb2YgaXRlbXNcIj5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRvZGRcIiBuYW1lPVwiaGVhZGVyLW9kZFwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgYmFja2dyb3VuZENvbG9yPVwiZ3JlZW5cIiA6dGV4dD1cIml0ZW0uaGVhZGVyVGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkZXZlblwiIG5hbWU9XCJoZWFkZXItZXZlblwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgYmFja2dyb3VuZENvbG9yPVwib3JhbmdlXCIgOnRleHQ9XCJpdGVtLmhlYWRlclRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJG9kZFwiIG5hbWU9XCJ0aXRsZS1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgOnRleHQ9XCJpdGVtLnRpdGxlXCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRldmVuXCIgbmFtZT1cInRpdGxlLWV2ZW5cIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgOnRleHQ9XCJpdGVtLnRpdGxlXCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJG9kZFwiIG5hbWU9XCJjb250ZW50LW9kZFwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgaGVpZ2h0PVwiMjAwXCIgOnRleHQ9XCJpdGVtLnRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJGV2ZW5cIiBuYW1lPVwiY29udGVudC1ldmVuXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwicmVkXCI+XHJcblx0XHRcdFx0XHRcdDxMYWJlbCBiYWNrZ3JvdW5kQ29sb3I9XCJ5ZWxsb3dcIiA6dGV4dD1cIml0ZW0udGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkb2RkXCIgbmFtZT1cImZvb3Rlci1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCJ5ZWxsb3dcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsIDp0ZXh0PVwiaXRlbS5mb290ZXJUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRldmVuXCIgbmFtZT1cImZvb3Rlci1ldmVuXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiYmx1ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgIDp0ZXh0PVwiaXRlbS5mb290ZXJUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cdFx0XHQ8L0FjY29yZGlvbj5cclxuXHRcdDwvR3JpZExheW91dD5cclxuXHQ8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICdEaWFnbsOzc3RpY28nLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6ICdSZXRhcmRvIGRlIGxlbmd1YWplIGFuw6FydGljbyBtb2RlcmFkbyAnIH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogJ0F1ZGljacOzbiBub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQXVkaWNpw7NuIGJpbGF0ZXJhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAnMiBUaXRsZScsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAnTWUnLFxyXG5cdFx0XHRcdFx0XHR9LCB7IHRleHQ6ICdTdG9wJyB9IF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAnMyBUaXRsZScsXHJcblx0XHRcdFx0XHRcdGZvb3RlcjogJzMwJyxcclxuXHRcdFx0XHRcdFx0aGVhZGVyVGV4dDogJ1RoaXJkJyxcclxuXHRcdFx0XHRcdFx0Zm9vdGVyVGV4dDogJzYnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogWyB7IHRleHQ6ICdUaGlzJ30sIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAnVGhpbmcnLFxyXG5cdFx0XHRcdFx0XHR9IF1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAnNCBUaXRsZScsXHJcblx0XHRcdFx0XHRcdGZvb3RlcjogJzQwJyxcclxuXHRcdFx0XHRcdFx0aGVhZGVyVGV4dDogJ0ZvdXJ0aCcsXHJcblx0XHRcdFx0XHRcdGZvb3RlclRleHQ6ICc3JyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFsgeyB0ZXh0OiAnTm93J30sIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiAnUGxlYXNlJyxcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z29CYWNrOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy4kbmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGV4cGFuZEFsbDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuYWNjb3JkaW9uLm5hdGl2ZVZpZXcuZXhwYW5kQWxsKCk7XHJcblx0XHRcdH0sIGNvbGxhcHNlQWxsOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5hY2NvcmRpb24ubmF0aXZlVmlldy5jb2xsYXBzZUFsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0QWN0aW9uQmFyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0Lm1lc3NhZ2Uge1xyXG5cdFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjA7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHR9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRpdGxlPVwiTm90aWZpY2FjaW9uZXNcIj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxuICAgICAgICAgICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIGljb249XCJyZXM6Ly9tZW51XCIgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxuICAgICAgICAgICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxuICAgICAgICAgICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8QWN0aW9uSXRlbSBpY29uPVwicmVzOi8vbWVudVwiIFxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIFxuICAgICAgICAgICAgICAgIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiXG4gICAgICAgICAgICAgICAgaW9zLnBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgPC9BY3Rpb25JdGVtPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJOb3RpZmljYWNpb25lc1wiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPiBcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjMwLCA1MCwzMCwgNTAsMzAsIDUwLDMwLCA1MCwzMFwiIGNvbHVtbnM9XCIyMCwyODAsIGF1dG9cIj5cblxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjFcIiAgY29sPVwiMVwiIGNsYXNzPVwidGl0dWxvXCIgdGV4dD1cIlRlcmFwaWFzXCI+IDwvTGFiZWw+XG4gICAgICAgICAgICA8U3dpdGNoIHJvdz1cIjFcIiBjb2w9XCIyXCIgIGNoZWNrZWQ9XCJmYWxzZVwiIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgIC8+XG4gICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwic3VidGl0dWxvXCIgdGV4dD1cIlJlY2liZSBub3RpZmljYWNpb25lcyBkaWFyaWFzIHBhcmEgdmVyIHbDrWRlb3NcIiA+IDwvTGFiZWw+XG5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIzXCIgY29sPVwiMVwiIGNsYXNzPVwidGl0dWxvXCIgdGV4dD1cIlByb2dyZXNvIGRlbCBwYWNpZW50ZVwiPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCIzXCIgY29sPVwiMlwiIGNoZWNrZWQ9XCJmYWxzZVwiIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic3VidGl0dWxvXCIgcm93PVwiM1wiIGNvbD1cIjFcIiB0ZXh0PVwiUmVjaWJlIG5vdGlmaWNhY2lvbmVzIGFsIHJlY2liaXIgZWwgYXZhbmNlXCI+IDwvTGFiZWw+XG5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCI1XCIgY29sPVwiMVwiIGNsYXNzPVwidGl0dWxvXCIgdGV4dD1cIkNpdGFzXCIgPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCI1XCIgY29sPVwiMlwiIGNoZWNrZWQ9XCJmYWxzZVwiIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbCAgcm93PVwiNVwiIGNvbD1cIjFcIiBjbGFzcz1cInN1YnRpdHVsb1wiIHRleHQ9XCJSZWNpYmUgbcOhcyBkZSB1bmEgbm90aWZpY2FjacOzblwiPiA8L0xhYmVsPlxuXG5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCI3XCIgY29sPVwiMVwiIGNsYXNzPVwidGl0dWxvXCIgdGV4dD1cIlJlcG9ydGVzIGRlIHByb2dyZXNvXCI+IDwvTGFiZWw+XG4gICAgICAgICAgICA8U3dpdGNoIHJvdz1cIjdcIiBjb2w9XCIyXCIgY2hlY2tlZD1cImZhbHNlXCIgYmFja2dyb3VuZENvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjdcIiBjb2w9XCIxXCIgY2xhc3M9XCJzdWJ0aXR1bG9cIiAgdGV4dD1cIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCBsbGVnYXIgZWwgcmVwb3J0ZVwiPiA8L0xhYmVsPlxuXG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJTZXR0aW5nc1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJ35AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL2JsdWUnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuc3VidGl0dWxvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gc3R5bGVzXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXCI+PC9MYWJlbD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cblxuICAgICAgICA8U2Nyb2xsVmlldz5cblxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cInByb2dyZXNvIGluIHByb2dyZXNvc1wiPlxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMjAsMjUsMjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicHJvZ3Jlc28uYmxvcXVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMlwiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRmVjaGE6IERlbCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInByb2dyZXNvLmluaWNpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgYWwgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJwcm9ncmVzby5maW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICAgICAgICBpbXBvcnQgKiBhcyBjYWxlbmRhck1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtdWktY2FsZW5kYXInO1xuICAgIGltcG9ydCBTZWxlY3RlZFBhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiU2VhcmNoXCIpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNvczogWyBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgNFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmljaW86IFwiMjAxOC8wOC8zMFwiLFxuICAgICAgICAgICAgICAgICAgICBmaW46IFwiMjAxOS8xMC8yMlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgM1wiLFxuICAgICAgICAgICAgICAgICAgICBpbmljaW86IFwiMjAxOS8wMy8xMFwiLFxuICAgICAgICAgICAgICAgICAgICBmaW46IFwiMjAxOS8wOC8zMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgMlwiLFxuICAgICAgICAgICAgICAgICAgICBpbmljaW86IFwiMjAxOS8wMS8xNVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW46IFwiMjAxOS8wMy8xMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgMVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmljaW86IFwiMjAxOC8xMS8xNVwiLFxuICAgICAgICAgICAgICAgICAgICBmaW46IFwiMjAxOC8wMS8xNVwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJ35AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL2JsdWUnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxuICAgICAgICAgICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIGljb249XCJyZXM6Ly9tZW51XCIgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxuICAgICAgICAgICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxuICAgICAgICAgICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICA8QWN0aW9uSXRlbSBpY29uPVwicmVzOi8vbWVudVwiIFxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6dmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiIFxuICAgICAgICAgICAgICAgIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiXG4gICAgICAgICAgICAgICAgaW9zLnBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgPC9BY3Rpb25JdGVtPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJSZXBvcnRlIGRlIGNpdGFzXCI+PC9MYWJlbD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cbiAgICAgICAgXG4gICAgPFRhYlZpZXcgIEBzZWxlY3RlZEluZGV4Q2hhbmdlPVwiaW5kZXhDaGFuZ2VcIj5cbiAgICAgICAgICAgPCEtLSBQZXN0YcOxYSAxLiAtLT5cbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIlByb2dyZXNvXCIgaWNvblNvdXJjZT1cInJlczovL3Byb2dyZXNvXCI+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMzAsMzAsMjAwLDIwLDIwXCIgY29sdW1ucz1cIjIwLCAqLCAyMFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgdGV4dD1cIkJsb3F1ZSA0XCIgLz5cbiAgICAgIFxuICAgICAgICA8IS0tICBHcsOhZmljYSBkZSBkb25hIC0tPlxuICAgICAgPFJhZFBpZUNoYXJ0IGFsbG93QW5pbWF0aW9uPVwidHJ1ZVwiIHJvdz1cIjJcIiBjb2w9XCIxXCI+XG4gICAgICAgIDxEb251dFNlcmllcyB2LXRrUGllU2VyaWVzIHNlcmllc05hbWU9XCJwaWVcIlxuICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XCJEYXRhUG9pbnRcIlxuICAgICAgICAgIGV4cGFuZFJhZGl1cz1cIjAuNFwiXG4gICAgICAgICAgb3V0ZXJSYWRpdXNGYWN0b3I9XCIwLjdcIlxuICAgICAgICAgIHZhbHVlUHJvcGVydHk9XCJDYW50aWRhZFwiXG4gICAgICAgICAgbGVnZW5kTGFiZWw9XCJDaXRhc1wiXG4gICAgICAgICAgc2hvd0xhYmVscz1cInRydWVcIlxuICAgICAgICAgIDppdGVtcz1cImNpdGFzXCIgLz5cbiAgICAgICAgPFJhZExlZ2VuZFZpZXcgdi10a1BpZUxlZ2VuZCBwb3NpdGlvbj1cIlJpZ2h0XCIgdGl0bGU9XCJDaXRhc1wiIG9mZnNldE9yaWdpbj1cIlRvcFJpZ2h0XCIgd2lkdGg9XCIxMTBcIiBlbmFibGVTZWxlY3Rpb249XCJ0cnVlXCI+PC9SYWRMZWdlbmRWaWV3PlxuICAgIFxuICAgICAgICA8UGFsZXR0ZSB2LXRrUGllUGFsZXR0ZSBzZXJpZXNOYW1lPVwicGllXCI+XG4gICAgICAgICAgPFBhbGV0dGVFbnRyeSB0a1BpZVBhbGV0dGVFbnRyeSBmaWxsQ29sb3I9XCJncmVlblwiIHN0cm9rZUNvbG9yPVwiZ3JlZW5cIj48L1BhbGV0dGVFbnRyeT5cbiAgICAgICAgICAgPFBhbGV0dGVFbnRyeSB0a1BpZVBhbGV0dGVFbnRyeSBmaWxsQ29sb3I9XCJvcmFuZ2VcIiBzdHJva2VDb2xvcj1cIm9yYW5nZVwiPjwvUGFsZXR0ZUVudHJ5PlxuICAgICAgICAgICAgPFBhbGV0dGVFbnRyeSB0a1BpZVBhbGV0dGVFbnRyeSBmaWxsQ29sb3I9XCJncmF5XCIgc3Ryb2tlQ29sb3I9XCJncmF5XCI+PC9QYWxldHRlRW50cnk+XG4gICAgICA8L1BhbGV0dGU+IFxuXG5cbiAgICAgIDwvUmFkUGllQ2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuXG4gICAgICAgIDwhLS1QZXN0YcOxYSAyLiBDYWxlbmRhcmlvLS0+XG4gICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNhbGVuZGFyaW9cIj5cbiAgICAgICAgICAgIDxSYWRDYWxlbmRhciAgaWQ9XCJjYWxlbmRhclwiXG4gICAgICAgICAgICA6ZXZlbnRTb3VyY2U9XCJjYWxlbmRhckV2ZW50c1wiIFxuXG4gICAgICAgICAgZXZlbnRzVmlld01vZGU9XCJJbmxpbmVcIiBcbiAgICAgICAgICBzZWxlY3Rpb25Nb2RlPVwiU2luZ2xlXCIgXG4gICAgICAgICAgdmlld01vZGU9XCJNb250aFwiXG4gICAgICAgICAgdHJhbnNpdGlvbk1vZGU9XCJTdGFja1wiIFxuICAgICAgICAgIGxvY2FsZT1cImVuLVVTXCIgXG4gICAgICAgICAgXG4gICAgICAgICAgQGRhdGVTZWxlY3RlZD1cIm9uRGF0ZVNlbGVjdGVkXCIgXG4gICAgICAgICAgQGRhdGVEZXNlbGVjdGVkPVwib25EYXRlRGVzZWxlY3RlZFwiIFxuICAgICAgICAgIEBuYXZpZ2F0ZWRUb0RhdGU9XCJvbk5hdmlnYXRlZFRvRGF0ZVwiXG4gICAgICAgICAgQG5hdmlnYXRpbmdUb0RhdGVTdGFydGVkPVwib25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZFwiIFxuICAgICAgICAgIEB2aWV3TW9kZUNoYW5nZWQ9XCJvblZpZXdNb2RlQ2hhbmdlZFwiIC8+XG4gICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgIDwhLS0gUGVzdGHDsWEgMy4gTGlzdGEgZGUgY2l0YXMgLS0+XG4gICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiTGlzdGEgZGUgY2l0YXNcIj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBpdGVtc1wiPiAgICAgICAgIFxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gU2hvd3MgdGhlIGxpc3QgaXRlbSBsYWJlbCBpbiB0aGUgZGVmYXVsdCBjb2xvciBhbmQgc3R5bGUuIC0tPlxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiODAsNTAsMjAwLDUwXCIgcm93cz1cIjI4LDI4XCI+XG4gICAgICAgICAgICA8TGFiZWwgIHJvdz1cIjBcIiBjb2w9XCIwXCIgOnRleHQ9XCJpdGVtLmZlY2hhXCIgIC8+XG4gICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNsYXNzPVwibGlzdGFcIiBjb2w9XCIxXCIgOnRleHQ9XCJpdGVtLmlkRXhwZWRpZW50ZVwiIC8+XG4gICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjbGFzcz1cImxpc3RhXCIgY29sPVwiMlwiIDp0ZXh0PVwiaXRlbS5ub21icmVcIiAvPlxuXG4gICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjbGFzcz1cImxpc3RhXCIgY29sPVwiMVwiIDp0ZXh0PVwiaXRlbS5ob3JhSW5pY2lvXCIgPiA8L0xhYmVsPlxuICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJsaXN0YVwiIGNvbD1cIjJcIiA6dGV4dD1cIml0ZW0uaG9yYUZpblwiIC8+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgIDwvVGFiVmlldz5cblxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwifi9zaGFyZWQvdXRpbHNcIjtcbiAgICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiO1xuICAgIGltcG9ydCAqIGFzIGNhbGVuZGFyTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC11aS1jYWxlbmRhcic7XG4gICAgaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBSYWRDYXJ0ZXNpYW5DaGFydCBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiO1xuICAgIFZ1ZS51c2UoUmFkQ2FydGVzaWFuQ2hhcnQpO1xuXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiUmVwb3J0ZUNpdGFzXCIpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleENoYW5nZTogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBhcmdzLnZhbHVlXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHRhYiBpbmRleDogJyArIG5ld0luZGV4KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRGF0ZVNlbGVjdGVkKGFyZ3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkRhdGVTZWxlY3RlZDogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25EYXRlRGVzZWxlY3RlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25EYXRlRGVzZWxlY3RlZDogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25OYXZpZ2F0ZWRUb0RhdGUoYXJncykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTmF2aWdhdGVkVG9EYXRlOiBcIiArIGFyZ3MuZGF0ZSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbk5hdmlnYXRpbmdUb0RhdGVTdGFydGVkKGFyZ3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpbmdUb0RhdGVTdGFydGVkOiBcIiArIGFyZ3MuZGF0ZSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblZpZXdNb2RlQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25WaWV3TW9kZUNoYW5nZWQ6IFwiICsgYXJncy5uZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgZHVtbXkgZXZlbnRzXG4gICAgICAgICAgICBsZXQgZXZlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCBzdGFydERhdGU7XG4gICAgICAgICAgICBsZXQgZW5kRGF0ZTtcbiAgICAgICAgICAgIGxldCBldmVudDtcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbbmV3IENvbG9yKDIwMCwgMTg4LCAyNiwgMjE0KSwgbmV3IENvbG9yKDIyMCwgMjU1LCAxMDksIDEzMCksIG5ldyBDb2xvcigyNTUsIDU1LCA0NSwgMjU1KSwgbmV3IENvbG9yKDE5OSwgMTcsIDIyNywgMTApLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDU0LCAzKV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBpICogMiwgMTQpO1xuICAgICAgICAgICAgICBlbmREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCAoaSAqIDIpLCAxNik7XG4gICAgICAgICAgICAgIGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJUZXJhcGlhIFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcbiAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICBpZiAoaSAlIDMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IGNhbGVuZGFyTW9kdWxlLkNhbGVuZGFyRXZlbnQoXCJzZWNvbmQgXCIgKyBpLCBzdGFydERhdGUsIGVuZERhdGUsIHRydWUsIGNvbG9yc1tpICogNSAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcbiAgICAgICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudHMgPSBldmVudHM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudHM6IFtdLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgeyBmZWNoYTogXCIxNC8wMi8yMDIwXCIsIGlkRXhwZWRpZW50ZTogXCJMVEYxOFwiICwgbm9tYnJlOiBcIkpvc8OpIENhcmxvcyBIdWVydGEgR29uesOhbGVzXCIsIGhvcmFJbmljaW86IFwiMTI6MDBcIiwgaG9yYUZpbjogXCIxMzozMFwiIH0sXG4gICAgICAgICAgICAgICAgICB7IGZlY2hhOiBcIjIxLzAyLzIwMjBcIiwgaWRFeHBlZGllbnRlOiBcIkxURjE4XCIgLCBub21icmU6IFwiSm9zw6kgQ2FybG9zIEh1ZXJ0YSBHb256w6FsZXNcIiwgaG9yYUluaWNpbzogXCIxMjowMFwiLCBob3JhRmluOiBcIjEzOjMwXCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgZmVjaGE6IFwiMjgvMDIvMjAyMFwiLCBpZEV4cGVkaWVudGU6IFwiTFRGMThcIiAsIG5vbWJyZTogXCJKb3PDqSBDYXJsb3MgSHVlcnRhIEdvbnrDoWxlc1wiLCBob3JhSW5pY2lvOiBcIjEyOjAwXCIsIGhvcmFGaW46IFwiMTM6MzBcIiB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjaXRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIENpdGFzOiBcIkNpdGFzIGRlIGFzaXN0ZW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FudGlkYWQ6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0YXM6IFwiQ2l0YXMgcGVyZGlkYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FudGlkYWQ6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0YXM6IFwiQ2l0YXMgcmVzdGFudGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkOiA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJ35AbmF0aXZlc2NyaXB0L3RoZW1lL3Njc3MvdmFyaWFibGVzL2JsdWUnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuXG5BY3Rpb25CYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5UYWJWaWV3e1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmxpc3Rhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhBMUNBO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9ncmVzc2JhciB7XG4gICAgaGVpZ2h0OiA1MDtcbiAgICBtYXJnaW46IDEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAxO1xufVxuLnByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xufVxuLnByb2dyZXNzYmFyLW5lZ2F0aXZlLXZhbHVle1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXG4gICAgICAgICAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgaWNvbj1cInJlczovL21lbnVcIiBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXG4gICAgICAgICAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXG4gICAgICAgICAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGljb249XCJyZXM6Ly9tZW51XCIgXG4gICAgICAgICAgICAgICAgYW5kcm9pZDp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgXG4gICAgICAgICAgICAgICAgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCJcbiAgICAgICAgICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJSZXBvcnRlIGRlIGRpYW7Ds3N0aWNvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwhLS0gIDxJbWFnZSBzcmM9XCJyZXM6Ly9pY29uXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPi0tPlxuICAgICAgICAgICAgIDwhLS0gICA8TGFiZWwgdGV4dD1cIk5hdGl2ZVNjcmlwdFwiIGZvbnRTaXplPVwiMjRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+IC0tPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICBcblxuPFNjcm9sbFZpZXc+XG5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMCwyMCwyMCwyMFwiIGNvbHVtbnM9XCIyMCw0MCxhdXRvXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlciB0b3BcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzXCIgc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMmJkO1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIyXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiIHRleHQ9XCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMlwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIiB0ZXh0PVwiRXhwOiAxNjU5LTA5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjJcIiBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIgdGV4dD1cIjUgYcOxb3NcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPCEtLSBEaWFnbm9zdGljbyAvIENvbGxhcHNlLS0+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS10LTIwIG0tbC0zMFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYWxpZ25Db250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkRpYWduw7NzdGljb1wiIEB0YXA9XCJnb0NvbGxhcHNlKCRldmVudClcIiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiZGlhZyBpbiBkaWFnbm9zdGljb3NcIlxuICAgICAgICAgICAgICAgOnZpc2liaWxpdHk9IFwic2hvd0NvbGxhcHNlQm94ID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiPiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPiBcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVwiMVwiPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJkaWFnLmRpYWdub3N0aWNvMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cImRpYWcuZGlhZ25vc3RpY28yXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwiZGlhZy5kaWFnbm9zdGljbzNcIi8+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgICAgICAgICA8IS0tIFRlcmFwaWEgZGVsIGxlbmd1YWplIC9Db2xsYXBzZSAtLT5cbiAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS10LTIwIG0tbC0zMFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGFsaWduQ29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVGVyYXBpYSBkZSBsZW5ndWFqZVwiIEB0YXA9XCJnb0NvbGxhcHNlMigkZXZlbnQpXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0ZXIgaW4gdGVyYXBpYXNcIlxuICAgICAgICAgICAgICAgOnZpc2liaWxpdHk9IFwic2hvd0NvbGxhcHNlQm94MiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIj4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT4gXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhM1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhNFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhNVwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvTGlzdFZpZXc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFZHVjYWNpw7NuIGVzcGVjaWFsIC9Db2xsYXBzZSAtLT5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJtLXQtMjAgbS1sLTMwXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRWR1Y2FjacOzbiBlc3BlY2lhbFwiIEB0YXA9XCJnb0NvbGxhcHNlMygkZXZlbnQpXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVwiMVwiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcnVlYmFcIiBjbGFzcz1cImJveCBwdWxsLWxlZnRcIlxuICAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveDMgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCI+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQbGFuIGRlIHRyYWJham8gL0NvbGxhcHNlIC0tPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cIm0tdC0yMCBtLWwtMzBcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGFsaWduQ29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQbGFuIGRlIHRyYWJham9cIiBAdGFwPVwiZ29Db2xsYXBzZTQoJGV2ZW50KVwiIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwbGFuIGluIHBsYW5UcmFiYWpvXCJcbiAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveDQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCI+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+IFxuICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJwbGFuLnBsYW4xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwicGxhbi5wbGFuMlwiLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgXG5cbiAgICA8L1N0YWNrTGF5b3V0PlxuPC9TY3JvbGxWaWV3PlxuXG5cdFxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwifi9zaGFyZWQvdXRpbHNcIjtcbiAgICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiO1xuICAgIGltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbiAgICBpbXBvcnQgUGFnZXIgZnJvbSAnbmF0aXZlc2NyaXB0LWFjY29yZGlvbi92dWUnXG5cdGltcG9ydCBNdWx0aSBmcm9tICcuL011bHRpJ1xuXG4gICAgVnVlLnVzZShQYWdlcilcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJIb21lXCIpO1xuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0RyYXdlcigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvQmFjazogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcblx0XHRcdH0sXG5cdFx0XHRnb1RvTXVsdGk6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy4kbmF2aWdhdGVUbyhNdWx0aSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb0NvbGxhcHNlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvQ29sbGFwc2UyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94MilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDIgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgZ29Db2xsYXBzZTM6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29sbGFwc2VCb3gzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Db2xsYXBzZTQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29sbGFwc2VCb3g0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94NCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY28xOiAnUmV0YXJkbyBkZSBsZW5ndWFqZSBhbsOhcnRpY28gbW9kZXJhZG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY28yOiAnQXVkaWNpw7NuIG5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zdGljbzM6ICdBdWR1Y2nDs24gYmlsYXRlcmFsJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0ZXJhcGlhcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTE6ICcxLiBFamVyY2ljaW9zIGRlIHJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuLicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhMjogJzIuIEVqZXJjaWNpb3MgcHJlZm9uYXRvcmlvcyB5IHByYXhpYXMgb3JvZmFjaWFsZXMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWEzOiAnMy4gRWplcmNpY2lvcyBwYXJhIGZvbmVtYXMgL3IvLCAvcnIvLCAvbC8sIC9jaC8sIC9mLywgL2svLCAvcy8sIGludGVybWVkaWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTQ6ICc0LiBUcmFiYWphciBhdW1lbnRvIGRlIHZvY2FidWxhcmlvIGFjb3JkZSBhIGxhIGVkYWQgeSBjbGFzaWZpY2FjacOzbiBwb3IgY2FtcG9zIHNlbcOhbnRpY29zLiBIYWNlciBsw6FtaW5hcyBjb24gZmlndXJhcyBkZSBidWVuIHRhbWHDsW8gcGFyYSBxdWUgbGFzIGFwcmVuZGEgYSBlc2NyaWJpcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhNTogJzUuIFRyYWJhamFyIGVzdGltdWxhY2nDs24gZGUgYXNwZWN0byBwcmFnbcOhdGljbyBtZWRpYW50ZSBjYW50b3MsIGp1ZWdvcyB5IGN1ZW50b3MuJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBwbGFuVHJhYmFqbzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuMTogJzEuIENvbnRpbnVhciB0ZXJhcGlhIGRlIGxlbmd1YWplIHkgYXByZW5kaXphamUgc2VtYW5hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuMjogJzIuIENpdGEgYWwgdGVybWluYXIgdGVyYXBpYXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbGxhcHNlQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXBzZUJveDI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbGxhcHNlQm94MzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGFwc2VCb3g0OiBmYWxzZVxuXHRcdFx0fVxuICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuXHQubWVzc2FnZSB7XG5cdFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAyMDtcblx0XHRjb2xvcjogIzMzMzMzMztcblx0fVxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiVGVyYXBpYXNcIj48L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8U2Nyb2xsVmlldyA+XG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0ZXJhcGlhIGluIHRlcmFwaWFzXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwidGVyYXBpYS5pbWdcIiBjbGFzcz1cInRodW1iXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGVyYXBpYS50ZXJhcGlhXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJGZWF0dXJlZFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlcmFwaWFzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRlcmFwaWE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhOiBcIlJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcmVzcGlyYWNpb24uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUZXJhcGlhOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTogXCJQcmVmb25hdG9yaW9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcHJlZm9uYXRvcmlvcy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRlcmFwaWE6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhOiBcIlByYXhpYXMgb3JvZmFjaWFsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogXCJ+L2ltYWdlcy9wcmF4aWFzLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWE6IFwiRWplcmNpY2lvcyBkZSBmb25lbWFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvZm9uZW1hcy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LTQ1YmE1ZWQ0IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi0zOGYwMjYwNiB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LWVlOGJjZDM2IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5BY3Rpb25CYXJbZGF0YS12LWVlOGJjZDM2XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnRpdHVsb1tkYXRhLXYtZWU4YmNkMzZdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnN1YnRpdHVsb1tkYXRhLXYtZWU4YmNkMzZdIHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBlbXB0eS1kYXRhLXYtNTcyYzYzZjgge30vKiBGb3JtcyAqL1xcbi8qKlxcbiAqIEJsdWUgdmFyaWFibGUgb3ZlcnJpZGVzXFxuICoqL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Qcm9ncmVzby52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBlbXB0eS1kYXRhLXYtYzExOGI0YWMge30vKiBGb3JtcyAqL1xcbi8qKlxcbiAqIEJsdWUgdmFyaWFibGUgb3ZlcnJpZGVzXFxuICoqL1xcbkFjdGlvbkJhcltkYXRhLXYtYzExOGI0YWNdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5UYWJWaWV3W2RhdGEtdi1jMTE4YjRhY10ge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5saXN0YVtkYXRhLXYtYzExOGI0YWNdIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OEExQ0E7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5wcm9ncmVzc2JhcltkYXRhLXYtYzExOGI0YWNdIHtcXG4gIGhlaWdodDogNTA7XFxuICBtYXJnaW46IDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMTA7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbn1cXG4ucHJvZ3Jlc3NiYXItdmFsdWVbZGF0YS12LWMxMThiNGFjXSB7XFxuICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xcbn1cXG4ucHJvZ3Jlc3NiYXItbmVnYXRpdmUtdmFsdWVbZGF0YS12LWMxMThiNGFjXSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LWVhYWM3MWRlIHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG4ubWVzc2FnZVtkYXRhLXYtZWFhYzcxZGVdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi50aXRsZVtkYXRhLXYtZWFhYzcxZGVdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LWE3YTY4MWI0IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbkFjdGlvbkJhcltkYXRhLXYtODU2MTg3MjRdIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiYTgyO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtODU2MTg3MjRdIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvTXVsdGkudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUmFkU2lkZURyYXdlclwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJkcmF3ZXJcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGRyYXdlckxvY2F0aW9uOiBcIkxlZnRcIixcbiAgICAgICAgZ2VzdHVyZXNFbmFibGVkOiBcInRydWVcIixcbiAgICAgICAgZHJhd2VyVHJhbnNpdGlvbjogX3ZtLnRyYW5zaXRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwidmlld1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmlldzpkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgIGFyZzogXCJkcmF3ZXJDb250ZW50XCIsXG4gICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZHJhd2VyQ29udGVudFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJGcmFtZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZpZXc6bWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXJnOiBcIm1haW5Db250ZW50XCIsXG4gICAgICAgICAgICAgIG1vZGlmaWVyczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZjogXCJkcmF3ZXJNYWluQ29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJtYWluQ29udGVudFwiKV0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2NvbnRlbnRcIiwgYXR0cnM6IHsgcm93czogXCJhdXRvLCAqXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzIHQtMzZcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMmJkO1wiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkV4cDogMTY1OS0wOVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9fYm9keVwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgKF92bS5zZWxlY3RlZFBhZ2UgPT09IFwiUmVwb3J0ZURpYWdub3N0aWNvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiAtc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTmF2aWdhdGlvbkl0ZW1UYXAoX3ZtLlJlcG9ydGVEaWFnbm9zdGljb3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJyZXM6Ly9yZXBvcnRlZGlhZ25vc3RpY29cIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIlJlcG9ydGUgZGUgZGlhZ27Ds3N0aWNvc1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlbGVjdGVkUGFnZSA9PT0gXCJSZXBvcnRlQ2l0YXNcIiA/IFwiIC1zZWxlY3RlZFwiIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTmF2aWdhdGlvbkl0ZW1UYXAoX3ZtLlJlcG9ydGVDaXRhcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcInJlczovL3JlcG9ydGVjaXRhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiUmVwb3J0ZSBkZSBjaXRhc1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlbGVjdGVkUGFnZSA9PT0gXCJQcm9ncmVzb1wiID8gXCIgLXNlbGVjdGVkXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25OYXZpZ2F0aW9uSXRlbVRhcChfdm0uUHJvZ3Jlc28pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJyZXM6Ly9wcm9ncmVzb3BhY2llbnRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgKF92bS5zZWxlY3RlZFBhZ2UgPT09IFwiVGVyYXBpYXNcIiA/IFwiIC1zZWxlY3RlZFwiIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcImF1dG8sICpcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTmF2aWdhdGlvbkl0ZW1UYXAoX3ZtLlRlcmFwaWFzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwicmVzOi8vdGVyYXBpYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIlRlcmFwaWFzXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyXCIgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlbGVjdGVkUGFnZSA9PT0gXCJOb3RpZmljYWNpb25lc1wiID8gXCIgLXNlbGVjdGVkXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25OYXZpZ2F0aW9uSXRlbVRhcChfdm0uTm90aWZpY2FjaW9uZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJyZXM6Ly9ub3RpZmljYWNpb25lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiTm90aWZpY2FjaW9uZXNcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJNdWx0aSBUZW1wbGF0ZXNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJHbyBiYWNrXCIsIFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvQmFjayB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjIwLCpcIiwgcm93czogXCJhdXRvLGF1dG8sKlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGNvbDogXCIxXCIsIHRleHQ6IFwiRXhwYW5kIEFsbFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5leHBhbmRBbGwgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbDogXCIxXCIsIHRleHQ6IFwiQ29sbGFwc2UgQWxsXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNvbGxhcHNlQWxsIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiQWNjb3JkaW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJhY2NvcmRpb25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBjaGlsZEl0ZW1zOiBcImNoaWxkcmVuXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRvZGRcIiwgbmFtZTogXCJoZWFkZXItb2RkXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaGVhZGVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJGV2ZW5cIiwgbmFtZTogXCJoZWFkZXItZXZlblwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5oZWFkZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwidGl0bGUtb2RkXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogaXRlbS50aXRsZSB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkZXZlblwiLCBuYW1lOiBcInRpdGxlLWV2ZW5cIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLnRpdGxlIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRvZGRcIiwgbmFtZTogXCJjb250ZW50LW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiMjAwXCIsIHRleHQ6IGl0ZW0udGV4dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRldmVuXCIsIG5hbWU6IFwiY29udGVudC1ldmVuXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRvZGRcIiwgbmFtZTogXCJmb290ZXItb2RkXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IGl0ZW0uZm9vdGVyVGV4dCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkZXZlblwiLCBuYW1lOiBcImZvb3Rlci1ldmVuXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLmZvb3RlclRleHQgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyB0aXRsZTogXCJOb3RpZmljYWNpb25lc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImlvczp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsIGljb246IFwicmVzOi8vbWVudVwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGljb246IFwicmVzOi8vbWVudVwiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQ6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLFxuICAgICAgICAgICAgICBcImlvcy5wb3NpdGlvblwiOiBcImxlZnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXItdGl0bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTm90aWZpY2FjaW9uZXNcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIzMCwgNTAsMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIyMCwyODAsIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUZXJhcGlhc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VidGl0dWxvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVjaWJlIG5vdGlmaWNhY2lvbmVzIGRpYXJpYXMgcGFyYSB2ZXIgdsOtZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCByZWNpYmlyIGVsIGF2YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDaXRhc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VidGl0dWxvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVjaWJlIG3DoXMgZGUgdW5hIG5vdGlmaWNhY2nDs25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmVwb3J0ZXMgZGUgcHJvZ3Jlc29cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCBsbGVnYXIgZWwgcmVwb3J0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlByb2dyZXNvIGRlbCBwYWNpZW50ZVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0ucHJvZ3Jlc29zLCBcIithbGlhc1wiOiBcInByb2dyZXNvXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNvID0gcmVmLnByb2dyZXNvXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiMjAsMjUsMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcHJvZ3Jlc28uYmxvcXVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIyXCIsIHRleHRXcmFwOiBcInRydWVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGZWNoYTogRGVsIFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcHJvZ3Jlc28uaW5pY2lvIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIiBhbCBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IHByb2dyZXNvLmZpbiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImlvczp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsIGljb246IFwicmVzOi8vbWVudVwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGljb246IFwicmVzOi8vbWVudVwiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQ6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLFxuICAgICAgICAgICAgICBcImlvcy5wb3NpdGlvblwiOiBcImxlZnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXItdGl0bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUmVwb3J0ZSBkZSBjaXRhc1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiVGFiVmlld1wiLFxuICAgICAgICB7IG9uOiB7IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IF92bS5pbmRleENoYW5nZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiUHJvZ3Jlc29cIiwgaWNvblNvdXJjZTogXCJyZXM6Ly9wcm9ncmVzb1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIjMwLDMwLDIwMCwyMCwyMFwiLCBjb2x1bW5zOiBcIjIwLCAqLCAyMFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgY29sOiBcIjFcIiwgdGV4dDogXCJCbG9xdWUgNFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiUmFkUGllQ2hhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGxvd0FuaW1hdGlvbjogXCJ0cnVlXCIsIHJvdzogXCIyXCIsIGNvbDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJEb251dFNlcmllc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ0a1BpZVNlcmllc1wiLCByYXdOYW1lOiBcInYtdGtQaWVTZXJpZXNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzTmFtZTogXCJwaWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZTogXCJEYXRhUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kUmFkaXVzOiBcIjAuNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlclJhZGl1c0ZhY3RvcjogXCIwLjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eTogXCJDYW50aWRhZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmRMYWJlbDogXCJDaXRhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGFiZWxzOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jaXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUmFkTGVnZW5kVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ0a1BpZUxlZ2VuZFwiLCByYXdOYW1lOiBcInYtdGtQaWVMZWdlbmRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2l0YXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0T3JpZ2luOiBcIlRvcFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjExMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTZWxlY3Rpb246IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBhbGV0dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ0a1BpZVBhbGV0dGVcIiwgcmF3TmFtZTogXCJ2LXRrUGllUGFsZXR0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2VyaWVzTmFtZTogXCJwaWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlBhbGV0dGVFbnRyeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRrUGllUGFsZXR0ZUVudHJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJQYWxldHRlRW50cnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0a1BpZVBhbGV0dGVFbnRyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIm9yYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJQYWxldHRlRW50cnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0a1BpZVBhbGV0dGVFbnRyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJncmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJncmF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkNhbGVuZGFyaW9cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiUmFkQ2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJjYWxlbmRhclwiLFxuICAgICAgICAgICAgICAgICAgZXZlbnRTb3VyY2U6IF92bS5jYWxlbmRhckV2ZW50cyxcbiAgICAgICAgICAgICAgICAgIGV2ZW50c1ZpZXdNb2RlOiBcIklubGluZVwiLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZTogXCJTaW5nbGVcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdNb2RlOiBcIk1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTW9kZTogXCJTdGFja1wiLFxuICAgICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBkYXRlU2VsZWN0ZWQ6IF92bS5vbkRhdGVTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgIGRhdGVEZXNlbGVjdGVkOiBfdm0ub25EYXRlRGVzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlZFRvRGF0ZTogX3ZtLm9uTmF2aWdhdGVkVG9EYXRlLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGluZ1RvRGF0ZVN0YXJ0ZWQ6IF92bS5vbk5hdmlnYXRpbmdUb0RhdGVTdGFydGVkLFxuICAgICAgICAgICAgICAgICAgdmlld01vZGVDaGFuZ2VkOiBfdm0ub25WaWV3TW9kZUNoYW5nZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkxpc3RhIGRlIGNpdGFzXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBpdGVtczogX3ZtLml0ZW1zLCBcIithbGlhc1wiOiBcIml0ZW1cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCI4MCw1MCwyMDAsNTBcIiwgcm93czogXCIyOCwyOFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBpdGVtLmZlY2hhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaWRFeHBlZGllbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGNvbDogXCIyXCIsIHRleHQ6IGl0ZW0ubm9tYnJlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaG9yYUluaWNpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmhvcmFGaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlcG9ydGUgZGUgZGlhbsOzc3RpY29zXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXIgdG9wXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIjAsMjAsMjAsMjBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIyMCw0MCxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwic3JjLmRlY29kZVwiOiBcImZvbnQ6Ly8mI3hmMmJkO1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRnJhbmNpc2NvIFNhbnRpYWdvIE1vcmFsZXMgUm9hXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjJcIiwgdGV4dDogXCJFeHA6IDE2NTktMDlcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMlwiLCB0ZXh0OiBcIjUgYcOxb3NcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjAgbS1sLTMwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRGlhZ27Ds3N0aWNvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0NvbGxhcHNlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBfdm0uc2hvd0NvbGxhcHNlQm94ID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZGlhZ25vc3RpY29zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImRpYWdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWcgPSByZWYuZGlhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYm9yZGVyV2lkdGg6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGlhZy5kaWFnbm9zdGljbzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGlhZy5kaWFnbm9zdGljbzJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGlhZy5kaWFnbm9zdGljbzNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tdC0yMCBtLWwtMzBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJUZXJhcGlhIGRlIGxlbmd1YWplXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0NvbGxhcHNlMigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLnNob3dDb2xsYXBzZUJveDIgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50ZXJhcGlhcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJ0ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlciA9IHJlZi50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogdGVyLnRlcmFwaWExIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogdGVyLnRlcmFwaWEyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogdGVyLnRlcmFwaWEzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogdGVyLnRlcmFwaWE0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogdGVyLnRlcmFwaWE1IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjAgbS1sLTMwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRWR1Y2FjacOzbiBlc3BlY2lhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZTMoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYm9yZGVyV2lkdGg6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm94IHB1bGwtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJ1ZWJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLnNob3dDb2xsYXBzZUJveDMgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjAgbS1sLTMwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUGxhbiBkZSB0cmFiYWpvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0NvbGxhcHNlNCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLnNob3dDb2xsYXBzZUJveDQgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wbGFuVHJhYmFqbyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJwbGFuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGFuID0gcmVmLnBsYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogcGxhbi5wbGFuMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHBsYW4ucGxhbjIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlRlcmFwaWFzXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaXRlbXM6IF92bS50ZXJhcGlhcywgXCIrYWxpYXNcIjogXCJ0ZXJhcGlhXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRlcmFwaWEgPSByZWYudGVyYXBpYVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0ZXJhcGlhLmltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiB0ZXJhcGlhLnRlcmFwaWEgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIjogXCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIixcblx0XCIuL3NoYXJlZC91dGlscy5qc1wiOiBcIi4vc2hhcmVkL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBSZXBvcnRlRGlhZ25vc3RpY29zIGZyb20gXCIuL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvc1wiO1xuaW1wb3J0IERyYXdlckNvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50XCI7XG5pbXBvcnQgUmFkU2lkZURyYXdlciBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvdnVlXCI7XG5pbXBvcnQgQ2FsZW5kYXJWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci92dWUnO1xuVnVlLnVzZShDYWxlbmRhclZpZXcpO1xuVnVlLnVzZShSYWRTaWRlRHJhd2VyKTtcblxuLy9WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpO1xuIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5uZXcgVnVlKHtcbiAgICByZW5kZXIgKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgQXBwLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGgoRHJhd2VyQ29udGVudCwgeyBzbG90OiAnZHJhd2VyQ29udGVudCcgfSksXG4gICAgICAgICAgICBoKFJlcG9ydGVEaWFnbm9zdGljb3MsIHsgc2xvdDogJ21haW5Db250ZW50JyB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfVxuICB9KS4kc3RhcnQoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiFcXG4gKiBOYXRpdmVTY3JpcHQgVGhlbWUgX19WRVJTSU9OX18gKGh0dHBzOi8vbmF0aXZlc2NyaXB0Lm9yZylcXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE2IFRoZSBUaGVtZSBBdXRob3JzXFxuICogQ29weXJpZ2h0IDIwMTYtMjAxOSBQcm9ncmVzcyBTb2Z0d2FyZVxcbiAqIExpY2Vuc2VkIHVuZGVyIEFwYWNoZSAyLjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvdGhlbWUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gXCJ9LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiZW1wdHlcIixcImtleWZyYW1lc1wiOltdfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRm9ybXMgXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIipcXG4gKiBDb2xvciBjbGFzc2VzXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxuKlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ncmV5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctZ3JleVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtZ3JleS1saWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JhYmFiYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWdyZXktbGlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JhYmFiYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWNoYXJjb2FsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctY2hhcmNvYWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLXRyYW5zcGFyZW50XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLXRyYW5zcGFyZW50XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYXF1YVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWFxdWFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ibHVlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1icm93blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWJyb3duXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1mb3Jlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1mb3Jlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWdyZXktZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWdyZXktZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtcHVycGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctcHVycGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1sZW1vblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWxlbW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1saW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctbGltZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtb3JhbmdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctb3JhbmdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ydWJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctcnVieVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtc2t5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctc2t5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1lcnJvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWVycm9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgV2lkdGgvSGVpZ2h0IFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudy1mdWxsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnctMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaC1mdWxsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oLTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIipcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcbipcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEFsaWdubWVudCBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbGVmdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwicmlnaHRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jZW50ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbG93ZXJjYXNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJsb3dlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC11cHBlcmNhc2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInVwcGVyY2FzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNhcGl0YWxpemVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImNhcGl0YWxpemVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC13ZWlnaHQtbm9ybWFsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC13ZWlnaHQtYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LWl0YWxpY1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc3R5bGVcIixcInZhbHVlXCI6XCJpdGFsaWNcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogRm9udCBzaXplXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxuKlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTM2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDFcIixcIi5oMlwiLFwiLmgzXCIsXCIuaDRcIixcIi5oNVwiLFwiLmg2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5oMVwiLFwiLm5zLWRhcmsgLmgyXCIsXCIubnMtZGFyayAuaDNcIixcIi5ucy1kYXJrIC5oNFwiLFwiLm5zLWRhcmsgLmg1XCIsXCIubnMtZGFyayAuaDZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvZHlcIixcIi5ib2R5MlwiLFwiLmZvb3Rub3RlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmJvZHlcIixcIi5ucy1kYXJrIC5ib2R5MlwiLFwiLm5zLWRhcmsgLmZvb3Rub3RlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYjNiM2IzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgxXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oM1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmg0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvZHlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib2R5MlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvb3Rub3RlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCAuaDFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIC5oMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgLmgzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCAuaDVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIC5ib2R5MlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW1nLXJvdW5kZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbWctY2lyY2xlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbWctdGh1bWJuYWlsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW52aXNpYmxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmlzaWJpbGl0eVwiLFwidmFsdWVcIjpcImNvbGxhcHNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnB1bGwtbGVmdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnB1bGwtcmlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwicmlnaHRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LWF1dG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS1hdXRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZGFuZ2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1kYW5nZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1tb2RhbFwiLFwiLm5zLXJvb3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwic2Fucy1zZXJpZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtbW9kYWxcIixcIi5ucy1kYXJrLm5zLXJvb3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuLWhpZGRlblwiLFwiLmhpZGRlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZpc2liaWxpdHlcIixcInZhbHVlXCI6XCJjb2xsYXBzZWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuLXJvdW5kZWRcIixcIi5yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuLWNpcmNsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRGl2aWRlcnMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI5IDAgMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwIDAgMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1zdHlsZVwiLFwidmFsdWVcIjpcInNvbGlkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbXV0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNhY2U0ZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAudGV4dC1tdXRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzQ0NmY4M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxhYmVsID4gKlwiLFwiTGFiZWwgPiAqID4gKlwiLFwiQnV0dG9uID4gKlwiLFwiQnV0dG9uID4gKiA+ICpcIixcIlRleHRGaWVsZCA+ICpcIixcIlRleHRGaWVsZCA+ICogPiAqXCIsXCJUZXh0VmlldyA+ICpcIixcIlRleHRWaWV3ID4gKiA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlld1wiLFwiUmFkTGlzdFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4taGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4taGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCIubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJub25lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4td2lkdGhcIixcInZhbHVlXCI6XCI2NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgNSAwIDVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMTYgOCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgQnV0dG9uXCIsXCIubnMtaW9zIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBCdXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0IDEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1vdXRsaW5lXCIsXCIubnQtYnV0dG9uLi1vdXRsaW5lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQnV0dG9uLi1vdXRsaW5lXCIsXCIubnMtYW5kcm9pZCAubnQtYnV0dG9uLi1vdXRsaW5lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcm91bmRlZC1zbVwiLFwiQnV0dG9uLi1yb3VuZGVkLWxnXCIsXCIubnQtYnV0dG9uLi1yb3VuZGVkLXNtXCIsXCIubnQtYnV0dG9uLi1yb3VuZGVkLWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEJ1dHRvbi4tcm91bmRlZC1zbVwiLFwiLm5zLWFuZHJvaWQgQnV0dG9uLi1yb3VuZGVkLWxnXCIsXCIubnMtYW5kcm9pZCAubnQtYnV0dG9uLi1yb3VuZGVkLXNtXCIsXCIubnMtYW5kcm9pZCAubnQtYnV0dG9uLi1yb3VuZGVkLWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcm91bmRlZC1sZ1wiLFwiLm50LWJ1dHRvbi4tcm91bmRlZC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25baXNFbmFibGVkPWZhbHNlXVwiLFwiLm50LWJ1dHRvbltpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tc2ltcGxlXCIsXCIubnQtYnV0dG9uLi1zaW1wbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLWVsZXZhdGlvblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLWR5bmFtaWMtZWxldmF0aW9uLW9mZnNldFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWFxdWFcIixcIi5ucy1yb290IC5udC1idXR0b24uLWFxdWFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWFxdWFcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYXF1YVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWFxdWEuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWFxdWEuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZGZmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1hcXVhLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWFxdWEuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZGZmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYmx1ZVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYmx1ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYmx1ZVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ibHVlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYmx1ZS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYmx1ZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ibHVlLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWJsdWUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWJyb3duXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1icm93blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYnJvd25cIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYnJvd25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1icm93bi4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYnJvd24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmYmY5ZjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1icm93bi4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1icm93bi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZiZjlmOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1mb3Jlc3RcIixcIi5ucy1yb290IC5udC1idXR0b24uLWZvcmVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tZm9yZXN0XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWZvcmVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWZvcmVzdC4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tZm9yZXN0Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjOWNmZmZlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tZm9yZXN0Li1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWZvcmVzdC4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzljZmZmZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ncmV5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ncmV5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ncmV5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWdyZXlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ncmV5Li1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ncmV5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWdyZXkuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tZ3JleS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzVjNjg3Y1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tbGVtb25cIixcIi5ucy1yb290IC5udC1idXR0b24uLWxlbW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1sZW1vblwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1sZW1vblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWxlbW9uLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1sZW1vbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1sZW1vbi4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1sZW1vbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tbGltZVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGltZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tbGltZVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1saW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tbGltZS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGltZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1saW1lLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWxpbWUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLW9yYW5nZVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tb3JhbmdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1vcmFuZ2VcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tb3JhbmdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tb3JhbmdlLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1vcmFuZ2UuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tb3JhbmdlLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLW9yYW5nZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tcHVycGxlXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1wdXJwbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXB1cnBsZVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1wdXJwbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1wdXJwbGUuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLXB1cnBsZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1wdXJwbGUuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tcHVycGxlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ydWJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ydWJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ydWJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXJ1YnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ydWJ5Li1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ydWJ5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXJ1YnkuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tcnVieS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tc2t5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1za3lcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXNreVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1za3lcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1za3kuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLXNreS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1za3kuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tc2t5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRnJhbWVcIixcIi5udC1mcmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRnJhbWVcIixcIi5ucy1kYXJrIC5udC1mcmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGFnZVwiLFwiLm50LXBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFBhZ2VcIixcIi5ucy1kYXJrIC5udC1wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aXZpdHlJbmRpY2F0b3JcIixcIi5udC1hY3Rpdml0eS1pbmRpY2F0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTbGlkZXJcIixcIi5udC1zbGlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyMCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU2xpZGVyXCIsXCIubnMtaW9zIC5udC1zbGlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxMCAxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnQtc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFN3aXRjaFwiLFwiLm5zLWFuZHJvaWQgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE0IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U2ZTZlNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWFuZHJvaWQgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNGE0YTRhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTd2l0Y2hcIixcIi5ucy1pb3MgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtaW9zIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWlvcyBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlZpZXdcIixcIi5udC10YWItdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi10ZXh0LWZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJjYXBpdGFsaXplXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQm90dG9tTmF2aWdhdGlvblwiLFwiLm50LWJvdHRvbS1uYXZpZ2F0aW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlld1wiLFwiUmFkTGlzdFZpZXdcIixcIi5udC1saXN0LXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyBTdGFja0xheW91dFwiLFwiUmFkTGlzdFZpZXcgU3RhY2tMYXlvdXRcIixcIi5udC1saXN0LXZpZXcgU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3ID4gKlwiLFwiUmFkTGlzdFZpZXcgPiAqXCIsXCIubnQtbGlzdC12aWV3ID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3ID4gKiBMYWJlbFwiLFwiUmFkTGlzdFZpZXcgPiAqIExhYmVsXCIsXCIubnQtbGlzdC12aWV3ID4gKiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyA+ICogSW1hZ2VcIixcIlJhZExpc3RWaWV3ID4gKiBJbWFnZVwiLFwiLm50LWxpc3QtdmlldyA+ICogSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzdHJldGNoXCIsXCJ2YWx1ZVwiOlwiYXNwZWN0Rml0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLnRodW1iXCIsXCJMaXN0VmlldyAuLXRodW1iXCIsXCJSYWRMaXN0VmlldyAudGh1bWJcIixcIlJhZExpc3RWaWV3IC4tdGh1bWJcIixcIi5udC1saXN0LXZpZXcgLnRodW1iXCIsXCIubnQtbGlzdC12aWV3IC4tdGh1bWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzdHJldGNoXCIsXCJ2YWx1ZVwiOlwiZmlsbFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi1oZWlnaHRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlldy4tc2luZ2xlLWNvbC1jYXJkcyBJbWFnZVwiLFwiUmFkTGlzdFZpZXcuLXNpbmdsZS1jb2wtY2FyZHMgSW1hZ2VcIixcIi5udC1saXN0LXZpZXcuLXNpbmdsZS1jb2wtY2FyZHMgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIyMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyBJbWFnZVwiLFwiUmFkTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgSW1hZ2VcIixcIi5udC1saXN0LXZpZXcuLXR3by1jb2wtY2FyZHMgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIExpc3RWaWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXRcIixcIi5ucy1pb3MgUmFkTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dFwiLFwiLm5zLWlvcyAubnQtbGlzdC12aWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dCBJbWFnZVwiLFwiLm5zLWlvcyBSYWRMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0IEltYWdlXCIsXCIubnMtaW9zIC5udC1saXN0LXZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dCBJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcuLXR3by1saW5lcy1pbWFnZSBJbWFnZVwiLFwiTGlzdFZpZXcuLXNpbmdsZS1saW5lLWltYWdlIEltYWdlXCIsXCJSYWRMaXN0Vmlldy4tdHdvLWxpbmVzLWltYWdlIEltYWdlXCIsXCJSYWRMaXN0Vmlldy4tc2luZ2xlLWxpbmUtaW1hZ2UgSW1hZ2VcIixcIi5udC1saXN0LXZpZXcuLXR3by1saW5lcy1pbWFnZSBJbWFnZVwiLFwiLm50LWxpc3Qtdmlldy4tc2luZ2xlLWxpbmUtaW1hZ2UgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIlJhZExpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCIubnQtbGlzdC12aWV3IC4tc2VwYXJhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIlJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCAxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCIubnMtaW9zIFJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiLm5zLWlvcyAubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDEwIDAgMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIi5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImNhcGl0YWxpemVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtaWNvblwiLFwiUmFkTGlzdFZpZXcgLm50LWljb25cIixcIi5udC1saXN0LXZpZXcgLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZExpc3RWaWV3ID4gU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZExpc3RWaWV3ID4gKiA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIzNSAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciA+IExhYmVsXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI3NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNzRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXItZm9vdG5vdGVcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIi41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgPiBMYWJlbFwiLFwiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyID4gTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci4tbGVmdCA+IExhYmVsXCIsXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci4tbGVmdCAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLi1sZWZ0ID4gTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLi1sZWZ0IC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW1cIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3JpZW50YXRpb25cIixcInZhbHVlXCI6XCJob3Jpem9udGFsXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0gTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbSAubnQtaWNvblwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0gLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMxZTFlMWVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyIExhYmVsXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm1cIixcIi5udC1mb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInUm9ib3RvIFJlZ3VsYXInXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2IDAgMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIEZvcm1cIixcIi5ucy1pb3MgLm50LWZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIidTRiBVSSBUZXh0IFJlZ3VsYXInLCBzeXN0ZW1cIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC4tY2VudGVyXCIsXCIubnQtZm9ybSAuLWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX19vci1zZXBhcmF0b3JcIixcIi5udC1mb3JtIC5udC1mb3JtX19vci1zZXBhcmF0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyMCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fbGlua1wiLFwiLm50LWZvcm0gLm50LWZvcm1fX2xpbmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBGb3JtIC5udC1mb3JtX19saW5rXCIsXCIubnMtZGFyayAubnQtZm9ybSAubnQtZm9ybV9fbGlua1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX3RpdGxlXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fdGl0bGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX2xvZ29cIixcIi5udC1mb3JtIC5udC1mb3JtX19sb2dvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjAgMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fdmFsaWRhdGlvbi1tZXNzYWdlXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fdmFsaWRhdGlvbi1tZXNzYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMSAwIDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjE5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fZm9vdGVyXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fZm9vdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fZm9vdGVyIEJ1dHRvblwiLFwiLm50LWZvcm0gLm50LWZvcm1fX2Zvb3RlciBCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjUwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtW2lzRW5hYmxlZD1mYWxzZV0gKlwiLFwiLm50LWZvcm1baXNFbmFibGVkPWZhbHNlXSAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBGb3JtIFZhbGlkYXRpb24gc3R5bGluZyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXcubmctdmFsaWRcIixcIlRleHRGaWVsZC5uZy12YWxpZFwiLFwiUGlja2VyRmllbGQubmctdmFsaWRcIixcIkRhdGVQaWNrZXJGaWVsZC5uZy12YWxpZFwiLFwiVGltZVBpY2tlckZpZWxkLm5nLXZhbGlkXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldy5uZy12YWxpZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3Lm5nLWludmFsaWQubmctZGlydHlcIixcIlRleHRGaWVsZC5uZy1pbnZhbGlkLm5nLWRpcnR5XCIsXCJQaWNrZXJGaWVsZC5uZy1pbnZhbGlkLm5nLWRpcnR5XCIsXCJEYXRlUGlja2VyRmllbGQubmctaW52YWxpZC5uZy1kaXJ0eVwiLFwiVGltZVBpY2tlckZpZWxkLm5nLWludmFsaWQubmctZGlydHlcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Lm5nLWludmFsaWQubmctZGlydHlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRm9ybSBmaWVsZHMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3XCIsXCJUZXh0RmllbGRcIixcIlBpY2tlckZpZWxkXCIsXCJEYXRlUGlja2VyRmllbGRcIixcIlRpbWVQaWNrZXJGaWVsZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIkRhdGFGb3JtRWRpdG9yQ29yZVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwIDAgMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOCAwIDRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI1IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXcuLXJvdW5kZWRcIixcIlRleHRWaWV3Li1ib3JkZXJcIixcIlRleHRGaWVsZC4tcm91bmRlZFwiLFwiVGV4dEZpZWxkLi1ib3JkZXJcIixcIlBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJQaWNrZXJGaWVsZC4tYm9yZGVyXCIsXCJEYXRlUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIkRhdGVQaWNrZXJGaWVsZC4tYm9yZGVyXCIsXCJUaW1lUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIlRpbWVQaWNrZXJGaWVsZC4tYm9yZGVyXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkcy4tcm91bmRlZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHMuLWJvcmRlclwiLFwiRGF0YUZvcm1FZGl0b3JDb3JlLi1yb3VuZGVkXCIsXCJEYXRhRm9ybUVkaXRvckNvcmUuLWJvcmRlclwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcuLXJvdW5kZWRcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Li1ib3JkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTIgMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlldy4tcm91bmRlZFwiLFwiVGV4dEZpZWxkLi1yb3VuZGVkXCIsXCJQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiRGF0ZVBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJUaW1lUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzLi1yb3VuZGVkXCIsXCJEYXRhRm9ybUVkaXRvckNvcmUuLXJvdW5kZWRcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Li1yb3VuZGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIixcIlRleHRGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRlUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiVGltZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGVUaW1lUGlja2VyRmllbGRzW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGFGb3JtRWRpdG9yQ29yZVtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxhYmVsXCIsXCJEYXRhRm9ybUVkaXRvckxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjIgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLWhlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3W2Rpc3BsYXlNb2RlPVRva2Vuc11cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNCAwIDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBUb2tlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBUb2tlbkNsZWFyQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIuNlwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBEYXRlIFBpY2tlciBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyRmllbGRcIixcIkRhdGVQaWNrZXJGaWVsZFwiLFwiVGltZVBpY2tlckZpZWxkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtcmVwZWF0XCIsXCJ2YWx1ZVwiOlwibm8tcmVwZWF0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFwidmFsdWVcIjpcInJpZ2h0IGNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgUGlja2VyRmllbGRcIixcIi5ucy1pb3NcXG4gIERhdGVQaWNrZXJGaWVsZFwiLFwiLm5zLWlvc1xcbiAgVGltZVBpY2tlckZpZWxkXCIsXCIubnMtaW9zXFxuICBEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiLm5zLWlvc1xcbiAgRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCIubnMtaW9zXFxuICBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcIjI4IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvcGVydHlFZGl0b3JbdHlwZT0nRGF0ZSddIERhdGFGb3JtRWRpdG9yQ29yZVwiLFwiRGF0ZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUF3QkFNQUFBQjlJRUMrQUFBQUQxQk1WRVZIY0V3QUFBQUFBQUFBQUFBQUFBRFRyQWovQUFBQUJIUlNUbE1Bd0JBZ1U1RENRd0FBQUZkSlJFRlVTTWRqWUNBVnVMaTRvREhvcDVSSnhBVURPQ3BnVmNyb2dnVUlZRlhLZ2sycE13NmxDaGh1ZFhIQW9aU0JWa3JSdzI2RUtjVUM2S3QwTkFvR2tWSVdhRlNOS2gyNVNnZDdRVVJDWlVSQ0ZVY0xBQUMySTJoRUVDQllQZ0FBQUFCSlJVNUVya0pnZ2c9PVxcXCIpXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFRpbWUgUGlja2VyIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQcm9wZXJ0eUVkaXRvclt0eXBlPSdUaW1lJ10gRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCJUaW1lUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBTFZCTVZFVkhjRXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3R0bDZuQUFBQURuUlNUbE1BWU9CQXdDQVEwRkNBY1BDd29FWndkaHNBQUFFMlNVUkJWRWpIWTJBWUxJQjFUZDI3ZDg5UEJSQld5UWhVQ0FMUEJRaXExSHNIQlk4SXFHWDFlL2Z1eVdSalkwc1FqZDhOM2UvZUtTYUFHR3hDNzk3dHdHczlVQ1dNRFZTTHp3bHk3OTRtd05oczk5NDl4SzJTQThVZ29CVU5PSlZHbzVvajkyNHJUcVYrRUVQNTNzR01mWUxiVTI4WmtKVXkzTVBwTWFaM2FxaEtrOTRwNFBTL0FLcFNScHhoVVBlSUFWVXBnOTV6SEpFS013T2hWTzRkOXNqbGV2Y01YV25ldXdWWWxmSzhjMEJYeXZMdUFJNEFtSUN1bFBOZEFWYWxmTzhNMEpWeXZIdEFyRkptcWlxRkFDb3BiU0JXS1Rzc3NCQUFWMkRCb3dBQmNFVUJQR0lSQUZmRXNtSW1PVnpKQlo0SUVRQlhJb1FuYmFRYzlKQkFob0VEM0JrR2xnM2hBSGMyaEdWdWhOWW4xQ2d5U0NpSVNDamVTQ2swU1NpS0lRWDhER1BqVHNJRlBBblZCaW1WRVNsVjNJQUJBS0RrejVqSEljVG9BQUFBQUVsRlRrU3VRbUNDXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRGF0ZS9UaW1lIFBpY2tlciBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS2dBQUFBd0JBTUFBQUIzVUN5cEFBQUFMVkJNVkVWSGNFd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDdHRsNm5BQUFBRG5SU1RsTUFRR0Rnd0JBZzBGQ0FjUEN3b005SWUra0FBQUdjU1VSQlZFakg1WmUvVHNNd0VNWkQycFFXVlJVWnUwVmlqeEFTYThVVFZKWFlVWFlXbmlEcWlsaGdZK1FCbUJFak13OVJ0VFFsVTc5bklDUnlyRGp4eFlrZHFZaHZpWWU3WDg3LzdzNldsUXFBTURDZ1B3RjE1aWdwV2hBT2c5Y1FpRDhEQ3RwSGhhN2s5bmFZbWNRZUFaMVVRYi9sekJtejJYb1VkRkZhVTJ5a2MwOFdLM3B5M2Vudk55Q2dWZ1BvQTNDUkxyaHpCcnliZ2RvSms0MFRxa2RDeFJNbWcvclk1d2ZEV2VITEJIUllDQzRKZTJrQWVsdU16Y2ViQWVnOEM1UzUySWowb1RiMlJaZVZiS3NhUUh1NExMcGM0N3pCamRwSTl0NHJRbTNaL2plQWhsdHhjck5ZRnpwZ2NYR29qMEJ6VFUrd0UxMXU4S0lKSGJPTXlGMzYrTkNFOXZBb3Vvd2syNjhPbmVCVWRCbGliUjU2ZFBEUVRBY01YYmFCWnRackNmU1lIU211RWU0MG9lTnlPNkJ5K0dsb2ZrMjVWSzRwRFIyVUU1MUtRcUdoZWVyamtxYytaYWd2Vmc4aVNTdERXVG5KUlpRVFpTZ3JmTG1VQ2w4TmxKVm8vaE9WRWwwSGJkVk0xRUZidFQxMTBFNGF0RzVheVVaTnJ6STBiYytmWGZlK3JqMnYwRTd6SWRISms2ZVR4NW5sdUNVRjFqL1JEeFFRUHczaTlOK3pBQUFBQUVsRlRrU3VRbUNDXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIERhdGVUaW1lUGlja2VyRmllbGRzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1zaXplXCIsXCJ2YWx1ZVwiOlwiNTYgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRlVGltZVBpY2tlckZpZWxkcyAuaW5wdXRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzIERhdGVQaWNrZXJGaWVsZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHMgVGltZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcIm5vbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzIC5pbnB1dFwiLFwiLm5zLWRhcmtcXG4gICAgRGF0ZVRpbWVQaWNrZXJGaWVsZHMgRGF0ZVBpY2tlckZpZWxkXCIsXCIubnMtZGFya1xcbiAgICBEYXRlVGltZVBpY2tlckZpZWxkcyBUaW1lUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwibm9uZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGVUaW1lUGlja2VyRmllbGRzIFRpbWVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiLTMwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFBpY2tlciBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBR0ZCTVZFVkhjRXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCb0F0VExBQUFBQjNSU1RsTUFvUEF3MEJBZ0NFSlU0d0FBQUVwSlJFRlVTTWRqWUJnRmd3VXdDaEN0Vkx5UWFFUEx5NGsxTnFtOG5GaGptZFdKTjlabzFOZ2haaXdKU29sM3dLaWhBMm9vQ1prN2hQajB4K3BPZEVIRUVFSjg4VFlLQmdvQUFBQzVKUmc0OXJJV0FBQUFBRWxGVGtTdVFtQ0NcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UuaW5wdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlIExpc3RWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VwYXJhdG9yLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlIExpc3RWaWV3ID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQ4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTAgMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBWVVFeFVSVWR3VFAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy94MUxWYjRBQUFBSGRGSk9Vd0NnOEREUUVDQUlRbFRqQUFBQVNrbEVRVlJJeDJOZ0dBV0RCVEFLRUsxVXZKQm9ROHZMaVRVMnFieWNXR09aMVlrMzFtalUyQ0ZtTEFsS2lYZkFxS0VEYWlnSm1UdUUrUFRINms1MFFjUVFRbnp4TmdvR0NnQUFBTGtsR0RqMnNoWUFBQUFBU1VWT1JLNUNZSUk9XFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBEYXRlUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBUFVFeFVSVWR3VFAvLy8vLy8vLy8vLy8vLy94UGdNUm9BQUFBRWRGSk9Vd0RBRUNCVGtNSkRBQUFBVjBsRVFWUkl4Mk5nSUJXNHVMaWdNZWlubEVuRUJRTTRLbUJWeXVpQ0JRaGdWY3FDVGFrekRxVUtHRzUxY2NDaGxJRldTdEhEYm9RcHhRTG9xM1EwQ2dhUlVoWm9WSTBxSGJsS0IzdEJSRUpsUkVJVlJ3c0FBTFlqYUVRUUlGZytBQUFBQUVsRlRrU3VRbUNDXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUaW1lUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBdFVFeFVSVWR3VFAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vODFlM1FJQUFBQU9kRkpPVXdCZzRFREFJQkRRVUhEd3NLQ0E0aXN2SkFBQUFUWkpSRUZVU01kallCZ3NnSFYyM2J0M3ozY0dFRmJKQ0ZRSUFzOEZDS3JVZXdjRmp3aW9aZlY3OSs3SlpXTmpXeENOM3cxZDc5NHBKb0FZYkVMdjNxM0FhejFRSll3TlZJdlBDWEx2M2lUQTJHem4zajNFclpJRHhTQ2dGUTA0bFVhaG1pUDNiaWxPcFg0UVEvbmV3WXg5Z3R0VGJ4aVFsVEtjdytreHBuZHFxRXFUM2luZzlMOEFxbEpHbkdGUTk0Z0JWU21EM25NY2tRb3pBNkZVN2gzMnlPVjg5d3hkYWQ2N0NWaVZjcjl6UUZmSzhtNERqZ0M0Z0s2VTkxMEJWcVY4N3d6UWxYSzhlMENzVW1hcUtvVUFLaWx0SUZZcE95eXdFQUJYWU1HakFBRndSUUU4WWhFQVY4U3lZaVk1WE1rRm5nZ1JBRmNpaENkdHBCejBrRUNHZ1FQY0dRYVdEZUVBZHphRVpXNkUxaWZVS0RKSUtJaElLTjVJS1RSSktJb2hCZndOWStOZXdnVThDZFVHS1pVUktWWGNnQUVBcTFMUG1GMXFEZXdBQUFBQVNVVk9SSzVDWUlJPVxcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtnQUFBQXdCQU1BQUFCM1VDeXBBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFBdFVFeFVSVWR3VFAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vODFlM1FJQUFBQU9kRkpPVXdCQVlPREFFQ0RRVUhEd3NLQ0FheE1pMWdBQUFaeEpSRUZVU01mbGw4OUt3MEFReG1QYTFFcHBNUTlRQ0hnUEluZ3RQa0VwZUplY1Bma0VvV2RCOE81ZFBIcjFKWXJlUExZMk5aZnlQWU14WWJOa2s1MXNzaHVvK0YyeWg1bGZadi9OekZwV0tnREN3SUQrQk5TWm82Um9RVGdNbmtJZ2Znc29hQjhWdXBMYjIyRm1FbnNFZEZJRi9aWXpaOHhtNjFIUVJXbE5zWkhPUFZtczZNTjFwNy9mZ0lCYURhRDN3RVc2NE00WjhHSUdhaWRNTms2b0hna1ZUNWdNNm1PZkh3eG5oUzhUMEdFaHVDVHNwUUhvYlRFMkg4OEdvUE1zVU9aaUk5S0gydGdYWFZheXJXb0E3ZUd5NkhLTjh3WTNhaVBaZTY4SXRXWDczd0FhYnNYSnpXSmQ2SURGeGFFK0FzMDFQY0ZPZExuQm95WjB4RElpZCtualZSUGF3N3ZvTXBac3Z6cDBnbFBSWllpMWVlalJ3VU16SFRCMDJRYWFXYThsMEdOMnBMakd1Tk9FanNydGdNcmhwNkg1TmVWU3VhWTBkRkJPZENvSmhZYm1xWTlMbnZxVW9iNVlQWWdrclF4bDVTUVhVVTZVb2F6dzVWSXFmRFZRVnFMNVQxUktkQjIwVlROUkIyM1Y5dFJCTzJuUXVta2xHelc5eXRDMFBmOTAzWWU2OXJ4Q084MkhSQ2RQbms0ZVo1YmpsaFJZLzBRL0huNC9EZlhTbmNZQUFBQUFTVVZPUks1Q1lJST1cXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBEYXRlUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIFRpbWVQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY2xhc3NcIixcInZhbHVlXCI6XCJucy1kYXJrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkRGF0YUZvcm0gUHJvcGVydHlFZGl0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNSAwIDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtaW5wdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxMCAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0YUZvcm1FZGl0b3JMYWJlbFwiLFwiLm50LWlucHV0ID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JhYmFiYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGFGb3JtRWRpdG9yTGFiZWxcIixcIi5udC1pbnB1dCA+IExhYmVsXCIsXCIubnQtaW5wdXQgPiBUZXh0Vmlld1wiLFwiPiBUZXh0RmllbGRcIixcIj4gUGlja2VyRmllbGRcIixcIj4gRGF0ZVBpY2tlckZpZWxkXCIsXCI+IFRpbWVQaWNrZXJGaWVsZFwiLFwiPiBEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiPiBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjAgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtaW5wdXQuLXNpZGVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMCAwIDEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWlucHV0Li1zaWRlcyA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNSAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1pbnB1dCA+IC5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIi0xNSAxMCAwIDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIixcIi5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIEFjdGlvbkJhclwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInN0cmV0Y2hcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwic3RyZXRjaFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1sYW5kc2NhcGUubnMtaW9zIEFjdGlvbkJhclwiLFwiLm5zLWxhbmRzY2FwZS5ucy1pb3MgLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgTGFiZWxcIixcIkFjdGlvbkJhciBCdXR0b25cIixcIkFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm50LWFjdGlvbi1iYXIgTGFiZWxcIixcIi5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLWVsZXZhdGlvblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMiAxMCAxMiAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcImF1dG9cIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJub25lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgTGFiZWw6YWN0aXZlXCIsXCJBY3Rpb25CYXIgQnV0dG9uOmFjdGl2ZVwiLFwiQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgTGFiZWw6YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBCdXR0b246YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiLjdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBMYWJlbFwiLFwiLm50LWFjdGlvbi1iYXIgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gQWN0aW9uQmFyXCIsXCIubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiAubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZF9fMTkubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiBBY3Rpb25CYXJcIixcIi5ucy1tb2RhbC5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IEFjdGlvbkJhclwiLFwiLm5zLWFuZHJvaWRfXzE5Lm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gLm50LWFjdGlvbi1iYXJcIixcIi5ucy1tb2RhbC5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IC5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgQWN0aW9uQmFyIC5udC1idXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgPiBMYWJlbFwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IExhYmVsXCIsXCJBY3Rpb25CYXIgPiBHcmlkTGF5b3V0IExhYmVsXCIsXCIubnQtYWN0aW9uLWJhciA+IExhYmVsXCIsXCIubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IEdyaWRMYXlvdXRcIixcIi5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBHcmlkTGF5b3V0ID4gU3RhY2tMYXlvdXRcIixcIi5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dCA+IFN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IEdyaWRMYXlvdXQgQnV0dG9uXCIsXCIubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXQgQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyIDEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgPiBHcmlkTGF5b3V0IFtjb2w9XFxcIjJcXFwiXVwiLFwiLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0IFtjb2w9XFxcIjJcXFwiXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciA+IEdyaWRMYXlvdXRcIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgPiBHcmlkTGF5b3V0IEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0IEJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMiAxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIhXFxuICogTmF0aXZlU2NyaXB0IFRoZW1lIF9fVkVSU0lPTl9fIChodHRwczovL25hdGl2ZXNjcmlwdC5vcmcpXFxuICogQ29weXJpZ2h0IDIwMTYtMjAxNiBUaGUgVGhlbWUgQXV0aG9yc1xcbiAqIENvcHlyaWdodCAyMDE2LTIwMTkgUHJvZ3Jlc3MgU29mdHdhcmVcXG4gKiBMaWNlbnNlZCB1bmRlciBBcGFjaGUgMi4wIChodHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L3RoZW1lL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXFxuIFwifSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcImVtcHR5XCIsXCJrZXlmcmFtZXNcIjpbXX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEZvcm1zIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIixcIi5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNDM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvblwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbjphY3RpdmVcIixcIkJ1dHRvbi4tYWN0aXZlXCIsXCIubnQtYnV0dG9uOmFjdGl2ZVwiLFwiLm50LWJ1dHRvbi4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA0MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsgQnV0dG9uLi1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b246YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1vdXRsaW5lXCIsXCIubnQtYnV0dG9uLi1vdXRsaW5lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uLi1vdXRsaW5lXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1vdXRsaW5lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCItaGlnaHRsaWdodC1saWdodFwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjEwMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YyZjJmMlwifV19XX0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCItaGlnaHRsaWdodC1kYXJrXCIsXCJrZXlmcmFtZXNcIjpbe1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiMTAwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMjMyMzIzXCJ9XX1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLW91dGxpbmU6YWN0aXZlXCIsXCJCdXR0b24uLW91dGxpbmUuLWFjdGl2ZVwiLFwiLm50LWJ1dHRvbi4tb3V0bGluZTphY3RpdmVcIixcIi5udC1idXR0b24uLW91dGxpbmUuLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvblwiLFwidmFsdWVcIjpcIi1oaWdodGxpZ2h0LWxpZ2h0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YyZjJmMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvbi4tb3V0bGluZTphY3RpdmVcIixcIi5ucy1kYXJrIEJ1dHRvbi4tb3V0bGluZS4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1vdXRsaW5lOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tb3V0bGluZS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uXCIsXCJ2YWx1ZVwiOlwiLWhpZ2h0bGlnaHQtZGFyayAwLjNzIGVhc2Utb3V0IGZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyMzIzMjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIixcIi5udC1idXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uLi1wcmltYXJ5XCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAyMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5OmFjdGl2ZVwiLFwiQnV0dG9uLi1wcmltYXJ5Li1hY3RpdmVcIixcIi5udC1idXR0b24uLXByaW1hcnk6YWN0aXZlXCIsXCIubnQtYnV0dG9uLi1wcmltYXJ5Li1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwYWFmY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEJ1dHRvbi4tcHJpbWFyeTphY3RpdmVcIixcIi5ucy1kYXJrIEJ1dHRvbi4tcHJpbWFyeS4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1wcmltYXJ5OmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbi4tcHJpbWFyeS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5NmRkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpdml0eUluZGljYXRvclwiLFwiLm50LWFjdGl2aXR5LWluZGljYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEFjdGl2aXR5SW5kaWNhdG9yXCIsXCIubnMtZGFyayAubnQtYWN0aXZpdHktaW5kaWNhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2VnbWVudGVkQmFyXCIsXCIubnQtc2VnbWVudGVkLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5NmRkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBTZWdtZW50ZWRCYXJcIixcIi5ucy1kYXJrIC5udC1zZWdtZW50ZWQtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGFhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFNlZ21lbnRlZEJhclwiLFwiLm5zLWlvcyAubnQtc2VnbWVudGVkLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjAgMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQcm9ncmVzc1wiLFwiLm50LXByb2dyZXNzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjEpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUHJvZ3Jlc3NcIixcIi5ucy1kYXJrIC5udC1wcm9ncmVzc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNsaWRlclwiLFwiLm50LXNsaWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgU2xpZGVyXCIsXCIubnMtZGFyayAubnQtc2xpZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWFuZHJvaWQgU2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5udC1zbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWFuZHJvaWQgLm50LXNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTZWFyY2hCYXJcIixcIi5udC1zZWFyY2gtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWZpZWxkLWhpbnQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtZmllbGQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgU2VhcmNoQmFyXCIsXCIubnMtZGFyayAubnQtc2VhcmNoLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtZmllbGQtaGludC1jb2xvclwiLFwidmFsdWVcIjpcIiNiM2IzYjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWZpZWxkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFN3aXRjaFwiLFwiLm5zLWFuZHJvaWQgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2NjY2NjY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjY2NjY2NjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtYW5kcm9pZCBTd2l0Y2hcIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzNjM2M1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNjM2MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgU3dpdGNoW2NoZWNrZWQ9dHJ1ZV1cIixcIi5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbY2hlY2tlZD10cnVlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWFuZHJvaWQgU3dpdGNoW2NoZWNrZWQ9dHJ1ZV1cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtjaGVja2VkPXRydWVdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1hbmRyb2lkIC5udC1zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2U2ZTZlNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWFuZHJvaWQgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNGE0YTRhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTd2l0Y2hcIixcIi5ucy1pb3MgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib2ZmLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZTZlNmU2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtaW9zIFN3aXRjaFwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1zd2l0Y2hcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9mZi1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRhNGE0YVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1pb3MgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtaW9zIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiVmlld1wiLFwiLm50LXRhYi12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VsZWN0ZWQtdGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjYWJkNWU5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1zZWxlY3RlZC10YWItaGlnaGxpZ2h0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRhYlZpZXdcIixcIi5ucy1kYXJrIC5udC10YWItdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlbGVjdGVkLXRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2JiZGFlOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJWaWV3Lm5zLWRhcmtcIixcIi5udC10YWItdmlldy5ucy1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VsZWN0ZWQtdGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjYmJkYWU5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1zZWxlY3RlZC10YWItaGlnaGxpZ2h0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlN0cmlwXCIsXCIubnQtdGFiLXN0cmlwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGlnaGxpZ2h0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZjJmMmYyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGFiU3RyaXBcIixcIi5ucy1kYXJrIC5udC10YWItc3RyaXBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoaWdobGlnaHQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzYTNhM2FcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJTdHJpcEl0ZW1cIixcIi5udC10YWItc3RyaXBfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUYWJTdHJpcEl0ZW1cIixcIi5ucy1kYXJrIC5udC10YWItc3RyaXBfX2l0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiU3RyaXBJdGVtOmFjdGl2ZVwiLFwiVGFiU3RyaXBJdGVtOmFjdGl2ZSBMYWJlbFwiLFwiLm50LXRhYi1zdHJpcF9faXRlbTphY3RpdmVcIixcIi5udC10YWItc3RyaXBfX2l0ZW06YWN0aXZlIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGFiU3RyaXBJdGVtOmFjdGl2ZVwiLFwiLm5zLWRhcmsgVGFiU3RyaXBJdGVtOmFjdGl2ZSBMYWJlbFwiLFwiLm5zLWRhcmsgLm50LXRhYi1zdHJpcF9faXRlbTphY3RpdmVcIixcIi5ucy1kYXJrIC5udC10YWItc3RyaXBfX2l0ZW06YWN0aXZlIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiQ29udGVudEl0ZW1cIixcIi5udC10YWItY29udGVudF9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGFiQ29udGVudEl0ZW1cIixcIi5ucy1kYXJrIC5udC10YWItY29udGVudF9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXdcIixcIlJhZExpc3RWaWV3XCIsXCIubnQtbGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaXRlbS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMTUpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VwYXJhdG9yLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2NjY2NjY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3XCIsXCIubnMtZGFyayBSYWRMaXN0Vmlld1wiLFwiLm5zLWRhcmsgLm50LWxpc3Qtdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIml0ZW0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjE1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3ID4gKi5hY3RpdmVcIixcIkxpc3RWaWV3ID4gKjpoaWdobGlnaHRlZFwiLFwiUmFkTGlzdFZpZXcgPiAqLmFjdGl2ZVwiLFwiUmFkTGlzdFZpZXcgPiAqOmhpZ2hsaWdodGVkXCIsXCIubnQtbGlzdC12aWV3ID4gKi5hY3RpdmVcIixcIi5udC1saXN0LXZpZXcgPiAqOmhpZ2hsaWdodGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjE1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3ID4gKi5hY3RpdmVcIixcIi5ucy1kYXJrIExpc3RWaWV3ID4gKjpoaWdobGlnaHRlZFwiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXcgPiAqLmFjdGl2ZVwiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXcgPiAqOmhpZ2hsaWdodGVkXCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3ID4gKi5hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXcgPiAqOmhpZ2hsaWdodGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjE1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCJSYWRMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiLm50LWxpc3QtdmlldyAuLXNlcGFyYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCIjY2NjY2NjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3IC4tc2VwYXJhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwidmFsdWVcIjpcIiM2MzYzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0Vmlld1wiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXdcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZXBhcmF0b3ItY29sb3JcIixcInZhbHVlXCI6XCIjNjM2MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCJSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIi5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIi5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLm50LWljb25cIixcIlJhZExpc3RWaWV3IC5udC1pY29uXCIsXCIubnQtbGlzdC12aWV3IC5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2Njk4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXcgLm50LWljb25cIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3IC5udC1pY29uXCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3IC5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyMTNkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyID4gKlwiLFwiUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19jb250ZW50XCIsXCIubnQtZHJhd2VyID4gKlwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19jb250ZW50XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xNSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwODhjOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCIsXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyXCIsXCIubnMtZGFyayAubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2hlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFkMzdlM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZFNpZGVEcmF3ZXIgPiAqXCIsXCIubnMtZGFyayBSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2NvbnRlbnRcIixcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayA+ICpcIixcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19jb250ZW50XCIsXCIubnMtZGFyayAubnQtZHJhd2VyID4gKlwiLFwiLm5zLWRhcmsgLm50LWRyYXdlciAubnQtZHJhd2VyX19jb250ZW50XCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgPiAqXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fY29udGVudFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCIsXCJSYWRTaWRlRHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiLFwiLm5zLWRhcmsgLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xNSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIixcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCIsXCIubnMtZGFyayAubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYzllZWZmXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEZvcm0gZmllbGRzIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlld1wiLFwiVGV4dEZpZWxkXCIsXCJQaWNrZXJGaWVsZFwiLFwiRGF0ZVBpY2tlckZpZWxkXCIsXCJUaW1lUGlja2VyRmllbGRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzXCIsXCJEYXRhRm9ybUVkaXRvckNvcmVcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNjN2M3YzdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUZXh0Vmlld1wiLFwiLm5zLWRhcmsgVGV4dEZpZWxkXCIsXCIubnMtZGFyayBQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgRGF0ZVBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBUaW1lUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzXCIsXCIubnMtZGFyayBEYXRhRm9ybUVkaXRvckNvcmVcIixcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2IzYjNiM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmYWZhZmFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlldzpmb2N1c1wiLFwiVGV4dEZpZWxkOmZvY3VzXCIsXCJQaWNrZXJGaWVsZDpmb2N1c1wiLFwiRGF0ZVBpY2tlckZpZWxkOmZvY3VzXCIsXCJUaW1lUGlja2VyRmllbGQ6Zm9jdXNcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzOmZvY3VzXCIsXCJEYXRhRm9ybUVkaXRvckNvcmU6Zm9jdXNcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3OmZvY3VzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwODhjOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRleHRWaWV3OmZvY3VzXCIsXCIubnMtZGFyayBUZXh0RmllbGQ6Zm9jdXNcIixcIi5ucy1kYXJrIFBpY2tlckZpZWxkOmZvY3VzXCIsXCIubnMtZGFyayBEYXRlUGlja2VyRmllbGQ6Zm9jdXNcIixcIi5ucy1kYXJrIFRpbWVQaWNrZXJGaWVsZDpmb2N1c1wiLFwiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHM6Zm9jdXNcIixcIi5ucy1kYXJrIERhdGFGb3JtRWRpdG9yQ29yZTpmb2N1c1wiLFwiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXc6Zm9jdXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYzllZWZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiLFwiVGV4dEZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIlBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJUaW1lUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHNbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0YUZvcm1FZGl0b3JDb3JlW2lzRW5hYmxlZD1mYWxzZV1cIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YyZjJmMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIFRleHRGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBEYXRlUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgVGltZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIERhdGVUaW1lUGlja2VyRmllbGRzW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIERhdGFGb3JtRWRpdG9yQ29yZVtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzZDNkM2RcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJIdG1sVmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvcGVydHlFZGl0b3I6Zm9jdXMgRGF0YUZvcm1FZGl0b3JDb3JlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwODhjOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFByb3BlcnR5RWRpdG9yOmZvY3VzIERhdGFGb3JtRWRpdG9yQ29yZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNjOWVlZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBUb2tlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjOTZkZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgVG9rZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwYWFmY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFRva2VuOnNlbGVjdGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBUb2tlbjpzZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgQ2xlYXJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBDbGVhckJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFN1Z2dlc3Rpb25WaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBTdWdnZXN0aW9uVmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZERhdGFGb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZERhdGFGb3JtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2IzYjNiM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZERhdGFGb3JtIFByb3BlcnR5RWRpdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWREYXRhRm9ybSBQcm9wZXJ0eUVkaXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBOYXRpdmVTY3JpcHQgVUkgQXV0b0NvbXBsZXRlIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlIExpc3RWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQaWNrZXJQYWdlIExpc3RWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZSBMaXN0VmlldyA+ICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQaWNrZXJQYWdlIExpc3RWaWV3ID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UubnMtZGFyayBMaXN0Vmlld1wiLFwiLm5zLWRhcmsgU3VnZ2VzdGlvblZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRGF0ZVRpbWUgUGlja2VyIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXIubnMtZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyLWJ1dHRvbnNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDQzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlci1idXR0b25zLm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsuZGF0ZS10aW1lLXBpY2tlci1idXR0b24tY2FuY2VsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlci1zcGlubmVyc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjU5NlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyLXNwaW5uZXJzLm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmY2ZlZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRhRm9ybUVkaXRvckxhYmVsXCIsXCIubnQtaW5wdXQgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjU5NlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIERhdGFGb3JtRWRpdG9yTGFiZWxcIixcIi5ucy1kYXJrIC5udC1pbnB1dCA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmNmZWZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCIsXCIubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQWN0aW9uQmFyXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM0NGJlNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciBMYWJlbFwiLFwiQWN0aW9uQmFyIEJ1dHRvblwiLFwiQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnQtYWN0aW9uLWJhciBMYWJlbFwiLFwiLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEFjdGlvbkJhciBMYWJlbFwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBMYWJlbFwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXIgTGFiZWw6YWN0aXZlXCIsXCJBY3Rpb25CYXIgTGFiZWwuLWFjdGl2ZVwiLFwiQWN0aW9uQmFyIEJ1dHRvbjphY3RpdmVcIixcIkFjdGlvbkJhciBCdXR0b24uLWFjdGl2ZVwiLFwiQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtLi1hY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIExhYmVsOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgTGFiZWwuLWFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgQnV0dG9uLi1hY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW0uLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEFjdGlvbkJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1kYXJrIEFjdGlvbkJhciBMYWJlbC4tYWN0aXZlXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIEJ1dHRvbi4tYWN0aXZlXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW0uLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgTGFiZWw6YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBMYWJlbC4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBCdXR0b24uLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgQWN0aW9uQmFyIExhYmVsXCIsXCIubnMtaW9zIEFjdGlvbkJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1pb3MgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWlvcyBBY3Rpb25CYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWlvcyBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5ucy1pb3MgQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciBMYWJlbFwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciBMYWJlbFwiLFwiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgTGFiZWxcIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgLm50LWJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1hbmRyb2lkIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgQWN0aW9uQmFyIC5udC1idXR0b25cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtZGFyay5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzM0NGJlNlwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBEaXZpZGVycyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q5ZDlkOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5oclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM0ZDRkNGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaHItbGlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjOTZkZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmhyLWxpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaHItZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDg4YzlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuaHItZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNjOWVlZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdFwiLFwiLm5zLW1vZGFsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ibGFja1wiLFwidmFsdWVcIjpcIiMwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLXdoaXRlXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItZ3JleVwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWdyZXktbGlnaHRcIixcInZhbHVlXCI6XCIjYmFiYWJhXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1jaGFyY29hbFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLXRyYW5zcGFyZW50XCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWFxdWFcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ibHVlXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItYnJvd25cIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1mb3Jlc3RcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ncmV5LWRhcmtcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1wdXJwbGVcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1sZW1vblwiLFwidmFsdWVcIjpcIiNmZmVhMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWxpbWVcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1vcmFuZ2VcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ydWJ5XCIsXCJ2YWx1ZVwiOlwiI2ZmMTc0NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3Itc2t5XCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItZXJyb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1mb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYmFja2dyb3VuZC1hbHQtMTBcIixcInZhbHVlXCI6XCIjYzBlYmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tY29sb3Itc2Vjb25kYXJ5XCIsXCJ2YWx1ZVwiOlwiIzAxYTBlY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLWNvbG9yLWRpc2FibGVkXCIsXCJ2YWx1ZVwiOlwiI2E0YTRhNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLWZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tbWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiNjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1oZWlnaHRcIixcInZhbHVlXCI6XCI1MlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLXBhZGRpbmcteFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1wYWRkaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tbWFyZ2luLXhcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLW1hcmdpbi15XCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLXJhZGl1c1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWhlYWRpbmdzLW1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1oZWFkaW5ncy1mb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYm9yZGVyLXJhZGl1cy1zbVwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJvcmRlci1yYWRpdXMtbGdcIixcInZhbHVlXCI6XCI1MCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWljb24tZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWljb24tZm9udC1zaXplLWxnXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWRpc2FibGVkLW9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LXByaW1hcnlcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtc2Vjb25kYXJ5XCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWFjY2VudFwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWNvbXBsZW1lbnRhcnlcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1jb21wbGVtZW50YXJ5LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYnRuLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZC1hbHQtNVwiLFwidmFsdWVcIjpcIiNmMmYyZjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmQtYWx0LTEwXCIsXCJ2YWx1ZVwiOlwiI2U2ZTZlNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZC1hbHQtMjBcIixcInZhbHVlXCI6XCIjY2NjY2NjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1kaXNhYmxlZFwiLFwidmFsdWVcIjpcIiNhY2U0ZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1oZWFkaW5ncy1jb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LXRhYi10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FiZDVlOVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYWNjZW50LWRhcmtcIixcInZhbHVlXCI6XCIjMDA4OGM5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1hY2NlbnQtbGlnaHRcIixcInZhbHVlXCI6XCIjOTZkZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1hY2NlbnQtdHJhbnNwYXJlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC44KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtcHJpbWFyeS1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC40KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZC1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZC1kYXJrLWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjE1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtaXRlbS1hY3RpdmUtY29sb3JcIixcInZhbHVlXCI6XCIjNjc2NzY3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMTUpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1jb21wbGVtZW50YXJ5LWRhcmtcIixcInZhbHVlXCI6XCIjMjEzZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1pdGVtLWFjdGl2ZS1pY29uLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzY3Njc2N1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYnRuLWNvbG9yLWludmVyc2VcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYnRuLWNvbG9yLXNlY29uZGFyeVwiLFwidmFsdWVcIjpcIiMwZDBkMGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstcHJpbWFyeVwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLXNlY29uZGFyeVwiLFwidmFsdWVcIjpcIiNiM2IzYjNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYWNjZW50XCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1jb21wbGVtZW50YXJ5XCIsXCJ2YWx1ZVwiOlwiIzM0NGJlNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1idG4tY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZC1hbHQtNVwiLFwidmFsdWVcIjpcIiMzZDNkM2RcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZC1hbHQtMTBcIixcInZhbHVlXCI6XCIjNGE0YTRhXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmQtYWx0LTIwXCIsXCJ2YWx1ZVwiOlwiIzYzNjM2M1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1kaXNhYmxlZFwiLFwidmFsdWVcIjpcIiM0NDZmODNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWhlYWRpbmdzLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstdGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjYmJkYWU5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWFjY2VudC1kYXJrXCIsXCJ2YWx1ZVwiOlwiI2M5ZWVmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1hY2NlbnQtbGlnaHRcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1hY2NlbnQtdHJhbnNwYXJlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC44KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1wcmltYXJ5LWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjQpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJhY2tncm91bmQtYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZC1kYXJrLWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjE1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1pdGVtLWFjdGl2ZS1jb2xvclwiLFwidmFsdWVcIjpcIiNjMWMxYzFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstaXRlbS1hY3RpdmUtYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjE1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1jb21wbGVtZW50YXJ5LWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstY29tcGxlbWVudGFyeS1kYXJrXCIsXCJ2YWx1ZVwiOlwiIzFkMzdlM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1pdGVtLWFjdGl2ZS1pY29uLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2MxYzFjMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1idG4tY29sb3ItaW52ZXJzZVwiLFwidmFsdWVcIjpcIiMwMDIwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYnRuLWNvbG9yLXNlY29uZGFyeVwiLFwidmFsdWVcIjpcIiNlNmU2ZTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXFxcIiwgXFxcImZhLWJyYW5kcy00MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI5MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1yZWd1bGFyLTQwMFxcXCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjQwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlX19jb250ZW50LWljb25cIixcIi5wYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucGFnZV9fY29udGVudC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNzJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NWJhNWVkNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1YmE1ZWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NWJhNWVkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzhmMDI2MDZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOGYwMjYwNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOGYwMjYwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOGYwMjYwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM4ZjAyNjA2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdWx0aS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdWx0aS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjg1NjE4NzI0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSmVzdXNcXFxcRG9jdW1lbnRzXFxcXExBTklBMjAyMFxcXFxOYXRpdmVTY3JpcHRcXFxcbXlBcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODU2MTg3MjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODU2MTg3MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODU2MTg3MjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL011bHRpLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTYxODcyNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NTYxODcyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NdWx0aS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdWx0aS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NTYxODcyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdWx0aS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NTYxODcyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdWx0aS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImVlOGJjZDM2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSmVzdXNcXFxcRG9jdW1lbnRzXFxcXExBTklBMjAyMFxcXFxOYXRpdmVTY3JpcHRcXFxcbXlBcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWU4YmNkMzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWU4YmNkMzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWU4YmNkMzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlZThiY2QzNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVlOGJjZDM2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NzJjNjNmOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU3MmM2M2Y4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU3MmM2M2Y4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU3MmM2M2Y4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTcyYzYzZjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUHJvZ3Jlc28udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzJjNjNmOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMTE4YjRhYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTE4YjRhYyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMxMThiNGFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSmVzdXNcXFxcRG9jdW1lbnRzXFxcXExBTklBMjAyMFxcXFxOYXRpdmVTY3JpcHRcXFxcbXlBcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzExOGI0YWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzExOGI0YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzExOGI0YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzExOGI0YWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUmVwb3J0ZUNpdGFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTE4YjRhYyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTE4YjRhYyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMTE4YjRhYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYWFjNzFkZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VhYWM3MWRlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VhYWM3MWRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VhYWM3MWRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYWFjNzFkZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYWFjNzFkZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYWFjNzFkZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhN2E2ODFiNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E3YTY4MWI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E3YTY4MWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E3YTY4MWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTdhNjgxYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvVGVyYXBpYXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hN2E2ODFiNCZzY29wZWQ9dHJ1ZSZcIiIsImNvbnN0IHsgQmVoYXZpb3JTdWJqZWN0IH0gPSByZXF1aXJlKFwicnhqc1wiKTtcblxuZnVuY3Rpb24gU2VsZWN0ZWRQYWdlU2VydmljZSgpIHtcbiAgICBpZiAoU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgfVxuXG4gICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZFBhZ2Ugc291cmNlXG4gICAgdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdChcIlwiKTtcblxuICAgIC8vIE9ic2VydmFibGUgc2VsZWN0ZWRQYWdlIHN0cmVhbVxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlJCA9IHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRQYWdlID0gZnVuY3Rpb24oc2VsZWN0ZWRQYWdlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZS5uZXh0KHNlbGVjdGVkUGFnZSk7XG4gICAgfTtcbn1cblxuU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2U7XG59O1xuXG5TZWxlY3RlZFBhZ2VTZXJ2aWNlLl9pbnN0YW5jZSA9IG5ldyBTZWxlY3RlZFBhZ2VTZXJ2aWNlKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0ZWRQYWdlU2VydmljZTtcbiIsIlxuaW1wb3J0IHsgZ2V0Um9vdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiXG5cbmV4cG9ydCBjb25zdCBzaG93RHJhd2VyID0gKCkgPT4ge1xuICAgIGxldCBkcmF3ZXJOYXRpdmVWaWV3ID0gZ2V0Um9vdFZpZXcoKTtcbiAgICBpZiAoZHJhd2VyTmF0aXZlVmlldyAmJiBkcmF3ZXJOYXRpdmVWaWV3LnNob3dEcmF3ZXIpIHtcbiAgICAgICAgZHJhd2VyTmF0aXZlVmlldy5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGRyYXdlck5hdGl2ZVZpZXcgPSBnZXRSb290VmlldygpO1xuICAgIGlmIChkcmF3ZXJOYXRpdmVWaWV3ICYmIGRyYXdlck5hdGl2ZVZpZXcuc2hvd0RyYXdlcikge1xuICAgICAgICBkcmF3ZXJOYXRpdmVWaWV3LmNsb3NlRHJhd2VyKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=