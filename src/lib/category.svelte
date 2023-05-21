<script>
	import { goto } from '$app/navigation';
	/**
	 * @type {any}
	 */
	export let ingredient_type;
</script>

<div class="category">
	<nav>
		{#each ingredient_type as type}
			<button on:click={() => goto(`/${type}`)}>{type}</button>
		{/each}
	</nav>
</div>

<style lang="scss">
	.category {
		display: grid;
		justify-items: center;
		background: #316546;
		height: 8vh;
		@media only screen and (max-width: $sm) {
			height: 8vh;
		}
		@media only screen and (min-width: $sm) {
			height: 8vh;
		}
		@media only screen and (min-width: $md) {
			height: 8vh;
		}
		@media only screen and (min-width: $lg) {
			height: 8vh;
		}
	}
	nav {
		height: 8vh;
		display: grid;
		grid-template-columns: auto auto auto auto auto auto;
		justify-items: center;
	}
	button {
		height: 6vh;
	}
</style>
