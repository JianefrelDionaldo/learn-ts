//* Generic

// Generic types are used when we want to create a component that can work over a variety
// of types rather than a single one. This allows users to consume these components and use their own types.

// Learning Reference: https://www.typescriptlang.org/docs/handbook/2/generics.html

// Without generics, we would either have to give identity function a specific type:

function identity(arg: number): number {
  return arg;
}

// Or, we could describe the identity function using the "any" type:

function identifyAny(arg: any): any {
  return arg;
}

/*
 * While using "any" is certainly generic in that it will cause the function to accept any and all types
 * for the type of arg, we actually are losing the information about what that type was when the function returns.
 * If we passed in a number, the only information we have is that any type could be returned.
 *
 * Instead, we need a way of capturing the type of the argument in such a way that we can also use
 * it to denote what is being returned.
 */

// Here, we will use a "type" variable, a special kind of variable that works on types rather than values.

function identityType<Type>(arg: Type): Type {
  return arg;
}

/*
 * Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than ().
 *
 * The second way is also perhaps the most common. Here we use type argument inference — that is,
 * we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:
 */

let output = identityType('myString');

// Notice that we didn’t have to explicitly pass the type in the angle brackets (<>);
// the compiler just looked at the value "myString", and set Type to its type.

// todo: What if we want to also log the length of the argument arg to the console with each call?
// * We might be tempted to write this:

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

// We can alternatively write the sample example this way:

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
