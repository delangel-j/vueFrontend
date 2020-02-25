<template lang="html">
<GridLayout rows="auto, *" class="nt-drawer__content">
            <StackLayout row="0" class="nt-drawer__header" backgroundColor="black">
                <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"></Image>
                <Label class="nt-drawer__header-brand" text="Francisco Santiago Morales Roa"></Label>
                <Label class="nt-drawer__header-footnote" text="Exp: 16-59-09"></Label>
            </StackLayout>
        
            <ScrollView row="1" class="nt-drawer__body">
                <StackLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'ReporteDiagnosticos' ? ' -selected': '')" @tap="onNavigationItemTap(ReporteDiagnosticos)">
                        <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
                        <Label col="1" text="Reporte de diagnósticos" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'ReporteCitas' ? ' -selected': '')" @tap="onNavigationItemTap(ReporteCitas)">
                        <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"></Label>
                        <Label col="1" text="Reporte de citas" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Progreso' ? ' -selected': '')" @tap="onNavigationItemTap(Progreso)">
                        <Label col="0" text.decode="&#xf002;" class="nt-icon fas"></Label>
                        <Label col="1" text="Progreso del paciente" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Terapias' ? ' -selected': '')" @tap="onNavigationItemTap(Terapias)">
                        <Label col="0" text.decode="&#xf005;" class="nt-icon fas"></Label>
                        <Label col="1" text="Terapias" class="p-r-10"></Label>
                    </GridLayout>
        
                    <StackLayout class="hr"></StackLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Notificaciones' ? ' -selected': '')" @tap="onNavigationItemTap(Notificaciones)">
                        <Label col="0" text.decode="&#xf013;" class="nt-icon fas"></Label>
                        <Label col="1" text="Notificaciones" class="p-r-10"></Label>
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>
</template>

<script>
    import ReporteDiagnosticos from "./ReporteDiagnosticos";
    import ReporteCitas from "./ReporteCitas";
    import Terapias from "./Terapias";
    import Progreso from "./Progreso";
    import Notificaciones from "./Notificaciones";
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";    
    
    export default {
        mounted() {
            SelectedPageService.getInstance().selectedPage$
                .subscribe((selectedPage) => this.selectedPage = selectedPage);
        },
        data () {
            return {
                ReporteDiagnosticos: ReporteDiagnosticos,
                ReporteCitas: ReporteCitas,
                Terapias: Terapias,
                Progreso: Progreso,
                Notificaciones: Notificaciones,
                selectedPage: "",
                usuarios: [
                    { nombre: "Francisco Santiago Morales Roa",
                     expediente: "1659-09"},
                ],
            };
        },
        components: {
            ReporteDiagnosticos,
            ReporteCitas,
            Terapias,
            Progreso,
            Notificaciones
        },
        methods: {
            onNavigationItemTap(component) {
                this.$navigateTo(component, {
                    clearHistory: true
                });
                utils.closeDrawer();
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
