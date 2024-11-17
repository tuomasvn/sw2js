'use strict';
const button = document.querySelector('button');

function clicked(){
	alert('Button Clicked');
}

button.addEventListener('click', clicked);