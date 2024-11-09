'use strict';
const action = confirm('Should I calculate the square root?');
if (action){
	const theString = prompt('What number should we square?');
	const theNumber = parseInt(theString);

	if (theNumber >= 0){
		const theSquare = Math.sqrt(theNumber);
		document.querySelector('#target').innerHTML = 'The square root is ' + theSquare;
	}
	else{
		document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.';
	}

}
else{
	document.querySelector('#target').innerHTML = 'The square root is not calculated.';
}