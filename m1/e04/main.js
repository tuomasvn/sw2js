'use strict';
function zeroToThree(){
	return Math.floor(Math.random()*4);
}

let selected;

const selection = zeroToThree();

console.log(selection);

switch (selection){
	case 0:
		selected = 'Gryffindor';
		break;
	case 1:
		selected = 'Slytherin';
		break;
	case 2:
		selected = 'Hufflepuff';
		break;
	case 3:
		selected = 'Ravenclaw';
		break;	
}

const name = prompt('What is your name?');

document.querySelector('#target').innerHTML = `${name}, you are a ${selected}`;