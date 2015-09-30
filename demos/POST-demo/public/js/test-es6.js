/**
 * Created by PeterKassenaar on 17/06/15.
 */
'use strict';

const msg = 'Hello Petr';
window.addEventListener('load', (event) =>{
	for (let i = 0; i< 10; i++) {
		document.querySelector('.result').innerHTML += msg;
	}
}, false);
