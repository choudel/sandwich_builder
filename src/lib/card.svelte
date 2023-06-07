<script>
	/**
	 * @type {{ image: any; name: any; desc: any; price: any; }}
	 */
	export let ingredient;
	import { selected } from '../stores';
</script>

<div class="card">
	<div class="front">
		<img class="thumbnail" src={ingredient.image} alt="ingredient" />
		<h3 class="name">{ingredient.name}</h3>
		<p class="desc">{ingredient.desc}</p>
		<h4 class="price">{ingredient.price}</h4>
		<button class="btn" on:click={() => selected.update((n) => (n = ingredient.name))}
			>Choose</button
		>
	</div>
	<div class="background">
		<img src={ingredient.image} alt="ingredient" />
	</div>
</div>

<style lang="scss">
	img {
		background-color: white;
	}

	/* Card */
	.card {
		position: relative;

		&:hover {
			.front {
				transform: translateY(-50%);
			}

			.btn {
				display: inline-block;
			}

			.background {
				transform: scale(1.25, 1.5);
				opacity: 1;
			}
		}
	}

	.front {
		text-align: center;
		transition: 250ms;
	}

	.thumbnail {
		width: 250px;
		border-radius: 10px;
	}

	.name {
		font-weight: bold;
		margin: 10px 0;
	}

	.btn {
		display: none;
		width: 50%;
		background-color: blueviolet;
		color: white;
		border: 1px solid white;
		border-radius: 10px;
		padding: 10px;
	}

	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: -1;
		background-color: #234;
		border-radius: 10px;
		opacity: 0;
		transition: 250ms;

		& img {
			height: 100%;
			width: 100%;
			opacity: 0.1;
		}
	}
</style>
