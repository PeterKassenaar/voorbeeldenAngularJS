import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'pk-app'
})
@Template({
    inline: '<h1>Hello {{ name }}</h1>'
    //url : 'myTemplate.html'
})
// Component controller
class MyAppComponent {
    constructor() {
        this.name = 'Peter';
        this.hidden = false;
    }

    // ES6 - function notation
    clickMe() {
        alert('Hello Peter')
    }

    setHidden() {
        this.hidden = !this.hidden
    }
}

bootstrap(MyAppComponent);