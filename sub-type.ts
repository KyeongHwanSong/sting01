//높은 레벨의 type을 가지고 있으면 같을수 있으나 그게 아니라면 에러

let sub1: 1 = 1;
let sup1: number = sub1;
sup1 = sub1;
sub1 = sup1;

let sub2: number[] = [1];
let sup2: object = sub2;
sup2 = sub2;
sub2 = sup2;

let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;

sub3 = sup3;

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5;

class Animal {}
class Dog extends Animal {
	eat() {}
}

let sub6: Dog = new Dog();
let sup5: Animal = sub6;
sub6 = sup6;

let sub7: string = '';
let sup7: string | number = sub7;

let sub8: { a: string; b: number } = { a: '', b: 1 };
let sup8: { a: string | number; b: number } = sub8;
sub8 = sup8;

let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub8;

class Person {}
class Developer extends Person {
	coding() {}
}
class StartDeveloper extends Developer {
	burning() {}
}

function tellMe(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellMe(function dToD(d: Developer): Developer {
	return new Developer();
});

//Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellMe(function pToD(d: Person): Developer {
	return new Developer();
});

// Developer => Developer 에다가 StartDeveloper => Developer 를 할당하는 경우
tellMe(function sToD(d: StartDeveloper): Developer {
	return new Developer();
});
