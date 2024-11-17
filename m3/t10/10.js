'use strict';
document.querySelector('form').addEventListener('submit', function(event){
	event.preventDefault();
	let firstname = document.querySelector('input[name=firstname').value;
	let lastname = document.querySelector('input[name=lastname]').value;

	document.querySelector('#target').innerHTML = `Your name is ${firstname} ${lastname}`;
});