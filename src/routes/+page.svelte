<header class="hero">Sandwich final shape</header>
<section class="info">infos on the ingredient</section>
<section class="pick">
	<nav class="category">choose type of an ingredient</nav>
	<div class="options">
		<div class="card">card1</div>
		<div class="card">card2</div>
		<div class="card">card3</div>
		<div class="card">card4</div>
	</div>
</section>

<style lang="scss">
	header {
		display: grid;
		background: #888282;
		@media only screen and (max-width: $sm) {
			min-height: 76vmax;
		}

		@media only screen and (max-width: $md) {
			min-height: 45vmax;
		}
		@media only screen and (max-width: $lg) {
			min-height: 45vmax;
		}
	}
	.info {
		display: grid;
		background: #595050;
		@media only screen and (max-width: $sm) {
			min-height: 5vmax;
		}
		@media only screen and (max-width: $md) {
			min-height: 10vmax;
		}
		@media only screen and (max-width: $lg) {
			min-height: 12vmax;
		}
	}
	.pick {
		display: grid;
		background: #d8d1d1;
		@media only screen and (max-width: $sm) {
			min-height: 19vmax;
		}
		@media only screen and (max-width: $md) {
			min-height: 45vmax;
		}
		@media only screen and (max-width: $lg) {
			min-height: 43vmax;
		}
	}
</style>
