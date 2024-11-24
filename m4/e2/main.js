'use strict';
document.querySelector('form').addEventListener('submit', async function(event){
	event.preventDefault();
	const value_from_input = document.querySelector('input[name=q]').value;

	try{
		const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
		if (!response.ok) throw new Error('oops');
		const thejson = await response.json();
		console.log(thejson);
	} catch (error){
		console.log(error.message);
	}
});