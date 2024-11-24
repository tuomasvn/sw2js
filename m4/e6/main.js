'use strict';
document.querySelector('form').addEventListener('submit', async function(event){
	event.preventDefault();
	document.querySelector('#results').innerHTML = '';
	const value_from_input = document.querySelector('input[name=q]').value;
	try{
		const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
		if (!response.ok) throw new Error('something went wrong');
		const thejsonofthejoke = await response.json();
		for (let part of thejsonofthejoke.result){
			let target = document.querySelector('#results');
			let joke = part.value;
			let article = document.createElement('article');
		
			let text = document.createElement('p');
			text.appendChild(document.createTextNode(joke));
			article.appendChild(text);

			target.appendChild(article);

		}
	} catch (error){
		console.log(error.message);
	}
});
