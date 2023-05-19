<script>
	import { goto } from '$app/navigation';
</script>

<div class="category">
	<nav>
		<button on:click={() => goto('/category_1')}>category1</button>
		<button on:click={() => goto('/category_2')}>category2</button>
		<button on:click={() => goto('/category_3')}>category3</button>
	</nav>
</div>

<style lang="scss">
	.category {
		display: grid;
		justify-items: center;
		background: #316546;
	}
	nav {
		display: grid;
		grid-template-columns: auto auto auto;
		justify-items: center;
	}
</style>
