function returnVoid(message: string | number): void {
	console.log(message);

	return undefined;
}

const r = returnVoid(`리턴은 없다`);
