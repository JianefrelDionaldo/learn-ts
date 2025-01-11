// ENUMS
/*
    Enumerations allow a developer to define a set of named constants.
    Using enums can make it easier to document intent, or create a set of distinct cases.
*/

// const small: number = 1;
// const medium: number = 2;
// const large: number = 3;

// PascalCase
enum Size { Small = 1, Medium = 2, Large = 3 }; 
let size: Size = Size.Medium;

console.log(size); // 2