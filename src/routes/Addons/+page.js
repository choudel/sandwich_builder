/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		addons: [
			{
				image: '/addons/olives.webp',
				name: 'Olives',
				desc: 'Watch out for your teeth',
				price: 5
			},
			{
				image: '/addons/harissa.webp',
				name: 'Harissa',
				desc: 'Not as spicey as the old days',
				price: 40
			}
		]
	};
}
