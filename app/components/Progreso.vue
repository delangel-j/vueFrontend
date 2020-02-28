<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="black">
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
            <Label class="action-bar-title" text="Progreso del paciente"></Label>
        </ActionBar>


        <ScrollView>

            <ListView for="progreso in progresos">
                <v-template>
                    <GridLayout rows="20,25,25">
                        <Label row="1" textWrap="true">
                            <FormattedString> 
                                <Span :text="progreso.bloque" />
                            </FormattedString>
                        </Label>
                        <Label row="2" textWrap="true">
                            <FormattedString> 
                                <Span text="Fecha: Del " />
                                <Span :text="progreso.inicio" />
                                <Span text=" al " />
                                <Span :text="progreso.fin" />
                            </FormattedString>
                        </Label>
                    </GridLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
        import * as calendarModule from 'nativescript-ui-calendar';
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Search");
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            }
        },
        data () {
            return {
                progresos: [ 
                {
                    bloque: "Bloque 4",
                    inicio: "2018/08/30",
                    fin: "2019/10/22"
                },
                {
                    bloque: "Bloque 3",
                    inicio: "2019/03/10",
                    fin: "2019/08/30"
                },
                {
                    bloque: "Bloque 2",
                    inicio: "2019/01/15",
                    fin: "2019/03/10"
                },
                {
                    bloque: "Bloque 1",
                    inicio: "2018/11/15",
                    fin: "2018/01/15"
                }

                ]

            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
