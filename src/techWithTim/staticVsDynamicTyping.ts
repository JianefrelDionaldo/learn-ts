// * Static typing vs Dynamic typing
// Key points about dynamic and static in TypeScript:

// Dynamic Typing (JavaScript-like)
// - No need to declare variable types explicitly.
// - Type checking happens at runtime.
// - Can be faster for prototyping due to less code to write.
// - More prone to runtime errors if type mismatch occur.

// Static Typing (TypeScript feature)
// - Reqiures explicity declaration of variable types using type annotations.
// - Type checking happens at compile time, catching errors early.
// - Improves codes readability and maintainability.
// - Can sometime feel more verbose due to the need for type annotations.

// Example of: Dynamic Typing (JavaScript)

let message1 = 'Hello';
// message1 = 10; // This would be allowed in JavaScript, but could cause issues later.
console.log(message1); // Prints: 10

// Example of: Static Typing (TypeScript)

let message2: string = 'Hello';
// message2 = 10; // This would cause a compile-time error because message is defined as a string.
console.log(message2);
