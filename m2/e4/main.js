'use strict';
let notzero = true;
const numbers = [];

while (notzero) {
	let newnumber = prompt('Enter a number, or 0 to quit.');
	let newnumberint = parseInt(newnumber);
	if (newnumberint == 0){
		notzero = false;
	}
	else if (!isNaN(newnumberint)){
		numbers.push(newnumberint);
	}	
}
numbers.sort((a,b) => b-a);

for (let i in numbers){
	console.log(numbers[i]);
}