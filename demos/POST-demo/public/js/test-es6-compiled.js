/**
 * Created by PeterKassenaar on 17/06/15.
 */
'use strict';

var msg = 'Hello Petr';
window.addEventListener('load', function (event) {
	for (var i = 0; i < 10; i++) {
		document.querySelector('.result').innerHTML += msg;
	}
}, false);

//# sourceMappingURL=test-es6-compiled.js.map