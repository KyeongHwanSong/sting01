interface IPerson {
	name: string;
	age: number;
	speak(): string;
}

type PersonType = {
	name: string;
	age: number;
	speak(): string;
};

//구조가 같으면 같은 타입이다.

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
