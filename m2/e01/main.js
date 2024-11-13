'use strict';
const numbers = [];

for (let i = 0; i <= 4; i++){
	numbers[i] = prompt(`Number ${i + 1}?`);
}

for (let i = 4; i >= 0; i--){
	console.log(numbers[i]);
}
