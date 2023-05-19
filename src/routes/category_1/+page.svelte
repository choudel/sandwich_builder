<script>
	import Category from '../../lib/category.svelte';
	import Info from '../../lib/info.svelte';
	import Options from '../../lib/options.svelte';
</script>

<svelte:head>
	<title>Category_1</title>
</svelte:head>
<section class="info">
	<Info />
</section>
<section class="pick">
	<Category />
	<Options />
</section>

<style lang="scss">
	.info {
		display: grid;
		background: #595050;
		@media only screen and (max-width: $sm) {
			min-height: 5vmax !important;
		}
		@media only screen and (max-width: $md) {
			min-height: 10vmax !important;
		}
		@media only screen and (max-width: $lg) {
			min-height: 12vmax !important;
		}
	}
	.pick {
		display: grid;
		background: #d8d1d1;
		@media only screen and (max-width: $sm) {
			min-height: 19vmax !important;
		}
		@media only screen and (max-width: $md) {
			min-height: 45vmax !important;
		}
		@media only screen and (max-width: $lg) {
			min-height: 43vmax !important;
		}
	}
</style>
