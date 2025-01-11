// * Intersection Types

// Intersection types are used when we want to combine multiple types into one.

// INTERFACE's allowed us to build up new types from other types by extending them.
// TypeScript provides another construct called INTERSECTION TYPES that mainly used to combine existing object types.
// Ref: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

// let weight: number & string; // Intersection Type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // Intersection Type

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};
