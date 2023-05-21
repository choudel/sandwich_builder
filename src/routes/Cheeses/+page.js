/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		cheeses: [
			{
				image: '/cheeses/',
				name: 'Emmental',
				desc: 'Standard taste',
				price: 150
			},
			{
				image: '/cheeses/',
				name: 'Camemberd',
				desc: 'Smelly but tasty',
				price: 200
			}
		]
	};
}
