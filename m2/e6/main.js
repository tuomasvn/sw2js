'use strict';
function oneToSix(){
	return Math.floor(Math.random()*6)+1;
}
let newresult = 0;
document.querySelector('#target').innerHTML += '<ul id="newtarget">';

while (newresult != 6){
	newresult = oneToSix();
	document.querySelector('#newtarget').innerHTML += `<li> ${newresult} </li>`;
}