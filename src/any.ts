// ANY - means a type that can hold any value, disabling type-checking

let anyData; // type: any

let data: any = 5;
data = 'Hello, TypeScript!';

// * ---

let nickname: any = 'Dwyane';
nickname = 3.47;

console.log(typeof nickname)  // number - because the last value assigned to the variable is a number