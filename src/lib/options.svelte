<script>
	import Card from './card.svelte';
	import MainCard from './main_card.svelte';
	export let ingredient_info;
</script>

{#if ingredient_info.cuisines}
	<div class="options">
		{#each ingredient_info as info}
			<MainCard infos={info} />
		{/each}
	</div>
{:else}
	<div class="options">
		{#each ingredient_info as info}
			<Card ingredient={info} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.options {
		display: grid;
		column-gap: 10px;
		justify-items: center;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		height: $options_max_height;
		overflow-y: scroll;
		overflow-x: hidden;
		@media only screen and (max-width: $sm) {
			height: $sm_options_max_height;
			grid-template-columns: auto auto auto auto;
			grid-template-rows: auto;
			overflow-x: scroll;
			overflow-y: hidden;
		}
		@media only screen and (min-width: $sm) {
			height: $sm_options_max_height;
			grid-template-columns: auto auto auto auto;
			grid-template-rows: auto;
			overflow-x: scroll;
			overflow-y: hidden;
		}
		@media only screen and (min-width: $md) {
			height: $md_options_max_height;
			grid-template-columns: auto auto;
			grid-template-rows: auto auto;
			overflow-x: hidden;
			overflow-y: scroll;
		}
		@media only screen and (min-width: $lg) {
			height: $lg_options_max_height;
			grid-template-columns: auto auto;
			grid-template-rows: auto auto;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}
</style>
