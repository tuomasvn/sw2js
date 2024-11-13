'use strict';
const particicount = prompt('How many participants?');
const participants = [];

for (let i = 0; i < particicount; i++){
	participants[i] = prompt('Enter name of participant');
}

participants.sort();

document.querySelector('#target').innerHTML += '<ol id="newtarget">';

for (let i = 0; i < participants.length; i++){
	document.querySelector('#newtarget').innerHTML += (`<li>${participants[i]}</li>`);
}