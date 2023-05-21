/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		addons: [
			{
				image: '/addons/',
				name: 'Olives',
				desc: 'Watch out for your teeth',
				price: 5
			},
			{
				image: '/addons/',
				name: 'Millefeuilles',
				desc: 'No judging',
				price: 40
			},
			{
				image: '/addons/',
				name: 'Spaguetti',
				desc: 'with sauce bolognaise',
				price: 100
			}
		]
	};
}
