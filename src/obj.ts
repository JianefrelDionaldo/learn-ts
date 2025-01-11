let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = { id: 1, name: 'Mosh', retire: (date: Date) => console.log('Retired on ' + date) };

// let employee: {
//   id: number;
//   name?: string;
// } = { id: 1 };
// employee.name = 'Mosh';

// Optional by adding [ ? ] to the parameter
// Ref: https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters

// Readonly - Construct a type with all properties on Type set to readonly, meaning the properties of the constructed type cannot be reassigned.  - Ref: https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
