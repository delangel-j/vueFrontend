<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />

        <GridLayout rows="*" height="1000px">
            <RadPieChart allowAnimation="true" row="0">
                <DonutSeries v-tkPieSeries selectionMode="DataPoint"
                    expandRadius="0.4" outerRadiusFactor="0.7"
                    innerRadiusFactor="0.4" :items="pieSource"
                    valueProperty="Amount" legendLabel="Brand" />
                <RadLegendView v-tkPieLegend position="Right" title="Brands"
                    offsetOrigin="TopRight" width="110"
                    enableSelection="true" />
            </RadPieChart>
        </GridLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);

    import * as calendarModule from "nativescript-ui-calendar";
    import {
        Color
    } from "color";
    export default {
        methods: {
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
            let colors = [
                new Color(200, 188, 26, 214),
                new Color(220, 255, 109, 130),
                new Color(255, 55, 45, 255),
                new Color(199, 17, 227, 10),
                new Color(255, 255, 54, 3)
            ];
            for (let i = 1; i < 10; i++) {
                startDate = new Date(now.getFullYear(), now.getMonth(), i * 2,
                    1);
                endDate = new Date(now.getFullYear(), now.getMonth(), i * 2,
                    3);
                event = new calendarModule.CalendarEvent(
                    "event " + i,
                    startDate,
                    endDate,
                    false,
                    colors[(i * 10) % (colors.length - 1)]
                );
                events.push(event);
                if (i % 3 == 0) {
                    event = new calendarModule.CalendarEvent(
                        "second " + i,
                        startDate,
                        endDate,
                        true,
                        colors[(i * 5) % (colors.length - 1)]
                    );
                    events.push(event);
                }
            }
            this.calendarEvents = events;
        },
        data() {
            return {
                pieSource: [{
                        Brand: "Audi",
                        Amount: 10
                    },
                    {
                        Brand: "Mercedes",
                        Amount: 76
                    },
                    {
                        Brand: "Fiat",
                        Amount: 60
                    },
                    {
                        Brand: "BMW",
                        Amount: 24
                    },
                    {
                        Brand: "Crysler",
                        Amount: 40
                    }
                ],

                calendarEvents: []
            };
        }
        /*
       Event view mode can be one of "None", "Inline" or "Popover"
       Selection mode can be one of "None", "Single", "Multiple" or "Range"
       View mode can be one of "Week", "Month", "MonthNames", "Year" or "Day"

	  Available transition modes
		 http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/transition-modes
	

	  For styling the calendar, please go through this part in the docs
		 http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/Styling/styling
  */
    };
</script>