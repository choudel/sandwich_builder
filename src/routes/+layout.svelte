<script>
	import Hero from '../lib/hero.svelte';
	import { selected } from '../stores';
</script>

<header class="hero">
	<Hero />
	<div>{$selected}</div>
</header>
<slot />

<style lang="scss">
	header {
		display: grid;
		background: $header_color;
		@media only screen and (max-width: $sm) {
			height: $sm_header_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $sm) {
			height: $sm_header_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $md) {
			height: $md_header_min_height;
			padding: 0 0;
		}
		@media only screen and (min-width: $lg) {
			height: $lg_header_min_height;
			padding: 0 10vw;
		}
	}
</style>
