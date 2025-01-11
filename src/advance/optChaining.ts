// Optional Chaning

// Optional Chaining is a feature that allows you to access deeply nested object
// properties without worrying if the property exists or not.
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator
console.log(customer?.birthday?.getFullYear()); // undefined

// Optional Element access operator - It is useful if you are dealing with arrays
// custoemer?.[0]

// Optional Call operator - It is useful if you are dealing with functions
let log: any = () => null;
log?.('a'); // undefined
