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
                <Label class="action-bar-title" text="Reporte de dianósticos"></Label>
              <!--  <Image src="res://icon" width="40" height="40" verticalAlignment="center" />-->
             <!--   <Label text="NativeScript" fontSize="24" verticalAlignment="center" /> -->
            
        </ActionBar>
        

<ScrollView>

    <StackLayout>
            <GridLayout rows="0,20,20,20" columns="20,40,auto" class="nt-drawer__header top" backgroundColor="black">
                <Image row="1" col="1" class="nt-drawer__header-image fas" src.decode="font://&#xf2bd;"></Image>
                <Label row="1" col="2" class="nt-drawer__header-brand" text="Francisco Santiago Morales Roa"></Label>
                <Label row="2" col="2" class="nt-drawer__header-brand" text="Exp: 1659-09"></Label>
                <Label row="3" col="2" class="nt-drawer__header-brand" text="5 años"></Label>
            </GridLayout>
            <!-- Diagnostico / Collapse-->
        <FlexboxLayout class="m-t-20 m-l-30" justifyContent="space-between"
            alignItems="center" alignContent="center">
            <Label text="Diagnóstico" @tap="goCollapse($event)" class="title">
            </Label>
         </FlexboxLayout>
              <ListView for="diag in diagnosticos"
               :visibility= "showCollapseBox ? 'visible' : 'collapse'">         
                <v-template> 
                    <StackLayout borderWidth="1">     
                        <Label textWrap="true" :text="diag.diagnostico1"/>
                        <Label textWrap="true" :text="diag.diagnostico2"/>
                        <Label textWrap="true" :text="diag.diagnostico3"/>       
                     </StackLayout>
                 </v-template>
              </ListView> 
                <!-- Terapia del lenguaje /Collapse -->
         <FlexboxLayout class="m-t-20 m-l-30" justifyContent="space-between"
             alignItems="center" alignContent="center">
             <Label text="Terapia de lenguaje" @tap="goCollapse2($event)" class="title">
             </Label>
         </FlexboxLayout>
              <ListView for="ter in terapias"
               :visibility= "showCollapseBox2 ? 'visible' : 'collapse'">         
                <v-template> 
                    <StackLayout borderWidth="1">
                        <Label textWrap="true" :text="ter.terapia1"/>
                        <Label textWrap="true" :text="ter.terapia2"/>
                        <Label textWrap="true" :text="ter.terapia3"/>
                        <Label textWrap="true" :text="ter.terapia4"/>
                        <Label textWrap="true" :text="ter.terapia5"/>

                    </StackLayout>
                 </v-template>
              </ListView> 
                        <!-- Educación especial /Collapse -->
        <FlexboxLayout class="m-t-20 m-l-30" justifyContent="space-between"
            alignItems="center" alignContent="center">
            <Label text="Educación especial" @tap="goCollapse3($event)" class="title">
            </Label>
      </FlexboxLayout>
        <StackLayout borderWidth="1">
            <Label text="Prueba" class="box pull-left"
                :visibility= "showCollapseBox3 ? 'visible' : 'collapse'">
            </Label>
        </StackLayout>
                        <!-- Plan de trabajo /Collapse -->
        <FlexboxLayout class="m-t-20 m-l-30" justifyContent="space-between"
            alignItems="center" alignContent="center">
            <Label text="Plan de trabajo" @tap="goCollapse4($event)" class="title">
            </Label>
      </FlexboxLayout>
              <ListView for="plan in planTrabajo"
               :visibility= "showCollapseBox4 ? 'visible' : 'collapse'">         
                <v-template> 
        <StackLayout borderWidth="1">
                        <Label textWrap="true" :text="plan.plan1"/>
                        <Label textWrap="true" :text="plan.plan2"/>
        </StackLayout>
                 </v-template>
              </ListView> 
        

    </StackLayout>
</ScrollView>

	

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import Vue from 'nativescript-vue'
    import Pager from 'nativescript-accordion/vue'
	import Multi from './Multi'

    Vue.use(Pager)

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
         
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
            goBack: function () {
				this.$navigateBack();
			},
			goToMulti: function () {
				this.$navigateTo(Multi)
            },
            goCollapse: function(args) {
                if (this.showCollapseBox)
                    this.showCollapseBox = false;
                else
                    this.showCollapseBox = true;
            },
            goCollapse2: function(args) {
                if (this.showCollapseBox2)
                    this.showCollapseBox2 = false;
                else
                    this.showCollapseBox2 = true;
            },
           goCollapse3: function(args) {
                if (this.showCollapseBox3)
                    this.showCollapseBox3 = false;
                else
                    this.showCollapseBox3 = true;
            },
            goCollapse4: function(args) {
                if (this.showCollapseBox4)
                    this.showCollapseBox4 = false;
                else
                    this.showCollapseBox4 = true;
            }
        },
        data() {
            return {
                diagnosticos : [
                    {
                        diagnostico1: 'Retardo de lenguaje anártico moderado',
                        diagnostico2: 'Audición normal',
                        diagnostico3: 'Audución bilateral'
                    }
                ],
                terapias : [
                    {
                        terapia1: '1. Ejercicios de respiración y relajación.',
                        terapia2: '2. Ejercicios prefonatorios y praxias orofaciales.',
                        terapia3: '3. Ejercicios para fonemas /r/, /rr/, /l/, /ch/, /f/, /k/, /s/, intermedia',
                        terapia4: '4. Trabajar aumento de vocabulario acorde a la edad y clasificación por campos semánticos. Hacer láminas con figuras de buen tamaño para que las aprenda a escribir',
                        terapia5: '5. Trabajar estimulación de aspecto pragmático mediante cantos, juegos y cuentos.'
                    }
                ],
                planTrabajo: [
                    {
                        plan1: '1. Continuar terapia de lenguaje y aprendizaje semanal',
                        plan2: '2. Cita al terminar terapias'
                    }
                ],
                     showCollapseBox: false,
                     showCollapseBox2: false,
                     showCollapseBox3: false,
                     showCollapseBox4: false
			}
       
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

	.message {
		vertical-align: center;
		text-align: center;
		font-size: 20;
		color: #333333;
	}
    .title {
        font-size: 20px;
    }
</style>
