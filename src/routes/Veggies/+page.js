/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		veggies: [
			{
				image: '/veggies/',
				name: 'tomato',
				desc: 'refreshing and tasty',
				price: 10
			},
			{
				image: '/veggies/',
				name: 'lettuce',
				desc: 'mainly to make the sandwich look bigger',
				price: 10
			}
		]
	};
}
