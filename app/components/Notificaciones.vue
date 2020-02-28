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
        <GridLayout rows="30, 50,30, 50,30, 50,30, 50,30" columns="20,280, auto">

            <Label textWrap="true" row="1"  col="1" class="titulo" text="Terapias"> </Label>
            <Switch row="1" col="2"  checked="false" backgroundColor="green"  />
              <Label row="1" col="1" class="subtitulo" text="Recibe notificaciones diarias para ver vídeos" > </Label>

            <Label textWrap="true" row="3" col="1" class="titulo" text="Progreso del paciente"> </Label>
            <Switch row="3" col="2" checked="false" backgroundColor="green" />
              <Label class="subtitulo" row="3" col="1" text="Recibe notificaciones al recibir el avance"> </Label>

            <Label textWrap="true" row="5" col="1" class="titulo" text="Citas" > </Label>
            <Switch row="5" col="2" checked="false" backgroundColor="green" />
            <Label  row="5" col="1" class="subtitulo" text="Recibe más de una notificación"> </Label>


            <Label textWrap="true" row="7" col="1" class="titulo" text="Reportes de progreso"> </Label>
            <Switch row="7" col="2" checked="false" backgroundColor="green" />
            <Label row="7" col="1" class="subtitulo"  text="Recibe notificaciones al llegar el reporte"> </Label>

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
    .subtitulo {
        margin-top: 70px;
    }

    // Custom styles
</style>
