'use strict';
function oneToSix(){
	return Math.floor((Math.random()*6)+1);
}

function getPercent(input){
	let thepercent;
	thepercent = (input / 10000) * 100;
	return thepercent.toFixed(2);
}

let thesum = 0;
let hits = 0;

const dice = prompt('How many dice to roll?');
const total = prompt('What sum are you interested in?');

for (let i = 1; i<=10000; i++){
	thesum = 0;
	for (let j = 1; j<=dice; j++){
		thesum += oneToSix();
	}
	if (thesum == total){
		hits++;
	}
}

document.querySelector('#target').innerHTML = `Probability to get sum ${total} with ${dice} dice is ${getPercent(hits)}%`;