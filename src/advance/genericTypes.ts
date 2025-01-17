// Generic Types - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types

// Generic types are used when we want to create a component that can work over a variety

// In this section, we'll explore the type of the function themselves,
// and how to create generic interfaces

// The type of generic functions is just like those of non-generic functions,
// with the type parameters listed first, similarly to function declarations:

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;

// We can also write generic types as a call signature of an object literal type:
function identityChech<T>(arg: T): T {
  return arg;
}

let myIdentityCheck: { <T>(arg: T): T } = identityChech;

// Which leads us to writing our first generic interface.
// Let’s take the object literal from the previous example and move it to an interface:

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identityFn<T>(arg: T): T {
  return arg;
}

let myIdentityFn: GenericIdentityFn = identityFn;

// In a similar example, we may want to move the generic parameter to be parameter of the whole inteface.
// This lets us see that type(s) we're generic over (e.g. Dictionary<string>) rather than just Dictionary).
// This makes the type parameter visible to all the other members of the interface.

interface GenericIdentityFn2<T> {
  (arg: T): T;
}

function identityFn2<T>(arg: T): T {
  return arg;
}

let myIdentityFn2: GenericIdentityFn2<number> = identityFn2;
// Notice that other has changed to be something slightly different.
// different. Instead of describing a generic function, we now have a non-generic
// function signature that is a part of a generic type. When we use GenericIdentityFn,
// we now will also need to specify the corresponding type argument (here: number),
// effectively locking in what the underlying call signature will use.
// Understanding when to put the type parameter directly on the call signature and when to
// put it on the interface itself will be helpful in describing what aspects of a type are generic.
