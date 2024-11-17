'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

for (let i = 0; i < students.length; i++){
	let id = students[i].id;
	let name = students[i].name;

	let optional = document.createElement('option');

	optional.value = id;
	optional.appendChild(document.createTextNode(name));

	target.appendChild(optional);
}