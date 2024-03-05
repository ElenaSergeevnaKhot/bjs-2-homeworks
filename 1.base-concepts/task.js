"use strict";

function solveEquation(a, b, c) {
  let roots = [];

  let D = b ** 2 - 4 * a * c;
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    roots.push(x1);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots.push(x2);
  } else if (D === 0) {
    let x = -b / (2 * a);
    roots.push(x);
  }
  
  return roots;
}



"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  let percentMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment =
    creditBody *
    (percentMonth + percentMonth / ((1 + percentMonth) ** countMonths - 1));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 50000,12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24.));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));


