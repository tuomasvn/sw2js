'use strict';
const dogs = [];

for (let i = 0; i < 6; i++){
	dogs.push(prompt(`dog ${i+1}?`));
}

dogs.sort();
dogs.reverse();

document.querySelector('#target').innerHTML += '<ul id="newtarget">';

for (let i = 0; i < dogs.length; i++){
	document.querySelector('#newtarget').innerHTML += `<li> ${dogs[i]} </li>`;
}
