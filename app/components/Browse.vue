<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu" 
                android:visibility="collapsed" 
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Reporte de citas"></Label>
        </ActionBar>

        
    <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
           <!-- Pestaña 1. -->
            <TabViewItem title="Progreso" iconSource="res://progreso">
            <Label text="Bloque 4" />
        </TabViewItem>

        <!--Pestaña 2. Calendario-->
        <TabViewItem title="Calendario">
            <RadCalendar
            :eventSource="calendarEvents" 

          eventsViewMode="Inline" 
          selectionMode="Single" 
          viewMode="Month"
          transitionMode="Stack" 
          locale="en-US" 
          
          @dateSelected="onDateSelected" 
          @dateDeselected="onDateDeselected" 
          @navigatedToDate="onNavigatedToDate"
          @navigatingToDateStarted="onNavigatingToDateStarted" 
          @viewModeChanged="onViewModeChanged" />
        </TabViewItem>
        <!-- Pestaña 3. Lista de citas -->
          <TabViewItem title="Lista de citas">
           
            <ListView for="item in items">
                
            <v-template>
        <!-- Shows the list item label in the default color and style. -->
        <GridLayout columns="80,50,200,50" rows="20,20">
            <Label  row="0" col="0" :text="item.fecha"  />
            <Label row="0" class="lista" col="1" :text="item.idExpediente" />
             <Label row="0" class="lista" col="2" :text="item.nombre" />

             <Label row="1" class="lista" col="1" :text="item.horaInicio" > </Label>
             <Label row="1" class="lista" col="2" :text="item.horaFin" />
        </GridLayout>
             </v-template>
            </ListView>
        </TabViewItem>
    </TabView>


    </Page>
</template>

<script>

    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import * as calendarModule from 'nativescript-ui-calendar';
    import { Color } from 'color';

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Browse");
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            indexChange: function(args) {
                 let newIndex = args.value
                 console.log('Current tab index: ' + newIndex)
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
    let events = [];
    let now = new Date();
    let startDate;
    let endDate;
    let event;
    let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
    for (let i = 1; i < 10; i++) {
      startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 14);
      endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 16);
      event = new calendarModule.CalendarEvent("Terapia " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
      events.push(event);
      if (i % 3 == 0) {
        event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        events.push(event);
      }
    }
    this.calendarEvents = events;
  },
  data() {
    return {
      calendarEvents: [],
      items: [
          { fecha: "14/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
          { fecha: "21/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
          { fecha: "28/02/2020", idExpediente: "LTF18" , nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" }
          ]

    }
        }

    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

ActionBar{
    background-color: black;
}
TabView{
    padding-bottom: 20px;
}
.lista{
    color: white;
    background-color: #48A1CA;
    font-size: 14px;
}
    // Custom styles
</style>
