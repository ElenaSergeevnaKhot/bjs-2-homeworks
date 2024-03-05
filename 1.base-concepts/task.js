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
let percent = 10;
let contribution = 0;
let amount = 50000;
let countMonths = 12;
console.log(totalAmount);
