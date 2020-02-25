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
            <Label class="action-bar-title" text="Terapias"></Label>
        </ActionBar>

        <ScrollView >
        <ListView for="terapia in terapias">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Image :src="terapia.img" class="thumb" width="50" height="50" />
                    <Label :text="terapia.terapia" />
                </FlexboxLayout>
            </v-template>
            </ListView>

        </ScrollView>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Featured");
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
        data() {
            return {
                terapias: [
                    { 
                        terapia: "Respiración y relajación",
                        img: "~/images/respiracion.jpg"
                    },
                    {
                        terapia: "Prefonatorios",
                        img: "~/images/prefonatorios.jpg"
                    },
                    {
                        terapia: "Praxias orofaciales",
                        img: "~/images/praxias.jpg"
                    },
                    {
                        terapia: "Ejercicios de fonemas",
                        img: "~/images/fonemas.jpg"
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
