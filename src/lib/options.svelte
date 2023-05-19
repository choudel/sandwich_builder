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
		grid-template-columns: auto auto auto auto;
		justify-items: center;
	}
</style>
