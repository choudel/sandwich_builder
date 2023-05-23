/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		sauces: [
			{
				image: '/sauces/Aioli.webp',
				name: 'Aioli',
				desc: 'garlic mayo with olive oil',
				price: 50
			},
			{
				image: '/sauces/sauce-algerienne.webp',
				name: 'Sauce Algerienne',
				desc: 'Harissa and mayo directly from Algeria',
				price: 60
			},
			{
				image: '/sauces/sauce-samurai.webp',
				name: 'Sauce Samurai',
				desc: 'garlic mayo with olive oil',
				price: 40
			},
			{
				image: '/sauces/ranch-sauce.webp',
				name: 'Ranch',
				desc: 'From the USA lol',
				price: 60
			}
		]
	};
}
