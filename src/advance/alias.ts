// * Alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employees: Employee = { id: 1, name: 'Mosh', retire: (date: Date) => console.log('Retired on ' + date) };
