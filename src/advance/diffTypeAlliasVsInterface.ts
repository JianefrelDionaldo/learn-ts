// * Differences Between Type Aliases and Interfaces

/*
 * Type aliases and interfaces are very similar, and in many cases you can choose
 * between them freely. Almost all features of an "interface" are available in "type",
 * the key distinction is that you cannot be re-opened to add new properties vs interfaces
 * which is always extendable.
 */

// * Interface
// - Extendabing an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// const bear = getBear();
// bear.name;
// bear.honey;

// - Adding new field to an existing interface
interface Window {
  title: string;
}

// interface Window {
//   ts: TypeScriptAPI;
// }

// const src = 'const a = "Hello World"';
// window.ts.traspileModule(src, {});

// * Type Alias
// - Extending a type via intersections

type AnimalType = {
  name: string;
};

type BearType = Animal & { honey: boolean };
// const bear = getBear();
// bear.name;
// bear.honey;

// - A type cannot be changed after being created.
type WindowType = {
  title: string;
};

// type WindowType = {
//   ts: TypeScriptAPI;
// };

// Error: Duplicate identifier 'WindowType'
