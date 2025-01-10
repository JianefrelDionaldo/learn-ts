// TypeScript - Programming with Most - https://youtu.be/d56mG7DezGs?si=dbXhj_uWr2wdXhP5

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level; // type: any

/*

function render(doc) { // Parameter 'doc' (document) implicity has an 'any' type
  console.log(doc);
}

*/

// Implicitly - means we haven't explicitly defined the type of the parameter
// Thus, the compiler inferring or guessing the type of the parameter