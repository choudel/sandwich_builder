<script>
	/**
	 * @type {{ image: any; name: any; desc: any; price: any; }}
	 */
	export let ingredient;
</script>

<div class="card">
	<div class="image"><img src={ingredient.image} alt="ingredient" /></div>
	<div class="description">
		<h3>{ingredient.name}</h3>
		<p>{ingredient.desc}</p>
		<h4>{ingredient.price}</h4>
		<button>select!</button>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 300px;
		height: auto;
		background: #11654325;
		flex-shrink: 0;
	}
	.image {
		display: flex;
		width: 100px;
		background-color: brown;
		align-content: center;
	}
	img {
		width: 100px;
		height: 100px;
	}
	.description {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
