const person1 = { name: 'mark', age: 30 };

const person2 = Object.create({
	name: 'mark',
	age: 39,
	date: null,
	build: undefined,
	sum: Symbol('d'),
});
