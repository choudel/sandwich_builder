/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		meats: [
			{
				name: 'Halouf',
				desc: 'test pour la foi',
				price: 500
			},
			{
				name: 'Chicken',
				desc: 'Very halel with spices',
				price: 300
			},
			{
				name: 'Merguez',
				desc: 'Unknown origin, protein for sure',
				price: 200
			}
		]
	};
}
