"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  (root1, root2) = (-b ± sq(b2-4ac))/2
  
  let r1, r2;
  let a = prompt("Enter the first number: ");
  let b = prompt("Enter the second number: ");
  let c = prompt("Enter the third number: ");
  
  let d = b * b - 4 * a * c;
  
  if (d > 0) { r1 = (-b + Math.sqrt(d) )/(2*a); r2 = -b - Math.sqrt(d) )/(2*a);
  console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
  
  }
  else if (d == 0) { r1 = r2 = -b / (2 * a);
  console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
  else 
  console.log(`The Roots are Complex and Different`);
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
