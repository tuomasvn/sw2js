'use strict';
function oneToWhatever(whatever){
	return Math.floor(Math.random()*whatever)+1;
}
let newresult = 0;
let count = 0;

const maxnum = parseInt(prompt('What is the maximum number on the die?'));

document.querySelector('#target').innerHTML += '<ul id="newtarget">';

if (!isNaN(maxnum)){
	while (newresult != maxnum){
		newresult = oneToWhatever(maxnum);
		count++;
		document.querySelector('#newtarget').innerHTML += `<li> ${newresult} </li>`;
	}
}