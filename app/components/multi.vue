<template>
	<Page>
		<ActionBar title="Multi Templates">
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
		</ActionBar>
		<GridLayout columns="20,*" rows="auto,auto,*">
			<Button row="0" col="1" text="Expand All" @tap="expandAll"></Button>
			<Button row="1" col="1" text="Collapse All" @tap="collapseAll"></Button>
			<Accordion row="2" col="1" height="100%" ref="accordion" allowMultiple="true" childItems="children" for="item of items">
				<v-template if="$odd" name="header-odd">
					<StackLayout>
						<Label backgroundColor="green" :text="item.headerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="header-even">
					<StackLayout>
						<Label backgroundColor="orange" :text="item.headerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$odd" name="title-odd">
					<StackLayout backgroundColor="white">
						<Label :text="item.title"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="title-even">
					<StackLayout backgroundColor="white">
						<Label :text="item.title"></Label>
						
					</StackLayout>
				</v-template>


				<v-template if="$odd" name="content-odd">
					<StackLayout>
						<Label height="200" :text="item.text"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="content-even">
					<StackLayout backgroundColor="red">
						<Label backgroundColor="yellow" :text="item.text"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$odd" name="footer-odd">
					<StackLayout backgroundColor="yellow">
						<Label :text="item.footerText"></Label>
					</StackLayout>
				</v-template>

				<v-template if="$even" name="footer-even">
					<StackLayout backgroundColor="blue">
						<Label  :text="item.footerText"></Label>
					</StackLayout>
				</v-template>
			</Accordion>
		</GridLayout>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						title: 'Diagnóstico',
						children: [
							{
								text: 'Retardo de lenguaje anártico moderado ' },
							{
								text: 'Audición normal',
                            },
                            {
                                text: 'Audición bilateral',
                            }
						]
					},
					{
						title: '2 Title',
						children: [ {
							text: 'Me',
						}, { text: 'Stop' } ]
					},
					{
						title: '3 Title',
						footer: '30',
						headerText: 'Third',
						footerText: '6',
						children: [ { text: 'This'}, {
							text: 'Thing',
						} ]
					},
					{
						title: '4 Title',
						footer: '40',
						headerText: 'Fourth',
						footerText: '7',
						children: [ { text: 'Now'}, {
							text: 'Please',
						
						} ]
					}
				]
			}
		},
		methods: {
			goBack: function () {
				this.$navigateBack();
			},
			expandAll: function () {
				this.$refs.accordion.nativeView.expandAll();
			}, collapseAll: function () {
				this.$refs.accordion.nativeView.collapseAll();
			}
		}
	}
</script>

<style scoped>
	ActionBar {
		background-color: #53ba82;
		color: #ffffff;
	}
	.message {
		vertical-align: center;
		text-align: center;
		font-size: 20;
		color: #333333;
	}
</style>