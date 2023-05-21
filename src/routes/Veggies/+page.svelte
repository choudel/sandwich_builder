<script>
	import Category from '../../lib/category.svelte';
	import Info from '../../lib/info.svelte';
	import Options from '../../lib/options.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.categories[4]}</title>
</svelte:head>
<section class="info">
	<Info />
</section>
<section class="pick">
	<Category ingredient_type={data.categories} />
	<Options ingredient_info={data.veggies} />
</section>

<style lang="scss">
	.info {
		display: grid;
		background: #595050;
		height: $info_min_height;
		@media only screen and (max-width: $sm) {
			height: $sm_info_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $sm) {
			height: $sm_info_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $md) {
			height: $md_info_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $lg) {
			height: $lg_info_min_height;
			padding: 0 0;
		}
	}
	.pick {
		display: grid;
		background: #d8d1d1;

		height: $pick_min_height;
		@media only screen and (max-width: $sm) {
			height: $sm_pick_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $sm) {
			height: $sm_pick_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $md) {
			height: $md_pick_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $lg) {
			height: $lg_pick_min_height;
			padding: 0 0;
		}
	}
</style>
