export class TodoStore {
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
    }

    remove (item){
        let index = this.todoList.indexOf(item);
        if(index > -1){
            this.todoList.splice(index, 1);
        }
    }
}