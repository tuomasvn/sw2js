'use strict';

function concat(array){
	let string = '';
	for (let thing of array){
		string += thing;
	}
	return string;
}
const words = ['Hello', ' ', 'this', ' ', 'is', ' ', 'text', ' ', 'and', ' ', 'some', ' ', 'spaces'];

const wordscombined = concat(words);

document.querySelector('#target').innerHTML = wordscombined;