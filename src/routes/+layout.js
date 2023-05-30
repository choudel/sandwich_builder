/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		categories: ['Breads', 'Meats', 'Cheeses', 'Sauces', 'Veggies', 'Addons'],
		current: '',
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
		],
		breads: [
			{
				image: '/breads/french-baguette.webp',
				name: 'Baguette',
				desc: 'french bread',
				price: 20
			},
			{
				image: '/breads/ciabatta.webp',
				name: 'Ciabatta',
				desc: 'nice for large sandwiches',
				price: 50
			},
			{
				image: '/breads/Seeded-Loaf.webp',
				name: 'Seeded Loaf',
				desc: 'nice for breakfast also',
				price: 70
			},
			{
				image: '/breads/sliced-bread.webp',
				name: 'Sliced bread',
				desc: 'nice for soft and light sandwiches',
				price: 60
			},
			{
				image: '/breads/white-baps.webp',
				name: 'White Baps',
				desc: 'For Mcdonalds looking burger',
				price: 30
			}
		],
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
		],
		meats: [
			{
				image: '/meats/beef.webp',
				name: 'Beef',
				desc: 'Nicely cooked slices of delicious beef',
				price: 500
			},
			{
				image: '/meats/chawarma.webp',
				name: 'Chawarma',
				desc: 'Turkish meat of turkey stacked with spices',
				price: 200
			},
			{
				image: '/meats/chicken.webp',
				name: 'Chicken',
				desc: 'well done chicken of high quality',
				price: 300
			},
			{
				image: '/meats/fish.webp',
				name: 'Fish',
				desc: 'Freshly from the sea',
				price: 400
			},
			{
				image: '/meats/ground-beef.webp',
				name: 'Ground Beef',
				desc: 'well sourced meet caramelized on medium fire',
				price: 150
			}
		],
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
		],
		veggies: [
			{
				image: '/veggies/tomato.webp',
				name: 'Tomato',
				desc: 'refreshing and tasty',
				price: 10
			},
			{
				image: '/veggies/lettuce.webp',
				name: 'Lettuce',
				desc: 'mainly to make the sandwich look bigger',
				price: 10
			},
			{
				image: '/veggies/onion.webp',
				name: 'Onion',
				desc: 'no sandwich can be without it',
				price: 10
			}
		]
	};
}
