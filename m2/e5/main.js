'use strict';
const numbers = [];
let unique = true;

while (unique){
	let newnumber = prompt('Enter a number');

	if (!isNaN(newnumber) && newnumber != ''){
		if (!numbers.includes(newnumber)){
			numbers.push(newnumber);
		}
		else{
			unique = false;
			alert('YOU ALREADY ENTERED THIS NUMBER!');
		}
	}
}

numbers.sort((a,b) => a-b);

for (let i in numbers){
	console.log(numbers[i]);
}