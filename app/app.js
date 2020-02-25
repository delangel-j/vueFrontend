import Vue from "nativescript-vue";
import App from "./components/App";
import ReporteDiagnosticos from "./components/ReporteDiagnosticos";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import CalendarView from 'nativescript-ui-calendar/vue';
import RadCartesianChart from "nativescript-ui-chart/vue";
Vue.use(RadCartesianChart);
Vue.use(CalendarView);
Vue.use(RadSideDrawer);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(ReporteDiagnosticos, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
