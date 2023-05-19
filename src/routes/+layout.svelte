<script>
	import Hero from '../lib/hero.svelte';
</script>

<header class="hero">
	<Hero />
</header>
<slot />

<style lang="scss">
	header {
		display: grid;
		background: #888282;
		@media only screen and (max-width: $sm) {
			min-height: 76vmax !important;
		}

		@media only screen and (max-width: $md) {
			min-height: 45vmax !important;
		}
		@media only screen and (max-width: $lg) {
			min-height: 45vmax !important;
		}
	}
</style>
