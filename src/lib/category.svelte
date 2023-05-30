<script>
	import { goto } from '$app/navigation';
	/**
	 * @type {any}
	 */
	export let ingredient_type;
	export let currently;
	console.log(currently);
</script>

<div class="category">
	<nav>
		{#each ingredient_type as type}
			<button
				class:clicked={currently === type}
				on:click={() => {
					goto(`/${type}`);
				}}>{type}</button
			>
		{/each}
	</nav>
</div>

<style lang="scss">
	@font-face {
		font-family: 'Lacquer Regular';
		src: url('/Lacquer/Lacquer-Regular.ttf');
		font-display: swap;
	}
	.category {
		display: grid;
		justify-items: center;
		background: $category_color;
		border-bottom: 5px solid $pick_color;

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
		display: flex;
		flex-wrap: wrap;
		gap: 1vw;
		padding-top: 10px;
		justify-items: center;
	}
	button {
		background: $pick_color;
		border: none;
		padding: 1vw 2vw;
		border-radius: 10px 10px 0 0;
		font-family: 'Lacquer Regular';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #7c4c4c;
		&:hover {
			background-color: $info_color;
		}
	}
	.clicked {
		background-color: $info_color;
	}
</style>
