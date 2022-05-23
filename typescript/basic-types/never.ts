function error(message: string): never {
	throw new Error(message);
}

function fail() {
	return error('에러');
}

function infiniteLoop(): never {
	while (true) {}
}

// 모든 타입에 subtype, any도 할당 안됨

let a: string = 'gi';

if (typeof a !== 'string') {
	//할당하지 않는 값으로 설면 하면 never로 됨..
	a;
}

declare const b: string | number;

if (typeof b !== 'string') {
	b;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
