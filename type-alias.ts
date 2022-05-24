type MyStringType = string;
const str = 'world';
let myStr: MyStringType = 'hello';
myStr = str;

let person: string | number = 0;
person = 'name';
type StingOfNumber = string | number;
let another: StingOfNumber = 0;
another = 'sdd';

let person2: [string, number] = ['mam', 34];
type PersonTuple = [string, number];
let another2: PersonTuple = ['dd', 22];

type EatType = (food: string) => void;
