export {}
let message = "Welcome Back";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title= "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name : string = 'Vishwas';


let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Dimos', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Dimos';

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name:string}{
    return !!obj &&
    typeof obj === "object" &&
    "name"in obj
}
if(hasName(myVariable)) {
console.log(myVariable.name);
}

(myVariable as string).toUpperCase();

let a;
a=10;
a=true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;




