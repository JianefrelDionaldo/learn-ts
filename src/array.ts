// let numbers: number[] = [1, 2, 3, 4, 5];

let fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const addMango = fruits.push('mango'); 
const addOrange = fruits[fruits.length] = 'orange';

console.log(fruits); // [ 'apple', 'banana', 'cherry', 'date', 'elderberry', 'mango', 'orange' ]

// * ---

let flags: boolean[] = [true, false, true, false, true];

// * ---

let mixedArray: any[] = [1, 'two', true, 4.5, false]; // any[] - means a type that can hold any value, disabling type-checking
let user: [string, number, boolean] = ['John Doe', 30, true]; // Tuple - a fixed-length array with a specific type for each element
