const person1 = { name: 'mark', age: 30 };

const person2 = Object.create({
	name: 'mark',
	age: 39,
	date: null,
	build: undefined,
	sum: Symbol('d'),
});

//오브젝트의 key값을 무조건 선언 해줘야 함
function f7(a: { name: string; age: number }) {
	return `이름은${a.name} 이고, 나이는 ${Math.floor(a.age * 10) * 10}`;
}

interface PersonInterface {
	name: string;
	age: number;
	sec: boolean;
}

type PersonTypeAlias = {
	name: string;
	age: number;
};

function f8(a: PersonInterface): string {
	return `이름은${a.name} 이고, 나이는 ${Math.floor(a.age * 10) * 10}`;
}
