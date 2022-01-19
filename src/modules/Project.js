export default class Project{

    constructor(name){
        this.name = name
        this.list = []
    }

    addTodo(todo){
        this.list.push(todo)
    }
}