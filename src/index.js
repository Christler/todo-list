import Todo from './modules/Todo.js'
import Project from './modules/Project.js'

const project1 = new Project("Test Project")
const todo = new Todo("Test")
project1.addTodo(todo)
console.log(project1.list)