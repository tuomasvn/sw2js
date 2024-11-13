'use strict';
const thenumber = prompt('Prime checker: what number do we check?');

if (thenumber == 1){
	document.querySelector('#target').innerHTML = `1 is not prime!!!`;
} 
else {
	for (let i = 2; i<=thenumber; i++){
		if (thenumber % i == 0 && thenumber != i){
			document.querySelector('#target').innerHTML = `${thenumber} is not prime!!!`;
			break;
		}
		else {
			document.querySelector('#target').innerHTML = `${thenumber} is prime!!!`;
		}
	}
}