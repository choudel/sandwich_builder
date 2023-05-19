<script>
	import Card from './card.svelte';
</script>

<div class="options">
	<Card />
	<Card />
	<Card />
	<Card />
</div>

<style lang="scss">
	.options {
		display: grid;
		gap: 10px;
		justify-items: center;
		grid-template-columns: auto auto auto auto;
		grid-template-rows: auto;
		@media only screen and (max-width: $sm) {
			height: 10vmax;
			grid-template-columns: auto auto auto auto !important;
			grid-template-rows: auto !important;
			overflow-x: scroll;
			overflow-y: none;
		}
		@media only screen and (max-width: $md) {
			height: 40vmax;
			grid-template-columns: auto auto;
			grid-template-rows: auto auto;
			overflow-x: none;
			overflow-y: scroll;
		}
		@media only screen and (max-width: $lg) {
			height: 40vmax;
			grid-template-columns: auto auto;
			grid-template-rows: auto auto;
			overflow-y: scroll;
			overflow-x: none;
		}
	}
</style>
