// * Static property

// It TypeScript, you can use the "static" keyword to define static class members,
// including properties. A static property that is shared across all instances of a class.
// And it can be accessed without creating an instance of the class.

class Dog {
  static instanceCount: number = 0;
  name: string;

  constructor(name: string) {
    Dog.instanceCount++;
    this.name = name;
  }
}

const dog1 = new Dog('Buddy');
console.log(Dog.instanceCount); // Prints: 1
console.log(dog1.name, '\n'); // Prints: Buddy

const dog2 = new Dog('Oreo');
console.log(Dog.instanceCount); // Prints: 2
console.log(dog2.name); // Prints: Oreo
