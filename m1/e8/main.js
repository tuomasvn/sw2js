'use strict';
const startyear = prompt('Starting year?');
const endyear = prompt('Ending year?');

document.querySelector('#target').innerHTML += '<ul id="newtarget">';
for (let i = startyear; i<=endyear; i++){
	if (i % 4 == 0) {
		if (i % 400 == 0) {
			document.querySelector('#newtarget').innerHTML += (`<li>${i}</li>`);
		} else if (i % 100 == 0) {
			
		} else {
			document.querySelector('#newtarget').innerHTML += (`<li>${i}</li>`);
		}
}
}
