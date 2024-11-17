'use strict';
const target = document.querySelector('#target');

const newli = document.createElement('li');
const newli2 = document.createElement('li');
const newli3 = document.createElement('li');

const newtext1 = document.createTextNode('First item');
const newtext2 = document.createTextNode('Second item');
const newtext3 = document.createTextNode('Third item');

const one = newli;
const two = newli2;
const three = newli3;

one.appendChild(newtext1);
two.appendChild(newtext2);
three.appendChild(newtext3);

target.appendChild(one);
target.appendChild(two);
target.appendChild(three);

two.classList.add('my-item');