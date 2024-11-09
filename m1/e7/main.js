"use strict";
function oneToSix(){
	return Math.floor(Math.random()*6)+1;
}
const amountStr = prompt("How many dice do we roll?");
const amountInt = parseInt(amountStr);
let total;
total = 0;
for (let i = 1; i<=amountInt; i++){
	total += parseInt(oneToSix());
}
document.querySelector("#target").innerHTML = `The total from ${amountStr} di(c)e is ${total}`;