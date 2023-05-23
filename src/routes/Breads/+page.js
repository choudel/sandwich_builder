// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		breads: [
			{
				image: '/breads/french-baguette.webp',
				name: 'Baguette',
				desc: 'french bread',
				price: 20
			},
			{
				image: '/breads/ciabatta.webp',
				name: 'Ciabatta',
				desc: 'nice for large sandwiches',
				price: 50
			},
			{
				image: '/breads/Seeded-Loaf.webp',
				name: 'Seeded Loaf',
				desc: 'nice for breakfast also',
				price: 70
			},
			{
				image: '/breads/sliced-bread.webp',
				name: 'Sliced bread',
				desc: 'nice for soft and light sandwiches',
				price: 60
			},
			{
				image: '/breads/white-baps.webp',
				name: 'White Baps',
				desc: 'For Mcdonalds looking burger',
				price: 30
			}
		]
	};
}
