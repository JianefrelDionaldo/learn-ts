// Function

function calculateTax(income: number, taxYear: number = 2022): number {
  // Always annotate your function parameters and return types
  if (taxYear < 2022) {
    return income * 1.2;
    // by default always returns undefined
  }
  return income * 1.3;
}

calculateTax(10_000);

// Optional by adding [ ? ] to the parameter
