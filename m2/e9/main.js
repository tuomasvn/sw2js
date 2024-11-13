'use strict';

function even(array){
	const newarray = [];
	for (let thing of array){
		if (thing % 2 == 0){
			newarray.push(thing);
		}
	}
	return newarray;
}

const numbers = [1, 2, 3, 4, 9, 3, 2, 1];

const numbers2 = even(numbers);

console.log(numbers);
console.log(numbers2);