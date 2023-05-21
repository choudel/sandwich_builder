/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		cuisines: [
			{
				name: 'French',
				desc: "plaine d'attention",
				price: 'medium'
			},
			{
				name: 'Algerian',
				desc: 'for poor',
				price: 'cheap'
			},
			{
				name: 'Turkish',
				desc: 'dohner ad such',
				price: 'expensive'
			}
		]
	};
}
