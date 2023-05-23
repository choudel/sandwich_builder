/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		veggies: [
			{
				image: '/veggies/tomato.webp',
				name: 'Tomato',
				desc: 'refreshing and tasty',
				price: 10
			},
			{
				image: '/veggies/lettuce.webp',
				name: 'Lettuce',
				desc: 'mainly to make the sandwich look bigger',
				price: 10
			},
			{
				image: '/veggies/onion.webp',
				name: 'Onion',
				desc: 'no sandwich can be without it',
				price: 10
			}
		]
	};
}
