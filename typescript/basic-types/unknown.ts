declare const maybe: unknown;

//타입을 한정적으로 지정해야 가능

if (typeof maybe === 'number') {
	const aNumber: number = maybe;
}

if (maybe === true) {
	const aBoolean: boolean = maybe;

	const aString: string = maybe;
}

if (typeof maybe === 'string') {
	maybe;

	const aString: string = maybe;

	const aBoolean: boolean = maybe;
}
