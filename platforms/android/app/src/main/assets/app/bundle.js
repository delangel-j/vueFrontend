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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ReporteDiagnosticos.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // A stub for a service that authenticates users.

var userService = {
  register(user) {
    return Promise.resolve(user);
  },

  login(user) {
    return Promise.resolve(user);
  },

  resetPassword(email) {
    return Promise.resolve(email);
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "foo@foo.com",
        password: "foo",
        confirmPassword: "foo"
      }
    };
  },

  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Ingresa tu correo y contraseña");
        return;
      }

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      userService.login(this.user).then(() => {
        this.$navigateTo(_ReporteDiagnosticos__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }).catch(() => {
        this.alert("No se encuentra la cuenta");
      });
    },

    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Las contraseñas no coinciden.");
        return;
      }

      userService.register(this.user).then(() => {
        this.alert("Tu cuenta ha sido creada.");
        this.isLoggingIn = true;
      }).catch(() => {
        this.alert("Error al crear la cuenta");
      });
    },

    forgotPassword() {
      prompt({
        title: "Olvide la contraseña",
        message: "Ingresa el correo que utiilizasta para registrarte a CRISVER para reiniciar tu contraseña",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancelar"
      }).then(data => {
        if (data.result) {
          userService.resetPassword(data.text.trim()).then(() => {
            this.alert("Su contraseña ha sido reiniciada. Sigue las instrucciones que han sido enviadas a su correo");
          }).catch(() => {
            this.alert("Ha ocurrido un error al reiniciar su contraseña.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "CRISVER",
        okButtonText: "OK",
        message: message
      });
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
exports.push([module.i, "@keyframes empty-data-v-38f02606 {}/* Forms */\n/**\n * Blue variable overrides\n **/\nGridLayout.nt-drawer__list-item[data-v-38f02606]:selected {\n  background-color: blue;\n}\n", ""]);

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
exports.push([module.i, "@keyframes empty-data-v-c118b4ac {}/* Forms */\n/**\n * Blue variable overrides\n **/\nActionBar[data-v-c118b4ac] {\n  background-color: black;\n}\nTabView[data-v-c118b4ac] {\n  padding-bottom: 20px;\n}\n.lista[data-v-c118b4ac] {\n  color: white;\n  background-color: #48A1CA;\n  font-size: 14px;\n}\n", ""]);

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

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n\t\talign-items: center;\n\t\tflex-direction: column;\n}\n.form[data-v-c27482c4] {\n\t\tmargin-left: 30;\n\t\tmargin-right: 30;\n\t\tflex-grow: 2;\n\t\tvertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n\t\tmargin-bottom: 12;\n\t\theight: 90;\n\t\tfont-weight: bold;\n}\n.header[data-v-c27482c4] {\n\t\thorizontal-align: center;\n\t\tfont-size: 25;\n\t\tfont-weight: 600;\n\t\tmargin-bottom: 70;\n\t\ttext-align: center;\n\t\tcolor: black;\n}\n.input-field[data-v-c27482c4] {\n\t\tmargin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n\t\tfont-size: 18;\n\t\tplaceholder-color: #A8A8A8;\n}\n.input-field .input[data-v-c27482c4] {\n\t\tfont-size: 54;\n}\n.btn-primary[data-v-c27482c4] {\n\t\theight: 50;\n\t\tmargin: 30 5 15 5;\n\t\tbackground-color: black;\n        color: white;\n\t\tborder-radius: 5;\n\t\tfont-size: 20;\n\t\tfont-weight: 600;\n}\n.login-label[data-v-c27482c4] {\n\t\thorizontal-align: center;\n\t\tcolor: #A8A8A8;\n\t\tfont-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n\t\tmargin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n\t\tcolor: #000000;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
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
                      width: "25",
                      height: "25",
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
                      width: "25",
                      height: "25",
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
                      width: "25",
                      height: "25",
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
                      width: "25",
                      height: "25",
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
                      width: "25",
                      height: "25",
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
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
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/images/logo.png" }
              }),
              _c("Label", {
                staticClass: "header",
                attrs: { text: "CRISVER" }
              }),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("Label", { attrs: { text: "Correo" } }),
                  _c("TextField", {
                    staticClass: "input",
                    attrs: {
                      hint: "Correo",
                      keyboardType: "email",
                      autocorrect: "false",
                      autocapitalizationType: "none",
                      returnKeyType: "next",
                      fontSize: "18",
                      text: _vm.user.email
                    },
                    on: {
                      returnPress: _vm.focusPassword,
                      textChange: function($event) {
                        return _vm.$set(_vm.user, "email", $event.value)
                      }
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                { staticClass: "input-field", attrs: { marginBottom: "25" } },
                [
                  _c("Label", { attrs: { text: "Contraseña" } }),
                  _c("TextField", {
                    ref: "password",
                    staticClass: "input",
                    attrs: {
                      hint: "Contraseña",
                      secure: "true",
                      returnKeyType: _vm.isLoggingIn ? "done" : "next",
                      fontSize: "18",
                      text: _vm.user.password
                    },
                    on: {
                      returnPress: _vm.focusConfirmPassword,
                      textChange: function($event) {
                        return _vm.$set(_vm.user, "password", $event.value)
                      }
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoggingIn,
                      expression: "!isLoggingIn"
                    }
                  ],
                  staticClass: "input-field"
                },
                [
                  _c("Label", { attrs: { text: "Confirmar contraseña" } }),
                  _c("TextField", {
                    ref: "confirmPassword",
                    staticClass: "input",
                    attrs: {
                      hint: "Confirmar contraseña",
                      secure: "true",
                      returnKeyType: "done",
                      fontSize: "18",
                      text: _vm.user.confirmPassword
                    },
                    on: {
                      textChange: function($event) {
                        return _vm.$set(
                          _vm.user,
                          "confirmPassword",
                          $event.value
                        )
                      }
                    }
                  }),
                  _c("StackLayout", { staticClass: "hr-light" })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Iniciar sesión" : "Registrarse"
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isLoggingIn,
                    expression: "isLoggingIn"
                  }
                ],
                staticClass: "login-label",
                attrs: { text: "¿Olvidaste tu contraseña?" },
                on: { tap: _vm.forgotPassword }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn ? "¿No tienes cuenta? " : "Regresar"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Registrarse" : "" }
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
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/Login.vue");

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
    }), h(_components_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NdWx0aS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9SZXBvcnRlQ2l0YXMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/NTc5NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzI0MDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWU/OGRiZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZT8wYjhkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZUNpdGFzLnZ1ZT80NWQ2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/OTliZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZT81MWM0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzAxNDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/YmI3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ZDAzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzAwNDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/M2NlOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZT8wYjNmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlPzZlMzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzby52dWU/YzkxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWU/YmUwYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlPzYwMjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXJhcGlhcy52dWU/OWMwOCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/Yzg0MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/NDhjMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWU/OTI1YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlckNvbnRlbnQudnVlPzI2MTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZT8wYmNjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2U2MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MjEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9mYjRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXVsdGkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXVsdGkudnVlPzNmYzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NdWx0aS52dWU/MGE2MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011bHRpLnZ1ZT8zMDRkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlP2JiYmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYWNpb25lcy52dWU/ZWIzNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhY2lvbmVzLnZ1ZT84N2QyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlPzE3ZGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzby52dWU/ODMwMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNvLnZ1ZT8zZTkzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZUNpdGFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWU/Mzg2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWU/YjcwOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWU/Y2U0NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/YWFlNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT9lMWY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVyYXBpYXMudnVlPzlmZjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXJhcGlhcy52dWU/OWQ0OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZT8xNWFjIiwid2VicGFjazovLy8uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFwcCIsIlJlcG9ydGVEaWFnbm9zdGljb3MiLCJEcmF3ZXJDb250ZW50IiwiUmFkU2lkZURyYXdlciIsIkNhbGVuZGFyVmlldyIsIlZ1ZSIsInVzZSIsImNvbmZpZyIsInNpbGVudCIsInJlbmRlciIsImgiLCJMb2dpbiIsInNsb3QiLCIkc3RhcnQiLCJCZWhhdmlvclN1YmplY3QiLCJyZXF1aXJlIiwiU2VsZWN0ZWRQYWdlU2VydmljZSIsIl9pbnN0YW5jZSIsIkVycm9yIiwiX3NlbGVjdGVkUGFnZVNvdXJjZSIsInNlbGVjdGVkUGFnZSQiLCJhc09ic2VydmFibGUiLCJ1cGRhdGVTZWxlY3RlZFBhZ2UiLCJzZWxlY3RlZFBhZ2UiLCJuZXh0IiwiZ2V0SW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic2hvd0RyYXdlciIsImRyYXdlck5hdGl2ZVZpZXciLCJnZXRSb290VmlldyIsImNsb3NlRHJhd2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFMQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUUsc0RBQXNELDJEQUEyRCxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELHlEQUF5RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsb0RBQW9ELHFEQUFxRCxFQUFFLEVBQUUsc0RBQXNELHlEQUF5RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELHlEQUF5RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUsb0RBQW9ELHNEQUFzRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDZEQUE2RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUsb0RBQW9ELHNEQUFzRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDZEQUE2RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUsb0RBQW9ELHNEQUFzRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDZEQUE2RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUsb0RBQW9ELHNEQUFzRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDZEQUE2RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUsb0RBQW9ELHNEQUFzRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLEVBQUUsc0RBQXNELDZEQUE2RCxFQUFFLEVBQUUsc0RBQXNELDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDREQUE0RCxFQUFFLDJEQUEyRCxFQUFFLEVBQUUsc0RBQXNELDBEQUEwRCxFQUFFLDZEQUE2RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVEQUF1RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLEVBQUUsdURBQXVELDhEQUE4RCxFQUFFLEVBQUUsdURBQXVELDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDZEQUE2RCxFQUFFLDREQUE0RCxFQUFFLEVBQUUsdURBQXVELDJEQUEyRCxFQUFFLDhEQUE4RCxFQUFFLEVBQUUscURBQXFELHVE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QUFxRSxFQUFFLEVBQUUscUdBQXFHLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUscUhBQXFILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsdUhBQXVILDBEQUEwRCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsdUlBQXVJLDBEQUEwRCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsaUdBQWlHLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsaUhBQWlILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsbUhBQW1ILHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsbUlBQW1JLHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsbUdBQW1HLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsbUhBQW1ILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUscUhBQXFILHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUscUlBQXFJLHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsaUdBQWlHLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsaUhBQWlILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsbUhBQW1ILHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsbUlBQW1JLHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUscUdBQXFHLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUscUhBQXFILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsdUhBQXVILHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsdUlBQXVJLHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUscUdBQXFHLGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUscUhBQXFILGlFQUFpRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsdUhBQXVILHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsdUlBQXVJLHdEQUF3RCxFQUFFLHFFQUFxRSxFQUFFLEVBQUUsaUdBQWlHLGlFQUFpRSxFQUFFLDBE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LEVBQUUsZ0ZBQWdGLEVBQUUsK0VBQStFLEVBQUUscUVBQXFFLEVBQUUscUVBQXFFLEVBQUUsa0VBQWtFLEVBQUUsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsbUVBQW1FLEVBQUUsaUVBQWlFLEVBQUUsNkVBQTZFLEVBQUUsZ0ZBQWdGLEVBQUUsbUVBQW1FLEVBQUUsbUVBQW1FLEVBQUUsdUVBQXVFLEVBQUUseUVBQXlFLEVBQUUsc0VBQXNFLEVBQUUseUVBQXlFLEVBQUUseUVBQXlFLEVBQUUsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsbUVBQW1FLEVBQUUsMEVBQTBFLEVBQUUsNkVBQTZFLEVBQUUsc0VBQXNFLEVBQUUseUVBQXlFLEVBQUUsNkVBQTZFLEVBQUUsOEVBQThFLEVBQUUsOEVBQThFLEVBQUUscUVBQXFFLEVBQUUsdUVBQXVFLEVBQUUsMkVBQTJFLEVBQUUsMkVBQTJFLEVBQUUsd0VBQXdFLEVBQUUseUVBQXlFLEVBQUUsK0ZBQStGLEVBQUUsMkZBQTJGLEVBQUUsOEZBQThGLEVBQUUsb0dBQW9HLEVBQUUsOEVBQThFLEVBQUUsb0dBQW9HLEVBQUUsK0VBQStFLEVBQUUsbUZBQW1GLEVBQUUsNEVBQTRFLEVBQUUsZ0ZBQWdGLEVBQUUsaUVBQWlFLEVBQUUsc0VBQXNFLEVBQUUscUVBQXFFLEVBQUUsa0VBQWtFLEVBQUUseUVBQXlFLEVBQUUsa0VBQWtFLEVBQUUsd0VBQXdFLEVBQUUsNEVBQTRFLEVBQUUsNkVBQTZFLEVBQUUsNkVBQTZFLEVBQUUsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsd0VBQXdFLEVBQUUsMEVBQTBFLEVBQUUsdUVBQXVFLEVBQUUsc0VBQXNFLEVBQUUsOEZBQThGLEVBQUUsMEZBQTBGLEVBQUUsNkZBQTZGLEVBQUUsbUdBQW1HLEVBQUUsNkVBQTZFLEVBQUUsbUdBQW1HLEVBQUUsNkVBQTZFLEVBQUUsOEVBQThFLEVBQUUsa0ZBQWtGLEVBQUUsNkVBQTZFLEVBQUUsK0VBQStFLEVBQUUsRUFBRSxvREFBb0QscUdBQXFH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TCxHQUFxQixLQUFLRCxtQkFBTCxDQUF5QkUsWUFBekIsRUFBckI7O0FBRUEsT0FBS0Msa0JBQUwsR0FBMEIsVUFBU0MsWUFBVCxFQUF1QjtBQUM3QyxTQUFLSixtQkFBTCxDQUF5QkssSUFBekIsQ0FBOEJELFlBQTlCO0FBQ0gsR0FGRDtBQUdIOztBQUVEUCxtQkFBbUIsQ0FBQ1MsV0FBcEIsR0FBa0MsWUFBWTtBQUMxQyxTQUFPVCxtQkFBbUIsQ0FBQ0MsU0FBM0I7QUFDSCxDQUZEOztBQUlBRCxtQkFBbUIsQ0FBQ0MsU0FBcEIsR0FBZ0MsSUFBSUQsbUJBQUosRUFBaEM7QUFFQVUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxtQkFBakIsQzs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVksVUFBVSxHQUFHLE1BQU07QUFDNUIsTUFBSUMsZ0JBQWdCLEdBQUdDLGdGQUFXLEVBQWxDOztBQUNBLE1BQUlELGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQ0QsVUFBekMsRUFBcUQ7QUFDakRDLG9CQUFnQixDQUFDRCxVQUFqQjtBQUNIO0FBQ0osQ0FMTTtBQU9BLElBQU1HLFdBQVcsR0FBRyxNQUFNO0FBQzdCLE1BQUlGLGdCQUFnQixHQUFHQyxnRkFBVyxFQUFsQzs7QUFDQSxNQUFJRCxnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUNELFVBQXpDLEVBQXFEO0FBQ2pEQyxvQkFBZ0IsQ0FBQ0UsV0FBakI7QUFDSDtBQUNKLENBTE0sQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiA8UmFkU2lkZURyYXdlciByZWY9XCJkcmF3ZXJcIiBkcmF3ZXJMb2NhdGlvbj1cIkxlZnRcIiBnZXN0dXJlc0VuYWJsZWQ9XCJ0cnVlXCIgOmRyYXdlclRyYW5zaXRpb249XCJ0cmFuc2l0aW9uXCI+XG4gICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cIiNmZmZmZmZcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJkcmF3ZXJDb250ZW50XCI+PC9zbG90PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPEZyYW1lIH5tYWluQ29udGVudCByZWY9XCJkcmF3ZXJNYWluQ29udGVudFwiPlxuICAgICAgPHNsb3QgbmFtZT1cIm1haW5Db250ZW50XCI+PC9zbG90PlxuICAgIDwvRnJhbWU+XG4gPC9SYWRTaWRlRHJhd2VyPiBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbjxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCAqXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlclwiIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzIHQtMzZcIiBzcmMuZGVjb2RlPVwiZm9udDovLyYjeGYyYmQ7XCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiIHRleHQ9XCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCIgdGV4dD1cIkV4cDogMTY1OS0wOVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cIjFcIiBjbGFzcz1cIm50LWRyYXdlcl9fYm9keVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiA6Y2xhc3M9XCInbnQtZHJhd2VyX19saXN0LWl0ZW0nICsgKHNlbGVjdGVkUGFnZSA9PT0gJ1JlcG9ydGVEaWFnbm9zdGljb3MnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChSZXBvcnRlRGlhZ25vc3RpY29zKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3JlcG9ydGVkaWFnbm9zdGljb1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIlJlcG9ydGUgZGUgZGlhZ27Ds3N0aWNvc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdSZXBvcnRlQ2l0YXMnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChSZXBvcnRlQ2l0YXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vcmVwb3J0ZWNpdGFzXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiUmVwb3J0ZSBkZSBjaXRhc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgOmNsYXNzPVwiJ250LWRyYXdlcl9fbGlzdC1pdGVtJyArIChzZWxlY3RlZFBhZ2UgPT09ICdQcm9ncmVzbycgPyAnIC1zZWxlY3RlZCc6ICcnKVwiIEB0YXA9XCJvbk5hdmlnYXRpb25JdGVtVGFwKFByb2dyZXNvKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3Byb2dyZXNvcGFjaWVudGVcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiIDpjbGFzcz1cIidudC1kcmF3ZXJfX2xpc3QtaXRlbScgKyAoc2VsZWN0ZWRQYWdlID09PSAnVGVyYXBpYXMnID8gJyAtc2VsZWN0ZWQnOiAnJylcIiBAdGFwPVwib25OYXZpZ2F0aW9uSXRlbVRhcChUZXJhcGlhcylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly90ZXJhcGlhc1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgdGV4dD1cIlRlcmFwaWFzXCIgY2xhc3M9XCJwLXItMTBcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoclwiPjwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiA6Y2xhc3M9XCInbnQtZHJhd2VyX19saXN0LWl0ZW0nICsgKHNlbGVjdGVkUGFnZSA9PT0gJ05vdGlmaWNhY2lvbmVzJyA/ICcgLXNlbGVjdGVkJzogJycpXCIgQHRhcD1cIm9uTmF2aWdhdGlvbkl0ZW1UYXAoTm90aWZpY2FjaW9uZXMpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbm90aWZpY2FjaW9uZXNcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJOb3RpZmljYWNpb25lc1wiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgIDwvR3JpZExheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFJlcG9ydGVEaWFnbm9zdGljb3MgZnJvbSBcIi4vUmVwb3J0ZURpYWdub3N0aWNvc1wiO1xuICAgIGltcG9ydCBSZXBvcnRlQ2l0YXMgZnJvbSBcIi4vUmVwb3J0ZUNpdGFzXCI7XG4gICAgaW1wb3J0IFRlcmFwaWFzIGZyb20gXCIuL1RlcmFwaWFzXCI7XG4gICAgaW1wb3J0IFByb2dyZXNvIGZyb20gXCIuL1Byb2dyZXNvXCI7XG4gICAgaW1wb3J0IE5vdGlmaWNhY2lvbmVzIGZyb20gXCIuL05vdGlmaWNhY2lvbmVzXCI7XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIn4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiOyAgICBcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkuc2VsZWN0ZWRQYWdlJFxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNlbGVjdGVkUGFnZSkgPT4gdGhpcy5zZWxlY3RlZFBhZ2UgPSBzZWxlY3RlZFBhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRQYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFJlcG9ydGVEaWFnbm9zdGljb3M6IFJlcG9ydGVEaWFnbm9zdGljb3MsXG4gICAgICAgICAgICAgICAgUmVwb3J0ZUNpdGFzOiBSZXBvcnRlQ2l0YXMsXG4gICAgICAgICAgICAgICAgVGVyYXBpYXM6IFRlcmFwaWFzLFxuICAgICAgICAgICAgICAgIFByb2dyZXNvOiBQcm9ncmVzbyxcbiAgICAgICAgICAgICAgICBOb3RpZmljYWNpb25lczogTm90aWZpY2FjaW9uZXMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYWdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbm9tYnJlOiBcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVwiLFxuICAgICAgICAgICAgICAgICAgICAgZXhwZWRpZW50ZTogXCIxNjU5LTA5XCJ9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBSZXBvcnRlRGlhZ25vc3RpY29zLFxuICAgICAgICAgICAgUmVwb3J0ZUNpdGFzLFxuICAgICAgICAgICAgVGVyYXBpYXMsXG4gICAgICAgICAgICBQcm9ncmVzbyxcbiAgICAgICAgICAgIE5vdGlmaWNhY2lvbmVzXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uTmF2aWdhdGlvbkl0ZW1UYXAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhjb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdXRpbHMuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnfkBuYXRpdmVzY3JpcHQvdGhlbWUvc2Nzcy92YXJpYWJsZXMvYmx1ZSc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cbiAgICBHcmlkTGF5b3V0Lm50LWRyYXdlcl9fbGlzdC1pdGVtOnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XHJcblx0XHQ8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cclxuXHRcdFx0PFN0YWNrTGF5b3V0IGNsYXNzPVwiZm9ybVwiPlxyXG5cdFx0XHRcdDxJbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcblx0XHRcdFx0PExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkNSSVNWRVJcIiAvPlxyXG5cclxuXHRcdFx0XHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb3JyZW9cIiAvPiBcclxuXHRcdFx0XHRcdDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJDb3JyZW9cIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuXHRcdFx0XHRcdCByZXR1cm5LZXlUeXBlPVwibmV4dFwiIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIiBmb250U2l6ZT1cIjE4XCIgLz5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuXHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHRcdFx0XHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIG1hcmdpbkJvdHRvbT1cIjI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb250cmFzZcOxYVwiIC8+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkIHJlZj1cInBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJDb250cmFzZcOxYVwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiIDpyZXR1cm5LZXlUeXBlPVwiaXNMb2dnaW5nSW4gPyAnZG9uZScgOiAnbmV4dCdcIlxyXG5cdFx0XHRcdFx0IEByZXR1cm5QcmVzcz1cImZvY3VzQ29uZmlybVBhc3N3b3JkXCIgZm9udFNpemU9XCIxOFwiIC8+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiIC8+XHJcblx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHJcblx0XHRcdFx0PFN0YWNrTGF5b3V0IHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvbmZpcm1hciBjb250cmFzZcOxYVwiIC8+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiQ29uZmlybWFyIGNvbnRyYXNlw7FhXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLmNvbmZpcm1QYXNzd29yZFwiIHJldHVybktleVR5cGU9XCJkb25lXCJcclxuXHRcdFx0XHRcdCBmb250U2l6ZT1cIjE4XCIgLz5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCIgLz5cclxuXHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHRcdFx0XHQ8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnSW5pY2lhciBzZXNpw7NuJyA6ICdSZWdpc3RyYXJzZSdcIiBAdGFwPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgLz5cclxuXHRcdFx0XHQ8TGFiZWwgdi1zaG93PVwiaXNMb2dnaW5nSW5cIiB0ZXh0PVwiwr9PbHZpZGFzdGUgdHUgY29udHJhc2XDsWE/XCIgY2xhc3M9XCJsb2dpbi1sYWJlbFwiIEB0YXA9XCJmb3Jnb3RQYXNzd29yZFwiIC8+XHJcblx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblxyXG5cdFx0XHQ8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cclxuXHQgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuXHQgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ8K/Tm8gdGllbmVzIGN1ZW50YT8gJyA6ICdSZWdyZXNhcidcIiAvPlxyXG5cdCAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnUmVnaXN0cmFyc2UnIDogJydcIiBjbGFzcz1cImJvbGRcIiAvPlxyXG5cdCAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuXHQgICAgICAgIDwvTGFiZWw+XHJcblx0XHQ8L0ZsZXhib3hMYXlvdXQ+XHJcblx0PC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJlcG9ydGVEaWFnbm9zdGljb3MgZnJvbSAnLi9SZXBvcnRlRGlhZ25vc3RpY29zJztcclxuLy8gQSBzdHViIGZvciBhIHNlcnZpY2UgdGhhdCBhdXRoZW50aWNhdGVzIHVzZXJzLlxyXG5jb25zdCB1c2VyU2VydmljZSA9IHtcclxuICAgIHJlZ2lzdGVyKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgfSxcclxuICAgIGxvZ2luKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVtYWlsKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJmb29AZm9vLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiZm9vXCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiZm9vXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmdyZXNhIHR1IGNvcnJlbyB5IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxvZ2luKCkge1xyXG4gICAgICAgICAgICB1c2VyU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFJlcG9ydGVEaWFnbm9zdGljb3MpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIk5vIHNlIGVuY3VlbnRyYSBsYSBjdWVudGFcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZWdpc3RlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiTGFzIGNvbnRyYXNlw7FhcyBubyBjb2luY2lkZW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1c2VyU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVHUgY3VlbnRhIGhhIHNpZG8gY3JlYWRhLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXJyb3IgYWwgY3JlYXIgbGEgY3VlbnRhXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJPbHZpZGUgbGEgY29udHJhc2XDsWFcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmdyZXNhIGVsIGNvcnJlbyBxdWUgdXRpaWxpemFzdGEgcGFyYSByZWdpc3RyYXJ0ZSBhIENSSVNWRVIgcGFyYSByZWluaWNpYXIgdHUgY29udHJhc2XDsWFcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIlxyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1IGNvbnRyYXNlw7FhIGhhIHNpZG8gcmVpbmljaWFkYS4gU2lndWUgbGFzIGluc3RydWNjaW9uZXMgcXVlIGhhbiBzaWRvIGVudmlhZGFzIGEgc3UgY29ycmVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGEgb2N1cnJpZG8gdW4gZXJyb3IgYWwgcmVpbmljaWFyIHN1IGNvbnRyYXNlw7FhLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDUklTVkVSXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnBhZ2Uge1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZm9ybSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzA7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMwO1xyXG5cdFx0ZmxleC1ncm93OiAyO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEyO1xyXG5cdFx0aGVpZ2h0OiA5MDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHJcblx0LmhlYWRlciB7XHJcblx0XHRob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI1O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDcwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LmlucHV0LWZpZWxkIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDI1O1xyXG5cdH1cclxuXHJcblx0LmlucHV0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTg7XHJcblx0XHRwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1maWVsZCAuaW5wdXQge1xyXG5cdFx0Zm9udC1zaXplOiA1NDtcclxuXHR9XHJcblxyXG5cdC5idG4tcHJpbWFyeSB7XHJcblx0XHRoZWlnaHQ6IDUwO1xyXG5cdFx0bWFyZ2luOiAzMCA1IDE1IDU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1O1xyXG5cdFx0Zm9udC1zaXplOiAyMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cclxuXHQubG9naW4tbGFiZWwge1xyXG5cdFx0aG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNBOEE4QTg7XHJcblx0XHRmb250LXNpemU6IDE2O1xyXG5cdH1cclxuXHJcblx0LnNpZ24tdXAtbGFiZWwge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjA7XHJcblx0fVxyXG5cclxuXHQuYm9sZCB7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8UGFnZT5cclxuXHRcdDxBY3Rpb25CYXIgdGl0bGU9XCJNdWx0aSBUZW1wbGF0ZXNcIj5cclxuXHRcdFx0PE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIGJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiBAdGFwPVwiZ29CYWNrXCIvPlxyXG5cdFx0PC9BY3Rpb25CYXI+XHJcblx0XHQ8R3JpZExheW91dCBjb2x1bW5zPVwiMjAsKlwiIHJvd3M9XCJhdXRvLGF1dG8sKlwiPlxyXG5cdFx0XHQ8QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dD1cIkV4cGFuZCBBbGxcIiBAdGFwPVwiZXhwYW5kQWxsXCI+PC9CdXR0b24+XHJcblx0XHRcdDxCdXR0b24gcm93PVwiMVwiIGNvbD1cIjFcIiB0ZXh0PVwiQ29sbGFwc2UgQWxsXCIgQHRhcD1cImNvbGxhcHNlQWxsXCI+PC9CdXR0b24+XHJcblx0XHRcdDxBY2NvcmRpb24gcm93PVwiMlwiIGNvbD1cIjFcIiBoZWlnaHQ9XCIxMDAlXCIgcmVmPVwiYWNjb3JkaW9uXCIgYWxsb3dNdWx0aXBsZT1cInRydWVcIiBjaGlsZEl0ZW1zPVwiY2hpbGRyZW5cIiBmb3I9XCJpdGVtIG9mIGl0ZW1zXCI+XHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkb2RkXCIgbmFtZT1cImhlYWRlci1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgOnRleHQ9XCJpdGVtLmhlYWRlclRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJGV2ZW5cIiBuYW1lPVwiaGVhZGVyLWV2ZW5cIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGJhY2tncm91bmRDb2xvcj1cIm9yYW5nZVwiIDp0ZXh0PVwiaXRlbS5oZWFkZXJUZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRvZGRcIiBuYW1lPVwidGl0bGUtb2RkXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkZXZlblwiIG5hbWU9XCJ0aXRsZS1ldmVuXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRvZGRcIiBuYW1lPVwiY29udGVudC1vZGRcIj5cclxuXHRcdFx0XHRcdDxTdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0PExhYmVsIGhlaWdodD1cIjIwMFwiIDp0ZXh0PVwiaXRlbS50ZXh0XCI+PC9MYWJlbD5cclxuXHRcdFx0XHRcdDwvU3RhY2tMYXlvdXQ+XHJcblx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8di10ZW1wbGF0ZSBpZj1cIiRldmVuXCIgbmFtZT1cImNvbnRlbnQtZXZlblwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cInJlZFwiPlxyXG5cdFx0XHRcdFx0XHQ8TGFiZWwgYmFja2dyb3VuZENvbG9yPVwieWVsbG93XCIgOnRleHQ9XCJpdGVtLnRleHRcIj48L0xhYmVsPlxyXG5cdFx0XHRcdFx0PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDx2LXRlbXBsYXRlIGlmPVwiJG9kZFwiIG5hbWU9XCJmb290ZXItb2RkXCI+XHJcblx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwieWVsbG93XCI+XHJcblx0XHRcdFx0XHRcdDxMYWJlbCA6dGV4dD1cIml0ZW0uZm9vdGVyVGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PHYtdGVtcGxhdGUgaWY9XCIkZXZlblwiIG5hbWU9XCJmb290ZXItZXZlblwiPlxyXG5cdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cImJsdWVcIj5cclxuXHRcdFx0XHRcdFx0PExhYmVsICA6dGV4dD1cIml0ZW0uZm9vdGVyVGV4dFwiPjwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8L1N0YWNrTGF5b3V0PlxyXG5cdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuXHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0PC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAnRGlhZ27Ds3N0aWNvJyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAnUmV0YXJkbyBkZSBsZW5ndWFqZSBhbsOhcnRpY28gbW9kZXJhZG8gJyB9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6ICdBdWRpY2nDs24gbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1ZGljacOzbiBiaWxhdGVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzIgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogWyB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ01lJyxcclxuXHRcdFx0XHRcdFx0fSwgeyB0ZXh0OiAnU3RvcCcgfSBdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzMgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXI6ICczMCcsXHJcblx0XHRcdFx0XHRcdGhlYWRlclRleHQ6ICdUaGlyZCcsXHJcblx0XHRcdFx0XHRcdGZvb3RlclRleHQ6ICc2JyxcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFsgeyB0ZXh0OiAnVGhpcyd9LCB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ1RoaW5nJyxcclxuXHRcdFx0XHRcdFx0fSBdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJzQgVGl0bGUnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXI6ICc0MCcsXHJcblx0XHRcdFx0XHRcdGhlYWRlclRleHQ6ICdGb3VydGgnLFxyXG5cdFx0XHRcdFx0XHRmb290ZXJUZXh0OiAnNycsXHJcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbIHsgdGV4dDogJ05vdyd9LCB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ1BsZWFzZScsXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvQmFjazogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRleHBhbmRBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmFjY29yZGlvbi5uYXRpdmVWaWV3LmV4cGFuZEFsbCgpO1xyXG5cdFx0XHR9LCBjb2xsYXBzZUFsbDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuYWNjb3JkaW9uLm5hdGl2ZVZpZXcuY29sbGFwc2VBbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdEFjdGlvbkJhciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiYTgyO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cdC5tZXNzYWdlIHtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0fVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIk5vdGlmaWNhY2lvbmVzXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiTm90aWZpY2FjaW9uZXNcIj48L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbjxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj4gXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIzMCwgNTAsMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzBcIiBjb2x1bW5zPVwiMjAsMjgwLCBhdXRvXCI+XG5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIxXCIgIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJUZXJhcGlhc1wiPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCIxXCIgY29sPVwiMlwiICBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiICAvPlxuICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cInN1YnRpdHVsb1wiIHRleHQ9XCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgZGlhcmlhcyBwYXJhIHZlciB2w61kZW9zXCIgPiA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiM1wiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIj4gPC9MYWJlbD5cbiAgICAgICAgICAgIDxTd2l0Y2ggcm93PVwiM1wiIGNvbD1cIjJcIiBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInN1YnRpdHVsb1wiIHJvdz1cIjNcIiBjb2w9XCIxXCIgdGV4dD1cIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCByZWNpYmlyIGVsIGF2YW5jZVwiPiA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiNVwiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJDaXRhc1wiID4gPC9MYWJlbD5cbiAgICAgICAgICAgIDxTd2l0Y2ggcm93PVwiNVwiIGNvbD1cIjJcIiBjaGVja2VkPVwiZmFsc2VcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgICA8TGFiZWwgIHJvdz1cIjVcIiBjb2w9XCIxXCIgY2xhc3M9XCJzdWJ0aXR1bG9cIiB0ZXh0PVwiUmVjaWJlIG3DoXMgZGUgdW5hIG5vdGlmaWNhY2nDs25cIj4gPC9MYWJlbD5cblxuXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiN1wiIGNvbD1cIjFcIiBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJSZXBvcnRlcyBkZSBwcm9ncmVzb1wiPiA8L0xhYmVsPlxuICAgICAgICAgICAgPFN3aXRjaCByb3c9XCI3XCIgY29sPVwiMlwiIGNoZWNrZWQ9XCJmYWxzZVwiIGJhY2tncm91bmRDb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbCByb3c9XCI3XCIgY29sPVwiMVwiIGNsYXNzPVwic3VidGl0dWxvXCIgIHRleHQ9XCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgbGxlZ2FyIGVsIHJlcG9ydGVcIj4gPC9MYWJlbD5cblxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICAgIGltcG9ydCBTZWxlY3RlZFBhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiU2V0dGluZ3NcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0RyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBBY3Rpb25CYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXG4gICAgICAgICAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgaWNvbj1cInJlczovL21lbnVcIiBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXG4gICAgICAgICAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXG4gICAgICAgICAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGljb249XCJyZXM6Ly9tZW51XCIgXG4gICAgICAgICAgICAgICAgYW5kcm9pZDp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgXG4gICAgICAgICAgICAgICAgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCJcbiAgICAgICAgICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgdGV4dD1cIlByb2dyZXNvIGRlbCBwYWNpZW50ZVwiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cbiAgICAgICAgPFNjcm9sbFZpZXc+XG5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9ncmVzbyBpbiBwcm9ncmVzb3NcIj5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjIwLDI1LDI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInByb2dyZXNvLmJsb3F1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkZlY2hhOiBEZWwgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJwcm9ncmVzby5pbmljaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiIGFsIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicHJvZ3Jlc28uZmluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwifi9zaGFyZWQvdXRpbHNcIjtcbiAgICAgICAgaW1wb3J0ICogYXMgY2FsZW5kYXJNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyJztcbiAgICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIlNlYXJjaFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzb3M6IFsgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTgvMDgvMzBcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMTAvMjJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDNcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDMvMTBcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMDgvMzBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDJcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDEvMTVcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTkvMDMvMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDFcIixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTgvMTEvMTVcIixcbiAgICAgICAgICAgICAgICAgICAgZmluOiBcIjIwMTgvMDEvMTVcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiUmVwb3J0ZSBkZSBjaXRhc1wiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIFxuICAgIDxUYWJWaWV3ICBAc2VsZWN0ZWRJbmRleENoYW5nZT1cImluZGV4Q2hhbmdlXCI+XG4gICAgICAgICAgIDwhLS0gUGVzdGHDsWEgMS4gLS0+XG4gICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJQcm9ncmVzb1wiIGljb25Tb3VyY2U9XCJyZXM6Ly9wcm9ncmVzb1wiPlxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIjMwLDMwLDIwMCwyMCwyMFwiIGNvbHVtbnM9XCIyMCwgKiwgMjBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIHRleHQ9XCJCbG9xdWUgNFwiIC8+XG4gICAgICBcbiAgICAgICAgPCEtLSAgR3LDoWZpY2EgZGUgZG9uYSAtLT5cbiAgICAgIDxSYWRQaWVDaGFydCBhbGxvd0FuaW1hdGlvbj1cInRydWVcIiByb3c9XCIyXCIgY29sPVwiMVwiPlxuICAgICAgICA8RG9udXRTZXJpZXMgdi10a1BpZVNlcmllcyBzZXJpZXNOYW1lPVwicGllXCJcbiAgICAgICAgICBzZWxlY3Rpb25Nb2RlPVwiRGF0YVBvaW50XCJcbiAgICAgICAgICBleHBhbmRSYWRpdXM9XCIwLjRcIlxuICAgICAgICAgIG91dGVyUmFkaXVzRmFjdG9yPVwiMC43XCJcbiAgICAgICAgICB2YWx1ZVByb3BlcnR5PVwiQ2FudGlkYWRcIlxuICAgICAgICAgIGxlZ2VuZExhYmVsPVwiQ2l0YXNcIlxuICAgICAgICAgIHNob3dMYWJlbHM9XCJ0cnVlXCJcbiAgICAgICAgICA6aXRlbXM9XCJjaXRhc1wiIC8+XG4gICAgICAgIDxSYWRMZWdlbmRWaWV3IHYtdGtQaWVMZWdlbmQgcG9zaXRpb249XCJSaWdodFwiIHRpdGxlPVwiQ2l0YXNcIiBvZmZzZXRPcmlnaW49XCJUb3BSaWdodFwiIHdpZHRoPVwiMTEwXCIgZW5hYmxlU2VsZWN0aW9uPVwidHJ1ZVwiPjwvUmFkTGVnZW5kVmlldz5cbiAgICBcbiAgICAgICAgPFBhbGV0dGUgdi10a1BpZVBhbGV0dGUgc2VyaWVzTmFtZT1cInBpZVwiPlxuICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiZ3JlZW5cIiBzdHJva2VDb2xvcj1cImdyZWVuXCI+PC9QYWxldHRlRW50cnk+XG4gICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwib3JhbmdlXCIgc3Ryb2tlQ29sb3I9XCJvcmFuZ2VcIj48L1BhbGV0dGVFbnRyeT5cbiAgICAgICAgICAgIDxQYWxldHRlRW50cnkgdGtQaWVQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiZ3JheVwiIHN0cm9rZUNvbG9yPVwiZ3JheVwiPjwvUGFsZXR0ZUVudHJ5PlxuICAgICAgPC9QYWxldHRlPiBcblxuXG4gICAgICA8L1JhZFBpZUNoYXJ0PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgPC9UYWJWaWV3SXRlbT5cblxuICAgICAgICA8IS0tUGVzdGHDsWEgMi4gQ2FsZW5kYXJpby0tPlxuICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJDYWxlbmRhcmlvXCI+XG4gICAgICAgICAgICA8UmFkQ2FsZW5kYXIgIGlkPVwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgOmV2ZW50U291cmNlPVwiY2FsZW5kYXJFdmVudHNcIiBcblxuICAgICAgICAgIGV2ZW50c1ZpZXdNb2RlPVwiSW5saW5lXCIgXG4gICAgICAgICAgc2VsZWN0aW9uTW9kZT1cIlNpbmdsZVwiIFxuICAgICAgICAgIHZpZXdNb2RlPVwiTW9udGhcIlxuICAgICAgICAgIHRyYW5zaXRpb25Nb2RlPVwiU3RhY2tcIiBcbiAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiIFxuICAgICAgICAgIFxuICAgICAgICAgIEBkYXRlU2VsZWN0ZWQ9XCJvbkRhdGVTZWxlY3RlZFwiIFxuICAgICAgICAgIEBkYXRlRGVzZWxlY3RlZD1cIm9uRGF0ZURlc2VsZWN0ZWRcIiBcbiAgICAgICAgICBAbmF2aWdhdGVkVG9EYXRlPVwib25OYXZpZ2F0ZWRUb0RhdGVcIlxuICAgICAgICAgIEBuYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZD1cIm9uTmF2aWdhdGluZ1RvRGF0ZVN0YXJ0ZWRcIiBcbiAgICAgICAgICBAdmlld01vZGVDaGFuZ2VkPVwib25WaWV3TW9kZUNoYW5nZWRcIiAvPlxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICA8IS0tIFBlc3Rhw7FhIDMuIExpc3RhIGRlIGNpdGFzIC0tPlxuICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkxpc3RhIGRlIGNpdGFzXCI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cIml0ZW0gaW4gaXRlbXNcIj4gICAgICAgICBcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICA8IS0tIFNob3dzIHRoZSBsaXN0IGl0ZW0gbGFiZWwgaW4gdGhlIGRlZmF1bHQgY29sb3IgYW5kIHN0eWxlLiAtLT5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjgwLDUwLDIwMCw1MFwiIHJvd3M9XCIyOCwyOFwiPlxuICAgICAgICAgICAgPExhYmVsICByb3c9XCIwXCIgY29sPVwiMFwiIDp0ZXh0PVwiaXRlbS5mZWNoYVwiICAvPlxuICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjbGFzcz1cImxpc3RhXCIgY29sPVwiMVwiIDp0ZXh0PVwiaXRlbS5pZEV4cGVkaWVudGVcIiAvPlxuICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY2xhc3M9XCJsaXN0YVwiIGNvbD1cIjJcIiA6dGV4dD1cIml0ZW0ubm9tYnJlXCIgLz5cblxuICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJsaXN0YVwiIGNvbD1cIjFcIiA6dGV4dD1cIml0ZW0uaG9yYUluaWNpb1wiID4gPC9MYWJlbD5cbiAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwibGlzdGFcIiBjb2w9XCIyXCIgOnRleHQ9XCJpdGVtLmhvcmFGaW5cIiAvPlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJWaWV3SXRlbT5cbiAgICA8L1RhYlZpZXc+XG5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcbiAgICBpbXBvcnQgKiBhcyBjYWxlbmRhck1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtdWktY2FsZW5kYXInO1xuICAgIGltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcbiAgICBWdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIlJlcG9ydGVDaXRhc1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gYXJncy52YWx1ZVxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCB0YWIgaW5kZXg6ICcgKyBuZXdJbmRleClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRhdGVTZWxlY3RlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25EYXRlU2VsZWN0ZWQ6IFwiICsgYXJncy5kYXRlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uRGF0ZURlc2VsZWN0ZWQoYXJncykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uRGF0ZURlc2VsZWN0ZWQ6IFwiICsgYXJncy5kYXRlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uTmF2aWdhdGVkVG9EYXRlKGFyZ3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRlZFRvRGF0ZTogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZChhcmdzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZDogXCIgKyBhcmdzLmRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25WaWV3TW9kZUNoYW5nZWQoYXJncykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uVmlld01vZGVDaGFuZ2VkOiBcIiArIGFyZ3MubmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGR1bW15IGV2ZW50c1xuICAgICAgICAgICAgbGV0IGV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnREYXRlO1xuICAgICAgICAgICAgbGV0IGVuZERhdGU7XG4gICAgICAgICAgICBsZXQgZXZlbnQ7XG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW25ldyBDb2xvcigyMDAsIDE4OCwgMjYsIDIxNCksIG5ldyBDb2xvcigyMjAsIDI1NSwgMTA5LCAxMzApLCBuZXcgQ29sb3IoMjU1LCA1NSwgNDUsIDI1NSksIG5ldyBDb2xvcigxOTksIDE3LCAyMjcsIDEwKSwgbmV3IENvbG9yKDI1NSwgMjU1LCA1NCwgMyldO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgaSAqIDIsIDE0KTtcbiAgICAgICAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgKGkgKiAyKSwgMTYpO1xuICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwiVGVyYXBpYSBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgZmFsc2UsIGNvbG9yc1tpICogMTAgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgaWYgKGkgJSAzID09IDApIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBjYWxlbmRhck1vZHVsZS5DYWxlbmRhckV2ZW50KFwic2Vjb25kIFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCB0cnVlLCBjb2xvcnNbaSAqIDUgJSAoY29sb3JzLmxlbmd0aCAtIDEpXSk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHsgZmVjaGE6IFwiMTQvMDIvMjAyMFwiLCBpZEV4cGVkaWVudGU6IFwiTFRGMThcIiAsIG5vbWJyZTogXCJKb3PDqSBDYXJsb3MgSHVlcnRhIEdvbnrDoWxlc1wiLCBob3JhSW5pY2lvOiBcIjEyOjAwXCIsIGhvcmFGaW46IFwiMTM6MzBcIiB9LFxuICAgICAgICAgICAgICAgICAgeyBmZWNoYTogXCIyMS8wMi8yMDIwXCIsIGlkRXhwZWRpZW50ZTogXCJMVEYxOFwiICwgbm9tYnJlOiBcIkpvc8OpIENhcmxvcyBIdWVydGEgR29uesOhbGVzXCIsIGhvcmFJbmljaW86IFwiMTI6MDBcIiwgaG9yYUZpbjogXCIxMzozMFwiIH0sXG4gICAgICAgICAgICAgICAgICB7IGZlY2hhOiBcIjI4LzAyLzIwMjBcIiwgaWRFeHBlZGllbnRlOiBcIkxURjE4XCIgLCBub21icmU6IFwiSm9zw6kgQ2FybG9zIEh1ZXJ0YSBHb256w6FsZXNcIiwgaG9yYUluaWNpbzogXCIxMjowMFwiLCBob3JhRmluOiBcIjEzOjMwXCIgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY2l0YXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaXRhczogXCJDaXRhcyBkZSBhc2lzdGVuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkOiAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdGFzOiBcIkNpdGFzIHBlcmRpZGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENpdGFzOiBcIkNpdGFzIHJlc3RhbnRlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW50aWRhZDogOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuQWN0aW9uQmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuVGFiVmlld3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5saXN0YXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4QTFDQTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgPCEtLSBcbiAgICAgICAgICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXG4gICAgICAgICAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgaWNvbj1cInJlczovL21lbnVcIiBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIj48L05hdmlnYXRpb25CdXR0b24+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXG4gICAgICAgICAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXG4gICAgICAgICAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICAtLT5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIGljb249XCJyZXM6Ly9tZW51XCIgXG4gICAgICAgICAgICAgICAgYW5kcm9pZDp2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCIgXG4gICAgICAgICAgICAgICAgQHRhcD1cIm9uRHJhd2VyQnV0dG9uVGFwXCJcbiAgICAgICAgICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8L0FjdGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIHRleHQ9XCJSZXBvcnRlIGRlIGRpYW7Ds3N0aWNvc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwhLS0gIDxJbWFnZSBzcmM9XCJyZXM6Ly9pY29uXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPi0tPlxuICAgICAgICAgICAgIDwhLS0gICA8TGFiZWwgdGV4dD1cIk5hdGl2ZVNjcmlwdFwiIGZvbnRTaXplPVwiMjRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+IC0tPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICBcblxuPFNjcm9sbFZpZXc+XG5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMCwyMCwyMCwyMFwiIGNvbHVtbnM9XCIyMCw0MCxhdXRvXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlciB0b3BcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzXCIgc3JjLmRlY29kZT1cImZvbnQ6Ly8mI3hmMmJkO1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIyXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiIHRleHQ9XCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMlwiIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIiB0ZXh0PVwiRXhwOiAxNjU5LTA5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjJcIiBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIgdGV4dD1cIjUgYcOxb3NcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPCEtLSBEaWFnbm9zdGljbyAvIENvbGxhcHNlLS0+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS10LTIwIG0tbC0zMFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYWxpZ25Db250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkRpYWduw7NzdGljb1wiIEB0YXA9XCJnb0NvbGxhcHNlKCRldmVudClcIiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiZGlhZyBpbiBkaWFnbm9zdGljb3NcIlxuICAgICAgICAgICAgICAgOnZpc2liaWxpdHk9IFwic2hvd0NvbGxhcHNlQm94ID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1wiPiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPiBcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVwiMVwiPiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJkaWFnLmRpYWdub3N0aWNvMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cImRpYWcuZGlhZ25vc3RpY28yXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwiZGlhZy5kaWFnbm9zdGljbzNcIi8+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgICAgICAgICA8IS0tIFRlcmFwaWEgZGVsIGxlbmd1YWplIC9Db2xsYXBzZSAtLT5cbiAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS10LTIwIG0tbC0zMFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGFsaWduQ29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVGVyYXBpYSBkZSBsZW5ndWFqZVwiIEB0YXA9XCJnb0NvbGxhcHNlMigkZXZlbnQpXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0ZXIgaW4gdGVyYXBpYXNcIlxuICAgICAgICAgICAgICAgOnZpc2liaWxpdHk9IFwic2hvd0NvbGxhcHNlQm94MiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcIj4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT4gXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhM1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhNFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiA6dGV4dD1cInRlci50ZXJhcGlhNVwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvTGlzdFZpZXc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFZHVjYWNpw7NuIGVzcGVjaWFsIC9Db2xsYXBzZSAtLT5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJtLXQtMjAgbS1sLTMwXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiRWR1Y2FjacOzbiBlc3BlY2lhbFwiIEB0YXA9XCJnb0NvbGxhcHNlMygkZXZlbnQpXCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVwiMVwiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcnVlYmFcIiBjbGFzcz1cImJveCBwdWxsLWxlZnRcIlxuICAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveDMgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCI+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQbGFuIGRlIHRyYWJham8gL0NvbGxhcHNlIC0tPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cIm0tdC0yMCBtLWwtMzBcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIGFsaWduQ29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQbGFuIGRlIHRyYWJham9cIiBAdGFwPVwiZ29Db2xsYXBzZTQoJGV2ZW50KVwiIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJwbGFuIGluIHBsYW5UcmFiYWpvXCJcbiAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PSBcInNob3dDb2xsYXBzZUJveDQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXCI+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+IFxuICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJwbGFuLnBsYW4xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwicGxhbi5wbGFuMlwiLz5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgXG5cbiAgICA8L1N0YWNrTGF5b3V0PlxuPC9TY3JvbGxWaWV3PlxuXG5cdFxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwifi9zaGFyZWQvdXRpbHNcIjtcbiAgICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiO1xuICAgIGltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbiAgICBpbXBvcnQgUGFnZXIgZnJvbSAnbmF0aXZlc2NyaXB0LWFjY29yZGlvbi92dWUnXG5cdGltcG9ydCBNdWx0aSBmcm9tICcuL011bHRpJ1xuXG4gICAgVnVlLnVzZShQYWdlcilcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJIb21lXCIpO1xuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25EcmF3ZXJCdXR0b25UYXAoKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0RyYXdlcigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvQmFjazogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcblx0XHRcdH0sXG5cdFx0XHRnb1RvTXVsdGk6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy4kbmF2aWdhdGVUbyhNdWx0aSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb0NvbGxhcHNlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvQ29sbGFwc2UyOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94MilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDIgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgZ29Db2xsYXBzZTM6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29sbGFwc2VCb3gzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Db2xsYXBzZTQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29sbGFwc2VCb3g0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94NCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY28xOiAnUmV0YXJkbyBkZSBsZW5ndWFqZSBhbsOhcnRpY28gbW9kZXJhZG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY28yOiAnQXVkaWNpw7NuIG5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zdGljbzM6ICdBdWR1Y2nDs24gYmlsYXRlcmFsJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0ZXJhcGlhcyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTE6ICcxLiBFamVyY2ljaW9zIGRlIHJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuLicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhMjogJzIuIEVqZXJjaWNpb3MgcHJlZm9uYXRvcmlvcyB5IHByYXhpYXMgb3JvZmFjaWFsZXMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWEzOiAnMy4gRWplcmNpY2lvcyBwYXJhIGZvbmVtYXMgL3IvLCAvcnIvLCAvbC8sIC9jaC8sIC9mLywgL2svLCAvcy8sIGludGVybWVkaWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTQ6ICc0LiBUcmFiYWphciBhdW1lbnRvIGRlIHZvY2FidWxhcmlvIGFjb3JkZSBhIGxhIGVkYWQgeSBjbGFzaWZpY2FjacOzbiBwb3IgY2FtcG9zIHNlbcOhbnRpY29zLiBIYWNlciBsw6FtaW5hcyBjb24gZmlndXJhcyBkZSBidWVuIHRhbWHDsW8gcGFyYSBxdWUgbGFzIGFwcmVuZGEgYSBlc2NyaWJpcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhNTogJzUuIFRyYWJhamFyIGVzdGltdWxhY2nDs24gZGUgYXNwZWN0byBwcmFnbcOhdGljbyBtZWRpYW50ZSBjYW50b3MsIGp1ZWdvcyB5IGN1ZW50b3MuJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBwbGFuVHJhYmFqbzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuMTogJzEuIENvbnRpbnVhciB0ZXJhcGlhIGRlIGxlbmd1YWplIHkgYXByZW5kaXphamUgc2VtYW5hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuMjogJzIuIENpdGEgYWwgdGVybWluYXIgdGVyYXBpYXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbGxhcHNlQm94OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXBzZUJveDI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbGxhcHNlQm94MzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGFwc2VCb3g0OiBmYWxzZVxuXHRcdFx0fVxuICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuXHQubWVzc2FnZSB7XG5cdFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAyMDtcblx0XHRjb2xvcjogIzMzMzMzMztcblx0fVxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIGJhY2tncm91bmRDb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICA8IS0tIFxuICAgICAgICAgICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICAgICAgICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiIEB0YXA9XCJvbkRyYXdlckJ1dHRvblRhcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gXG4gICAgICAgICAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcbiAgICAgICAgICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICAgICAgICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBcbiAgICAgICAgICAgICAgICBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBcbiAgICAgICAgICAgICAgICBAdGFwPVwib25EcmF3ZXJCdXR0b25UYXBcIlxuICAgICAgICAgICAgICAgIGlvcy5wb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiB0ZXh0PVwiVGVyYXBpYXNcIj48L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8U2Nyb2xsVmlldyA+XG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0ZXJhcGlhIGluIHRlcmFwaWFzXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwidGVyYXBpYS5pbWdcIiBjbGFzcz1cInRodW1iXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGVyYXBpYS50ZXJhcGlhXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIn4vc2hhcmVkL3V0aWxzXCI7XG4gICAgaW1wb3J0IFNlbGVjdGVkUGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJGZWF0dXJlZFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPCEtLSBQYWdlIGNvbnRlbnQgZ29lcyBoZXJlIC0tPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRyYXdlckJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlcmFwaWFzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRlcmFwaWE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhOiBcIlJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcmVzcGlyYWNpb24uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUZXJhcGlhOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVyYXBpYTogXCJQcmVmb25hdG9yaW9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcHJlZm9uYXRvcmlvcy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRlcmFwaWE6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJhcGlhOiBcIlByYXhpYXMgb3JvZmFjaWFsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogXCJ+L2ltYWdlcy9wcmF4aWFzLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcmFwaWE6IFwiRWplcmNpY2lvcyBkZSBmb25lbWFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvZm9uZW1hcy5qcGdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLy8gU3RhcnQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcbiAgICBAaW1wb3J0ICd+QG5hdGl2ZXNjcmlwdC90aGVtZS9zY3NzL3ZhcmlhYmxlcy9ibHVlJztcbiAgICAvLyBFbmQgY3VzdG9tIGNvbW1vbiB2YXJpYWJsZXNcblxuICAgIC8vIEN1c3RvbSBzdHlsZXNcbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LTQ1YmE1ZWQ0IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi0zOGYwMjYwNiB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuR3JpZExheW91dC5udC1kcmF3ZXJfX2xpc3QtaXRlbVtkYXRhLXYtMzhmMDI2MDZdOnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9EcmF3ZXJDb250ZW50LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1lZThiY2QzNiB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuQWN0aW9uQmFyW2RhdGEtdi1lZThiY2QzNl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi50aXR1bG9bZGF0YS12LWVlOGJjZDM2XSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5zdWJ0aXR1bG9bZGF0YS12LWVlOGJjZDM2XSB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LTU3MmM2M2Y4IHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUHJvZ3Jlc28udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZW1wdHktZGF0YS12LWMxMThiNGFjIHt9LyogRm9ybXMgKi9cXG4vKipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqKi9cXG5BY3Rpb25CYXJbZGF0YS12LWMxMThiNGFjXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuVGFiVmlld1tkYXRhLXYtYzExOGI0YWNdIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ubGlzdGFbZGF0YS12LWMxMThiNGFjXSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhBMUNBO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvUmVwb3J0ZUNpdGFzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1lYWFjNzFkZSB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuLm1lc3NhZ2VbZGF0YS12LWVhYWM3MWRlXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4udGl0bGVbZGF0YS12LWVhYWM3MWRlXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGVtcHR5LWRhdGEtdi1hN2E2ODFiNCB7fS8qIEZvcm1zICovXFxuLyoqXFxuICogQmx1ZSB2YXJpYWJsZSBvdmVycmlkZXNcXG4gKiovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1RlcmFwaWFzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZVtkYXRhLXYtYzI3NDgyYzRdIHtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi1jMjc0ODJjNF0ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAzMDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDMwO1xcblxcdFxcdGZsZXgtZ3JvdzogMjtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubG9nb1tkYXRhLXYtYzI3NDgyYzRdIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMjtcXG5cXHRcXHRoZWlnaHQ6IDkwO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi1jMjc0ODJjNF0ge1xcblxcdFxcdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDI1O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNzA7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGNvbG9yOiBibGFjaztcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi1jMjc0ODJjNF0ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxODtcXG5cXHRcXHRwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuLmlucHV0LWZpZWxkIC5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG5cXHRcXHRmb250LXNpemU6IDU0O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LWMyNzQ4MmM0XSB7XFxuXFx0XFx0aGVpZ2h0OiA1MDtcXG5cXHRcXHRtYXJnaW46IDMwIDUgMTUgNTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1O1xcblxcdFxcdGZvbnQtc2l6ZTogMjA7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcblxcdFxcdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRjb2xvcjogI0E4QThBODtcXG5cXHRcXHRmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuXFx0XFx0Y29sb3I6ICMwMDAwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyW2RhdGEtdi04NTYxODcyNF0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi04NTYxODcyNF0ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjA7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9NdWx0aS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJSYWRTaWRlRHJhd2VyXCIsXG4gICAge1xuICAgICAgcmVmOiBcImRyYXdlclwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZHJhd2VyTG9jYXRpb246IFwiTGVmdFwiLFxuICAgICAgICBnZXN0dXJlc0VuYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICBkcmF3ZXJUcmFuc2l0aW9uOiBfdm0udHJhbnNpdGlvblxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXJnOiBcImRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkcmF3ZXJDb250ZW50XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZyYW1lXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwidmlld1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmlldzptYWluQ29udGVudFwiLFxuICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVmOiBcImRyYXdlck1haW5Db250ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcIm1haW5Db250ZW50XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkdyaWRMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9fY29udGVudFwiLCBhdHRyczogeyByb3dzOiBcImF1dG8sICpcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1pbWFnZSBmYXMgdC0zNlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJzcmMuZGVjb2RlXCI6IFwiZm9udDovLyYjeGYyYmQ7XCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRnJhbmNpc2NvIFNhbnRpYWdvIE1vcmFsZXMgUm9hXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItZm9vdG5vdGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRXhwOiAxNjU5LTA5XCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19ib2R5XCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlbGVjdGVkUGFnZSA9PT0gXCJSZXBvcnRlRGlhZ25vc3RpY29zXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiIC1zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25OYXZpZ2F0aW9uSXRlbVRhcChfdm0uUmVwb3J0ZURpYWdub3N0aWNvcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcInJlczovL3JlcG9ydGVkaWFnbm9zdGljb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiUmVwb3J0ZSBkZSBkaWFnbsOzc3RpY29zXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgIChfdm0uc2VsZWN0ZWRQYWdlID09PSBcIlJlcG9ydGVDaXRhc1wiID8gXCIgLXNlbGVjdGVkXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25OYXZpZ2F0aW9uSXRlbVRhcChfdm0uUmVwb3J0ZUNpdGFzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwicmVzOi8vcmVwb3J0ZWNpdGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJSZXBvcnRlIGRlIGNpdGFzXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgIChfdm0uc2VsZWN0ZWRQYWdlID09PSBcIlByb2dyZXNvXCIgPyBcIiAtc2VsZWN0ZWRcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbk5hdmlnYXRpb25JdGVtVGFwKF92bS5Qcm9ncmVzbylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcInJlczovL3Byb2dyZXNvcGFjaWVudGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIlByb2dyZXNvIGRlbCBwYWNpZW50ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlbGVjdGVkUGFnZSA9PT0gXCJUZXJhcGlhc1wiID8gXCIgLXNlbGVjdGVkXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiYXV0bywgKlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25OYXZpZ2F0aW9uSXRlbVRhcChfdm0uVGVyYXBpYXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJyZXM6Ly90ZXJhcGlhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiVGVyYXBpYXNcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHJcIiB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiArXG4gICAgICAgICAgICAgICAgICAgIChfdm0uc2VsZWN0ZWRQYWdlID09PSBcIk5vdGlmaWNhY2lvbmVzXCIgPyBcIiAtc2VsZWN0ZWRcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCJhdXRvLCAqXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbk5hdmlnYXRpb25JdGVtVGFwKF92bS5Ob3RpZmljYWNpb25lcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcInJlczovL25vdGlmaWNhY2lvbmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJOb3RpZmljYWNpb25lc1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIn4vaW1hZ2VzL2xvZ28ucG5nXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDUklTVkVSXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkNvcnJlb1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDb3JyZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyBtYXJnaW5Cb3R0b206IFwiMjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQ29udHJhc2XDsWFcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbnRyYXNlw7FhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0uaXNMb2dnaW5nSW4gPyBcImRvbmVcIiA6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzQ29uZmlybVBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS51c2VyLCBcInBhc3N3b3JkXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQ29uZmlybWFyIGNvbnRyYXNlw7FhXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNvbmZpcm1QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ29uZmlybWFyIGNvbnRyYXNlw7FhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS51c2VyLmNvbmZpcm1QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiSW5pY2lhciBzZXNpw7NuXCIgOiBcIlJlZ2lzdHJhcnNlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCLCv09sdmlkYXN0ZSB0dSBjb250cmFzZcOxYT9cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmZvcmdvdFBhc3N3b3JkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiLFxuICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVGb3JtIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIsK/Tm8gdGllbmVzIGN1ZW50YT8gXCIgOiBcIlJlZ3Jlc2FyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiUmVnaXN0cmFyc2VcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiTXVsdGkgVGVtcGxhdGVzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiR28gYmFja1wiLCBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb0JhY2sgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIyMCwqXCIsIHJvd3M6IFwiYXV0byxhdXRvLCpcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBcIkV4cGFuZCBBbGxcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZXhwYW5kQWxsIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBcIkNvbGxhcHNlIEFsbFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jb2xsYXBzZUFsbCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkFjY29yZGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiYWNjb3JkaW9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRJdGVtczogXCJjaGlsZHJlblwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiaGVhZGVyLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmhlYWRlclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlmOiBcIiRldmVuXCIsIG5hbWU6IFwiaGVhZGVyLWV2ZW5cIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uaGVhZGVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJG9kZFwiLCBuYW1lOiBcInRpdGxlLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IGl0ZW0udGl0bGUgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJGV2ZW5cIiwgbmFtZTogXCJ0aXRsZS1ldmVuXCIgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogaXRlbS50aXRsZSB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiY29udGVudC1vZGRcIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjIwMFwiLCB0ZXh0OiBpdGVtLnRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkZXZlblwiLCBuYW1lOiBcImNvbnRlbnQtZXZlblwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZjogXCIkb2RkXCIsIG5hbWU6IFwiZm9vdGVyLW9kZFwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBpdGVtLmZvb3RlclRleHQgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWY6IFwiJGV2ZW5cIiwgbmFtZTogXCJmb290ZXItZXZlblwiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogaXRlbS5mb290ZXJUZXh0IH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgdGl0bGU6IFwiTm90aWZpY2FjaW9uZXNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk5vdGlmaWNhY2lvbmVzXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzAsIDUwLDMwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMjAsMjgwLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGVyYXBpYXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBub3RpZmljYWNpb25lcyBkaWFyaWFzIHBhcmEgdmVyIHbDrWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgcmVjaWJpciBlbCBhdmFuY2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2l0YXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdHVsb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlY2liZSBtw6FzIGRlIHVuYSBub3RpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0dWxvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlcG9ydGVzIGRlIHByb2dyZXNvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXR1bG9cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgbGxlZ2FyIGVsIHJlcG9ydGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpdGVtczogX3ZtLnByb2dyZXNvcywgXCIrYWxpYXNcIjogXCJwcm9ncmVzb1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzbyA9IHJlZi5wcm9ncmVzb1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIjIwLDI1LDI1XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMVwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2dyZXNvLmJsb3F1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMlwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRmVjaGE6IERlbCBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHByb2dyZXNvLmluaWNpbyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIgYWwgXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBwcm9ncmVzby5maW4gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3M6dmlzaWJpbGl0eVwiOiBcImNvbGxhcHNlZFwiLCBpY29uOiBcInJlczovL21lbnVcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBcInJlczovL21lbnVcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRyYXdlckJ1dHRvblRhcCB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlcG9ydGUgZGUgY2l0YXNcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAgeyBvbjogeyBzZWxlY3RlZEluZGV4Q2hhbmdlOiBfdm0uaW5kZXhDaGFuZ2UgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIlByb2dyZXNvXCIsIGljb25Tb3VyY2U6IFwicmVzOi8vcHJvZ3Jlc29cIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIzMCwzMCwyMDAsMjAsMjBcIiwgY29sdW1uczogXCIyMCwgKiwgMjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbDogXCIxXCIsIHRleHQ6IFwiQmxvcXVlIDRcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZFBpZUNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxsb3dBbmltYXRpb246IFwidHJ1ZVwiLCByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRG9udXRTZXJpZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVTZXJpZXNcIiwgcmF3TmFtZTogXCJ2LXRrUGllU2VyaWVzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc05hbWU6IFwicGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IFwiRGF0YVBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFJhZGl1czogXCIwLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXNGYWN0b3I6IFwiMC43XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk6IFwiQ2FudGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kTGFiZWw6IFwiQ2l0YXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsczogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2l0YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlJhZExlZ2VuZFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVMZWdlbmRcIiwgcmF3TmFtZTogXCJ2LXRrUGllTGVnZW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNpdGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldE9yaWdpbjogXCJUb3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2VsZWN0aW9uOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYWxldHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGtQaWVQYWxldHRlXCIsIHJhd05hbWU6IFwidi10a1BpZVBhbGV0dGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlcmllc05hbWU6IFwicGllXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJQYWxldHRlRW50cnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0a1BpZVBhbGV0dGVFbnRyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGFsZXR0ZUVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGtQaWVQYWxldHRlRW50cnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGFsZXR0ZUVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGtQaWVQYWxldHRlRW50cnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiZ3JheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJDYWxlbmRhcmlvXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlJhZENhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiY2FsZW5kYXJcIixcbiAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlOiBfdm0uY2FsZW5kYXJFdmVudHMsXG4gICAgICAgICAgICAgICAgICBldmVudHNWaWV3TW9kZTogXCJJbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU6IFwiU2luZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB2aWV3TW9kZTogXCJNb250aFwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk1vZGU6IFwiU3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZGF0ZVNlbGVjdGVkOiBfdm0ub25EYXRlU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBkYXRlRGVzZWxlY3RlZDogX3ZtLm9uRGF0ZURlc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZWRUb0RhdGU6IF92bS5vbk5hdmlnYXRlZFRvRGF0ZSxcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRpbmdUb0RhdGVTdGFydGVkOiBfdm0ub25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXdNb2RlQ2hhbmdlZDogX3ZtLm9uVmlld01vZGVDaGFuZ2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJMaXN0YSBkZSBjaXRhc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaXRlbXM6IF92bS5pdGVtcywgXCIrYWxpYXNcIjogXCJpdGVtXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiODAsNTAsMjAwLDUwXCIsIHJvd3M6IFwiMjgsMjhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjBcIiwgdGV4dDogaXRlbS5mZWNoYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmlkRXhwZWRpZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMlwiLCB0ZXh0OiBpdGVtLm5vbWJyZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmhvcmFJbmljaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5ob3JhRmluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZXBvcnRlIGRlIGRpYW7Ds3N0aWNvc1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyIHRvcFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIwLDIwLDIwLDIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMjAsNDAsYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInNyYy5kZWNvZGVcIjogXCJmb250Oi8vJiN4ZjJiZDtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIyXCIsIHRleHQ6IFwiRXhwOiAxNjU5LTA5XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjJcIiwgdGV4dDogXCI1IGHDsW9zXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkRpYWduw7NzdGljb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogX3ZtLnNob3dDb2xsYXBzZUJveCA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRpYWdub3N0aWNvcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJkaWFnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFnID0gcmVmLmRpYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRpYWcuZGlhZ25vc3RpY28zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMjAgbS1sLTMwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiVGVyYXBpYSBkZSBsZW5ndWFqZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZTIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3gyID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGVyYXBpYXMsXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwidGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXIgPSByZWYudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBib3JkZXJXaWR0aDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhMyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhNCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHRlci50ZXJhcGlhNSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkVkdWNhY2nDs24gZXNwZWNpYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvQ29sbGFwc2UzKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGJvcmRlcldpZHRoOiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJveCBwdWxsLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBydWViYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3gzID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTIwIG0tbC0zMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlBsYW4gZGUgdHJhYmFqb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Db2xsYXBzZTQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5zaG93Q29sbGFwc2VCb3g0ID8gXCJ2aXNpYmxlXCIgOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucGxhblRyYWJham8sXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwicGxhblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbiA9IHJlZi5wbGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBib3JkZXJXaWR0aDogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHRleHQ6IHBsYW4ucGxhbjEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiLCB0ZXh0OiBwbGFuLnBsYW4yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zOnZpc2liaWxpdHlcIjogXCJjb2xsYXBzZWRcIiwgaWNvbjogXCJyZXM6Ly9tZW51XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uRHJhd2VyQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogXCJyZXM6Ly9tZW51XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZDp2aXNpYmlsaXR5XCI6IFwiY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25EcmF3ZXJCdXR0b25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJUZXJhcGlhc1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0udGVyYXBpYXMsIFwiK2FsaWFzXCI6IFwidGVyYXBpYVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJhcGlhID0gcmVmLnRlcmFwaWFcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGVyYXBpYS5pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogdGVyYXBpYS50ZXJhcGlhIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCI6IFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCIsXG5cdFwiLi9zaGFyZWQvdXRpbHMuanNcIjogXCIuL3NoYXJlZC91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgUmVwb3J0ZURpYWdub3N0aWNvcyBmcm9tIFwiLi9jb21wb25lbnRzL1JlcG9ydGVEaWFnbm9zdGljb3NcIjtcbmltcG9ydCBEcmF3ZXJDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRHJhd2VyQ29udGVudFwiO1xuaW1wb3J0IFJhZFNpZGVEcmF3ZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL3Z1ZVwiO1xuaW1wb3J0IENhbGVuZGFyVmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvdnVlJztcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XG5WdWUudXNlKENhbGVuZGFyVmlldyk7XG5WdWUudXNlKFJhZFNpZGVEcmF3ZXIpO1xuXG4vL1Z1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJyk7XG5WdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xubmV3IFZ1ZSh7XG4gICAgcmVuZGVyIChoKSB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIEFwcCxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBoKERyYXdlckNvbnRlbnQsIHsgc2xvdDogJ2RyYXdlckNvbnRlbnQnIH0pLFxuICAgICAgICAgICAgaChMb2dpbiwgeyBzbG90OiAnbWFpbkNvbnRlbnQnIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9XG4gIH0pLiRzdGFydCgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIVxcbiAqIE5hdGl2ZVNjcmlwdCBUaGVtZSBfX1ZFUlNJT05fXyAoaHR0cHM6Ly9uYXRpdmVzY3JpcHQub3JnKVxcbiAqIENvcHlyaWdodCAyMDE2LTIwMTYgVGhlIFRoZW1lIEF1dGhvcnNcXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE5IFByb2dyZXNzIFNvZnR3YXJlXFxuICogTGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMCAoaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC90aGVtZS9ibG9iL21hc3Rlci9MSUNFTlNFKVxcbiBcIn0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCJlbXB0eVwiLFwia2V5ZnJhbWVzXCI6W119LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBGb3JtcyBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiKlxcbiAqIENvbG9yIGNsYXNzZXNcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXG4qXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWdyZXlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ncmV5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1ncmV5LWxpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYmFiYWJhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctZ3JleS1saWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjYmFiYWJhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtY2hhcmNvYWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1jaGFyY29hbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtdHJhbnNwYXJlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctdHJhbnNwYXJlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1hcXVhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctYXF1YVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmx1ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWJsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJyb3duXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctYnJvd25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWZvcmVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWJnLWZvcmVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDA2OTY4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtZ3JleS1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctZ3JleS1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1wdXJwbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1wdXJwbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzgxMzBmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWxlbW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctbGVtb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWxpbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1saW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLXJ1YnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1ydWJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1za3lcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYy1iZy1za3lcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jLWVycm9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmMtYmctZXJyb3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBXaWR0aC9IZWlnaHQgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53LWZ1bGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudy0xMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oLWZ1bGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgtMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiKlxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxuKlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0yMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMjRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tdC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXItMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWItMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1sLTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXQtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1yLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS1iLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tbC0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS14LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teS0yOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS10LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tci0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tYi0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLWwtMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0teC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXktMzBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC01XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC04XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtOFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LThcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMTBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0xMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTEyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0xNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTIwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0yNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTI0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXQtMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtci0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWItMjVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtbC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteC0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctcmlnaHRcIixcInZhbHVlXCI6XCIyNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAteS0yNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC10LTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXItMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1iLTI4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLWwtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXgtMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLXktMjhcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtdC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1yLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtYi0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC1sLTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC14LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC15LTMwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgQWxpZ25tZW50IFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1sZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1yaWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1sb3dlcmNhc2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImxvd2VyY2FzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXVwcGVyY2FzZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidXBwZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtY2FwaXRhbGl6ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwiY2FwaXRhbGl6ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LXdlaWdodC1ub3JtYWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LXdlaWdodC1ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtaXRhbGljXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zdHlsZVwiLFwidmFsdWVcIjpcIml0YWxpY1wifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIipcXG4gKiBGb250IHNpemVcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXG4qXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTEwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMTdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTE4XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0xOVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIxXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMjBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50LTI1XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudC0zMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnQtMzZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oMVwiLFwiLmgyXCIsXCIuaDNcIixcIi5oNFwiLFwiLmg1XCIsXCIuaDZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmgxXCIsXCIubnMtZGFyayAuaDJcIixcIi5ucy1kYXJrIC5oM1wiLFwiLm5zLWRhcmsgLmg0XCIsXCIubnMtZGFyayAuaDVcIixcIi5ucy1kYXJrIC5oNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9keVwiLFwiLmJvZHkyXCIsXCIuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJub3JtYWxcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuYm9keVwiLFwiLm5zLWRhcmsgLmJvZHkyXCIsXCIubnMtZGFyayAuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNiM2IzYjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaDRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjExXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmg2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9keVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvZHkyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTdcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIC5oMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjM0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgLmgyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCAuaDNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIC5oNVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjExXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgLmJvZHkyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbWctcm91bmRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmltZy1jaXJjbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmltZy10aHVtYm5haWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnZpc2libGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2aXNpYmlsaXR5XCIsXCJ2YWx1ZVwiOlwiY29sbGFwc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucHVsbC1sZWZ0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucHVsbC1yaWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLXgtYXV0b1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS15LWF1dG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1kYW5nZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWRhbmdlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZDUwMDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLW1vZGFsXCIsXCIubnMtcm9vdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJzYW5zLXNlcmlmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1tb2RhbFwiLFwiLm5zLWRhcmsubnMtcm9vdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi4taGlkZGVuXCIsXCIuaGlkZGVuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmlzaWJpbGl0eVwiLFwidmFsdWVcIjpcImNvbGxhcHNlZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi4tcm91bmRlZFwiLFwiLnJvdW5kZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi4tY2lyY2xlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBEaXZpZGVycyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmhyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjkgMCAxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjAgMCAxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXN0eWxlXCIsXCJ2YWx1ZVwiOlwic29saWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1tdXRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FjZTRmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC50ZXh0LW11dGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNDQ2ZjgzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGFiZWwgPiAqXCIsXCJMYWJlbCA+ICogPiAqXCIsXCJCdXR0b24gPiAqXCIsXCJCdXR0b24gPiAqID4gKlwiLFwiVGV4dEZpZWxkID4gKlwiLFwiVGV4dEZpZWxkID4gKiA+ICpcIixcIlRleHRWaWV3ID4gKlwiLFwiVGV4dFZpZXcgPiAqID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3XCIsXCJSYWRMaXN0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi1oZWlnaHRcIixcInZhbHVlXCI6XCIxMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi1oZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIixcIi5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcIm5vbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1pbi13aWR0aFwiLFwidmFsdWVcIjpcIjY0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMCA1IDAgNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAxNiA4IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBCdXR0b25cIixcIi5ucy1pb3MgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjQgMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLW91dGxpbmVcIixcIi5udC1idXR0b24uLW91dGxpbmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBCdXR0b24uLW91dGxpbmVcIixcIi5ucy1hbmRyb2lkIC5udC1idXR0b24uLW91dGxpbmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1yb3VuZGVkLXNtXCIsXCJCdXR0b24uLXJvdW5kZWQtbGdcIixcIi5udC1idXR0b24uLXJvdW5kZWQtc21cIixcIi5udC1idXR0b24uLXJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQnV0dG9uLi1yb3VuZGVkLXNtXCIsXCIubnMtYW5kcm9pZCBCdXR0b24uLXJvdW5kZWQtbGdcIixcIi5ucy1hbmRyb2lkIC5udC1idXR0b24uLXJvdW5kZWQtc21cIixcIi5ucy1hbmRyb2lkIC5udC1idXR0b24uLXJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1yb3VuZGVkLWxnXCIsXCIubnQtYnV0dG9uLi1yb3VuZGVkLWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbltpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnQtYnV0dG9uW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1zaW1wbGVcIixcIi5udC1idXR0b24uLXNpbXBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtZWxldmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtZHluYW1pYy1lbGV2YXRpb24tb2Zmc2V0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYXF1YVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYXF1YVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tYXF1YVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1hcXVhXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwY2FhYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYXF1YS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tYXF1YS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZkZmZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWFxdWEuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYXF1YS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZkZmZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBjYWFiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ibHVlXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ibHVlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1ibHVlXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWJsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1ibHVlLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1ibHVlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWJsdWUuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tYmx1ZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tYnJvd25cIixcIi5ucy1yb290IC5udC1idXR0b24uLWJyb3duXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5NTU0OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1icm93blwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1icm93blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWJyb3duLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1icm93bi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZiZjlmOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNzk1NTQ4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWJyb3duLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWJyb3duLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmJmOWY4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWZvcmVzdFwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tZm9yZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1mb3Jlc3RcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tZm9yZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tZm9yZXN0Li1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1mb3Jlc3QuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM5Y2ZmZmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNjk2OFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1mb3Jlc3QuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tZm9yZXN0Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjOWNmZmZlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWdyZXlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWdyZXlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWdyZXlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tZ3JleVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLWdyZXkuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWdyZXkuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tZ3JleS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ncmV5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNWM2ODdjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1sZW1vblwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGVtb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWxlbW9uXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWxlbW9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tbGVtb24uLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLWxlbW9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWxlbW9uLi1wcmltYXJ5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWxlbW9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZlYTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1saW1lXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1saW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1saW1lXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLWxpbWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1saW1lLi1wcmltYXJ5XCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1saW1lLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjYWVlNDA2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLWxpbWUuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tbGltZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2FlZTQwNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290IEJ1dHRvbi4tb3JhbmdlXCIsXCIubnMtcm9vdCAubnQtYnV0dG9uLi1vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLW9yYW5nZVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1vcmFuZ2UuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLW9yYW5nZS4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y1N2MwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLXJvb3QgQnV0dG9uLi1vcmFuZ2UuLXByaW1hcnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tb3JhbmdlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjU3YzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1wdXJwbGVcIixcIi5ucy1yb290IC5udC1idXR0b24uLXB1cnBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tcHVycGxlXCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXB1cnBsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXB1cnBsZS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tcHVycGxlLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjODEzMGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXB1cnBsZS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1wdXJwbGUuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXJ1YnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLXJ1YnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXJ1YnlcIixcIi5ucy1kYXJrLm5zLXJvb3QgLm50LWJ1dHRvbi4tcnVieVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXJ1YnkuLXByaW1hcnlcIixcIi5ucy1yb290IC5udC1idXR0b24uLXJ1YnkuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZjE3NDRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tcnVieS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1ydWJ5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLXJvb3QgQnV0dG9uLi1za3lcIixcIi5ucy1yb290IC5udC1idXR0b24uLXNreVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1yb290IEJ1dHRvbi4tc2t5XCIsXCIubnMtZGFyay5ucy1yb290IC5udC1idXR0b24uLXNreVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtcm9vdCBCdXR0b24uLXNreS4tcHJpbWFyeVwiLFwiLm5zLXJvb3QgLm50LWJ1dHRvbi4tc2t5Li1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtcm9vdCBCdXR0b24uLXNreS4tcHJpbWFyeVwiLFwiLm5zLWRhcmsubnMtcm9vdCAubnQtYnV0dG9uLi1za3kuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGcmFtZVwiLFwiLm50LWZyYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBGcmFtZVwiLFwiLm5zLWRhcmsgLm50LWZyYW1lXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQYWdlXCIsXCIubnQtcGFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUGFnZVwiLFwiLm5zLWRhcmsgLm50LXBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpdml0eUluZGljYXRvclwiLFwiLm50LWFjdGl2aXR5LWluZGljYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNsaWRlclwiLFwiLm50LXNsaWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwIDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTbGlkZXJcIixcIi5ucy1pb3MgLm50LXNsaWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEwIDE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5udC1zbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTBlMGUwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgU3dpdGNoXCIsXCIubnMtYW5kcm9pZCAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTQgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTZlNmU2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtYW5kcm9pZCBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0YTRhNGFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFN3aXRjaFwiLFwiLm5zLWlvcyAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1pb3MgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtaW9zIFN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiVmlld1wiLFwiLm50LXRhYi12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLXRleHQtZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImNhcGl0YWxpemVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCb3R0b21OYXZpZ2F0aW9uXCIsXCIubnQtYm90dG9tLW5hdmlnYXRpb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3XCIsXCJSYWRMaXN0Vmlld1wiLFwiLm50LWxpc3Qtdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IFN0YWNrTGF5b3V0XCIsXCJSYWRMaXN0VmlldyBTdGFja0xheW91dFwiLFwiLm50LWxpc3QtdmlldyBTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgPiAqXCIsXCJSYWRMaXN0VmlldyA+ICpcIixcIi5udC1saXN0LXZpZXcgPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgPiAqIExhYmVsXCIsXCJSYWRMaXN0VmlldyA+ICogTGFiZWxcIixcIi5udC1saXN0LXZpZXcgPiAqIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3ID4gKiBJbWFnZVwiLFwiUmFkTGlzdFZpZXcgPiAqIEltYWdlXCIsXCIubnQtbGlzdC12aWV3ID4gKiBJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInN0cmV0Y2hcIixcInZhbHVlXCI6XCJhc3BlY3RGaXRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAudGh1bWJcIixcIkxpc3RWaWV3IC4tdGh1bWJcIixcIlJhZExpc3RWaWV3IC50aHVtYlwiLFwiUmFkTGlzdFZpZXcgLi10aHVtYlwiLFwiLm50LWxpc3QtdmlldyAudGh1bWJcIixcIi5udC1saXN0LXZpZXcgLi10aHVtYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInN0cmV0Y2hcIixcInZhbHVlXCI6XCJmaWxsXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLWhlaWdodFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3Li1zaW5nbGUtY29sLWNhcmRzIEltYWdlXCIsXCJSYWRMaXN0Vmlldy4tc2luZ2xlLWNvbC1jYXJkcyBJbWFnZVwiLFwiLm50LWxpc3Qtdmlldy4tc2luZ2xlLWNvbC1jYXJkcyBJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjIwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3Li10d28tY29sLWNhcmRzIEltYWdlXCIsXCJSYWRMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyBJbWFnZVwiLFwiLm50LWxpc3Qtdmlldy4tdHdvLWNvbC1jYXJkcyBJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgTGlzdFZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dFwiLFwiLm5zLWlvcyBSYWRMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0XCIsXCIubnMtaW9zIC5udC1saXN0LXZpZXcuLXR3by1jb2wtY2FyZHMgPiBTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBMaXN0Vmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0IEltYWdlXCIsXCIubnMtaW9zIFJhZExpc3RWaWV3Li10d28tY29sLWNhcmRzID4gU3RhY2tMYXlvdXQgSW1hZ2VcIixcIi5ucy1pb3MgLm50LWxpc3Qtdmlldy4tdHdvLWNvbC1jYXJkcyA+IFN0YWNrTGF5b3V0IEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlldy4tdHdvLWxpbmVzLWltYWdlIEltYWdlXCIsXCJMaXN0Vmlldy4tc2luZ2xlLWxpbmUtaW1hZ2UgSW1hZ2VcIixcIlJhZExpc3RWaWV3Li10d28tbGluZXMtaW1hZ2UgSW1hZ2VcIixcIlJhZExpc3RWaWV3Li1zaW5nbGUtbGluZS1pbWFnZSBJbWFnZVwiLFwiLm50LWxpc3Qtdmlldy4tdHdvLWxpbmVzLWltYWdlIEltYWdlXCIsXCIubnQtbGlzdC12aWV3Li1zaW5nbGUtbGluZS1pbWFnZSBJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI2MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiUmFkTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIi5udC1saXN0LXZpZXcgLi1zZXBhcmF0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCIubnQtbGlzdC12aWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwIDEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIi5ucy1pb3MgUmFkTGlzdFZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCIsXCIubnMtaW9zIC5udC1saXN0LXZpZXcgLm50LWxpc3Qtdmlld19fZGVsZXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgMTAgMCAyNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCJSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwiY2FwaXRhbGl6ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1pY29uXCIsXCJSYWRMaXN0VmlldyAubnQtaWNvblwiLFwiLm50LWxpc3QtdmlldyAubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI1NlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkTGlzdFZpZXcgPiBTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkTGlzdFZpZXcgPiAqID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwidG9wXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjM1IDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyID4gTGFiZWxcIixcIi5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjc0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI3NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1mb290bm90ZVwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXItZm9vdG5vdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiLjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlciA+IExhYmVsXCIsXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXIgPiBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXItaW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLi1sZWZ0ID4gTGFiZWxcIixcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyLi1sZWZ0IC5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXIuLWxlZnQgPiBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXIuLWxlZnQgLm50LWRyYXdlcl9faGVhZGVyLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbVwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQ4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcmllbnRhdGlvblwiLFwidmFsdWVcIjpcImhvcml6b250YWxcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbSBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtIC5udC1pY29uXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbSAubnQtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXJcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzFlMWUxZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXIgTGFiZWxcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXIgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybVwiLFwiLm50LWZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIidSb2JvdG8gUmVndWxhcidcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTYgMCAxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgRm9ybVwiLFwiLm5zLWlvcyAubnQtZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ1NGIFVJIFRleHQgUmVndWxhcicsIHN5c3RlbVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLi1jZW50ZXJcIixcIi5udC1mb3JtIC4tY2VudGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm0gLm50LWZvcm1fX29yLXNlcGFyYXRvclwiLFwiLm50LWZvcm0gLm50LWZvcm1fX29yLXNlcGFyYXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwIDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX19saW5rXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fbGlua1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIEZvcm0gLm50LWZvcm1fX2xpbmtcIixcIi5ucy1kYXJrIC5udC1mb3JtIC5udC1mb3JtX19saW5rXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fdGl0bGVcIixcIi5udC1mb3JtIC5udC1mb3JtX190aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRm9ybSAubnQtZm9ybV9fbG9nb1wiLFwiLm50LWZvcm0gLm50LWZvcm1fX2xvZ29cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIyMCAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI1MCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX192YWxpZGF0aW9uLW1lc3NhZ2VcIixcIi5udC1mb3JtIC5udC1mb3JtX192YWxpZGF0aW9uLW1lc3NhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxIDAgMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX19mb290ZXJcIixcIi5udC1mb3JtIC5udC1mb3JtX19mb290ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGb3JtIC5udC1mb3JtX19mb290ZXIgQnV0dG9uXCIsXCIubnQtZm9ybSAubnQtZm9ybV9fZm9vdGVyIEJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZvcm1baXNFbmFibGVkPWZhbHNlXSAqXCIsXCIubnQtZm9ybVtpc0VuYWJsZWQ9ZmFsc2VdICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEZvcm0gVmFsaWRhdGlvbiBzdHlsaW5nIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlldy5uZy12YWxpZFwiLFwiVGV4dEZpZWxkLm5nLXZhbGlkXCIsXCJQaWNrZXJGaWVsZC5uZy12YWxpZFwiLFwiRGF0ZVBpY2tlckZpZWxkLm5nLXZhbGlkXCIsXCJUaW1lUGlja2VyRmllbGQubmctdmFsaWRcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3Lm5nLXZhbGlkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXcubmctaW52YWxpZC5uZy1kaXJ0eVwiLFwiVGV4dEZpZWxkLm5nLWludmFsaWQubmctZGlydHlcIixcIlBpY2tlckZpZWxkLm5nLWludmFsaWQubmctZGlydHlcIixcIkRhdGVQaWNrZXJGaWVsZC5uZy1pbnZhbGlkLm5nLWRpcnR5XCIsXCJUaW1lUGlja2VyRmllbGQubmctaW52YWxpZC5uZy1kaXJ0eVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcubmctaW52YWxpZC5uZy1kaXJ0eVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBGb3JtIGZpZWxkcyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXdcIixcIlRleHRGaWVsZFwiLFwiUGlja2VyRmllbGRcIixcIkRhdGVQaWNrZXJGaWVsZFwiLFwiVGltZVBpY2tlckZpZWxkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjAgMCAxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4IDAgNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjUgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlldy4tcm91bmRlZFwiLFwiVGV4dFZpZXcuLWJvcmRlclwiLFwiVGV4dEZpZWxkLi1yb3VuZGVkXCIsXCJUZXh0RmllbGQuLWJvcmRlclwiLFwiUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIlBpY2tlckZpZWxkLi1ib3JkZXJcIixcIkRhdGVQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiRGF0ZVBpY2tlckZpZWxkLi1ib3JkZXJcIixcIlRpbWVQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiVGltZVBpY2tlckZpZWxkLi1ib3JkZXJcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzLi1yb3VuZGVkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkcy4tYm9yZGVyXCIsXCJEYXRhRm9ybUVkaXRvckNvcmUuLXJvdW5kZWRcIixcIkRhdGFGb3JtRWRpdG9yQ29yZS4tYm9yZGVyXCIsXCJSYWRBdXRvQ29tcGxldGVUZXh0Vmlldy4tcm91bmRlZFwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcuLWJvcmRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMiAxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3Li1yb3VuZGVkXCIsXCJUZXh0RmllbGQuLXJvdW5kZWRcIixcIlBpY2tlckZpZWxkLi1yb3VuZGVkXCIsXCJEYXRlUGlja2VyRmllbGQuLXJvdW5kZWRcIixcIlRpbWVQaWNrZXJGaWVsZC4tcm91bmRlZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHMuLXJvdW5kZWRcIixcIkRhdGFGb3JtRWRpdG9yQ29yZS4tcm91bmRlZFwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcuLXJvdW5kZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiLFwiVGV4dEZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIlBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIkRhdGVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJUaW1lUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHNbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0YUZvcm1FZGl0b3JDb3JlW2lzRW5hYmxlZD1mYWxzZV1cIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGFiZWxcIixcIkRhdGFGb3JtRWRpdG9yTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMiAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtaW4taGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdbZGlzcGxheU1vZGU9VG9rZW5zXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI0IDAgOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFRva2VuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIFRva2VuQ2xlYXJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNTAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIi42XCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIERhdGUgUGlja2VyIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJGaWVsZFwiLFwiRGF0ZVBpY2tlckZpZWxkXCIsXCJUaW1lUGlja2VyRmllbGRcIixcIkRhdGVUaW1lUGlja2VyRmllbGRzXCIsXCJEYXRhRm9ybUVkaXRvckNvcmVcIixcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1yZXBlYXRcIixcInZhbHVlXCI6XCJuby1yZXBlYXRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwicmlnaHQgY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBQaWNrZXJGaWVsZFwiLFwiLm5zLWlvc1xcbiAgRGF0ZVBpY2tlckZpZWxkXCIsXCIubnMtaW9zXFxuICBUaW1lUGlja2VyRmllbGRcIixcIi5ucy1pb3NcXG4gIERhdGVUaW1lUGlja2VyRmllbGRzXCIsXCIubnMtaW9zXFxuICBEYXRhRm9ybUVkaXRvckNvcmVcIixcIi5ucy1pb3NcXG4gIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjggMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQcm9wZXJ0eUVkaXRvclt0eXBlPSdEYXRlJ10gRGF0YUZvcm1FZGl0b3JDb3JlXCIsXCJEYXRlUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQXdCQU1BQUFCOUlFQytBQUFBRDFCTVZFVkhjRXdBQUFBQUFBQUFBQUFBQUFEVHJBai9BQUFBQkhSU1RsTUF3QkFnVTVEQ1F3QUFBRmRKUkVGVVNNZGpZQ0FWdUxpNG9ESG9wNVJKeEFVRE9DcGdWY3JvZ2dVSVlGWEtnazJwTXc2bENoaHVkWEhBb1pTQlZrclJ3MjZFS2NVQzZLdDBOQW9Ha1ZJV2FGU05LaDI1U2dkN1FVUkNaVVJDRlVjTEFBQzJJMmhFRUNCWVBnQUFBQUJKUlU1RXJrSmdnZz09XFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgVGltZSBQaWNrZXIgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlByb3BlcnR5RWRpdG9yW3R5cGU9J1RpbWUnXSBEYXRhRm9ybUVkaXRvckNvcmVcIixcIlRpbWVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFMVkJNVkVWSGNFd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDdHRsNm5BQUFBRG5SU1RsTUFZT0JBd0NBUTBGQ0FjUEN3b0Vad2Roc0FBQUUyU1VSQlZFakhZMkFZTElCMVRkMjdkODlQQlJCV3lRaFVDQUxQQlFpcTFIc0hCWThJcUdYMWUvZnV5V1JqWTBzUWpkOE4zZS9lS1NhQUdHeEM3OTd0d0dzOVVDV01EVlNMendseTc5NG13TmhzOTk0OXhLMlNBOFVnb0JVTk9KVkdvNW9qOTI0clRxVitFRVA1M3NHTWZZTGJVMjhaa0pVeTNNUHBNYVozYXFoS2s5NHA0UFMvQUtwU1JweGhVUGVJQVZVcGc5NXpISkVLTXdPaFZPNGQ5c2psZXZjTVhXbmV1d1ZZbGZLOGMwQlh5dkx1QUk0QW1JQ3VsUE5kQVZhbGZPOE0wSlZ5dkh0QXJGSm1xaXFGQUNvcGJTQldLVHNzc0JBQVYyREJvd0FCY0VVQlBHSVJBRmZFc21JbU9WekpCWjRJRVFCWElvUW5iYVFjOUpCQWhvRUQzQmtHbGczaEFIYzJoR1Z1aE5ZbjFDZ3lTQ2lJU0NqZVNDazBTU2lLSVFYOERHUGpUc0lGUEFuVkJpbVZFU2xWM0lBQkFLRGt6NWpISWNUb0FBQUFBRWxGVGtTdVFtQ0NcXFwiKVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBEYXRlL1RpbWUgUGlja2VyIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRlVGltZVBpY2tlckZpZWxkc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLZ0FBQUF3QkFNQUFBQjNVQ3lwQUFBQUxWQk1WRVZIY0V3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN0dGw2bkFBQUFEblJTVGxNQVFHRGd3QkFnMEZDQWNQQ3dvTTlJZStrQUFBR2NTVVJCVkVqSDVaZS9Uc013RU1aRDJwUVdWUlVadTBWaWp4QVNhOFVUVkpYWVVYWVduaURxaWxoZ1krUUJtQkVqTXc5UnRUUWxVNzluSUNSeXJEanh4WWtkcVlodmlZZTdYODcvN3M2V2xRcUFNRENnUHdGMTVpZ3BXaEFPZzljUWlEOERDdHBIaGE3azluYVltY1FlQVoxVVFiL2x6Qm16MlhvVWRGRmFVMnlrYzA4V0szcHkzZW52TnlDZ1ZnUG9BM0NSTHJoekJyeWJnZG9KazQwVHFrZEN4Uk1tZy9yWTV3ZkRXZUhMQkhSWUNDNEplMmtBZWx1TXpjZWJBZWc4QzVTNTJJajBvVGIyUlplVmJLc2FRSHU0TExwYzQ3ekJqZHBJOXQ0clFtM1ovamVBaGx0eGNyTllGenBnY1hHb2owQnpUVSt3RTExdThLSUpIYk9NeUYzNitOQ0U5dkFvdW93azI2OE9uZUJVZEJsaWJSNTZkUERRVEFjTVhiYUJadFpyQ2ZTWUhTbXVFZTQwb2VOeU82QnkrR2xvZmsyNVZLNHBEUjJVRTUxS1FxR2hlZXJqa3FjK1phZ3ZWZzhpU1N0RFdUbkpSWlFUWlNncmZMbVVDbDhObEpWby9oT1ZFbDBIYmRWTTFFRmJ0VDExMEU0YXRHNWF5VVpOcnpJMGJjK2ZYZmUrcmoydjBFN3pJZEhKazZlVHg1bmx1Q1VGMWovUkR4UVFQdzNpOU4rekFBQUFBRWxGVGtTdVFtQ0NcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCI1NiAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGVUaW1lUGlja2VyRmllbGRzIC5pbnB1dFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHMgRGF0ZVBpY2tlckZpZWxkXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkcyBUaW1lUGlja2VyRmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwibm9uZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHMgLmlucHV0XCIsXCIubnMtZGFya1xcbiAgICBEYXRlVGltZVBpY2tlckZpZWxkcyBEYXRlUGlja2VyRmllbGRcIixcIi5ucy1kYXJrXFxuICAgIERhdGVUaW1lUGlja2VyRmllbGRzIFRpbWVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJub25lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0ZVRpbWVQaWNrZXJGaWVsZHMgVGltZVBpY2tlckZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCItMzBcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGlja2VyIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFHRkJNVkVWSGNFd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJvQXRUTEFBQUFCM1JTVGxNQW9QQXcwQkFnQ0VKVTR3QUFBRXBKUkVGVVNNZGpZQmdGZ3dVd0NoQ3RWTHlRYUVQTHk0azFOcW04bkZoam1kV0pOOVpvMU5naFppd0pTb2wzd0tpaEEyb29DWms3aFBqMHgrcE9kRUhFRUVKODhUWUtCZ29BQUFDNUpSZzQ5cklXQUFBQUFFbEZUa1N1UW1DQ1xcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZS5pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UgTGlzdFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZXBhcmF0b3ItY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UgTGlzdFZpZXcgPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMCAxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20td2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUFZVUV4VVJVZHdUUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3gxTFZiNEFBQUFIZEZKT1V3Q2c4RERRRUNBSVFsVGpBQUFBU2tsRVFWUkl4Mk5nR0FXREJUQUtFSzFVdkpCb1E4dkxpVFUycWJ5Y1dHT1oxWWszMW1qVTJDRm1MQWxLaVhmQXFLRURhaWdKbVR1RStQVEg2azUwUWNRUVFuenhOZ29HQ2dBQUFMa2xHRGoyc2hZQUFBQUFTVVZPUks1Q1lJST1cXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIERhdGVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUFQVUV4VVJVZHdUUC8vLy8vLy8vLy8vLy8vL3hQZ01Sb0FBQUFFZEZKT1V3REFFQ0JUa01KREFBQUFWMGxFUVZSSXgyTmdJQlc0dUxpZ01laW5sRW5FQlFNNEttQlZ5dWlDQlFoZ1ZjcUNUYWt6RHFVS0dHNTFjY0NobElGV1N0SERib1FweFFMb3EzUTBDZ2FSVWhab1ZJMHFIYmxLQjN0QlJFSmxSRUlWUndzQUFMWWphRVFRSUZnK0FBQUFBRWxGVGtTdVFtQ0NcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRpbWVQaWNrZXJGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBd0JBTUFBQUI5SUVDK0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUF0VUV4VVJVZHdUUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy84MWUzUUlBQUFBT2RGSk9Vd0JnNEVEQUlCRFFVSER3c0tDQTRpc3ZKQUFBQVRaSlJFRlVTTWRqWUJnc2dIVjIzYnQzejNjR0VGYkpDRlFJQXM4RkNLclVld2NGandpb1pmVjc5KzdKWldOald4Q04zdzFkNzk0cEpvQVliRUx2M3EzQWF6MVFKWXdOVkl2UENYTHYzaVRBMkd6bjNqM0VyWklEeFNDZ0ZRMDRsVWFobWlQM2JpbE9wWDRRUS9uZXdZeDlndHRUYnhpUWxUS2N3K2t4cG5kcXFFcVQzaW5nOUw4QXFsSkduR0ZROTRnQlZTbUQzbk1ja1FvekE2RlU3aDMyeU9WODl3eGRhZDY3Q1ZpVmNyOXpRRmZLOG00RGpnQzRnSzZVOTEwQlZxVjg3d3pRbFhLOGUwQ3NVbWFxS29VQUtpbHRJRllwT3l5d0VBQlhZTUdqQUFGd1JRRThZaEVBVjhTeVlpWTVYTWtGbmdnUkFGY2loQ2R0cEJ6MGtFQ0dnUVBjR1FhV0RlRUFkemFFWlc2RTFpZlVLREpJS0loSUtONUlLVFJKS0lvaEJmd05ZK05ld2dVOENkVUdLWlVSS1ZYY2dBRUFxMUxQbUYxcURld0FBQUFBU1VWT1JLNUNZSUk9XFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS2dBQUFBd0JBTUFBQUIzVUN5cEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUF0VUV4VVJVZHdUUC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy84MWUzUUlBQUFBT2RGSk9Vd0JBWU9EQUVDRFFVSER3c0tDQWF4TWkxZ0FBQVp4SlJFRlVTTWZsbDg5S3cwQVF4bVBhMUVwcE1ROVFDSGdQSW5ndFBrRXBlSmVjUGZrRW9XZEI4TzVkUEhyMUpZcmVQTFkyTlpmeVBZTXhZYk5razUxc3NodW8rRjJ5aDVsZlp2L056RnBXS2dEQ3dJRCtCTlNabzZSb1FUZ01ua0lnZmdzb2FCOFZ1cExiMjJGbUVuc0VkRklGL1pZelo4eG02MUhRUldsTnNaSE9QVm1zNk1OMXA3L2ZnSUJhRGFEM3dFVzY0TTRaOEdJR2FpZE1OazZvSGdrVlQ1Z002bU9mSHd4bmhTOFQwR0VodUNUc3BRSG9iVEUySDg4R29QTXNVT1ppSTlLSDJ0Z1hYVmF5cldvQTdlR3k2SEtOOHdZM2FpUFplNjhJdFdYNzN3QWFic1hKeldKZDZJREZ4YUUrQXMwMVBjRk9kTG5Cb3laMHhESWlkK25qVlJQYXc3dm9NcFpzdnpwMGdsUFJaWWkxZWVqUndVTXpIVEIwMlFhYVdhOGwwR04ycExqR3VOT0Vqc3J0Z01yaHA2SDVOZVZTdWFZMGRGQk9kQ29KaFlibXFZOUxudnFVb2I1WVBZZ2tyUXhsNVNRWFVVNlVvYXp3NVZJcWZEVlFWcUw1VDFSS2RCMjBWVE5SQjIzVjl0UkJPMm5RdW1rbEd6Vzl5dEMwUGY5MDNZZTY5cnhDTzgySFJDZFBuazRlWjViamxoUlkvMFEvSG40L0RmWFNuY1lBQUFBQVNVVk9SSzVDWUlJPVxcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIERhdGVQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgVGltZVBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkc1wiLFwiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjbGFzc1wiLFwidmFsdWVcIjpcIm5zLWRhcmtcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWREYXRhRm9ybSBQcm9wZXJ0eUVkaXRvclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1IDAgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1pbnB1dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEwIDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJEYXRhRm9ybUVkaXRvckxhYmVsXCIsXCIubnQtaW5wdXQgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjYmFiYWJhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRGF0YUZvcm1FZGl0b3JMYWJlbFwiLFwiLm50LWlucHV0ID4gTGFiZWxcIixcIi5udC1pbnB1dCA+IFRleHRWaWV3XCIsXCI+IFRleHRGaWVsZFwiLFwiPiBQaWNrZXJGaWVsZFwiLFwiPiBEYXRlUGlja2VyRmllbGRcIixcIj4gVGltZVBpY2tlckZpZWxkXCIsXCI+IERhdGVUaW1lUGlja2VyRmllbGRzXCIsXCI+IFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1pbnB1dC4tc2lkZXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwIDAgMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnQtaW5wdXQuLXNpZGVzID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI1IDE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm50LWlucHV0ID4gLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiLTE1IDEwIDAgMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiLFwiLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgQWN0aW9uQmFyXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwic3RyZXRjaFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJzdHJldGNoXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWxhbmRzY2FwZS5ucy1pb3MgQWN0aW9uQmFyXCIsXCIubnMtbGFuZHNjYXBlLm5zLWlvcyAubnQtYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciBMYWJlbFwiLFwiQWN0aW9uQmFyIEJ1dHRvblwiLFwiQWN0aW9uQmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCIsXCIubnQtYWN0aW9uLWJhciBMYWJlbFwiLFwiLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuZHJvaWQtZWxldmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyIDEwIDEyIDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWluLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiYXV0b1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcIm5vbmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciBMYWJlbDphY3RpdmVcIixcIkFjdGlvbkJhciBCdXR0b246YWN0aXZlXCIsXCJBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBMYWJlbDphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIEJ1dHRvbjphY3RpdmVcIixcIi5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIuN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IExhYmVsXCIsXCIubnQtYWN0aW9uLWJhciA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiBBY3Rpb25CYXJcIixcIi5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IC5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkX18xOS5ucy1zdGF0dXNiYXItdHJhbnNwYXJlbnQgUGFnZSA+IEFjdGlvbkJhclwiLFwiLm5zLW1vZGFsLm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gQWN0aW9uQmFyXCIsXCIubnMtYW5kcm9pZF9fMTkubnMtc3RhdHVzYmFyLXRyYW5zcGFyZW50IFBhZ2UgPiAubnQtYWN0aW9uLWJhclwiLFwiLm5zLW1vZGFsLm5zLXN0YXR1c2Jhci10cmFuc3BhcmVudCBQYWdlID4gLm50LWFjdGlvbi1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCBBY3Rpb25CYXIgLm50LWJ1dHRvblwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciA+IExhYmVsXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gTGFiZWxcIixcIkFjdGlvbkJhciA+IEdyaWRMYXlvdXQgTGFiZWxcIixcIi5udC1hY3Rpb24tYmFyID4gTGFiZWxcIixcIi5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dCBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gR3JpZExheW91dFwiLFwiLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IEdyaWRMYXlvdXQgPiBTdGFja0xheW91dFwiLFwiLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0ID4gU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhvcml6b250YWwtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyID4gR3JpZExheW91dCBCdXR0b25cIixcIi5udC1hY3Rpb24tYmFyID4gR3JpZExheW91dCBCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTIgMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJob3Jpem9udGFsLWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciA+IEdyaWRMYXlvdXQgW2NvbD1cXFwiMlxcXCJdXCIsXCIubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXQgW2NvbD1cXFwiMlxcXCJdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgQWN0aW9uQmFyID4gR3JpZExheW91dFwiLFwiLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgPiBHcmlkTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjAgNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciA+IEdyaWRMYXlvdXQgQnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciA+IEdyaWRMYXlvdXQgQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyIDE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiFcXG4gKiBOYXRpdmVTY3JpcHQgVGhlbWUgX19WRVJTSU9OX18gKGh0dHBzOi8vbmF0aXZlc2NyaXB0Lm9yZylcXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE2IFRoZSBUaGVtZSBBdXRob3JzXFxuICogQ29weXJpZ2h0IDIwMTYtMjAxOSBQcm9ncmVzcyBTb2Z0d2FyZVxcbiAqIExpY2Vuc2VkIHVuZGVyIEFwYWNoZSAyLjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvdGhlbWUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gXCJ9LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwiZW1wdHlcIixcImtleWZyYW1lc1wiOltdfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRm9ybXMgXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIipcXG4gKiBCbHVlIHZhcmlhYmxlIG92ZXJyaWRlc1xcbiAqXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiLFwiLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA0MzYzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uXCIsXCIubnMtZGFyayAubnQtYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uOmFjdGl2ZVwiLFwiQnV0dG9uLi1hY3RpdmVcIixcIi5udC1idXR0b246YWN0aXZlXCIsXCIubnQtYnV0dG9uLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDQzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b246YWN0aXZlXCIsXCIubnMtZGFyayBCdXR0b24uLWFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLW91dGxpbmVcIixcIi5udC1idXR0b24uLW91dGxpbmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b24uLW91dGxpbmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLW91dGxpbmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcIi1oaWdodGxpZ2h0LWxpZ2h0XCIsXCJrZXlmcmFtZXNcIjpbe1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiMTAwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjJmMmYyXCJ9XX1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcIi1oaWdodGxpZ2h0LWRhcmtcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIxMDAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyMzIzMjNcIn1dfV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tb3V0bGluZTphY3RpdmVcIixcIkJ1dHRvbi4tb3V0bGluZS4tYWN0aXZlXCIsXCIubnQtYnV0dG9uLi1vdXRsaW5lOmFjdGl2ZVwiLFwiLm50LWJ1dHRvbi4tb3V0bGluZS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uXCIsXCJ2YWx1ZVwiOlwiLWhpZ2h0bGlnaHQtbGlnaHQgMC4zcyBlYXNlLW91dCBmb3J3YXJkc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjJmMmYyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uLi1vdXRsaW5lOmFjdGl2ZVwiLFwiLm5zLWRhcmsgQnV0dG9uLi1vdXRsaW5lLi1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLW91dGxpbmU6YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1vdXRsaW5lLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb25cIixcInZhbHVlXCI6XCItaGlnaHRsaWdodC1kYXJrIDAuM3MgZWFzZS1vdXQgZm9yd2FyZHNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIzMjMyM1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiLFwiLm50LWJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBCdXR0b24uLXByaW1hcnlcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDIwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnk6YWN0aXZlXCIsXCJCdXR0b24uLXByaW1hcnkuLWFjdGl2ZVwiLFwiLm50LWJ1dHRvbi4tcHJpbWFyeTphY3RpdmVcIixcIi5udC1idXR0b24uLXByaW1hcnkuLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBhYWZjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQnV0dG9uLi1wcmltYXJ5OmFjdGl2ZVwiLFwiLm5zLWRhcmsgQnV0dG9uLi1wcmltYXJ5Li1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1idXR0b24uLXByaW1hcnk6YWN0aXZlXCIsXCIubnMtZGFyayAubnQtYnV0dG9uLi1wcmltYXJ5Li1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzk2ZGRmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGl2aXR5SW5kaWNhdG9yXCIsXCIubnQtYWN0aXZpdHktaW5kaWNhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQWN0aXZpdHlJbmRpY2F0b3JcIixcIi5ucy1kYXJrIC5udC1hY3Rpdml0eS1pbmRpY2F0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTZWdtZW50ZWRCYXJcIixcIi5udC1zZWdtZW50ZWQtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzk2ZGRmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFNlZ21lbnRlZEJhclwiLFwiLm5zLWRhcmsgLm50LXNlZ21lbnRlZC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwYWFmY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1pb3MgU2VnbWVudGVkQmFyXCIsXCIubnMtaW9zIC5udC1zZWdtZW50ZWQtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMCAxNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlByb2dyZXNzXCIsXCIubnQtcHJvZ3Jlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBQcm9ncmVzc1wiLFwiLm5zLWRhcmsgLm50LXByb2dyZXNzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjEpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU2xpZGVyXCIsXCIubnQtc2xpZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBTbGlkZXJcIixcIi5ucy1kYXJrIC5udC1zbGlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtYW5kcm9pZCBTbGlkZXJbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm50LXNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtYW5kcm9pZCAubnQtc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlNlYXJjaEJhclwiLFwiLm50LXNlYXJjaC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtZmllbGQtaGludC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1maWVsZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBTZWFyY2hCYXJcIixcIi5ucy1kYXJrIC5udC1zZWFyY2gtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1maWVsZC1oaW50LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2IzYjNiM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtZmllbGQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWFuZHJvaWQgU3dpdGNoXCIsXCIubnMtYW5kcm9pZCAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjY2NjY2NjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNjY2NjY2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1hbmRyb2lkIFN3aXRjaFwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjM2MzYzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM2MzYzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBTd2l0Y2hbY2hlY2tlZD10cnVlXVwiLFwiLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtjaGVja2VkPXRydWVdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtYW5kcm9pZCBTd2l0Y2hbY2hlY2tlZD10cnVlXVwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtYW5kcm9pZCBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWFuZHJvaWQgLm50LXN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZTZlNmU2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsubnMtYW5kcm9pZCBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0YTRhNGFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtaW9zIFN3aXRjaFwiLFwiLm5zLWlvcyAubnQtc3dpdGNoXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvZmYtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNlNmU2ZTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1pb3MgU3dpdGNoXCIsXCIubnMtZGFyay5ucy1pb3MgLm50LXN3aXRjaFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib2ZmLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjNGE0YTRhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBTd2l0Y2hbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWlvcyAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1pb3MgU3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuNClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJWaWV3XCIsXCIubnQtdGFiLXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZWxlY3RlZC10YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiNhYmQ1ZTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLXNlbGVjdGVkLXRhYi1oaWdobGlnaHQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGFiVmlld1wiLFwiLm5zLWRhcmsgLm50LXRhYi12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwic2VsZWN0ZWQtdGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjYmJkYWU5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5kcm9pZC1zZWxlY3RlZC10YWItaGlnaGxpZ2h0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlZpZXcubnMtZGFya1wiLFwiLm50LXRhYi12aWV3Lm5zLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZWxlY3RlZC10YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiNiYmRhZTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLXNlbGVjdGVkLXRhYi1oaWdobGlnaHQtY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGFiU3RyaXBcIixcIi5udC10YWItc3RyaXBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoaWdobGlnaHQtY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmMmYyZjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUYWJTdHJpcFwiLFwiLm5zLWRhcmsgLm50LXRhYi1zdHJpcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhpZ2hsaWdodC1jb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzNhM2EzYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRhYlN0cmlwSXRlbVwiLFwiLm50LXRhYi1zdHJpcF9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRhYlN0cmlwSXRlbVwiLFwiLm5zLWRhcmsgLm50LXRhYi1zdHJpcF9faXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJTdHJpcEl0ZW06YWN0aXZlXCIsXCJUYWJTdHJpcEl0ZW06YWN0aXZlIExhYmVsXCIsXCIubnQtdGFiLXN0cmlwX19pdGVtOmFjdGl2ZVwiLFwiLm50LXRhYi1zdHJpcF9faXRlbTphY3RpdmUgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUYWJTdHJpcEl0ZW06YWN0aXZlXCIsXCIubnMtZGFyayBUYWJTdHJpcEl0ZW06YWN0aXZlIExhYmVsXCIsXCIubnMtZGFyayAubnQtdGFiLXN0cmlwX19pdGVtOmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LXRhYi1zdHJpcF9faXRlbTphY3RpdmUgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUYWJDb250ZW50SXRlbVwiLFwiLm50LXRhYi1jb250ZW50X19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBUYWJDb250ZW50SXRlbVwiLFwiLm5zLWRhcmsgLm50LXRhYi1jb250ZW50X19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlld1wiLFwiUmFkTGlzdFZpZXdcIixcIi5udC1saXN0LXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJpdGVtLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xNSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJzZXBhcmF0b3ItY29sb3JcIixcInZhbHVlXCI6XCIjY2NjY2NjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXdcIixcIi5ucy1kYXJrIFJhZExpc3RWaWV3XCIsXCIubnMtZGFyayAubnQtbGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaXRlbS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMTUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgPiAqLmFjdGl2ZVwiLFwiTGlzdFZpZXcgPiAqOmhpZ2hsaWdodGVkXCIsXCJSYWRMaXN0VmlldyA+ICouYWN0aXZlXCIsXCJSYWRMaXN0VmlldyA+ICo6aGlnaGxpZ2h0ZWRcIixcIi5udC1saXN0LXZpZXcgPiAqLmFjdGl2ZVwiLFwiLm50LWxpc3QtdmlldyA+ICo6aGlnaGxpZ2h0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMTUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgTGlzdFZpZXcgPiAqLmFjdGl2ZVwiLFwiLm5zLWRhcmsgTGlzdFZpZXcgPiAqOmhpZ2hsaWdodGVkXCIsXCIubnMtZGFyayBSYWRMaXN0VmlldyA+ICouYWN0aXZlXCIsXCIubnMtZGFyayBSYWRMaXN0VmlldyA+ICo6aGlnaGxpZ2h0ZWRcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXcgPiAqLmFjdGl2ZVwiLFwiLm5zLWRhcmsgLm50LWxpc3QtdmlldyA+ICo6aGlnaGxpZ2h0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMTUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIlJhZExpc3RWaWV3IC4tc2VwYXJhdG9yXCIsXCIubnQtbGlzdC12aWV3IC4tc2VwYXJhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwidmFsdWVcIjpcIiNjY2NjY2NcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0VmlldyAuLXNlcGFyYXRvclwiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXcgLi1zZXBhcmF0b3JcIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXcgLi1zZXBhcmF0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzNjM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3XCIsXCIubnMtZGFyayBSYWRMaXN0Vmlld1wiLFwiLm5zLWRhcmsgLm50LWxpc3Qtdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInNlcGFyYXRvci1jb2xvclwiLFwidmFsdWVcIjpcIiM2MzYzNjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIixcIlJhZExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZVwiLFwiLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Q1MDAwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCJSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIExpc3RWaWV3IC5udC1saXN0LXZpZXdfX2RlbGV0ZSA+IExhYmVsXCIsXCIubnMtZGFyayBSYWRMaXN0VmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiLFwiLm5zLWRhcmsgLm50LWxpc3QtdmlldyAubnQtbGlzdC12aWV3X19kZWxldGUgPiBMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0VmlldyAubnQtaWNvblwiLFwiUmFkTGlzdFZpZXcgLm50LWljb25cIixcIi5udC1saXN0LXZpZXcgLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDY2OThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBMaXN0VmlldyAubnQtaWNvblwiLFwiLm5zLWRhcmsgUmFkTGlzdFZpZXcgLm50LWljb25cIixcIi5ucy1kYXJrIC5udC1saXN0LXZpZXcgLm50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2M2NkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2hlYWRlclwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIxM2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgPiAqXCIsXCJSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2NvbnRlbnRcIixcIi5udC1kcmF3ZXIgPiAqXCIsXCIubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2NvbnRlbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjE1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiLFwiLm50LWRyYXdlciAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkIExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA4OGM5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkU2lkZURyYXdlciAubnQtZHJhd2VyX19oZWFkZXJcIixcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19oZWFkZXJcIixcIi5ucy1kYXJrIC5udC1kcmF3ZXIgLm50LWRyYXdlcl9faGVhZGVyXCIsXCIubnQtZHJhd2VyLm5zLWRhcmsgLm50LWRyYXdlcl9faGVhZGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMWQzN2UzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkU2lkZURyYXdlciA+ICpcIixcIi5ucy1kYXJrIFJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fY29udGVudFwiLFwiUmFkU2lkZURyYXdlci5ucy1kYXJrID4gKlwiLFwiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2NvbnRlbnRcIixcIi5ucy1kYXJrIC5udC1kcmF3ZXIgPiAqXCIsXCIubnMtZGFyayAubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2NvbnRlbnRcIixcIi5udC1kcmF3ZXIubnMtZGFyayA+ICpcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19jb250ZW50XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRTaWRlRHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIixcIlJhZFNpZGVEcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCIsXCIubnMtZGFyayAubnQtZHJhd2VyIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWRcIixcIi5udC1kcmF3ZXIubnMtZGFyayAubnQtZHJhd2VyX19saXN0LWl0ZW0uLXNlbGVjdGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjE1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZFNpZGVEcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiLFwiUmFkU2lkZURyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIixcIi5ucy1kYXJrIC5udC1kcmF3ZXIgLm50LWRyYXdlcl9fbGlzdC1pdGVtLi1zZWxlY3RlZCBMYWJlbFwiLFwiLm50LWRyYXdlci5ucy1kYXJrIC5udC1kcmF3ZXJfX2xpc3QtaXRlbS4tc2VsZWN0ZWQgTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNjOWVlZmZcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgRm9ybSBmaWVsZHMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3XCIsXCJUZXh0RmllbGRcIixcIlBpY2tlckZpZWxkXCIsXCJEYXRlUGlja2VyRmllbGRcIixcIlRpbWVQaWNrZXJGaWVsZFwiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIkRhdGFGb3JtRWRpdG9yQ29yZVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M3YzdjN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFRleHRWaWV3XCIsXCIubnMtZGFyayBUZXh0RmllbGRcIixcIi5ucy1kYXJrIFBpY2tlckZpZWxkXCIsXCIubnMtZGFyayBEYXRlUGlja2VyRmllbGRcIixcIi5ucy1kYXJrIFRpbWVQaWNrZXJGaWVsZFwiLFwiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHNcIixcIi5ucy1kYXJrIERhdGFGb3JtRWRpdG9yQ29yZVwiLFwiLm5zLWRhcmsgUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYjNiM2IzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZhZmFmYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRWaWV3OmZvY3VzXCIsXCJUZXh0RmllbGQ6Zm9jdXNcIixcIlBpY2tlckZpZWxkOmZvY3VzXCIsXCJEYXRlUGlja2VyRmllbGQ6Zm9jdXNcIixcIlRpbWVQaWNrZXJGaWVsZDpmb2N1c1wiLFwiRGF0ZVRpbWVQaWNrZXJGaWVsZHM6Zm9jdXNcIixcIkRhdGFGb3JtRWRpdG9yQ29yZTpmb2N1c1wiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXc6Zm9jdXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDA4OGM5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGV4dFZpZXc6Zm9jdXNcIixcIi5ucy1kYXJrIFRleHRGaWVsZDpmb2N1c1wiLFwiLm5zLWRhcmsgUGlja2VyRmllbGQ6Zm9jdXNcIixcIi5ucy1kYXJrIERhdGVQaWNrZXJGaWVsZDpmb2N1c1wiLFwiLm5zLWRhcmsgVGltZVBpY2tlckZpZWxkOmZvY3VzXCIsXCIubnMtZGFyayBEYXRlVGltZVBpY2tlckZpZWxkczpmb2N1c1wiLFwiLm5zLWRhcmsgRGF0YUZvcm1FZGl0b3JDb3JlOmZvY3VzXCIsXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0Vmlldzpmb2N1c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNjOWVlZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0Vmlld1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJUZXh0RmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiRGF0ZVBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIlRpbWVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRlVGltZVBpY2tlckZpZWxkc1tpc0VuYWJsZWQ9ZmFsc2VdXCIsXCJEYXRhRm9ybUVkaXRvckNvcmVbaXNFbmFibGVkPWZhbHNlXVwiLFwiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjJmMmYyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgVGV4dFZpZXdbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgVGV4dEZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIFBpY2tlckZpZWxkW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIERhdGVQaWNrZXJGaWVsZFtpc0VuYWJsZWQ9ZmFsc2VdXCIsXCIubnMtZGFyayBUaW1lUGlja2VyRmllbGRbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgRGF0ZVRpbWVQaWNrZXJGaWVsZHNbaXNFbmFibGVkPWZhbHNlXVwiLFwiLm5zLWRhcmsgRGF0YUZvcm1FZGl0b3JDb3JlW2lzRW5hYmxlZD1mYWxzZV1cIixcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3W2lzRW5hYmxlZD1mYWxzZV1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNkM2QzZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkh0bWxWaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQcm9wZXJ0eUVkaXRvcjpmb2N1cyBEYXRhRm9ybUVkaXRvckNvcmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMDA4OGM5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUHJvcGVydHlFZGl0b3I6Zm9jdXMgRGF0YUZvcm1FZGl0b3JDb3JlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M5ZWVmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFRva2VuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM5NmRkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBUb2tlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDBhYWZjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgVG9rZW46c2VsZWN0ZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFRva2VuOnNlbGVjdGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMGJjZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJSYWRBdXRvQ29tcGxldGVUZXh0VmlldyBDbGVhckJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IENsZWFyQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXcgU3VnZ2VzdGlvblZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3IFN1Z2dlc3Rpb25WaWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkRGF0YUZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgUmFkRGF0YUZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjYjNiM2IzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUmFkRGF0YUZvcm0gUHJvcGVydHlFZGl0b3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFJhZERhdGFGb3JtIFByb3BlcnR5RWRpdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIE5hdGl2ZVNjcmlwdCBVSSBBdXRvQ29tcGxldGUgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlBpY2tlclBhZ2UgTGlzdFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiI2ZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFBpY2tlclBhZ2UgTGlzdFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQaWNrZXJQYWdlIExpc3RWaWV3ID4gKlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC40KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIFBpY2tlclBhZ2UgTGlzdFZpZXcgPiAqXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjQpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUGlja2VyUGFnZS5ucy1kYXJrIExpc3RWaWV3XCIsXCIubnMtZGFyayBTdWdnZXN0aW9uVmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBEYXRlVGltZSBQaWNrZXIgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiNmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGF0ZS10aW1lLXBpY2tlci5ucy1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjMzAzMDMwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXItYnV0dG9uc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwNDM2M1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyLWJ1dHRvbnMubnMtZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5kYXRlLXRpbWUtcGlja2VyLWJ1dHRvbi1jYW5jZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXRlLXRpbWUtcGlja2VyLXNwaW5uZXJzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2NTk2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhdGUtdGltZS1waWNrZXItc3Bpbm5lcnMubnMtZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZjZmVmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkRhdGFGb3JtRWRpdG9yTGFiZWxcIixcIi5udC1pbnB1dCA+IExhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMDA2NTk2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgRGF0YUZvcm1FZGl0b3JMYWJlbFwiLFwiLm5zLWRhcmsgLm50LWlucHV0ID4gTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmY2ZlZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIixcIi5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayBBY3Rpb25CYXJcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzQ0YmU2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyIExhYmVsXCIsXCJBY3Rpb25CYXIgQnV0dG9uXCIsXCJBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5udC1hY3Rpb24tYmFyIExhYmVsXCIsXCIubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQWN0aW9uQmFyIExhYmVsXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW1cIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIExhYmVsXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhciBMYWJlbDphY3RpdmVcIixcIkFjdGlvbkJhciBMYWJlbC4tYWN0aXZlXCIsXCJBY3Rpb25CYXIgQnV0dG9uOmFjdGl2ZVwiLFwiQWN0aW9uQmFyIEJ1dHRvbi4tYWN0aXZlXCIsXCJBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCJBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW0uLWFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgTGFiZWw6YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBMYWJlbC4tYWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBCdXR0b246YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciBCdXR0b24uLWFjdGl2ZVwiLFwiLm50LWFjdGlvbi1iYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbS4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgQWN0aW9uQmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWRhcmsgQWN0aW9uQmFyIExhYmVsLi1hY3RpdmVcIixcIi5ucy1kYXJrIEFjdGlvbkJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtZGFyayBBY3Rpb25CYXIgQnV0dG9uLi1hY3RpdmVcIixcIi5ucy1kYXJrIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5ucy1kYXJrIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbS4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciBMYWJlbDphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIExhYmVsLi1hY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIEJ1dHRvbi4tYWN0aXZlXCIsXCIubnMtZGFyayAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5ucy1kYXJrIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtLi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWlvcyBBY3Rpb25CYXIgTGFiZWxcIixcIi5ucy1pb3MgQWN0aW9uQmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWlvcyBBY3Rpb25CYXIgQnV0dG9uXCIsXCIubnMtaW9zIEFjdGlvbkJhciBCdXR0b246YWN0aXZlXCIsXCIubnMtaW9zIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm5zLWlvcyBBY3Rpb25CYXIgLm50LWFjdGlvbi1iYXJfX2l0ZW06YWN0aXZlXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIExhYmVsXCIsXCIubnMtaW9zIC5udC1hY3Rpb24tYmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1pb3MgLm50LWFjdGlvbi1iYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm5zLWlvcyAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIExhYmVsXCIsXCIubnMtZGFyay5ucy1pb3MgQWN0aW9uQmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1kYXJrLm5zLWlvcyBBY3Rpb25CYXIgQnV0dG9uOmFjdGl2ZVwiLFwiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm5zLWRhcmsubnMtaW9zIEFjdGlvbkJhciAubnQtYWN0aW9uLWJhcl9faXRlbTphY3RpdmVcIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciBMYWJlbFwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIExhYmVsOmFjdGl2ZVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIEJ1dHRvbjphY3RpdmVcIixcIi5ucy1kYXJrLm5zLWlvcyAubnQtYWN0aW9uLWJhciAubnQtYWN0aW9uLWJhcl9faXRlbVwiLFwiLm5zLWRhcmsubnMtaW9zIC5udC1hY3Rpb24tYmFyIC5udC1hY3Rpb24tYmFyX19pdGVtOmFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciBCdXR0b25cIixcIi5ucy1hbmRyb2lkIEFjdGlvbkJhciAubnQtYnV0dG9uXCIsXCIubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1hbmRyb2lkIC5udC1hY3Rpb24tYmFyIC5udC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNhNTNmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrLm5zLWFuZHJvaWQgQWN0aW9uQmFyIEJ1dHRvblwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCBBY3Rpb25CYXIgLm50LWJ1dHRvblwiLFwiLm5zLWRhcmsubnMtYW5kcm9pZCAubnQtYWN0aW9uLWJhciBCdXR0b25cIixcIi5ucy1kYXJrLm5zLWFuZHJvaWQgLm50LWFjdGlvbi1iYXIgLm50LWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzQ0YmU2XCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIERpdmlkZXJzIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaHJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZDlkOWQ5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5zLWRhcmsgLmhyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRkNGQ0ZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oci1saWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM5NmRkZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubnMtZGFyayAuaHItbGlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oci1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzAwODhjOVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1kYXJrIC5oci1kYXJrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M5ZWVmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ucy1yb290XCIsXCIubnMtbW9kYWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWJsYWNrXCIsXCJ2YWx1ZVwiOlwiIzAwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3Itd2hpdGVcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1ncmV5XCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItZ3JleS1saWdodFwiLFwidmFsdWVcIjpcIiNiYWJhYmFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWNoYXJjb2FsXCIsXCJ2YWx1ZVwiOlwiIzMwMzAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItdHJhbnNwYXJlbnRcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItYXF1YVwiLFwidmFsdWVcIjpcIiMwMGNhYWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWJsdWVcIixcInZhbHVlXCI6XCIjM2E1M2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1icm93blwiLFwidmFsdWVcIjpcIiM3OTU1NDhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWZvcmVzdFwiLFwidmFsdWVcIjpcIiMwMDY5NjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWdyZXktZGFya1wiLFwidmFsdWVcIjpcIiM1YzY4N2NcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLXB1cnBsZVwiLFwidmFsdWVcIjpcIiM4MTMwZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLWxlbW9uXCIsXCJ2YWx1ZVwiOlwiI2ZmZWEwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29sb3ItbGltZVwiLFwidmFsdWVcIjpcIiNhZWU0MDZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLW9yYW5nZVwiLFwidmFsdWVcIjpcIiNmNTdjMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbG9yLXJ1YnlcIixcInZhbHVlXCI6XCIjZmYxNzQ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1za3lcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb2xvci1lcnJvclwiLFwidmFsdWVcIjpcIiNkNTAwMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1iYWNrZ3JvdW5kLWFsdC0xMFwiLFwidmFsdWVcIjpcIiNjMGViZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1jb2xvci1zZWNvbmRhcnlcIixcInZhbHVlXCI6XCIjMDFhMGVjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tY29sb3ItZGlzYWJsZWRcIixcInZhbHVlXCI6XCIjYTRhNGE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1taW4td2lkdGhcIixcInZhbHVlXCI6XCI2NFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLWhlaWdodFwiLFwidmFsdWVcIjpcIjUyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tcGFkZGluZy14XCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYnRuLXBhZGRpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWJ0bi1tYXJnaW4teFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tbWFyZ2luLXlcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1idG4tcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtaGVhZGluZ3MtbWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWNvbnN0LWhlYWRpbmdzLWZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1ib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1ib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1jb25zdC1ib3JkZXItcmFkaXVzLXNtXCIsXCJ2YWx1ZVwiOlwiNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtYm9yZGVyLXJhZGl1cy1sZ1wiLFwidmFsdWVcIjpcIjUwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtaWNvbi1mb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtaWNvbi1mb250LXNpemUtbGdcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tY29uc3QtZGlzYWJsZWQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtcHJpbWFyeVwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWJhY2tncm91bmRcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1zZWNvbmRhcnlcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYWNjZW50XCIsXCJ2YWx1ZVwiOlwiIzMwYmNmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtY29tcGxlbWVudGFyeVwiLFwidmFsdWVcIjpcIiMzYTUzZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWNvbXBsZW1lbnRhcnktY29sb3JcIixcInZhbHVlXCI6XCIjZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1idG4tY29sb3JcIixcInZhbHVlXCI6XCIjMjYyNjI2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1ib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjMzBiY2ZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kLWFsdC01XCIsXCJ2YWx1ZVwiOlwiI2YyZjJmMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtYmFja2dyb3VuZC1hbHQtMTBcIixcInZhbHVlXCI6XCIjZTZlNmU2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kLWFsdC0yMFwiLFwidmFsdWVcIjpcIiNjY2NjY2NcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWRpc2FibGVkXCIsXCJ2YWx1ZVwiOlwiI2FjZTRmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiMyNjI2MjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWhlYWRpbmdzLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI2MjYyNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tbGlnaHQtdGFiLXRleHQtY29sb3JcIixcInZhbHVlXCI6XCIjYWJkNWU5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1hY2NlbnQtZGFya1wiLFwidmFsdWVcIjpcIiMwMDg4YzlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWFjY2VudC1saWdodFwiLFwidmFsdWVcIjpcIiM5NmRkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWFjY2VudC10cmFuc3BhcmVudFwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjgpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1wcmltYXJ5LWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjQpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kLWFjY2VudFwiLFwidmFsdWVcIjpcInJnYmEoNDgsIDE4OCwgMjU1LCAwLjEpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1iYWNrZ3JvdW5kLWRhcmstYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg0OCwgMTg4LCAyNTUsIDAuMTUpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1pdGVtLWFjdGl2ZS1jb2xvclwiLFwidmFsdWVcIjpcIiM2NzY3NjdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWl0ZW0tYWN0aXZlLWJhY2tncm91bmRcIixcInZhbHVlXCI6XCJyZ2JhKDQ4LCAxODgsIDI1NSwgMC4xNSlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWNvbXBsZW1lbnRhcnktZGFya1wiLFwidmFsdWVcIjpcIiMyMTNkZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWxpZ2h0LWl0ZW0tYWN0aXZlLWljb24tY29sb3JcIixcInZhbHVlXCI6XCIjNjc2NzY3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1idG4tY29sb3ItaW52ZXJzZVwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1saWdodC1idG4tY29sb3Itc2Vjb25kYXJ5XCIsXCJ2YWx1ZVwiOlwiIzBkMGQwZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1wcmltYXJ5XCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcIiMzMDMwMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstc2Vjb25kYXJ5XCIsXCJ2YWx1ZVwiOlwiI2IzYjNiM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1hY2NlbnRcIixcInZhbHVlXCI6XCIjNjNjZGZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWNvbXBsZW1lbnRhcnlcIixcInZhbHVlXCI6XCIjMzQ0YmU2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJ0bi1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzYzY2RmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kLWFsdC01XCIsXCJ2YWx1ZVwiOlwiIzNkM2QzZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kLWFsdC0xMFwiLFwidmFsdWVcIjpcIiM0YTRhNGFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZC1hbHQtMjBcIixcInZhbHVlXCI6XCIjNjM2MzYzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWRpc2FibGVkXCIsXCJ2YWx1ZVwiOlwiIzQ0NmY4M1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay10ZXh0LWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstaGVhZGluZ3MtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay10YWItdGV4dC1jb2xvclwiLFwidmFsdWVcIjpcIiNiYmRhZTlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYWNjZW50LWRhcmtcIixcInZhbHVlXCI6XCIjYzllZWZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWFjY2VudC1saWdodFwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWFjY2VudC10cmFuc3BhcmVudFwiLFwidmFsdWVcIjpcInJnYmEoOTksIDIwNSwgMjU1LCAwLjgpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLXByaW1hcnktYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuNClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLWRhcmstYmFja2dyb3VuZC1hY2NlbnRcIixcInZhbHVlXCI6XCJyZ2JhKDk5LCAyMDUsIDI1NSwgMC4xKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1iYWNrZ3JvdW5kLWRhcmstYWNjZW50XCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMTUpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWl0ZW0tYWN0aXZlLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2MxYzFjMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kXCIsXCJ2YWx1ZVwiOlwicmdiYSg5OSwgMjA1LCAyNTUsIDAuMTUpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWNvbXBsZW1lbnRhcnktY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1jb21wbGVtZW50YXJ5LWRhcmtcIixcInZhbHVlXCI6XCIjMWQzN2UzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWl0ZW0tYWN0aXZlLWljb24tY29sb3JcIixcInZhbHVlXCI6XCIjYzFjMWMxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS1kYXJrLWJ0bi1jb2xvci1pbnZlcnNlXCIsXCJ2YWx1ZVwiOlwiIzAwMjAzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tZGFyay1idG4tY29sb3Itc2Vjb25kYXJ5XCIsXCJ2YWx1ZVwiOlwiI2U2ZTZlNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcXFwiLCBcXFwiZmEtYnJhbmRzLTQwMFxcXCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjQwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXNvbGlkLTkwMFxcXCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjkwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXJlZ3VsYXItNDAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VfX2NvbnRlbnQtaWNvblwiLFwiLnBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNlMGUwZTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaG9yaXpvbnRhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlX19jb250ZW50LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI3MlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwidG9wXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjIwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5udC1kcmF3ZXJfX2hlYWRlci1pbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UwZTBlMFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9aHRtbCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ1YmE1ZWQ0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSmVzdXNcXFxcRG9jdW1lbnRzXFxcXExBTklBMjAyMFxcXFxOYXRpdmVTY3JpcHRcXFxcbXlBcHBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDViYTVlZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YmE1ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1odG1sJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzOGYwMjYwNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM4ZjAyNjA2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM4ZjAyNjA2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM4ZjAyNjA2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzhmMDI2MDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRHJhd2VyQ29udGVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJhd2VyQ29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RyYXdlckNvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhmMDI2MDYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4ZjAyNjA2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EcmF3ZXJDb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGYwMjYwNiZzY29wZWQ9dHJ1ZSZsYW5nPWh0bWwmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL011bHRpLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NTYxODcyNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg1NjE4NzI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg1NjE4NzI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg1NjE4NzI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdWx0aS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODU2MTg3MjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTXVsdGkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL011bHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU2MTg3MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVsdGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1NjE4NzI0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlZThiY2QzNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VlOGJjZDM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VlOGJjZDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VlOGJjZDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RpZmljYWNpb25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWU4YmNkMzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTm90aWZpY2FjaW9uZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlOGJjZDM2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2FjaW9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU4YmNkMzYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhY2lvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZThiY2QzNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTcyYzYzZjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NzJjNjNmOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NzJjNjNmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NzJjNjNmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZ3Jlc28udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3MmM2M2Y4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1Byb2dyZXNvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzJjNjNmOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MmM2M2Y4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcyYzYzZjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMTE4YjRhY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEplc3VzXFxcXERvY3VtZW50c1xcXFxMQU5JQTIwMjBcXFxcTmF0aXZlU2NyaXB0XFxcXG15QXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MxMThiNGFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MxMThiNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MxMThiNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxMThiNGFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MxMThiNGFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1JlcG9ydGVDaXRhcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZUNpdGFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlQ2l0YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVDaXRhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzExOGI0YWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWFhYzcxZGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYWFjNzFkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYWFjNzFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYWFjNzFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWFhYzcxZGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUmVwb3J0ZURpYWdub3N0aWNvcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0ZURpYWdub3N0aWNvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydGVEaWFnbm9zdGljb3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWFhYzcxZGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhYWM3MWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXBvcnRlRGlhZ25vc3RpY29zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYWFjNzFkZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTdhNjgxYjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKZXN1c1xcXFxEb2N1bWVudHNcXFxcTEFOSUEyMDIwXFxcXE5hdGl2ZVNjcmlwdFxcXFxteUFwcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhN2E2ODFiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhN2E2ODFiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhN2E2ODFiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVyYXBpYXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3YTY4MWI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1RlcmFwaWFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hN2E2ODFiNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlcmFwaWFzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE3YTY4MWI0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXJhcGlhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTdhNjgxYjQmc2NvcGVkPXRydWUmXCIiLCJjb25zdCB7IEJlaGF2aW9yU3ViamVjdCB9ID0gcmVxdWlyZShcInJ4anNcIik7XG5cbmZ1bmN0aW9uIFNlbGVjdGVkUGFnZVNlcnZpY2UoKSB7XG4gICAgaWYgKFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZSBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuXCIpO1xuICAgIH1cblxuICAgIC8vIE9ic2VydmFibGUgc2VsZWN0ZWRQYWdlIHNvdXJjZVxuICAgIHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoXCJcIik7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzdHJlYW1cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSQgPSB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uKHNlbGVjdGVkUGFnZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UubmV4dChzZWxlY3RlZFBhZ2UpO1xuICAgIH07XG59XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlO1xufTtcblxuU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UgPSBuZXcgU2VsZWN0ZWRQYWdlU2VydmljZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGVkUGFnZVNlcnZpY2U7XG4iLCJcbmltcG9ydCB7IGdldFJvb3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIlxuXG5leHBvcnQgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcbiAgICBsZXQgZHJhd2VyTmF0aXZlVmlldyA9IGdldFJvb3RWaWV3KCk7XG4gICAgaWYgKGRyYXdlck5hdGl2ZVZpZXcgJiYgZHJhd2VyTmF0aXZlVmlldy5zaG93RHJhd2VyKSB7XG4gICAgICAgIGRyYXdlck5hdGl2ZVZpZXcuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xuICAgIGxldCBkcmF3ZXJOYXRpdmVWaWV3ID0gZ2V0Um9vdFZpZXcoKTtcbiAgICBpZiAoZHJhd2VyTmF0aXZlVmlldyAmJiBkcmF3ZXJOYXRpdmVWaWV3LnNob3dEcmF3ZXIpIHtcbiAgICAgICAgZHJhd2VyTmF0aXZlVmlldy5jbG9zZURyYXdlcigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9