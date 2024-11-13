'use strict';
const candidates = [];

const numcan = prompt('How many candidates?');

for (let i = 0; i < numcan; i++){
	let canname = prompt(`Name of candidate ${i+1}?`);
	let candidate = {
		'name': canname,
		'votes': 0,
	}
	candidates.push(candidate);
}

const numvot = prompt('How many voters?');

for (let i = 0; i < numvot; i++){
	let votnam = prompt(`Voter ${i+1}, who are you voting for? You can choose to not vote by submitting a blank response.`);
	let count = 0;
	if (votnam != ''){
		for (let thing of candidates){
			count++;
			if (thing.name == votnam){
				thing.votes++;
				count--;
				break;
			}
		}
		if (count == candidates.length){
			i--;
		}
	}
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes!`);

console.log('results:');

for (let thing of candidates){
	console.log(`${thing.name}: ${thing.votes} votes`);
}