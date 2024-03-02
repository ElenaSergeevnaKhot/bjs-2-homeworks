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
