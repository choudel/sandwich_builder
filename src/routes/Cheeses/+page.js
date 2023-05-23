/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		cheeses: [
			{
				image: '/cheeses/camembert.webp',
				name: 'Camembert',
				desc: 'Smelly but tasty',
				price: 200
			},
			{
				image: '/cheeses/cheddar.webp',
				name: 'Cheddar',
				desc: 'Industrial cheese but well tastes good',
				price: 100
			},
			{
				image: '/cheeses/gruyere.webp',
				name: 'Gruyere',
				desc: 'Natural and very tasty',
				price: 250
			},
			{
				image: '/cheeses/povolone.webp',
				name: 'Povolone',
				desc: 'just try it would not regret it',
				price: 300
			}
		]
	};
}
