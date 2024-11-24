'use strict';
document.querySelector('form').addEventListener('submit', async function(event){
	event.preventDefault();
	document.querySelector('#results').innerHTML = ''; 	
	const value_from_input = document.querySelector('input[name=q]').value;

	try{
		const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
		if (!response.ok) throw new Error('oops');
		const thejson = await response.json();
		console.log(thejson);

		for (let part of thejson){
			let target = document.querySelector('#results');
			let show = part.show;
			let name = show.name;
			let link = show.url;
			let summary = show.summary;
			let imedium = show.image?.medium;
		
			let article = document.createElement('article');
		
			let nameh2 = document.createElement('h2');
			nameh2.appendChild(document.createTextNode(name));
			article.appendChild(nameh2);

			let artlink = document.createElement('a');
			artlink.href = link;
			artlink.target = '_blank';
			artlink.appendChild(document.createTextNode('Link to show'));
			article.appendChild(artlink);

			article.appendChild(document.createElement('br'));
		
			let artimg = document.createElement('img');
			artimg.src = imedium;
			artimg.alt = 'Image of TV show';
			article.appendChild(artimg);
		
			let artp = document.createElement('div');
			artp.innerHTML = summary;
			article.appendChild(artp);
		
			target.appendChild(article);

		}
		
	} catch (error){
		console.log(error.message);
	}
});

