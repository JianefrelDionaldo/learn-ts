// * Literal (exact / specific) types
type Quantity = 50 | 100 | 200;
let quantuty: Quantity = 50;

type Metric = 'cm' | 'inch';
let scale: Metric = 'cm';

console.log(quantuty, scale); // 50 'cm'
