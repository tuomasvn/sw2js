'use strict';
async function doThing(){
	try{
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		if (!response.ok) throw new error('something went wrong');
		const thejsonofthejoke = await response.json();
		console.log(thejsonofthejoke.value);
	} catch (error){
		console.log(error.message);
	}
} 
doThing();