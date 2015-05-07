import {Component, Template, bootstrap,Foreach} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';
/* TypeScript annotations */
@Component({
    selector: 'todo-app',
    componentServices: [ // <== Array met dependencies
        TodoStore
    ]
})
@Template({
    url: 'templates/todo.html',
    directives: [Foreach]
})
    /* ES6 App / class constructor en methodes */
class TodoApp {

    // 1. local variables, of 'instance variable'
    todoStore:TodoStore;

    // 2. constructor
    constructor(todoStore:TodoStore) {
        this.todoStore = todoStore; //<== het IoC (inversion of Control)-principe. Laat Angular een instantie zoeken, maken en injecteren
    }

    // 3. Methods. Let op de dat het keyword 'function' niet meer bestaat.
    add($event, newtodo) {
        if ($event.which === 13) {
            this.todoStore.add(newtodo.value);
            newtodo.value = '';
        }
    }

    removeTodo(todo){
        this.todoStore.remove(todo);
    }

    toggleTodoState(todo) {
        todo.done = !todo.done;
    }

    credits() {
        alert('Copyright (C) 2015 - Peter Kassenaar, HTML Xprs');
    }

}

// 4. bootstrap in Angular2
bootstrap(TodoApp);