'use strict';
const button = document.querySelector('#start');

function doCalculation(){
	let num1 = parseInt(document.querySelector('#num1').value);
	let num2 = parseInt(document.querySelector('#num2').value);

	let operation = document.querySelector('#operation').value;

	console.log(operation);

	switch (operation) {
		case 'add':
			document.querySelector('#result').innerHTML = num1 + num2;
			break;
		case 'sub':
			document.querySelector('#result').innerHTML = num1 - num2;
			break;
		case 'multi':
			document.querySelector('#result').innerHTML = num1 * num2;
			break;
		case 'div':
			document.querySelector('#result').innerHTML = num1 / num2;
			break;
	}

}

button.addEventListener('click', doCalculation);