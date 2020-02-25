<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Notificaciones">
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
            <Label class="action-bar-title" text="Notificaciones"></Label>
        </ActionBar>
<ScrollView orientation="vertical">
     <StackLayout orientation="vertical"> 
        <GridLayout class="page__content" rows="80,30,80,30,80,30,80,30,80" columns="20,280, auto">

            <Label textWrap="true" row="0" col="1" class="titulo" text="Terapias"> </Label>
            <Switch class="sw" row="0" col="2" checked="false" backgroundColor="green" />
              <Label text="Recibe notificaciones diarias para ver vídeos" row="0" col="1" rowSpan="2"> </Label>

            <Label textWrap="true" row="2" col="1" class="titulo" text="Progreso del paciente"> </Label>
            <Switch class="sw" row="2" col="2" checked="false" backgroundColor="green" />
              <Label text="Recibe notificaciones al recibir el avance" row="2" col="1" rowSpan="2"> </Label>

            <Label textWrap="true" row="4" col="1" class="titulo" text="Citas" > </Label>
            <Switch class="sw" row="4" col="2" checked="false" backgroundColor="green" />
            <Label text="Recibe más de una notificación" row="4" col="1" rowSpan="2"> </Label>


            <Label textWrap="true" row="6" col="1" class="titulo" text="Reportes de progreso"> </Label>
            <Switch class="sw" row="6" col="2" checked="false" backgroundColor="green" />
            <Label text="Recibe notificaciones al llegar el reporte" row="6" col="1" rowSpan="2"> </Label>

<!--
            <Label textWrap="true" row="8" col="1" class="titulo" text="aa" backgroundColor="yellow"> </Label>
            <Switch class="sw" row="8" col="2" checked="false" backgroundColor="red" />
            
            <Label textWrap="true" backroundColor="yellow" row="3" rowSpan="2" col="0" text="Recibe notificaciones diarias para ver vídeos" > </Label>
          

 
           <Label class="page__content-placeholder" :text="message"></Label> -->
            
        </GridLayout>
        </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Settings");
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
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables
    ActionBar {
        background-color: black;
    }
    .titulo {
        font-size: 20px;
    }
    Switch {
        align-items: right;
    }

    // Custom styles
</style>
