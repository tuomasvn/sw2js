'use strict';
const button = document.querySelector('#start');
let sign = '';
let calcresult = 0;

function doCalculation() {
	let thething = document.querySelector('#calculation').value;

	if (thething.includes('+')){
		sign = '+';
	}
	if (thething.includes('-')){
		sign = '-';
	}
	if (thething.includes('*')){
		sign = '*';
	}
	if (thething.includes('/')){
		sign = '/';
	}

	let thethingsplit = thething.split(sign);

	if (thethingsplit.length == 2){
		let num1 = parseInt(thethingsplit[0]);
		let num2 = parseInt(thethingsplit[1]);

		switch (sign) {
			case '+':
				calcresult = num1 + num2;
				break;
			case '-':
				calcresult = num1 - num2;
				break;
			case '*':
				calcresult = num1 * num2;
				break;
			case '/':
				calcresult = num1 / num2;
				break;
		}
	}
	document.querySelector('#result').innerHTML = calcresult;
}

button.addEventListener('click', doCalculation);