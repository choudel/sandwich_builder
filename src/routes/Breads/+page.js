// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { categories } = await parent();
	return {
		...categories,
		breads: [
			{
				image: '/breads/french_bread.svg',
				name: 'Baguette',
				desc: 'french bread',
				price: 20
			},
			{
				image: '/breads/french_bread.svg',
				name: 'Pitta',
				desc: 'grec bread',
				price: 50
			}
		]
	};
}
