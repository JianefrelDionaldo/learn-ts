// * Union Types

// Union types are used when we want to work with multiple types of values.

function kgToLbs(weight: number | string): number {
  // Narrowing the type
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
