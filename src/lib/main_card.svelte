<script>
	/**
	 * @type {{ name: any; desc: any; price: any; }}
	 */
	 export let infos;
</script>

<div class="card">
	<div class="image">image</div>
	<div class="description">
		<h3>{infos.name}</h3>
		<p>{infos.desc}</p>
		<h4>{infos.price}</h4>
		<button>select!</button>
	</div>
</div>

<style lang="scss">
	.card {
		display: grid;
		grid-template-rows: auto auto;
		justify-items: center;
		width: 300px;
		height: auto;
		background: #11654325;
	}
	.image {
		height: 100px;
		width: 100px;
		background-color: brown;
	}
</style>
