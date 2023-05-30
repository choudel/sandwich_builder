<script>
	/**
	 * @type {{ image: any; name: any; desc: any; price: any; }}
	 */
	export let ingredient;
	import { selected } from '../stores';
</script>

<div class="card">
	<div class="front">
		<div class="background" />
		<div class="image"><img src={ingredient.image} alt="ingredient" /></div>
		<div class="bottom">
			<h3 class="name">{ingredient.name}</h3>
		</div>
	</div>
	<div class="back">
		<p class="desc">{ingredient.desc}</p>
		<h4 class="price">{ingredient.price}</h4>
		<button on:click={() => selected.update((n) => (n = ingredient.name))}>select!</button>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		width: 200px;
		height: 300px;
		flex-shrink: 0;
		&:hover {
			.background {
				height: 250px;
				transform: scale(1.1) translateY(10%);
			}
			.image {
				width: 100px;
				align-content: center;
				transform: translateY(-3%);
			}
			img {
				width: 100px;
				height: 100px;
				transform: translateY(-3%);
			}
			.back {
				display: flex;
				flex-direction: column;
				align-content: center;
				z-index: 1;
				.desc {
					margin: 0;
				}
				.price {
					margin: 0;
				}
			}
		}
	}
	.front {
		position: relative;
		flex-direction: column;
		display: flex;
		align-items: center;
		z-index: 1;
	}
	.image {
		width: 200px;
		align-content: center;
	}
	img {
		width: 200px;
		height: 250px;
	}
	.bottom {
		display: flex;
		align-items: center;
		text-align: center;
		z-index: 1;
	}
	.name {
		margin: 0;
	}
	.background {
		position: absolute;
		background: #11654325;
		width: 200px;
		height: 300px;
	}
	.back {
		display: none;
	}
</style>
