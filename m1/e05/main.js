'use strict';
const yearst = prompt('What year are you inquiring about?');
const year = parseInt(yearst);
let answer;

if (year % 4 == 0) {
	if (year % 400 == 0) {
		answer = '';
	} else if (year % 100 == 0) {
		answer = 'not';
	} else {
		answer = '';
	}
} else {
	answer = 'not';
}

document.querySelector('#target').innerHTML = `${yearst} is ${answer} a leap year!`;