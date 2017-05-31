// Uit de playground:
// http://www.typescriptlang.org/play/index.html

class Pensioen {
    // property met typering
    geld : number;
    constructor() {
        this.geld = 'veel'; // error, want 'veel' is geen number
    }
    getPensioen() {
        return this.geld;
    }
}
// Arrow functions (officieel afkomstig uit ES6)
// 'traditionele notatie'
let logger = function logMessage(msg) {
    console.log (msg)
};

// ;nieuwe notatie met arrow function
let logger2 = (msg)=> {
    console.log(msg)
};
logger2('Hello logger 2');

// Voorbeeld van de starter kit:
// https://www.npmjs.com/package/angular-ts-starter-kit