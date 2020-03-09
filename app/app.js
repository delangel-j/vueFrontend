import Vue from "nativescript-vue";
import App from "./components/App";
import ReporteDiagnosticos from "./components/ReporteDiagnosticos";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import CalendarView from 'nativescript-ui-calendar/vue';
import Login from "./components/Login";
Vue.use(CalendarView);
Vue.use(RadSideDrawer);

//Vue.config.silent = (TNS_ENV === 'production');
Vue.config.silent = false;
new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Login, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
