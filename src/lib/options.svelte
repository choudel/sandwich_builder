<script>
	import Card from './card.svelte';
	import MainCard from './main_card.svelte';
	/**
	 * @type {{ length: any; cuisines: any; }}
	 */
	export let ingredient_info;
	/**
	 * @type {any}
	 */
</script>

<div class="options">
	{#if ingredient_info.cuisines}
		{#each ingredient_info as info}
			<MainCard infos={info} />
		{/each}
	{:else}
		{#each ingredient_info as info}
			<Card ingredient={info} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.options {
		display: flex;
		gap: 1em;
		padding: 10px;
		background: $pick_color;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
		@media only screen and (max-width: $sm) {
			height: $sm_options_max_height;
			overflow-x: scroll;
			overflow-y: hidden;
		}
		@media only screen and (min-width: $sm) {
			height: $sm_options_min_height;
			overflow-x: scroll;
			overflow-y: hidden;
		}
		@media only screen and (min-width: $md) {
			height: $md_options_min_height;
			flex-wrap: wrap;
			justify-content: center;
			overflow-x: hidden;
			overflow-y: scroll;
		}
		@media only screen and (min-width: $lg) {
			height: $lg_options_min_height;
			flex-wrap: wrap;
			justify-content: center;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}
</style>
