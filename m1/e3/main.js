'use strict';
const n1s = prompt('number 1');
const n2s = prompt('number 2');
const n3s = prompt('number 3');

const n1 = parseInt(n1s);
const n2 = parseInt(n2s);
const n3 = parseInt(n3s);

const sum = n1 + n2 + n3;
const pct = n1 * n2 * n3;
const avg = (n1 * n2 * n3)/3;

console.log(sum, pct, avg);

document.querySelector('#target').innerHTML = 'Sum: ' + sum + ' Product: ' + pct + ' Average: ' + avg;