/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		meats: [
			{
				image: '/meats/beef.webp',
				name: 'Beef',
				desc: 'Nicely cooked slices of delicious beef',
				price: 500
			},
			{
				image: '/meats/chawarma.webp',
				name: 'Chawarma',
				desc: 'Turkish meat of turkey stacked with spices',
				price: 200
			},
			{
				image: '/meats/chicken.webp',
				name: 'Chicken',
				desc: 'well done chicken of high quality',
				price: 300
			},
			{
				image: '/meats/fish.webp',
				name: 'Fish',
				desc: 'Freshly from the sea',
				price: 400
			},
			{
				image: '/meats/ground-beef.webp',
				name: 'Ground Beef',
				desc: 'well sourced meet caramelized on medium fire',
				price: 150
			}
		]
	};
}
