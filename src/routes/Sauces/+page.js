/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		sauces: [
			{
				image: '/sauces/',
				name: 'Samurai',
				desc: 'spicey and asiatic',
				price: 50
			},
			{
				image: '/sauces/',
				name: 'sauce algerienne',
				desc: 'Harissa and mayo',
				price: 60
			}
		]
	};
}
