function greet(name: string | null | undefined) {
  // We can if we set undefine as union type in the parameter
  if (name) console.log(`Hello my name is ${name.toUpperCase()}`);
  else console.log('Hola!');
}

greet(undefined);
