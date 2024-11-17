'use strict';
const scarytext = document.querySelector('#trigger');
const theimage = document.querySelector('#target');

function start(){
	theimage.src = 'img/picB.jpg';
}

function stop(){
	theimage.src = 'img/picA.jpg';
}

scarytext.addEventListener('mouseenter', start);

scarytext.addEventListener('mouseleave', stop);
